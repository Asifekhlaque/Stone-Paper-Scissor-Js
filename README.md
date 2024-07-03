# Stone-Paper-Scissor-Js

# ✊✌️✋ Stone Paper Scissors

live link: https://asifekhlaque.github.io/Stone-Paper-Scissor-Js/

Welcome to the classic game of Stone Paper Scissors! This web-based version allows you to play against the computer. Enjoy the game and see if you can beat the computer!

## 🎮 How to Play

1. **Choose Your Move**: Click on one of the three buttons to choose your move:
   - ✊ Stone
   - ✌️ Paper
   - ✋ Scissors

2. **Computer's Move**: The computer will randomly select its move.

3. **Determine the Winner**: The game will display whether you win, lose, or draw.

4. **Scoreboard**: Keep track of your score and the computer's score displayed at the bottom.

## 🛠️ Technologies Used

- **HTML**
- **CSS**
- **JavaScript**

## 📂 Project Structure

- `index.html`: The main HTML file containing the structure of the game.
- `style.css`: The CSS file for styling the game.
- `script.js`: The JavaScript file containing the game logic.

## 🚀 Getting Started

To run the game locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/stone-paper-scissors.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd stone-paper-scissors
   ```

3. **Open `index.html` in your preferred web browser**:
   ```bash
   open index.html
   ```
   or simply double-click on the `index.html` file.

## 📜 Code Overview

### HTML

The main structure of the game is defined in `index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stone Paper Scissors</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="option">
        <button id="Stone">✊</button>
        <button id="Paper">✌️</button>
        <button id="Scissors">✋</button>
    </div>

    <div class="compOption">
        <p id="compOption"></p>
    </div>
    <div class="output">
        <p id="output"></p>
    </div>

    <div class="point">
        <div class="us">
            <p>User</p>
            <p id="Userpoint">0</p>
        </div>
        <div class="co">
            <p>Comp</p>
            <p id="CompPoint">0</p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

### CSS

Styling is managed in `style.css`:
```css
*{
    margin: 0;
    padding: 0;
}

body{
    background: rgb(209, 103, 205);
    background: linear-gradient(105deg, rgba(209, 103, 205, 1) 3%, rgba(45, 182, 253, 1) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: sans-serif;
}
.option{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    gap: 20px;
}
.option button{
    width: 100px;
    height: 100px;
    padding: 10px;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: rgb(255, 255, 255);
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
    font-size: 40px;
}
.compOption{
    font-size: 50px;
}
.output{
    font-size: 40px;
    margin-top: 10px;
}
.point{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 400px;
    gap: 20px;
    margin-top: 10px;
    font-size: 25px;
}
```

### JavaScript

The game logic is implemented in `script.js`:
```javascript
let options = document.querySelectorAll(".option button");
let compOption = document.querySelector("#compOption");
let output = document.querySelector("#output");

let Userpoint = document.querySelector("#Userpoint");
let CompPoint = document.querySelector("#CompPoint");

function getComputerChoice(){
    let choices=["Stone","Paper","Scissors"]
    return choices[Math.floor(Math.random()*3)]
}

options.forEach((element) => {
    element.addEventListener("click", (e) => {
        const choiceID = e.target.id;
        const getComp = getComputerChoice();
        getWinner(choiceID, getComp);
    });
});

function getWinner(choiceID, getComp){
    if(choiceID == getComp){
        compOption.innerHTML = getComp;
        output.innerHTML = "Draw";
        output.style.color = "black";
    }
    else if((choiceID == "Stone" && getComp == "Scissors") || 
            (choiceID == "Paper" && getComp == "Stone") || 
            (choiceID == "Scissors" && getComp == "Paper")){
        compOption.innerHTML = getComp;
        output.innerHTML = "You win";
        output.style.color = "green";
        Userpoint.innerHTML = parseInt(Userpoint.innerHTML) + 1;
    } else {
        compOption.innerHTML = getComp;
        output.innerHTML = "You lose";
        output.style.color = "red";
        CompPoint.innerHTML = parseInt(CompPoint.innerHTML) + 1;
    }
}
```

## 📝 License

This project is licensed under the MIT License.

---

Enjoy playing! If you have any questions or suggestions, feel free to open an issue or submit a pull request.

👾 Happy Gaming! 👾
