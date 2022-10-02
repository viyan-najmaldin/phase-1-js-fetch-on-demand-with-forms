const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("#searchByID");
    const x = input.value;
    console.log(x);
    const URL = `http://localhost:3000/movies`;
    fetch(`${URL}/${x}`)
      .then((res) => res.json())
      .then((data) => {
        const title = document.querySelector("#movieDetails > h4");
        const summary = document.querySelector("#movieDetails > p");
        title.innerHTML = data.title;
        summary.innerHTML = data.summary;
      });
  });
};
document.addEventListener("DOMContentLoaded", init);
