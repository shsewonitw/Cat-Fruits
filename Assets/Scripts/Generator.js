#pragma strict

var intervalMin : float = 0.5;
var intervalMax : float = 1.5;


var apple : GameObject;
var kiwi : GameObject;
var strawberry : GameObject;
var banana : GameObject;


function Start () {
    while(true)
    {
        yield WaitForSeconds(Random.Range(intervalMin, intervalMax));

        var num : float = Random.Range(0.0, 4.0);
        num = parseInt(num);


        var x : float = Random.Range(-2.3, 2.3);
        var y : float = Random.Range(-2.3, 2.3);
        var position : Vector3 = Vector3(x, 0.0, y);
        position.y = 6;
        if (num == 1)
        {
            Instantiate(apple, position, Quaternion.identity);
        }
        else if(num == 2)
        {
            Instantiate(kiwi, position, Quaternion.identity);
        }
        else if(num == 3)
        {
            Instantiate(strawberry, position, Quaternion.identity);
        }
        else
        {
            Instantiate(banana, position, Quaternion.identity);
        }
        
        
    }
}

function Update () {
}
