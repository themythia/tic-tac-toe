const Button = ({
  highlight,
  btn,
  setBtn,
  index,
  gameOver,
  setGameOver,
  setHighlight,
}) => {
  const color =
    btn[index] === 'X'
      ? 'hover:bg-customRed text-customRed'
      : btn[index] === 'O'
      ? 'hover:bg-customBlue text-customBlue'
      : 'hover:bg-slate-400';

  const borderColor =
    highlight && btn[index] === 'X'
      ? 'border-customRed'
      : highlight && btn[index] === 'O'
      ? 'border-customBlue'
      : 'border-black';

  const handleButtonState = () => {
    if (gameOver) {
      setBtn({});
      setGameOver(false);
      setHighlight({});
    } else if (btn[index] === '' || !btn[index])
      setBtn((btn) => ({ ...btn, [index]: 'X' }));
    else if (btn[index] === 'X') setBtn((btn) => ({ ...btn, [index]: 'O' }));
    else setBtn((btn) => ({ ...btn, [index]: '' }));
  };

  return (
    <button
      className={`w-[100px] h-[100px] border-[10px] rounded-[20px] text-[64px] bg-white hover:text-white flex justify-center items-center ${color} ${borderColor}`}
      onClick={handleButtonState}
    >
      {btn[index]}
    </button>
  );
};
export default Button;
