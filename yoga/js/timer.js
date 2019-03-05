var time = {
    hours: document.querySelector('.hours'),
    minute : document.querySelector('.minutes'),
    second : document.querySelector('.seconds')
};
deadline  =  '2019-03-03';
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
