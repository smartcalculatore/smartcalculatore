// Dark/Light Mode
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});
if(localStorage.getItem("theme") === "dark") document.body.classList.add("dark");

// Currency API
async function convertCurrency() {
  let amount = document.getElementById("amount").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let res = await fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`);
  let data = await res.json();
  document.getElementById("currencyResult").innerText = `= ${data.result.toFixed(2)} ${to}`;
}

// Loan EMI
function calculateLoan() {
  let P = parseFloat(document.getElementById("loanAmount").value);
  let r = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
  let n = parseFloat(document.getElementById("tenure").value) * 12;
  let emi = (P*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
  document.getElementById("loanResult").innerText = `Monthly EMI: ${emi.toFixed(2)}`;
}

// BMI
function calculateBMI() {
  let w = parseFloat(document.getElementById("weight").value);
  let h = parseFloat(document.getElementById("height").value) / 100;
  let bmi = (w / (h*h)).toFixed(2);
  document.getElementById("bmiResult").innerText = `BMI: ${bmi}`;
}

// GPA
function addCourse() {
  let div = document.createElement("div");
  div.innerHTML = '<input type="number" placeholder="Grade Point"> <input type="number" placeholder="Credit Hours">';
  document.getElementById("gpaInputs").appendChild(div);
}
function calculateGPA() {
  let inputs = document.querySelectorAll("#gpaInputs div");
  let totalPoints = 0, totalHours = 0;
  inputs.forEach(d => {
    let gp = parseFloat(d.children[0].value);
    let ch = parseFloat(d.children[1].value);
    if(!isNaN(gp) && !isNaN(ch)) {
      totalPoints += gp * ch;
      totalHours += ch;
    }
  });
  let gpa = (totalPoints / totalHours).toFixed(2);
  document.getElementById("gpaResult").innerText = `GPA: ${gpa}`;
}

// Age
function calculateAge() {
  let dob = new Date(document.getElementById("dob").value);
  let diff = Date.now() - dob.getTime();
  let ageDate = new Date(diff);
  document.getElementById("ageResult").innerText = `Age: ${Math.abs(ageDate.getUTCFullYear() - 1970)} years`;
}
