document.addEventListener("DOMContentLoaded", ()=>{
    let select = document.querySelector("select");
    let div = document.querySelector("div");
    let reviews = document.querySelector("#reviews");
    let userText = document.querySelector("#userText");
    let submit = document.querySelector("#submit");
    const getMovies = async (userText) => {
        try{
            let res = await axios.get("https://ghibliapi.herokuapp.com/films/")
            let arr = res.data
            for(let i = 0; i < arr.length; i++){
                let movie = arr[i]
                let title = movie.title;
                let date = movie.release_date;
                let description = movie.description;
                let option = document.createElement("option");
                option.value = title
                option.innerText = title
                select.appendChild(option)
                select.addEventListener("change", (event) =>{
                    select.value = event.target.value;
                    if(select.value === title){
                        let h3 = document.createElement("h3");
                        let p = document.createElement("p");
                        let p2 = document.createElement("p");
                        h3.innerText = title;
                        p.innerText = date;
                        p2.innerText = description;
                        div.appendChild(h3);
                        div.appendChild(p);
                        div.appendChild(p2);
                        submit.addEventListener("click", () =>{
                            let li = document.createElement("li");
                            li.innerText = "hello"
                            reviews.appendChild(li)
                        })
                    }
                })
            }
        } catch(err){
            console.log(err)
        }
    }
    getMovies();
})