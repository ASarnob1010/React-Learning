//asynchronous js
//code run after some time
count = 0;
const timi = setInterval(()=>{
    count++;
    console.log("hello");
    if(count == 20)clearInterval(timi);
},1000);
//fetch api
//it is asynchronous cz data sometimes needs time be come sometime slow. if it become synchronous
//then it wont open until the data completely fetched. that is big problem since code can be stuck
fetch(`https://randomuser.me/api/`).
then(raw=>raw.json()).
then(readable=>console.log(readable));

//axios (same as fetch but then comes 1 time)
axios.get(`https://randomuser.me/api/`).
then(response=>console.log(response.data));

//promise
//ami kauke order dilam kono ekti kaj er jonno kauke se amake ekta kagoj dibe and bolbe jokhon kaj
//hoye jabe apni automatice peye jaben . oi moment e ami amar onno kaj korte parbo kono problem sara

const slip = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5)resolve("success");
        else reject("failed");
    }, 1000);
})
slip.then((res) => {
    console.log("Done");
})

slip.catch((err) => {
     console.log("error");
})

//callback
function getData(url, callback) {
    fetch(url).
    then(raw=>raw.json()).
    then(response=>callback(response));
}

getData("https://randomuser.me/api/",function(response){
        console.long(response);      
})