import "./index.css";
import {useSpring, animated} from "@react-spring/web";
import {useState} from "react";
import Wrapper from "../../Wrapper";

const FadingGreeting = () => {

    // Define State
    const [clicked, set] = useState(false)

    // Define Spring
    const props = useSpring({
        from: {
            opacity: 1
        },
        to: {
            opacity: 0
        },
        reset: true,
        reverse: clicked,
        delay: 400,
        config: {
            frequency: 2,
            duration: 1000
        },
        onRest: () => set(!clicked)
    })

    console.log({ props })

    // Element - handled outside the react!
    return <Wrapper>
        <div id="fading-message"/>
        <animated.h1 style={props} onClick={() => set(!clicked)}>
            I will fade away!
        </animated.h1>
    </Wrapper>
}
export default FadingGreeting;