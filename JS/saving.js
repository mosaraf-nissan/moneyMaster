document.getElementById('saving-btn').addEventListener('click', function(){
    //  step 1 get the saving value
    const saving = document.getElementById('saving-input');
    const savingString = saving.value;
    const savingAmount = parseFloat(savingString);
    
    

    // step 2 calculate the total discount from total income amount

    const income = document.getElementById('income-input')
    const incomeValueString = income.value;
    const incomeValue = parseFloat(incomeValueString);
    
    const getDiscount = incomeValue * savingAmount / 100 ;
    
    const savingBalance = document.getElementById('saving-amount');
    const savingBalanceString = savingBalance.innerText;
    const totalSaving = parseFloat(savingBalanceString);
    savingBalance.innerText = getDiscount;



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
     
 
     // step 7 total balance calculating
     const totalBalance = incomeValue - totalExpenses;
     const balance = document.getElementById('balance-total');
     const balanceString = balance.innerText;
     const totalBalanceAmount = parseFloat(balanceString);
     console.log(totalBalanceAmount);

    const remainingBalance = totalBalanceAmount - getDiscount;
    
    const lastBalance = document.getElementById('remaining-balance');
    const lastBalanceString = lastBalance.innerText;
    const finalBalance = parseFloat(lastBalanceString);
    lastBalance.innerText = remainingBalance;
})