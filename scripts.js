var arrayOfLadiesNames = ['Anna','Zofia','Ela','Marta','Iza'],
    arrayOfManNames = ['Jan','Antek','Longin','Bartek'];
var concatArrayOfNames = arrayOfLadiesNames.concat(arrayOfManNames),
    newName='Mirek';
// mix = concatArrayOfNames.filter(function (arrayNames){return arrayNames =='Bartek';})

//Jak moznaby przemycic dwa argumenty w funkcji filter dla tablic?

// function addName(array,name){
//     if (array.filter(function (arrayNames){return arrayNames == name;})!=name) {
//             array.push(name);
//         }
// }
// console.log(addName(concatArrayOfNames,'Mirek'));
function addName(array,name){
    if (array.indexOf(name)===-1) {
        array.push(name);
    }
    return array;
}
console.log(addName(concatArrayOfNames,newName));
