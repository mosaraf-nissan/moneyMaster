document.getElementById('calculate-btn').addEventListener('click', function(){
    // step 1 get total income amount
    const income = document.getElementById('income-input')
    const incomeValueString = income.value;
    const incomeValue = parseFloat(incomeValueString);
    


    // step 2 get food expenses
    const foodExpenses = document.getElementById('food-input');
    const foodExpenseString = foodExpenses.value;
    const foodExpense = parseFloat(foodExpenseString);
    
    
    
    //step 3 get Rent Expense
    const rentExpenses = document.getElementById('rent-input');
    const rentExpenseString = rentExpenses.value ;
    const rentExpense = parseFloat(rentExpenseString);
    

    // step 4 get Clothes Expenses
    const clothesExpenses = document.getElementById('Clothes-input');
    const clothesExpenseString = clothesExpenses.value;
    const clothesExpense = parseFloat(clothesExpenseString);

    // step 5 total Expenses
    const totalExpenses = foodExpense + rentExpense + clothesExpense;
    
    // step 6 update total Expenses

    const totalExpense = document.getElementById('total-expenses-amount');
    const totalExpenseString = totalExpense.innerText;
    const totalExpensesAmount = parseFloat(totalExpenseString);
    totalExpense.innerText = totalExpenses;

    // step 7 total balance calculating
    const totalBalance = incomeValue - totalExpenses;
    const balance = document.getElementById('balance-total');
    const balanceString = balance.innerText;
    const totalBalanceAmount = parseFloat(balanceString);
    balance.innerText = totalBalance;     
})