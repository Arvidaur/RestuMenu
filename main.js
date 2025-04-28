class Dish {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    display() {
        return `${this.name} - $${this.price}: ${this.description}`;
    }
}

//subklass förrätt
class Precourse extends Dish {
    constructor(name, price, description, spiceLevel) {
        super(name, price, description);
        this.spiceLevel = spiceLevel;
    }

    display() {
        return `${super.display()} (Spice Level: ${this.spiceLevel})`;
    }
}

//Subklass Dessert
class Dessert extends Dish {
    constructor(name, price, description, sweetnessLevel) {
        super(name, price, description);
        this.sweetnessLevel = sweetnessLevel;
    }

    display() {
        return `${super.display()} (Sweetness Level: ${this.sweetnessLevel})`;
    }
}

class MainCourse extends Dish {
    constructor(name, price, description, vegetarian) {
        super(name, price, description);
        this.vegetarian = vegetarian;
    }

    display() {
        return `${super.display()} (vegetarian: ${this.vegetarian ? 'Yes' : 'No'})`;
    }
}
async function fetchDishes() {
    try {
        const response = await fetch('http://localhost:3000/dishes');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching dishes:', error);
        
    }
}

fetchDishes();