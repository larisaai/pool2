 let song = document.querySelector(".songs");

    song.addEventListener("click", function() {
        console.log(event.target);
        var target = event.target;
        if (target.id == "song1") {
            console.log("i clicked on song 1");
            let songOne = new Audio("boom.wav");
            songOne.play();
        }
        if (target.id == "song2") {
            console.log("i clicked on song 2");
            let songTwo = new Audio("clap.wav");
            songTwo.play();
        }
        if (target.id == "song3") {
            console.log("i clicked on song 3");
            let songThree = new Audio("kick.wav");
            songThree.play();
        }
        if (target.id == "song4") {
            console.log("i clicked on song 4");
            let songFour = new Audio("hihat.wav");
            songFour.play();
        }
        if (target.id == "song5") {
            console.log("i clicked on song 5");
            let songFive = new Audio("ride.wav");
            songFive.play();
        }
        if (target.id == "song6") {
            console.log("i clicked on song 6");
            let songSix = new Audio("tom.wav");
            songSix.play();}

    });
