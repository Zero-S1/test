let body1 = $response.body


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
//body=body.string
body1=body1.replace(/\"granted\":\d/g,"\"granted\":1")
body1=body1.replace(/\"expire_date\":\d+/g,"\"expire_date\":1702449935")
body1=body1.replace(/\"collins_user_type\":\d/g,"\"collins_user_type\":1")
body1=body1.replace(/\"user_type\":\d/g,"\"user_type\":1")
//body=JSON.parse(body)
//body=JSON.stringify(body)

//$done({body})


var title = "supaL与您相伴";
var subtitle = "天气状况："
var mation = body1
$notification.post(title, subtitle, mation);
$done();
