import React from "react";
import { useDrag } from "react-dnd";

export const SidePanelList = ({
  render = false,
  id,
  title,
  icon = "",
  color = "",
  onclick = () => null,
  inputs,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "all",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div>
      <div
        ref={!render ? drag : null}
        key={id}
        className={`flex flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer ${color}`}
        onClick={() => onclick()}
      >
        {title}
        {icon}
        {inputs}
      </div>
    </div>
  );
};
