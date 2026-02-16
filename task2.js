let expenses = []
let currentId = 1

function addExpense(title, amount, category) {
    if (!title || typeof amount !== "number" || amount <= 0 || !category) {
        console.log("Некорректный ввод")
        return
    }

    let expense = {
        id: currentId++,
        title: title,
        amount: amount,
        category: category
    }

    expenses.push(expense)
    console.log("Добавлено:", expense)
}

function printAllExpenses() {
    if (expenses.length === 0) {
        console.log("Расходов нет")
        return
    }

    for (let i = 0; i < expenses.length; i++) {
        let e = expenses[i]
        console.log(e.id, e.title, e.amount, e.category)
    }
}

function getTotalAmount() {
    let total = 0

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount
    }

    console.log("Общая сумма:", total)
    return total
}

function getExpensesByCategory(category) {
    let result = []
    let total = 0

    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].category.toLowerCase() === category.toLowerCase()) {
            result.push(expenses[i])
            total += expenses[i].amount
        }
    }

    console.log("Категория:", category)
    console.log("Найдено:", result.length)
    console.log("Потрачено:", total)

    return result
}

function findExpenseByTitle(text) {
    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].title.toLowerCase().includes(text.toLowerCase())) {
            console.log("Найдено:", expenses[i])
            return expenses[i]
        }
    }

    console.log("Не найдено")
    return null
}

function deleteExpenseById(id) {
    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].id === id) {
            expenses.splice(i, 1)
            console.log("Удалено")
            return
        }
    }

    console.log("ID не найден")
}

function printCategoryStatistics() {
    let stats = {}

    for (let i = 0; i < expenses.length; i++) {
        let category = expenses[i].category

        if (!stats[category]) {
            stats[category] = 0
        }

        stats[category] += expenses[i].amount
    }

    for (let category in stats) {
        console.log(category, stats[category])
    }
}
