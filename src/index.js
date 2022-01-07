import _ from 'lodash'
import Calc from './calc.js'
import Dist from './dist.js'

function Perfrom() {
    const submitBtn = document.getElementById('mybtn')
    const resultHtml = document.getElementById('result')

    submitBtn.addEventListener('click',()=>{
        const val = document.getElementById('val').value;
        const unit = document.getElementById('units').value;

        switch(unit){
            case 'K':
            case 'F':
            case 'C':
                resultHtml.innerHTML = calculateTemp(val,unit)
            break;
            default:
                resultHtml.innerHTML = calculateDist(val,unit)
            break;
        }    
    })
  }
window.onload =()=>{Perfrom()};