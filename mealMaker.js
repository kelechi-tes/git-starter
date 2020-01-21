const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
      get appetizers(){
        return this._courses.appetizers; 
      },
      set appetizers(appetizers){
        return this._courses.appetizers = appetizers;
      },
      get mains(){
        return this._courses.mains
      },
      set mains(mains){
        return this._courses.mains = mains
        
      },
      get desserts(){
        return this._courses.desserts
        
      },
      set desserts(desserts){
        return this._courses.desserts = desserts
      },
    get courses(){
      return {
        appetizers:this.appetizers,
        mains:this.mains,
        desserts:this.desserts
        
      }
    
    },
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice
        
      };
      return this._courses[courseName].push(dish)
      
    },
    
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName]
      return dishes[Math.floor(Math.random(dishes)* dishes.length)]
      
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      
      return `Your meal is  ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}.`
    }
  
    
  }
  menu.addDishToCourse('appetizers', 'collard greens', 20) 
  menu.addDishToCourse('appetizers', 'salad greens', 20) 
  menu.addDishToCourse('appetizers', 'fruit greens', 20) 
  
  menu.addDishToCourse('mains','Jollof', 30)
  menu.addDishToCourse('mains','Eba', 30)
  menu.addDishToCourse('mains','Akpu', 30)
  
  menu.addDishToCourse('desserts','cream', 10)
  menu.addDishToCourse('desserts','ice cream', 10)
  menu.addDishToCourse('desserts','whip cream', 10)
  
  let meal = menu.generateRandomMeal()
  console.log(meal)
  