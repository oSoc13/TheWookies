<?php

include_once("../index.php");

$username = "oSoc13";
$reponame = "TheWookies";
$issues = $client->api('issue')->Milestones()->all($username, $reponame, array('state' => 'open'));

$a=array();

for ($i=0; $i<sizeof($issues); $i++) {
$x = array(
'name'=>$issues[$i]["title"],
'milestone_nr'=> $issues[$i]["number"],
'project'=> "$reponame",
'deadline'=> $issues[$i]["due_on"],
"open_issues" => $issues[$i]["open_issues"],
"closed_issues" => $issues[$i]["closed_issues"],
);
array_push($a,$x);
}

echo json_encode($a);