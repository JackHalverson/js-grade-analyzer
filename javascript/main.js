function gradeAnalyzer(grades) {
    const total = grades.reduce((acc, grade) => acc + grade, 0);
    const average = Math.round((total / grades.length) * 10) / 10;
    const highest = Math.max(...grades);
    const lowest = Math.min(...grades);
    const passing = average >= 60;
  
    return {
      total: total,
      average: average,
      highest: highest,
      lowest: lowest,
      passing: passing
    };
  }
  
  document.getElementById("analyzeButton").addEventListener("click", function() {
    const grades = [75, 88, 37, 100, 100, 89, 92, 93, 68, 76, 85, 90, 40, 99];
    const result = gradeAnalyzer(grades);
  
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      <p><strong>Total:</strong> ${result.total}</p>
      <p><strong>Average:</strong> ${result.average}</p>
      <p><strong>Highest:</strong> ${result.highest}</p>
      <p><strong>Lowest:</strong> ${result.lowest}</p>
      <p><strong>Passing:</strong> ${result.passing ? "Yes" : "No"}</p>
    `;
    resultDiv.style.display = "block";
  });
  