const dataDiv = document.getElementById("dataDiv");
const getBillinior = async()=>{
 const url = `https://forbes400.onrender.com/api/forbes400/`;
 const res =await fetch (url);
 const data =await res.json();
 document.getElementById("showAll").addEventListener("click", ()=>{
    dataDiv.innerHTML="";
    display(data, true)  
 })
 display(data, false);
 
 console.log()
};

const display=(data , condition)=>{
 data = condition? data : data.slice(0, 10);

 data.map(item=>{
    const div = document.createElement("div");
    div.classList.add("px-4","py-6", "border-2" ,"rounded-xl")
    div.innerHTML = `
    
    <ul class="grid grid-cols-6 gap-6 text-xl ">
      <li class="">${item.person.name}</li>
      <li class=""><img class="w-12 h-12" src=${item.person.squareImage}></li>
      <li class="">${item.countryOfCitizenship}</li>
      <li class="">${item.industries[0]}</li>
      <li class="">${item.position}</li>
      <li class="">$${(item.finalWorth/1000).toFixed(3)} B</li>
    </ul>

    `

    dataDiv.appendChild(div);
 })

 
}





getBillinior();