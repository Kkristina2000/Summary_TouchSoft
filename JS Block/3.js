function filterStrings (arr,length){
    const result=arr.filter(string => string.length <= length);
    return result;
  }
  console.log (filterStrings(['a', 'ab', 'abc'], 2));