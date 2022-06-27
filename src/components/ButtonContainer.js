import { useEffect, useState } from 'react';
import Button from './Button';

const ButtonContainer = () => {
  const [btn, setBtn] = useState({});
  const [highlight, setHighlight] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    // yatay kontrol
    for (let i = 0; i <= 6; i += 3) {
      const check = btn[i] + btn[i + 1] + btn[i + 2];
      if (check === 'XXX' || check === 'OOO') setHighlight([i, i + 1, i + 2]);
    }
    // dikey kontrol
    for (let i = 0; i <= 2; i++) {
      const check = btn[i] + btn[i + 3] + btn[i + 6];
      if (check === 'XXX' || check === 'OOO') setHighlight([i, i + 3, i + 6]);
    }
    // capraz kontrol
    const checkDiagonal1 = btn[0] + btn[4] + btn[8]; // sol ustten sag asagiya
    const checkDiagonal2 = btn[2] + btn[4] + btn[6]; // sag ustten sol asagiya

    if (checkDiagonal1 === 'XXX' || checkDiagonal1 === 'OOO')
      setHighlight([0, 4, 8]);
    else if (checkDiagonal2 === 'XXX' || checkDiagonal2 === 'OOO')
      setHighlight([2, 4, 6]);
  }, [btn]);

  useEffect(() => {
    if (highlight.length === 3) setGameOver(true);
  }, [highlight]);

  return (
    <div className={`flex flex-wrap gap-[10px] w-80`}>
      {[...Array(9)].map((_, index) => (
        <Button
          key={index}
          btn={btn}
          setBtn={setBtn}
          index={index}
          highlight={highlight.includes(index)}
          setHighlight={setHighlight}
          gameOver={gameOver}
          setGameOver={setGameOver}
        />
      ))}
    </div>
  );
};
export default ButtonContainer;
