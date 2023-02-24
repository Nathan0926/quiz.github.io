
const RightAnswers = ['array1', 'arr3', 'seven'];

var f = document.getElementsByTagName('input');
var l = document.getElementsByTagName('label');


function Check(){
    var score = 0;
    for(let i = 0;i<f.length;i++){
        RightAnswers.forEach(e=>{
        if(f[i].checked === true && f[i].value === e){
            score++
            l[i].style.color = ' rgb(5, 255, 5)';

        }
        })
    }
    document.getElementById('asnwer').innerHTML = ('Score: '+score)
}