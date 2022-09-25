import React from "react";
import { useDrag } from "react-dnd";
import { SidePanelList } from "./sidePanelList";
import {
  ListToRender,
  ListToRenderControl,
  ListToRenderLook,
  ListToRenderMotion,
} from "../utils";
export default function Sidebar({ selectedChar }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "all",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className="w - 60 flex- none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      {/* <div className="font-bold"> {"Events"} </div>
      <div
        ref={drag}
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div
        ref={drag}
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"When this sprite clicked"}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Move 10 steps"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div> */}

      <div className="font-bold"> {"Events"} </div>
      <div>
        {ListToRender.map((e) => (
          <SidePanelList
            selectedChar={selectedChar}
            key={e.id}
            onclick={e.onclick}
            color={e.color}
            id={e.id}
            title={e.title}
            icon={e.icon.length !== 0 && e.icon}
          />
        ))}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      <div>
        {ListToRenderMotion.map((e) => (
          <SidePanelList
            key={e.id}
            color={e.color}
            id={e.id}
            title={e.title}
            icon={e.icon.length !== 0 && e.icon}
          />
        ))}
      </div>
      <div className="font-bold"> {"Look"} </div>
      <div>
        {ListToRenderLook.map((e) => (
          <SidePanelList
            key={e.id}
            color={e.color}
            id={e.id}
            title={e.title}
            icon={e.icon.length !== 0 && e.icon}
          />
        ))}
      </div>
      <div className="font-bold"> {"Control"} </div>
      <div>
        {ListToRenderControl.map((e) => (
          <SidePanelList
            key={e.id}
            color={e.color}
            id={e.id}
            title={e.title}
            icon={e.icon.length !== 0 && e.icon}
          />
        ))}
      </div>
    </div>
  );
}
