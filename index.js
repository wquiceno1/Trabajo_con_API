const url = "https://dragon-ball-super-api.herokuapp.com/api/characters",
  personajes = document.getElementById("personajes"),
  fragment = document.createDocumentFragment();

fetch(url)
  .then((res) => res.json())
  .then((JSONdatos) => {
    //console.log(JSONdatos);
    JSONdatos.forEach((dato) => {
      //console.log(dato.name);
      let nombre = document.createElement("h3"),
        foto = document.createElement("img"),
        rol = document.createElement("p"),
        tarjeta = document.createElement("div");

      foto.src = dato.imageUrl;
      nombre.textContent = dato.name;
      rol.textContent = dato.role;

      tarjeta.appendChild(foto);
      tarjeta.appendChild(nombre);
      tarjeta.appendChild(rol);

      tarjeta.classList.add("tarjeta");

      fragment.appendChild(tarjeta);
    });
    personajes.appendChild(fragment);
  });
