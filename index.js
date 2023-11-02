const arr = ["dcav","andrews","sraswati","meghnad"];
const allVal = document.querySelector(".allVal");
const search1 = document.querySelector(".search1");
console.log(allVal);
function  searchFunc(args){
    let filterVal = arr.filter((item)=>{
        console.log(args);
        return item.includes(`${args}`);
    });
    
    return filterVal;
}
// arr.forEach((item)=>{
//     let valItem = document.createElement("h1");
//     valItem.append(`${item}`);
//     allVal.append(valItem);
// })
let searchVal;
search1.addEventListener("keyup",(e)=>{
  searchVal= e.target.value;
  searchVal
  allVal.innerHTML="";
  let func = searchFunc(searchVal);
  console.log(func)
  console.log(func.length,"hjghj")
  if(func.length === 0){
    console.log("ttt");
    allVal.innerHTML="";
    let valItem2 = document.createElement("h1");
    valItem2.append(`No Found`);
    allVal.append(valItem2);
}
  func.forEach((item)=>{
    console.log(search1.value);
    console.log(func.length,"prob");
    
    if(searchVal == ""){
        allVal.innerHTML="";
        console.log("qqq")
    }
    else{
    let valItem = document.createElement("h1");
    valItem.append(`${item}`);
    allVal.append(valItem);
    }
})
});
const head = document.querySelector(".arrVal");
console.log(head);