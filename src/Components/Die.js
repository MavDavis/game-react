const Die = ({ value, handleChange, isHeld }) => {
  return (
    <div
      className={isHeld ? "green-bg die" : "white-bg die"}
      onClick={handleChange}
    >
      <p>{value}</p>
    </div>
  );
};
export default Die;
