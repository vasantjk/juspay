import React from "react";
import Icon from "./components/Icon";
import "./style.css";
var angle = 0;

export const ListToRender = [
  {
    id: "event1",
    title: "When Clicked",
    icon: <Icon name="flag" size={15} className="text-green-600 mx-2" />,
    color: "bg-yellow-500",
    onclick: async (e, v, ind) => {
      for (let i = 0; i <= v?.length; i++) {
        if (
          v[i]?.id.startsWith("moti") ||
          v[i]?.id.startsWith("look") ||
          v[i]?.id.startsWith("control")
        ) {
          if (v[i]?.id === "control1") {
            setTimeout(function () {
              let str2 = document.getElementById("control1Text").value;
              let last_time = new Date().getTime();
              let curr_time = new Date().getTime();
              while ((curr_time - last_time) / 1000 < str2 - 2) {
                curr_time = new Date().getTime();
              }
            }, 500);
          } else if (v[i]?.id === "control2") {
            let repeatVal = parseInt(
              document.getElementById("control2Text").value
            );
            for (let ij = i; ij < v.length; ij++) {
              v?.[ij]?.onclick(e, v, ind, repeatVal);
              i++;
            }
          }

          //else if (v[i]?.id === "control3") {
          // while (1) {
          //   let indd;
          //   if (v.length === i) {
          //     indd = 0;
          //   }
          //   setTimeout(function () {
          //     v?.[indd]?.onclick(e, v, ind);
          //   }, indd * 1000);
          //   indd++;
          // }
          // }
          else {
            setTimeout(function () {
              v?.[i]?.onclick(e, v, ind);
            }, i * 400);
          }
        }
      }
    },
  },
  {
    id: "event2",
    title: "When this sprite clicked",
    icon: "",
    color: "bg-yellow-500",
  },
];
export const ListToRenderMotion = [
  {
    id: "motion1",
    title: "Move Forward steps",
    icon: "",
    color: "bg-blue-500",
    onclick: (e, list, id, repeat = 1) => {
      const el = document.getElementById(id);
      const elInput = document.getElementById("motion1Text").value
        ? document.getElementById("motion1Text").value
        : 0;
      var left = el.offsetLeft;
      el.style.position = "absolute";
      el.style.left = left + parseInt(elInput) * repeat + "px";
    },
    inputs: <input id="motion1Text" type="number" style={{ color: "black" }} />,
  },
  {
    id: "motion2",
    title: "Move Backward steps",
    icon: "",
    color: "bg-blue-500",
    onclick: (e, list, id, repeat = 1) => {
      const el = document.getElementById(id);
      const elInput = document.getElementById("motion2Text").value
        ? document.getElementById("motion2Text").value
        : 0;
      var left = el.offsetLeft;
      el.style.position = "absolute";
      el.style.left = left - parseInt(elInput) * repeat + "px";
    },
    inputs: <input id="motion2Text" type="number" style={{ color: "black" }} />,
  },
  {
    id: "motion3",
    title: "Turn degree",
    icon: <Icon name="undo" size={15} className="text-white mx-2" />,
    color: "bg-blue-500",
    onclick: (e, list, id, repeat = 1) => {
      const el = document.getElementById(id);
      const elInput = document.getElementById("motion3Text").value
        ? document.getElementById("motion3Text").value
        : 0;
      el.style.transform = `rotate(${angle - parseInt(elInput) * repeat}deg)`;
      angle -= parseInt(elInput) * repeat;
    },
    inputs: <input id="motion3Text" type="number" style={{ color: "black" }} />,
  },
  {
    id: "motion4",
    title: "Turn degree",
    icon: <Icon name="redo" size={15} className="text-white mx-2" />,
    color: "bg-blue-500",
    onclick: (e, list, id, repeat = 1) => {
      const el = document.getElementById(id);
      const elInput = document.getElementById("motion4Text").value
        ? document.getElementById("motion4Text").value
        : 0;
      el.style.transform = `rotate(${angle + parseInt(elInput) * repeat}deg)`;
      angle += parseInt(elInput) * repeat;
    },
    inputs: <input id="motion4Text" type="number" style={{ color: "black" }} />,
  },
  {
    id: "motion5",
    title: "Point In Direction",
    icon: <Icon name="redo" size={15} className="text-white mx-2" />,
    color: "bg-blue-500",
    onclick: (e, list, id, repeat = 1) => {
      const el = document.getElementById(id);
      const elInput = document.getElementById("motion5Text").value
        ? document.getElementById("motion5Text").value
        : 0;
      el.style.transform = `rotate(${parseInt(elInput) * repeat}deg)`;
    },
    inputs: <input id="motion5Text" type="number" style={{ color: "black" }} />,
  },
];

export const ListToRenderLook = [
  {
    id: "look1",
    title: "say hello for seconds",
    icon: "",
    color: "bg-blue-500",
    onclick: (e, list, id) => {
      const el = document.getElementById(id);
      const elInput = document.getElementById("look1Text").value;
      var newNode = document.createElement("div");
      newNode.setAttribute("id", "cloud");
      newNode.innerHTML = "Hello";
      el.appendChild(newNode);

      setTimeout(() => el.removeChild(newNode), parseInt(elInput) * 1000);
    },
    inputs: (
      <input
        pattern="^[0-9]*[.,]?[0-9]*$"
        id="look1Text"
        type="number"
        style={{ color: "black" }}
      />
    ),
  },
  {
    id: "look2",
    title: "change size by ",
    icon: "",
    color: "bg-blue-500",
    onclick: (e, list, id) => {
      const el = document.getElementById("ChangeMe");
      const elInput = document.getElementById("look2Text").value;
      el.style.width = elInput + "px";
      el.style.height = elInput + "px";
    },
    inputs: <input id="look2Text" type="number" style={{ color: "black" }} />,
  },
];
export const ListToRenderControl = [
  {
    id: "control1",
    title: "wait seconds ",
    icon: "",
    color: "bg-blue-500",
    onclick: (e, list, id) => null,
    inputs: (
      <input id="control1Text" type="number" style={{ color: "black" }} />
    ),
  },
  {
    id: "control2",
    title: "repeat",
    icon: "",
    color: "bg-blue-500",
    onclick: (e, list, id) => null,
    inputs: (
      <input id="control2Text" type="number" style={{ color: "black" }} />
    ),
  },
  // {
  //   id: "control3",
  //   title: "ForEver",
  //   icon: "",
  //   color: "bg-blue-500",
  //   onclick: (e, list, id) => null,
  //   inputs: "",
  // },
];
