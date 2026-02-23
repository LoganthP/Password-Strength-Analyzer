import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Brain, Clock, Activity } from 'lucide-react';

interface SecurityAnalysisProps {
    metrics: {
        length: boolean;
        uppercase: boolean;
        lowercase: boolean;
        numbers: boolean;
        special: boolean;
    };
    entropy: number;
    crackTime: string;
    suggestions: string[];
}

const SecurityAnalysis: React.FC<SecurityAnalysisProps> = ({ metrics, entropy, crackTime, suggestions }) => {
    const checklistItems = [
        { key: 'length', label: '8+ Characters', met: metrics.length },
        { key: 'uppercase', label: 'Uppercase', met: metrics.uppercase },
        { key: 'lowercase', label: 'Lowercase', met: metrics.lowercase },
        { key: 'numbers', label: 'Numbers', met: metrics.numbers },
        { key: 'special', label: 'Symbols', met: metrics.special },
    ];

    return (
        <div className="space-y-5">
            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 text-center space-y-1 hover:bg-white/[0.05] transition-colors duration-300">
                    <Brain className="w-4 h-4 text-indigo-400 mx-auto" />
                    <div className="text-xl font-bold text-white font-heading">{entropy}</div>
                    <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Entropy</div>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 text-center space-y-1 hover:bg-white/[0.05] transition-colors duration-300">
                    <Clock className="w-4 h-4 text-purple-400 mx-auto" />
                    <div className="text-xs font-bold text-white truncate px-1" title={crackTime}>{crackTime}</div>
                    <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Crack Time</div>
                </div>
            </div>

            {/* Checklist */}
            <div className="space-y-2">
                <div className="flex items-center gap-2 mb-1">
                    <Activity className="w-3.5 h-3.5 text-slate-500" />
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Requirements</span>
                </div>
                {checklistItems.map((item) => (
                    <div
                        key={item.key}
                        className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors duration-200"
                    >
                        <span className={`text-sm transition-colors duration-300 ${item.met ? 'text-slate-200' : 'text-slate-500'}`}>
                            {item.label}
                        </span>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${item.met ? 'bg-emerald-500/20' : 'bg-white/[0.03]'}`}>
                            {item.met ? (
                                <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                                <X className="w-3 h-3 text-slate-600" />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Suggestions */}
            <AnimatePresence>
                {suggestions.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="rounded-xl bg-red-500/[0.06] border border-red-500/10 p-4"
                    >
                        <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">Suggestions</p>
                        <ul className="space-y-1.5">
                            {suggestions.map((s, i) => (
                                <li key={i} className="text-sm text-slate-400 leading-relaxed flex items-start gap-2">
                                    <span className="text-red-400/60 mt-0.5">›</span>
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SecurityAnalysis;
