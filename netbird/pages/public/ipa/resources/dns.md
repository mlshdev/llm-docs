> Release-pinned source for NetBird v0.77.0: [netbirdio/docs@abb8d4607fd4a1260c80bcdad1493e92941e1837:src/pages/ipa/resources/dns.mdx](https://github.com/netbirdio/docs/blob/abb8d4607fd4a1260c80bcdad1493e92941e1837/src/pages/ipa/resources/dns.mdx)

## List all Nameserver Groups   (GET /api/dns/nameservers)

Returns a list of all Nameserver Groups

**GET /api/dns/nameservers Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/dns/nameservers \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/dns/nameservers',
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

url = "https://api.netbird.io/api/dns/nameservers"

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

  url := "https://api.netbird.io/api/dns/nameservers"
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

url = URI("https://api.netbird.io/api/dns/nameservers")

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
  .url("https://api.netbird.io/api/dns/nameservers")
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
  CURLOPT_URL => 'https://api.netbird.io/api/dns/nameservers',
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
    "name": "Google DNS",
    "description": "Google DNS servers",
    "nameservers": [
      {
        "ip": "8.8.8.8",
        "ns_type": "udp",
        "port": 53
      }
    ],
    "enabled": true,
    "groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ],
    "primary": true,
    "domains": [
      "example.com"
    ],
    "search_domains_enabled": true
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "nameservers": [
      {
        "ip": "string",
        "ns_type": "string",
        "port": "integer"
      }
    ],
    "enabled": "boolean",
    "groups": [
      "string"
    ],
    "primary": "boolean",
    "domains": [
      "string"
    ],
    "search_domains_enabled": "boolean"
  }
]
```

***

## Create a Nameserver Group   (POST /api/dns/nameservers)

Creates a Nameserver Group

### Request-Body Parameters

**name (type: string; required; minLen: 1; maxLen: 40)**

Name of nameserver group name

**description (type: string; required)**

Description of the nameserver group

**nameservers (type: object\[]; required; minLen: 1; maxLen: 3)**

**Nameserver list**

**ip (type: string; required)**

Nameserver IP

**ns\_type (type: string; required; values: udp)**

Nameserver Type

**port (type: integer; required)**

Nameserver Port

**enabled (type: boolean; required)**

Nameserver group status

**groups (type: string\[]; required)**

Distribution group IDs that defines group of peers that will use this nameserver group

**primary (type: boolean; required)**

Defines if a nameserver group is primary that resolves all domains. It should be true only if domains list is empty.

**domains (type: string\[]; required)**

Match domain list. It should be empty only if primary is true.

**search\_domains\_enabled (type: boolean; required)**

Search domain status for match domains. It should be true only if domains list is not empty.

**POST /api/dns/nameservers Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/dns/nameservers \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "Google DNS",
  "description": "Google DNS servers",
  "nameservers": [
    {
      "ip": "8.8.8.8",
      "ns_type": "udp",
      "port": 53
    }
  ],
  "enabled": true,
  "groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "primary": true,
  "domains": [
    "example.com"
  ],
  "search_domains_enabled": true
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "Google DNS",
  "description": "Google DNS servers",
  "nameservers": [
    {
      "ip": "8.8.8.8",
      "ns_type": "udp",
      "port": 53
    }
  ],
  "enabled": true,
  "groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "primary": true,
  "domains": [
    "example.com"
  ],
  "search_domains_enabled": true
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/dns/nameservers',
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

url = "https://api.netbird.io/api/dns/nameservers"
payload = json.dumps({
  "name": "Google DNS",
  "description": "Google DNS servers",
  "nameservers": [
    {
      "ip": "8.8.8.8",
      "ns_type": "udp",
      "port": 53
    }
  ],
  "enabled": true,
  "groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "primary": true,
  "domains": [
    "example.com"
  ],
  "search_domains_enabled": true
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

  url := "https://api.netbird.io/api/dns/nameservers"
  method := "POST"
  
  payload := strings.NewReader(`{
  "name": "Google DNS",
  "description": "Google DNS servers",
  "nameservers": [
    {
      "ip": "8.8.8.8",
      "ns_type": "udp",
      "port": 53
    }
  ],
  "enabled": true,
  "groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "primary": true,
  "domains": [
    "example.com"
  ],
  "search_domains_enabled": true
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

url = URI("https://api.netbird.io/api/dns/nameservers")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "Google DNS",
  "description": "Google DNS servers",
  "nameservers": [
    {
      "ip": "8.8.8.8",
      "ns_type": "udp",
      "port": 53
    }
  ],
  "enabled": true,
  "groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "primary": true,
  "domains": [
    "example.com"
  ],
  "search_domains_enabled": true
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "name": "Google DNS",
  "description": "Google DNS servers",
  "nameservers": [
    {
      "ip": "8.8.8.8",
      "ns_type": "udp",
      "port": 53
    }
  ],
  "enabled": true,
  "groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "primary": true,
  "domains": [
    "example.com"
  ],
  "search_domains_enabled": true
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/dns/nameservers")
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
  CURLOPT_URL => 'https://api.netbird.io/api/dns/nameservers',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "name": "Google DNS",
  "description": "Google DNS servers",
  "nameservers": [
    {
      "ip": "8.8.8.8",
      "ns_type": "udp",
      "port": 53
    }
  ],
  "enabled": true,
  "groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "primary": true,
  "domains": [
    "example.com"
  ],
  "search_domains_enabled": true
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
  "name": "Google DNS",
  "description": "Google DNS servers",
  "nameservers": [
    {
      "ip": "8.8.8.8",
      "ns_type": "udp",
      "port": 53
    }
  ],
  "enabled": true,
  "groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "primary": true,
  "domains": [
    "example.com"
  ],
  "search_domains_enabled": true
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "nameservers": [
    {
      "ip": "string",
      "ns_type": "string",
      "port": "integer"
    }
  ],
  "enabled": "boolean",
  "groups": [
    "string"
  ],
  "primary": "boolean",
  "domains": [
    "string"
  ],
  "search_domains_enabled": "boolean"
}
```

***

## Retrieve a Nameserver Group   (GET /api/dns/nameservers/{nsgroupId})

Get information about a Nameserver Groups

### Path Parameters

**nsgroupId (type: string; required)**

The unique identifier of a Nameserver Group

**GET /api/dns/nameservers/{nsgroupId} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/dns/nameservers/{nsgroupId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/dns/nameservers/{nsgroupId}',
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

url = "https://api.netbird.io/api/dns/nameservers/{nsgroupId}"

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

  url := "https://api.netbird.io/api/dns/nameservers/{nsgroupId}"
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

url = URI("https://api.netbird.io/api/dns/nameservers/{nsgroupId}")

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
  .url("https://api.netbird.io/api/dns/nameservers/{nsgroupId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/dns/nameservers/{nsgroupId}',
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
  "name": "Google DNS",
  "description": "Google DNS servers",
  "nameservers": [
    {
      "ip": "8.8.8.8",
      "ns_type": "udp",
      "port": 53
    }
  ],
  "enabled": true,
  "groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "primary": true,
  "domains": [
    "example.com"
  ],
  "search_domains_enabled": true
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "nameservers": [
    {
      "ip": "string",
      "ns_type": "string",
      "port": "integer"
    }
  ],
  "enabled": "boolean",
  "groups": [
    "string"
  ],
  "primary": "boolean",
  "domains": [
    "string"
  ],
  "search_domains_enabled": "boolean"
}
```

***

## Update a Nameserver Group   (PUT /api/dns/nameservers/{nsgroupId})

Update/Replace a Nameserver Group

### Path Parameters

**nsgroupId (type: string; required)**

The unique identifier of a Nameserver Group

### Request-Body Parameters

**name (type: string; required; minLen: 1; maxLen: 40)**

Name of nameserver group name

**description (type: string; required)**

Description of the nameserver group

**nameservers (type: object\[]; required; minLen: 1; maxLen: 3)**

**Nameserver list**

**ip (type: string; required)**

Nameserver IP

**ns\_type (type: string; required; values: udp)**

Nameserver Type

**port (type: integer; required)**

Nameserver Port

**enabled (type: boolean; required)**

Nameserver group status

**groups (type: string\[]; required)**

Distribution group IDs that defines group of peers that will use this nameserver group

**primary (type: boolean; required)**

Defines if a nameserver group is primary that resolves all domains. It should be true only if domains list is empty.

**domains (type: string\[]; required)**

Match domain list. It should be empty only if primary is true.

**search\_domains\_enabled (type: boolean; required)**

Search domain status for match domains. It should be true only if domains list is not empty.

**PUT /api/dns/nameservers/{nsgroupId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/dns/nameservers/{nsgroupId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "Google DNS",
  "description": "Google DNS servers",
  "nameservers": [
    {
      "ip": "8.8.8.8",
      "ns_type": "udp",
      "port": 53
    }
  ],
  "enabled": true,
  "groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "primary": true,
  "domains": [
    "example.com"
  ],
  "search_domains_enabled": true
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "Google DNS",
  "description": "Google DNS servers",
  "nameservers": [
    {
      "ip": "8.8.8.8",
      "ns_type": "udp",
      "port": 53
    }
  ],
  "enabled": true,
  "groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "primary": true,
  "domains": [
    "example.com"
  ],
  "search_domains_enabled": true
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/dns/nameservers/{nsgroupId}',
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

url = "https://api.netbird.io/api/dns/nameservers/{nsgroupId}"
payload = json.dumps({
  "name": "Google DNS",
  "description": "Google DNS servers",
  "nameservers": [
    {
      "ip": "8.8.8.8",
      "ns_type": "udp",
      "port": 53
    }
  ],
  "enabled": true,
  "groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "primary": true,
  "domains": [
    "example.com"
  ],
  "search_domains_enabled": true
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

  url := "https://api.netbird.io/api/dns/nameservers/{nsgroupId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "name": "Google DNS",
  "description": "Google DNS servers",
  "nameservers": [
    {
      "ip": "8.8.8.8",
      "ns_type": "udp",
      "port": 53
    }
  ],
  "enabled": true,
  "groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "primary": true,
  "domains": [
    "example.com"
  ],
  "search_domains_enabled": true
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

url = URI("https://api.netbird.io/api/dns/nameservers/{nsgroupId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "Google DNS",
  "description": "Google DNS servers",
  "nameservers": [
    {
      "ip": "8.8.8.8",
      "ns_type": "udp",
      "port": 53
    }
  ],
  "enabled": true,
  "groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "primary": true,
  "domains": [
    "example.com"
  ],
  "search_domains_enabled": true
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "name": "Google DNS",
  "description": "Google DNS servers",
  "nameservers": [
    {
      "ip": "8.8.8.8",
      "ns_type": "udp",
      "port": 53
    }
  ],
  "enabled": true,
  "groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "primary": true,
  "domains": [
    "example.com"
  ],
  "search_domains_enabled": true
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/dns/nameservers/{nsgroupId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/dns/nameservers/{nsgroupId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "name": "Google DNS",
  "description": "Google DNS servers",
  "nameservers": [
    {
      "ip": "8.8.8.8",
      "ns_type": "udp",
      "port": 53
    }
  ],
  "enabled": true,
  "groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "primary": true,
  "domains": [
    "example.com"
  ],
  "search_domains_enabled": true
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
  "name": "Google DNS",
  "description": "Google DNS servers",
  "nameservers": [
    {
      "ip": "8.8.8.8",
      "ns_type": "udp",
      "port": 53
    }
  ],
  "enabled": true,
  "groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "primary": true,
  "domains": [
    "example.com"
  ],
  "search_domains_enabled": true
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "nameservers": [
    {
      "ip": "string",
      "ns_type": "string",
      "port": "integer"
    }
  ],
  "enabled": "boolean",
  "groups": [
    "string"
  ],
  "primary": "boolean",
  "domains": [
    "string"
  ],
  "search_domains_enabled": "boolean"
}
```

***

## Delete a Nameserver Group   (DELETE /api/dns/nameservers/{nsgroupId})

Delete a Nameserver Group

### Path Parameters

**nsgroupId (type: string; required)**

The unique identifier of a Nameserver Group

**DELETE /api/dns/nameservers/{nsgroupId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/dns/nameservers/{nsgroupId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/dns/nameservers/{nsgroupId}',
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

url = "https://api.netbird.io/api/dns/nameservers/{nsgroupId}"

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

  url := "https://api.netbird.io/api/dns/nameservers/{nsgroupId}"
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

url = URI("https://api.netbird.io/api/dns/nameservers/{nsgroupId}")

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
  .url("https://api.netbird.io/api/dns/nameservers/{nsgroupId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/dns/nameservers/{nsgroupId}',
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

## Retrieve DNS settings   (GET /api/dns/settings)

Returns a DNS settings object

**GET /api/dns/settings Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/dns/settings \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/dns/settings',
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

url = "https://api.netbird.io/api/dns/settings"

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

  url := "https://api.netbird.io/api/dns/settings"
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

url = URI("https://api.netbird.io/api/dns/settings")

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
  .url("https://api.netbird.io/api/dns/settings")
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
  CURLOPT_URL => 'https://api.netbird.io/api/dns/settings',
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
  "items": {
    "disabled_management_groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ]
  }
}
```

**Schema**

```json
{
  "items": {
    "disabled_management_groups": [
      "string"
    ]
  }
}
```

***

## Update DNS Settings   (PUT /api/dns/settings)

Updates a DNS settings object

### Request-Body Parameters

**disabled\_management\_groups (type: string\[]; required)**

Groups whose DNS management is disabled

**PUT /api/dns/settings Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/dns/settings \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "disabled_management_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ]
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "disabled_management_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ]
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/dns/settings',
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

url = "https://api.netbird.io/api/dns/settings"
payload = json.dumps({
  "disabled_management_groups": [
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

  url := "https://api.netbird.io/api/dns/settings"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "disabled_management_groups": [
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

url = URI("https://api.netbird.io/api/dns/settings")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "disabled_management_groups": [
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
  "disabled_management_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ]
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/dns/settings")
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
  CURLOPT_URL => 'https://api.netbird.io/api/dns/settings',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "disabled_management_groups": [
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
  "disabled_management_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ]
}
```

**Schema**

```json
{
  "disabled_management_groups": [
    "string"
  ]
}
```

***
