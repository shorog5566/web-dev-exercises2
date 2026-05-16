
document.addEventListener('DOMContentLoaded', function() {
    
    initializeCalculator();
});

function initializeCalculator() {
    
    const calculateBtn = document.getElementById('calculateBtn');

    calculateBtn.addEventListener('click', calculateTotalCost);
    const costPerLiterInput = document.getElementById('costPerLiter');
    const litersPurchasedInput = document.getElementById('litersPurchased');
    costPerLiterInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            calculateTotalCost();
        }
    });
    litersPurchasedInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            calculateTotalCost();
        }
    });
}

function calculateTotalCost() {
    const costPerLiter = parseFloat(document.getElementById('costPerLiter').value);
    const litersPurchased = parseFloat(document.getElementById('litersPurchased').value);
    const resultElement = document.getElementById('totalCostResult');
    
   
    if (isNaN(costPerLiter) || isNaN(litersPurchased)) {
        resultElement.textContent = '❌ Please enter valid numbers in both fields.';
        resultElement.style.color = '#e74c3c';
        return;
    }
    
    if (costPerLiter < 0 || litersPurchased < 0) {
        resultElement.textContent = '❌ Cost and liters must be positive values.';
        resultElement.style.color = '#e74c3c';
        return; 
    }
    const totalCost = costPerLiter * litersPurchased;
    const formattedCost = totalCost.toFixed(2);
    resultElement.textContent = `💷 Total Cost: £${formattedCost}`;
    resultElement.style.color = '#667eea';
}