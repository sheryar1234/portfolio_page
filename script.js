document.addEventListener("DOMContentLoaded", function () {
    const changingText = document.getElementById("changingText");
    const words = ["code", "programs", "code", "programs", "Design"];
    let index = 0;
  
    function toggleText() {
      changingText.textContent = words[index];
      index = (index + 1) % words.length;
    }
  
    setInterval(toggleText, 2000);
  });
  











function countTo18() {
    var count = 0;
    var h3Element = document.getElementById('countBox'); 

    function updateCount() {
        h3Element.textContent = count + "+ K";

        if (count < 18) {
            count++;
            setTimeout(updateCount, 100); 
        }
    }

    updateCount();
}

function countTo10() {
    var count = 0;
    var h3Element = document.getElementById('countBox1'); 

    function updateCount() {
        h3Element.textContent = count + "+ K";

        if (count < 10) {
            count++;
            setTimeout(updateCount, 150);
        }
    }

    updateCount();
}

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


window.addEventListener('scroll', function () {
    var countBox = document.getElementById('countBox'); 
    if (isInViewport(countBox)) {
        countTo18();
        countTo10();
        
        window.removeEventListener('scroll', arguments.callee);
    }
});




