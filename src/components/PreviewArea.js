import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({ character, selectedChar }) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  let elmnt = null;
  function dragMouseDown(e, id) {
    elmnt = document.getElementById(id);

    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }

  return (
    <div
      className="flex-none h-full overflow-y-auto p-2"
      style={{ flexGrow: 1 }}
    >
      {character.map((e, i) => (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",

            transform: "translate(-50%,-50%)",
          }}
          key={`char${i}`}
          id={`character_${i + 1}`}
          onMouseDown={(e) => dragMouseDown(e, `character_${i + 1}`)}
        >
          <CatSprite id={"ChangeMe"} />
        </div>
      ))}
    </div>
  );
}
