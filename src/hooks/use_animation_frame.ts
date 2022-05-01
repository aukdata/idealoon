import { useCallback, useEffect, useRef } from 'react';

export function useAnimationFrame(f: (milliseconds: number) => void) {
    const animationRef = useRef<number | null>(null);
    
    const animate = useCallback((milliseconds: number) => {
        f(milliseconds);
        animationRef.current = requestAnimationFrame(animate);
    }, [f]);

    useEffect(() => {
        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        }
    }, [animate]);
}
