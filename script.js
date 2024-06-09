// Grading Scores The Score Inputed By The User Using Switch Statement

let score = prompt('Enter Your Score');
let grade;
let collegeStudent;

let division = score / 10;
let totalScore = Math.floor(division);
console.log(typeof totalScore);
console.log(totalScore);

switch (totalScore) {
	case 9:
		grade = 'A';
		break;
	case 8:
		grade = 'B';
		break;
	case 7:
		grade = 'C';
		break;
	case 6:
		grade = 'D';
		break;
	case 5:
		grade = 'E';
		break;
	case 4:
		collegeStudent = confirm("Are You A College Student\nIf YES click 'OK'");
		switch (collegeStudent) {
			case true:
				grade = 'Your Result Is Unsatisfactory\nYou Got An F';
				break;
			default:
				grade = 'F';
		}
		break;
	case 3:
		collegeStudent = confirm("Are You A College Student\nIf YES click 'OK'");
		switch (collegeStudent) {
			case true:
				grade = 'Your Result Is Unsatisfactory\nYou Got An F';
				break;
			default:
				grade = 'F';
		}
		break;
	case 2:
		collegeStudent = confirm("Are You A College Student\nIf YES click 'OK'");
		switch (collegeStudent) {
			case true:
				grade = 'Your Result Is Unsatisfactory\nYou Got An F';
				break;
			default:
				grade = 'F';
		}
		break;
	case 1:
		collegeStudent = confirm("Are You A College Student\nIf YES click 'OK'");
		switch (collegeStudent) {
			case true:
				grade = 'Your Result Is Unsatisfactory\nYou Got An F';
				break;
			default:
				grade = 'F';
		}
		break;
	case 0:
		collegeStudent = confirm("Are You A College Student\nIf YES click 'OK'");
		switch (collegeStudent) {
			case true:
				grade = 'Your Result Is Unsatisfactory\nYou Got An F';
				break;
			default:
				grade = 'F';
		}
		break;
	default:
		grade = 'Enter A Valid Score';
}

console.log(`Your score is ${score}, so your grade is  ${grade}`);
alert(`Your score is ${score}, so your grade is  ${grade}`);
