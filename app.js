const changeo = document.querySelector('.num')
        const buttons = document.querySelector('.convert');

        buttons.addEventListener('click',function(){
            const decimal = document.getElementById('inputme').value;

            if(decimal === ''){
                alert("Kindly Input A Number to get Binary Value");
            }
            else if(decimal < 0){
                alert("Negative Values are not Allowed");
            }
            else{
                changeo.style.visibility = "visible";
            }
            const finaloutput = Number(decimal).toString(2);
                changeo.innerHTML = finaloutput;


        });
        function reset(){
            document.querySelector('.num').innerHTML = "0";
            document.getElementById('inputme').value = "";
        }
        

        