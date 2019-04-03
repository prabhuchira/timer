

// Step 1: Taken input from user that Hour and minutes

//Step 2: Select that input and set the current minutes and current hour 

//Step 3: display it to user


//Step 1

var minutes = document.getElementById('minutesField');
var hours = document.getElementById('hourField');
var audio = new Audio('http://soundbible.com/grab.php?id=1787&type=wav')
var sec = 59;


var date = new Date();

document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();

    getProcess();



})

document.getElementById('reset').addEventListener('click', () => {
    location.reload();
})

function getProcess() {

    // document.getElementById('testMinutes').innerText = minutes.value
    // document.getElementById('testHours').innerText = hours.value

    setInterval(() => {
        document.getElementById('testSeconds').innerText = sec;
        if (minutes.value == '') {
            minutes.value = 59//59
            document.getElementById('main').insertAdjacentHTML("beforeend", '<div class="alert alert-primary" role="alert">Timer set To 1 hour</div>')
        }
        if (hours.value == '') {
            hours.value = 0;
        }

        // minutes.value == '' & hours.value == '' ? document.getElementById('main').insertAdjacentHTML("beforebegin","<h2>What is this</h2>") : '';
        
            if (minutes.value.length < 2) {
                document.getElementById('testMinutes').innerText = "0" + minutes.value;
            } else {
                document.getElementById('testMinutes').innerText = minutes.value;
            }
      

      
            if (hours.value.length < 2) {
                document.getElementById('testHours').innerText = "0" + hours.value;
            }
            else {
                document.getElementById('testHours').innerText = hours.value;
            }
      
      
     


        if (sec > -1) {
            sec--;

            if (sec < 0) {
                sec = 59;//59
                if (minutes.value > -1) {
                    minutes.value--;
                    if (minutes.value < 0) {
                        minutes.value = 59;//59
                        if (hours.value > 0) {
                            hours.value--;

                        }
                        else {
                            for (i = 0; i < 100; i++) {
                                window.clearInterval(i);
                            }
                            hours.value = 0;
                            minutes.value = 0;
                            audio.play();
                        }



                    }

                }
            }
        }



    }, 1000)






}




