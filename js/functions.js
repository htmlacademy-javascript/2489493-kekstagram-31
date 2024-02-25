function comparesLength (string = '', maxSymbols = 1) => {
  return (string.length) <= maxSymbols);
  };


  /***********************************************************/
  const getPalidrome = (string = '') => {

    string = string.replaceAll (' ', '').lowerCase();
    let reversedLine = '';
    for (i = string.length - 1, i >= 0, i --){
      reversedLine += string[i];
    }
    return string === reversedLine;
  }
