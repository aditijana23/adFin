
import { useEffect, useState } from 'react';

// export const setSize = () => {
//   window.addEventListener('resize', () => {
    
//   });
// }


export const ScreenSizeList = () => {

  // const hasWindow = typeof window !== 'undefined';
  const [screenSize, setScreenSize] = useState<{screenWidth: number; screenHeight: number}>({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight
  });

  const setDimension = () => {
    setScreenSize({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    })
  }
  
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
    
  }, [])




  return screenSize
};




