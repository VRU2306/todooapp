import React from "react";
import { ReactComponent as Delete } from "./x-button.svg";
import { ReactComponent as CheckImg } from "./tick.svg";
import { ReactComponent as UncheckImg } from "./customer-service.svg";

export default function Todo({ todo, active, onChange, delNote }) {
    return (
        <div className="box">
            <li
                name={todo}
                onClick={onChange}
                className={active ? "active" : undefined}
            >
                {active ? <CheckImg /> : <UncheckImg />}
                {todo}
            </li>
            <div className="del">
                <Delete onClick={delNote} />
            </div>
        </div>
    );
}