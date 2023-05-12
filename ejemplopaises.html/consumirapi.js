function consumirAPI() {
    let urlAPI = "https://restcountries.com/v3.1/independent?status=true:";
  
    fetch(urlAPI)
      .then((res) => res.json())
      .then((json) => {

      });
  }
  
  function mostrarPaises(paises) {
    const tablaPaises = document.getElementById('tabla-paises');
  
    paises.forEach(pais => {
      const fila = document.createElement('tr');
      const nombrePais = document.createElement('td');
      nombrePais.textContent = pais.name.common;
      const capital = document.createElement('td');
      capital.textContent = pais.capital[0];
      const poblacion = document.createElement('td');
      poblacion.textContent = pais.population;
  
      fila.appendChild(nombrePais);
      fila.appendChild(capital);
      fila.appendChild(poblacion);
      tablaPaises.appendChild(fila);
    });
  }