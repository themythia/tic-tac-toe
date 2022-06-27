import { useEffect, useState } from 'react';
import Button from './Button';

const ButtonContainer = () => {
  const [btn, setBtn] = useState({});
  const [highlight, setHighlight] = useState({});
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    // yatay kontrol
    for (let i = 0; i <= 6; i += 3) {
      if (
        btn[0 + i] + btn[1 + i] + btn[2 + i] === 'XXX' ||
        btn[0 + i] + btn[1 + i] + btn[2 + i] === 'OOO'
      ) {
        setHighlight({
          [0 + i]: true,
          [1 + i]: true,
          [2 + i]: true,
        });
      }
    }
    // dikey kontrol
    for (let i = 0; i <= 2; i++) {
      if (
        btn[0 + i] + btn[3 + i] + btn[6 + i] === 'XXX' ||
        btn[0 + i] + btn[3 + i] + btn[6 + i] === 'OOO'
      ) {
        setHighlight({
          [0 + i]: true,
          [3 + i]: true,
          [6 + i]: true,
        });
      }
    }
    // capraz kontrol
    if (
      btn[0] + btn[4] + btn[8] === 'XXX' ||
      btn[0] + btn[4] + btn[8] === 'OOO'
    ) {
      setHighlight({ 0: true, 4: true, 8: true });
    } else if (
      btn[2] + btn[4] + btn[6] === 'XXX' ||
      btn[2] + btn[4] + btn[6] === 'OOO'
    ) {
      setHighlight({ 2: true, 4: true, 6: true });
    }
  }, [btn]);

  useEffect(() => {
    if (Object.keys(highlight).length === 3) setGameOver(true);
  }, [highlight]);

  return (
    <div className={`flex flex-wrap gap-[10px] w-80`}>
      {[...Array(9)].map((_, index) => (
        <Button
          key={index}
          btn={btn}
          setBtn={setBtn}
          index={index}
          highlight={highlight[index]}
          setHighlight={setHighlight}
          gameOver={gameOver}
          setGameOver={setGameOver}
        />
      ))}
    </div>
  );
};
export default ButtonContainer;
