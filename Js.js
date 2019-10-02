var friends = [
    "Mohamed",
    "Hassan",
    "Soha",
    "Ahmed",
    "Hind",
    "Mohamed",
    "Sayed"
];

 var specialFriends = friends.indexOf("Soha", 2);

 console.log(specialFriends);

console.log(friends[specialFriends]);

document.getElementById("all").innerHTML = 
"my friends is :" + friends;