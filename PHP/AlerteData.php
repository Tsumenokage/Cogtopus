<?php
    $host_name  = "db603989185.db.1and1.com";
    $database   = "db603989185";
    $user_name  = "dbo603989185";
    $password   = "Cognitiqu3";

    $connect = mysqli_connect($host_name, $user_name, $password, $database);
    if (mysqli_connect_errno())
    {
    echo "La connexion au serveur MySQL n'a pas abouti : " . mysqli_connect_error();

    $query = "SELECT * FROM Alerte INNER JOIN Marqueur WHERE Etat.NomEtat = 'EnCours' ";

    $result = mysqli_query($connect,$query);

    echo json_encode($result);

    }
?>

