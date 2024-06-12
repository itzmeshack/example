document.addEventListener("DOMContentLoaded", function() {
    let backgroundElement = document.querySelector('.main-time');

    window.addEventListener('deviceorientation', function(event) {
        let gamma = event.gamma;
        console.log('Gamma:', gamma);

        let leftThreshold = -20;
        let rightThreshold = 20;

        if (gamma < leftThreshold) {
            backgroundElement.style.transform = 'rotate(20deg)';
        } else if (gamma > rightThreshold) {
            backgroundElement.style.transform = 'rotate(-20deg)';
        } else {
            backgroundElement.style.transform = 'rotate(0deg)';
        }
    });
});

  
  
  
  /*
  
  
  
  
  function simulateDeviceMotion(gamma) {
    let event = new Event('devicemotion');
  
    event.accelerationIncludingGravity = {
        x: gamma,
        y: 0,
        z: 0
    };
  
    window.dispatchEvent(event);
  }
  
  function handleDeviceMotion(event) {
    let acceleration = event.accelerationIncludingGravity;
    let gamma = acceleration.x;  // Using x-axis acceleration to simulate gamma
  
    console.log(gamma);
  
    // Define thresholds for orientation detection
    let leftThreshold = -20;  // Adjust as needed
    let rightThreshold = 20;  // Adjust as needed
  
    let backgroundElement = document.querySelector('.main-time');
  
    // Check if the device is tilted to the left
    if (gamma < leftThreshold) {
        backgroundElement.style.transform = 'rotate(20deg)';
    }
    // Check if the device is tilted to the right
    else if (gamma > rightThreshold) {
        backgroundElement.style.transform = 'rotate(-20deg)';
    }
    // Reset the rotation if not tilted
    else {
        backgroundElement.style.transform = 'rotate(0deg)';
    }
  }
  
  // Add event listener for device motion
  window.addEventListener('devicemotion', handleDeviceMotion);
  
  // Simulate device motion for testing
  // Test left tilt
  simulateDeviceMotion(-20);  // Should rotate 20deg to the left
  // Test right tilt
  simulateDeviceMotion(20);   // Should rotate -20deg to the right
  // Test no tilt
  simulateDeviceMotion(0);    // Should rotate back to 0deg
  
  
  
  /*
  
  
  function handleDeviceMotion(event) {
    let acceleration = event.accelerationIncludingGravity;
    let xAcceleration = acceleration.x;
  
  
    console.log(xAcceleration)
    let threshold = 10;
  
    if (Math.abs(xAcceleration) > threshold) {
        let direction = xAcceleration < 0 ? 'right' : 'left';
        handleBend(direction);
    }
  }
  
  function handleBend(direction) {
    let backgroundElement = document.querySelector('.main-time');
  
    // Adjust the rotation angle based on the bend direction
    let rotationAngle = direction === 'right' ? '-20deg' : '20deg';
  
    // Apply the rotation to the background element
    backgroundElement.style.transform = `rotate(${rotationAngle})`;
  }
  
  // Add event listener for device motion
  window.addEventListener('devicemotion', handleDeviceMotion, { passive: true });
  
  
  */
  
  
  
  
  // Set the expiration time in hours
  const hours = 10;
  
  // Calculate the expiration time in milliseconds
  const expirationTime = hours * 60 * 60 * 1000;
  
  // Get the current time
  const startTime = Date.now();
  
  // Update the timer display
  function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const remainingTime = expirationTime - elapsedTime;
  
    if (remainingTime <= 0) {
      document.getElementById('timer').textContent = "Timer Expired!";
      clearInterval(timerInterval);
    } else {
      const hoursLeft = Math.floor(remainingTime / (700 * 60 * 60));
      const minutesLeft = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
      document.getElementById('timer').textContent = `Ticket expires in: ${hoursLeft}h: ${minutesLeft}m: ${secondsLeft}s`;
    }
  }
  
  
  
  
  
  
  // Update the timer change  every second
  const timerInterval = setInterval(updateTimer, 1000);
  
  
  
  
  
  
  
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const word1 = document.getElementById('word1');
    const word2 = document.getElementById('word2');
  
    setInterval(function() {
      if (word1.classList.contains('active')) {
        word1.classList.remove('active');
        word2.textContent = getUKTime();
        word2.classList.add('active');
      } else {
        word2.classList.remove('active');
        word1.classList.add('active');
      }
    }, 2000); // Change word every 3 seconds (3000 milliseconds)
  });
  
  function getUKTime() {
    const now = new Date();
    const hours = now.getUTCHours() + 1; // Adjust for UK time
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();
  
    return formatTime(hours) + ':' + formatTime(minutes) //*+ ':' + formatTime(seconds)*/ ;
  }
  
  function formatTime(time) {
    return time < 10 ? '0' + time : time;
  }
  
  
  
  /** For date part */
  
  
  
  
  function upadeDate(){
  
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
  
  
  
     let monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "June", "July",
      "Aug", "September", "October", "November", "December"
    ];
  
    let monthname = monthNames[month];
  
    document.getElementById('date').innerHTML = `Valid from: 00:00, ${day}  ${monthname} ${year}`;
  
  }
  
  
  document.addEventListener('DOMContentLoaded', upadeDate );
  
  
  
  
  
  
  /*
  document.addEventListener('DOMContentLoaded', () => {
    const permissionButton = document.createElement('button');
    permissionButton.innerText = 'Enable Orientation';
    permissionButton.style.position = 'absolute';
    permissionButton.style.top = '10px';
    permissionButton.style.left = '10px';
    document.body.appendChild(permissionButton);
  
    permissionButton.addEventListener('click', () => {
        requestOrientationPermission();
        permissionButton.style.display = 'none';
    });
  });
  */