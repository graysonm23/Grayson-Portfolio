<?php

$from = "Demo Contact Form <demo@domain.com>";
$sendTo = "Grayson McMurray <Grayson.mcmurry23@gmail.com>";
$subject = "New message from contact form";
$fields = array('name' => 'Name', 'surname' => 'Surname', 'phone' => 'Phone', 'email' => 'Email', 'message' => 'Message',);
//$okMessage = "Contact Form Successfully Submitted!";
//$errorMessage = "There were errors, when trying to send email.";


//error_reporting(E_ALL & ~E_NOTICE);

$emailText = "";

//check to see if there are values from the form
if(count($_POST) == 0){

//if there are no values, redirect them back to the form

header('Location: /grayson/contact.html?e=0');

} else {

//grab all the values from the form and dump them into the body of the email
   foreach ($_POST as $key => $value){
           if(isset($fields[$key])){
               $emailText .= $fields[$key]." : ".$value."\n";
           }
       }

       $headers = array('Content-Type: text/plain; charset="UTF-8";',
           'From: ' . $from,
           'Reply-To: ' . $from,
           'Return-Path: ' . $from
       );

   //send the email
   mail($sendTo, $subject, $emailText, implode('\n', $headers));
    //send us to back to the contact form with success
    header('Location: /grayson/contact.html?e=1');
}