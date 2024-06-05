import React from "react";
import AutoSuggestFunction from "./Function";

const AutoSuggest = () => {
  const suggestions = [
    "Apple",
    "Banana",
    "Orange",
    "Strawberry",
    "Mango",
    "Grapes",
    "Pineapple",
    "Watermelon",
    "Cherry",
    "Peach",
    "Pear",
    "Kiwi",
    "Plum",
    "Apricot",
    "Blueberry",
    "Raspberry",
    "Blackberry",
    "Cantaloupe",
    "Lemon",
    "Lime",
    "Coconut",
    "Pomegranate",
    "Grapefruit",
    "Tangerine",
    "Nectarine",
    "Cranberry",
    "Gooseberry",
    "Kumquat",
    "Starfruit",
    "Persimmon",
    "Ugli Fruit",
    "Ackee",
  ];
  return (
    <>
      <div style={{ alignItems: "center", marginLeft: "5%" }}>
        <h1>AutoSuggest</h1>
      </div>
      <AutoSuggestFunction suggestions={suggestions} />
    </>
  );
};
export default AutoSuggest;
