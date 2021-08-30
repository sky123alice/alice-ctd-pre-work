<script> 
    
    function fetchPeopleData(){
        fetch("https://swapi.dev/api/people")
        .then(response =>{
            if(!response.ok){
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            const html = data.results.map(people =>{
                return `
                <div class = "people">
                    <h1>Name: ${people.name}</h1>
                    <p>Height: ${people.height}</p>
                    <p>Hair color: ${people.hair_color}</p>
                    <p>Skin color: ${people.skin_color}</p>
                    <p>Eye color: ${people.eye_color}</p>
                    <p>Birth year: ${people.birth_year}</p>
                    <p>Gender: ${people.gender}</p>
                    <p>Homeworld: ${people.homeworld}</p>
                    <p>Films: ${people.films}</p>
                    <p>Species: ${people.species}</p>
                    <p>Vehicles: ${people.vehicles}</p>
                    <p>Starships: ${people.starships}</p></br>
                </div>`;
            })
            .join("");
            document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
        })
        .catch(error =>{
            console.log(error);
        })
    };
    
fetchPeopleData();
    


</script>




    
    
    
       /*
        fetch("https://swapi.dev/api/people")
        

        
        .then(response =>{
            if(!response.ok){
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {

            const html = data.results.map(people =>{
                return `
                <div class = "people">
                    <h1>Name: ${people.name}</h1>
                    <p>Height: ${people.height}</p>
                    <p>Hair color: ${people.hair_color}</p>
                    <p>Skin color: ${people.skin_color}</p>
                    <p>Eye color: ${people.eye_color}</p>
                    <p>Birth year: ${people.birth_year}</p>
                    <p>Gender: ${people.gender}</p>
                    <p>Homeworld: <button onclick = "">${people.homeworld}</p>
                    <p>Films: ${people.films}</p>
                    <p>Species: ${people.species}</p>
                    <p>Vehicles: ${people.vehicles}</p>
                    <p>Starships: ${people.starships}</p></br>

                </div>`;
            })
            .join("");
            document.querySelector("#app").
            insertAdjacentHTML("afterbegin", html);
        })
        .catch(error =>{
            console.log(error);
        });*/
