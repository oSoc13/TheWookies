<?php 


include_once '../githubfunctions.php';

$reponame = 'TheWookies';
$issues = get_issues($client, $username, $reponame, '1');

print_r($issues);