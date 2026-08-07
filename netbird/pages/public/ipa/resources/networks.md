> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/ipa/resources/networks.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/ipa/resources/networks.mdx)

## List all Networks   (GET /api/networks)

Returns a list of all networks

**GET /api/networks Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/networks \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/networks',
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

url = "https://api.netbird.io/api/networks"

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

  url := "https://api.netbird.io/api/networks"
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

url = URI("https://api.netbird.io/api/networks")

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
  .url("https://api.netbird.io/api/networks")
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
  CURLOPT_URL => 'https://api.netbird.io/api/networks',
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
    "routers": [
      "ch8i4ug6lnn4g9hqv7m0"
    ],
    "routing_peers_count": 2,
    "resources": [
      "ch8i4ug6lnn4g9hqv7m1"
    ],
    "policies": [
      "ch8i4ug6lnn4g9hqv7m2"
    ],
    "name": "Remote Network 1",
    "description": "A remote network that needs to be accessed"
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "routers": [
      "string"
    ],
    "routing_peers_count": "integer",
    "resources": [
      "string"
    ],
    "policies": [
      "string"
    ],
    "name": "string",
    "description": "string"
  }
]
```

***

## Create a Network   (POST /api/networks)

Creates a Network

### Request-Body Parameters

**name (type: string; required)**

Network name

**description (type: string; optional)**

Network description

**POST /api/networks Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/networks \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "Remote Network 1",
  "description": "A remote network that needs to be accessed"
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "Remote Network 1",
  "description": "A remote network that needs to be accessed"
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/networks',
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

url = "https://api.netbird.io/api/networks"
payload = json.dumps({
  "name": "Remote Network 1",
  "description": "A remote network that needs to be accessed"
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

  url := "https://api.netbird.io/api/networks"
  method := "POST"
  
  payload := strings.NewReader(`{
  "name": "Remote Network 1",
  "description": "A remote network that needs to be accessed"
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

url = URI("https://api.netbird.io/api/networks")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "Remote Network 1",
  "description": "A remote network that needs to be accessed"
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "name": "Remote Network 1",
  "description": "A remote network that needs to be accessed"
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/networks")
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
  CURLOPT_URL => 'https://api.netbird.io/api/networks',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "name": "Remote Network 1",
  "description": "A remote network that needs to be accessed"
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
  "routers": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "routing_peers_count": 2,
  "resources": [
    "ch8i4ug6lnn4g9hqv7m1"
  ],
  "policies": [
    "ch8i4ug6lnn4g9hqv7m2"
  ],
  "name": "Remote Network 1",
  "description": "A remote network that needs to be accessed"
}
```

**Schema**

```json
{
  "id": "string",
  "routers": [
    "string"
  ],
  "routing_peers_count": "integer",
  "resources": [
    "string"
  ],
  "policies": [
    "string"
  ],
  "name": "string",
  "description": "string"
}
```

***

## Retrieve a Network   (GET /api/networks/{networkId})

Get information about a Network

### Path Parameters

**networkId (type: string; required)**

The unique identifier of a network

**GET /api/networks/{networkId} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/networks/{networkId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/networks/{networkId}',
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

url = "https://api.netbird.io/api/networks/{networkId}"

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

  url := "https://api.netbird.io/api/networks/{networkId}"
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

url = URI("https://api.netbird.io/api/networks/{networkId}")

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
  .url("https://api.netbird.io/api/networks/{networkId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/networks/{networkId}',
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
  "routers": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "routing_peers_count": 2,
  "resources": [
    "ch8i4ug6lnn4g9hqv7m1"
  ],
  "policies": [
    "ch8i4ug6lnn4g9hqv7m2"
  ],
  "name": "Remote Network 1",
  "description": "A remote network that needs to be accessed"
}
```

**Schema**

```json
{
  "id": "string",
  "routers": [
    "string"
  ],
  "routing_peers_count": "integer",
  "resources": [
    "string"
  ],
  "policies": [
    "string"
  ],
  "name": "string",
  "description": "string"
}
```

***

## Update a Network   (PUT /api/networks/{networkId})

Update/Replace a Network

### Path Parameters

**networkId (type: string; required)**

The unique identifier of a network

### Request-Body Parameters

**name (type: string; required)**

Network name

**description (type: string; optional)**

Network description

**PUT /api/networks/{networkId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/networks/{networkId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "Remote Network 1",
  "description": "A remote network that needs to be accessed"
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "Remote Network 1",
  "description": "A remote network that needs to be accessed"
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/networks/{networkId}',
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

url = "https://api.netbird.io/api/networks/{networkId}"
payload = json.dumps({
  "name": "Remote Network 1",
  "description": "A remote network that needs to be accessed"
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

  url := "https://api.netbird.io/api/networks/{networkId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "name": "Remote Network 1",
  "description": "A remote network that needs to be accessed"
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

url = URI("https://api.netbird.io/api/networks/{networkId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "Remote Network 1",
  "description": "A remote network that needs to be accessed"
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "name": "Remote Network 1",
  "description": "A remote network that needs to be accessed"
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/networks/{networkId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/networks/{networkId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "name": "Remote Network 1",
  "description": "A remote network that needs to be accessed"
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
  "routers": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "routing_peers_count": 2,
  "resources": [
    "ch8i4ug6lnn4g9hqv7m1"
  ],
  "policies": [
    "ch8i4ug6lnn4g9hqv7m2"
  ],
  "name": "Remote Network 1",
  "description": "A remote network that needs to be accessed"
}
```

**Schema**

```json
{
  "id": "string",
  "routers": [
    "string"
  ],
  "routing_peers_count": "integer",
  "resources": [
    "string"
  ],
  "policies": [
    "string"
  ],
  "name": "string",
  "description": "string"
}
```

***

## Delete a Network   (DELETE /api/networks/{networkId})

Delete a network

### Path Parameters

**networkId (type: string; required)**

The unique identifier of a network

**DELETE /api/networks/{networkId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/networks/{networkId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/networks/{networkId}',
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

url = "https://api.netbird.io/api/networks/{networkId}"

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

  url := "https://api.netbird.io/api/networks/{networkId}"
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

url = URI("https://api.netbird.io/api/networks/{networkId}")

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
  .url("https://api.netbird.io/api/networks/{networkId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/networks/{networkId}',
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

## List all Network Resources   (GET /api/networks/{networkId}/resources)

Returns a list of all resources in a network

### Path Parameters

**networkId (type: string; required)**

The unique identifier of a network

**GET /api/networks/{networkId}/resources Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/networks/{networkId}/resources \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/networks/{networkId}/resources',
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

url = "https://api.netbird.io/api/networks/{networkId}/resources"

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

  url := "https://api.netbird.io/api/networks/{networkId}/resources"
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

url = URI("https://api.netbird.io/api/networks/{networkId}/resources")

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
  .url("https://api.netbird.io/api/networks/{networkId}/resources")
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
  CURLOPT_URL => 'https://api.netbird.io/api/networks/{networkId}/resources',
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
    "type": "host",
    "groups": [
      {
        "id": "ch8i4ug6lnn4g9hqv7m0",
        "name": "devs",
        "peers_count": 2,
        "resources_count": 5,
        "issued": "api"
      }
    ],
    "name": "Remote Resource 1",
    "description": "A remote resource inside network 1",
    "address": "1.1.1.1",
    "enabled": true
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "type": "string",
    "groups": [
      {
        "id": "string",
        "name": "string",
        "peers_count": "integer",
        "resources_count": "integer",
        "issued": "string"
      }
    ],
    "name": "string",
    "description": "string",
    "address": "string",
    "enabled": "boolean"
  }
]
```

***

## Create a Network Resource   (POST /api/networks/{networkId}/resources)

Creates a Network Resource

### Path Parameters

**networkId (type: string; required)**

The unique identifier of a network

### Request-Body Parameters

**name (type: string; required)**

Network resource name

**description (type: string; optional)**

Network resource description

**address (type: string; required)**

Network resource address (either a direct host like 1.1.1.1 or 1.1.1.1/32, or a subnet like 192.168.178.0/24, or domains like example.com and \*.example.com)

**enabled (type: boolean; required)**

Network resource status

**groups (type: string\[]; required)**

Group IDs containing the resource

**POST /api/networks/{networkId}/resources Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/networks/{networkId}/resources \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "Remote Resource 1",
  "description": "A remote resource inside network 1",
  "address": "1.1.1.1",
  "enabled": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ]
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "Remote Resource 1",
  "description": "A remote resource inside network 1",
  "address": "1.1.1.1",
  "enabled": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ]
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/networks/{networkId}/resources',
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

url = "https://api.netbird.io/api/networks/{networkId}/resources"
payload = json.dumps({
  "name": "Remote Resource 1",
  "description": "A remote resource inside network 1",
  "address": "1.1.1.1",
  "enabled": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ]
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

  url := "https://api.netbird.io/api/networks/{networkId}/resources"
  method := "POST"
  
  payload := strings.NewReader(`{
  "name": "Remote Resource 1",
  "description": "A remote resource inside network 1",
  "address": "1.1.1.1",
  "enabled": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ]
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

url = URI("https://api.netbird.io/api/networks/{networkId}/resources")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "Remote Resource 1",
  "description": "A remote resource inside network 1",
  "address": "1.1.1.1",
  "enabled": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ]
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "name": "Remote Resource 1",
  "description": "A remote resource inside network 1",
  "address": "1.1.1.1",
  "enabled": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ]
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/networks/{networkId}/resources")
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
  CURLOPT_URL => 'https://api.netbird.io/api/networks/{networkId}/resources',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "name": "Remote Resource 1",
  "description": "A remote resource inside network 1",
  "address": "1.1.1.1",
  "enabled": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ]
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
  "type": "host",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "name": "devs",
      "peers_count": 2,
      "resources_count": 5,
      "issued": "api"
    }
  ],
  "name": "Remote Resource 1",
  "description": "A remote resource inside network 1",
  "address": "1.1.1.1",
  "enabled": true
}
```

**Schema**

```json
{
  "id": "string",
  "type": "string",
  "groups": [
    {
      "id": "string",
      "name": "string",
      "peers_count": "integer",
      "resources_count": "integer",
      "issued": "string"
    }
  ],
  "name": "string",
  "description": "string",
  "address": "string",
  "enabled": "boolean"
}
```

***

## Retrieve a Network Resource   (GET /api/networks/{networkId}/resources/{resourceId})

Get information about a Network Resource

### Path Parameters

**networkId (type: string; required)**

The unique identifier of a network

**resourceId (type: string; required)**

The unique identifier of a network resource

**GET /api/networks/{networkId}/resources/{resourceId} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/networks/{networkId}/resources/{resourceId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/networks/{networkId}/resources/{resourceId}',
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

url = "https://api.netbird.io/api/networks/{networkId}/resources/{resourceId}"

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

  url := "https://api.netbird.io/api/networks/{networkId}/resources/{resourceId}"
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

url = URI("https://api.netbird.io/api/networks/{networkId}/resources/{resourceId}")

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
  .url("https://api.netbird.io/api/networks/{networkId}/resources/{resourceId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/networks/{networkId}/resources/{resourceId}',
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
  "type": "host",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "name": "devs",
      "peers_count": 2,
      "resources_count": 5,
      "issued": "api"
    }
  ],
  "name": "Remote Resource 1",
  "description": "A remote resource inside network 1",
  "address": "1.1.1.1",
  "enabled": true
}
```

**Schema**

```json
{
  "id": "string",
  "type": "string",
  "groups": [
    {
      "id": "string",
      "name": "string",
      "peers_count": "integer",
      "resources_count": "integer",
      "issued": "string"
    }
  ],
  "name": "string",
  "description": "string",
  "address": "string",
  "enabled": "boolean"
}
```

***

## Update a Network Resource   (PUT /api/networks/{networkId}/resources/{resourceId})

Update a Network Resource

### Path Parameters

**networkId (type: string; required)**

The unique identifier of a network

**resourceId (type: string; required)**

The unique identifier of a resource

### Request-Body Parameters

**name (type: string; required)**

Network resource name

**description (type: string; optional)**

Network resource description

**address (type: string; required)**

Network resource address (either a direct host like 1.1.1.1 or 1.1.1.1/32, or a subnet like 192.168.178.0/24, or domains like example.com and \*.example.com)

**enabled (type: boolean; required)**

Network resource status

**groups (type: string\[]; required)**

Group IDs containing the resource

**PUT /api/networks/{networkId}/resources/{resourceId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/networks/{networkId}/resources/{resourceId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "Remote Resource 1",
  "description": "A remote resource inside network 1",
  "address": "1.1.1.1",
  "enabled": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ]
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "Remote Resource 1",
  "description": "A remote resource inside network 1",
  "address": "1.1.1.1",
  "enabled": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ]
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/networks/{networkId}/resources/{resourceId}',
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

url = "https://api.netbird.io/api/networks/{networkId}/resources/{resourceId}"
payload = json.dumps({
  "name": "Remote Resource 1",
  "description": "A remote resource inside network 1",
  "address": "1.1.1.1",
  "enabled": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ]
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

  url := "https://api.netbird.io/api/networks/{networkId}/resources/{resourceId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "name": "Remote Resource 1",
  "description": "A remote resource inside network 1",
  "address": "1.1.1.1",
  "enabled": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ]
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

url = URI("https://api.netbird.io/api/networks/{networkId}/resources/{resourceId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "Remote Resource 1",
  "description": "A remote resource inside network 1",
  "address": "1.1.1.1",
  "enabled": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ]
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "name": "Remote Resource 1",
  "description": "A remote resource inside network 1",
  "address": "1.1.1.1",
  "enabled": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ]
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/networks/{networkId}/resources/{resourceId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/networks/{networkId}/resources/{resourceId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "name": "Remote Resource 1",
  "description": "A remote resource inside network 1",
  "address": "1.1.1.1",
  "enabled": true,
  "groups": [
    "chacdk86lnnboviihd70"
  ]
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
  "type": "host",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "name": "devs",
      "peers_count": 2,
      "resources_count": 5,
      "issued": "api"
    }
  ],
  "name": "Remote Resource 1",
  "description": "A remote resource inside network 1",
  "address": "1.1.1.1",
  "enabled": true
}
```

**Schema**

```json
{
  "id": "string",
  "type": "string",
  "groups": [
    {
      "id": "string",
      "name": "string",
      "peers_count": "integer",
      "resources_count": "integer",
      "issued": "string"
    }
  ],
  "name": "string",
  "description": "string",
  "address": "string",
  "enabled": "boolean"
}
```

***

## Delete a Network Resource   (DELETE /api/networks/{networkId}/resources/{resourceId})

Delete a network resource

### Path Parameters

**networkId (type: string; required)**

**resourceId (type: string; required)**

**DELETE /api/networks/{networkId}/resources/{resourceId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/networks/{networkId}/resources/{resourceId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/networks/{networkId}/resources/{resourceId}',
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

url = "https://api.netbird.io/api/networks/{networkId}/resources/{resourceId}"

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

  url := "https://api.netbird.io/api/networks/{networkId}/resources/{resourceId}"
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

url = URI("https://api.netbird.io/api/networks/{networkId}/resources/{resourceId}")

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
  .url("https://api.netbird.io/api/networks/{networkId}/resources/{resourceId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/networks/{networkId}/resources/{resourceId}',
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

## List all Network Routers   (GET /api/networks/{networkId}/routers)

Returns a list of all routers in a network

### Path Parameters

**networkId (type: string; required)**

The unique identifier of a network

**GET /api/networks/{networkId}/routers Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/networks/{networkId}/routers \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/networks/{networkId}/routers',
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

url = "https://api.netbird.io/api/networks/{networkId}/routers"

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

  url := "https://api.netbird.io/api/networks/{networkId}/routers"
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

url = URI("https://api.netbird.io/api/networks/{networkId}/routers")

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
  .url("https://api.netbird.io/api/networks/{networkId}/routers")
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
  CURLOPT_URL => 'https://api.netbird.io/api/networks/{networkId}/routers',
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
    "peer": "chacbco6lnnbn6cg5s91",
    "peer_groups": [
      "chacbco6lnnbn6cg5s91"
    ],
    "metric": 9999,
    "masquerade": true,
    "enabled": true
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "peer": "string",
    "peer_groups": [
      "string"
    ],
    "metric": "integer",
    "masquerade": "boolean",
    "enabled": "boolean"
  }
]
```

***

## Create a Network Router   (POST /api/networks/{networkId}/routers)

Creates a Network Router

### Path Parameters

**networkId (type: string; required)**

The unique identifier of a network

### Request-Body Parameters

**peer (type: string; optional)**

Peer Identifier associated with route. This property can not be set together with `peer_groups`

**peer\_groups (type: string\[]; optional)**

Peers Group Identifier associated with route. This property can not be set together with `peer`

**metric (type: integer; required; min: 1; max: 9999)**

Route metric number. Lowest number has higher priority

**masquerade (type: boolean; required)**

Indicate if peer should masquerade traffic to this route's prefix

**enabled (type: boolean; required)**

Network router status

**POST /api/networks/{networkId}/routers Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/networks/{networkId}/routers \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "metric": 9999,
  "masquerade": true,
  "enabled": true
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "metric": 9999,
  "masquerade": true,
  "enabled": true
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/networks/{networkId}/routers',
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

url = "https://api.netbird.io/api/networks/{networkId}/routers"
payload = json.dumps({
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "metric": 9999,
  "masquerade": true,
  "enabled": true
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

  url := "https://api.netbird.io/api/networks/{networkId}/routers"
  method := "POST"
  
  payload := strings.NewReader(`{
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "metric": 9999,
  "masquerade": true,
  "enabled": true
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

url = URI("https://api.netbird.io/api/networks/{networkId}/routers")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "metric": 9999,
  "masquerade": true,
  "enabled": true
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "metric": 9999,
  "masquerade": true,
  "enabled": true
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/networks/{networkId}/routers")
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
  CURLOPT_URL => 'https://api.netbird.io/api/networks/{networkId}/routers',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "metric": 9999,
  "masquerade": true,
  "enabled": true
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
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "metric": 9999,
  "masquerade": true,
  "enabled": true
}
```

**Schema**

```json
{
  "id": "string",
  "peer": "string",
  "peer_groups": [
    "string"
  ],
  "metric": "integer",
  "masquerade": "boolean",
  "enabled": "boolean"
}
```

***

## Retrieve a Network Router   (GET /api/networks/{networkId}/routers/{routerId})

Get information about a Network Router

### Path Parameters

**networkId (type: string; required)**

The unique identifier of a network

**routerId (type: string; required)**

The unique identifier of a router

**GET /api/networks/{networkId}/routers/{routerId} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/networks/{networkId}/routers/{routerId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/networks/{networkId}/routers/{routerId}',
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

url = "https://api.netbird.io/api/networks/{networkId}/routers/{routerId}"

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

  url := "https://api.netbird.io/api/networks/{networkId}/routers/{routerId}"
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

url = URI("https://api.netbird.io/api/networks/{networkId}/routers/{routerId}")

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
  .url("https://api.netbird.io/api/networks/{networkId}/routers/{routerId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/networks/{networkId}/routers/{routerId}',
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
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "metric": 9999,
  "masquerade": true,
  "enabled": true
}
```

**Schema**

```json
{
  "id": "string",
  "peer": "string",
  "peer_groups": [
    "string"
  ],
  "metric": "integer",
  "masquerade": "boolean",
  "enabled": "boolean"
}
```

***

## Update a Network Router   (PUT /api/networks/{networkId}/routers/{routerId})

Update a Network Router

### Path Parameters

**networkId (type: string; required)**

The unique identifier of a network

**routerId (type: string; required)**

The unique identifier of a router

### Request-Body Parameters

**peer (type: string; optional)**

Peer Identifier associated with route. This property can not be set together with `peer_groups`

**peer\_groups (type: string\[]; optional)**

Peers Group Identifier associated with route. This property can not be set together with `peer`

**metric (type: integer; required; min: 1; max: 9999)**

Route metric number. Lowest number has higher priority

**masquerade (type: boolean; required)**

Indicate if peer should masquerade traffic to this route's prefix

**enabled (type: boolean; required)**

Network router status

**PUT /api/networks/{networkId}/routers/{routerId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/networks/{networkId}/routers/{routerId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "metric": 9999,
  "masquerade": true,
  "enabled": true
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "metric": 9999,
  "masquerade": true,
  "enabled": true
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/networks/{networkId}/routers/{routerId}',
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

url = "https://api.netbird.io/api/networks/{networkId}/routers/{routerId}"
payload = json.dumps({
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "metric": 9999,
  "masquerade": true,
  "enabled": true
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

  url := "https://api.netbird.io/api/networks/{networkId}/routers/{routerId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "metric": 9999,
  "masquerade": true,
  "enabled": true
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

url = URI("https://api.netbird.io/api/networks/{networkId}/routers/{routerId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "metric": 9999,
  "masquerade": true,
  "enabled": true
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "metric": 9999,
  "masquerade": true,
  "enabled": true
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/networks/{networkId}/routers/{routerId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/networks/{networkId}/routers/{routerId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "metric": 9999,
  "masquerade": true,
  "enabled": true
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
  "peer": "chacbco6lnnbn6cg5s91",
  "peer_groups": [
    "chacbco6lnnbn6cg5s91"
  ],
  "metric": 9999,
  "masquerade": true,
  "enabled": true
}
```

**Schema**

```json
{
  "id": "string",
  "peer": "string",
  "peer_groups": [
    "string"
  ],
  "metric": "integer",
  "masquerade": "boolean",
  "enabled": "boolean"
}
```

***

## Delete a Network Router   (DELETE /api/networks/{networkId}/routers/{routerId})

Delete a network router

### Path Parameters

**networkId (type: string; required)**

**routerId (type: string; required)**

**DELETE /api/networks/{networkId}/routers/{routerId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/networks/{networkId}/routers/{routerId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/networks/{networkId}/routers/{routerId}',
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

url = "https://api.netbird.io/api/networks/{networkId}/routers/{routerId}"

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

  url := "https://api.netbird.io/api/networks/{networkId}/routers/{routerId}"
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

url = URI("https://api.netbird.io/api/networks/{networkId}/routers/{routerId}")

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
  .url("https://api.netbird.io/api/networks/{networkId}/routers/{routerId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/networks/{networkId}/routers/{routerId}',
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

## List all Network Routers   (GET /api/networks/routers)

Returns a list of all routers in a network

**GET /api/networks/routers Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/networks/routers \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/networks/routers',
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

url = "https://api.netbird.io/api/networks/routers"

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

  url := "https://api.netbird.io/api/networks/routers"
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

url = URI("https://api.netbird.io/api/networks/routers")

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
  .url("https://api.netbird.io/api/networks/routers")
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
  CURLOPT_URL => 'https://api.netbird.io/api/networks/routers',
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
    "peer": "chacbco6lnnbn6cg5s91",
    "peer_groups": [
      "chacbco6lnnbn6cg5s91"
    ],
    "metric": 9999,
    "masquerade": true,
    "enabled": true
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "peer": "string",
    "peer_groups": [
      "string"
    ],
    "metric": "integer",
    "masquerade": "boolean",
    "enabled": "boolean"
  }
]
```

***
