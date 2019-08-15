#pragma strict

var labelStyle1 : GUIStyle;
var labelStyle2 : GUIStyle;


function Start () {

}

function Update () {
    if(Input.GetKeyDown(KeyCode.Z))
    {
        Application.LoadLevel("title");
    }
}

function OnGUI()
{
    var sw : int = Screen.width;
    var sh : int = Screen.height;
    GUI.Label(Rect(0,sh/2, sw, sh/3),"Thank you for play",labelStyle1);
    GUI.Label(Rect(0,sh/2, sw, sh/3),"Press 'Z' Key to go back main",labelStyle2);

}