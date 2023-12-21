const form = document.getElementById("form")
console.log(form)

form.addEventListener("submit", function(e){
    e.preventDefault()

    // console.log(form.elements);

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const country = document.getElementById("Country");
    const week = document.getElementById("week");
    const pull = document.getElementById("pull");
    const deploy = document.getElementById("deploy");
    const security = document.getElementById("security");
    const range = document.getElementById("range");

    console.log("First Name:", firstName.value);
    console.log("Last Name:", lastName.value);
    console.log("Country:", country.value);
    console.log("Weekly Report:", week.checked,); 
    console.log("Pull Request:", pull.checked);
    console.log("Deployment:", deploy.checked);
    console.log("Security:", security.checked);
    console.log("Range:", range.value);

    if(firstName.value !== "" || lastName.value !== "" || country.value !== ""){
        confirm("Are you sure you want to submit?")
        alert("form submitted")
        firstName.value = ""
        lastName.value = ""
        country.value = ""
        week.checked = false
        pull.checked = false
        deploy.checked = false
        security.checked = true
        range.value = 0
    
    }

})

// let unorderedList = document.createElement("ul");
// document.body.appendChild(unorderedList);
// let listItem1 = document.createElement("li");
// listItem1.textContent = "It's free";
// unorderedList.appendChild(listItem1);

// let listItem2 = document.createElement("li");
// listItem2.textContent = "It's awesome";
// unorderedList.appendChild(listItem2);
// const paragraph1 = document.getElementById("para1")
// console.log(paragraph1);

// const gent = document.querySelector(".text-desc")
// console.log(gent)

// const button = document.getElementsByTagName("button")[0]
// button.style.backgroundColor = "green"
// button.style.border = "none"
// button.style.color = "white"
// button.style.padding = "15px"
// button.style.borderRadius = "10px"
// button.style.textDecoration = "underline"

// const span = document.querySelector("text-desc")
// console.log("text-desc")

// console.log(button)

