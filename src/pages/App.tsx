import { useEffect, useRef, useState } from 'react';
import './App.css';
import Field from '../components/Field/Field';

function App() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            setSize({
                width: entries[0].contentRect.width,
                height: entries[0].contentRect.height
            });
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="App" ref={containerRef}>
            <Field width={size.width} height={size.height} />
        </div>
    );
}

export default App;
