import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Sparkles, Zap } from 'lucide-react';
import PasswordInput from './components/PasswordInput';
import StrengthMeter from './components/StrengthMeter';
import SecurityAnalysis from './components/SecurityAnalysis';
import PasswordGenerator from './components/PasswordGenerator';
import { analyzePassword } from './utils/passwordAnalyzer';

function App() {
  const [password, setPassword] = useState('');
  const analysis = useMemo(() => analyzePassword(password), [password]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* ── Background ── */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0c1222] to-slate-950" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-indigo-600/[0.07] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[45%] h-[50%] bg-purple-600/[0.06] rounded-full blur-[100px]" />
        <div className="absolute top-[30%] right-[20%] w-[25%] h-[25%] bg-cyan-500/[0.04] rounded-full blur-[80px]" />
      </div>

      {/* ── Hero Header ── */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className="text-center mb-10 max-w-xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wide mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          AI-Powered Security Intelligence
        </div>

        <div className="flex items-center justify-center gap-3 mb-4">
          <Shield className="w-9 h-9 text-indigo-400" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-heading">
            Cipher<span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Guard</span>
          </h1>
        </div>

        <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed">
          Real-time Advanced Password Security Intelligence
        </p>
      </motion.header>

      {/* ── Main Glass Card ── */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
        className="w-full max-w-2xl"
      >
        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/[0.08] rounded-3xl shadow-2xl shadow-black/40 p-6 md:p-10 space-y-8">
          {/* Input Section */}
          <div className="space-y-5">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Target Password
            </label>
            <PasswordInput
              value={password}
              onChange={setPassword}
              strength={analysis.score}
            />
            <div className="pt-2">
              <PasswordGenerator onGenerate={setPassword} />
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          {/* Analysis Section */}
          <AnimatePresence mode="wait">
            {!password ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-16 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                  <Zap className="w-7 h-7 text-slate-600" />
                </div>
                <p className="text-slate-500 text-sm max-w-[260px] leading-relaxed">
                  Enter or generate a password to begin security analysis
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <StrengthMeter
                  score={analysis.score}
                  label={analysis.label}
                  color={analysis.color}
                />
                <SecurityAnalysis
                  metrics={analysis.metrics}
                  entropy={analysis.entropy}
                  crackTime={analysis.crackTime}
                  suggestions={analysis.suggestions}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.main>

      {/* ── Footer Badge ── */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex items-center gap-3 text-slate-600 text-xs font-medium"
      >
        <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.05] px-3 py-1.5 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Neural Engine Active
        </div>
        <span className="text-slate-700">•</span>
        <span>End-to-end local encryption</span>
      </motion.footer>
    </div>
  );
}

export default App;
