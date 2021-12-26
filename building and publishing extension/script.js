fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json())//converitng data to json type
.then(jokedata=>{
    const joketext=jokedata.attachments[0].text;
    const jokeelement=document.getElementById('jokeelement')
    jokeelement.innerHTML=joketext;
})
