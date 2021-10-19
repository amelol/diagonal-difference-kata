//Given a square matrix, calculate the absolute 
//difference between the sums of its diagonals.
//The function is expected to return an INTEGER.

function diagonalDifference(arr) {
  let sumDiag1 = 0;
  let sumDiag2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sumDiag1 += arr[i][i];
    sumDiag2 += arr[i][arr.length - i - 1];
  }
  return Math.abs(sumDiag1 - sumDiag2);
}

module.exports = diagonalDifference;