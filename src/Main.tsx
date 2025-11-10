import { LeftPane } from "./LeftPane";
import { RightPane } from "./RightPane";
import "./Main.css"
import { ConversationDto } from "./ChatService";
import { useState } from "preact/hooks";

export function Main()
{
let [ selected, setSelected ] = useState<ConversationDto>();
return <div class={"Main " + (selected ? "right" : "left")}>
<LeftPane selected={ selected } onSelect={ setSelected } />
<RightPane conversation={ selected } onBack={()=>{setSelected(undefined)}}/>
</div>
}

