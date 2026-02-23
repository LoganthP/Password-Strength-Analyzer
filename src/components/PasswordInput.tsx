import React, { useState } from 'react';
import { Eye, EyeOff, ShieldCheck, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PasswordInputProps {
    value: string;
    onChange: (value: string) => void;
    strength: number;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange, strength }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative w-full">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                {strength >= 3 ? (
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                ) : (
                    <ShieldAlert className={`w-5 h-5 transition-colors duration-300 ${value ? 'text-amber-400' : 'text-slate-500'}`} />
                )}
            </div>

            <input
                type={showPassword ? 'text' : 'password'}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Enter your password..."
                className="w-full h-14 bg-black/40 border border-white/10 rounded-xl px-12 text-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/40 transition-all duration-300 font-mono"
            />

            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-slate-500 hover:text-slate-300 transition-colors duration-200"
            >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>

            <AnimatePresence>
                {value && strength <= 1 && (
                    <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="absolute -bottom-6 left-1 text-xs text-red-400 font-medium"
                    >
                        ⚠ Weak password — add more complexity
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PasswordInput;
