<?php



require_once 'vendor/autoload.php';

$client = new Github\Client();
$repositories = $client->api('user')->repositories('oSoc13');

foreach ($repositories as $repo) {
	echo $repo['name'];
}