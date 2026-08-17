// ==========================================
// SCHOOL RESULTS PORTAL
// THREE FICTIONAL DEMO STUDENTS
// ==========================================

const students = [
    {
        studentId: "STU001",
        password: "demo123",
        name: "Aisha Mohammed",
        className: "SS3",
        session: "2025/2026"
    },

    {
        studentId: "STU002",
        password: "demo456",
        name: "David Okafor",
        className: "SS3",
        session: "2025/2026"
    },

    {
        studentId: "STU003",
        password: "demo789",
        name: "Fatima Ibrahim",
        className: "SS2",
        session: "2025/2026"
    }
];


// ==========================================
// LOGIN
// ==========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const studentId =
            document.getElementById("studentId").value.trim();

        const password =
            document.getElementById("password").value.trim();

        const message =
            document.getElementById("loginMessage");


        // Find matching student

        const student = students.find(function(user) {

            return (
                user.studentId === studentId &&
                user.password === password
            );

        });


        // ==========================================
        // SUCCESSFUL LOGIN
        // ==========================================

        if (student) {

            localStorage.setItem(
                "studentLoggedIn",
                "true"
            );

            localStorage.setItem(
                "studentId",
                student.studentId
            );

            localStorage.setItem(
                "studentName",
                student.name
            );

            localStorage.setItem(
                "studentClass",
                student.className
            );

            localStorage.setItem(
                "studentSession",
                student.session
            );


            message.textContent =
                "Login successful! Welcome " +
                student.name;

            message.className =
                "success-message";


            // Go to dashboard

            setTimeout(function() {

                window.location.href =
                    "dashboard.html";

            }, 1000);


        } else {

            // ==========================================
            // WRONG LOGIN
            // ==========================================

            message.textContent =
                "Invalid Student ID or Password.";

            message.className =
                "error-message";

        }

    });

}