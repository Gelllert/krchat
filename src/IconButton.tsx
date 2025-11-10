import "./IconButton.css";

export type IconButtonProps = {
  icon: string;
  onClick?: () => void;
  text?: string;
};

export function IconButton({ icon, onClick, text }: IconButtonProps) {
  return (
    <button type="button" class="IconButton" onClick={onClick}>
      <span class="material-symbols-outlined">{icon}</span>
      {text && <span class="IconButtonText">{text}</span>}
    </button>
  );
}