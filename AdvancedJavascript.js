// Iterative function to implement Binary Search 
let iterativeFunction = function (arr, x) { 
   
    let start=0, end=arr.length-1; 
          
    // Iterate while start not meets end 
    while (start<=end){ 
  
        // Find the mid index 
        let mid=Math.floor((start + end)/2); 
   
        // If element is present at mid, return True 
        if (arr[mid]===x) return true; 
  
        // Else look in left or right half accordingly 
        else if (arr[mid] < x)  
             start = mid + 1; 
        else
             end = mid - 1; 
    } 
   
    return false; 
} 

//Validate US Telephone Numbers 
function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str); 
}
 
//Symmetric Difference
function sym(args) { 
  var args = Array.prototype.slice.call(arguments);
  var getDiff = function(arr1, arr2) {

    function filterFunction(arr1, arr2) {
      return arr1.filter(function(item) {
        return arr2.indexOf(item) === -1;
      });
    }

    return filterFunction(arr1, arr2)
      .concat(filterFunction(arr2, arr1))
      .filter(function(item, idx, arr) {
        return arr.indexOf(item) === idx;
      });
  };

  return args.reduce(getDiff, []);
}
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])


//Exact Change

function checkCashRegister(price, cash, cid) {
    cash = cash * 100;
    price = price * 100;
 
    var change = cash - price;
    var changeLeft = change;
 
    var totalCid = getTotalCid(cid);
    var result =[];
 
    if (change > totalCid) {
        return 'Insufficient Funds';
    } else if (change === totalCid) {
        return 'Closed';
    }
 
    for (var i = cid.length - 1; i >= 0; i--) {
        var coinName = cid[i][0],
            coinTotal = cid[i][1] * 100,
            coinValue = getValue(coinName),
            coinAmount = coinTotal / coinValue,
            toReturn = 0;
 
        while (changeLeft >= coinValue && coinAmount > 0) {
            changeLeft -= coinValue;            
            coinAmount--;
            toReturn++;
            console.log(changeLeft);
        }
 
        
        if (toReturn > 0) {
            result.push([coinName, toReturn * (coinValue / 100)]);
        }
    }
 
    if (getTotalCid(result) != change) {
        return 'Insufficient Funds';           
    }
 
    return result; 
 
 
    function getTotalCid(cid) {
        var total = 0;
        
        return total;
    }
 
    function getValue(coinOrBill) {
        switch (coinOrBill) {
            case 'PENNY':
                return 1;
            case 'NICKEL':
                return 5;
            case 'DIME':
                return 10;
            case 'QUARTER':
                return 25;
            case 'ONE':
                return 100;
            case 'FIVE':
                return 500;
            case 'TEN':
                return 1000;
            case 'TWENTY':
                return 2000;
            case 'ONE HUNDRED':
                return 10000;
        }
    }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);


//Inventory Update
function updateInventory(arr1, arr2) {
  for(var index = 0; index < arr2.length; index++) {
    var item = arr2[index];
    var found = false;
    //if exists, update
    for(var index2 = 0; index2 < arr1.length; index2++){
      if(arr1[index2][1] == arr2[index][1]) {
        found = true;
        arr1[index2][0] = parseInt(arr1[index2][0]) + parseInt(arr2[index]);
      }
    }
    //if it is new, add
    if(!found) {
      arr1.push(arr2[index]);
    }
  }
  
  var result = printInventory(arr1);
  return result;
}

function printInventory(arr1) {
  return arr1.sort(function(a,b){
    if(a[1] < b[1]) return -1;
    else if(a[1] > b[1]) return 1;
    else return 0;
  });
}

var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);



//No repeats please
function permAlone(str) {
  var array = str.split('');
  var regex = /(.)\1+/g;
  var allPermutations = [];
  var result = 0;
  var temp = '';
  
  function heapPermutation(size) {
      if (size == 1) {
          allPermutations.push(array.join(''));
      }

      for (var i=0; i < size; i++)
      {
          heapPermutation(size-1);
          if (size % 2 == 1)
          {
              temp = array[0];
              array[0] = array[size-1];
              array[size-1] = temp;
          }

          else
          {
              temp = array[i];
              array[i] = array[size-1];
              array[size-1] = temp;
          }
      }
  }

  function validate() {
    for(var index = 0; index < allPermutations.length; index++) {
      var permutation = allPermutations[index]; 
      
      if(!permutation.match(regex)) {
        result++;
      }
    }
  }
  
  heapPermutation(array.length);
  validate();
  
  return result;
}
permAlone('aab');



//Friendly Date Ranges
function makeFriendlyDates(arr) {
  var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  var date1 = new Date(arr[0]);
  var date2 = new Date(arr[1]);
  
  var result = [];
  
  var strDate1 = '';
  var strDate2 = '';
  
  //returns the friendly day only
  function getFriendlyDay(day){
    var dayArray = [0, 'st', 'nd', 'rd'];
    if(parseInt(day) > 3) {
      return day + 'th';
    }
    else {
      return day + dayArray[day];
    }
  }
  
  //defines if the beginning year should appear
  function getFriendlyYearBeginning() {
    if(date1.getFullYear() === new Date().getFullYear()) {
      if(((Math.floor((date2 - date1) / (1000*60*60*24)))) > 360) {
        return ', ' + date1.getFullYear();
      }
      else {
        return '';
      }
    }
    else {
      return ', ' + date1.getFullYear();
    }
  }
  
  //returns the text that should be displayed for month ending
  function getFriendlyMonthEnding() {
    if(date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()) {
      return '';
    }
    else {
      return monthArray[date2.getMonth()] + ' ';
    }
  }
  
  //returns the text that should be displayed for year ending
  function getFriendlyYearEnding() {
    if (date1.getMonth() === date2.getMonth() &&
       date1.getFullYear() !== date2.getFullYear() &&
       date1.getDate() > date2.getDate()){
      return '';
    }
    
    else if((((Math.floor((date2 - date1) / (1000*60*60*24)))) > 360) ||
           (date1.getMonth() === date2.getMonth() &&
             date1.getFullYear() !== date2.getFullYear() &&
             date1.getDate() === date2.getDate())) {
      return ', ' + date2.getFullYear();
    }
    
    return '';
  }
  
  strDate1 = monthArray[date1.getMonth()] + 
    ' ' + 
    getFriendlyDay(date1.getDate()) +
    getFriendlyYearBeginning();

  result.push(strDate1);
  
  if(date2 > date1) {
    strDate2 = getFriendlyMonthEnding() +
      getFriendlyDay(date2.getDate()) +
      getFriendlyYearEnding();

    result.push(strDate2);
  }
  
  return result;
}
makeFriendlyDates(["2022-09-05", "2023-09-04"]);


//Make a Person
var Person = function(firstAndLast) {

  var fullName = firstAndLast.split(' ');
  
  this.getFirstName = function() {
    return fullName[0];
  };
  
  this.getLastName = function() {
    return fullName[1];
  };
  
  this.getFullName = function() {
    return fullName.join(' ');
  };
  
  this.setFirstName = function(first) {
    fullName[0] = first;
  };
  
  this.setLastName = function(last) {
    fullName[1] = last;
  };
  
  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast.split(' ');
  };
  
};
var bob = new Person('Bob Ross');
bob.getFullName();


//Map the Debris
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var a = 2 * Math.PI;
  var newArr = [];
  
  var getOrbPeriod = function(obj) {
    var c = Math.pow(earthRadius + obj.avgAlt, 3);
    var b = Math.sqrt(c / GM);
    var orbPeriod = Math.round(a * b);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
    return obj;
  };

  for (var elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);



//Pairwise
function pairwise(arr, arg) {
  
 var result = 0;
 var elementsPairs = arr.slice();
  
 for (var index = 0; index < elementsPairs.length; index++) {
   for(var index2 = index + 1; index2 < elementsPairs.length; index2++) {
     if(elementsPairs[index] + elementsPairs[index2] == arg) {
       result = result + index + index2;
       elementsPairs[index] = NaN;
       elementsPairs[index2] = NaN;
     }
   }
 }
 return result;
}

pairwise([1,4,2,3,0,5], 7);




