const questions = [
  {
    category:"programming",
    questions:[
      {
        question: "What Does HTML Stand For?",
        options: ["Hyper Text Pre Processor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
        correctAnswer: 1,
      },
      {
        question: "Which Of The Following Is A Correct Way To Declare A Variable In Javascript?",
        options:["var x = 10;", "variable x = 10;", "int x = 10;", "let 10 = x;"],
        correctAnswer:0,
      },
      {
        question: "How Do You Write Comment In Python?",
        options:["// This Is A Comment", "#This Is A Comment", "/* This Is A Comment*/", "<!--This Is A Comment -->"],
        correctAnswer: 1, 
      },
      {
        question: "What Does CSS Stands For?",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Simple Sheets"],
        correctAnswer: 0,
      },
      {
        question: "In JavaScript, How Do You Create A Function?",
        options:["create function myFunction()", "def function myFunction()", "func myFunction()", "function myFunction()"],
        correctAnswer: 3,
      },
      {
        question: "What Does The 'typeof' Operator DO In JavaScript?",
        options: ["checks the type of variable", "Declares a variable", "Assigns a value to a variable", "converts a variable to another type"],
        correctAnswer: 0,
      },
      {
        question: "In C, How Do You Define A Function?",
        options: ["function myFunction()", "def myFunction()", "void myFunction()", "func myFunction()"],
        correctAnswer: 2,
      },
      {
        question: "WHich Of The Following Is A Characteristics Of Python?",
        options: ["Compiled Language", "Dynamic Typing", "Low-Level Language", "Stactic Typing"],
        correctAnswer: 3,
      },
      {
        question: "Which Language Is Used For Android Development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correctAnswer: 1,
      },
      {
        question: "What Is The Purpose Of The 'forEach()' Method In JavaScript?",
        options: ["Removes duplicate elements from an array", "Filters elements in an array", "Sorts an array", "Iterates through each element in array"],
        correctAnswer: 3,
      },
      {
        question: "What Does The 'return' Keyboard Do In A Function?",
        options: ["Ends the function and return a value", "Continues the function", "Exits the function without value", "Ends the program execution"],
        correctAnswer: 0,
      },
      {
        question: "Which Of The Following Is Not A Semantic HTML Element?",
        options: ["<header>", "<footer>", "<div>","<article>"],
        correctAnswer: 2,
      },
      {
        question: "What Is The Primary Purpose Of A 'for' Loop In Programming?",
        options: ["Repeat code for a specified number of times", "Repeat code until a condition is true", "Define a function", "Evaluate conditions in the loop"],
        correctAnswer: 0,
      },
      {
        question: "Which DataStructure IS Ideal For LIFO (LAst In First Out)?",
        options: ["Queue", "Stack", "Linked List", "Array"],
        correctAnswer: 1,  
      },
      {
        question: "Which Command Is Used In GIT TO Store Changes In The Repository?",
        options: ["git commit", "git push", "git pull", "git add"],
        correctAnswer: 0,
      },
      {
        question: "What Does The 'map()' Function Do In JavaScript?",
        options:["Sorts an array", "Filters out items", "Creates a new array", "Modifies the orignal array"],
        correctAnswer: 2,
      },
      {
        question: "What Is An IDE?",
        options: ["An Integrated Development Environment", "A Function For Code Execution", "An Interpreter", "An Input Method For Writing Code"],
        correctAnswer: 0,
      },
      {
        question: "Which Of The Following Is A Feature Of Object-oriented Programming?",
        options: ["Encapsulation", "Modularity", "Recursion", "Memory Management"],
        correctAnswer: 0,
      },
      {
        question: "What Does SQL Stand For?",
        options: ["Simple Question Language", "Systematic Query Language", "Standard Question Language", "Structured Query Language"],
        correctAnswer: 3,
      },
      {
        question: "Which Of These Is An Example Of A Non-Realtional Database?",
        options: ["MongoDB","MySQL","PostgreSQL", "Oracle"],
        correctAnswer: 0,
      },
      {
        question: "How Do You Write Comment In Css?",
        options: ["// This is a comment", "/* This is a comment*/", "# This is a comment", "<!-- This is a comment -->"],
        correctAnswer: 1,
      },
      {
        question: "Which Of The Following Algorithms Is Used To Sort An Array By Comparing Elements?",
        options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Merge Sort"],
        correctAnswer: 0,
      },
      {
        question: "What Does The 'finally' Block In Java Do?",
        options: ["Handles All Exceptions", "Attempts To Handle Runtime Exceptions", "Executes Code After Try-Catch ", "Defines Execution Start Point"],
        correctAnswer: 2,
      },
      {
        question: "Which Data Structure Is Best For Searching Elements Quickly?",
        options: ["Binary Search Tree ", "Array", "Linked List", "Queue"],
        correctAnswer: 0,
      },
      {
        question: "Which Is The Correct Syntax For A JavaScript If Statement?",
        options: ["if (condition) {}", "if condition {}", "if {} else", "if {condition}"],
        correctAnswer: 0,
      },
    ],
  },
  {
    category: "geography",
    questions: [
      {
        question: "Which Is The Longest River In The World?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: 1,
      },
      {
        question: "Which Country Is Known As The Land OF The Rising Sun?",
        options: ["China", "South Korea", "Japan", "Thailand"],
        correctAnswer: 2,
      },
      {
        question: "Which Is The Largest Ocean In The World?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3,
      },
      {
        question: "Which Country Has The Largest Population In The World?",
        options: ["India", "China", "United States", "Indonesia"],
        correctAnswer: 1,
      },
      {
        question: "Which Country Is Known For The Great Barrier Reef?",
        options: ["Australia", "United States", "South Africa ", "New Zealand"],
        correctAnswer: 0,
      },
      {
        question: "Which Is The Smallest Country In The World?",
        options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
        correctAnswer: 2,
      },
      {
        question: "Which Is The Tallest Mountain In The World?",
        options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
        correctAnswer: 2,
      },
      {
        question: "What Is The Capital Of Canada?",
        options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
        correctAnswer: 0,
      },
      {
        question: "Which Desert Is The largest Hot Desert In The World?",
        options: ["Gobi Desert", "Atacama Desert", "Sahara Desert", "Karakum Desert"],
        correctAnswer: 2,
      },
      {
        question: "Which Country Is Known As The Land Of The Midnight Sun?",
        options: ["Sweden", "Finland", "Norway", "Denmark"],
        correctAnswer: 2,
      },
      {
        question: "What Is The Longest Mountain Range In The World?",
        options: ["Himalayas", "Rocky Mountains", "Andes", "Apls"],
        correctAnswer: 2,
      },
      {
        question: "Which River Flows Through Egypt?",
        options: ["Amazon River", "Yangtze River", "Nile River", "Ganges RIver"],
        correctAnswer: 2,
      },
      {
        question: "Which Is The Largest ISland In The World?",
        options: ["GreenLand", "NEw Guinea", "Borneo", "Madagascar"],
        correctAnswer: 0,
      },
      {
        question: "What Is The Capital Of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Hong Kong"],
        correctAnswer: 2,
      },
      {
        question: "Which Country Has The Most Time Zones?",
        options: ["United States", "Russia", "Canada", "Australia"],
        correctAnswer: 1,
      },
      {
        question: "Which Country Is Known For The Eiffel Tower?",
        options: ["Germany", "Italy", "Spain", "France"],
        correctAnswer: 3,
      },
      {
        question: "Which Is The Most Populous city In The World?",
        options: ["Tokyo", "Shanghai", "New York City", "Delhi"],
        correctAnswer: 0,
      },
      {
        question: "Which Mountain Range Is Located In South America?",
        options: ["Himalayas", "Rocky Mountains", "Appalachian Mountains", "Andes"],
        correctAnswer: 3,
      },
      {
        question: "Which Continent Is Known As The 'Dark Continent'?",
        options: ["Asia", "Africa", "South America", "Europe"],
        correctAnswer: 1,
      },
      {
        question: "What Is The Capital Of Brazil?",
        options: ["Buenos Aires", "Rio de Janerio", "Brasilia", "Sao Paulo"],
        correctAnswer: 2,
      },
      {
        question: "What Is The Official Language  Of Brazil?",
        options: ["Spanish", "English", "Portuguese", "French"],
        correctAnswer: 2,
      },
      {
        question: "Which Country Has Most Volcanoes?",
        options: ["Japan", "Indonesia", "United States", "Italy"],
        correctAnswer: 1,
      },
      {
        question: "Which City Is Known As The Big Apple?",
        options: ["Los Angeles", "New York City", "Chicago", "San Francisco"],
        correctAnswer: 1,
      },
      {
        question: "Which Ocean Is Located TO The East Of Africa?",
        options: ["Indian Ocean", "Pacific Ocean", "Southern Ocean", "Atlantic Ocean"],
        correctAnswer: 3,
      },
      {
        question: "Which Is The Second Largest Continent By Area?",
        options: ["Asia", "Africa", "North America", "Europe"],
        correctAnswer: 1,
      },
      
    ],
  },
  {
    category: "mathematics",
    questions: [
      {
        question: "What Is The Square Root Of 144?",
        options: ["10", "11", "12","13"],
        correctAnswer: 2,
      },
      {
        question: "What Is 15 x 13?",
        options: ["180", "185", "195", "200"],
        correctAnswer: 2,
      },
      {
         question: "What Is The value Of 8³?",
         options: ["512", "216", "256", "128"],
         correctAnswer: 0,
      },
      {
        question: "What Is 48 ÷ 6?",
        options: ["7","8","9","10"],
        correctAnswer: 1,
      },
      {
        question: "What Is The Value Of 3 + 5 x 4?",
        options: ["20","22","24","23"],
        correctAnswer: 3,
      },
      {
        question: "What Is The Sum Of The Angles In Triangle?",
        options: ["180°","360°","90°","270°"],
        correctAnswer: 0,
      },
      {
        question: "What Is The Perimeter Of A Square With A Side Length Of 4 cm?",
        options: ["12 cm","16 cm","20 cm","24 cm"],
        correctAnswer: 1,
      },
      {
        question: "What Is 11²?",
        options: ["121","131","108","120"],
        correctAnswer: 3,
      },
      {
        question: "What Is 9 x 12?",
        options: ["2","3","4","5"],
        correctAnswer: 2,
      },
      {
        question: "What Is The Value Of 16 ÷ 4?",
        options: ["2","3","4","5"],
        correctAnswer: 2,
      },
      {
        question: "What Is 25% Of 200?",
        options: ["30","40","50","60"],
        correctAnswer: 2,
      },
      {
        question: "What Is The Area Of A Rectangle With Length 5 cm And Width 8 cm?",
        options: ["40 cm²","50 cm²","55 cm²","60 cm²"],
        correctAnswer: 0,
      },
      {
        question: "What Is The Value Of 10 ÷ 2 + 3?",
        options: ["8","7","9","6"],
        correctAnswer: 0,
      },
      {
        question: "What Is 3 x 7 + 2?",
        options: ["20","21","22","23"],
        correctAnswer: 1,
      },
      {
        question: "What Is The Greatest Common Divisor (GCD) Of 24 And 36?",
        options: ["4","6","8","12"],
        correctAnswer: 3,
      },
      {
        question: "What Is The Least Common Multiple (LCM) Of 6 And 8?",
        options: ["24","32","48","56"],
        correctAnswer: 0,
      },
      {
        question: "What Is The Value Of 2³ x 3?",
        options: ["12","15","18","24"],
        correctAnswer: 0,
      },
      {
        question: "What Is The Value Of 10 x (5 + 3)?",
        options: ["80","70","60","50"],
        correctAnswer: 1,
      },
      {
        question: "What Is The Value Of 14 x 14?",
        options: ["186","196","206","216"],
        correctAnswer: 1,
      },
      {
        question: "What Is The Sum Of The First 10 Positive Integer?",
        options: ["50","55","60","65"],
        correctAnswer: 1,
      },
      {
        question: "What Is 12 x 15?",
        options: ["150","160","170","180"],
        correctAnswer: 3,
      },
      {
        question: "What Is The Area Of A Circle With A Radius Of 3 cm? (use π = 3.14)",
        options: ["28.26 cm²","31.42 cm²","36.14 cm²","39.14 cm²"],
        correctAnswer: 0,
      },
      {
        question: "What Is The Value Of (8 + 2) x 3?",
        options: ["30","32","34","28"],
        correctAnswer: 3,
      },
      {
        question: "What Is The Value Of 50% of 80?",
        options: ["30","35","40","45"],
        correctAnswer: 2,
      },
      {
        question: "What Is The Value Of 25 ÷ 5 x 3?",
        options: ["12","15","18","20"],
        correctAnswer: 1,
      },
    ],
  },
  {
    category: "entertainment",
    questions: [
      {
        question: "Who Won The Academy Award For Best Actor In 2022?",
        options: ["Leonardo Dicaprio", "Will Smith","Joaquin Phonix","Matthew McConaughey"],
        correctAnswer:1,
      },
      {
        question: "Which Movie Won The Academy Award For Best Picture In 2021?",
        options: ["Parasite","1917","The Sahpe Of Water","Nomadland"],
        correctAnswer: 3,
      },
      {
        question: "Who Played The Character Of Jack Dowson In The Movie Titanic?",
        options: ["Leonardo DiCaprio","Brad Pitt","Johonny Depp", "Tom Hanks"],
        correctAnswer: 0,
      },
      {
        question: "Which TV Show Featured The Characters Daenerys Targaryen and Jon Snow?",
        options: ["Breaking Bad", "Game Of Thrones ", "The Witcher", "Vikings"],
        correctAnswer: 1,
      },
      {
        question: "Who Is Known As The 'King Of POP'?",
        options: ["Michael Jackson", "Prince", "Whitney Houston", "Elvis Preslry"],
        correctAnswer: 0,
      },
      {
        question: "Which Superhero Is Known For Saying, 'I Am Iron Man'?",
        options: ["Black Panther", "Captian America","Thor","Iron Man "],
        correctAnswer: 3,
      },
      {
        question: "Which Movie Franchise Includes A Character Named Luke Skywalker?",
        options: ["Guardians Of The Galaxy","Star Wars","The Matrix","Satr Trek"],
        correctAnswer: 1,
      },
      {
        question: "Who Played The Character To Hermione Granger In The Harry Potter Film Series?",
        options: ["Emma Watson", "Anne Hathaway", "Maggie Smith", "Natalie Portman"],
        correctAnswer: 0, 
      },
      {
        question: "Who Directed The  Movie 'Inception'?",
        options: ["James Cameron", "Steven Spielbery","Christopher Nolan", "Martin Scorsese"],
        correctAnswer: 2,
      },
      {
        question: "Which Artist Released The Album 'Lover' In 2019?",
        options: ["Bellish Eilish","Taylor Swift","Ed Sheeran","Ariana Grande"],
        correctAnswer: 1,
      },
      {
        question: "What Was The First Vedio Game To Feature Mario?",
        options: ["Mario Kart", "Super Mario","Donkey Kong","The Legend Of Zelda"],
        correctAnswer: 2,
      },
      {
        question: "Which Movie Feature The Famous Line, 'Here's Looking At You, Kid'?",
        options: ["Casablanca","Citizen Kane", "The Godfather","Gone With The wind"],
        correctAnswer: 0,
      },
      {
        question: "Which Country Won The FIFA World Cup In 2018?",
        options: ["France", "Germany","Argentina","Brazil"],
        correctAnswer: 0, 
      },
      {
        question: "Who Created The Comic Book Character Spide-Man?",
        options: ["Jack Kirby","Stan Lee","Steve Ditko","John Romita"],
        correctAnswer: 1,
      },
      {
        question: "In Which Movie Did Health Ledger Portray The Joker?",
        options: ["The Dark Knight", "Batman Begins", "The Dark Knight Rises", "Joker"],
        correctAnswer: 0,
      },
      {
        question: "Which Band Is Known For The Hit Song 'Bohemian Rhapsody'?",
        options: ["The Rolling Stones", "Led Zeppelin", "Queen", "The Beatles"],
        correctAnswer: 2,
      },
      {
        question: "Which Actress Starred As Katniss Everdeen In 'The Hunger Games'?",
        options: ["Kristen Stewart", "Shailene Woodley", "Jennifer Lawrence", "Emma Stone"],
        correctAnswer: 2,
      },
      {
        question: "Who Played The Role Of The Joker In The 2019 Movie 'Joker'?",
        options: ["Heath Ledger", "Johnny Depp", "Joaquin Phoenix", "Jared Leto"],
        correctAnswer: 2,
      },
      {
        question: "Which Disney Animated Film Feature The Song 'A Whole New World'",
        options: ["Cinderella","Aladdin","Beauty And The Beast","The Little Mermaid"],
        correctAnswer: 1,
      },
      {
        question: "Which TV Series Features The Cahracter Of Walter White And Jesse Pinkman?",
        options: ["Narcos", "Better Call Saul", "The Sopranos","Breaking Bad"],
        correctAnswer: 3,
      },
      {
        question: "Who Sang The Hit Song 'Shape Of You'?",
        options: ["Justin Bieber","Ariana Grande","Sam Smith","Ed Sheeran"],
        correctAnswer: 3,
      },
      {
        question: "Which Film Won The Academy Award For Best Picture In 2020?",
        options: ["The Irishman","Once Upon A Time In Hollywood", "Parasite", "1917"],
        correctAnswer: 2,
      },
      {
        question: "What Year Did Movie 'The Martix' Released?",
        options: ["1997","1998","2000","1999"],
        correctAnswer: 3,
      },
      {
        question: "Which Actor Played Tony Stark/Iron Man In The Marvel Cinematic Universe?",
        options: ["Mark Ruffalo","Chris Evans","Robert Downey Jr.", "Chris Hemsworth"],
        correctAnswer: 2,
      },
      {
        question: "Which Singer Is Known As The 'Queen Of POP'?",
        options: ["Mariah Carey", "Lady Gaga","Whitney Houston","Madonna"],
        correctAnswer: 3,
      },
    ],
  },
];
