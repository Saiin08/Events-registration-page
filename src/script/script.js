import { BigEvent } from "./class";
import { SmallEvent } from "./class";


let showMeName;
let showMeDate;
let showMeDescription;
let showMeImg;

const eventsList = async () => {
    const response = await fetch('https://test-api.codingbootcamp.cz/api/041ebfe9/events');
    const events = await response.json();
   
    console.log(response);
    console.log(events);
    

    events.forEach(event => {
    
        console.log(event)  
        //showMeName = document.createElement('div');
        showMeName = event.name;
        showMeDate = event.date;
        showMeDescription = event.description;
        showMeImg = event.image_url;


        //showMeName.innerText = event.name;
        //document.body.appendChild(showMeName);
        })
        console.log(showMeName)
        console.log(showMeDate)
        console.log(showMeDescription)
        console.log(showMeImg)
}
eventsList();

