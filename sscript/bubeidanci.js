let body = $response.body


/*
body=JSON.parse(body)
body["data_body"]["privileges"]["collins"]["granted"]=1
body["data_body"]["privileges"]["collins"]["collins_user_type"]=1
body["data_body"]["privileges"]["wordroot"]["granted"]=1
body["data_body"]["privileges"]["wordroot"]["user_type"]=1
body["data_body"]["privileges"]["collins"]["expire_date"]=1702449935
body["data_body"]["privileges"]["wordroot"]["expire_date"]=1702449935
body=JSON.stringify(body)
*/

body=body.replace(/\"granted\":\d/,"granted\"=1")
body=body.replace(/\"expire_date\":\d+/,"expire_date\"=1702449935")
body=body.replace(/\"collins_user_type\":\d/,"collins_user_type\"=1")
body=body.replace(/\"user_type\":\d/,"user_type\"=1")
$done({body})
