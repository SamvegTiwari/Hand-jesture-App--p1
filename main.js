Webcam.set({
    width:350,
    height:300,
    Image_format:"jpg",
    Png_quality:500,
}
);

camera=document.getElementById("camera_preview");

Webcam.attach("#camera_preview");

function Takesnapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img src='"+data_uri+"'>";
})
}