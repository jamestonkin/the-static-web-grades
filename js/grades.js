// Declaring variables and grade array
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var finalGrades;
var newGrade;
var grades = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  F: 0
};

// Finds the lowest and highest grade scores in the array
var max = Math.max(...scores);
console.log('The highest grade score is: ', max);
var min = Math.min(...scores);
console.log('The lowest grade score is: ', min);

function countGrades() {
  if (newGrade >= 91) {
    grades.A += 1;
  } else if (newGrade >= 81) {
    grades.B += 1;
  } else if (newGrade >= 71) {
    grades.C += 1;
  } else if (newGrade >= 61) {
    grades.D += 1;
  } else {
    grades.F += 1;
  }
  return grades;
}

for (let i = 0; i < scores.length; i++) {
  newGrade = scores[i];
  countGrades(newGrade);
}

finalGrades = countGrades();
console.log('Grade Count is: ', finalGrades);
