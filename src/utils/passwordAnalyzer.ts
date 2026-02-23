import zxcvbn from 'zxcvbn';

export interface PasswordAnalysis {
    score: number;
    label: 'Weak' | 'Moderate' | 'Strong' | 'Unbreakable';
    color: string;
    entropy: number;
    crackTime: string;
    suggestions: string[];
    feedback: {
        warning?: string;
        suggestions?: string[];
    };
    metrics: {
        length: boolean;
        uppercase: boolean;
        lowercase: boolean;
        numbers: boolean;
        special: boolean;
    };
}

export const analyzePassword = (password: string): PasswordAnalysis => {
    const result = zxcvbn(password);

    // Calculate entropy mathematically
    // E = log2(R^L) where R is the character pool size and L is the length
    let poolSize = 0;
    if (/[a-z]/.test(password)) poolSize += 26;
    if (/[A-Z]/.test(password)) poolSize += 26;
    if (/[0-9]/.test(password)) poolSize += 10;
    if (/[^a-zA-Z0-9]/.test(password)) poolSize += 33;

    const entropy = password.length > 0 ? Math.log2(Math.pow(poolSize, password.length)) : 0;

    const metrics = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        numbers: /[0-9]/.test(password),
        special: /[^a-zA-Z0-9]/.test(password),
    };

    const getLabel = (score: number): PasswordAnalysis['label'] => {
        if (score <= 1) return 'Weak';
        if (score === 2) return 'Moderate';
        if (score === 3) return 'Strong';
        return 'Unbreakable';
    };

    const getColor = (score: number): string => {
        if (score <= 1) return '#FF4D6D'; // Security Alert Red
        if (score === 2) return '#FBBF24'; // Yellow
        if (score === 3) return '#10B981'; // Green
        return '#00F5FF'; // Neon Cyan
    };

    return {
        score: result.score,
        label: getLabel(result.score),
        color: getColor(result.score),
        entropy: Math.round(entropy * 100) / 100,
        crackTime: result.crack_times_display.offline_slow_hashing_1e4_per_second as string,
        suggestions: result.feedback.suggestions,
        feedback: result.feedback,
        metrics,
    };
};

export const generateSecurePassword = (length: number = 16): string => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
};
