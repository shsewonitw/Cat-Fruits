#pragma strict


var score : int = 0;
var labelStyle : GUIStyle;
var labelStyle1 : GUIStyle;
var live ;
var deadSound : AudioClip;
function ScorePlus()
{
    live = CharacterStatue.instance.live;
    if(live == true)
    {
        score += 1;
    }
    else
    {
        

        yield WaitForSeconds(5.0);
        Application.LoadLevel("End");
    }
}


function OnGUI()
{
    var rect : Rect = Rect(0,0,Screen.width, Screen.height);
    GUI.Label(rect, "SCORE:" +score.ToString(), labelStyle);


}
function PlayDeadSound()
{
    GetComponent.<AudioSource>().PlayOneShot(deadSound);
}

function Start () {

}

function Update () {

}
