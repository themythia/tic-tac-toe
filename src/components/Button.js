const Button = ({
  highlight,
  btn,
  setBtn,
  index,
  gameOver,
  setGameOver,
  setHighlight,
}) => {
  // button hoverlandiginda background ve
  // text renkleri icin tailwind classlari
  const color =
    btn[index] === 'X'
      ? 'hover:bg-customRed text-customRed'
      : btn[index] === 'O'
      ? 'hover:bg-customBlue text-customBlue'
      : 'hover:bg-slate-400';

  // oyun sonunda kazandiran buttonlarin
  // border renkleri icin tailwind classlari
  const borderColor =
    highlight && btn[index] === 'X'
      ? 'border-customRed'
      : highlight && btn[index] === 'O'
      ? 'border-customBlue'
      : 'border-black';

  const reset = () => {
    setBtn({});
    setGameOver(false);
    setHighlight([]);
  };

  const handleButtonState = () => {
    if (gameOver) reset();
    // eger button bos ise
    else if (btn[index] === '' || !btn[index]) setBtn({ ...btn, [index]: 'X' });
    // eger button X ise
    else if (btn[index] === 'X') setBtn({ ...btn, [index]: 'O' });
    // eger button O ise
    else setBtn({ ...btn, [index]: '' });
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
