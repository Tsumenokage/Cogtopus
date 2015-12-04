<?php
    $host_name  = "db604018209.db.1and1.com";
    $database   = "db604018209";
    $user_name  = "dbo604018209";
    $password   = "Cognitiqu3";

    $connect = mysqli_connect($host_name, $user_name, $password, $database);
    if (mysqli_connect_errno())
    {
    echo "La connexion au serveur MySQL n'a pas abouti : " . mysqli_connect_error();
    }

    $query = "SELECT * FROM Marqueur INNER JOIN Etat WHERE Etat.NomEtat = 'EnCours' ";

    $result = mysqli_query($connect,$query);



    while ($row = mysqli_fetch_assoc($result)) 
    {
    	echo json_encode($row);
	}

    
?>