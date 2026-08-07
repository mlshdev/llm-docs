> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/ipa/resources/dns-zones.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/ipa/resources/dns-zones.mdx)

## List all DNS Zones   (GET /api/dns/zones)

Returns a list of all custom DNS zones

**GET /api/dns/zones Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/dns/zones \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/dns/zones',
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

url = "https://api.netbird.io/api/dns/zones"

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

  url := "https://api.netbird.io/api/dns/zones"
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

url = URI("https://api.netbird.io/api/dns/zones")

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
  .url("https://api.netbird.io/api/dns/zones")
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
  CURLOPT_URL => 'https://api.netbird.io/api/dns/zones',
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
    "records": [
      {
        "id": "ch8i4ug6lnn4g9hqv7m0",
        "name": "www.example.com",
        "type": "A",
        "content": "192.168.1.1",
        "ttl": 300
      }
    ],
    "name": "Office Zone",
    "domain": "example.com",
    "enabled": {
      "description": "Zone status",
      "type": "boolean",
      "default": true
    },
    "enable_search_domain": false,
    "distribution_groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ]
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "records": [
      {
        "id": "string",
        "name": "string",
        "type": "string",
        "content": "string",
        "ttl": "integer"
      }
    ],
    "name": "string",
    "domain": "string",
    "enabled": "boolean",
    "enable_search_domain": "boolean",
    "distribution_groups": [
      "string"
    ]
  }
]
```

***

## Create a DNS Zone   (POST /api/dns/zones)

Creates a new custom DNS zone

### Request-Body Parameters

**name (type: string; required; minLen: 1; maxLen: 255)**

Zone name identifier

**domain (type: string; required)**

Zone domain (FQDN)

**enabled (type: boolean; optional)**

Zone status

**enable\_search\_domain (type: boolean; required)**

Enable this zone as a search domain

**distribution\_groups (type: string\[]; required)**

Group IDs that defines groups of peers that will resolve this zone

**POST /api/dns/zones Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/dns/zones \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "Office Zone",
  "domain": "example.com",
  "enabled": {
    "description": "Zone status",
    "type": "boolean",
    "default": true
  },
  "enable_search_domain": false,
  "distribution_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ]
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "Office Zone",
  "domain": "example.com",
  "enabled": {
    "description": "Zone status",
    "type": "boolean",
    "default": true
  },
  "enable_search_domain": false,
  "distribution_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ]
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/dns/zones',
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

url = "https://api.netbird.io/api/dns/zones"
payload = json.dumps({
  "name": "Office Zone",
  "domain": "example.com",
  "enabled": {
    "description": "Zone status",
    "type": "boolean",
    "default": true
  },
  "enable_search_domain": false,
  "distribution_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
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

  url := "https://api.netbird.io/api/dns/zones"
  method := "POST"
  
  payload := strings.NewReader(`{
  "name": "Office Zone",
  "domain": "example.com",
  "enabled": {
    "description": "Zone status",
    "type": "boolean",
    "default": true
  },
  "enable_search_domain": false,
  "distribution_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
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

url = URI("https://api.netbird.io/api/dns/zones")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "Office Zone",
  "domain": "example.com",
  "enabled": {
    "description": "Zone status",
    "type": "boolean",
    "default": true
  },
  "enable_search_domain": false,
  "distribution_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
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
  "name": "Office Zone",
  "domain": "example.com",
  "enabled": {
    "description": "Zone status",
    "type": "boolean",
    "default": true
  },
  "enable_search_domain": false,
  "distribution_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ]
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/dns/zones")
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
  CURLOPT_URL => 'https://api.netbird.io/api/dns/zones',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "name": "Office Zone",
  "domain": "example.com",
  "enabled": {
    "description": "Zone status",
    "type": "boolean",
    "default": true
  },
  "enable_search_domain": false,
  "distribution_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
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
  "records": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "name": "www.example.com",
      "type": "A",
      "content": "192.168.1.1",
      "ttl": 300
    }
  ],
  "name": "Office Zone",
  "domain": "example.com",
  "enabled": {
    "description": "Zone status",
    "type": "boolean",
    "default": true
  },
  "enable_search_domain": false,
  "distribution_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ]
}
```

**Schema**

```json
{
  "id": "string",
  "records": [
    {
      "id": "string",
      "name": "string",
      "type": "string",
      "content": "string",
      "ttl": "integer"
    }
  ],
  "name": "string",
  "domain": "string",
  "enabled": "boolean",
  "enable_search_domain": "boolean",
  "distribution_groups": [
    "string"
  ]
}
```

***

## Retrieve a DNS Zone   (GET /api/dns/zones/{zoneId})

Returns information about a specific DNS zone

### Path Parameters

**zoneId (type: string; required)**

The unique identifier of a zone

**GET /api/dns/zones/{zoneId} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/dns/zones/{zoneId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/dns/zones/{zoneId}',
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

url = "https://api.netbird.io/api/dns/zones/{zoneId}"

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

  url := "https://api.netbird.io/api/dns/zones/{zoneId}"
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

url = URI("https://api.netbird.io/api/dns/zones/{zoneId}")

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
  .url("https://api.netbird.io/api/dns/zones/{zoneId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/dns/zones/{zoneId}',
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
  "records": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "name": "www.example.com",
      "type": "A",
      "content": "192.168.1.1",
      "ttl": 300
    }
  ],
  "name": "Office Zone",
  "domain": "example.com",
  "enabled": {
    "description": "Zone status",
    "type": "boolean",
    "default": true
  },
  "enable_search_domain": false,
  "distribution_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ]
}
```

**Schema**

```json
{
  "id": "string",
  "records": [
    {
      "id": "string",
      "name": "string",
      "type": "string",
      "content": "string",
      "ttl": "integer"
    }
  ],
  "name": "string",
  "domain": "string",
  "enabled": "boolean",
  "enable_search_domain": "boolean",
  "distribution_groups": [
    "string"
  ]
}
```

***

## Update a DNS Zone   (PUT /api/dns/zones/{zoneId})

Updates a custom DNS zone

### Path Parameters

**zoneId (type: string; required)**

The unique identifier of a zone

### Request-Body Parameters

**name (type: string; required; minLen: 1; maxLen: 255)**

Zone name identifier

**domain (type: string; required)**

Zone domain (FQDN)

**enabled (type: boolean; optional)**

Zone status

**enable\_search\_domain (type: boolean; required)**

Enable this zone as a search domain

**distribution\_groups (type: string\[]; required)**

Group IDs that defines groups of peers that will resolve this zone

**PUT /api/dns/zones/{zoneId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/dns/zones/{zoneId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "Office Zone",
  "domain": "example.com",
  "enabled": {
    "description": "Zone status",
    "type": "boolean",
    "default": true
  },
  "enable_search_domain": false,
  "distribution_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ]
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "Office Zone",
  "domain": "example.com",
  "enabled": {
    "description": "Zone status",
    "type": "boolean",
    "default": true
  },
  "enable_search_domain": false,
  "distribution_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ]
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/dns/zones/{zoneId}',
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

url = "https://api.netbird.io/api/dns/zones/{zoneId}"
payload = json.dumps({
  "name": "Office Zone",
  "domain": "example.com",
  "enabled": {
    "description": "Zone status",
    "type": "boolean",
    "default": true
  },
  "enable_search_domain": false,
  "distribution_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
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

  url := "https://api.netbird.io/api/dns/zones/{zoneId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "name": "Office Zone",
  "domain": "example.com",
  "enabled": {
    "description": "Zone status",
    "type": "boolean",
    "default": true
  },
  "enable_search_domain": false,
  "distribution_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
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

url = URI("https://api.netbird.io/api/dns/zones/{zoneId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "Office Zone",
  "domain": "example.com",
  "enabled": {
    "description": "Zone status",
    "type": "boolean",
    "default": true
  },
  "enable_search_domain": false,
  "distribution_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
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
  "name": "Office Zone",
  "domain": "example.com",
  "enabled": {
    "description": "Zone status",
    "type": "boolean",
    "default": true
  },
  "enable_search_domain": false,
  "distribution_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ]
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/dns/zones/{zoneId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/dns/zones/{zoneId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "name": "Office Zone",
  "domain": "example.com",
  "enabled": {
    "description": "Zone status",
    "type": "boolean",
    "default": true
  },
  "enable_search_domain": false,
  "distribution_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
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
  "records": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "name": "www.example.com",
      "type": "A",
      "content": "192.168.1.1",
      "ttl": 300
    }
  ],
  "name": "Office Zone",
  "domain": "example.com",
  "enabled": {
    "description": "Zone status",
    "type": "boolean",
    "default": true
  },
  "enable_search_domain": false,
  "distribution_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ]
}
```

**Schema**

```json
{
  "id": "string",
  "records": [
    {
      "id": "string",
      "name": "string",
      "type": "string",
      "content": "string",
      "ttl": "integer"
    }
  ],
  "name": "string",
  "domain": "string",
  "enabled": "boolean",
  "enable_search_domain": "boolean",
  "distribution_groups": [
    "string"
  ]
}
```

***

## Delete a DNS Zone   (DELETE /api/dns/zones/{zoneId})

Deletes a custom DNS zone

### Path Parameters

**zoneId (type: string; required)**

The unique identifier of a zone

**DELETE /api/dns/zones/{zoneId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/dns/zones/{zoneId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/dns/zones/{zoneId}',
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

url = "https://api.netbird.io/api/dns/zones/{zoneId}"

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

  url := "https://api.netbird.io/api/dns/zones/{zoneId}"
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

url = URI("https://api.netbird.io/api/dns/zones/{zoneId}")

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
  .url("https://api.netbird.io/api/dns/zones/{zoneId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/dns/zones/{zoneId}',
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

## List all DNS Records   (GET /api/dns/zones/{zoneId}/records)

Returns a list of all DNS records in a zone

### Path Parameters

**zoneId (type: string; required)**

The unique identifier of a zone

**GET /api/dns/zones/{zoneId}/records Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/dns/zones/{zoneId}/records \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/dns/zones/{zoneId}/records',
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

url = "https://api.netbird.io/api/dns/zones/{zoneId}/records"

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

  url := "https://api.netbird.io/api/dns/zones/{zoneId}/records"
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

url = URI("https://api.netbird.io/api/dns/zones/{zoneId}/records")

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
  .url("https://api.netbird.io/api/dns/zones/{zoneId}/records")
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
  CURLOPT_URL => 'https://api.netbird.io/api/dns/zones/{zoneId}/records',
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
    "name": "www.example.com",
    "type": "A",
    "content": "192.168.1.1",
    "ttl": 300
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "name": "string",
    "type": "string",
    "content": "string",
    "ttl": "integer"
  }
]
```

***

## Create a DNS Record   (POST /api/dns/zones/{zoneId}/records)

Creates a new DNS record in a zone

### Path Parameters

**zoneId (type: string; required)**

The unique identifier of a zone

### Request-Body Parameters

**name (type: string; required)**

FQDN for the DNS record. Must be a subdomain within or match the zone's domain.

**type (type: string; required; values: A, AAAA, CNAME)**

DNS record type

**content (type: string; required; minLen: 1; maxLen: 255)**

DNS record content (IP address for A/AAAA, domain for CNAME)

**ttl (type: integer; required; min: 0)**

Time to live in seconds

**POST /api/dns/zones/{zoneId}/records Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/dns/zones/{zoneId}/records \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "www.example.com",
  "type": "A",
  "content": "192.168.1.1",
  "ttl": 300
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "www.example.com",
  "type": "A",
  "content": "192.168.1.1",
  "ttl": 300
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/dns/zones/{zoneId}/records',
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

url = "https://api.netbird.io/api/dns/zones/{zoneId}/records"
payload = json.dumps({
  "name": "www.example.com",
  "type": "A",
  "content": "192.168.1.1",
  "ttl": 300
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

  url := "https://api.netbird.io/api/dns/zones/{zoneId}/records"
  method := "POST"
  
  payload := strings.NewReader(`{
  "name": "www.example.com",
  "type": "A",
  "content": "192.168.1.1",
  "ttl": 300
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

url = URI("https://api.netbird.io/api/dns/zones/{zoneId}/records")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "www.example.com",
  "type": "A",
  "content": "192.168.1.1",
  "ttl": 300
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "name": "www.example.com",
  "type": "A",
  "content": "192.168.1.1",
  "ttl": 300
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/dns/zones/{zoneId}/records")
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
  CURLOPT_URL => 'https://api.netbird.io/api/dns/zones/{zoneId}/records',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "name": "www.example.com",
  "type": "A",
  "content": "192.168.1.1",
  "ttl": 300
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
  "name": "www.example.com",
  "type": "A",
  "content": "192.168.1.1",
  "ttl": 300
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "type": "string",
  "content": "string",
  "ttl": "integer"
}
```

***

## Retrieve a DNS Record   (GET /api/dns/zones/{zoneId}/records/{recordId})

Returns information about a specific DNS record

### Path Parameters

**zoneId (type: string; required)**

The unique identifier of a zone

**recordId (type: string; required)**

The unique identifier of a DNS record

**GET /api/dns/zones/{zoneId}/records/{recordId} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/dns/zones/{zoneId}/records/{recordId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/dns/zones/{zoneId}/records/{recordId}',
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

url = "https://api.netbird.io/api/dns/zones/{zoneId}/records/{recordId}"

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

  url := "https://api.netbird.io/api/dns/zones/{zoneId}/records/{recordId}"
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

url = URI("https://api.netbird.io/api/dns/zones/{zoneId}/records/{recordId}")

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
  .url("https://api.netbird.io/api/dns/zones/{zoneId}/records/{recordId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/dns/zones/{zoneId}/records/{recordId}',
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
  "name": "www.example.com",
  "type": "A",
  "content": "192.168.1.1",
  "ttl": 300
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "type": "string",
  "content": "string",
  "ttl": "integer"
}
```

***

## Update a DNS Record   (PUT /api/dns/zones/{zoneId}/records/{recordId})

Updates a DNS record in a zone

### Path Parameters

**zoneId (type: string; required)**

The unique identifier of a zone

**recordId (type: string; required)**

The unique identifier of a DNS record

### Request-Body Parameters

**name (type: string; required)**

FQDN for the DNS record. Must be a subdomain within or match the zone's domain.

**type (type: string; required; values: A, AAAA, CNAME)**

DNS record type

**content (type: string; required; minLen: 1; maxLen: 255)**

DNS record content (IP address for A/AAAA, domain for CNAME)

**ttl (type: integer; required; min: 0)**

Time to live in seconds

**PUT /api/dns/zones/{zoneId}/records/{recordId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/dns/zones/{zoneId}/records/{recordId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "www.example.com",
  "type": "A",
  "content": "192.168.1.1",
  "ttl": 300
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "www.example.com",
  "type": "A",
  "content": "192.168.1.1",
  "ttl": 300
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/dns/zones/{zoneId}/records/{recordId}',
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

url = "https://api.netbird.io/api/dns/zones/{zoneId}/records/{recordId}"
payload = json.dumps({
  "name": "www.example.com",
  "type": "A",
  "content": "192.168.1.1",
  "ttl": 300
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

  url := "https://api.netbird.io/api/dns/zones/{zoneId}/records/{recordId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "name": "www.example.com",
  "type": "A",
  "content": "192.168.1.1",
  "ttl": 300
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

url = URI("https://api.netbird.io/api/dns/zones/{zoneId}/records/{recordId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "www.example.com",
  "type": "A",
  "content": "192.168.1.1",
  "ttl": 300
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "name": "www.example.com",
  "type": "A",
  "content": "192.168.1.1",
  "ttl": 300
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/dns/zones/{zoneId}/records/{recordId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/dns/zones/{zoneId}/records/{recordId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "name": "www.example.com",
  "type": "A",
  "content": "192.168.1.1",
  "ttl": 300
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
  "name": "www.example.com",
  "type": "A",
  "content": "192.168.1.1",
  "ttl": 300
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "type": "string",
  "content": "string",
  "ttl": "integer"
}
```

***

## Delete a DNS Record   (DELETE /api/dns/zones/{zoneId}/records/{recordId})

Deletes a DNS record from a zone

### Path Parameters

**zoneId (type: string; required)**

The unique identifier of a zone

**recordId (type: string; required)**

The unique identifier of a DNS record

**DELETE /api/dns/zones/{zoneId}/records/{recordId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/dns/zones/{zoneId}/records/{recordId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/dns/zones/{zoneId}/records/{recordId}',
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

url = "https://api.netbird.io/api/dns/zones/{zoneId}/records/{recordId}"

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

  url := "https://api.netbird.io/api/dns/zones/{zoneId}/records/{recordId}"
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

url = URI("https://api.netbird.io/api/dns/zones/{zoneId}/records/{recordId}")

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
  .url("https://api.netbird.io/api/dns/zones/{zoneId}/records/{recordId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/dns/zones/{zoneId}/records/{recordId}',
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
