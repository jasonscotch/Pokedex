function shuffleArray(array) {
    const shuffledArray = [...array];
    
    const randomSort = () => Math.random() - 0.5;
    
    return shuffledArray.sort(randomSort);
  }
  
  function splitArray(array) {
    const shuffledArray = shuffleArray(array);
    
    const splitPoint = Math.floor(shuffledArray.length / 2);
    
    const firstHalf = shuffledArray.slice(0, splitPoint);
    const secondHalf = shuffledArray.slice(splitPoint);
    
    return [firstHalf, secondHalf];
  }
  
  export {shuffleArray, splitArray};