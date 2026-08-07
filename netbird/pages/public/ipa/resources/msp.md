> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/ipa/resources/msp.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/ipa/resources/msp.mdx)

## Get MSP tenants   (GET /api/integrations/msp/tenants)

**GET /api/integrations/msp/tenants Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/integrations/msp/tenants \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/integrations/msp/tenants',
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

url = "https://api.netbird.io/api/integrations/msp/tenants"

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

  url := "https://api.netbird.io/api/integrations/msp/tenants"
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

url = URI("https://api.netbird.io/api/integrations/msp/tenants")

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
  .url("https://api.netbird.io/api/integrations/msp/tenants")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/msp/tenants',
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
    "name": "My new tenant",
    "domain": "tenant.com",
    "groups": [
      {
        "id": "ch8i4ug6lnn4g9hqv7m0",
        "role": "admin"
      }
    ],
    "activated_at": "2021-08-01T12:00:00Z",
    "dns_challenge": "YXNkYSBkYXNhc2Rhc2RhIGFzZGFzZDJhc2QyNDUxNQ",
    "created_at": "2021-08-01T12:00:00Z",
    "updated_at": "2021-08-01T12:00:00Z",
    "invited_at": "2021-08-01T12:00:00Z",
    "status": "active"
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "name": "string",
    "domain": "string",
    "groups": [
      {
        "id": "string",
        "role": "string"
      }
    ],
    "activated_at": "string",
    "dns_challenge": "string",
    "created_at": "string",
    "updated_at": "string",
    "invited_at": "string",
    "status": "string"
  }
]
```

***

## Create MSP tenant   (POST /api/integrations/msp/tenants)

### Request-Body Parameters

**name (type: string; required)**

The name for the MSP tenant

**domain (type: string; required)**

The name for the MSP tenant

**groups (type: object\[]; required)**

**MSP users Groups that can access the Tenant and Roles to assume**

**id (type: string; required)**

The Group ID

**role (type: string; required)**

The Role name

**POST /api/integrations/msp/tenants Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/integrations/msp/tenants \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "My new tenant",
  "domain": "tenant.com",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "role": "admin"
    }
  ]
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "My new tenant",
  "domain": "tenant.com",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "role": "admin"
    }
  ]
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/integrations/msp/tenants',
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

url = "https://api.netbird.io/api/integrations/msp/tenants"
payload = json.dumps({
  "name": "My new tenant",
  "domain": "tenant.com",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "role": "admin"
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

  url := "https://api.netbird.io/api/integrations/msp/tenants"
  method := "POST"
  
  payload := strings.NewReader(`{
  "name": "My new tenant",
  "domain": "tenant.com",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "role": "admin"
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

url = URI("https://api.netbird.io/api/integrations/msp/tenants")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "My new tenant",
  "domain": "tenant.com",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "role": "admin"
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
  "name": "My new tenant",
  "domain": "tenant.com",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "role": "admin"
    }
  ]
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/integrations/msp/tenants")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/msp/tenants',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "name": "My new tenant",
  "domain": "tenant.com",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "role": "admin"
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
  "name": "My new tenant",
  "domain": "tenant.com",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "role": "admin"
    }
  ],
  "activated_at": "2021-08-01T12:00:00Z",
  "dns_challenge": "YXNkYSBkYXNhc2Rhc2RhIGFzZGFzZDJhc2QyNDUxNQ",
  "created_at": "2021-08-01T12:00:00Z",
  "updated_at": "2021-08-01T12:00:00Z",
  "invited_at": "2021-08-01T12:00:00Z",
  "status": "active"
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "domain": "string",
  "groups": [
    {
      "id": "string",
      "role": "string"
    }
  ],
  "activated_at": "string",
  "dns_challenge": "string",
  "created_at": "string",
  "updated_at": "string",
  "invited_at": "string",
  "status": "string"
}
```

***

## Update MSP tenant   (PUT /api/integrations/msp/tenants/{id})

### Path Parameters

**id (type: string; required)**

The unique identifier of a tenant account

### Request-Body Parameters

**name (type: string; required)**

The name for the MSP tenant

**groups (type: object\[]; required)**

**MSP users Groups that can access the Tenant and Roles to assume**

**id (type: string; required)**

The Group ID

**role (type: string; required)**

The Role name

**PUT /api/integrations/msp/tenants/{id} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/integrations/msp/tenants/{id} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "My new tenant",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "role": "admin"
    }
  ]
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "My new tenant",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "role": "admin"
    }
  ]
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/integrations/msp/tenants/{id}',
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

url = "https://api.netbird.io/api/integrations/msp/tenants/{id}"
payload = json.dumps({
  "name": "My new tenant",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "role": "admin"
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

  url := "https://api.netbird.io/api/integrations/msp/tenants/{id}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "name": "My new tenant",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "role": "admin"
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

url = URI("https://api.netbird.io/api/integrations/msp/tenants/{id}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "My new tenant",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "role": "admin"
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
  "name": "My new tenant",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "role": "admin"
    }
  ]
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/integrations/msp/tenants/{id}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/msp/tenants/{id}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "name": "My new tenant",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "role": "admin"
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
  "name": "My new tenant",
  "domain": "tenant.com",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "role": "admin"
    }
  ],
  "activated_at": "2021-08-01T12:00:00Z",
  "dns_challenge": "YXNkYSBkYXNhc2Rhc2RhIGFzZGFzZDJhc2QyNDUxNQ",
  "created_at": "2021-08-01T12:00:00Z",
  "updated_at": "2021-08-01T12:00:00Z",
  "invited_at": "2021-08-01T12:00:00Z",
  "status": "active"
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "domain": "string",
  "groups": [
    {
      "id": "string",
      "role": "string"
    }
  ],
  "activated_at": "string",
  "dns_challenge": "string",
  "created_at": "string",
  "updated_at": "string",
  "invited_at": "string",
  "status": "string"
}
```

***

## Unlink a tenant   (POST /api/integrations/msp/tenants/{id}/unlink)

### Path Parameters

**id (type: string; required)**

The unique identifier of a tenant account

### Request-Body Parameters

**owner (type: string; required)**

The new owners user ID.

**POST /api/integrations/msp/tenants/{id}/unlink Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/integrations/msp/tenants/{id}/unlink \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "owner": "google-oauth2|123456789012345678901"
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "owner": "google-oauth2|123456789012345678901"
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/integrations/msp/tenants/{id}/unlink',
  headers: {         
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

url = "https://api.netbird.io/api/integrations/msp/tenants/{id}/unlink"
payload = json.dumps({
  "owner": "google-oauth2|123456789012345678901"
})
headers = {   
  'Content-Type': 'application/json',  
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

  url := "https://api.netbird.io/api/integrations/msp/tenants/{id}/unlink"
  method := "POST"
  
  payload := strings.NewReader(`{
  "owner": "google-oauth2|123456789012345678901"
}`)
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  
  
  req.Header.Add("Content-Type", "application/json")  
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

url = URI("https://api.netbird.io/api/integrations/msp/tenants/{id}/unlink")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "owner": "google-oauth2|123456789012345678901"
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "owner": "google-oauth2|123456789012345678901"
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/integrations/msp/tenants/{id}/unlink")
  .method("POST", body)  
  .addHeader("Content-Type", "application/json")  
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/msp/tenants/{id}/unlink',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "owner": "google-oauth2|123456789012345678901"
}',
  CURLOPT_HTTPHEADER => array(    
    'Content-Type: application/json',    
    'Authorization: Token <TOKEN>'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```

***

## Verify a tenant domain DNS challenge   (POST /api/integrations/msp/tenants/{id}/dns)

### Path Parameters

**id (type: string; required)**

The unique identifier of a tenant account

**POST /api/integrations/msp/tenants/{id}/dns Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/integrations/msp/tenants/{id}/dns \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/integrations/msp/tenants/{id}/dns',
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

url = "https://api.netbird.io/api/integrations/msp/tenants/{id}/dns"

headers = {     
  'Authorization': 'Token <TOKEN>'
}

response = requests.request("POST", url, headers=headers)

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

  url := "https://api.netbird.io/api/integrations/msp/tenants/{id}/dns"
  method := "POST"
  
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

url = URI("https://api.netbird.io/api/integrations/msp/tenants/{id}/dns")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = "Token <TOKEN>"

response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();

Request request = new Request.Builder()
  .url("https://api.netbird.io/api/integrations/msp/tenants/{id}/dns")
  .method("POST")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/msp/tenants/{id}/dns',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_HTTPHEADER => array(        
    'Authorization: Token <TOKEN>'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```

***

## Create subscription for Tenant   (POST /api/integrations/msp/tenants/{id}/subscription)

### Path Parameters

**id (type: string; required)**

The unique identifier of a tenant account

### Request-Body Parameters

**priceID (type: string; required)**

The Price ID to change the subscription to.

**POST /api/integrations/msp/tenants/{id}/subscription Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/integrations/msp/tenants/{id}/subscription \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "priceID": "price_1HhxOpBzq4JbCqRmJxkpzL2V"
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "priceID": "price_1HhxOpBzq4JbCqRmJxkpzL2V"
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/integrations/msp/tenants/{id}/subscription',
  headers: {         
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

url = "https://api.netbird.io/api/integrations/msp/tenants/{id}/subscription"
payload = json.dumps({
  "priceID": "price_1HhxOpBzq4JbCqRmJxkpzL2V"
})
headers = {   
  'Content-Type': 'application/json',  
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

  url := "https://api.netbird.io/api/integrations/msp/tenants/{id}/subscription"
  method := "POST"
  
  payload := strings.NewReader(`{
  "priceID": "price_1HhxOpBzq4JbCqRmJxkpzL2V"
}`)
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  
  
  req.Header.Add("Content-Type", "application/json")  
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

url = URI("https://api.netbird.io/api/integrations/msp/tenants/{id}/subscription")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "priceID": "price_1HhxOpBzq4JbCqRmJxkpzL2V"
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "priceID": "price_1HhxOpBzq4JbCqRmJxkpzL2V"
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/integrations/msp/tenants/{id}/subscription")
  .method("POST", body)  
  .addHeader("Content-Type", "application/json")  
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/msp/tenants/{id}/subscription',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "priceID": "price_1HhxOpBzq4JbCqRmJxkpzL2V"
}',
  CURLOPT_HTTPHEADER => array(    
    'Content-Type: application/json',    
    'Authorization: Token <TOKEN>'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```

***

## Invite existing account as a Tenant to the MSP account   (POST /api/integrations/msp/tenants/{id}/invite)

### Path Parameters

**id (type: string; required)**

The unique identifier of an existing tenant account

**POST /api/integrations/msp/tenants/{id}/invite Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/integrations/msp/tenants/{id}/invite \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/integrations/msp/tenants/{id}/invite',
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

url = "https://api.netbird.io/api/integrations/msp/tenants/{id}/invite"

headers = {     
  'Accept': 'application/json',
  'Authorization': 'Token <TOKEN>'
}

response = requests.request("POST", url, headers=headers)

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

  url := "https://api.netbird.io/api/integrations/msp/tenants/{id}/invite"
  method := "POST"
  
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

url = URI("https://api.netbird.io/api/integrations/msp/tenants/{id}/invite")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();

Request request = new Request.Builder()
  .url("https://api.netbird.io/api/integrations/msp/tenants/{id}/invite")
  .method("POST")    
  .addHeader("Accept", "application/json")
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/msp/tenants/{id}/invite',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
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
  "name": "My new tenant",
  "domain": "tenant.com",
  "groups": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "role": "admin"
    }
  ],
  "activated_at": "2021-08-01T12:00:00Z",
  "dns_challenge": "YXNkYSBkYXNhc2Rhc2RhIGFzZGFzZDJhc2QyNDUxNQ",
  "created_at": "2021-08-01T12:00:00Z",
  "updated_at": "2021-08-01T12:00:00Z",
  "invited_at": "2021-08-01T12:00:00Z",
  "status": "active"
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "domain": "string",
  "groups": [
    {
      "id": "string",
      "role": "string"
    }
  ],
  "activated_at": "string",
  "dns_challenge": "string",
  "created_at": "string",
  "updated_at": "string",
  "invited_at": "string",
  "status": "string"
}
```

***

## Response by the invited Tenant account owner   (PUT /api/integrations/msp/tenants/{id}/invite)

### Path Parameters

**id (type: string; required)**

The unique identifier of an existing tenant account

### Request-Body Parameters

**value (type: string; required; values: accept, decline)**

Accept or decline the invitation.

**PUT /api/integrations/msp/tenants/{id}/invite Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/integrations/msp/tenants/{id}/invite \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "value": {
    "type": "string",
    "description": "Accept or decline the invitation.",
    "enum": [
      "accept",
      "decline"
    ]
  }
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "value": {
    "type": "string",
    "description": "Accept or decline the invitation.",
    "enum": [
      "accept",
      "decline"
    ]
  }
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/integrations/msp/tenants/{id}/invite',
  headers: {         
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

url = "https://api.netbird.io/api/integrations/msp/tenants/{id}/invite"
payload = json.dumps({
  "value": {
    "type": "string",
    "description": "Accept or decline the invitation.",
    "enum": [
      "accept",
      "decline"
    ]
  }
})
headers = {   
  'Content-Type': 'application/json',  
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

  url := "https://api.netbird.io/api/integrations/msp/tenants/{id}/invite"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "value": {
    "type": "string",
    "description": "Accept or decline the invitation.",
    "enum": [
      "accept",
      "decline"
    ]
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

url = URI("https://api.netbird.io/api/integrations/msp/tenants/{id}/invite")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "value": {
    "type": "string",
    "description": "Accept or decline the invitation.",
    "enum": [
      "accept",
      "decline"
    ]
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
  "value": {
    "type": "string",
    "description": "Accept or decline the invitation.",
    "enum": [
      "accept",
      "decline"
    ]
  }
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/integrations/msp/tenants/{id}/invite")
  .method("PUT", body)  
  .addHeader("Content-Type", "application/json")  
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/msp/tenants/{id}/invite',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "value": {
    "type": "string",
    "description": "Accept or decline the invitation.",
    "enum": [
      "accept",
      "decline"
    ]
  }
}',
  CURLOPT_HTTPHEADER => array(    
    'Content-Type: application/json',    
    'Authorization: Token <TOKEN>'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```

***
