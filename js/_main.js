
(function setDate() {
  let d = new Date();
  let p = new Date(d.getTime() - 5 * 86400000);
  let monthA = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  $(".by").html(p.getDate() + " " + monthA[p.getMonth()] + " ");

  p = new Date(d.getTime());
  $(".to").html(p.getDate() + " " + monthA[p.getMonth()] + " ");
})();


document.addEventListener("DOMContentLoaded", function () {
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });
});

const name1 = document.getElementById('name1');
const phone1 = document.getElementById('phone1');
const form1 = document.getElementById('order_form1');
const btn1 = document.getElementById('btn1');


function setWithExpiry(key, value, ttl) {
  const now = new Date();

  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };

  localStorage.setItem(key, JSON.stringify(item));
}

function setButtonSubmitProperties() {
  btn1.style.opacity = '0.7';
  btn1.textContent = 'Отправка заявки';
  btn1.disabled = true;

  setTimeout(() => {
    btn1.style.opacity = '1';
    btn1.textContent = 'Отправить заявку';
    btn1.disabled = false;
  }, 2000);
}

form1.addEventListener('submit', function () {

  setButtonSubmitProperties();

});
