> Release-pinned source for NetBird v0.77.1: [netbirdio/docs@d905fda2a3f04a2066746875d09e51a3fe62dfed:src/pages/ipa/resources/peers.mdx](https://github.com/netbirdio/docs/blob/d905fda2a3f04a2066746875d09e51a3fe62dfed/src/pages/ipa/resources/peers.mdx)

## List all Peers   (GET /api/peers)

Returns a list of all peers

### Query Parameters

**name (type: string; optional)**

Filter peers by name

**ip (type: string; optional)**

Filter peers by IP address

**GET /api/peers Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/peers \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/peers',
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

url = "https://api.netbird.io/api/peers"

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

  url := "https://api.netbird.io/api/peers"
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

url = URI("https://api.netbird.io/api/peers")

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
  .url("https://api.netbird.io/api/peers")
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
  CURLOPT_URL => 'https://api.netbird.io/api/peers',
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
    "id": "chacbco6lnnbn6cg5s90",
    "name": "stage-host-1",
    "created_at": "2023-05-05T09:00:35.477782Z",
    "ip": "10.64.0.1",
    "ipv6": "fd00:4e42:ab12::1",
    "connection_ip": "35.64.0.1",
    "connected": true,
    "last_seen": "2023-05-05T10:05:26.420578Z",
    "os": "Darwin 13.2.1",
    "kernel_version": "23.2.0",
    "geoname_id": 2643743,
    "version": "0.14.0",
    "groups": [
      {
        "id": "ch8i4ug6lnn4g9hqv7m0",
        "name": "devs",
        "peers_count": 2,
        "resources_count": 5,
        "issued": "api"
      }
    ],
    "ssh_enabled": true,
    "user_id": "google-oauth2|277474792786460067937",
    "hostname": "stage-host-1",
    "ui_version": "0.14.0",
    "dns_label": "stage-host-1.netbird.cloud",
    "login_expiration_enabled": false,
    "login_expired": false,
    "last_login": "2023-05-05T09:00:35.477782Z",
    "inactivity_expiration_enabled": false,
    "approval_required": true,
    "disapproval_reason": {
      "description": "(Cloud only) Reason why the peer requires approval",
      "type": "string"
    },
    "country_code": "DE",
    "city_name": "Berlin",
    "serial_number": "C02XJ0J0JGH7",
    "extra_dns_labels": [
      "stage-host-1"
    ],
    "ephemeral": false,
    "local_flags": {
      "rosenpass_enabled": true,
      "rosenpass_permissive": false,
      "server_ssh_allowed": true,
      "disable_client_routes": false,
      "disable_server_routes": false,
      "disable_dns": false,
      "disable_firewall": false,
      "block_lan_access": false,
      "block_inbound": false,
      "lazy_connection_enabled": false
    },
    "accessible_peers_count": 5
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "name": "string",
    "created_at": "string",
    "ip": "string",
    "ipv6": "string",
    "connection_ip": "string",
    "connected": "boolean",
    "last_seen": "string",
    "os": "string",
    "kernel_version": "string",
    "geoname_id": "integer",
    "version": "string",
    "groups": [
      {
        "id": "string",
        "name": "string",
        "peers_count": "integer",
        "resources_count": "integer",
        "issued": "string"
      }
    ],
    "ssh_enabled": "boolean",
    "user_id": "string",
    "hostname": "string",
    "ui_version": "string",
    "dns_label": "string",
    "login_expiration_enabled": "boolean",
    "login_expired": "boolean",
    "last_login": "string",
    "inactivity_expiration_enabled": "boolean",
    "approval_required": "boolean",
    "disapproval_reason": "string",
    "country_code": "string",
    "city_name": "string",
    "serial_number": "string",
    "extra_dns_labels": [
      "string"
    ],
    "ephemeral": "boolean",
    "local_flags": {
      "rosenpass_enabled": "boolean",
      "rosenpass_permissive": "boolean",
      "server_ssh_allowed": "boolean",
      "disable_client_routes": "boolean",
      "disable_server_routes": "boolean",
      "disable_dns": "boolean",
      "disable_firewall": "boolean",
      "block_lan_access": "boolean",
      "block_inbound": "boolean",
      "lazy_connection_enabled": "boolean"
    },
    "accessible_peers_count": "integer"
  }
]
```

***

## Retrieve a Peer   (GET /api/peers/{peerId})

Get information about a peer

### Path Parameters

**peerId (type: string; required)**

The unique identifier of a peer

**GET /api/peers/{peerId} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/peers/{peerId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/peers/{peerId}',
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

url = "https://api.netbird.io/api/peers/{peerId}"

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

  url := "https://api.netbird.io/api/peers/{peerId}"
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

url = URI("https://api.netbird.io/api/peers/{peerId}")

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
  .url("https://api.netbird.io/api/peers/{peerId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/peers/{peerId}',
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
  "id": "chacbco6lnnbn6cg5s90",
  "name": "stage-host-1",
  "created_at": "2023-05-05T09:00:35.477782Z",
  "ip": "10.64.0.1",
  "ipv6": "fd00:4e42:ab12::1",
  "connection_ip": "35.64.0.1",
  "connected": true,
  "last_seen": "2023-05-05T10:05:26.420578Z",
  "os": "Darwin 13.2.1",
  "kernel_version": "23.2.0",
  "geoname_id": 2643743,
  "version": "0.14.0",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "name": "devs",
      "peers_count": 2,
      "resources_count": 5,
      "issued": "api"
    }
  ],
  "ssh_enabled": true,
  "user_id": "google-oauth2|277474792786460067937",
  "hostname": "stage-host-1",
  "ui_version": "0.14.0",
  "dns_label": "stage-host-1.netbird.cloud",
  "login_expiration_enabled": false,
  "login_expired": false,
  "last_login": "2023-05-05T09:00:35.477782Z",
  "inactivity_expiration_enabled": false,
  "approval_required": true,
  "disapproval_reason": {
    "description": "(Cloud only) Reason why the peer requires approval",
    "type": "string"
  },
  "country_code": "DE",
  "city_name": "Berlin",
  "serial_number": "C02XJ0J0JGH7",
  "extra_dns_labels": [
    "stage-host-1"
  ],
  "ephemeral": false,
  "local_flags": {
    "rosenpass_enabled": true,
    "rosenpass_permissive": false,
    "server_ssh_allowed": true,
    "disable_client_routes": false,
    "disable_server_routes": false,
    "disable_dns": false,
    "disable_firewall": false,
    "block_lan_access": false,
    "block_inbound": false,
    "lazy_connection_enabled": false
  }
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "created_at": "string",
  "ip": "string",
  "ipv6": "string",
  "connection_ip": "string",
  "connected": "boolean",
  "last_seen": "string",
  "os": "string",
  "kernel_version": "string",
  "geoname_id": "integer",
  "version": "string",
  "groups": [
    {
      "id": "string",
      "name": "string",
      "peers_count": "integer",
      "resources_count": "integer",
      "issued": "string"
    }
  ],
  "ssh_enabled": "boolean",
  "user_id": "string",
  "hostname": "string",
  "ui_version": "string",
  "dns_label": "string",
  "login_expiration_enabled": "boolean",
  "login_expired": "boolean",
  "last_login": "string",
  "inactivity_expiration_enabled": "boolean",
  "approval_required": "boolean",
  "disapproval_reason": "string",
  "country_code": "string",
  "city_name": "string",
  "serial_number": "string",
  "extra_dns_labels": [
    "string"
  ],
  "ephemeral": "boolean",
  "local_flags": {
    "rosenpass_enabled": "boolean",
    "rosenpass_permissive": "boolean",
    "server_ssh_allowed": "boolean",
    "disable_client_routes": "boolean",
    "disable_server_routes": "boolean",
    "disable_dns": "boolean",
    "disable_firewall": "boolean",
    "block_lan_access": "boolean",
    "block_inbound": "boolean",
    "lazy_connection_enabled": "boolean"
  }
}
```

***

## Update a Peer   (PUT /api/peers/{peerId})

Update information about a peer

### Path Parameters

**peerId (type: string; required)**

The unique identifier of a peer

### Request-Body Parameters

**name (type: string; required)**

**ssh\_enabled (type: boolean; required)**

**login\_expiration\_enabled (type: boolean; required)**

**inactivity\_expiration\_enabled (type: boolean; required)**

**approval\_required (type: boolean; optional)**

(Cloud only) Indicates whether peer needs approval

**ip (type: string; optional)**

Peer's IP address

**ipv6 (type: string; optional)**

Peer's IPv6 overlay address. Omitted if IPv6 is not enabled for the account.

**PUT /api/peers/{peerId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/peers/{peerId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "stage-host-1",
  "ssh_enabled": true,
  "login_expiration_enabled": false,
  "inactivity_expiration_enabled": false,
  "approval_required": true,
  "ip": "100.64.0.15",
  "ipv6": "fd00:4e42:ab12::1"
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "stage-host-1",
  "ssh_enabled": true,
  "login_expiration_enabled": false,
  "inactivity_expiration_enabled": false,
  "approval_required": true,
  "ip": "100.64.0.15",
  "ipv6": "fd00:4e42:ab12::1"
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/peers/{peerId}',
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

url = "https://api.netbird.io/api/peers/{peerId}"
payload = json.dumps({
  "name": "stage-host-1",
  "ssh_enabled": true,
  "login_expiration_enabled": false,
  "inactivity_expiration_enabled": false,
  "approval_required": true,
  "ip": "100.64.0.15",
  "ipv6": "fd00:4e42:ab12::1"
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

  url := "https://api.netbird.io/api/peers/{peerId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "name": "stage-host-1",
  "ssh_enabled": true,
  "login_expiration_enabled": false,
  "inactivity_expiration_enabled": false,
  "approval_required": true,
  "ip": "100.64.0.15",
  "ipv6": "fd00:4e42:ab12::1"
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

url = URI("https://api.netbird.io/api/peers/{peerId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "stage-host-1",
  "ssh_enabled": true,
  "login_expiration_enabled": false,
  "inactivity_expiration_enabled": false,
  "approval_required": true,
  "ip": "100.64.0.15",
  "ipv6": "fd00:4e42:ab12::1"
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "name": "stage-host-1",
  "ssh_enabled": true,
  "login_expiration_enabled": false,
  "inactivity_expiration_enabled": false,
  "approval_required": true,
  "ip": "100.64.0.15",
  "ipv6": "fd00:4e42:ab12::1"
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/peers/{peerId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/peers/{peerId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "name": "stage-host-1",
  "ssh_enabled": true,
  "login_expiration_enabled": false,
  "inactivity_expiration_enabled": false,
  "approval_required": true,
  "ip": "100.64.0.15",
  "ipv6": "fd00:4e42:ab12::1"
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
  "id": "chacbco6lnnbn6cg5s90",
  "name": "stage-host-1",
  "created_at": "2023-05-05T09:00:35.477782Z",
  "ip": "10.64.0.1",
  "ipv6": "fd00:4e42:ab12::1",
  "connection_ip": "35.64.0.1",
  "connected": true,
  "last_seen": "2023-05-05T10:05:26.420578Z",
  "os": "Darwin 13.2.1",
  "kernel_version": "23.2.0",
  "geoname_id": 2643743,
  "version": "0.14.0",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "name": "devs",
      "peers_count": 2,
      "resources_count": 5,
      "issued": "api"
    }
  ],
  "ssh_enabled": true,
  "user_id": "google-oauth2|277474792786460067937",
  "hostname": "stage-host-1",
  "ui_version": "0.14.0",
  "dns_label": "stage-host-1.netbird.cloud",
  "login_expiration_enabled": false,
  "login_expired": false,
  "last_login": "2023-05-05T09:00:35.477782Z",
  "inactivity_expiration_enabled": false,
  "approval_required": true,
  "disapproval_reason": {
    "description": "(Cloud only) Reason why the peer requires approval",
    "type": "string"
  },
  "country_code": "DE",
  "city_name": "Berlin",
  "serial_number": "C02XJ0J0JGH7",
  "extra_dns_labels": [
    "stage-host-1"
  ],
  "ephemeral": false,
  "local_flags": {
    "rosenpass_enabled": true,
    "rosenpass_permissive": false,
    "server_ssh_allowed": true,
    "disable_client_routes": false,
    "disable_server_routes": false,
    "disable_dns": false,
    "disable_firewall": false,
    "block_lan_access": false,
    "block_inbound": false,
    "lazy_connection_enabled": false
  }
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "created_at": "string",
  "ip": "string",
  "ipv6": "string",
  "connection_ip": "string",
  "connected": "boolean",
  "last_seen": "string",
  "os": "string",
  "kernel_version": "string",
  "geoname_id": "integer",
  "version": "string",
  "groups": [
    {
      "id": "string",
      "name": "string",
      "peers_count": "integer",
      "resources_count": "integer",
      "issued": "string"
    }
  ],
  "ssh_enabled": "boolean",
  "user_id": "string",
  "hostname": "string",
  "ui_version": "string",
  "dns_label": "string",
  "login_expiration_enabled": "boolean",
  "login_expired": "boolean",
  "last_login": "string",
  "inactivity_expiration_enabled": "boolean",
  "approval_required": "boolean",
  "disapproval_reason": "string",
  "country_code": "string",
  "city_name": "string",
  "serial_number": "string",
  "extra_dns_labels": [
    "string"
  ],
  "ephemeral": "boolean",
  "local_flags": {
    "rosenpass_enabled": "boolean",
    "rosenpass_permissive": "boolean",
    "server_ssh_allowed": "boolean",
    "disable_client_routes": "boolean",
    "disable_server_routes": "boolean",
    "disable_dns": "boolean",
    "disable_firewall": "boolean",
    "block_lan_access": "boolean",
    "block_inbound": "boolean",
    "lazy_connection_enabled": "boolean"
  }
}
```

***

## Delete a Peer   (DELETE /api/peers/{peerId})

Delete a peer

### Path Parameters

**peerId (type: string; required)**

The unique identifier of a peer

**DELETE /api/peers/{peerId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/peers/{peerId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/peers/{peerId}',
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

url = "https://api.netbird.io/api/peers/{peerId}"

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

  url := "https://api.netbird.io/api/peers/{peerId}"
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

url = URI("https://api.netbird.io/api/peers/{peerId}")

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
  .url("https://api.netbird.io/api/peers/{peerId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/peers/{peerId}',
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

## List accessible Peers   (GET /api/peers/{peerId}/accessible-peers)

Returns a list of peers that the specified peer can connect to within the network.

### Path Parameters

**peerId (type: string; required)**

The unique identifier of a peer

**GET /api/peers/{peerId}/accessible-peers Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/peers/{peerId}/accessible-peers \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/peers/{peerId}/accessible-peers',
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

url = "https://api.netbird.io/api/peers/{peerId}/accessible-peers"

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

  url := "https://api.netbird.io/api/peers/{peerId}/accessible-peers"
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

url = URI("https://api.netbird.io/api/peers/{peerId}/accessible-peers")

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
  .url("https://api.netbird.io/api/peers/{peerId}/accessible-peers")
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
  CURLOPT_URL => 'https://api.netbird.io/api/peers/{peerId}/accessible-peers',
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
    "id": "chacbco6lnnbn6cg5s90",
    "name": "stage-host-1",
    "ip": "10.64.0.1",
    "ipv6": "fd00:4e42:ab12::1",
    "dns_label": "stage-host-1.netbird.cloud",
    "user_id": "google-oauth2|277474792786460067937",
    "os": "linux",
    "country_code": "DE",
    "city_name": "Berlin",
    "geoname_id": 2643743,
    "connected": true,
    "last_seen": "2023-05-05T10:05:26.420578Z"
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "name": "string",
    "ip": "string",
    "ipv6": "string",
    "dns_label": "string",
    "user_id": "string",
    "os": "string",
    "country_code": "string",
    "city_name": "string",
    "geoname_id": "integer",
    "connected": "boolean",
    "last_seen": "string"
  }
]
```

***

## Create a Temporary Access Peer   (POST /api/peers/{peerId}/temporary-access)

Creates a temporary access peer that can be used to access this peer and this peer only. The temporary access peer and its access policies will be automatically deleted after it disconnects.

### Path Parameters

**peerId (type: string; required)**

The unique identifier of a peer

### Request-Body Parameters

**name (type: string; required)**

Peer's hostname

**wg\_pub\_key (type: string; required)**

Peer's WireGuard public key

**rules (type: string\[]; required)**

List of temporary access rules

**POST /api/peers/{peerId}/temporary-access Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/peers/{peerId}/temporary-access \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "temp-host-1",
  "wg_pub_key": "n0r3pL4c3h0ld3rK3y==",
  "rules": [
    "tcp/80"
  ]
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "temp-host-1",
  "wg_pub_key": "n0r3pL4c3h0ld3rK3y==",
  "rules": [
    "tcp/80"
  ]
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/peers/{peerId}/temporary-access',
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

url = "https://api.netbird.io/api/peers/{peerId}/temporary-access"
payload = json.dumps({
  "name": "temp-host-1",
  "wg_pub_key": "n0r3pL4c3h0ld3rK3y==",
  "rules": [
    "tcp/80"
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

  url := "https://api.netbird.io/api/peers/{peerId}/temporary-access"
  method := "POST"
  
  payload := strings.NewReader(`{
  "name": "temp-host-1",
  "wg_pub_key": "n0r3pL4c3h0ld3rK3y==",
  "rules": [
    "tcp/80"
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

url = URI("https://api.netbird.io/api/peers/{peerId}/temporary-access")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "temp-host-1",
  "wg_pub_key": "n0r3pL4c3h0ld3rK3y==",
  "rules": [
    "tcp/80"
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
  "name": "temp-host-1",
  "wg_pub_key": "n0r3pL4c3h0ld3rK3y==",
  "rules": [
    "tcp/80"
  ]
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/peers/{peerId}/temporary-access")
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
  CURLOPT_URL => 'https://api.netbird.io/api/peers/{peerId}/temporary-access',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "name": "temp-host-1",
  "wg_pub_key": "n0r3pL4c3h0ld3rK3y==",
  "rules": [
    "tcp/80"
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
  "name": "temp-host-1",
  "id": "chacbco6lnnbn6cg5s90",
  "rules": [
    "tcp/80"
  ]
}
```

**Schema**

```json
{
  "name": "string",
  "id": "string",
  "rules": [
    "string"
  ]
}
```

***
