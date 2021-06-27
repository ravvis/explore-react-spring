import "./Accordion.css";
import {useState} from "react";
import Wrapper from "../../Wrapper";

const Accordion = () => {

    const [open, set] = useState(false);

    return <Wrapper title="Smooth Accordion">
        <div className="accordion-wrapper" id="smooth-accordion">
            <button className="accordion-title" onClick={() => set(!open)}>
                Header
            </button>
            <p className={`accordion-content ${open ? "open" : ""}`}>
                Content
                <div style={{ position: "fixed", top: 0 }}>Hello</div>
            </p>
        </div>
    </Wrapper>
}
export default Accordion;