#pragma strict

var walkSpeed : float = 3.0;
var gravity : float = 20.0;
var jumpSpeed : float = 8.0;
// Speed multiplier when running
var runSpeed : float = 2.0;
var velocity : Vector3;
var jumpSound : AudioClip;

function Start () {
    GetComponent.<Animation>()["Walk"].speed = 2.0;
}

function Update () {
    var controller : CharacterController = GetComponent(CharacterController);
    if(controller.isGrounded)
    {
        velocity = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
        velocity *= walkSpeed;

        if(Input.GetButtonDown("Jump"))
        {
            GetComponent.<AudioSource>().PlayOneShot(jumpSound);
            velocity.y = jumpSpeed;
        }
        else if(velocity.magnitude>0.5)
        {
            if(Input.GetKey(KeyCode.LeftShift))
            {
                GetComponent.<Animation>().CrossFade("Run",0.1);
                transform.LookAt(transform.position + velocity);
                velocity *= runSpeed;
            }
            else
            {
                GetComponent.<Animation>().CrossFade("Walk",0.1);
                transform.LookAt(transform.position + velocity);
            }

        }
        else if(Input.GetKey(KeyCode.LeftShift))
        {
            GetComponent.<Animation>().CrossFade("Run",0.1);
            velocity *= runSpeed;
        }
        else
        {
            GetComponent.<Animation>().CrossFade("Idle",0.1);
        }
    }
    velocity.y -= gravity * Time.deltaTime;
    controller.Move(velocity * Time.deltaTime);
}




