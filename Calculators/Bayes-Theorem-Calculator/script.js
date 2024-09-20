function calculateBayesianTheorem() {
    // Get input values
    const pA = parseFloat(document.getElementById('probabilityA').value);
    const pBGivenA = parseFloat(document.getElementById('probabilityBGivenA').value);
    const pNotA = parseFloat(document.getElementById('probabilityNotA').value);

    // Validate inputs
    if (isNaN(pA) || isNaN(pBGivenA) || isNaN(pNotA)) {
        document.getElementById('result').innerText = 'Please enter valid numbers for all probabilities.';
        return;
    }

    if (pA < 0 || pA > 1 || pBGivenA < 0 || pBGivenA > 1 || pNotA < 0 || pNotA > 1) {
        document.getElementById('result').innerText = 'Probabilities must be between 0 and 1.';
        return;
    }

    // Calculate P(B)
    const pB = (pBGivenA * pA) + (1 - pNotA) * (1 - pA);

    // Calculate P(A|B) using Bayes' Theorem
    const pAGivenB = (pBGivenA * pA) / pB;

    // Display result
    document.getElementById('result').innerText = `P(A|B) = ${pAGivenB.toFixed(4)}`;
}
