import { IconButton } from "./IconButton";
import { TextInput, TextInputProps } from "./TextInput";
import "./TextInputAndButton.css"

export type TextInputAndButtonProps = TextInputProps & {
buttonContent?: string;
onClick?: () => void;
icon?: string;
}
export function TextInputAndButton(  { buttonContent, icon, onClick, ...textInputProps }:
TextInputAndButtonProps )
{
return <div class="TextInputAndButton">
<TextInput { ...textInputProps } onEnter={ onClick } />
<IconButton icon={icon} onClick={ onClick } text={ buttonContent }/>

</div>
}
