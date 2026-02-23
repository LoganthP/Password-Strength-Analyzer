import React from 'react';
import { motion } from 'framer-motion';

interface StrengthMeterProps {
    score: number;
    label: string;
    color: string;
}

const StrengthMeter: React.FC<StrengthMeterProps> = ({ score, label, color }) => {
    const percentage = (score / 4) * 100;

    const getLabelStyle = () => {
        if (score <= 1) return 'text-red-400';
        if (score === 2) return 'text-amber-400';
        if (score === 3) return 'text-emerald-400';
        return 'text-cyan-400';
    };

    return (
        <div className="space-y-3">
            <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Strength</span>
                <motion.span
                    key={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`text-sm font-bold ${getLabelStyle()}`}
                >
                    {label}
                </motion.span>
            </div>

            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                    className="h-full rounded-full"
                    style={{
                        backgroundColor: color,
                        boxShadow: `0 0 12px ${color}60`,
                    }}
                />
            </div>

            <div className="grid grid-cols-4 gap-1.5">
                {[0, 1, 2, 3].map((step) => (
                    <div
                        key={step}
                        className="h-1 rounded-full transition-all duration-500"
                        style={{
                            backgroundColor: score > step ? color : 'rgba(255,255,255,0.06)',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default StrengthMeter;
