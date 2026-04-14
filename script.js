const form = document.getElementById("form");
const ok = document.getElementById("ok");
const list = document.getElementById("list");
console.log(ok);

let students = [];

form.addEventListener("submit", function(e){
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    studentId: document.getElementById("studentId").value,
    dept: document.getElementById("dept").value,
    email: document.getElementById("email").value
  };

  //เพิ่มข้อมูลใน array
  students.push(data); 

  //แสดงข้อมูล
  render();
  
  //รีเซ็ตฟอร์ม
  form.reset();

  // ซ่อนฟอร์ม
  form.style.display = "none";

  //แสดงข้อความ
  ok.classList.remove("hide");
});

function render(){
  list.innerHTML = "";

  if(students.length === 0){
    list.innerHTML = "<p>ยังไม่มีข้อมูล</p>";
    return;
  }

  students.forEach((s) => {
    list.innerHTML += `
      <div class="item">
        <p>ชื่อ: ${s.name}</p>
        <p>รหัส: ${s.studentId}</p>
        <p>คณะ: ${s.dept}</p>
        <p>Email: ${s.email}</p>
      </div>
    `;
  });
}