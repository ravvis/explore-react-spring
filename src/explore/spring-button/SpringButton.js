import "./SpringButton.css";
import {useRef, useState} from "react";
import {useSpring, animated} from "@react-spring/web";
import {calc, transform} from "./utils";
import Wrapper from "../../Wrapper";

const SpringButton = ({ rotation = 10, scale = 1.2 }) => {

    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 73, tension: 500, friction: 100 }
    }))

    const buttonRef = useRef();

    return <Wrapper title="Springy Button">
        <div id="springy-button"/>
        <animated.button
            ref={buttonRef}
            className="springy-button"
            onMouseMove={({ clientX, clientY }) => {
                // set({ xys: [0, 0, 1] })
                console.log(clientX, clientY, buttonRef)
                set({ xys: calc(rotation, scale, clientX, clientY, buttonRef.current) })
            }}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
                transform: props.xys.to(transform),
            }}
        >
            Hover over me!
        </animated.button>
    </Wrapper>
}

export default SpringButton;