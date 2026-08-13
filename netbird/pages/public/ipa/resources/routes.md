> Release-pinned source for NetBird v0.77.0: [netbirdio/docs@abb8d4607fd4a1260c80bcdad1493e92941e1837:src/pages/ipa/resources/routes.mdx](https://github.com/netbirdio/docs/blob/abb8d4607fd4a1260c80bcdad1493e92941e1837/src/pages/ipa/resources/routes.mdx)

## List all Routes   (GET /api/routes)

Returns a list of all routes

**GET /api/routes Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/routes \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/routes',
  headers: {     
    'Accept': 'application/json',    
    'Authorization': 'Token <TOKEN>'
  }  
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

```python
import requests
import json

url = "https://api.netbird.io/api/routes"

headers = {     
  'Accept': 'application/json',
  'Authorization': 'Token <TOKEN>'
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```go
package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.netbird.io/api/routes"
  method := "GET"
  
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
    return
  }
  
    
  req.Header.Add("Accept", "application/json")
  req.Header.Add("Authorization", "Token <TOKEN>")

  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
```

```ruby
require "uri"
require "json"
require "net/http"

url = URI("https://api.netbird.io/api/routes")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();

Request request = new Request.Builder()
  .url("https://api.netbird.io/api/routes")
  .method("GET")    
  .addHeader("Accept", "application/json")
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/routes',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',  
  CURLOPT_HTTPHEADER => array(        
    'Accept: application/json',
    'Authorization: Token <TOKEN>'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```

**Response**

**Example**

```json
[
  {
    "id": "chacdk86lnnboviihd7g",
    "network_type": "IPv4",
    "description": "My first route",
    "network_id": "Route 1",
    "enabled": true,
    "peer": "chacbco6lnnbn6cg5s91",
    "peer_groups": [
      "chacbco6lnnbn6cg5s91"
    ],
    "network": "10.64.0.0/24",
    "domains": [
      "example.com"
    ],
    "metric": 9999,
    "masquerade": true,
    "groups": [
      "chacdk86lnnboviihd70"
    ],
    "keep_route": true,
    "access_control_groups": [
      "chacbco6lnnbn6cg5s91"
    ],
    "skip_auto_apply": false
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "network_type": "string",
    "description": "string",
    "network_id": "string",
    "enabled": "boolean",
    "peer": "string",
    "peer_groups": [
      "string"
    ],
    "network": "string",
    "domains": [
      "string"
    ],
    "metric": "integer",
    "masquerade": "boolean",
    "groups": [
      "string"
    ],
    "keep_route": "boolean",
    "access_control_groups": [
      "string"
    ],
    "skip_auto_apply": "boolean"
  }
]
```

***

## Create a Route   (POST /api/routes)

Creates a Route

### Request-Body Parameters

**description (type: string; required)**

Route description

**network\_id (type: string; required; minLen: 1; maxLen: 40)**

Route network identifier, to group HA routes

**enabled (type: boolean; required)**

Route status

**peer (type: string; optional)**

Peer Identifier associated with route. This property can not be set together with `peer_groups`

**peer\_groups (type: string\[]; optional)**

Peers Group Identifier associated with route. This property can not be set together with `peer`

**network (type: string; optional)**

Network range in CIDR format, Conflicts with domains

**domains (type: string\[]; optional)**

Domain list to be dynamically resolved. Max of 32 domains can be added per route configuration. Conflicts with network

**metric (type: integer; required; min: 1; max: 9999)**

Route metric number. Lowest number has higher priority

**masquerade (type: boolean; required)**

Indicate if peer should masquerade traffic to this route's prefix

**groups (type: string\[]; required)**

Group IDs containing routing peers

**keep\_route (type: boolean; required)**

Indicate if the route should be kept after a domain doesn't resolve that IP anymore

**access\_control\_groups (type: string\[]; optional)**

Access control group identifier associated with route.

**skip\_auto\_apply (type: boolean; optional)**

Indicate if this exit node route (0.0.0.0/0) should skip auto-application for client routing

**POST /api/routes Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/routes \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "description": "My first route",
  "network_id": "Route 1",
  "enabled": true,
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "network": "10.64.0.0/24",
  "domains": [
    "example.com"
  ],
  "metric": 9999,
  "masquerade": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ],
  "keep_route": true,
  "access_control_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "skip_auto_apply": false
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "description": "My first route",
  "network_id": "Route 1",
  "enabled": true,
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "network": "10.64.0.0/24",
  "domains": [
    "example.com"
  ],
  "metric": 9999,
  "masquerade": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ],
  "keep_route": true,
  "access_control_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "skip_auto_apply": false
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/routes',
  headers: {     
    'Accept': 'application/json',    
    'Content-Type': 'application/json',
    'Authorization': 'Token <TOKEN>'
  },  
  data : data
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

```python
import requests
import json

url = "https://api.netbird.io/api/routes"
payload = json.dumps({
  "description": "My first route",
  "network_id": "Route 1",
  "enabled": true,
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "network": "10.64.0.0/24",
  "domains": [
    "example.com"
  ],
  "metric": 9999,
  "masquerade": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ],
  "keep_route": true,
  "access_control_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "skip_auto_apply": false
})
headers = {   
  'Content-Type': 'application/json',  
  'Accept': 'application/json',
  'Authorization': 'Token <TOKEN>'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
```

```go
package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.netbird.io/api/routes"
  method := "POST"
  
  payload := strings.NewReader(`{
  "description": "My first route",
  "network_id": "Route 1",
  "enabled": true,
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "network": "10.64.0.0/24",
  "domains": [
    "example.com"
  ],
  "metric": 9999,
  "masquerade": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ],
  "keep_route": true,
  "access_control_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "skip_auto_apply": false
}`)
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  
  
  req.Header.Add("Content-Type", "application/json")  
  req.Header.Add("Accept", "application/json")
  req.Header.Add("Authorization", "Token <TOKEN>")

  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
```

```ruby
require "uri"
require "json"
require "net/http"

url = URI("https://api.netbird.io/api/routes")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "description": "My first route",
  "network_id": "Route 1",
  "enabled": true,
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "network": "10.64.0.0/24",
  "domains": [
    "example.com"
  ],
  "metric": 9999,
  "masquerade": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ],
  "keep_route": true,
  "access_control_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "skip_auto_apply": false
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "description": "My first route",
  "network_id": "Route 1",
  "enabled": true,
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "network": "10.64.0.0/24",
  "domains": [
    "example.com"
  ],
  "metric": 9999,
  "masquerade": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ],
  "keep_route": true,
  "access_control_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "skip_auto_apply": false
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/routes")
  .method("POST", body)  
  .addHeader("Content-Type", "application/json")  
  .addHeader("Accept", "application/json")
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/routes',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "description": "My first route",
  "network_id": "Route 1",
  "enabled": true,
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "network": "10.64.0.0/24",
  "domains": [
    "example.com"
  ],
  "metric": 9999,
  "masquerade": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ],
  "keep_route": true,
  "access_control_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "skip_auto_apply": false
}',
  CURLOPT_HTTPHEADER => array(    
    'Content-Type: application/json',    
    'Accept: application/json',
    'Authorization: Token <TOKEN>'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```

**Response**

**Example**

```json
{
  "id": "chacdk86lnnboviihd7g",
  "network_type": "IPv4",
  "description": "My first route",
  "network_id": "Route 1",
  "enabled": true,
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "network": "10.64.0.0/24",
  "domains": [
    "example.com"
  ],
  "metric": 9999,
  "masquerade": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ],
  "keep_route": true,
  "access_control_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "skip_auto_apply": false
}
```

**Schema**

```json
{
  "id": "string",
  "network_type": "string",
  "description": "string",
  "network_id": "string",
  "enabled": "boolean",
  "peer": "string",
  "peer_groups": [
    "string"
  ],
  "network": "string",
  "domains": [
    "string"
  ],
  "metric": "integer",
  "masquerade": "boolean",
  "groups": [
    "string"
  ],
  "keep_route": "boolean",
  "access_control_groups": [
    "string"
  ],
  "skip_auto_apply": "boolean"
}
```

***

## Retrieve a Route   (GET /api/routes/{routeId})

Get information about a Routes

### Path Parameters

**routeId (type: string; required)**

The unique identifier of a route

**GET /api/routes/{routeId} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/routes/{routeId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/routes/{routeId}',
  headers: {     
    'Accept': 'application/json',    
    'Authorization': 'Token <TOKEN>'
  }  
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

```python
import requests
import json

url = "https://api.netbird.io/api/routes/{routeId}"

headers = {     
  'Accept': 'application/json',
  'Authorization': 'Token <TOKEN>'
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```go
package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.netbird.io/api/routes/{routeId}"
  method := "GET"
  
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
    return
  }
  
    
  req.Header.Add("Accept", "application/json")
  req.Header.Add("Authorization", "Token <TOKEN>")

  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
```

```ruby
require "uri"
require "json"
require "net/http"

url = URI("https://api.netbird.io/api/routes/{routeId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();

Request request = new Request.Builder()
  .url("https://api.netbird.io/api/routes/{routeId}")
  .method("GET")    
  .addHeader("Accept", "application/json")
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/routes/{routeId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',  
  CURLOPT_HTTPHEADER => array(        
    'Accept: application/json',
    'Authorization: Token <TOKEN>'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```

**Response**

**Example**

```json
{
  "id": "chacdk86lnnboviihd7g",
  "network_type": "IPv4",
  "description": "My first route",
  "network_id": "Route 1",
  "enabled": true,
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "network": "10.64.0.0/24",
  "domains": [
    "example.com"
  ],
  "metric": 9999,
  "masquerade": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ],
  "keep_route": true,
  "access_control_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "skip_auto_apply": false
}
```

**Schema**

```json
{
  "id": "string",
  "network_type": "string",
  "description": "string",
  "network_id": "string",
  "enabled": "boolean",
  "peer": "string",
  "peer_groups": [
    "string"
  ],
  "network": "string",
  "domains": [
    "string"
  ],
  "metric": "integer",
  "masquerade": "boolean",
  "groups": [
    "string"
  ],
  "keep_route": "boolean",
  "access_control_groups": [
    "string"
  ],
  "skip_auto_apply": "boolean"
}
```

***

## Update a Route   (PUT /api/routes/{routeId})

Update/Replace a Route

### Path Parameters

**routeId (type: string; required)**

The unique identifier of a route

### Request-Body Parameters

**description (type: string; required)**

Route description

**network\_id (type: string; required; minLen: 1; maxLen: 40)**

Route network identifier, to group HA routes

**enabled (type: boolean; required)**

Route status

**peer (type: string; optional)**

Peer Identifier associated with route. This property can not be set together with `peer_groups`

**peer\_groups (type: string\[]; optional)**

Peers Group Identifier associated with route. This property can not be set together with `peer`

**network (type: string; optional)**

Network range in CIDR format, Conflicts with domains

**domains (type: string\[]; optional)**

Domain list to be dynamically resolved. Max of 32 domains can be added per route configuration. Conflicts with network

**metric (type: integer; required; min: 1; max: 9999)**

Route metric number. Lowest number has higher priority

**masquerade (type: boolean; required)**

Indicate if peer should masquerade traffic to this route's prefix

**groups (type: string\[]; required)**

Group IDs containing routing peers

**keep\_route (type: boolean; required)**

Indicate if the route should be kept after a domain doesn't resolve that IP anymore

**access\_control\_groups (type: string\[]; optional)**

Access control group identifier associated with route.

**skip\_auto\_apply (type: boolean; optional)**

Indicate if this exit node route (0.0.0.0/0) should skip auto-application for client routing

**PUT /api/routes/{routeId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/routes/{routeId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "description": "My first route",
  "network_id": "Route 1",
  "enabled": true,
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "network": "10.64.0.0/24",
  "domains": [
    "example.com"
  ],
  "metric": 9999,
  "masquerade": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ],
  "keep_route": true,
  "access_control_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "skip_auto_apply": false
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "description": "My first route",
  "network_id": "Route 1",
  "enabled": true,
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "network": "10.64.0.0/24",
  "domains": [
    "example.com"
  ],
  "metric": 9999,
  "masquerade": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ],
  "keep_route": true,
  "access_control_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "skip_auto_apply": false
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/routes/{routeId}',
  headers: {     
    'Accept': 'application/json',    
    'Content-Type': 'application/json',
    'Authorization': 'Token <TOKEN>'
  },  
  data : data
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

```python
import requests
import json

url = "https://api.netbird.io/api/routes/{routeId}"
payload = json.dumps({
  "description": "My first route",
  "network_id": "Route 1",
  "enabled": true,
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "network": "10.64.0.0/24",
  "domains": [
    "example.com"
  ],
  "metric": 9999,
  "masquerade": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ],
  "keep_route": true,
  "access_control_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "skip_auto_apply": false
})
headers = {   
  'Content-Type': 'application/json',  
  'Accept': 'application/json',
  'Authorization': 'Token <TOKEN>'
}

response = requests.request("PUT", url, headers=headers, data=payload)

print(response.text)
```

```go
package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.netbird.io/api/routes/{routeId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "description": "My first route",
  "network_id": "Route 1",
  "enabled": true,
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "network": "10.64.0.0/24",
  "domains": [
    "example.com"
  ],
  "metric": 9999,
  "masquerade": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ],
  "keep_route": true,
  "access_control_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "skip_auto_apply": false
}`)
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  
  
  req.Header.Add("Content-Type", "application/json")  
  req.Header.Add("Accept", "application/json")
  req.Header.Add("Authorization", "Token <TOKEN>")

  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
```

```ruby
require "uri"
require "json"
require "net/http"

url = URI("https://api.netbird.io/api/routes/{routeId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "description": "My first route",
  "network_id": "Route 1",
  "enabled": true,
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "network": "10.64.0.0/24",
  "domains": [
    "example.com"
  ],
  "metric": 9999,
  "masquerade": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ],
  "keep_route": true,
  "access_control_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "skip_auto_apply": false
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "description": "My first route",
  "network_id": "Route 1",
  "enabled": true,
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "network": "10.64.0.0/24",
  "domains": [
    "example.com"
  ],
  "metric": 9999,
  "masquerade": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ],
  "keep_route": true,
  "access_control_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "skip_auto_apply": false
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/routes/{routeId}")
  .method("PUT", body)  
  .addHeader("Content-Type", "application/json")  
  .addHeader("Accept", "application/json")
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/routes/{routeId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "description": "My first route",
  "network_id": "Route 1",
  "enabled": true,
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "network": "10.64.0.0/24",
  "domains": [
    "example.com"
  ],
  "metric": 9999,
  "masquerade": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ],
  "keep_route": true,
  "access_control_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "skip_auto_apply": false
}',
  CURLOPT_HTTPHEADER => array(    
    'Content-Type: application/json',    
    'Accept: application/json',
    'Authorization: Token <TOKEN>'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```

**Response**

**Example**

```json
{
  "id": "chacdk86lnnboviihd7g",
  "network_type": "IPv4",
  "description": "My first route",
  "network_id": "Route 1",
  "enabled": true,
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "network": "10.64.0.0/24",
  "domains": [
    "example.com"
  ],
  "metric": 9999,
  "masquerade": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ],
  "keep_route": true,
  "access_control_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "skip_auto_apply": false
}
```

**Schema**

```json
{
  "id": "string",
  "network_type": "string",
  "description": "string",
  "network_id": "string",
  "enabled": "boolean",
  "peer": "string",
  "peer_groups": [
    "string"
  ],
  "network": "string",
  "domains": [
    "string"
  ],
  "metric": "integer",
  "masquerade": "boolean",
  "groups": [
    "string"
  ],
  "keep_route": "boolean",
  "access_control_groups": [
    "string"
  ],
  "skip_auto_apply": "boolean"
}
```

***

## Delete a Route   (DELETE /api/routes/{routeId})

Delete a route

### Path Parameters

**routeId (type: string; required)**

The unique identifier of a route

**DELETE /api/routes/{routeId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/routes/{routeId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/routes/{routeId}',
  headers: {         
    'Authorization': 'Token <TOKEN>'
  }  
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

```python
import requests
import json

url = "https://api.netbird.io/api/routes/{routeId}"

headers = {     
  'Authorization': 'Token <TOKEN>'
}

response = requests.request("DELETE", url, headers=headers)

print(response.text)
```

```go
package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.netbird.io/api/routes/{routeId}"
  method := "DELETE"
  
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
    return
  }
  
    
  req.Header.Add("Authorization", "Token <TOKEN>")

  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
```

```ruby
require "uri"
require "json"
require "net/http"

url = URI("https://api.netbird.io/api/routes/{routeId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Delete.new(url)
request["Authorization"] = "Token <TOKEN>"

response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();

Request request = new Request.Builder()
  .url("https://api.netbird.io/api/routes/{routeId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/routes/{routeId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'DELETE',  
  CURLOPT_HTTPHEADER => array(        
    'Authorization: Token <TOKEN>'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```

***
