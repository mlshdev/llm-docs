> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/ipa/resources/setup-keys.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/ipa/resources/setup-keys.mdx)

## List all Setup Keys   (GET /api/setup-keys)

Returns a list of all Setup Keys

**GET /api/setup-keys Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/setup-keys \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/setup-keys',
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

url = "https://api.netbird.io/api/setup-keys"

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

  url := "https://api.netbird.io/api/setup-keys"
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

url = URI("https://api.netbird.io/api/setup-keys")

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
  .url("https://api.netbird.io/api/setup-keys")
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
  CURLOPT_URL => 'https://api.netbird.io/api/setup-keys',
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
    "id": 2531583362,
    "name": "Default key",
    "expires": "2023-06-01T14:47:22.291057Z",
    "type": "reusable",
    "valid": true,
    "revoked": false,
    "used_times": 2,
    "last_used": "2023-05-05T09:00:35.477782Z",
    "state": "valid",
    "auto_groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ],
    "updated_at": "2023-05-05T09:00:35.477782Z",
    "usage_limit": 0,
    "ephemeral": true,
    "allow_extra_dns_labels": true,
    "key": "A6160****"
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "name": "string",
    "expires": "string",
    "type": "string",
    "valid": "boolean",
    "revoked": "boolean",
    "used_times": "integer",
    "last_used": "string",
    "state": "string",
    "auto_groups": [
      "string"
    ],
    "updated_at": "string",
    "usage_limit": "integer",
    "ephemeral": "boolean",
    "allow_extra_dns_labels": "boolean",
    "key": "string"
  }
]
```

***

## Create a Setup Key   (POST /api/setup-keys)

Creates a setup key

### Request-Body Parameters

**name (type: string; required)**

Setup Key name

**type (type: string; required)**

Setup key type, one-off for single time usage and reusable

**expires\_in (type: integer; required; min: 86400; max: 31536000)**

Expiration time in seconds

**auto\_groups (type: string\[]; required)**

List of group IDs to auto-assign to peers registered with this key

**usage\_limit (type: integer; required)**

A number of times this key can be used. The value of 0 indicates the unlimited usage.

**ephemeral (type: boolean; optional)**

Indicate that the peer will be ephemeral or not

**allow\_extra\_dns\_labels (type: boolean; optional)**

Allow extra DNS labels to be added to the peer

**POST /api/setup-keys Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/setup-keys \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "Default key",
  "type": "reusable",
  "expires_in": 86400,
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "usage_limit": 0,
  "ephemeral": true,
  "allow_extra_dns_labels": true
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "Default key",
  "type": "reusable",
  "expires_in": 86400,
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "usage_limit": 0,
  "ephemeral": true,
  "allow_extra_dns_labels": true
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/setup-keys',
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

url = "https://api.netbird.io/api/setup-keys"
payload = json.dumps({
  "name": "Default key",
  "type": "reusable",
  "expires_in": 86400,
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "usage_limit": 0,
  "ephemeral": true,
  "allow_extra_dns_labels": true
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

  url := "https://api.netbird.io/api/setup-keys"
  method := "POST"
  
  payload := strings.NewReader(`{
  "name": "Default key",
  "type": "reusable",
  "expires_in": 86400,
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "usage_limit": 0,
  "ephemeral": true,
  "allow_extra_dns_labels": true
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

url = URI("https://api.netbird.io/api/setup-keys")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "Default key",
  "type": "reusable",
  "expires_in": 86400,
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "usage_limit": 0,
  "ephemeral": true,
  "allow_extra_dns_labels": true
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "name": "Default key",
  "type": "reusable",
  "expires_in": 86400,
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "usage_limit": 0,
  "ephemeral": true,
  "allow_extra_dns_labels": true
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/setup-keys")
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
  CURLOPT_URL => 'https://api.netbird.io/api/setup-keys',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "name": "Default key",
  "type": "reusable",
  "expires_in": 86400,
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "usage_limit": 0,
  "ephemeral": true,
  "allow_extra_dns_labels": true
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
  "id": 2531583362,
  "name": "Default key",
  "expires": "2023-06-01T14:47:22.291057Z",
  "type": "reusable",
  "valid": true,
  "revoked": false,
  "used_times": 2,
  "last_used": "2023-05-05T09:00:35.477782Z",
  "state": "valid",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "updated_at": "2023-05-05T09:00:35.477782Z",
  "usage_limit": 0,
  "ephemeral": true,
  "allow_extra_dns_labels": true,
  "key": "A616097E-FCF0-48FA-9354-CA4A61142761"
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "expires": "string",
  "type": "string",
  "valid": "boolean",
  "revoked": "boolean",
  "used_times": "integer",
  "last_used": "string",
  "state": "string",
  "auto_groups": [
    "string"
  ],
  "updated_at": "string",
  "usage_limit": "integer",
  "ephemeral": "boolean",
  "allow_extra_dns_labels": "boolean",
  "key": "string"
}
```

***

## Retrieve a Setup Key   (GET /api/setup-keys/{keyId})

Get information about a setup key

### Path Parameters

**keyId (type: string; required)**

The unique identifier of a setup key

**GET /api/setup-keys/{keyId} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/setup-keys/{keyId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/setup-keys/{keyId}',
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

url = "https://api.netbird.io/api/setup-keys/{keyId}"

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

  url := "https://api.netbird.io/api/setup-keys/{keyId}"
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

url = URI("https://api.netbird.io/api/setup-keys/{keyId}")

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
  .url("https://api.netbird.io/api/setup-keys/{keyId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/setup-keys/{keyId}',
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
  "id": 2531583362,
  "name": "Default key",
  "expires": "2023-06-01T14:47:22.291057Z",
  "type": "reusable",
  "valid": true,
  "revoked": false,
  "used_times": 2,
  "last_used": "2023-05-05T09:00:35.477782Z",
  "state": "valid",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "updated_at": "2023-05-05T09:00:35.477782Z",
  "usage_limit": 0,
  "ephemeral": true,
  "allow_extra_dns_labels": true,
  "key": "A6160****"
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "expires": "string",
  "type": "string",
  "valid": "boolean",
  "revoked": "boolean",
  "used_times": "integer",
  "last_used": "string",
  "state": "string",
  "auto_groups": [
    "string"
  ],
  "updated_at": "string",
  "usage_limit": "integer",
  "ephemeral": "boolean",
  "allow_extra_dns_labels": "boolean",
  "key": "string"
}
```

***

## Update a Setup Key   (PUT /api/setup-keys/{keyId})

Update information about a setup key

### Path Parameters

**keyId (type: string; required)**

The unique identifier of a setup key

### Request-Body Parameters

**revoked (type: boolean; required)**

Setup key revocation status

**auto\_groups (type: string\[]; required)**

List of group IDs to auto-assign to peers registered with this key

**PUT /api/setup-keys/{keyId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/setup-keys/{keyId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "revoked": false,
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ]
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "revoked": false,
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ]
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/setup-keys/{keyId}',
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

url = "https://api.netbird.io/api/setup-keys/{keyId}"
payload = json.dumps({
  "revoked": false,
  "auto_groups": [
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

  url := "https://api.netbird.io/api/setup-keys/{keyId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "revoked": false,
  "auto_groups": [
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

url = URI("https://api.netbird.io/api/setup-keys/{keyId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "revoked": false,
  "auto_groups": [
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
  "revoked": false,
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ]
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/setup-keys/{keyId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/setup-keys/{keyId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "revoked": false,
  "auto_groups": [
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
  "id": 2531583362,
  "name": "Default key",
  "expires": "2023-06-01T14:47:22.291057Z",
  "type": "reusable",
  "valid": true,
  "revoked": false,
  "used_times": 2,
  "last_used": "2023-05-05T09:00:35.477782Z",
  "state": "valid",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "updated_at": "2023-05-05T09:00:35.477782Z",
  "usage_limit": 0,
  "ephemeral": true,
  "allow_extra_dns_labels": true,
  "key": "A6160****"
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "expires": "string",
  "type": "string",
  "valid": "boolean",
  "revoked": "boolean",
  "used_times": "integer",
  "last_used": "string",
  "state": "string",
  "auto_groups": [
    "string"
  ],
  "updated_at": "string",
  "usage_limit": "integer",
  "ephemeral": "boolean",
  "allow_extra_dns_labels": "boolean",
  "key": "string"
}
```

***

## Delete a Setup Key   (DELETE /api/setup-keys/{keyId})

Delete a Setup Key

### Path Parameters

**keyId (type: string; required)**

The unique identifier of a setup key

**DELETE /api/setup-keys/{keyId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/setup-keys/{keyId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/setup-keys/{keyId}',
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

url = "https://api.netbird.io/api/setup-keys/{keyId}"

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

  url := "https://api.netbird.io/api/setup-keys/{keyId}"
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

url = URI("https://api.netbird.io/api/setup-keys/{keyId}")

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
  .url("https://api.netbird.io/api/setup-keys/{keyId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/setup-keys/{keyId}',
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
