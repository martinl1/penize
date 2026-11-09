const input = document.getElementById('input');
const text = document.getElementById('prevod');
const button = document.getElementById('button');
 
function convert(base, quote, amount) {
  const api = "https://api.frankfurter.dev";
  return fetch(`${api}/v2/rate/${base}/${quote}`)
    .then((r) => r.json())
    .then((d) => (amount * d.rate).toFixed(2));
}
 
button.addEventListener('click', () => {
    convert("czk", "eur", input.value).then((result) =>
        text.textContent = `${input.value} CZK = ${result} EUR`
    );
})
 