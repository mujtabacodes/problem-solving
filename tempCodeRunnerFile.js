function titleCase(sentense) {
    let str=sentense.split(" ");
    let updateStr;
    for (var i = 0; i < str.length; i++) {
      updateStr=str[i][0].toUpperCase();
  
      
      return updateStr;
    }
  }
  
  console.log(titleCase("I'm a little tea pot"));