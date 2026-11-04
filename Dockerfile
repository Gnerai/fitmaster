# Imagen de producción para Coolify (gnerai-apps-fra1). Rama servidor-2026-10-31.
# Construye con npm ci + next build y arranca con next start como usuario sin privilegios.
FROM node:22.23.4-bookworm-slim AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY package.json package-lock.json* .npmrc* ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build && npm prune --omit=dev --no-audit --no-fund && rm -rf .next/cache

FROM node:22.23.4-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 PORT=3000 HOSTNAME=0.0.0.0
COPY --from=build --chown=node:node /app ./
USER node
EXPOSE 3000
CMD ["node", "node_modules/next/dist/bin/next", "start", "-p", "3000"]
