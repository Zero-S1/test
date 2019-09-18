let body = $response.body

body=JSON.parse(body)



body["data_body"]["privileges"]["collins"]["granted"]=1
body["data_body"]["privileges"]["collins"]["collins_user_type"]=1


body["data_body"]["privileges"]["wordroot"]["granted"]=1
body["data_body"]["privileges"]["wordroot"]["user_type"]=1




body["data_body"]["privileges"]["collins"]["expire_date"]=1702449935
body["data_body"]["privileges"]["wordroot"]["expire_date"]=1702449935





body=JSON.stringify(body)
$done({body})
