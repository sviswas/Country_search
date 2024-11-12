let ip=document.getElementById("searchInput");
let result=document.getElementById("resultCountries");
let spin=document.getElementById("spinner");
let c;
function display(i){
    
    let div=document.createElement("div");
    div.classList.add("d-flex","flex-row","col-11","col-md-5","mr-auto","ml-auto","country-card");
    result.appendChild(div);

    let img=document.createElement("img");
    img.classList.add("country-flag");
    img.src=i.flag;
    div.appendChild(img);

    let div2=document.createElement("div");
    div2.classList.add("ml-4");
    div.appendChild(div2);

    
    let h1=document.createElement("h1");
    h1.textContent=i.name;
    h1.classList.add("country-name");
    div2.appendChild(h1);

    
    let p=document.createElement("p");
    p.textContent=i.population;
    p.classList.add("country-population");
    div2.appendChild(p);


}
let option={
            method:"GET"
        };
        
        spin.classList.toggle("d-none");
        fetch("https://apis.ccbp.in/countries-data",option)
        .then(function(response){
         return response.json();
        })
        .then(function(data){
            c=data;
            
            spin.classList.toggle("d-none");
                for(let i of c){
                display(i);}
        });

function country(event){

        result.textContent="";
        for(let i of c){
            
        if((i.name).includes(ip.value)){

            display(i);
        }

        }
       
    }

ip.addEventListener("keyup",country);