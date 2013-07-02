<?php 


include_once '../githubfunctions.php';

echo get_issues($client, $username, $reponame, 1);