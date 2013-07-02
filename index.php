<?php



require_once 'vendor/autoload.php';
require_once 'config.php';

$client = new Github\Client();
$client->authenticate($token, $password, Github\Client::AUTH_URL_CLIENT_ID);


get_repos($client,'oSoc13');


function get_repos($client, $username){
    try {  
        $repositories = $client->api('user')->repositories($username);
        foreach ($repositories as $repo) {
            $reponame = $repo['name'];
            get_issues($client,$username, $reponame);
        }
    } catch (Exception $e) {  
        # do something with e
    } 
}


function get_issues($client, $username, $reponame){

    try { 

        $issues = $client->api('issue')->Milestones()->all($username, $reponame, array('state' => 'open'));

    } catch (Exception $e) {  
        # do something with e
    } 
 
}