
function getTime()
{
  options = {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  formatter = new Intl.DateTimeFormat([], options);

  return formatter.format(new Date());
}



document.onload = () => {}

const timeElm = document.querySelector('#time');

setInterval(() => {
  timeElm.innerText = getTime() + ' (UTC +5:30)';
}, 1000);

