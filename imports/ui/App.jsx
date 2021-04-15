import React from "react";
import { Hello } from "./Hello.jsx";
import { Info } from "./Info.jsx";

const tasks = [
  { _id: 1, text: "First Task" },
  { _id: 2, text: "Second Task" },
  { _id: 3, text: "Third Task" },
];

export const App = () => (
  <div>
    <h1>This will list tasks!</h1>
    <Hello />
    <Info />
  </div>
);
