function generateCard() {
    // Get input values
    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const section = document.getElementById("section").value;
    const studentId = document.getElementById("studentId").value;
    const bloodGroup = document.getElementById("bloodGroup").value;

    // Validate fields
    if (!name || !course || !section || !studentId || !bloodGroup) {
        alert("Please fill all the fields.");
        return;
    }

    // Create ID card output
    const cardHTML = `
        <h3>Student ID Card</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Section:</strong> ${section}</p>
        <p><strong>Student ID:</strong> ${studentId}</p>
        <p><strong>Blood Group:</strong> ${bloodGroup}</p>
    `;

    document.getElementById("cardOutput").innerHTML = cardHTML;
}
