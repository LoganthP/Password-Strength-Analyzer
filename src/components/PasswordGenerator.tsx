import React, { useState } from 'react';
import { RefreshCw, Copy, Check } from 'lucide-react';
import { generateSecurePassword } from '../utils/passwordAnalyzer';

interface PasswordGeneratorProps {
    onGenerate: (password: string) => void;
}

const PasswordGenerator: React.FC<PasswordGeneratorProps> = ({ onGenerate }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (password: string) => {
        navigator.clipboard.writeText(password);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleGenerate = () => {
        const newPassword = generateSecurePassword(18);
        onGenerate(newPassword);
    };

    return (
        <div className="flex gap-2">
            <button
                type="button"
                onClick={handleGenerate}
                className="flex-1 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98] flex items-center justify-center gap-2"
            >
                <RefreshCw className="w-4 h-4" />
                AI Secure Generate
            </button>

            <button
                type="button"
                className="h-12 w-12 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] rounded-xl text-slate-400 hover:text-white transition-all duration-200 flex items-center justify-center active:scale-95"
                title="Generate & Copy"
                onClick={() => {
                    const p = generateSecurePassword(18);
                    onGenerate(p);
                    handleCopy(p);
                }}
            >
                {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                    <Copy className="w-4 h-4" />
                )}
            </button>
        </div>
    );
};

export default PasswordGenerator;
