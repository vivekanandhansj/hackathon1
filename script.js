//creating div in body tag
let div = document.createElement("div")
div.setAttribute("class","container")
div.setAttribute("id","content1")
document.body.appendChild(div)



let div2 = document.createElement("div")
div2.setAttribute("id","content")
div2.setAttribute("class","row")
document.getElementById("content1").appendChild(div2)


async function bookdata(){
   let response = await fetch("https://www.anapioficeandfire.com/api/books/")
    return response.json()
}

bookdata()
.then((response)=>{
  let paradiv = document.getElementById("content")

  response.map((a)=>{



      let name = document.createElement("p")
      name.innerHTML=`name : ${a.name} <br> isbn : ${a.isbn} <br> Number of Pages : ${a.numberOfPages} <br> authors : ${a.authors} <br> publisher : ${a.publisher} <br> released:${a.released.slice(0,10)}<br>  `
   
      paradiv.appendChild(name)
      
   
    })
})
.catch((er)=>console.error(er))


