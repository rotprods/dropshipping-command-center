// Mock data for all modules
export const studyFiles = [
    { id: 'manifest', name: 'PROJECT_MANIFEST.md', agent: 'Setup', icon: '📋', size: '2.2 KB', version: 'V5', tags: ['manifest', 'architecture'] },
    { id: 'agent1-main', name: '01_macro_market_report.md', agent: 'Agent 1', icon: '🌍', size: '12.4 KB', version: 'V5', tags: ['PESTLE', 'Porter', 'market'] },
    { id: 'agent1-sub', name: '01_subagents_regulation_policies_competitors_geo.md', agent: 'Agent 1', icon: '⚖️', size: '18.6 KB', version: 'V5', tags: ['regulation', 'compliance', 'competitors'] },
    { id: 'agent2', name: '02_niche_product_report.md', agent: 'Agent 2', icon: '🔬', size: '28.1 KB', version: 'V5', tags: ['niches', 'products', 'scoring'] },
    { id: 'agent3', name: '03_supply_chain_plan.md', agent: 'Agent 3', icon: '📦', size: '22.3 KB', version: 'V5', tags: ['suppliers', '3PL', 'logistics'] },
    { id: 'agent4', name: '04_channel_playbooks.md', agent: 'Agent 4', icon: '📢', size: '24.7 KB', version: 'V5', tags: ['Shopify', 'TikTok', 'Amazon', 'WhatsApp'] },
    { id: 'agent5', name: '05_financial_viability.md', agent: 'Agent 5', icon: '💰', size: '19.8 KB', version: 'V5', tags: ['finance', 'unit-economics', 'scenarios'] },
    { id: 'agent6', name: '06_ai_ops_architecture.md', agent: 'Agent 6', icon: '🤖', size: '31.2 KB', version: 'V5', tags: ['AI', 'automation', 'agents', 'Decision Engine'] },
    { id: 'final', name: 'FINAL_MASTER_REPORT.md', agent: 'All', icon: '📊', size: '15.4 KB', version: 'V5', tags: ['summary', 'roadmap', 'sheets'] },
];

export const kpiData = {
    revenue: { value: '€0', change: null, label: 'Revenue (Today)', status: 'neutral' },
    orders: { value: '0', change: null, label: 'Orders (Today)', status: 'neutral' },
    aov: { value: '€34.90', change: null, label: 'Target AOV', status: 'neutral' },
    cac: { value: '€10-12', change: null, label: 'Target CAC', status: 'neutral' },
    roas: { value: '2.5x', change: null, label: 'Target ROAS', status: 'neutral' },
    cm2: { value: '12.5%', change: null, label: 'Target CM2', status: 'neutral' },
    returnRate: { value: '<10%', change: null, label: 'Target Returns', status: 'neutral' },
    ltvCac: { value: '4.6x', change: null, label: 'Target LTV:CAC', status: 'neutral' },
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
    { name: 'TikTok Shop', value: 20, color: '#000000' },
    { name: 'Amazon', value: 10, color: '#ff9900' },
    { name: 'WhatsApp', value: 5, color: '#25d366' },
];

export const agents = [
    {
        id: 1, name: 'Market Intel Director', icon: '🌍', color: '#3b82f6',
        status: 'completed', outputs: 2, subagents: 4,
        description: 'PESTLE, Porter, TAM/SOM, risk matrix, regulatory watchlist',
        lastRun: '4 Mar 2026, 12:18', health: 'green',
        metrics: { facts: 12, assumptions: 5, unknowns: 3 }
    },
    {
        id: 2, name: 'Niche & Product Research', icon: '🔬', color: '#8b5cf6',
        status: 'completed', outputs: 1, subagents: 4,
        description: '100 niches scored, 50 products, trends, compliance, moats, micro-clusters',
        lastRun: '4 Mar 2026, 12:22', health: 'green',
        metrics: { niches: 100, topTier: 20, bundles: 75 }
    },
    {
        id: 3, name: 'Supply Chain Architect', icon: '📦', color: '#10b981',
        status: 'completed', outputs: 1, subagents: 4,
        description: '23+ suppliers, 10 3PLs, migration plan, QC, control tower',
        lastRun: '4 Mar 2026, 13:45', health: 'green',
        metrics: { suppliers: 23, tplProviders: 10, skusCovered: 50 }
    },
    {
        id: 4, name: 'Channels & GTM Strategist', icon: '📢', color: '#f59e0b',
        status: 'completed', outputs: 1, subagents: 3,
        description: 'Shopify, TikTok, Amazon, WhatsApp playbooks + CRO + PIM',
        lastRun: '4 Mar 2026, 13:52', health: 'green',
        metrics: { channels: 4, emailFlows: 7, offers: 10 }
    },
    {
        id: 5, name: 'Finance & Viability Modeler', icon: '💰', color: '#ef4444',
        status: 'completed', outputs: 1, subagents: 3,
        description: 'Unit economics, 3 scenarios, LTV, pricing, risk matrix, Go/No-Go gates',
        lastRun: '4 Mar 2026, 14:01', health: 'yellow',
        metrics: { validated: '22%', scenarios: 3, gates: 4 }
    },
    {
        id: 6, name: 'AI Operations Director', icon: '🤖', color: '#d4a853',
        status: 'completed', outputs: 1, subagents: 4,
        description: 'AI agents, chatbot, WhatsApp, voice, CEO virtual, Decision Engine, V5 systems',
        lastRun: '4 Mar 2026, 14:08', health: 'green',
        metrics: { agentsDesigned: 15, rules: 14, schemas: 12 }
    },
];

export const decisionRules = [
    { id: 'ADS_PAUSE_CPA', trigger: 'adset CPA > €15 for >48h', action: 'PAUSE adset', severity: 'HIGH', status: 'standby', lastTriggered: 'Never' },
    { id: 'ADS_SCALE_ROAS', trigger: 'campaign ROAS > 3.5x for >72h', action: 'INCREASE budget 20%', severity: 'MEDIUM', status: 'standby', lastTriggered: 'Never' },
    { id: 'ADS_FATIGUE', trigger: 'creative frequency > 2.5 AND CTR dropped >30%', action: 'ROTATE creative', severity: 'MEDIUM', status: 'standby', lastTriggered: 'Never' },
    { id: 'SKU_KILL', trigger: 'SKU CM2 < 0 for >14 days OR returns > 25%', action: 'REMOVE from catalog', severity: 'HIGH', status: 'standby', lastTriggered: 'Never' },
    { id: 'SKU_HERO', trigger: 'SKU CM2 > 20% AND velocity > 3/day for >7d', action: 'SCALE ad budget + order 200 units', severity: 'MEDIUM', status: 'standby', lastTriggered: 'Never' },
    { id: 'SKU_TO_3PL', trigger: 'SKU velocity > 2/day for >14d AND dropship', action: 'ORDER bulk to Huboo', severity: 'MEDIUM', status: 'standby', lastTriggered: 'Never' },
    { id: 'PRICE_INCREASE', trigger: 'SKU CM2 > 30% AND CVR stable >2%', action: 'TEST price +€5', severity: 'LOW', status: 'standby', lastTriggered: 'Never' },
    { id: 'GEO_EXPAND', trigger: 'Spain revenue > €10K/mo AND CM2 > 12%', action: 'ACTIVATE FR/PT', severity: 'MEDIUM', status: 'standby', lastTriggered: 'Never' },
    { id: 'OPS_CS_OVERLOAD', trigger: 'unresolved tickets > 20 AND avg FRT > 4h', action: 'Enable chatbot top intents', severity: 'HIGH', status: 'standby', lastTriggered: 'Never' },
    { id: 'OPS_CHARGEBACK', trigger: 'chargeback rate > 0.8%', action: 'PAUSE cross-border + investigate', severity: 'CRITICAL', status: 'standby', lastTriggered: 'Never' },
    { id: 'STOCK_REORDER', trigger: 'stock days < lead time + safety', action: 'REORDER', severity: 'HIGH', status: 'standby', lastTriggered: 'Never' },
    { id: 'STOCK_LIQUIDATE', trigger: 'stock age > 90d AND velocity < 0.3/day', action: 'Flash sale -40%', severity: 'MEDIUM', status: 'standby', lastTriggered: 'Never' },
];

export const inventoryData = [
    { sku: 'GJ-SET-001', name: 'Set Collar + Pendientes Oro', stock: 0, warehouse: '—', velocity: 0, daysLeft: '—', status: 'pre-launch', supplier: 'CJDropshipping', reorderQty: 50 },
    { sku: 'GJ-EAR-002', name: 'Statement Earrings Drop', stock: 0, warehouse: '—', velocity: 0, daysLeft: '—', status: 'pre-launch', supplier: 'CJDropshipping', reorderQty: 50 },
    { sku: 'GJ-NCK-003', name: 'Layered Necklaces Set', stock: 0, warehouse: '—', velocity: 0, daysLeft: '—', status: 'pre-launch', supplier: 'CJDropshipping', reorderQty: 50 },
    { sku: 'GJ-HCL-004', name: 'Pearl Hair Clips Pack', stock: 0, warehouse: '—', velocity: 0, daysLeft: '—', status: 'pre-launch', supplier: 'CJDropshipping', reorderQty: 100 },
    { sku: 'GA-SNG-005', name: 'Oversized Sunglasses Cat', stock: 0, warehouse: '—', velocity: 0, daysLeft: '—', status: 'pre-launch', supplier: 'CJDropshipping', reorderQty: 50 },
    { sku: 'GC-CRD-006', name: 'Linen Coord Set Office', stock: 0, warehouse: '—', velocity: 0, daysLeft: '—', status: 'pre-launch', supplier: 'Alibaba Factory #2', reorderQty: 30 },
    { sku: 'GA-SCR-007', name: 'Silk Scarf 90cm Print', stock: 0, warehouse: '—', velocity: 0, daysLeft: '—', status: 'pre-launch', supplier: 'Alibaba Factory #4', reorderQty: 50 },
    { sku: 'GJ-HUG-008', name: 'Huggie Hoop Earrings', stock: 0, warehouse: '—', velocity: 0, daysLeft: '—', status: 'pre-launch', supplier: 'CJDropshipping', reorderQty: 100 },
];

export const goNoGoGates = [
    { gate: 'Gate 1', day: 14, title: 'Can we acquire customers profitably?', checks: ['CAC < €15', '≥15 orders placed'], status: 'upcoming', target: 'Day 14' },
    { gate: 'Gate 2', day: 30, title: 'Do customers keep what they buy?', checks: ['Return rate < 15%', 'No chargeback >0.5%', '≥1 review >4★'], status: 'upcoming', target: 'Day 30' },
    { gate: 'Gate 3', day: 60, title: 'Can we sustain growth?', checks: ['Revenue > €5,000/mo', 'CM2 > 10%', '≥5 validated SKUs'], status: 'upcoming', target: 'Day 60' },
    { gate: 'Gate 4', day: 90, title: 'Should we expand?', checks: ['Revenue > €10,000/mo', 'CM2 > 12%', 'Top SKUs in EU 3PL', 'TikTok Shop active'], status: 'upcoming', target: 'Day 90' },
];

export const validationStatus = {
    validated: 5,
    partial: 8,
    assumed: 10,
    total: 23,
    percentage: 22,
};

export const roadmapData = [
    { phase: 'Setup', weeks: '1-2', tasks: ['Register business', 'Domain + Shopify', 'Order samples', 'Brand identity', 'CJ integration', 'Meta Business Manager'], status: 'upcoming', budget: '€450' },
    { phase: 'Launch', weeks: '3-4', tasks: ['List 15 products', 'First Meta campaign €25/day', 'TikTok organic 2/day', 'Gate 1 check day 14'], status: 'upcoming', budget: '€720' },
    { phase: 'Optimize', weeks: '5-8', tasks: ['Find winners', 'Onboard Huboo', 'Bulk order top SKUs', 'Gate 2 day 30', 'Scale ads €50/day'], status: 'upcoming', budget: '€2,100' },
    { phase: 'Scale', weeks: '9-12', tasks: ['All top SKUs in 3PL', 'TikTok Shop launch', 'First LIVE', 'Gate 3 day 60', 'Gate 4 day 90'], status: 'upcoming', budget: '€1,730' },
];
