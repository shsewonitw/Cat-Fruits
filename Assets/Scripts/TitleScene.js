#pragma strict

var labelStyle1 : GUIStyle;
var labelStyle2 : GUIStyle;
var labelStyle3 : GUIStyle;
function Start () {
	
}

function Update () {
    if(Input.GetKeyDown(KeyCode.Z))
    {
        Application.LoadLevel("Scene1.3");
    }
}

function OnGUI()
{
    var sw : int = Screen.width;
    var sh : int = Screen.height;
    GUI.Label(Rect(0,50, sw, 50),"Cat & Fruit",labelStyle1);
    GUI.Label(Rect(0,sh/2, sw, sh/3),"Move : WASD / Jump : Space",labelStyle2);
    GUI.Label(Rect(0,sh/2, sw, sh/3),"Avoid the fruits",labelStyle3);
    GUI.Label(Rect(0,sh/2, sw, sh/9),"Press 'Z' Key to start",labelStyle3);
}