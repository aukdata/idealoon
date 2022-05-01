import { RefObject, useEffect, useState } from 'react';

export function resizeCanvas(canvas: HTMLCanvasElement, width?: number, height?: number) {;
    const w = width || canvas.width;
    const h = height || canvas.height;
    const r = window.devicePixelRatio;
    canvas.width = w * r;
    canvas.height = h * r;

    const ctx = canvas.getContext('2d');
    ctx?.scale(r, r);
}

export function useCanvasContext(canvasRef: RefObject<HTMLCanvasElement>, width?: number, height?: number) {
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            resizeCanvas(canvas, width, height);
            
            const ctx = canvas.getContext('2d');
            setContext(ctx);
        }
    }, [canvasRef, width, height]);
    return context;
}
