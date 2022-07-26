const main = document.getElementById("main");
const url = 'http://futuramaapi.herokuapp.com/api/v2/characters';

fetch(url)
.then((resp) => resp.json())
.then((data) => printData(data))
.catch((error) =>{
        return console.log(error)
})
const printData = (arr) =>{
console.log(arr)  
let str='';
for(let i= 0; i < arr.length -13; i++){
const PicUrl = arr[i].PicUrl
const Name = arr[i].Name
const Profession = arr[i].Profession
const Species = arr[i].Species
const Status = arr[i].Status
str = str+`

<div class= "tarjeta">
 <figure>
   <img src="${PicUrl}" alt= "${Name}
   </img>
 </figure>
<div class= "personaje">
        <p>
        ${Name}
        </p>
        <p>
        ${Profession}
        </p>
        <p>
        ${Species}        
        </p>
        <p>
        ${Status}        
        </p>
</div>
</div>
`
}

main.innerHTML = str;

}







