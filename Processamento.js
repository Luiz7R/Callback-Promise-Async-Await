import fetch from 'node-fetch';

const init = async() => {

     const url = "https://jsonplaceholder.typicode.com/posts"

     try
     {
          const contents = await fetch(url)

          return contents.json();
     }
     catch(error)
     {
          console.log(error)
     }
}

 init().then(contents => console.log(contents))

 