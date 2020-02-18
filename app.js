//https://github.com/nhadley1/Rest-API-Practice.git

fetch('http://jsonplaceholder.typicode.com/posts?_limit=10_')
  
    .then(response => response.json())
    .then(json => json.forEach(element => {
        //Question 1
        document.getElementById('q1').innerHTML += "<tr><td>" +  element.id + "</td>" + "<td>" +  element.title + "</td>" + "<td>" +  element.body + "</td></tr>";
        
        //Question 2
        document.getElementById('q2').innerHTML += "<p>" + element.body + "</p>"
        
        //Question 3
        if(element.body.length > 50){
            document.getElementById('q3').innerHTML += "<p>" + element.body.slice(0,50) + "</p>"
        }

        //Question 4 at bottom of page

        //Question 5
        if(element.title.length >= 30){
            document.getElementById('q5').innerHTML += "<li>" + element.title + "</li>"
        }

        //Question 6
        if(element.id % 2 == 0){
            document.getElementById('q6-even').innerHTML += "<li>" + element.title + "</li>"
        }
        else{
            document.getElementById('q6-odd').innerHTML += "<li>" + element.title + "</li>"
        }
    }));

        //Question 4

        fetch('http://jsonplaceholder.typicode.com/posts?_limit=3_')
  
        .then(response => response.json())
        .then(json => json.forEach(element => {
        
        let rand1 = Math.floor(Math.random() * 3) + 1; 
        let rand2 = Math.floor(Math.random() * 100) + 100;
        
        console.log(rand1);
        
        var ttl = json[rand1-1].body.slice(0,5)

        var bd = json[rand1-1].body.slice((json[rand1-1].body.length)/2, (json[rand1-1].body.length))
        

    var key = [
        {id: rand1 + rand2,
            title: ttl,
             body: bd},
    ];
    
    key.forEach(element => {
        document.getElementById('q4').innerHTML += "<tr><td>" +  element.id + "</td>" + "<td>" +  element.title + "</td>" + "<td>" +  element.body + "</td></tr>";
    });;
}));
    
    

    
    
        
    

  



// fetch('http://jsonplaceholder.typicode.com/posts?_limit=10')
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }

//       // Examine the text in the response
//       response.json().then(function(data) {
//         let arr = data;
//         console.log(arr);
//         //document.getElementById('table').innerHTML = arr.userID;
//       });
//     }
//   )

  


  