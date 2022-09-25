import React from "react";
import { useDrop } from "react-dnd";
import {
  ListToRender,
  ListToRenderMotion,
  ListToRenderLook,
  ListToRenderControl,
} from "../utils";
import Icon from "./Icon";
import ReOrder from "./reOrder";
import { SidePanelList } from "./sidePanelList";
export default function MidArea({ selectedChar }) {
  const [DroppedBlock, setDroppedBlock] = React.useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "all",
    drop: (item) => addToMidArea(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addToMidArea = (_id) => {
    let total = [
      ...ListToRender,
      ...ListToRenderMotion,
      ...ListToRenderLook,
      ...ListToRenderControl,
    ];
    total = total.filter((list) => list.id === _id);

    setDroppedBlock((block) => {
      block = [...block, ...total];
      block = block.map((e, i) => {
        let all = { ...e };
        all = { ...all, index: i };
        return all;
      });
      return block;
    });
  };
  const handleDelete = (delete_Id) => {
    let deletedData = DroppedBlock.filter((e, i) => i !== delete_Id);
    setDroppedBlock(deletedData);
  };
  const movePetListItem = React.useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = DroppedBlock[dragIndex];
      const hoverItem = DroppedBlock[hoverIndex];
      // Swap places of dragItem and hoverItem in the pets array
      setDroppedBlock((pets) => {
        const updatedPets = [...pets];
        updatedPets[dragIndex] = hoverItem;
        updatedPets[hoverIndex] = dragItem;
        return updatedPets;
      });
    },
    [DroppedBlock]
  );
  return (
    <div
      ref={drop}
      className="flex-1 h-full overflow-auto"
      style={{
        border: isOver ? "2px dotted red" : "",
        height: "100%",
        transition: "all 0.1s",
      }}
    >
      {DroppedBlock.map((rend, rendIndex) => (
        <div
          key={rend.id + rendIndex}
          style={{ display: "flex", transition: "all 2s" }}
        >
          <div style={{ flexGrow: "1" }}>
            <ReOrder
              render={true}
              onclick={(e) => rend.onclick(e, DroppedBlock, selectedChar)}
              key={rend.id}
              isOver={isOver}
              color={rend.color}
              id={rend.id}
              index={rend.index}
              title={rend.title}
              icon={rend.icon}
              inputs={rend.inputs}
              // moveListItem={movePetListItem}
            />
          </div>
          <div
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={() => handleDelete(rendIndex)}
          >
            <Icon name="window-close" size={15} className="mx-2" />
          </div>
        </div>
      ))}
    </div>
  );
}
