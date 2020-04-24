//elements 
var userFirst = document.querySelector("#firstPlace");
var userSecond = document.querySelector("#secondPlace");
var userThird = document.querySelector("#thirdPlace");
// var userFirstScore = document.querySelector("#firstPlaceScore");
// var userSecondScore = document.querySelector("#secondPlaceScore");
// var userThirdScore = document.querySelector("#thirdPlaceScore");

//data stored

// var lastUser1 = JSON.parse(localStorage.getItem("lastUser1"));
// var lastUser2 = JSON.parse(localStorage.getItem("userScore2"));
// var lastUser3 = JSON.parse(localStorage.getItem("userScore3"));
// var userTemp = JSON.parse(localStorage.getItem("userScoreTemp"));

//test



// var lastUser1 = JSON.parse(localStorage.getItem("lastUser1"));
// var lastUser2 = JSON.parse(localStorage.getItem("lastUser2"));
// var lastUser3 = JSON.parse(localStorage.getItem("lastUser3"));
var userTemp = JSON.parse(localStorage.getItem("userScoreTemp"));
var userTempScore = JSON.parse(localStorage.getItem("userScoreTempScore"));
var userTempInitials = JSON.parse(localStorage.getItem("userScoreTempInitials"));

if (!localStorage.getItem("lastUser1")) {
    localStorage.setItem("lastUser1", [
        userTempScore,
        userTempInitials,
    ]);

    userFirst.textContent = JSON.parse(localStorage.getItem("lastUser1"));
} else if (!localStorage.getItem("lastUser2")) {
    localStorage.setItem("lastUser2", [
        userTempScore,
        userTempInitials,
    ]);
} else if (!localStorage.getItem("lastUser3")) {
    localStorage.setItem("lastUser3", [
        userTempScore,
        userTempInitials,
    ]);
} else {
    localStorage.setItem("lastUser1", JSON.stringify({
        score1:
        {
            score: 1,
            userName: "a",
        },
    }));
    localStorage.setItem("lastUser2", JSON.stringify({
        score1:
        {
            score: 1,
            userName: "b",
        },
    }));
    localStorage.setItem("lastUser3", JSON.stringify({
        score1:
        {
            score: 1,
            userName: "c",
        },
    }));


    // var userTempScore = userTemp["score1"].score;
    // var userTempName = userTemp["score1"].userName;

    var finalScoresArray = [
        [
            lastUser1["score1"].score,
            lastUser1["score1"].userName,

        ],
        [
            lastUser2["score1"].score,
            lastUser2["score1"].userName,
        ],
        [
            lastUser3["score1"].score,
            lastUser3["score1"].userName,

        ],
        [
            userTempScore,
            userTempInitials,
        ]
    ];

    //sort by desc value
    finalScoresArray.sort().reverse();
    console.log("sorted " + finalScoresArray);
    localStorage.setItem("lastUser1", JSON.stringify(finalScoresArray[0][0] + " - " + finalScoresArray[0][1]));
    localStorage.setItem("lastUser2", JSON.stringify(finalScoresArray[1][0] + " - " + finalScoresArray[1][1]));
    localStorage.setItem("lastUser3", JSON.stringify(finalScoresArray[2][0] + " - " + finalScoresArray[2][1]));
    // ["score1"].userName)) + " - " + JSON.parse(localStorage.getItem("lastUser1"["score1"].score))

    // localStorage.setItem("lastUser2", JSON.stringify(finalScoresArray[1]));
    // localStorage.setItem("lastUser3", JSON.stringify(finalScoresArray[2]));
    // finalScoresArray[0][1];
    // finalScoresArray[1][0];
    // finalScoresArray[1][1];
    // finalScoresArray[2][0];
    // finalScoresArray[2][1];



    userSecond.textContent = JSON.parse(localStorage.getItem("lastUser2"));
    userThird.textContent = JSON.parse(localStorage.getItem("lastUser3"));
}


// userFirst.textContent = JSON.parse(localStorage.getItem("lastUser1"["score1"].userName)) + " - " + JSON.parse(localStorage.getItem("lastUser1"["score1"].score));
// // userFirstScore.textContent = JSON.parse(localStorage.getItem("lastUser1"["score1"].score));
// userSecond.textContent = JSON.parse(localStorage.getItem("lastUser2")) + " - " + JSON.parse(localStorage.getItem("lastUser2"["score2"].score));
// // userSecondScore.textContent = JSON.parse(localStorage.getItem("lastUser2"["score2"].score));
// userThird.textContent = JSON.parse(localStorage.getItem("lastUser3")) + " - " + JSON.parse(localStorage.getItem("lastUser3"["score3"].score));
// userThirdScore.textContent = JSON.parse(localStorage.getItem("lastUser3"["score3"].score));


// scores.push(
//     [
//     {
//     score: userTemp["score1"].score,
//     userName: userTemp["score1"].userName,
//     }
// ]);

// console.dir(scores);
// if (parseInt(userTemp.score1) > parseInt(lastUser1.score1)) {
//     localStorage.setItem("userScore1", JSON.stringify(("userScore1")));
// } else {
//     alert("not higher than high score");
// }
// console.dir(lastUser);

//setting elements to data
// userFirst.textContent = userTemp.score1;
// userSecond.textContent = userTemp.score1;
// userThird.textContent = userTemp.score1;
// console.log(lastUser)