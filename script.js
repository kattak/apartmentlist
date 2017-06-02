var payload = {
    "members": [
        {
            "email": "jill@mycompany.com",
            "name": "Jill",
            "team": "engineering"
        },
        {
            "email": "rohit@mycompany.com",
            "name": "Rohit",
            "team": "finance"
        },
        {
            "email": "maria@mycompany.com",
            "name": "Maria",
            "team": "operations"
        },
        {
            "email": "sam@mycompany.com",
            "name": "Sam",
            "team": "operations"
        }
    ],
    "restaurant": {
        "logo": "http://example.com/images/pizza.png",
        "name": "Pizza R Us",
        "yelp_link": "https://yelp.com/pizza-r-us"
    }
}

//Customize email for a specific team member
function customizeEmail(member){
  document.getElementById("name").innerHTML = member.name;
  document.getElementById("restaurant").innerHTML = payload["restaurant"]["name"];
}


customizeEmail(payload["members"][0]);
