import { useState } from "react";
import Die from "./Die";

const Box = () => {
  const [dieArray, setDieArray] = useState(setDie());

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
    // setDieArray(setDie());
    
    setDieArray((oldValue) =>
      oldValue.map((item) =>
        item.isHeld ?  item : { ...item, num: Math.floor(Math.random() * 6) } 
      )
    );
  };
  const handleDieClick = (id) => {
    setDieArray((oldValue) =>
      oldValue.map((item) =>
        item.id === id ? { ...item, isHeld: !item.isHeld } : item
      )
    );
  };
  return (
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
      <button className="btn" onClick={reloadDieArray}>
        roll
      </button>
    </div>
  );
};
export default Box;
