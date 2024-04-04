import React, { useState } from "react";
import clsx from "clsx";
import style from "./Reply.module.css";

export default function Reply({
  Option,
  setSelectedOption,
  selectedOption,
}: {
  Option: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  selectedOption: string;
}) {
  const handleSelect = () => {
    setSelectedOption(Option);
  };

  return (
    <span
      className={clsx(
        style.reply,
        Option === selectedOption ? style.selected : null
      )}
      onClick={handleSelect}
    >
      {Option}
    </span>
  );
}
