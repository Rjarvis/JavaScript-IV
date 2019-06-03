// CODE here for your Lambda Classes
class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }

    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}



class Instructor extends Person{
    constructor(instrAttr){
        super(instrAttr);
        this.specialty = instrAttr.specialty;
        this.favLanguage = instrAttr.favLanguage;
        this.catchPhrase = instrAttr.catchPhrase;
    }
    
    // methods
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student,subject){
        console.log(`${student.name} recieves a ${this.points(student)} score on ${subject}`);
    }
    points(student){
        return student.grade = student.grade + (Math.random()*15);
    }
}

class Student extends Person{
    constructor(studentAttr){
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
        this.grade = studentAttr.grade;
    }
    
    listsSubjects(){
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    }
    
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`); 
    }
    
    graduate(){
        if(this.grade < 70){
            console.log(`Sorry ${this.name}, you need ${70 - this.grade} points to graduate.  Keep going!`);
        }else{
            console.log(`Congratulation's ${this.name}!  You have graduated Lambda School and can now start your ISA!`)
        }
    }
}

class ProjectManagers extends Instructor{
    constructor(pmAttr){
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const dave = new Person({
    name: 'Dave',
    age: 34,
    location: 'Chino'
})

const tart = new Person({
    name: 'Tara',
    age: 21,
    location: 'CLASSIFIED'
})

const josh = new Instructor({
    name: 'Josh',
    age: 37,
    location: 'Denver',
    specialty: 'Front-end',
    favLanguage: 'C#',
    catchPhrase: 'Anyways, here\'s Wonderwall'
})

const pope = new Instructor({
    name: 'Cameron',
    age: 34,
    location: 'Chicago',
    specialty: 'HTML',
    favLanguage: 'C++',
    catchPhrase: 'Chrono Trigger is the best game ever, change my mind!'
})

const roro = new Student({
    name: 'Roland',
    age: '32',
    location: 'Ypsilanti',
    previousBackground: 'Sub-maker',
    className: 'WEBPT7',
    favSubjects: ['HTML','CSS','Javascript','Cooking'],
    grade: 1.5
})

const greg = new Student({
    name: 'Greg',
    age: '30',
    location: 'Ann Arbor',
    previousBackground: 'Kroger stockman',
    className: 'CS404',
    favSubjects: ['AI','Recursive Redundancies','video games'],
    grade: 25
})

const zen = new ProjectManagers({
    name: "Joshua Harris",
    age: 26,
    location: "Austin",
    specialty: "LESS",
    favLanguage: "React",
    catchPhrase: "Good On Ya",
    gradClassName: "Full-Stack Web Dev",
    favInstructor: "Josh Knell"
})

const ryan = new ProjectManagers({
    name: "Ryan Boris",
    age: 33,
    location: "Indianapolis",
    specialty: "Ninja Code",
    favLanguage: "Python",
    catchPhrase: "Crikey Danja Danja DANJA",
    gradClassName: "CS42",
    favInstructor: "Cameron Pope"
})

dave.speak();
roro.listsSubjects();
greg.listsSubjects();
roro.PRAssignment('Javascript IV');
roro.sprintChallenge('Javascript XXII');
roro.graduate();
greg.graduate();
josh.demo('CSS with Josh');
pope.demo('Python with Cameron')
pope.grade(roro, 'CSS');
josh.grade(greg, 'LESS');
josh.grade(roro, 'LESS');
josh.grade(greg, 'HTML');
pope.grade(roro, 'Python');
josh.grade(roro, 'Java');
josh.grade(greg, 'Node');
josh.grade(roro, 'Node');
josh.grade(greg, 'redux');
josh.grade(roro, 'redux');
josh.grade(greg, 'React');
josh.grade(roro, 'React');
roro.graduate();
greg.graduate();
zen.standUp("WebDevsprint404");
zen.debugsCode(roro,'Responsive Web Design');
ryan.standUp('SaturdaySprints');
ryan.debugsCode(greg,'Java Libraries');
ryan.speak();
zen.demo('Less');