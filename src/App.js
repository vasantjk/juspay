import React from "react";
// import Sidebar from "./components/Sidebar";
// import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragDrop } from "./components/dragDrop";
import Icon from "./components/Icon";
export default function App() {
  const [character, setCharacter] = React.useState([
    {
      id: "character_1",
      angle: 0,
    },
  ]);
  const [selectedChar, setSelectedChar] = React.useState("character_1");
  const addCharacter = () => {
    let Rest = [
      {
        id: `character_${character.length + 1}`,
        angle: 0,
      },
    ];
    setCharacter([...character, ...Rest]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-blue-100 pt-6 font-sans">
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 m-2 px-4 rounded"
            onClick={() => setTimeout(() => window.location.reload())}
          >
            reset
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 m-2 px-4 rounded"
            onClick={() => addCharacter()}
          >
            Add
          </button>
          <select onChange={(e) => setSelectedChar(e.target.value)}>
            {character.map((e) => (
              <option key={e.id} value={e.id}>
                {e.id}
              </option>
            ))}
          </select>
        </div>
        <div className="h-screen overflow-hidden flex flex-row">
          {/* <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar />
            <MidArea />
          </div> */}
          <DragDrop selectedChar={selectedChar} />

          <div
            draggable
            style={{ position: "relative", padding: "10px" }}
            className="w-1/2 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2"
          >
            <PreviewArea character={character} selectedChar={selectedChar} />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
