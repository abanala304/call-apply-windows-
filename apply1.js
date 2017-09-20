var friend = {
    firstName:"Ajay",
    lastName: "Sudharshanam",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var me = {
    firstName:"Anil",
    lastName: "Banala",
}
friend.fullName.apply(me)
"Anil Banala"
friend.fullName.apply(friend)
"Ajay Sudharshanam"