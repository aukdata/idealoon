import { useRef } from "react";
import { Idea, Group, Item } from './Types';
import { useCanvasContext } from '../../hooks/use_canvas';
import { useAnimationFrame } from '../../hooks/use_animation_frame';

function Field({ width, height }: { width: number, height: number }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const context = useCanvasContext(canvasRef, width, height);
    
    useAnimationFrame(_ => {
        if (context) {
            context.fillStyle = 'red';
            context.fillRect(100, 100, 100, 100);
        }
    });

    return (
        <canvas ref={canvasRef}>
            Sorry, this browser is unsupported.
        </canvas>
    );
}

export default Field;
