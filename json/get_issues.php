<?php

//include_once("../index.php");

$username = "oSoc13";
$reponame = "TheWookies";
//$issues = $client->api('issue')->Milestones()->all($username, $reponame, array('state' => 'open'));

$issues = '[{"url":"https:\/\/api.github.com\/repos\/oSoc13\/TheWookies\/milestones\/1","labels_url":"https:\/\/api.github.com\/repos\/oSoc13\/TheWookies\/milestones\/1\/labels","id":368768,"number":1,"title":"First concept","description":"","creator":{"login":"ahluntang","id":817381,"avatar_url":"https:\/\/secure.gravatar.com\/avatar\/2b78131bfb4f6d21701e295f41de3489?d=https:\/\/a248.e.akamai.net\/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png","gravatar_id":"2b78131bfb4f6d21701e295f41de3489","url":"https:\/\/api.github.com\/users\/ahluntang","html_url":"https:\/\/github.com\/ahluntang","followers_url":"https:\/\/api.github.com\/users\/ahluntang\/followers","following_url":"https:\/\/api.github.com\/users\/ahluntang\/following{\/other_user}","gists_url":"https:\/\/api.github.com\/users\/ahluntang\/gists{\/gist_id}","starred_url":"https:\/\/api.github.com\/users\/ahluntang\/starred{\/owner}{\/repo}","subscriptions_url":"https:\/\/api.github.com\/users\/ahluntang\/subscriptions","organizations_url":"https:\/\/api.github.com\/users\/ahluntang\/orgs","repos_url":"https:\/\/api.github.com\/users\/ahluntang\/repos","events_url":"https:\/\/api.github.com\/users\/ahluntang\/events{\/privacy}","received_events_url":"https:\/\/api.github.com\/users\/ahluntang\/received_events","type":"User"},"open_issues":1,"closed_issues":0,"state":"open","created_at":"2013-07-02T12:12:13Z","updated_at":"2013-07-02T12:12:48Z","due_on":"2013-07-02T07:00:00Z"}]';

echo "<pre>";
print_r(json_decode($issues));
echo "</pre>";

