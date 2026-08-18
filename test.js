// =====================================================
// SCHOOL RESULTS PORTAL
// GRADE CALCULATION SYSTEM
// =====================================================


// -----------------------------------------------------
// GRADE CALCULATION FUNCTION
// -----------------------------------------------------

function calculateGrade(score) {

    if (score >= 75) {

        return "A";

    } else if (score >= 65) {

        return "B";

    } else if (score >= 55) {

        return "C";

    } else if (score >= 45) {

        return "D";

    } else if (score >= 40) {

        return "E";

    } else {

        return "F";

    }

}


// -----------------------------------------------------
// GRADE POINT FUNCTION
// -----------------------------------------------------

function calculateGradePoint(grade) {

    switch (grade) {

        case "A":
            return 5;

        case "B":
            return 4;

        case "C":
            return 3;

        case "D":
            return 2;

        case "E":
            return 1;

        case "F":
            return 0;

        default:
            return 0;

    }

}


// -----------------------------------------------------
// REMARK FUNCTION
// -----------------------------------------------------

function calculateRemark(grade) {

    switch (grade) {

        case "A":
            return "Excellent";

        case "B":
            return "Very Good";

        case "C":
            return "Good";

        case "D":
            return "Fair";

        case "E":
            return "Pass";

        case "F":
            return "Fail";

        default:
            return "No Remark";

    }

}


// -----------------------------------------------------
// CALCULATE TOTAL SCORE
// -----------------------------------------------------

function calculateTotal(ca, exam) {

    return ca + exam;

}


// -----------------------------------------------------
// CALCULATE STUDENT RESULT
// -----------------------------------------------------

function calculateResult(ca, exam) {

    // Calculate total

    const total =
        calculateTotal(ca, exam);


    // Calculate grade

    const grade =
        calculateGrade(total);


    // Calculate grade point

    const gradePoint =
        calculateGradePoint(grade);


    // Calculate remark

    const remark =
        calculateRemark(grade);


    // Return complete result

    return {

        ca: ca,

        exam: exam,

        total: total,

        grade: grade,

        gradePoint: gradePoint,

        remark: remark

    };

}


// -----------------------------------------------------
// EXAMPLE
// -----------------------------------------------------

const studentResult =
    calculateResult(28, 65);


console.log("Student Result");
console.log("---------------------");

console.log(
    "CA:",
    studentResult.ca
);

console.log(
    "Exam:",
    studentResult.exam
);

console.log(
    "Total:",
    studentResult.total
);

console.log(
    "Grade:",
    studentResult.grade
);

console.log(
    "Grade Point:",
    studentResult.gradePoint
);

console.log(
    "Remark:",
    studentResult.remark
);