> Release-pinned source for NetBird v0.77.1: [netbirdio/docs@d905fda2a3f04a2066746875d09e51a3fe62dfed:src/pages/ipa/resources/groups.mdx](https://github.com/netbirdio/docs/blob/d905fda2a3f04a2066746875d09e51a3fe62dfed/src/pages/ipa/resources/groups.mdx)

## List all Groups   (GET /api/groups)

Returns a list of all groups

### Query Parameters

**name (type: string; optional)**

Filter groups by name (exact match)

**GET /api/groups Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/groups \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/groups',
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

url = "https://api.netbird.io/api/groups"

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

  url := "https://api.netbird.io/api/groups"
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

url = URI("https://api.netbird.io/api/groups")

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
  .url("https://api.netbird.io/api/groups")
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
  CURLOPT_URL => 'https://api.netbird.io/api/groups',
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
    "id": "ch8i4ug6lnn4g9hqv7m0",
    "name": "devs",
    "peers_count": 2,
    "resources_count": 5,
    "issued": "api",
    "peers": [
      {
        "id": "chacbco6lnnbn6cg5s90",
        "name": "stage-host-1"
      }
    ],
    "resources": [
      {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      }
    ]
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "name": "string",
    "peers_count": "integer",
    "resources_count": "integer",
    "issued": "string",
    "peers": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "resources": [
      {
        "id": "string",
        "type": "string"
      }
    ]
  }
]
```

***

## Create a Group   (POST /api/groups)

Creates a group

### Request-Body Parameters

**name (type: string; required)**

Group name identifier

**peers (type: string\[]; optional)**

List of peers ids

**resources (type: object\[]; optional)**

**More Information**

**id (type: string; required)**

ID of the resource

**type (type: string; required; values: host, subnet, domain, peer)**

Network resource type based of the address

**POST /api/groups Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/groups \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "devs",
  "peers": [
    "ch8i4ug6lnn4g9hqv7m1"
  ],
  "resources": [
    {
      "id": "chacdk86lnnboviihd7g",
      "type": "host"
    }
  ]
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "devs",
  "peers": [
    "ch8i4ug6lnn4g9hqv7m1"
  ],
  "resources": [
    {
      "id": "chacdk86lnnboviihd7g",
      "type": "host"
    }
  ]
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/groups',
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

url = "https://api.netbird.io/api/groups"
payload = json.dumps({
  "name": "devs",
  "peers": [
    "ch8i4ug6lnn4g9hqv7m1"
  ],
  "resources": [
    {
      "id": "chacdk86lnnboviihd7g",
      "type": "host"
    }
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

  url := "https://api.netbird.io/api/groups"
  method := "POST"
  
  payload := strings.NewReader(`{
  "name": "devs",
  "peers": [
    "ch8i4ug6lnn4g9hqv7m1"
  ],
  "resources": [
    {
      "id": "chacdk86lnnboviihd7g",
      "type": "host"
    }
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

url = URI("https://api.netbird.io/api/groups")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "devs",
  "peers": [
    "ch8i4ug6lnn4g9hqv7m1"
  ],
  "resources": [
    {
      "id": "chacdk86lnnboviihd7g",
      "type": "host"
    }
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
  "name": "devs",
  "peers": [
    "ch8i4ug6lnn4g9hqv7m1"
  ],
  "resources": [
    {
      "id": "chacdk86lnnboviihd7g",
      "type": "host"
    }
  ]
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/groups")
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
  CURLOPT_URL => 'https://api.netbird.io/api/groups',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "name": "devs",
  "peers": [
    "ch8i4ug6lnn4g9hqv7m1"
  ],
  "resources": [
    {
      "id": "chacdk86lnnboviihd7g",
      "type": "host"
    }
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
  "id": "ch8i4ug6lnn4g9hqv7m0",
  "name": "devs",
  "peers_count": 2,
  "resources_count": 5,
  "issued": "api",
  "peers": [
    {
      "id": "chacbco6lnnbn6cg5s90",
      "name": "stage-host-1"
    }
  ],
  "resources": [
    {
      "id": "chacdk86lnnboviihd7g",
      "type": "host"
    }
  ]
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "peers_count": "integer",
  "resources_count": "integer",
  "issued": "string",
  "peers": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "resources": [
    {
      "id": "string",
      "type": "string"
    }
  ]
}
```

***

## Retrieve a Group   (GET /api/groups/{groupId})

Get information about a group

### Path Parameters

**groupId (type: string; required)**

The unique identifier of a group

**GET /api/groups/{groupId} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/groups/{groupId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/groups/{groupId}',
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

url = "https://api.netbird.io/api/groups/{groupId}"

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

  url := "https://api.netbird.io/api/groups/{groupId}"
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

url = URI("https://api.netbird.io/api/groups/{groupId}")

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
  .url("https://api.netbird.io/api/groups/{groupId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/groups/{groupId}',
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
  "id": "ch8i4ug6lnn4g9hqv7m0",
  "name": "devs",
  "peers_count": 2,
  "resources_count": 5,
  "issued": "api",
  "peers": [
    {
      "id": "chacbco6lnnbn6cg5s90",
      "name": "stage-host-1"
    }
  ],
  "resources": [
    {
      "id": "chacdk86lnnboviihd7g",
      "type": "host"
    }
  ]
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "peers_count": "integer",
  "resources_count": "integer",
  "issued": "string",
  "peers": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "resources": [
    {
      "id": "string",
      "type": "string"
    }
  ]
}
```

***

## Update a Group   (PUT /api/groups/{groupId})

Update/Replace a group

### Path Parameters

**groupId (type: string; required)**

The unique identifier of a group

### Request-Body Parameters

**name (type: string; required)**

Group name identifier

**peers (type: string\[]; optional)**

List of peers ids

**resources (type: object\[]; optional)**

**More Information**

**id (type: string; required)**

ID of the resource

**type (type: string; required; values: host, subnet, domain, peer)**

Network resource type based of the address

**PUT /api/groups/{groupId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/groups/{groupId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "devs",
  "peers": [
    "ch8i4ug6lnn4g9hqv7m1"
  ],
  "resources": [
    {
      "id": "chacdk86lnnboviihd7g",
      "type": "host"
    }
  ]
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "devs",
  "peers": [
    "ch8i4ug6lnn4g9hqv7m1"
  ],
  "resources": [
    {
      "id": "chacdk86lnnboviihd7g",
      "type": "host"
    }
  ]
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/groups/{groupId}',
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

url = "https://api.netbird.io/api/groups/{groupId}"
payload = json.dumps({
  "name": "devs",
  "peers": [
    "ch8i4ug6lnn4g9hqv7m1"
  ],
  "resources": [
    {
      "id": "chacdk86lnnboviihd7g",
      "type": "host"
    }
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

  url := "https://api.netbird.io/api/groups/{groupId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "name": "devs",
  "peers": [
    "ch8i4ug6lnn4g9hqv7m1"
  ],
  "resources": [
    {
      "id": "chacdk86lnnboviihd7g",
      "type": "host"
    }
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

url = URI("https://api.netbird.io/api/groups/{groupId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "devs",
  "peers": [
    "ch8i4ug6lnn4g9hqv7m1"
  ],
  "resources": [
    {
      "id": "chacdk86lnnboviihd7g",
      "type": "host"
    }
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
  "name": "devs",
  "peers": [
    "ch8i4ug6lnn4g9hqv7m1"
  ],
  "resources": [
    {
      "id": "chacdk86lnnboviihd7g",
      "type": "host"
    }
  ]
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/groups/{groupId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/groups/{groupId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "name": "devs",
  "peers": [
    "ch8i4ug6lnn4g9hqv7m1"
  ],
  "resources": [
    {
      "id": "chacdk86lnnboviihd7g",
      "type": "host"
    }
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
  "id": "ch8i4ug6lnn4g9hqv7m0",
  "name": "devs",
  "peers_count": 2,
  "resources_count": 5,
  "issued": "api",
  "peers": [
    {
      "id": "chacbco6lnnbn6cg5s90",
      "name": "stage-host-1"
    }
  ],
  "resources": [
    {
      "id": "chacdk86lnnboviihd7g",
      "type": "host"
    }
  ]
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "peers_count": "integer",
  "resources_count": "integer",
  "issued": "string",
  "peers": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "resources": [
    {
      "id": "string",
      "type": "string"
    }
  ]
}
```

***

## Delete a Group   (DELETE /api/groups/{groupId})

Delete a group

### Path Parameters

**groupId (type: string; required)**

The unique identifier of a group

**DELETE /api/groups/{groupId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/groups/{groupId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/groups/{groupId}',
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

url = "https://api.netbird.io/api/groups/{groupId}"

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

  url := "https://api.netbird.io/api/groups/{groupId}"
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

url = URI("https://api.netbird.io/api/groups/{groupId}")

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
  .url("https://api.netbird.io/api/groups/{groupId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/groups/{groupId}',
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
