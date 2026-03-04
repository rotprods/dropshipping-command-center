import { useState } from 'react'
import { studyFiles, kpiData, scenarioData, channelMixData, agents, decisionRules, inventoryData, goNoGoGates, validationStatus, roadmapData } from './data/mockData'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend, AreaChart, Area } from 'recharts'

// ═══════════════════════════════════════════════════
// SIDEBAR COMPONENT
// ═══════════════════════════════════════════════════
function Sidebar({ currentPage, onNavigate }) {
    const navItems = [
        { id: 'dashboard', icon: '◆', label: 'Dashboard', badge: null, section: 'OVERVIEW' },
        { id: 'studies', icon: '📄', label: 'Study Viewer', badge: '9', section: 'OVERVIEW' },
        { id: 'metrics', icon: '📊', label: 'Metrics', badge: null, section: 'OPERATIONS' },
        { id: 'agents', icon: '🤖', label: 'Agent Hub', badge: '6', section: 'OPERATIONS' },
        { id: 'decisions', icon: '⚡', label: 'Decision Engine', badge: '12', section: 'OPERATIONS' },
        { id: 'inventory', icon: '📦', label: 'Inventory & 3PL', badge: '8', section: 'OPERATIONS' },
        { id: 'stores', icon: '🏪', label: 'Store Connector', badge: null, section: 'INTEGRATIONS' },
        { id: 'roadmap', icon: '🗺️', label: 'Roadmap', badge: null, section: 'PLANNING' },
        { id: 'validation', icon: '✓', label: 'Data Validation', badge: '23', section: 'PLANNING' },
    ];

    const sections = [...new Set(navItems.map(i => i.section))];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-logo">DS</div>
                <div className="sidebar-title">
                    <h1>Command Center</h1>
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
                    <span>Pre-launch · Day 0 of 90</span>
                </div>
            </div>
        </aside>
    );
}

// ═══════════════════════════════════════════════════
// DASHBOARD PAGE
// ═══════════════════════════════════════════════════
function DashboardPage() {
    return (
        <div className="fade-in">
            <div className="page-header">
                <div>
                    <h2>Dashboard</h2>
                    <div className="page-header-sub">Dropshipping OS · Pre-launch Overview</div>
                </div>
                <div className="flex gap-sm">
                    <span className="badge primary">V5 Complete</span>
                    <span className="badge warning">V6 In Progress</span>
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
                                {kpi.change ? kpi.change : 'Pre-launch — target set'}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Charts */}
                <div className="charts-grid">
                    <div className="card">
                        <div className="card-header">
                            <h3>Revenue Projection (90 days)</h3>
                            <span className="badge info">3 Scenarios</span>
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
                                    <Area type="monotone" dataKey="optimistic" stroke="#10b981" fill="url(#colorOpt)" strokeWidth={2} name="Optimistic" />
                                    <Area type="monotone" dataKey="base" stroke="#d4a853" fill="url(#colorBase)" strokeWidth={2} name="Base" />
                                    <Line type="monotone" dataKey="pessimistic" stroke="#ef4444" strokeWidth={1.5} strokeDasharray="5 5" dot={false} name="Pessimistic" />
                                    <Legend wrapperStyle={{ fontSize: 11, color: '#94a3b8' }} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h3>Target Channel Mix</h3>
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
                                            <Cell key={i} fill={entry.color === '#000000' ? '#6366f1' : entry.color} />
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

                {/* Go/No-Go Gates */}
                <div className="card mb-lg">
                    <div className="card-header">
                        <h3>Go / No-Go Gates</h3>
                        <span className="badge warning">4 Upcoming</span>
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

                {/* Roadmap */}
                <div className="card">
                    <div className="card-header">
                        <h3>0 → 90 Day Roadmap</h3>
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
                                        <span className="text-xs text-muted">W{phase.weeks}</span>
                                    </div>
                                    <div className="text-xs text-muted mb-md">Budget: {phase.budget}</div>
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
// STUDY VIEWER PAGE
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
                    <h2>Study Viewer</h2>
                    <div className="page-header-sub">Browse all research files · V3.1 + V4 + V5</div>
                </div>
            </div>
            <div className="page-body">
                <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: 'var(--space-lg)', height: 'calc(100vh - 140px)' }}>
                    {/* File Browser */}
                    <div className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div className="card-header">
                            <h3>Files ({filtered.length})</h3>
                        </div>
                        <div style={{ padding: 'var(--space-md)' }}>
                            <div className="search-bar">
                                <span>🔍</span>
                                <input
                                    placeholder="Search files or tags..."
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

                    {/* File Preview */}
                    <div className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        {selectedFile ? (
                            <>
                                <div className="card-header">
                                    <div>
                                        <h3>{selectedFile.icon} {selectedFile.name}</h3>
                                        <div className="text-xs text-muted" style={{ marginTop: 4 }}>{selectedFile.agent} · Version {selectedFile.version}</div>
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
                                            <strong>File location:</strong> <code>dropshipping_os_2026/outputs/report/{selectedFile.name}</code>
                                        </blockquote>
                                        <p style={{ color: 'var(--text-muted)', marginTop: 'var(--space-lg)', textAlign: 'center' }}>
                                            📂 This file is stored locally on your system.<br />
                                            Open it in your editor or connect the API to render markdown here.
                                        </p>
                                        <div style={{ marginTop: 'var(--space-xl)', padding: 'var(--space-lg)', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                                            <div style={{ fontSize: 32, marginBottom: 'var(--space-sm)' }}>{selectedFile.icon}</div>
                                            <h3 style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-sm)' }}>{selectedFile.name}</h3>
                                            <p className="text-sm text-muted">{selectedFile.size} · Agent: {selectedFile.agent}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="empty-state" style={{ flex: 1 }}>
                                <div className="empty-state-icon">📄</div>
                                <h3>Select a file to preview</h3>
                                <p>Browse the study files on the left panel. Click to view details and metadata.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════
// METRICS PAGE
// ═══════════════════════════════════════════════════
function MetricsPage() {
    const unitEconData = [
        { name: 'Shopify DTC', cm2: 12.5, gm: 57, channel: 'shopify' },
        { name: 'TikTok Shop', cm2: 41.0, gm: 51, channel: 'tiktok' },
        { name: 'Amazon FBA', cm2: 28.8, gm: 55, channel: 'amazon' },
    ];

    const sensitivityCPM = [
        { cpm: '€5.80', cm2: 3.61, status: 'Current' },
        { cpm: '€6.96', cm2: 1.61, status: '+20%' },
        { cpm: '€7.80', cm2: 0, status: 'Break-even' },
        { cpm: '€8.70', cm2: -1.39, status: '+50%' },
    ];

    return (
        <div className="fade-in">
            <div className="page-header">
                <div>
                    <h2>Metrics Dashboard</h2>
                    <div className="page-header-sub">Unit economics, sensitivity analysis, and financial projections</div>
                </div>
                <span className="badge warning">Pre-launch — mock data</span>
            </div>
            <div className="page-body">
                {/* Unit Economics Comparison */}
                <div className="charts-grid equal mb-lg">
                    <div className="card">
                        <div className="card-header">
                            <h3>CM2 by Channel (%)</h3>
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
                            <h3>CPM Sensitivity → CM2/Order</h3>
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
                                    <Bar dataKey="cm2" name="CM2/Order" radius={[6, 6, 0, 0]}>
                                        {sensitivityCPM.map((entry, i) => (
                                            <Cell key={i} fill={entry.cm2 > 0 ? '#10b981' : '#ef4444'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Key Financial Metrics Table */}
                <div className="card">
                    <div className="card-header">
                        <h3>Financial Summary — Base Scenario</h3>
                    </div>
                    <div className="card-body">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Metric</th>
                                    <th>Month 1</th>
                                    <th>Month 2</th>
                                    <th>Month 3</th>
                                    <th>90-Day Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Orders/day</td><td>2</td><td>5</td><td>10</td><td>—</td></tr>
                                <tr><td>Revenue</td><td style={{ color: 'var(--text-primary)' }}>€2,094</td><td style={{ color: 'var(--text-primary)' }}>€5,235</td><td style={{ color: 'var(--text-primary)' }}>€10,470</td><td style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>€17,799</td></tr>
                                <tr><td>Ad Spend</td><td>€720</td><td>€1,500</td><td>€2,400</td><td>€4,620</td></tr>
                                <tr><td>CAC</td><td>€12</td><td>€10</td><td>€8</td><td>€9.06 avg</td></tr>
                                <tr><td>CM2 Total</td><td style={{ color: 'var(--accent-warning)' }}>€37</td><td style={{ color: 'var(--accent-success)' }}>€657</td><td style={{ color: 'var(--accent-success)' }}>€1,803</td><td style={{ color: 'var(--accent-success)', fontWeight: 700 }}>€2,497</td></tr>
                                <tr><td>Cumulative P&L</td><td>€37</td><td>€694</td><td>€2,497</td><td style={{ color: 'var(--accent-success)', fontWeight: 700 }}>+€2,497</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════
// AGENT HUB PAGE
// ═══════════════════════════════════════════════════
function AgentHubPage() {
    const [selectedAgent, setSelectedAgent] = useState(null);

    return (
        <div className="fade-in">
            <div className="page-header">
                <div>
                    <h2>Agent Hub</h2>
                    <div className="page-header-sub">6 agents · 15 subagents · V3.1 architecture</div>
                </div>
                <div className="flex gap-sm">
                    <span className="status-indicator running">All Agents Healthy</span>
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
                                    <div className="agent-role">Agent {agent.id} · {agent.subagents} subagents</div>
                                </div>
                                <span className={`badge ${agent.health === 'green' ? 'success' : 'warning'}`} style={{ marginLeft: 'auto' }}>
                                    {agent.health === 'green' ? '✓ Complete' : '⚠ Partial'}
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
                                Last run: {agent.lastRun}
                            </div>
                            {selectedAgent?.id === agent.id && (
                                <div style={{ marginTop: 'var(--space-md)', padding: 'var(--space-md)', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                                    <div className="text-xs text-muted mb-md">OUTPUTS</div>
                                    <div className="text-sm">{agent.outputs} report file(s) + {agent.subagents} subagent output(s)</div>
                                    <div className="text-xs text-muted mt-md">STATUS</div>
                                    <div className="text-sm" style={{ color: 'var(--accent-success)' }}>■ All outputs generated and QA-checked</div>
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
// DECISION ENGINE PAGE
// ═══════════════════════════════════════════════════
function DecisionEnginePage() {
    return (
        <div className="fade-in">
            <div className="page-header">
                <div>
                    <h2>Decision Engine</h2>
                    <div className="page-header-sub">14 automated rules · YAML-defined · V5 compliant</div>
                </div>
                <span className="badge info">All rules in standby — waiting for live data</span>
            </div>
            <div className="page-body">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }} className="stagger-children">
                    {decisionRules.map(rule => (
                        <div key={rule.id} className="rule-card">
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4, minWidth: 140 }}>
                                <span className="rule-id">{rule.id}</span>
                                <span className={`badge ${rule.severity === 'CRITICAL' ? 'danger' : rule.severity === 'HIGH' ? 'warning' : rule.severity === 'MEDIUM' ? 'info' : 'primary'}`}>
                                    {rule.severity}
                                </span>
                            </div>
                            <div className="rule-content">
                                <div className="rule-trigger">IF: {rule.trigger}</div>
                                <div className="rule-action">→ {rule.action}</div>
                            </div>
                            <div style={{ textAlign: 'right', minWidth: 100 }}>
                                <div className="status-indicator idle" style={{ justifyContent: 'flex-end' }}>Standby</div>
                                <div className="text-xs text-muted" style={{ marginTop: 4 }}>Last: {rule.lastTriggered}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════
// INVENTORY PAGE
// ═══════════════════════════════════════════════════
function InventoryPage() {
    return (
        <div className="fade-in">
            <div className="page-header">
                <div>
                    <h2>Inventory & 3PL</h2>
                    <div className="page-header-sub">8 SKUs planned · Primary 3PL: Huboo Spain (Barcelona)</div>
                </div>
                <span className="badge warning">Pre-launch — no stock yet</span>
            </div>
            <div className="page-body">
                {/* 3PL Status */}
                <div className="kpi-grid stagger-children mb-lg">
                    <div className="kpi-card"><div className="kpi-label">Primary 3PL</div><div className="kpi-value" style={{ fontSize: 20 }}>Huboo 🇪🇸</div><div className="kpi-change neutral">Barcelona · Not onboarded</div></div>
                    <div className="kpi-card"><div className="kpi-label">Pick + Pack</div><div className="kpi-value">€2.55</div><div className="kpi-change neutral">Per order estimate</div></div>
                    <div className="kpi-card"><div className="kpi-label">Delivery SLA</div><div className="kpi-value">24-48h</div><div className="kpi-change neutral">Spain (SEUR)</div></div>
                    <div className="kpi-card"><div className="kpi-label">Total SKUs</div><div className="kpi-value">8</div><div className="kpi-change neutral">Planned launch catalog</div></div>
                </div>

                {/* Inventory Table */}
                <div className="card">
                    <div className="card-header">
                        <h3>SKU Inventory</h3>
                    </div>
                    <div className="card-body" style={{ overflowX: 'auto' }}>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>SKU</th>
                                    <th>Product</th>
                                    <th>Stock</th>
                                    <th>Warehouse</th>
                                    <th>Velocity</th>
                                    <th>Days Left</th>
                                    <th>Status</th>
                                    <th>Supplier</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inventoryData.map(item => (
                                    <tr key={item.sku}>
                                        <td><code style={{ color: 'var(--accent-primary)', background: 'var(--accent-primary-soft)', padding: '2px 6px', borderRadius: 4, fontSize: 11 }}>{item.sku}</code></td>
                                        <td style={{ color: 'var(--text-primary)' }}>{item.name}</td>
                                        <td className="text-mono">{item.stock}</td>
                                        <td>{item.warehouse}</td>
                                        <td className="text-mono">{item.velocity}/day</td>
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
// STORE CONNECTOR PAGE
// ═══════════════════════════════════════════════════
function StoreConnectorPage() {
    return (
        <div className="fade-in">
            <div className="page-header">
                <div>
                    <h2>Store Connector</h2>
                    <div className="page-header-sub">Connect your stores to sync products, orders, and metrics</div>
                </div>
            </div>
            <div className="page-body">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-md)' }} className="stagger-children">
                    {[
                        { name: 'Shopify', icon: '🟢', color: '#96bf48', status: 'Not connected', description: 'Primary DTC store. Connect via Admin API key.', priority: 'PRIMARY' },
                        { name: 'TikTok Shop', icon: '🎵', color: '#6366f1', status: 'Not connected', description: 'Social commerce. Requires EU stock + seller account.', priority: 'PHASE 2' },
                        { name: 'Amazon Seller', icon: '📦', color: '#ff9900', status: 'Not connected', description: 'FBA/FBM. Requires Brand Registry.', priority: 'PHASE 3' },
                        { name: 'Meta Ads', icon: '📱', color: '#3b82f6', status: 'Not connected', description: 'Ad metrics, campaign management, creative tracking.', priority: 'DAY 1' },
                        { name: 'Klaviyo', icon: '✉️', color: '#8b5cf6', status: 'Not connected', description: 'Email/SMS flows, segments, and analytics.', priority: 'DAY 1' },
                        { name: 'Huboo 3PL', icon: '🏭', color: '#10b981', status: 'Not connected', description: 'Stock levels, orders, and returns processing.', priority: 'DAY 30' },
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
                                    Connect →
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
// ROADMAP PAGE
// ═══════════════════════════════════════════════════
function RoadmapPage() {
    return (
        <div className="fade-in">
            <div className="page-header">
                <div>
                    <h2>Roadmap</h2>
                    <div className="page-header-sub">0 → 90 Day Execution Plan · Budget: €5,000</div>
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
                                    <span className="text-xs text-muted">Weeks {phase.weeks} · {phase.budget}</span>
                                </div>
                            </div>
                            <span className="badge warning">Upcoming</span>
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
// VALIDATION PAGE
// ═══════════════════════════════════════════════════
function ValidationPage() {
    const metrics = [
        { name: 'Spain CPM', value: '€5.80', source: 'Adamigo', status: 'partial', note: 'Real 2025 avg: $6.06. Jan 2026: $3.12. Conservative ✓' },
        { name: 'Fashion CPM (global)', value: '$10.14', source: 'TryMesha 2025', status: 'validated', note: 'Multiple sources confirm $9-11' },
        { name: 'Spain fashion CPM', value: '€6-8 est.', source: 'Inferred', status: 'assumed', note: 'No Spain-specific fashion data exists' },
        { name: 'CTR benchmark', value: '1.0-2.0%', source: 'Industry avg', status: 'partial', note: 'Varies hugely by creative quality' },
        { name: 'CVR Shopify', value: '2-3%', source: 'Industry', status: 'assumed', note: 'Must measure days 1-14' },
        { name: 'CAC', value: '€10-12', source: 'Derived', status: 'assumed', note: 'Derived from CPM, not measured' },
        { name: 'Return rate', value: '10%', source: 'Category avg', status: 'partial', note: 'Accessories 5-8%, clothing 20-30%' },
        { name: 'AOV', value: '€35-38', source: 'Pricing plan', status: 'assumed', note: 'Depends on bundle adoption' },
        { name: 'Repeat rate', value: '40% in 12mo', source: 'Klaviyo', status: 'assumed', note: 'Need 90+ days real data' },
        { name: 'LTV', value: '€45-87', source: 'Derived', status: 'assumed', note: 'Based on unvalidated inputs' },
        { name: 'CJ EU stock', value: 'Available', source: 'CJ website', status: 'partial', note: 'Not verified per SKU' },
        { name: 'Huboo pick+pack', value: '€1.85', source: 'Rate card', status: 'partial', note: 'May vary with volume' },
        { name: 'TikTok Shop 9%', value: '9%', source: 'TikTok SC', status: 'validated', note: 'Confirmed + 4% new seller' },
        { name: 'Amazon 15%', value: '15%', source: 'Amazon SC', status: 'validated', note: 'Confirmed for >€20 fashion' },
        { name: 'Shopify Payments', value: '1.9%+€0.25', source: 'Shopify', status: 'validated', note: 'Confirmed' },
        { name: 'EU customs €3', value: '€3/tariff', source: 'EU Commission', status: 'validated', note: 'Official proposal July 2026' },
        { name: 'COGS jewelry', value: '€3-6', source: 'Alibaba/CJ', status: 'partial', note: 'Pre-negotiation estimates' },
    ];

    const statusColors = { validated: 'success', partial: 'warning', assumed: 'danger' };

    return (
        <div className="fade-in">
            <div className="page-header">
                <div>
                    <h2>Data Validation</h2>
                    <div className="page-header-sub">V6 audit · {validationStatus.total} metrics tracked</div>
                </div>
                <div className="flex gap-sm">
                    <span className="badge success">{validationStatus.validated} Validated</span>
                    <span className="badge warning">{validationStatus.partial} Partial</span>
                    <span className="badge danger">{validationStatus.assumed} Assumed</span>
                </div>
            </div>
            <div className="page-body">
                {/* Validation Progress */}
                <div className="card mb-lg">
                    <div className="card-body">
                        <div className="flex items-center justify-between mb-md">
                            <h3>Validation Progress</h3>
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
                            Only {validationStatus.percentage}% of metrics are fully validated. The rest require a live store + real ad campaigns to measure.
                            This is expected for pre-launch — Go/No-Go gates will catch failures.
                        </p>
                    </div>
                </div>

                {/* Metrics Table */}
                <div className="card">
                    <div className="card-header">
                        <h3>All Tracked Metrics</h3>
                    </div>
                    <div className="card-body" style={{ overflowX: 'auto' }}>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Metric</th>
                                    <th>Value</th>
                                    <th>Source</th>
                                    <th>Status</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {metrics.map((m, i) => (
                                    <tr key={i}>
                                        <td style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{m.name}</td>
                                        <td className="text-mono">{m.value}</td>
                                        <td className="text-muted">{m.source}</td>
                                        <td><span className={`badge ${statusColors[m.status]}`}>{m.status}</span></td>
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
// MAIN APP
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
