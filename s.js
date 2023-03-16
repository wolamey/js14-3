createOption = () => {
    let option = document.createElement('option');
    return option;
}
createLi = () => {
    let li = document.createElement('li');
    return li;
}
let select = document.getElementById('select');




fetch('https://api.citybik.es/v2/networks?fields=company,location,name')
    .then((Response) => Response.json())
    .then((data) => {
        //1
        const parisList = document.getElementById('parisList');


        for (let i = 0; i < data.networks.length; i++) {
            if (data.networks[i].location.city.includes('London')) {
                let pLi = document.createElement('li');
                if (!data.networks[i].company) pLi.innerHTML = 'безымянная';
                else
                    pLi.innerHTML = data.networks[i].company;
                parisList.append(pLi);

            };

            //2

            let option = createOption();
            option.innerHTML = data.networks[i].location.country;
            option.value = data.networks[i].location.country;
            if (!select.innerHTML.includes(option.innerHTML)) select.appendChild(option);


        }



        select.addEventListener('change', (event) => {
            document.getElementById('ul').replaceChildren();
            for (let i = 0; i < data.networks.length; i++) {
                if (data.networks[i].location.country == event.target.value) {
                    let li = createLi();
                    li.innerHTML = data.networks[i].name;
                    if (!document.getElementById('ul').innerHTML.includes(li.innerHTML)) 
                    document.getElementById('ul').appendChild(li);
                }
            }
        })




    })
