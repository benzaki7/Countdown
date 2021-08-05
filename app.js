const x = setInterval(function() {

  const countDownDate = new Date(2021, 12, 1, 8, 0, 0).getTime();
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(distance / oneDay);
  let hours = Math.floor((distance % oneDay) / oneHour);
  let minutes = Math.floor((distance % oneHour) / oneMinute);
  let seconds = Math.floor((distance % oneMinute) / 1000);

  let values = [days, hours, minutes, seconds];

  let items = document.querySelectorAll('.deadline h4');
  
  function addZero(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    };
  } 

  items.forEach(function(item, index) {
    item.innerHTML = addZero(values[index]);
  })


  if (days === 1 ) {
    document.querySelector('.deadline-day').innerHTML = 'Day';
  };
  if (hours === 1 ) {
    document.querySelector('.deadline-hour').innerHTML = 'Hour';
  };
  if (minutes === 1 ) {
    document.querySelector('.deadline-min').innerHTML = 'Min';
  };

if (distance < 0) {
  clearInterval(x);
  document.querySelector('.main h1').style.display = "none";
  document.querySelector('.deadline-container').style.display = "none";
  document.querySelector('.contact').style.display = "none";
  document.querySelector('.icons').style.display = "none";
  document.getElementById('anouncement').style.display = "block";
  
};

}, 1000);



