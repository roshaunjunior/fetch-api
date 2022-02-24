console.log('This is Fetch Api Practice');

// function getData() {
//     url = "https://api.github.com/users";
//     fetch(url)
//     // fetch hamesha ek promise return krta hai ...


//     //pehla .then us ko respose may convert krta hai ...
//     .then(res => res.json())
//     //yahan pay text ki file ho ge to res.text likhain gay ...
//     // lekin jb kisi api say data a raha hai to usko hum res.json likhain gay...


//     // dosra .then res.json ko data may convert krta hai .
//     .then(data => console.log(data))
// }
//  getData();


//Now post method 

function postData() {
    url="https://jsonplaceholder.typicode.com/posts" ;
    data='{"name":"roshajr","salary":"123","age":"23"}'  
    params = {
        method : 'post' ,
        headers : {
            'Content-Type' : 'application/json'
         } ,
         body: data
        //  body: JSON.stringify({
        //      name: 'User1'
        //  }) 
         // agr to data hmara ek string hai to hum json.stringify nahe karen gay .. lekin agr data hmara ek object hai to hum us ko json .stringify kr k bhejain gay .


    }
    fetch(url, params)
    .then(response => response.json())
        //response,json ek function hai us k sath () ye bracket zaroor lgao bsdk.

    .then(data => console.log(data))


}

postData() ;