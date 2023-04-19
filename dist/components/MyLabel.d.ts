/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /**
     * Text value label
     */
    label: string;
    /**
     * Font size
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * Text Mayus
     */
    allCaps: boolean;
    /**
     * Color Text
     */
    color: "text-primary" | "text-secondary" | "text-tertiary";
}
/**
 * Primary UI component for user interaction
 */
declare const MyLabel: ({ label, size, allCaps, color, }: MyLabelProps) => JSX.Element;
export { MyLabel };
