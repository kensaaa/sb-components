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
const MyLabel = ({
  label = "no label",
  size = "normal",
  allCaps = false,
  color = "text-primary",
}: MyLabelProps) => {
  return (
    <span className={`label ${size} ${color}`}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export { MyLabel };
