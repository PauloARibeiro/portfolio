<?php 
  if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $_POST  = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);

    $to ="paulo@pauloaribeiro.com";
    $subject = 'Portfolio message from ' . $name;
    $headers = 'From: ' . $email;

    if(mail($to, $subject, $message, $headers)){
      echo "true";
    }else{
      echo "false";
    }
  }else{
    echo "submit not set";
  }
?>