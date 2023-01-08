import { useState, useEffect } from "react";
import Die from "./Die";

const Box = () => {
  const [btn, setBtn] = useState("Roll");
  const [dieArray, setDieArray] = useState(setDie());
  useEffect(() => {
    if (dieArray.every((item) => item.isHeld)) {
      setBtn("Reset");
    } else {
      setBtn("Roll");
    }
  }, [dieArray]);

  function setDie() {
    let newArray = [];
    for (let i = 0; i < 10; i++) {
      newArray.push({
        num: Math.floor(Math.random() * 6),
        isHeld: false,
        id: newArray.length + 1,
      });
    }
    return newArray;
  }
  const reloadDieArray = () => {
    const checkAllDieArray = dieArray.every((item) => item.isHeld);
    if (checkAllDieArray) {
      setDieArray(setDie());
    } else {
      setDieArray((oldValue) =>
        oldValue.map((item) =>
          item.isHeld ? item : { ...item, num: Math.floor(Math.random() * 6) }
        )
      );
    }
  };
  const handleDieClick = (id) => {
    setDieArray((oldValue) =>
      oldValue.map((item) =>
        item.id === id ? { ...item, isHeld: !item.isHeld } : item
      )
    );
  };
  return (
    <div className="mother">
      <div className="box">
          {dieArray.map((item, ind) => (
            <Die
              value={item.num}
              key={ind}
              isHeld={item.isHeld}
              handleChange={() => {
                handleDieClick(item.id);
              }}
            />
          ))}
      </div>
      <button className="btn" onClick={reloadDieArray}>
        {btn}
      </button>
    </div>
  );
};
export default Box;
