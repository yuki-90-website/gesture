var prediction_1 = "";

Webcam.set ({
    height: 350,
    width: 250,
    image_format: 'png',
    png_quality: 90
});

var camera = document.getElementById("camera");
Webcam.attach ('#camera');

function snap() {
    Webcam.snap (function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_img" src="' + data_uri + '">';
    });
}

var classifier = imageClassifier('https://teachablemachine.withgoogle.com/models/jWkdev1PB/model.json', modelLoaded);