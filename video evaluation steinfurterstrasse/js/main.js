

var vid = document.getElementById("myVideo");


function getCurCarTime() {
    trafficList.cars.push({ carTime: vid.currentTime });
};

function getCurBicycleTime() {
    trafficList.bicycles.push({ bicycleTime: vid.currentTime });
};

function getCurTruckTime() {
    trafficList.trucks.push({ truckTime: vid.currentTime })
};
function getCurVehiclesTime() {
    trafficList.vehicles.push({ vehicleTime: vid.currentTime })
};

var playbackRate = vid.playbackRate;


function setPlaySpeedDown() {
    playbackRate = playbackRate - 0.5;
    vid.playbackRate = playbackRate;
    currentSpeed.speedRate = playbackRate + "x";
}

function setPlaySpeedUp() {
    playbackRate = playbackRate + 0.5;
    vid.playbackRate = playbackRate;
    currentSpeed.speedRate = playbackRate + "x";
}

var currentSpeed = new Vue({
    el: '#currentSpeed',
    data: {
        speedRate: playbackRate + "x",
    }
});



//data
var trafficList = new Vue({
    el: '#trafficList',
    data: {
        cars: [],
        bicycles: [],
        trucks: [],
        vehicles: [],
    }
});

//Keyboard Shortcut
Mousetrap.bind('1', function getCurCarTime() {
    trafficList.cars.push({ carTime: vid.currentTime });
});
//Keyboard Shortcut
Mousetrap.bind('2', function getCurBicycleTime() {
    trafficList.bicycles.push({ bicycleTime: vid.currentTime });
});
//Keyboard Shortcut
Mousetrap.bind('3', function getCurTruckTime() {
    trafficList.trucks.push({ truckTime: vid.currentTime });
});
//Keyboard Shortcut
Mousetrap.bind('4', function getCurVehiclesTime() {
    trafficList.vehicles.push({ vehicleTime: vid.currentTime });
});


//Keyboard Shortcut
Mousetrap.bind('+', function setPlaySpeedUp() {
    playbackRate = playbackRate + 0.5;
    vid.playbackRate = playbackRate;
    currentSpeed.speedRate = playbackRate + "x";
});


//Keyboard Shortcut
Mousetrap.bind('-', function setPlaySpeedDown() {
    playbackRate = playbackRate - 0.5;
    vid.playbackRate = playbackRate;
    currentSpeed.speedRate = playbackRate + "x";
});

Mousetrap.bind('#', function jumpBack() {
    vid.currentTime = vid.currentTime - 5;
});

$(document).ready(function(){
    $("#myVideo").on(
        "timeupdate",
        function(event){
            onTrackedVideoFrame(this.currentTime, this.duration);
        });
});

//show current && duration
function onTrackedVideoFrame(currentTime, duration){
    $("#current").text(currentTime); //Change #current to currentTime
    $("#duration").text(duration)
}

//can't close window be mistake
window.onbeforeunload = function() {
    return "Bye now!";
};



