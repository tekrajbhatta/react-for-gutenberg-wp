// import { useState } from "react";
import "./Accordion.css";

function Accordion({labelText, children, open, id, onClick}) {
    // const [open, setOpen] = useState(false);
    // const handleClick = () => {
    //     setOpen((prevValue) => {
    //         return !prevValue;
    //     })
    // }
    const handleClick = () => {
        onClick(id);
    }
    return(
        <div className="accordion">
            <div className="label-text" onClick={handleClick}>
                {labelText}
            </div>
            { !!open &&
                <div className="acc-content">
                    {children}
                </div>
            }
        </div>
    );
}

export default Accordion;