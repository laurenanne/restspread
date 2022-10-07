 
  function filterOutOdds(...nums) {
    return nums.filter((n)=> n% 2 === 0);
    };
  
  
  function findMin(...nums){
    return nums.reduce((min, next)=> {
    return(next<min ? next : min); 
    }); 
  };


  function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};
  };

  function doubleAndReturnArgs(arr, ...vals){
    const doubArr = vals.map((n)=> n*2);
    return [...arr, ...doubArr];  
  };

  function removeRandom(items) {
    let indx = Math.floor(Math.random()*items.length-1);
    return itemsCopy = items.filter((n, i) => i !==indx);  
  
  };
 

  function extend(array1, array2){
    return [...array1, ...array2];
  };


  function addKeyVal(obj, key, val) {
    return newObj = {...obj, key:val};
  };

  function removeKey(obj, key) {
    const newObj = {...obj};
    for(let k in newObj){
      if(k===key){
        delete newObj[k];
      }
      else{
      }

    }
    return newObj;
  }


  function combine(obj1, obj2) {
    return newObj = {...obj1, ...obj2};

  }

  function update(obj, key, val) {
    return newObj = {...obj, key:val};
  }