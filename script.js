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

//Customize email for a specific member
function customizeEmail(member){
  document.getElementById("name").innerHTML = member.name;
  document.getElementById("restaurant").innerHTML = payload["restaurant"]["name"];
}

//Customize email for a group of members
///Find members that match a given key-value pair
function findMembers(k, v){
  var members = payload["members"];

  //Log what this function is looking for
  console.log("Looking for members, whose "+ k +" is " + v);

  var resultMembers = [];
  for (var i = 0; i < members.length; i++){
    tmpMember = members[i];
    if (tmpMember[k] == v){
      resultMembers.push(tmpMember);
    }
  }
  return resultMembers;
}

//Customize email for a specific member
//customizeEmail(payload["members"][0]);

//Customize email for a group of members

//Find a group of members matching a key value pair
var group = findMembers("team", "operations");

//Can loop over group of members to customize each email
//Shown with just the first member below
customizeEmail(group[0]);
