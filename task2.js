const expenseTracker = {
    expenses: [],
    currentId: 1,

    addExpense(title, amount, category) {
        if (!title || typeof amount !== "number" || amount <= 0 || !category) {
            console.log("Некорректный ввод")
            return
        }

        let expense = {
            id: this.currentId++,
            title: title,
            amount: amount,
            category: category
        }

        this.expenses.push(expense)
        console.log("Добавлено:", expense)
    },

    printAllExpenses() {
        if (this.expenses.length === 0) {
            console.log("Расходов нет")
            return
        }

        console.log("Все расходы:")
        this.expenses.forEach(exp => {
            console.log(`ID: ${exp.id}, Название: ${exp.title}, Сумма: ${exp.amount}, Категория: ${exp.category}`)
        })
    },

    getTotalAmount() {
        let total = 0
        this.expenses.forEach(exp => total += exp.amount)

        console.log("Чек:")
        this.printAllExpenses()
        console.log("Итого:", total)
        return total
    },

    getExpensesByCategory(category) {
        let filtered = this.expenses.filter(exp => exp.category.toLowerCase() === category.toLowerCase())
        let total = 0
        filtered.forEach(exp => total += exp.amount)

        console.log(`Расходы по категории "${category}":`)
        filtered.forEach(exp => console.log(exp))
        console.log("Потрачено:", total)

        return filtered
    },

    findExpenseByTitle(text) {
        let found = this.expenses.find(exp => exp.title.toLowerCase().includes(text.toLowerCase()))

        if (found) {
            console.log("Найдено:", found)
            return found
        } else {
            console.log("Не найдено")
            return null
        }
    },

    deleteExpenseById(id) {
        let index = this.expenses.findIndex(exp => exp.id === id)
        if (index !== -1) {
            let removed = this.expenses.splice(index, 1)
            console.log("Удалено:", removed[0])
        } else {
            console.log("ID не найден")
        }
    },

    printCategoryStatistics() {
        let stats = {}
        this.expenses.forEach(exp => {
            if (!stats[exp.category]) stats[exp.category] = 0
            stats[exp.category] += exp.amount
        })

        console.log("Статистика по категориям:")
        for (let category in stats) {
            console.log(category + ":", stats[category])
        }
    }
}

expenseTracker.addExpense("Продукты", 1500, "Еда")
expenseTracker.addExpense("Такси", 700, "Транспорт")
expenseTracker.addExpense("Кофе", 300, "Еда")

expenseTracker.printAllExpenses()
expenseTracker.getTotalAmount()
expenseTracker.getExpensesByCategory("Еда")
expenseTracker.findExpenseByTitle("Такси")
expenseTracker.printCategoryStatistics()
expenseTracker.deleteExpenseById(2)
expenseTracker.printAllExpenses()
