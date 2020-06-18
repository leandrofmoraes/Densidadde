
var unidade = document.getElementsByName("uni");
var d = document.querySelector("div#den");
d.innerHTML = "d = ";

function mudaUnidade(){
    let m = document.getElementById("m");
    let v = document.getElementById("v");

    if (unidade[0].checked){
        m.innerHTML = "Kg";
        v.innerHTML = "m<sup>3</sup>";
        
    } else if (unidade[1].checked){
        m.innerHTML = "&nbsp;g";
        v.innerHTML = "ml";
    } 
}

function calcular(){    

let mass = Number(document.querySelector("input#mass").value);
let vol = Number(document.querySelector("input#vol").value);
var densidade = mass/vol;

    if (unidade[0].checked){  
        d.innerHTML = `${densidade.toFixed(2)} Kg/m<sup>3</sup> = `;

    } else if (unidade[1].checked){
        d.innerHTML = `${densidade.toFixed(2)} g/ml = `;

    } else {
        alert("Selecione a unidade!");
    }

}

