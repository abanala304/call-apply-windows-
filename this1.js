var myDetails = {
    firstName:"Anil",
    lastName: "Banala",
    fullName: function () {
        return this;
    }
}
myDetails.fullName(); 

{firstName: "Anil", lastName: "Banala", fullName: ƒ}