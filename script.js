// https://hindi-jokes-api.onrender.com

const btn =document.getElementById('btn');
const jokeContainer=document.getElementsByTagName('p');
let url="https://backend-omega-seven.vercel.app/api/getjoke";
async function  getJokes  (){
    const res = await fetch(url);
    const response=await  res.json();
    console.log(response[0].question);
    console.log(response[0].punchline);
    document.getElementById("Question").innerHTML=response[0].question;
    document.getElementById("punchline").innerHTML=response[0].punchline;
}

btn.addEventListener('click',getJokes)

getJokes();