> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/ipa/resources/ingress-ports.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/ipa/resources/ingress-ports.mdx)

## List all Port Allocations  **cloud-only - cloud-only - This feature is only available in the cloud version of NetBird.**   (GET /api/peers/{peerId}/ingress/ports)

Returns a list of all ingress port allocations for a peer

### Path Parameters

**peerId (type: string; required)**

The unique identifier of a peer

### Query Parameters

**name (type: string; optional)**

Filters ingress port allocations by name

**GET /api/peers/{peerId}/ingress/ports Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/peers/{peerId}/ingress/ports \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/peers/{peerId}/ingress/ports',
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

url = "https://api.netbird.io/api/peers/{peerId}/ingress/ports"

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

  url := "https://api.netbird.io/api/peers/{peerId}/ingress/ports"
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

url = URI("https://api.netbird.io/api/peers/{peerId}/ingress/ports")

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
  .url("https://api.netbird.io/api/peers/{peerId}/ingress/ports")
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
  CURLOPT_URL => 'https://api.netbird.io/api/peers/{peerId}/ingress/ports',
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
    "name": "Ingress Peer Allocation 1",
    "ingress_peer_id": "x7p3kqf2rdd8j5zxw4n9",
    "region": "germany",
    "enabled": true,
    "ingress_ip": "192.34.0.123",
    "port_range_mappings": [
      {
        "translated_start": 80,
        "translated_end": 320,
        "ingress_start": 1080,
        "ingress_end": 1320,
        "protocol": "tcp"
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
    "ingress_peer_id": "string",
    "region": "string",
    "enabled": "boolean",
    "ingress_ip": "string",
    "port_range_mappings": [
      {
        "translated_start": "integer",
        "translated_end": "integer",
        "ingress_start": "integer",
        "ingress_end": "integer",
        "protocol": "string"
      }
    ]
  }
]
```

***

## Create a Port Allocation  **cloud-only - cloud-only - This feature is only available in the cloud version of NetBird.**   (POST /api/peers/{peerId}/ingress/ports)

Creates a new ingress port allocation for a peer

### Path Parameters

**peerId (type: string; required)**

The unique identifier of a peer

### Request-Body Parameters

**name (type: string; required)**

Name of the ingress port allocation

**enabled (type: boolean; required)**

Indicates if an ingress port allocation is enabled

**port\_ranges (type: object\[]; optional)**

**List of port ranges that are forwarded by the ingress peer**

**start (type: integer; required)**

The starting port of the range of forwarded ports

**end (type: integer; required)**

The ending port of the range of forwarded ports

**protocol (type: string; required; values: tcp, udp, tcp/udp)**

The protocol accepted by the port range

**direct\_port (type: object; optional)**

**More Information**

**count (type: integer; required)**

The number of ports to be forwarded

**protocol (type: string; required; values: tcp, udp, tcp/udp)**

The protocol accepted by the port

**POST /api/peers/{peerId}/ingress/ports Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/peers/{peerId}/ingress/ports \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "Ingress Port Allocation 1",
  "enabled": true,
  "port_ranges": [
    {
      "start": 80,
      "end": 320,
      "protocol": "tcp"
    }
  ],
  "direct_port": {
    "count": 5,
    "protocol": "udp"
  }
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "Ingress Port Allocation 1",
  "enabled": true,
  "port_ranges": [
    {
      "start": 80,
      "end": 320,
      "protocol": "tcp"
    }
  ],
  "direct_port": {
    "count": 5,
    "protocol": "udp"
  }
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/peers/{peerId}/ingress/ports',
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

url = "https://api.netbird.io/api/peers/{peerId}/ingress/ports"
payload = json.dumps({
  "name": "Ingress Port Allocation 1",
  "enabled": true,
  "port_ranges": [
    {
      "start": 80,
      "end": 320,
      "protocol": "tcp"
    }
  ],
  "direct_port": {
    "count": 5,
    "protocol": "udp"
  }
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

  url := "https://api.netbird.io/api/peers/{peerId}/ingress/ports"
  method := "POST"
  
  payload := strings.NewReader(`{
  "name": "Ingress Port Allocation 1",
  "enabled": true,
  "port_ranges": [
    {
      "start": 80,
      "end": 320,
      "protocol": "tcp"
    }
  ],
  "direct_port": {
    "count": 5,
    "protocol": "udp"
  }
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

url = URI("https://api.netbird.io/api/peers/{peerId}/ingress/ports")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "Ingress Port Allocation 1",
  "enabled": true,
  "port_ranges": [
    {
      "start": 80,
      "end": 320,
      "protocol": "tcp"
    }
  ],
  "direct_port": {
    "count": 5,
    "protocol": "udp"
  }
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "name": "Ingress Port Allocation 1",
  "enabled": true,
  "port_ranges": [
    {
      "start": 80,
      "end": 320,
      "protocol": "tcp"
    }
  ],
  "direct_port": {
    "count": 5,
    "protocol": "udp"
  }
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/peers/{peerId}/ingress/ports")
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
  CURLOPT_URL => 'https://api.netbird.io/api/peers/{peerId}/ingress/ports',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "name": "Ingress Port Allocation 1",
  "enabled": true,
  "port_ranges": [
    {
      "start": 80,
      "end": 320,
      "protocol": "tcp"
    }
  ],
  "direct_port": {
    "count": 5,
    "protocol": "udp"
  }
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
  "name": "Ingress Peer Allocation 1",
  "ingress_peer_id": "x7p3kqf2rdd8j5zxw4n9",
  "region": "germany",
  "enabled": true,
  "ingress_ip": "192.34.0.123",
  "port_range_mappings": [
    {
      "translated_start": 80,
      "translated_end": 320,
      "ingress_start": 1080,
      "ingress_end": 1320,
      "protocol": "tcp"
    }
  ]
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "ingress_peer_id": "string",
  "region": "string",
  "enabled": "boolean",
  "ingress_ip": "string",
  "port_range_mappings": [
    {
      "translated_start": "integer",
      "translated_end": "integer",
      "ingress_start": "integer",
      "ingress_end": "integer",
      "protocol": "string"
    }
  ]
}
```

***

## Retrieve a Port Allocation  **cloud-only - cloud-only - This feature is only available in the cloud version of NetBird.**   (GET /api/peers/{peerId}/ingress/ports/{allocationId})

Get information about an ingress port allocation

### Path Parameters

**peerId (type: string; required)**

The unique identifier of a peer

**allocationId (type: string; required)**

The unique identifier of an ingress port allocation

**GET /api/peers/{peerId}/ingress/ports/{allocationId} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/peers/{peerId}/ingress/ports/{allocationId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/peers/{peerId}/ingress/ports/{allocationId}',
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

url = "https://api.netbird.io/api/peers/{peerId}/ingress/ports/{allocationId}"

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

  url := "https://api.netbird.io/api/peers/{peerId}/ingress/ports/{allocationId}"
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

url = URI("https://api.netbird.io/api/peers/{peerId}/ingress/ports/{allocationId}")

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
  .url("https://api.netbird.io/api/peers/{peerId}/ingress/ports/{allocationId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/peers/{peerId}/ingress/ports/{allocationId}',
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
  "name": "Ingress Peer Allocation 1",
  "ingress_peer_id": "x7p3kqf2rdd8j5zxw4n9",
  "region": "germany",
  "enabled": true,
  "ingress_ip": "192.34.0.123",
  "port_range_mappings": [
    {
      "translated_start": 80,
      "translated_end": 320,
      "ingress_start": 1080,
      "ingress_end": 1320,
      "protocol": "tcp"
    }
  ]
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "ingress_peer_id": "string",
  "region": "string",
  "enabled": "boolean",
  "ingress_ip": "string",
  "port_range_mappings": [
    {
      "translated_start": "integer",
      "translated_end": "integer",
      "ingress_start": "integer",
      "ingress_end": "integer",
      "protocol": "string"
    }
  ]
}
```

***

## Update a Port Allocation  **cloud-only - cloud-only - This feature is only available in the cloud version of NetBird.**   (PUT /api/peers/{peerId}/ingress/ports/{allocationId})

Update information about an ingress port allocation

### Path Parameters

**peerId (type: string; required)**

The unique identifier of a peer

**allocationId (type: string; required)**

The unique identifier of an ingress port allocation

### Request-Body Parameters

**name (type: string; required)**

Name of the ingress port allocation

**enabled (type: boolean; required)**

Indicates if an ingress port allocation is enabled

**port\_ranges (type: object\[]; optional)**

**List of port ranges that are forwarded by the ingress peer**

**start (type: integer; required)**

The starting port of the range of forwarded ports

**end (type: integer; required)**

The ending port of the range of forwarded ports

**protocol (type: string; required; values: tcp, udp, tcp/udp)**

The protocol accepted by the port range

**direct\_port (type: object; optional)**

**More Information**

**count (type: integer; required)**

The number of ports to be forwarded

**protocol (type: string; required; values: tcp, udp, tcp/udp)**

The protocol accepted by the port

**PUT /api/peers/{peerId}/ingress/ports/{allocationId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/peers/{peerId}/ingress/ports/{allocationId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "Ingress Port Allocation 1",
  "enabled": true,
  "port_ranges": [
    {
      "start": 80,
      "end": 320,
      "protocol": "tcp"
    }
  ],
  "direct_port": {
    "count": 5,
    "protocol": "udp"
  }
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "Ingress Port Allocation 1",
  "enabled": true,
  "port_ranges": [
    {
      "start": 80,
      "end": 320,
      "protocol": "tcp"
    }
  ],
  "direct_port": {
    "count": 5,
    "protocol": "udp"
  }
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/peers/{peerId}/ingress/ports/{allocationId}',
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

url = "https://api.netbird.io/api/peers/{peerId}/ingress/ports/{allocationId}"
payload = json.dumps({
  "name": "Ingress Port Allocation 1",
  "enabled": true,
  "port_ranges": [
    {
      "start": 80,
      "end": 320,
      "protocol": "tcp"
    }
  ],
  "direct_port": {
    "count": 5,
    "protocol": "udp"
  }
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

  url := "https://api.netbird.io/api/peers/{peerId}/ingress/ports/{allocationId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "name": "Ingress Port Allocation 1",
  "enabled": true,
  "port_ranges": [
    {
      "start": 80,
      "end": 320,
      "protocol": "tcp"
    }
  ],
  "direct_port": {
    "count": 5,
    "protocol": "udp"
  }
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

url = URI("https://api.netbird.io/api/peers/{peerId}/ingress/ports/{allocationId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "Ingress Port Allocation 1",
  "enabled": true,
  "port_ranges": [
    {
      "start": 80,
      "end": 320,
      "protocol": "tcp"
    }
  ],
  "direct_port": {
    "count": 5,
    "protocol": "udp"
  }
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "name": "Ingress Port Allocation 1",
  "enabled": true,
  "port_ranges": [
    {
      "start": 80,
      "end": 320,
      "protocol": "tcp"
    }
  ],
  "direct_port": {
    "count": 5,
    "protocol": "udp"
  }
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/peers/{peerId}/ingress/ports/{allocationId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/peers/{peerId}/ingress/ports/{allocationId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "name": "Ingress Port Allocation 1",
  "enabled": true,
  "port_ranges": [
    {
      "start": 80,
      "end": 320,
      "protocol": "tcp"
    }
  ],
  "direct_port": {
    "count": 5,
    "protocol": "udp"
  }
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
  "name": "Ingress Peer Allocation 1",
  "ingress_peer_id": "x7p3kqf2rdd8j5zxw4n9",
  "region": "germany",
  "enabled": true,
  "ingress_ip": "192.34.0.123",
  "port_range_mappings": [
    {
      "translated_start": 80,
      "translated_end": 320,
      "ingress_start": 1080,
      "ingress_end": 1320,
      "protocol": "tcp"
    }
  ]
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "ingress_peer_id": "string",
  "region": "string",
  "enabled": "boolean",
  "ingress_ip": "string",
  "port_range_mappings": [
    {
      "translated_start": "integer",
      "translated_end": "integer",
      "ingress_start": "integer",
      "ingress_end": "integer",
      "protocol": "string"
    }
  ]
}
```

***

## Delete a Port Allocation  **cloud-only - cloud-only - This feature is only available in the cloud version of NetBird.**   (DELETE /api/peers/{peerId}/ingress/ports/{allocationId})

Delete an ingress port allocation

### Path Parameters

**peerId (type: string; required)**

The unique identifier of a peer

**allocationId (type: string; required)**

The unique identifier of an ingress port allocation

**DELETE /api/peers/{peerId}/ingress/ports/{allocationId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/peers/{peerId}/ingress/ports/{allocationId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/peers/{peerId}/ingress/ports/{allocationId}',
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

url = "https://api.netbird.io/api/peers/{peerId}/ingress/ports/{allocationId}"

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

  url := "https://api.netbird.io/api/peers/{peerId}/ingress/ports/{allocationId}"
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

url = URI("https://api.netbird.io/api/peers/{peerId}/ingress/ports/{allocationId}")

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
  .url("https://api.netbird.io/api/peers/{peerId}/ingress/ports/{allocationId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/peers/{peerId}/ingress/ports/{allocationId}',
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

## List all Ingress Peers  **cloud-only - cloud-only - This feature is only available in the cloud version of NetBird.**   (GET /api/ingress/peers)

Returns a list of all ingress peers

**GET /api/ingress/peers Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/ingress/peers \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/ingress/peers',
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

url = "https://api.netbird.io/api/ingress/peers"

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

  url := "https://api.netbird.io/api/ingress/peers"
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

url = URI("https://api.netbird.io/api/ingress/peers")

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
  .url("https://api.netbird.io/api/ingress/peers")
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
  CURLOPT_URL => 'https://api.netbird.io/api/ingress/peers',
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
    "peer_id": "x7p3kqf2rdd8j5zxw4n9",
    "ingress_ip": "192.34.0.123",
    "available_ports": {
      "tcp": 45765,
      "udp": 50000
    },
    "enabled": true,
    "connected": true,
    "fallback": true,
    "region": "germany"
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "peer_id": "string",
    "ingress_ip": "string",
    "available_ports": {
      "tcp": "integer",
      "udp": "integer"
    },
    "enabled": "boolean",
    "connected": "boolean",
    "fallback": "boolean",
    "region": "string"
  }
]
```

***

## Create a Ingress Peer  **cloud-only - cloud-only - This feature is only available in the cloud version of NetBird.**   (POST /api/ingress/peers)

Creates a new ingress peer

### Request-Body Parameters

**peer\_id (type: string; required)**

ID of the peer that is used as an ingress peer

**enabled (type: boolean; required)**

Defines if an ingress peer is enabled

**fallback (type: boolean; required)**

Defines if an ingress peer can be used as a fallback if no ingress peer can be found in the region of the forwarded peer

**POST /api/ingress/peers Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/ingress/peers \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "peer_id": "ch8i4ug6lnn4g9hqv7m0",
  "enabled": true,
  "fallback": true
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "peer_id": "ch8i4ug6lnn4g9hqv7m0",
  "enabled": true,
  "fallback": true
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/ingress/peers',
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

url = "https://api.netbird.io/api/ingress/peers"
payload = json.dumps({
  "peer_id": "ch8i4ug6lnn4g9hqv7m0",
  "enabled": true,
  "fallback": true
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

  url := "https://api.netbird.io/api/ingress/peers"
  method := "POST"
  
  payload := strings.NewReader(`{
  "peer_id": "ch8i4ug6lnn4g9hqv7m0",
  "enabled": true,
  "fallback": true
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

url = URI("https://api.netbird.io/api/ingress/peers")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "peer_id": "ch8i4ug6lnn4g9hqv7m0",
  "enabled": true,
  "fallback": true
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "peer_id": "ch8i4ug6lnn4g9hqv7m0",
  "enabled": true,
  "fallback": true
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/ingress/peers")
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
  CURLOPT_URL => 'https://api.netbird.io/api/ingress/peers',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "peer_id": "ch8i4ug6lnn4g9hqv7m0",
  "enabled": true,
  "fallback": true
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
  "peer_id": "x7p3kqf2rdd8j5zxw4n9",
  "ingress_ip": "192.34.0.123",
  "available_ports": {
    "tcp": 45765,
    "udp": 50000
  },
  "enabled": true,
  "connected": true,
  "fallback": true,
  "region": "germany"
}
```

**Schema**

```json
{
  "id": "string",
  "peer_id": "string",
  "ingress_ip": "string",
  "available_ports": {
    "tcp": "integer",
    "udp": "integer"
  },
  "enabled": "boolean",
  "connected": "boolean",
  "fallback": "boolean",
  "region": "string"
}
```

***

## Retrieve a Ingress Peer  **cloud-only - cloud-only - This feature is only available in the cloud version of NetBird.**   (GET /api/ingress/peers/{ingressPeerId})

Get information about an ingress peer

### Path Parameters

**ingressPeerId (type: string; required)**

The unique identifier of an ingress peer

**GET /api/ingress/peers/{ingressPeerId} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/ingress/peers/{ingressPeerId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/ingress/peers/{ingressPeerId}',
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

url = "https://api.netbird.io/api/ingress/peers/{ingressPeerId}"

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

  url := "https://api.netbird.io/api/ingress/peers/{ingressPeerId}"
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

url = URI("https://api.netbird.io/api/ingress/peers/{ingressPeerId}")

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
  .url("https://api.netbird.io/api/ingress/peers/{ingressPeerId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/ingress/peers/{ingressPeerId}',
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
  "peer_id": "x7p3kqf2rdd8j5zxw4n9",
  "ingress_ip": "192.34.0.123",
  "available_ports": {
    "tcp": 45765,
    "udp": 50000
  },
  "enabled": true,
  "connected": true,
  "fallback": true,
  "region": "germany"
}
```

**Schema**

```json
{
  "id": "string",
  "peer_id": "string",
  "ingress_ip": "string",
  "available_ports": {
    "tcp": "integer",
    "udp": "integer"
  },
  "enabled": "boolean",
  "connected": "boolean",
  "fallback": "boolean",
  "region": "string"
}
```

***

## Update a Ingress Peer  **cloud-only - cloud-only - This feature is only available in the cloud version of NetBird.**   (PUT /api/ingress/peers/{ingressPeerId})

Update information about an ingress peer

### Path Parameters

**ingressPeerId (type: string; required)**

The unique identifier of an ingress peer

### Request-Body Parameters

**enabled (type: boolean; required)**

Defines if an ingress peer is enabled

**fallback (type: boolean; required)**

Defines if an ingress peer can be used as a fallback if no ingress peer can be found in the region of the forwarded peer

**PUT /api/ingress/peers/{ingressPeerId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/ingress/peers/{ingressPeerId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "enabled": true,
  "fallback": true
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "enabled": true,
  "fallback": true
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/ingress/peers/{ingressPeerId}',
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

url = "https://api.netbird.io/api/ingress/peers/{ingressPeerId}"
payload = json.dumps({
  "enabled": true,
  "fallback": true
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

  url := "https://api.netbird.io/api/ingress/peers/{ingressPeerId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "enabled": true,
  "fallback": true
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

url = URI("https://api.netbird.io/api/ingress/peers/{ingressPeerId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "enabled": true,
  "fallback": true
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "enabled": true,
  "fallback": true
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/ingress/peers/{ingressPeerId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/ingress/peers/{ingressPeerId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "enabled": true,
  "fallback": true
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
  "peer_id": "x7p3kqf2rdd8j5zxw4n9",
  "ingress_ip": "192.34.0.123",
  "available_ports": {
    "tcp": 45765,
    "udp": 50000
  },
  "enabled": true,
  "connected": true,
  "fallback": true,
  "region": "germany"
}
```

**Schema**

```json
{
  "id": "string",
  "peer_id": "string",
  "ingress_ip": "string",
  "available_ports": {
    "tcp": "integer",
    "udp": "integer"
  },
  "enabled": "boolean",
  "connected": "boolean",
  "fallback": "boolean",
  "region": "string"
}
```

***

## Delete a Ingress Peer  **cloud-only - cloud-only - This feature is only available in the cloud version of NetBird.**   (DELETE /api/ingress/peers/{ingressPeerId})

Delete an ingress peer

### Path Parameters

**ingressPeerId (type: string; required)**

The unique identifier of an ingress peer

**DELETE /api/ingress/peers/{ingressPeerId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/ingress/peers/{ingressPeerId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/ingress/peers/{ingressPeerId}',
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

url = "https://api.netbird.io/api/ingress/peers/{ingressPeerId}"

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

  url := "https://api.netbird.io/api/ingress/peers/{ingressPeerId}"
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

url = URI("https://api.netbird.io/api/ingress/peers/{ingressPeerId}")

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
  .url("https://api.netbird.io/api/ingress/peers/{ingressPeerId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/ingress/peers/{ingressPeerId}',
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
