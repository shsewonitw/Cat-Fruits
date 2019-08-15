#pragma strict

static var instance : CharacterStatue;
var damageParticlePrefab : GameObject;
public var live = true;


function ApplyDamage()
{
    GameObject.FindWithTag("Score").SendMessage("PlayDeadSound");
    Instantiate(damageParticlePrefab, transform.position, transform.rotation);
    live = false;
    this.gameObject.SetActive(false);
    

}




function Awake(){
    CharacterStatue.instance = this;
}

        function Start () {
	
        }

        function Update () {
	
        }
