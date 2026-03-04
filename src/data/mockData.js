// Datos mock para todos los módulos — Traducido a Español
export const studyFiles = [
    { id: 'manifest', name: 'PROJECT_MANIFEST.md', agent: 'Setup', icon: '📋', size: '2.2 KB', version: 'V5', tags: ['manifiesto', 'arquitectura'] },
    { id: 'agent1-main', name: '01_macro_market_report.md', agent: 'Agente 1', icon: '🌍', size: '12.4 KB', version: 'V5', tags: ['PESTLE', 'Porter', 'mercado'] },
    { id: 'agent1-sub', name: '01_subagents_regulation_policies_competitors_geo.md', agent: 'Agente 1', icon: '⚖️', size: '18.6 KB', version: 'V5', tags: ['regulación', 'cumplimiento', 'competidores'] },
    { id: 'agent2', name: '02_niche_product_report.md', agent: 'Agente 2', icon: '🔬', size: '28.1 KB', version: 'V5', tags: ['nichos', 'productos', 'scoring'] },
    { id: 'agent3', name: '03_supply_chain_plan.md', agent: 'Agente 3', icon: '📦', size: '22.3 KB', version: 'V5', tags: ['proveedores', '3PL', 'logística'] },
    { id: 'agent4', name: '04_channel_playbooks.md', agent: 'Agente 4', icon: '📢', size: '24.7 KB', version: 'V5', tags: ['Shopify', 'TikTok', 'Amazon', 'WhatsApp'] },
    { id: 'agent5', name: '05_financial_viability.md', agent: 'Agente 5', icon: '💰', size: '19.8 KB', version: 'V5', tags: ['finanzas', 'unit-economics', 'escenarios'] },
    { id: 'agent6', name: '06_ai_ops_architecture.md', agent: 'Agente 6', icon: '🤖', size: '31.2 KB', version: 'V5', tags: ['IA', 'automatización', 'agentes', 'Motor de Decisiones'] },
    { id: 'final', name: 'FINAL_MASTER_REPORT.md', agent: 'Todos', icon: '📊', size: '15.4 KB', version: 'V5', tags: ['resumen', 'roadmap', 'sheets'] },
];

export const kpiData = {
    revenue: { value: '€0', change: null, label: 'Ingresos (Hoy)', status: 'neutral' },
    orders: { value: '0', change: null, label: 'Pedidos (Hoy)', status: 'neutral' },
    aov: { value: '€34.90', change: null, label: 'AOV Objetivo', status: 'neutral' },
    cac: { value: '€10-12', change: null, label: 'CAC Objetivo', status: 'neutral' },
    roas: { value: '2.5x', change: null, label: 'ROAS Objetivo', status: 'neutral' },
    cm2: { value: '12.5%', change: null, label: 'CM2 Objetivo', status: 'neutral' },
    returnRate: { value: '<10%', change: null, label: 'Devoluciones Obj.', status: 'neutral' },
    ltvCac: { value: '4.6x', change: null, label: 'LTV:CAC Objetivo', status: 'neutral' },
};

export const scenarioData = [
    { day: 0, pessimistic: 0, base: 0, optimistic: 0 },
    { day: 7, pessimistic: 245, base: 490, optimistic: 735 },
    { day: 14, pessimistic: 490, base: 1047, optimistic: 1570 },
    { day: 21, pessimistic: 735, base: 1570, optimistic: 2355 },
    { day: 30, pessimistic: 1047, base: 2094, optimistic: 3141 },
    { day: 37, pessimistic: 1222, base: 2618, optimistic: 4188 },
    { day: 44, pessimistic: 1396, base: 3492, optimistic: 5584 },
    { day: 51, pessimistic: 1571, base: 4365, optimistic: 6980 },
    { day: 60, pessimistic: 1745, base: 5235, optimistic: 8376 },
    { day: 67, pessimistic: 1920, base: 6282, optimistic: 10465 },
    { day: 74, pessimistic: 2094, base: 7853, optimistic: 13082 },
    { day: 81, pessimistic: 2269, base: 9411, optimistic: 16352 },
    { day: 90, pessimistic: 2618, base: 11940, optimistic: 20940 },
];

export const channelMixData = [
    { name: 'Shopify DTC', value: 65, color: '#96bf48' },
    { name: 'TikTok Shop', value: 20, color: '#6366f1' },
    { name: 'Amazon', value: 10, color: '#ff9900' },
    { name: 'WhatsApp', value: 5, color: '#25d366' },
];

export const agents = [
    {
        id: 1, name: 'Director de Inteligencia de Mercado', icon: '🌍', color: '#3b82f6',
        status: 'completado', outputs: 2, subagents: 4,
        description: 'PESTLE, Porter, TAM/SOM, matriz de riesgos, vigilancia regulatoria',
        lastRun: '4 Mar 2026, 12:18', health: 'green',
        metrics: { hechos: 12, supuestos: 5, incógnitas: 3 }
    },
    {
        id: 2, name: 'Investigación de Nichos y Productos', icon: '🔬', color: '#8b5cf6',
        status: 'completado', outputs: 1, subagents: 4,
        description: '100 nichos puntuados, 50 productos, tendencias, cumplimiento, micro-clusters',
        lastRun: '4 Mar 2026, 12:22', health: 'green',
        metrics: { nichos: 100, topTier: 20, bundles: 75 }
    },
    {
        id: 3, name: 'Arquitecto de Cadena de Suministro', icon: '📦', color: '#10b981',
        status: 'completado', outputs: 1, subagents: 4,
        description: '23+ proveedores, 10 3PLs, plan de migración, control de calidad, torre de control',
        lastRun: '4 Mar 2026, 13:45', health: 'green',
        metrics: { proveedores: 23, operadores3PL: 10, skusCubiertos: 50 }
    },
    {
        id: 4, name: 'Estratega de Canales y GTM', icon: '📢', color: '#f59e0b',
        status: 'completado', outputs: 1, subagents: 3,
        description: 'Shopify, TikTok, Amazon, WhatsApp playbooks + CRO + PIM',
        lastRun: '4 Mar 2026, 13:52', health: 'green',
        metrics: { canales: 4, flujosEmail: 7, ofertas: 10 }
    },
    {
        id: 5, name: 'Modelador Financiero y Viabilidad', icon: '💰', color: '#ef4444',
        status: 'completado', outputs: 1, subagents: 3,
        description: 'Unit economics, 3 escenarios, LTV, pricing, matriz de riesgos, puertas Go/No-Go',
        lastRun: '4 Mar 2026, 14:01', health: 'yellow',
        metrics: { validado: '22%', escenarios: 3, puertas: 4 }
    },
    {
        id: 6, name: 'Director de Operaciones IA', icon: '🤖', color: '#d4a853',
        status: 'completado', outputs: 1, subagents: 4,
        description: 'Agentes IA, chatbot, WhatsApp, voz, CEO virtual, Motor de Decisiones, sistemas V5',
        lastRun: '4 Mar 2026, 14:08', health: 'green',
        metrics: { agentesDiseñados: 15, reglas: 14, esquemas: 12 }
    },
];

export const decisionRules = [
    { id: 'ADS_PAUSE_CPA', trigger: 'CPA del adset > €15 durante >48h', action: 'PAUSAR adset', severity: 'HIGH', status: 'espera', lastTriggered: 'Nunca' },
    { id: 'ADS_SCALE_ROAS', trigger: 'ROAS campaña > 3.5x durante >72h', action: 'AUMENTAR presupuesto 20%', severity: 'MEDIUM', status: 'espera', lastTriggered: 'Nunca' },
    { id: 'ADS_FATIGUE', trigger: 'Frecuencia creativo > 2.5 Y CTR cayó >30%', action: 'ROTAR creativo', severity: 'MEDIUM', status: 'espera', lastTriggered: 'Nunca' },
    { id: 'SKU_KILL', trigger: 'CM2 del SKU < 0 durante >14 días O devoluciones > 25%', action: 'RETIRAR del catálogo', severity: 'HIGH', status: 'espera', lastTriggered: 'Nunca' },
    { id: 'SKU_HERO', trigger: 'CM2 del SKU > 20% Y velocidad > 3/día durante >7d', action: 'ESCALAR presupuesto + pedir 200 uds', severity: 'MEDIUM', status: 'espera', lastTriggered: 'Nunca' },
    { id: 'SKU_TO_3PL', trigger: 'Velocidad SKU > 2/día durante >14d Y en dropship', action: 'PEDIR bulk a Huboo', severity: 'MEDIUM', status: 'espera', lastTriggered: 'Nunca' },
    { id: 'PRICE_INCREASE', trigger: 'CM2 del SKU > 30% Y CVR estable >2%', action: 'PROBAR precio +€5', severity: 'LOW', status: 'espera', lastTriggered: 'Nunca' },
    { id: 'GEO_EXPAND', trigger: 'Ingresos España > €10K/mes Y CM2 > 12%', action: 'ACTIVAR FR/PT', severity: 'MEDIUM', status: 'espera', lastTriggered: 'Nunca' },
    { id: 'OPS_CS_OVERLOAD', trigger: 'Tickets sin resolver > 20 Y FRT medio > 4h', action: 'Activar chatbot top intents', severity: 'HIGH', status: 'espera', lastTriggered: 'Nunca' },
    { id: 'OPS_CHARGEBACK', trigger: 'Tasa de chargebacks > 0.8%', action: 'PAUSAR cross-border + investigar', severity: 'CRITICAL', status: 'espera', lastTriggered: 'Nunca' },
    { id: 'STOCK_REORDER', trigger: 'Días de stock < lead time + seguridad', action: 'REPONER', severity: 'HIGH', status: 'espera', lastTriggered: 'Nunca' },
    { id: 'STOCK_LIQUIDATE', trigger: 'Stock > 90 días Y velocidad < 0.3/día', action: 'Flash sale -40%', severity: 'MEDIUM', status: 'espera', lastTriggered: 'Nunca' },
    { id: 'LOYALTY_TRIGGER', trigger: 'Cliente con 2ª compra en <30 días', action: 'Enviar cupón VIP -15% + email personalizado', severity: 'LOW', status: 'espera', lastTriggered: 'Nunca' },
    { id: 'GATE_FAIL_ABORT', trigger: 'Puerta Go/No-Go fallida en 2+ métricas', action: 'PAUSAR todas las campañas + revisión manual', severity: 'CRITICAL', status: 'espera', lastTriggered: 'Nunca' },
];

export const inventoryData = [
    { sku: 'GJ-SET-001', name: 'Set Collar + Pendientes Oro', stock: 0, warehouse: '—', velocity: 0, daysLeft: '—', status: 'pre-lanzamiento', supplier: 'CJDropshipping', reorderQty: 50 },
    { sku: 'GJ-EAR-002', name: 'Pendientes Statement Colgantes', stock: 0, warehouse: '—', velocity: 0, daysLeft: '—', status: 'pre-lanzamiento', supplier: 'CJDropshipping', reorderQty: 50 },
    { sku: 'GJ-NCK-003', name: 'Set Collares en Capas', stock: 0, warehouse: '—', velocity: 0, daysLeft: '—', status: 'pre-lanzamiento', supplier: 'CJDropshipping', reorderQty: 50 },
    { sku: 'GJ-HCL-004', name: 'Pack Pinzas de Pelo Perla', stock: 0, warehouse: '—', velocity: 0, daysLeft: '—', status: 'pre-lanzamiento', supplier: 'CJDropshipping', reorderQty: 100 },
    { sku: 'GA-SNG-005', name: 'Gafas de Sol XL Cat Eye', stock: 0, warehouse: '—', velocity: 0, daysLeft: '—', status: 'pre-lanzamiento', supplier: 'CJDropshipping', reorderQty: 50 },
    { sku: 'GC-CRD-006', name: 'Conjunto Lino Oficina', stock: 0, warehouse: '—', velocity: 0, daysLeft: '—', status: 'pre-lanzamiento', supplier: 'Alibaba Fábrica #2', reorderQty: 30 },
    { sku: 'GA-SCR-007', name: 'Pañuelo Seda 90cm Estampado', stock: 0, warehouse: '—', velocity: 0, daysLeft: '—', status: 'pre-lanzamiento', supplier: 'Alibaba Fábrica #4', reorderQty: 50 },
    { sku: 'GJ-HUG-008', name: 'Pendientes Huggie Aro', stock: 0, warehouse: '—', velocity: 0, daysLeft: '—', status: 'pre-lanzamiento', supplier: 'CJDropshipping', reorderQty: 100 },
];

export const goNoGoGates = [
    { gate: 'Puerta 1', day: 14, title: '¿Podemos adquirir clientes de forma rentable?', checks: ['CAC < €15', '≥15 pedidos realizados'], status: 'pendiente', target: 'Día 14' },
    { gate: 'Puerta 2', day: 30, title: '¿Los clientes se quedan con lo que compran?', checks: ['Tasa devoluciones < 15%', 'Sin chargebacks >0.5%', '≥1 reseña >4★'], status: 'pendiente', target: 'Día 30' },
    { gate: 'Puerta 3', day: 60, title: '¿Podemos sostener el crecimiento?', checks: ['Ingresos > €5.000/mes', 'CM2 > 10%', '≥5 SKUs validados'], status: 'pendiente', target: 'Día 60' },
    { gate: 'Puerta 4', day: 90, title: '¿Debemos expandirnos?', checks: ['Ingresos > €10.000/mes', 'CM2 > 12%', 'Top SKUs en 3PL UE', 'TikTok Shop activo'], status: 'pendiente', target: 'Día 90' },
];

export const validationStatus = {
    validated: 5,
    partial: 8,
    assumed: 10,
    total: 23,
    percentage: 22,
};

export const roadmapData = [
    { phase: 'Configuración', weeks: '1-2', tasks: ['Registrar empresa', 'Dominio + Shopify', 'Pedir muestras', 'Identidad de marca', 'Integración CJ', 'Meta Business Manager'], status: 'pendiente', budget: '€450' },
    { phase: 'Lanzamiento', weeks: '3-4', tasks: ['Subir 15 productos', 'Primera campaña Meta €25/día', 'TikTok orgánico 2/día', 'Revisión Puerta 1 día 14'], status: 'pendiente', budget: '€720' },
    { phase: 'Optimizar', weeks: '5-8', tasks: ['Encontrar ganadores', 'Onboarding Huboo', 'Pedir bulk SKUs top', 'Puerta 2 día 30', 'Escalar ads €50/día'], status: 'pendiente', budget: '€2.100' },
    { phase: 'Escalar', weeks: '9-12', tasks: ['Todos top SKUs en 3PL', 'Lanzar TikTok Shop', 'Primer LIVE', 'Puerta 3 día 60', 'Puerta 4 día 90'], status: 'pendiente', budget: '€1.730' },
];
