var request = require('request');

const getPosts = url => new Promise((resolve, reject) => {

     request(url, (err, res, contents) => {
          
            if ( !err && res.statusCode == 200 )
            {
                 resolve(contents) 
            }
            else
            {
                 reject(error)
            }
     })
 })


 const init = async() => {

     try
     {    
          const url = "https://jsonplaceholder.typicode.com/posts"

          const contents = await getPosts(url)

          return contents;
     }
     catch(err)
     {
         console.log(err)
     }
 }

 init().then(contents => console.log(contents))

 