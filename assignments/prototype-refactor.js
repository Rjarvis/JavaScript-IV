/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
/*
function GameObject(attributes){
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
  this.destroy = function(){
    return `${this.name} was removed from the game.`;
  }; 
}
*/
class GameObject{
    constructor(attributes){
      this.createdAt = attributes.createdAt;
      this.name = attributes.name;
      this.dimensions = attributes.dimensions;
    }
  
    destroy() {
      return `${this.name} was removed from the game!`;
    }
  
  }
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  /*
  function CharacterStats(charAttributes){
    GameObject.call(this, charAttributes);
    this.healthPoints = charAttributes.healthPoints;
    this.dimensions = charAttributes.dimensions;
    this.takeDamage = function(){
      return `${this.name} took damage.`;
    };
  }
  */
  class CharacterStats extends GameObject{
    constructor(charAttributes){
      super(charAttributes);
      this.healthPoints = charAttributes.healthPoints;
      this.dimensions = charAttributes.dimensions;
    }
  
    takeDamage(){
      return `${this.name} took damage.`;
    }
  }
  /*
  CharacterStats.prototype.takeDamage = function(){
    return `${this.name} took damage.`;
  };*/
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  
  /*
  function Humanoid(humanAttributes){
    CharacterStats.call(this, humanAttributes);
    this.team = humanAttributes.team;
    this.weapons = humanAttributes.weapons;
    this.language = humanAttributes.language;
  }
  
  Humanoid.prototype.greet = function(){
    return `${this.name} offers a greeting in ${this.language}.`;
  };
  */
  
  
  class Humanoid extends CharacterStats{
    constructor(humanAttributes){
      super(humanAttributes);
      this.team = humanAttributes.team;
      this.weapons = humanAttributes.weapons;
      this.language = humanAttributes.language;
    }
  
    greet(){
      return `${this.name} offers a greeting in ${this.language}.`;
    }
  }
  /*
    === Hero / Villian constructor ===
    * inherits from Humanoid constructor.
    * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    * Create two new objects, one a villain and one a hero and fight it out with methods!
    */
   
   /*
  function Hero(heroAttributes){
    Humanoid.call(this, heroAttributes);
    this.alliegiance = heroAttributes.alliegiance;
    this.attackVillian = function(target){
      if(target.alliegiance === 'villian' && this.weapons != null){
        target.healthPoints = target.healthPoints-3;
        if(target.healthPoints <= 0){
          return target.destroy();
        }else{
          return `${target.name} took 3 points of damage leaving them at ${target.healthPoints}`;
        }
      }else{
        return `Hero's only hurt villians!`;
      }
  
    };
  }
   */
  class Hero extends Humanoid{
    constructor(heroAttributes){
      super(heroAttributes);
      this.alliegiance = heroAttributes.alliegiance;
    }
  
    attackVillian(target){
      if(target.alliegiance === 'villian' && this.weapons != null){
        target.healthPoints = target.healthPoints-3;
        if(target.healthPoints <= 0){
          return target.destroy();
        }else{
          return `${target.name} took 3 points of damage leaving them at ${target.healthPoints}`;
        }
      }else{
        return `Hero's only hurt villians!`;
      }
    }
  }
  
  /*
  function Villain(villianAttributes){
    Humanoid.call(this, villianAttributes);
    this.alliegiance = villianAttributes.alliegiance;
    this.attack = function(target){
      if(target.alliegiance === null || target.team != 'Citadel'){
        target.healthPoints = target.healthPoints - 10;
        return `${target.name} took 10 points of damage; leaving them at ${target.healthPoints}`;
      }else{
        target.healthPoints = target.healthPoints--;
        return `${target.name} took 1 point of damage; leaving them at ${target.healthPoints}`;
      }
    };
  }
   */
  
   class Villain extends Humanoid{
    constructor(villianAttributes){
      super(villianAttributes);
      this.alliegiance = villianAttributes.alliegiance;
    }
  
    attack(target){
      if(target.alliegiance === null || target.team != 'Citadel'){
        target.healthPoints = target.healthPoints - 10;
        if(target.healthPoints <= 0){
          return target.destroy();
        }else{
          return `${target.name} took 10 points of damage; leaving them at ${target.healthPoints}`;
        }
      }else{
        target.healthPoints = target.healthPoints--;
        return `${target.name} took 1 point of damage; leaving them at ${target.healthPoints}`;
      }
    }
  }
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    const paladin = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 3,
      },
      healthPoints: 15,
      name: 'Kyle',
      team: 'Citadel',
      weapons: [
        'Sword',
        'Sheild',
      ],
      language: 'common',
      alliegiance: 'hero',
    });
  
    const warlock = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 1,
        height: 2,
      },
      healthPoints: 9,
      name: 'Raheem',
      team: 'Catacombs',
      weapons: [
        'Dagger',
      ],
      language: 'infernal',
      alliegiance: 'villian',                                  
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    console.log(warlock.attack(archer));
    console.log(warlock.attack(paladin));
    console.log(paladin.attackVillian(warlock));// Raheem took 3 points of damage leaving them at 6
    console.log(paladin.attackVillian(warlock));
    console.log(paladin.attackVillian(warlock));
    console.log(paladin.attackVillian(warlock));
    console.log(paladin.attackVillian(warlock));
    console.log(paladin.attackVillian(archer));
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
