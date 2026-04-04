const typingText = "Senior Data Engineer | Cloud Data Architect";
let i = 0;

function typeWriter() {
  if (i < typingText.length) {
    document.querySelector(".typing").innerHTML += typingText.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}
typeWriter();

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };
  update();
});
