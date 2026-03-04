# Plan de Implementación Real — Centro de Mando v2.0

> De datos mock a datos en vivo. 4 fases, 12 semanas, ~€5.000 de presupuesto.

---

## Estado Actual (v1.1)

- ✅ App desplegada en Vercel con 9 módulos
- ✅ Tema dark premium, glassmorphism, Recharts
- ✅ 100% en español
- ⚠️ Todo funciona con datos simulados (mock data)
- ⚠️ 22% de métricas validadas

---

## Fase 1 — Infraestructura Base (Semanas 1-2)

### Objetivo

Tener tienda operativa y herramientas de medición activadas.

### Tareas

| # | Tarea | Herramienta | Coste | Estado |
|---|-------|-------------|-------|--------|
| 1.1 | Registrar empresa (autónomo o SL) | — | €0-300 | Pendiente |
| 1.2 | Comprar dominio + configurar Shopify | Shopify | €36/mes | Pendiente |
| 1.3 | Obtener Shopify Admin API Key | Shopify Partners | €0 | Pendiente |
| 1.4 | Crear Meta Business Manager + Pixel | Meta Business Suite | €0 | Pendiente |
| 1.5 | Abrir cuenta CJ Dropshipping | CJ | €0 | Pendiente |
| 1.6 | Crear proyecto Supabase (backend) | Supabase | €0 (free tier) | Pendiente |
| 1.7 | Pedir 3-5 muestras de proveedores top | CJ/Alibaba | €30-50 | Pendiente |
| 1.8 | Identidad de marca (logo, colores, tipografía) | Canva/Figma | €0-100 | Pendiente |

### Integraciones de la App

```
Centro de Mando ←→ Supabase (PostgreSQL)
                ←→ Shopify Admin API (productos, pedidos, ingresos)
                ←→ Meta Marketing API (campañas, CPA, ROAS)
```

### Arquitectura Backend

```
┌─────────────────────────────────┐
│        Centro de Mando          │
│        (React + Vite)           │
│    [Vercel - Frontend]          │
└────────────┬────────────────────┘
             │ API calls
┌────────────▼────────────────────┐
│   Supabase Edge Functions       │
│   - /api/shopify → KPIs        │
│   - /api/meta → Ads metrics    │
│   - /api/inventory → Stock     │
│   - /api/decisions → Rules     │
│   [Supabase - Backend]          │
└────────────┬────────────────────┘
             │ Cron jobs + webhooks
┌────────────▼────────────────────┐
│   APIs Externas                 │
│  Shopify │ Meta │ CJ │ Klaviyo │
└─────────────────────────────────┘
```

---

## Fase 2 — Pipeline de Datos (Semanas 3-4)

### Objetivo

KPIs reales fluyendo al Centro de Mando desde Shopify y Meta Ads.

### Integraciones

| API | Datos que aporta | Módulos que alimenta |
|-----|-----------------|---------------------|
| **Shopify Admin API** | Pedidos, ingresos, AOV, productos, inventario | Dashboard, Métricas, Inventario |
| **Shopify Analytics API** | CVR, sesiones, fuentes de tráfico | Métricas, Validación |
| **Meta Marketing API** | CPA, CPM, CTR, ROAS, spend, impresiones | Dashboard, Métricas, Motor de Decisiones |
| **Klaviyo API** | Open rate, click rate, flujos activos, suscriptores | Métricas, Store Connector |

### Edge Functions necesarias

```javascript
// Ejemplo: /api/shopify-kpis
// Ejecutar cada 15 minutos vía cron
export async function GET() {
  const orders = await shopify.orders.list({ created_at_min: today() })
  return {
    revenue: orders.reduce((sum, o) => sum + o.total_price, 0),
    orders: orders.length,
    aov: revenue / orders.length,
    // → INSERT INTO kpi_snapshots
  }
}
```

### Tabla de base de datos

```sql
CREATE TABLE kpi_snapshots (
  id SERIAL PRIMARY KEY,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  revenue DECIMAL,
  orders INTEGER,
  aov DECIMAL,
  cac DECIMAL,
  roas DECIMAL,
  cm2_pct DECIMAL,
  return_rate DECIMAL,
  source TEXT -- 'shopify', 'meta', 'manual'
);
```

### Presupuesto Fase 2

- Shopify Basic: €36/mes
- Meta Ads (testing): €25/día = €750/mes
- Klaviyo: €0 (hasta 250 contactos)
- **Total: ~€786/mes**

---

## Fase 3 — Automatización (Semanas 5-8)

### Objetivo

Motor de Decisiones activo. Las 14 reglas se ejecutan automáticamente.

### Motor de Decisiones → Acciones Reales

| Regla | Trigger | Acción automatizada |
|-------|---------|-------------------|
| ADS_PAUSE_CPA | CPA > €15 (48h) | Meta API: `campaign.update({ status: 'PAUSED' })` |
| ADS_SCALE_ROAS | ROAS > 3.5x (72h) | Meta API: `adset.update({ daily_budget: +20% })` |
| SKU_KILL | CM2 < 0 (14d) | Shopify API: `product.update({ status: 'draft' })` |
| STOCK_REORDER | stock < lead_time | CJ API: `order.create({ items: [...] })` |
| LOYALTY_TRIGGER | 2ª compra < 30d | Klaviyo API: `profile.addToList('vip')` |

### Alertas

```
Motor de Decisiones
    → Telegram Bot API (alertas instantáneas)
    → Email (resumen diario)
    → WhatsApp Business API (alertas críticas)
```

### Cron Jobs

```
Cada 15 min  → Actualizar KPIs de Shopify
Cada 1 hora  → Verificar reglas del Motor de Decisiones  
Cada 6 horas → Sincronizar inventario CJ
Cada 24h     → Informe diario + verificar Go/No-Go gates
```

---

## Fase 4 — Escalar (Semanas 9-12)

### Objetivo

Múltiples canales activos, stock en 3PL europeo.

### Nuevas integraciones

| Canal | API | Cuando activar |
|-------|-----|---------------|
| **TikTok Shop** | TikTok Shop Open API | Cuando stock UE disponible |
| **Amazon** | SP-API (Seller) | Tras Brand Registry aprobado |
| **Huboo 3PL** | Huboo API / Webhook | Día 30+ (tras validar top SKUs) |

### Presupuesto total (mes 3)

| Concepto | Coste/mes |
|----------|-----------|
| Shopify | €36 |
| Meta Ads | €1.500 |
| Huboo (pick+pack) | ~€250 |
| Klaviyo | €45 |
| Supabase | €0-25 |
| Dominio + apps | €30 |
| **Total** | **~€1.886/mes** |

---

## Puertas Go/No-Go (Checkpoints de Decisión)

| Puerta | Día | Criterio mínimo | Si falla → |
|--------|-----|-----------------|------------|
| **1** | 14 | CAC < €15, ≥15 pedidos | Pausar ads, cambiar creativos |
| **2** | 30 | Devoluciones < 15%, sin chargebacks >0.5% | Cambiar proveedor/producto |
| **3** | 60 | Revenue > €5K/mes, CM2 > 10% | Evaluar pivot de nicho |
| **4** | 90 | Revenue > €10K/mes, top SKUs en 3PL | Decidir: escalar o pivotar |

---

## Prioridad de Implementación del Código

```
Semana 1  │ Supabase project + schema + Edge Functions base
Semana 2  │ Shopify API integration → KPIs reales
Semana 3  │ Meta API integration → Métricas de ads
Semana 4  │ Dashboard conectado a datos reales
Semana 5  │ Decision Engine activo (2 reglas críticas)
Semana 6  │ Alertas Telegram + cron jobs
Semana 7  │ Klaviyo + email flows
Semana 8  │ Todas las 14 reglas activas
Semana 9  │ Huboo API
Semana 10 │ TikTok Shop API
Semana 11 │ Amazon SP-API
Semana 12 │ Multi-geo (FR/PT) + review completa
```
