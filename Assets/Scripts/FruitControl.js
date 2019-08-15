#pragma strict
var halfApple : GameObject;
var halfKiwi : GameObject;
var halfStrawberry : GameObject;
var halfBanana : GameObject;
var tr : Transform;

    function OnCollisionEnter(other: Collision)
        {
            if(other.gameObject.tag == "Player")
            {
                other.gameObject.SendMessage("ApplyDamage");
            }
            else{
                GameObject.FindWithTag("Score").SendMessage("ScorePlus");
            }
            tr = GetComponent.<Transform>();
        
        
            this.gameObject.SetActive(false);
        
            if(this.gameObject.tag=="APPLE")
            {
                Instantiate(halfApple,tr.position,Quaternion.identity);
                Destroy(gameObject);
            }

            else if(this.gameObject.tag=="STRAWBERRY")
            {
                Instantiate(halfStrawberry,tr.position,Quaternion.identity);
                Destroy(gameObject);
            }

            else if(this.gameObject.tag=="KIWI")
            {
                Instantiate(halfKiwi,tr.position,Quaternion.identity);
                Destroy(gameObject);
            }
            else
            {
                Instantiate(halfBanana, tr.position, Quaternion.identity);
                Destroy(gameObject);
            }
        }
    

    function Start () {
	
    }

    function Update () {
	
    }
