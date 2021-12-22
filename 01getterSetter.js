"use strict";

const obj = {
  _nameProp: [],
  set nameProp(name) {
    const namesArr = name.split(", ");
    for (let i = 0; i < namesArr.length; i++) {
      this._nameProp.push([namesArr[i], namesArr[i].length]);
    }
  },
  get nameProp() {
    let strToReturn = "";
    for (let i = 0; i < this._nameProp.length; i++) {
      strToReturn = strToReturn + this._nameProp[i][0] + ", ";
    }
    return this._nameProp;
  },
};

obj.nameProp = "Hovhannes, Sona, Hakob";
console.log(obj.nameProp);
obj.nameProp;
