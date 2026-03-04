import { useState } from 'react'
import { studyFiles, kpiData, scenarioData, channelMixData, agents, decisionRules, inventoryData, goNoGoGates, validationStatus, roadmapData } from './data/mockData'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend, AreaChart, Area } from 'recharts'

// ═══════════════════════════════════════════════════
// COMPONENTE SIDEBAR
// ═══════════════════════════════════════════════════
function Sidebar({ currentPage, onNavigate }) {
    const navItems = [
        { id: 'dashboard', icon: '◆', label: 'Panel Principal', badge: null, section: 'GENERAL' },
        { id: 'studies', icon: '📄', label: 'Visor de Estudios', badge: '9', section: 'GENERAL' },
        { id: 'metrics', icon: '📊', label: 'Métricas', badge: null, section: 'OPERACIONES' },
        { id: 'agents', icon: '🤖', label: 'Hub de Agentes', badge: '6', section: 'OPERACIONES' },
        { id: 'decisions', icon: '⚡', label: 'Motor de Decisiones', badge: '14', section: 'OPERACIONES' },
        { id: 'inventory', icon: '📦', label: 'Inventario y 3PL', badge: '8', section: 'OPERACIONES' },
        { id: 'stores', icon: '🏪', label: 'Conector de Tiendas', badge: null, section: 'INTEGRACIONES' },
        { id: 'roadmap', icon: '🗺️', label: 'Hoja de Ruta', badge: null, section: 'PLANIFICACIÓN' },
        { id: 'validation', icon: '✓', label: 'Validación de Datos', badge: '23', section: 'PLANIFICACIÓN' },
    ];

    const sections = [...new Set(navItems.map(i => i.section))];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-logo">DS</div>
                <div className="sidebar-title">
                    <h1>Centro de Mando</h1>
                    <span>Dropshipping OS v6</span>
                </div>
            </div>
            <nav className="sidebar-nav">
                {sections.map(section => (
                    <div key={section} className="sidebar-section">
                        <div className="sidebar-section-label">{section}</div>
                        {navItems.filter(i => i.section === section).map(item => (
                            <div
                                key={item.id}
                                className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
                                onClick={() => onNavigate(item.id)}
                            >
                                <span className="nav-icon">{item.icon}</span>
                                <span>{item.label}</span>
                                {item.badge && <span className="nav-badge">{item.badge}</span>}
                            </div>
                        ))}
                    </div>
                ))}
            </nav>
            <div className="sidebar-footer">
                <div className="sidebar-footer-status">
                    <div className="status-dot"></div>
                    <span>Pre-lanzamiento · Día 0 de 90</span>
                </div>
            </div>
        </aside>
    );
}

// ═══════════════════════════════════════════════════
// PÁGINA PANEL PRINCIPAL (DASHBOARD)
// ═══════════════════════════════════════════════════
function DashboardPage() {
    return (
        <div className="fade-in">
            <div className="page-header">
                <div>
                    <h2>Panel Principal</h2>
                    <div className="page-header-sub">Dropshipping OS · Vista General Pre-lanzamiento</div>
                </div>
                <div className="flex gap-sm">
                    <span className="badge primary">V5 Completa</span>
                    <span className="badge warning">V6 En Progreso</span>
                </div>
            </div>
            <div className="page-body">
                {/* KPI Grid */}
                <div className="kpi-grid stagger-children">
                    {Object.entries(kpiData).map(([key, kpi]) => (
                        <div key={key} className="kpi-card" style={{ '--kpi-color': key === 'cm2' ? '#10b981' : key === 'cac' ? '#ef4444' : '#d4a853' }}>
                            <div className="kpi-label">{kpi.label}</div>
                            <div className="kpi-value">{kpi.value}</div>
                            <div className={`kpi-change ${kpi.status}`}>
                                {kpi.change ? kpi.change : 'Pre-lanzamiento — objetivo definido'}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gráficos */}
                <div className="charts-grid">
                    <div className="card">
                        <div className="card-header">
                            <h3>Proyección de Ingresos (90 días)</h3>
                            <span className="badge info">3 Escenarios</span>
                        </div>
                        <div className="card-body">
                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart data={scenarioData}>
                                    <defs>
                                        <linearGradient id="colorOpt" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorBase" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#d4a853" stopOpacity={0.2} />
                                            <stop offset="95%" stopColor="#d4a853" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.08)" />
                                    <XAxis dataKey="day" stroke="#64748b" fontSize={11} tickFormatter={(v) => `D${v}`} />
                                    <YAxis stroke="#64748b" fontSize={11} tickFormatter={(v) => `€${(v / 1000).toFixed(0)}K`} />
                                    <Tooltip
                                        contentStyle={{ background: '#1a2236', border: '1px solid rgba(148,163,184,0.12)', borderRadius: 8, fontSize: 12, color: '#f1f5f9' }}
                                        formatter={(v) => [`€${v.toLocaleString()}`, '']}
                                    />
                                    <Area type="monotone" dataKey="optimistic" stroke="#10b981" fill="url(#colorOpt)" strokeWidth={2} name="Optimista" />
                                    <Area type="monotone" dataKey="base" stroke="#d4a853" fill="url(#colorBase)" strokeWidth={2} name="Base" />
                                    <Line type="monotone" dataKey="pessimistic" stroke="#ef4444" strokeWidth={1.5} strokeDasharray="5 5" dot={false} name="Pesimista" />
                                    <Legend wrapperStyle={{ fontSize: 11, color: '#94a3b8' }} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h3>Mix de Canales Objetivo</h3>
                        </div>
                        <div className="card-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={channelMixData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={65}
                                        outerRadius={100}
                                        paddingAngle={3}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {channelMixData.map((entry, i) => (
                                            <Cell key={i} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{ background: '#1a2236', border: '1px solid rgba(148,163,184,0.12)', borderRadius: 8, fontSize: 12, color: '#f1f5f9' }}
                                        formatter={(v) => [`${v}%`, '']}
                                    />
                                    <Legend
                                        wrapperStyle={{ fontSize: 11, color: '#94a3b8' }}
                                        formatter={(value) => <span style={{ color: '#94a3b8', fontSize: 11 }}>{value}</span>}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Puertas Go/No-Go */}
                <div className="card mb-lg">
                    <div className="card-header">
                        <h3>Puertas Go / No-Go</h3>
                        <span className="badge warning">4 Próximas</span>
                    </div>
                    <div className="card-body">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 'var(--space-md)' }}>
                            {goNoGoGates.map((gate, i) => (
                                <div key={i} className="card" style={{ background: 'var(--bg-tertiary)' }}>
                                    <div className="card-body">
                                        <div className="flex items-center justify-between mb-md">
                                            <span className="badge primary">{gate.gate}</span>
                                            <span className="text-xs text-muted">{gate.target}</span>
                                        </div>
                                        <h4 style={{ fontSize: 13, fontWeight: 600, marginBottom: 'var(--space-sm)' }}>{gate.title}</h4>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                            {gate.checks.map((check, j) => (
                                                <li key={j} style={{ fontSize: 12, color: 'var(--text-muted)', padding: '2px 0', display: 'flex', alignItems: 'center', gap: 6 }}>
                                                    <span style={{ opacity: 0.4 }}>○</span> {check}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Hoja de Ruta */}
                <div className="card">
                    <div className="card-header">
                        <h3>Hoja de Ruta 0 → 90 Días</h3>
                    </div>
                    <div className="card-body">
                        <div style={{ display: 'flex', gap: 'var(--space-md)', overflowX: 'auto' }}>
                            {roadmapData.map((phase, i) => (
                                <div key={i} style={{
                                    minWidth: 220,
                                    flex: '1 0 220px',
                                    background: 'var(--bg-tertiary)',
                                    borderRadius: 'var(--radius-md)',
                                    padding: 'var(--space-md)',
                                    border: '1px solid var(--border-subtle)',
                                }}>
                                    <div className="flex items-center justify-between mb-md">
                                        <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--accent-primary)' }}>{phase.phase}</span>
                                        <span className="text-xs text-muted">S{phase.weeks}</span>
                                    </div>
                                    <div className="text-xs text-muted mb-md">Presupuesto: {phase.budget}</div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {phase.tasks.map((task, j) => (
                                            <li key={j} style={{ fontSize: 12, color: 'var(--text-secondary)', padding: '3px 0', display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                                                <span style={{ color: 'var(--text-muted)', flexShrink: 0 }}>□</span> {task}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════
// PÁGINA VISOR DE ESTUDIOS
// ═══════════════════════════════════════════════════
function StudyViewerPage() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const filtered = studyFiles.filter(f =>
        f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="fade-in">
            <div className="page-header">
                <div>
                    <h2>Visor de Estudios</h2>
                    <div className="page-header-sub">Explorar todos los archivos de investigación · V3.1 + V4 + V5</div>
                </div>
            </div>
            <div className="page-body">
                <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: 'var(--space-lg)', height: 'calc(100vh - 140px)' }}>
                    {/* Explorador de Archivos */}
                    <div className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div className="card-header">
                            <h3>Archivos ({filtered.length})</h3>
                        </div>
                        <div style={{ padding: 'var(--space-md)' }}>
                            <div className="search-bar">
                                <span>🔍</span>
                                <input
                                    placeholder="Buscar archivos o etiquetas..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="file-list" style={{ flex: 1, overflowY: 'auto', padding: '0 var(--space-sm) var(--space-sm)' }}>
                            {filtered.map(file => (
                                <div
                                    key={file.id}
                                    className={`file-item ${selectedFile?.id === file.id ? 'active' : ''}`}
                                    onClick={() => setSelectedFile(file)}
                                >
                                    <span className="file-icon">{file.icon}</span>
                                    <div className="file-info">
                                        <div className="file-name">{file.name}</div>
                                        <div className="file-meta">{file.agent} · {file.size}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Vista Previa */}
                    <div className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        {selectedFile ? (
                            <>
                                <div className="card-header">
                                    <div>
                                        <h3>{selectedFile.icon} {selectedFile.name}</h3>
                                        <div className="text-xs text-muted" style={{ marginTop: 4 }}>{selectedFile.agent} · Versión {selectedFile.version}</div>
                                    </div>
                                    <div className="flex gap-sm">
                                        {selectedFile.tags.map(tag => (
                                            <span key={tag} className="badge primary">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="card-body" style={{ flex: 1, overflowY: 'auto' }}>
                                    <div className="markdown-content">
                                        <blockquote>
                                            <strong>Ubicación del archivo:</strong> <code>dropshipping_os_2026/outputs/report/{selectedFile.name}</code>
                                        </blockquote>
                                        <p style={{ color: 'var(--text-muted)', marginTop: 'var(--space-lg)', textAlign: 'center' }}>
                                            📂 Este archivo está almacenado localmente en tu sistema.<br />
                                            Ábrelo en tu editor o conecta la API para renderizar el markdown aquí.
                                        </p>
                                        <div style={{ marginTop: 'var(--space-xl)', padding: 'var(--space-lg)', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                                            <div style={{ fontSize: 32, marginBottom: 'var(--space-sm)' }}>{selectedFile.icon}</div>
                                            <h3 style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-sm)' }}>{selectedFile.name}</h3>
                                            <p className="text-sm text-muted">{selectedFile.size} · Agente: {selectedFile.agent}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="empty-state" style={{ flex: 1 }}>
                                <div className="empty-state-icon">📄</div>
                                <h3>Selecciona un archivo para previsualizar</h3>
                                <p>Explora los archivos de estudio en el panel izquierdo. Haz clic para ver detalles y metadatos.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════
// PÁGINA DE MÉTRICAS
// ═══════════════════════════════════════════════════
function MetricsPage() {
    const unitEconData = [
        { name: 'Shopify DTC', cm2: 12.5, gm: 57, channel: 'shopify' },
        { name: 'TikTok Shop', cm2: 41.0, gm: 51, channel: 'tiktok' },
        { name: 'Amazon FBA', cm2: 28.8, gm: 55, channel: 'amazon' },
    ];

    const sensitivityCPM = [
        { cpm: '€5.80', cm2: 3.61, status: 'Actual' },
        { cpm: '€6.96', cm2: 1.61, status: '+20%' },
        { cpm: '€7.80', cm2: 0, status: 'Break-even' },
        { cpm: '€8.70', cm2: -1.39, status: '+50%' },
    ];

    return (
        <div className="fade-in">
            <div className="page-header">
                <div>
                    <h2>Panel de Métricas</h2>
                    <div className="page-header-sub">Unit economics, análisis de sensibilidad y proyecciones financieras</div>
                </div>
                <span className="badge warning">Pre-lanzamiento — datos simulados</span>
            </div>
            <div className="page-body">
                {/* Comparativa Unit Economics */}
                <div className="charts-grid equal mb-lg">
                    <div className="card">
                        <div className="card-header">
                            <h3>CM2 por Canal (%)</h3>
                        </div>
                        <div className="card-body">
                            <ResponsiveContainer width="100%" height={280}>
                                <BarChart data={unitEconData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.08)" />
                                    <XAxis dataKey="name" stroke="#64748b" fontSize={11} />
                                    <YAxis stroke="#64748b" fontSize={11} tickFormatter={(v) => `${v}%`} />
                                    <Tooltip
                                        contentStyle={{ background: '#1a2236', border: '1px solid rgba(148,163,184,0.12)', borderRadius: 8, fontSize: 12, color: '#f1f5f9' }}
                                        formatter={(v) => [`${v}%`, '']}
                                    />
                                    <Bar dataKey="cm2" name="CM2 %" radius={[6, 6, 0, 0]}>
                                        <Cell fill="#96bf48" />
                                        <Cell fill="#6366f1" />
                                        <Cell fill="#ff9900" />
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h3>Sensibilidad CPM → CM2/Pedido</h3>
                        </div>
                        <div className="card-body">
                            <ResponsiveContainer width="100%" height={280}>
                                <BarChart data={sensitivityCPM}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.08)" />
                                    <XAxis dataKey="cpm" stroke="#64748b" fontSize={11} />
                                    <YAxis stroke="#64748b" fontSize={11} tickFormatter={(v) => `€${v}`} />
                                    <Tooltip
                                        contentStyle={{ background: '#1a2236', border: '1px solid rgba(148,163,184,0.12)', borderRadius: 8, fontSize: 12, color: '#f1f5f9' }}
                                        formatter={(v) => [`€${v}`, '']}
                                    />
                                    <Bar dataKey="cm2" name="CM2/Pedido" radius={[6, 6, 0, 0]}>
                                        {sensitivityCPM.map((entry, i) => (
                                            <Cell key={i} fill={entry.cm2 > 0 ? '#10b981' : '#ef4444'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Tabla de Métricas Financieras */}
                <div className="card">
                    <div className="card-header">
                        <h3>Resumen Financiero — Escenario Base</h3>
                    </div>
                    <div className="card-body">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Métrica</th>
                                    <th>Mes 1</th>
                                    <th>Mes 2</th>
                                    <th>Mes 3</th>
                                    <th>Total 90 Días</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Pedidos/día</td><td>2</td><td>5</td><td>10</td><td>—</td></tr>
                                <tr><td>Ingresos</td><td style={{ color: 'var(--text-primary)' }}>€2.094</td><td style={{ color: 'var(--text-primary)' }}>€5.235</td><td style={{ color: 'var(--text-primary)' }}>€10.470</td><td style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>€17.799</td></tr>
                                <tr><td>Gasto en Ads</td><td>€720</td><td>€1.500</td><td>€2.400</td><td>€4.620</td></tr>
                                <tr><td>CAC</td><td>€12</td><td>€10</td><td>€8</td><td>€9,06 media</td></tr>
                                <tr><td>CM2 Total</td><td style={{ color: 'var(--accent-warning)' }}>€37</td><td style={{ color: 'var(--accent-success)' }}>€657</td><td style={{ color: 'var(--accent-success)' }}>€1.803</td><td style={{ color: 'var(--accent-success)', fontWeight: 700 }}>€2.497</td></tr>
                                <tr><td>P&L Acumulado</td><td>€37</td><td>€694</td><td>€2.497</td><td style={{ color: 'var(--accent-success)', fontWeight: 700 }}>+€2.497</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════
// PÁGINA HUB DE AGENTES
// ═══════════════════════════════════════════════════
function AgentHubPage() {
    const [selectedAgent, setSelectedAgent] = useState(null);

    return (
        <div className="fade-in">
            <div className="page-header">
                <div>
                    <h2>Hub de Agentes</h2>
                    <div className="page-header-sub">6 agentes · 15 subagentes · Arquitectura V3.1</div>
                </div>
                <div className="flex gap-sm">
                    <span className="status-indicator running">Todos los Agentes Operativos</span>
                </div>
            </div>
            <div className="page-body">
                <div className="agent-grid stagger-children">
                    {agents.map(agent => (
                        <div
                            key={agent.id}
                            className="agent-card"
                            onClick={() => setSelectedAgent(selectedAgent?.id === agent.id ? null : agent)}
                        >
                            <div className="agent-card-header">
                                <div className="agent-avatar" style={{ background: `${agent.color}20`, color: agent.color }}>
                                    {agent.icon}
                                </div>
                                <div>
                                    <div className="agent-name">{agent.name}</div>
                                    <div className="agent-role">Agente {agent.id} · {agent.subagents} subagentes</div>
                                </div>
                                <span className={`badge ${agent.health === 'green' ? 'success' : 'warning'}`} style={{ marginLeft: 'auto' }}>
                                    {agent.health === 'green' ? '✓ Completo' : '⚠ Parcial — necesita datos reales'}
                                </span>
                            </div>
                            <p className="text-sm text-muted">{agent.description}</p>
                            <div className="agent-stats">
                                {Object.entries(agent.metrics).map(([key, val]) => (
                                    <div key={key} className="agent-stat">
                                        <strong>{val}</strong><br />
                                        <span>{key.replace(/([A-Z])/g, ' $1').toLowerCase()}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="text-xs text-muted" style={{ marginTop: 'var(--space-sm)' }}>
                                Última ejecución: {agent.lastRun}
                            </div>
                            {selectedAgent?.id === agent.id && (
                                <div style={{ marginTop: 'var(--space-md)', padding: 'var(--space-md)', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                                    <div className="text-xs text-muted mb-md">SALIDAS</div>
                                    <div className="text-sm">{agent.outputs} archivo(s) de informe + {agent.subagents} salida(s) de subagente</div>
                                    <div className="text-xs text-muted mt-md">ESTADO</div>
                                    <div className="text-sm" style={{ color: agent.health === 'green' ? 'var(--accent-success)' : 'var(--accent-warning)' }}>
                                        {agent.health === 'green' ? '■ Todas las salidas generadas y verificadas' : '■ 22% validado — necesita datos en vivo para completar'}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════
// PÁGINA MOTOR DE DECISIONES
// ═══════════════════════════════════════════════════
function DecisionEnginePage() {
    return (
        <div className="fade-in">
            <div className="page-header">
                <div>
                    <h2>Motor de Decisiones</h2>
                    <div className="page-header-sub">14 reglas automatizadas · Definidas en YAML · Compatibles V5</div>
                </div>
                <span className="badge info">Todas las reglas en espera — esperando datos reales</span>
            </div>
            <div className="page-body">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }} className="stagger-children">
                    {decisionRules.map(rule => (
                        <div key={rule.id} className="rule-card">
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4, minWidth: 140 }}>
                                <span className="rule-id">{rule.id}</span>
                                <span className={`badge ${rule.severity === 'CRITICAL' ? 'danger' : rule.severity === 'HIGH' ? 'warning' : rule.severity === 'MEDIUM' ? 'info' : 'primary'}`}>
                                    {rule.severity === 'CRITICAL' ? 'CRÍTICO' : rule.severity === 'HIGH' ? 'ALTO' : rule.severity === 'MEDIUM' ? 'MEDIO' : 'BAJO'}
                                </span>
                            </div>
                            <div className="rule-content">
                                <div className="rule-trigger">SI: {rule.trigger}</div>
                                <div className="rule-action">→ {rule.action}</div>
                            </div>
                            <div style={{ textAlign: 'right', minWidth: 100 }}>
                                <div className="status-indicator idle" style={{ justifyContent: 'flex-end' }}>En espera</div>
                                <div className="text-xs text-muted" style={{ marginTop: 4 }}>Última: {rule.lastTriggered}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════
// PÁGINA DE INVENTARIO
// ═══════════════════════════════════════════════════
function InventoryPage() {
    return (
        <div className="fade-in">
            <div className="page-header">
                <div>
                    <h2>Inventario y 3PL</h2>
                    <div className="page-header-sub">8 SKUs planificados · 3PL Principal: Huboo España (Barcelona)</div>
                </div>
                <span className="badge warning">Pre-lanzamiento — sin stock aún</span>
            </div>
            <div className="page-body">
                {/* Estado 3PL */}
                <div className="kpi-grid stagger-children mb-lg">
                    <div className="kpi-card"><div className="kpi-label">3PL Principal</div><div className="kpi-value" style={{ fontSize: 20 }}>Huboo 🇪🇸</div><div className="kpi-change neutral">Barcelona · No onboarded</div></div>
                    <div className="kpi-card"><div className="kpi-label">Pick + Pack</div><div className="kpi-value">€2,55</div><div className="kpi-change neutral">Estimación por pedido</div></div>
                    <div className="kpi-card"><div className="kpi-label">SLA Entrega</div><div className="kpi-value">24-48h</div><div className="kpi-change neutral">España (SEUR)</div></div>
                    <div className="kpi-card"><div className="kpi-label">SKUs Totales</div><div className="kpi-value">8</div><div className="kpi-change neutral">Catálogo de lanzamiento planificado</div></div>
                </div>

                {/* Tabla de Inventario */}
                <div className="card">
                    <div className="card-header">
                        <h3>Inventario por SKU</h3>
                    </div>
                    <div className="card-body" style={{ overflowX: 'auto' }}>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>SKU</th>
                                    <th>Producto</th>
                                    <th>Stock</th>
                                    <th>Almacén</th>
                                    <th>Velocidad</th>
                                    <th>Días Rest.</th>
                                    <th>Estado</th>
                                    <th>Proveedor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inventoryData.map(item => (
                                    <tr key={item.sku}>
                                        <td><code style={{ color: 'var(--accent-primary)', background: 'var(--accent-primary-soft)', padding: '2px 6px', borderRadius: 4, fontSize: 11 }}>{item.sku}</code></td>
                                        <td style={{ color: 'var(--text-primary)' }}>{item.name}</td>
                                        <td className="text-mono">{item.stock}</td>
                                        <td>{item.warehouse}</td>
                                        <td className="text-mono">{item.velocity}/día</td>
                                        <td>{item.daysLeft}</td>
                                        <td><span className="badge warning">{item.status}</span></td>
                                        <td className="text-muted">{item.supplier}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════
// PÁGINA CONECTOR DE TIENDAS
// ═══════════════════════════════════════════════════
function StoreConnectorPage() {
    return (
        <div className="fade-in">
            <div className="page-header">
                <div>
                    <h2>Conector de Tiendas</h2>
                    <div className="page-header-sub">Conecta tus tiendas para sincronizar productos, pedidos y métricas</div>
                </div>
            </div>
            <div className="page-body">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-md)' }} className="stagger-children">
                    {[
                        { name: 'Shopify', icon: '🟢', color: '#96bf48', status: 'No conectado', description: 'Tienda DTC principal. Conectar vía API clave Admin.', priority: 'PRINCIPAL' },
                        { name: 'TikTok Shop', icon: '🎵', color: '#6366f1', status: 'No conectado', description: 'Comercio social. Requiere stock UE + cuenta vendedor.', priority: 'FASE 2' },
                        { name: 'Amazon Seller', icon: '📦', color: '#ff9900', status: 'No conectado', description: 'FBA/FBM. Requiere Brand Registry.', priority: 'FASE 3' },
                        { name: 'Meta Ads', icon: '📱', color: '#3b82f6', status: 'No conectado', description: 'Métricas de ads, gestión de campañas, tracking creativo.', priority: 'DÍA 1' },
                        { name: 'Klaviyo', icon: '✉️', color: '#8b5cf6', status: 'No conectado', description: 'Flujos email/SMS, segmentos y analíticas.', priority: 'DÍA 1' },
                        { name: 'Huboo 3PL', icon: '🏭', color: '#10b981', status: 'No conectado', description: 'Niveles de stock, pedidos y procesamiento de devoluciones.', priority: 'DÍA 30' },
                    ].map((store, i) => (
                        <div key={i} className="card" style={{ cursor: 'pointer' }}>
                            <div className="card-body">
                                <div className="flex items-center justify-between mb-md">
                                    <div className="flex items-center gap-md">
                                        <span style={{ fontSize: 24 }}>{store.icon}</span>
                                        <div>
                                            <div style={{ fontSize: 14, fontWeight: 600 }}>{store.name}</div>
                                            <div className="text-xs text-muted">{store.status}</div>
                                        </div>
                                    </div>
                                    <span className="badge info">{store.priority}</span>
                                </div>
                                <p className="text-sm text-muted">{store.description}</p>
                                <button className="btn btn-ghost w-full" style={{ marginTop: 'var(--space-md)', justifyContent: 'center' }}>
                                    Conectar →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════
// PÁGINA HOJA DE RUTA
// ═══════════════════════════════════════════════════
function RoadmapPage() {
    return (
        <div className="fade-in">
            <div className="page-header">
                <div>
                    <h2>Hoja de Ruta</h2>
                    <div className="page-header-sub">Plan de Ejecución 0 → 90 Días · Presupuesto: €5.000</div>
                </div>
            </div>
            <div className="page-body">
                {roadmapData.map((phase, i) => (
                    <div key={i} className="card mb-lg">
                        <div className="card-header">
                            <div className="flex items-center gap-md">
                                <span style={{
                                    width: 32, height: 32, borderRadius: 'var(--radius-md)',
                                    background: 'var(--accent-primary-soft)', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', fontWeight: 800, color: 'var(--accent-primary)', fontSize: 14,
                                }}>{i + 1}</span>
                                <div>
                                    <h3>{phase.phase}</h3>
                                    <span className="text-xs text-muted">Semanas {phase.weeks} · {phase.budget}</span>
                                </div>
                            </div>
                            <span className="badge warning">Próximamente</span>
                        </div>
                        <div className="card-body">
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-sm)' }}>
                                {phase.tasks.map((task, j) => (
                                    <div key={j} style={{
                                        display: 'flex', alignItems: 'center', gap: 'var(--space-sm)',
                                        padding: 'var(--space-sm) var(--space-md)',
                                        background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-sm)',
                                        fontSize: 13,
                                    }}>
                                        <span style={{ color: 'var(--text-muted)' }}>□</span>
                                        <span>{task}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════
// PÁGINA DE VALIDACIÓN
// ═══════════════════════════════════════════════════
function ValidationPage() {
    const metrics = [
        { name: 'CPM España', value: '€5,80', source: 'Adamigo', status: 'partial', note: 'Media real 2025: $6,06. Ene 2026: $3,12. Conservador ✓' },
        { name: 'CPM Fashion (global)', value: '$10,14', source: 'TryMesha 2025', status: 'validated', note: 'Múltiples fuentes confirman $9-11' },
        { name: 'CPM Fashion España', value: '€6-8 est.', source: 'Inferido', status: 'assumed', note: 'No existen datos específicos de fashion para España' },
        { name: 'CTR benchmark', value: '1,0-2,0%', source: 'Media sector', status: 'partial', note: 'Varía mucho según calidad del creativo' },
        { name: 'CVR Shopify', value: '2-3%', source: 'Sector', status: 'assumed', note: 'Debe medirse días 1-14' },
        { name: 'CAC', value: '€10-12', source: 'Derivado', status: 'assumed', note: 'Derivado del CPM, no medido' },
        { name: 'Tasa devol.', value: '10%', source: 'Media categoría', status: 'partial', note: 'Accesorios 5-8%, ropa 20-30%' },
        { name: 'AOV', value: '€35-38', source: 'Plan de precios', status: 'assumed', note: 'Depende de adopción de bundles' },
        { name: 'Tasa repetición', value: '40% en 12m', source: 'Klaviyo', status: 'assumed', note: 'Necesita 90+ días de datos reales' },
        { name: 'LTV', value: '€45-87', source: 'Derivado', status: 'assumed', note: 'Basado en inputs sin validar' },
        { name: 'Stock CJ UE', value: 'Disponible', source: 'Web CJ', status: 'partial', note: 'No verificado por SKU individual' },
        { name: 'Huboo pick+pack', value: '€1,85', source: 'Tarifa', status: 'partial', note: 'Puede variar con volumen' },
        { name: 'TikTok Shop 9%', value: '9%', source: 'TikTok SC', status: 'validated', note: 'Confirmado + 4% vendedor nuevo' },
        { name: 'Amazon 15%', value: '15%', source: 'Amazon SC', status: 'validated', note: 'Confirmado para >€20 fashion' },
        { name: 'Shopify Payments', value: '1,9%+€0,25', source: 'Shopify', status: 'validated', note: 'Confirmado' },
        { name: 'Aduanas UE €3', value: '€3/arancel', source: 'Comisión UE', status: 'validated', note: 'Propuesta oficial julio 2026' },
        { name: 'COGS joyería', value: '€3-6', source: 'Alibaba/CJ', status: 'partial', note: 'Estimaciones pre-negociación' },
    ];

    const statusColors = { validated: 'success', partial: 'warning', assumed: 'danger' };
    const statusLabels = { validated: 'Validado', partial: 'Parcial', assumed: 'Supuesto' };

    return (
        <div className="fade-in">
            <div className="page-header">
                <div>
                    <h2>Validación de Datos</h2>
                    <div className="page-header-sub">Auditoría V6 · {validationStatus.total} métricas monitorizadas</div>
                </div>
                <div className="flex gap-sm">
                    <span className="badge success">{validationStatus.validated} Validadas</span>
                    <span className="badge warning">{validationStatus.partial} Parciales</span>
                    <span className="badge danger">{validationStatus.assumed} Supuestas</span>
                </div>
            </div>
            <div className="page-body">
                {/* Progreso de Validación */}
                <div className="card mb-lg">
                    <div className="card-body">
                        <div className="flex items-center justify-between mb-md">
                            <h3>Progreso de Validación</h3>
                            <span className="text-mono text-accent" style={{ fontSize: 24, fontWeight: 800 }}>{validationStatus.percentage}%</span>
                        </div>
                        <div style={{ width: '100%', height: 8, background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                            <div style={{
                                height: '100%',
                                width: `${validationStatus.percentage}%`,
                                background: 'linear-gradient(90deg, var(--accent-danger), var(--accent-warning), var(--accent-success))',
                                borderRadius: 'var(--radius-full)',
                                transition: 'width 1s ease-out',
                            }}></div>
                        </div>
                        <p className="text-xs text-muted mt-md">
                            Solo el {validationStatus.percentage}% de las métricas están completamente validadas. El resto requiere una tienda activa + campañas reales para poder medirse.
                            Esto es normal en fase pre-lanzamiento — las Puertas Go/No-Go detectarán fallos.
                        </p>
                    </div>
                </div>

                {/* Tabla de Métricas */}
                <div className="card">
                    <div className="card-header">
                        <h3>Todas las Métricas Monitorizadas</h3>
                    </div>
                    <div className="card-body" style={{ overflowX: 'auto' }}>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Métrica</th>
                                    <th>Valor</th>
                                    <th>Fuente</th>
                                    <th>Estado</th>
                                    <th>Notas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {metrics.map((m, i) => (
                                    <tr key={i}>
                                        <td style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{m.name}</td>
                                        <td className="text-mono">{m.value}</td>
                                        <td className="text-muted">{m.source}</td>
                                        <td><span className={`badge ${statusColors[m.status]}`}>{statusLabels[m.status]}</span></td>
                                        <td className="text-muted" style={{ maxWidth: 300 }}>{m.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════
// APP PRINCIPAL
// ═══════════════════════════════════════════════════
export default function App() {
    const [currentPage, setCurrentPage] = useState('dashboard');

    const pages = {
        dashboard: DashboardPage,
        studies: StudyViewerPage,
        metrics: MetricsPage,
        agents: AgentHubPage,
        decisions: DecisionEnginePage,
        inventory: InventoryPage,
        stores: StoreConnectorPage,
        roadmap: RoadmapPage,
        validation: ValidationPage,
    };

    const PageComponent = pages[currentPage] || DashboardPage;

    return (
        <div className="app-layout">
            <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
            <main className="main-content">
                <PageComponent />
            </main>
        </div>
    );
}
