function convert() {

    let a = document.getElementById("km").value;
    let b = a * 0.621371;
    b = b.toFixed(5);
    document.getElementById("miles").innerHTML = a + " kilometers is appoximately " + b + " miles."

}