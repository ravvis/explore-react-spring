import {useEffect, useState} from "react";

const interpolate = (value, start, end, limit) =>
    start + (value / limit) * (end - start);

export const calc = (
    rotation,
    scale,
    mouseX,
    mouseY,
    { offsetTop, offsetLeft, offsetWidth, offsetHeight }
) => {
    return [
        interpolate(
            mouseY - offsetTop + window.pageYOffset,
            rotation,
            -rotation,
            offsetWidth
        ),
        interpolate(
            mouseX - offsetLeft + window.pageXOffset,
            -rotation,
            rotation,
            offsetHeight
        ),
        scale,
    ]
};

export const transform = (x, y, s) =>
    `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const useReducedMotion = () => {
    const [matches, setMatch] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setMatch(mediaQuery.matches);
        const handleChange = () => {
            setMatch(mediaQuery.matches);
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);
    return matches;
};