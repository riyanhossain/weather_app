document.getElementById('search').addEventListener('click',function(){
    const input=document.getElementById('input').value;
    const newInput="https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid=1b5a3206d8ac03b8dd0ee7a5dfce44fe"
    fetch(newInput)
    .then(res=>res.json())
    .then(data=>wheather(data))


})
function wheather(data){
    document.getElementById('city').innerText=data.name;
    const tempa=data.main.temp-272.15;
    document.getElementById('temp').innerText=tempa.toFixed(1);
    document.getElementById('weather1').innerText=data.weather[0].main;
    const icon=data.weather[0].icon;
    const newIcon="https://openweathermap.org/img/wn/"+icon+"@2x.png"
    document.getElementById('icon').src=newIcon;
}