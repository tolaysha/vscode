/*var deadline  =  '2019-03-02';
var dif = Date.parse(deadline) - Date.parse(new Date());
var time = {
    total : dif,
    second : Math.floor((dif/1000)%60),
    minutes : Math.floor((dif/1000/60)%60),
    hours : Math.floor(dif/(1000*60*60))
};
console.log(time);
setInterval(function (){ dif = Date.parse(deadline) - Date.parse(new Date());return second = Math.floor((dif/1000)%60)},1000);
var deadline  =  '2019-03-01';
var time = {
    total : Date.parse(deadline) - Date.parse(new Date()),
    second : (Date.parse(deadline) - Date.parse(new Date())/1000)%60,
    minutes : Math.floor((((Date.parse(deadline) - Date.parse(new Date())/1000)/60)%60)),
    hours : Math.floor((((Date.parse(deadline) - Date.parse(new Date())/1000)%60)%60))
};
console.log(time);

*/
var time = {
    hours: document.querySelector('.hours'),
    minute : document.querySelector('.minutes'),
    second : document.querySelector('.seconds')
};
deadline  =  '2019-03-02';
var dif = Date.parse(deadline) - Date.parse(new Date());
time.second.textContent = Math.floor((dif/1000)%60);
time.minute.textContent = Math.floor((dif/1000/60)%60);
time.hours.textContent = '0' + Math.floor(dif/(1000*60*60));

setInterval(function (){
         if (time.second.textContent == 0){
            time.second.textContent= 59;
            time.minute.textContent=time.minute.textContent-1;
            if (time.minute.textContent==0){
                time.hours.textContent=time.hours.textContent-1;
            }
        }
        else{
            time.second.textContent= +time.second.textContent -1; 
        }
    },
1000);
