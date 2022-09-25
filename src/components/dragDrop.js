import React from "react";
import Sidebar from "./Sidebar";
import MidArea from "./MidArea";

export const DragDrop = ({ selectedChar }) => {
  return (
    <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
      <Sidebar selectedChar={selectedChar} />
      <MidArea selectedChar={selectedChar} />
    </div>
  );
};
