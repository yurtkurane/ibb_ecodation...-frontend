// Dark Modu
let darkModu=()=>{
    //alert("Dark Modu");
    document.body.classList.toggle("dark-mode");
}

//input search
$(document).ready(function(){
const searchApi=["Adana", "Balikesir", "Corum", "Denizli", "Edirne", "Malatya", "Van"]
$("#tags").autocomplete({
    source:searchApi
})
}); //end


// Footer
let newDate=()=>{
    const date=new Date().getFullYear();
// JS DOM
//document.getElementById("date_id").innerHTML=new Date().getFullYear();

// Jquery DOM
$("#date_id").html(date);
}
newDate()


