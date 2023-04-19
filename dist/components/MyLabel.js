import { jsx as _jsx } from "react/jsx-runtime";
import "./mylabel.css";
/**
 * Primary UI component for user interaction
 */
const MyLabel = ({ label = "no label", size = "normal", allCaps = false, color = "text-primary", }) => {
    return (_jsx("span", { className: `label ${size} ${color}`, children: allCaps ? label.toUpperCase() : label }));
};
export { MyLabel };
