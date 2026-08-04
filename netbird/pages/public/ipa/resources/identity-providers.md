> Release-pinned source for NetBird v0.76.1: [netbirdio/docs@14375a092774f250d45a85f6d5f3c524d99fd111:src/pages/ipa/resources/identity-providers.mdx](https://github.com/netbirdio/docs/blob/14375a092774f250d45a85f6d5f3c524d99fd111/src/pages/ipa/resources/identity-providers.mdx)

## List all Identity Providers   (GET /api/identity-providers)

Returns a list of all identity providers configured for the account

**GET /api/identity-providers Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/identity-providers \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/identity-providers',
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

url = "https://api.netbird.io/api/identity-providers"

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

  url := "https://api.netbird.io/api/identity-providers"
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

url = URI("https://api.netbird.io/api/identity-providers")

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
  .url("https://api.netbird.io/api/identity-providers")
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
  CURLOPT_URL => 'https://api.netbird.io/api/identity-providers',
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
    "id": "ch8i4ug6lnn4g9hqv7l0",
    "type": "oidc",
    "name": "My OIDC Provider",
    "issuer": "https://accounts.google.com",
    "client_id": "123456789.apps.googleusercontent.com"
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "type": "string",
    "name": "string",
    "issuer": "string",
    "client_id": "string"
  }
]
```

***

## Create an Identity Provider   (POST /api/identity-providers)

Creates a new identity provider configuration

### Request-Body Parameters

**type (type: string; required; values: oidc, zitadel, entra, google, okta, pocketid, microsoft, adfs)**

Type of identity provider

**name (type: string; required)**

Human-readable name for the identity provider

**issuer (type: string; required)**

OIDC issuer URL

**client\_id (type: string; required)**

OAuth2 client ID

**client\_secret (type: string; required)**

OAuth2 client secret

**POST /api/identity-providers Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/identity-providers \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "type": "oidc",
  "name": "My OIDC Provider",
  "issuer": "https://accounts.google.com",
  "client_id": "123456789.apps.googleusercontent.com",
  "client_secret": "secret123"
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "type": "oidc",
  "name": "My OIDC Provider",
  "issuer": "https://accounts.google.com",
  "client_id": "123456789.apps.googleusercontent.com",
  "client_secret": "secret123"
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/identity-providers',
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

url = "https://api.netbird.io/api/identity-providers"
payload = json.dumps({
  "type": "oidc",
  "name": "My OIDC Provider",
  "issuer": "https://accounts.google.com",
  "client_id": "123456789.apps.googleusercontent.com",
  "client_secret": "secret123"
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

  url := "https://api.netbird.io/api/identity-providers"
  method := "POST"
  
  payload := strings.NewReader(`{
  "type": "oidc",
  "name": "My OIDC Provider",
  "issuer": "https://accounts.google.com",
  "client_id": "123456789.apps.googleusercontent.com",
  "client_secret": "secret123"
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

url = URI("https://api.netbird.io/api/identity-providers")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "type": "oidc",
  "name": "My OIDC Provider",
  "issuer": "https://accounts.google.com",
  "client_id": "123456789.apps.googleusercontent.com",
  "client_secret": "secret123"
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "type": "oidc",
  "name": "My OIDC Provider",
  "issuer": "https://accounts.google.com",
  "client_id": "123456789.apps.googleusercontent.com",
  "client_secret": "secret123"
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/identity-providers")
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
  CURLOPT_URL => 'https://api.netbird.io/api/identity-providers',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "type": "oidc",
  "name": "My OIDC Provider",
  "issuer": "https://accounts.google.com",
  "client_id": "123456789.apps.googleusercontent.com",
  "client_secret": "secret123"
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
  "id": "ch8i4ug6lnn4g9hqv7l0",
  "type": "oidc",
  "name": "My OIDC Provider",
  "issuer": "https://accounts.google.com",
  "client_id": "123456789.apps.googleusercontent.com"
}
```

**Schema**

```json
{
  "id": "string",
  "type": "string",
  "name": "string",
  "issuer": "string",
  "client_id": "string"
}
```

***

## Retrieve an Identity Provider   (GET /api/identity-providers/{idpId})

Get information about a specific identity provider

### Path Parameters

**idpId (type: string; required)**

The unique identifier of an identity provider

**GET /api/identity-providers/{idpId} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/identity-providers/{idpId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/identity-providers/{idpId}',
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

url = "https://api.netbird.io/api/identity-providers/{idpId}"

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

  url := "https://api.netbird.io/api/identity-providers/{idpId}"
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

url = URI("https://api.netbird.io/api/identity-providers/{idpId}")

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
  .url("https://api.netbird.io/api/identity-providers/{idpId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/identity-providers/{idpId}',
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
  "id": "ch8i4ug6lnn4g9hqv7l0",
  "type": "oidc",
  "name": "My OIDC Provider",
  "issuer": "https://accounts.google.com",
  "client_id": "123456789.apps.googleusercontent.com"
}
```

**Schema**

```json
{
  "id": "string",
  "type": "string",
  "name": "string",
  "issuer": "string",
  "client_id": "string"
}
```

***

## Update an Identity Provider   (PUT /api/identity-providers/{idpId})

Update an existing identity provider configuration

### Path Parameters

**idpId (type: string; required)**

The unique identifier of an identity provider

### Request-Body Parameters

**type (type: string; required; values: oidc, zitadel, entra, google, okta, pocketid, microsoft, adfs)**

Type of identity provider

**name (type: string; required)**

Human-readable name for the identity provider

**issuer (type: string; required)**

OIDC issuer URL

**client\_id (type: string; required)**

OAuth2 client ID

**client\_secret (type: string; required)**

OAuth2 client secret

**PUT /api/identity-providers/{idpId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/identity-providers/{idpId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "type": "oidc",
  "name": "My OIDC Provider",
  "issuer": "https://accounts.google.com",
  "client_id": "123456789.apps.googleusercontent.com",
  "client_secret": "secret123"
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "type": "oidc",
  "name": "My OIDC Provider",
  "issuer": "https://accounts.google.com",
  "client_id": "123456789.apps.googleusercontent.com",
  "client_secret": "secret123"
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/identity-providers/{idpId}',
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

url = "https://api.netbird.io/api/identity-providers/{idpId}"
payload = json.dumps({
  "type": "oidc",
  "name": "My OIDC Provider",
  "issuer": "https://accounts.google.com",
  "client_id": "123456789.apps.googleusercontent.com",
  "client_secret": "secret123"
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

  url := "https://api.netbird.io/api/identity-providers/{idpId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "type": "oidc",
  "name": "My OIDC Provider",
  "issuer": "https://accounts.google.com",
  "client_id": "123456789.apps.googleusercontent.com",
  "client_secret": "secret123"
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

url = URI("https://api.netbird.io/api/identity-providers/{idpId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "type": "oidc",
  "name": "My OIDC Provider",
  "issuer": "https://accounts.google.com",
  "client_id": "123456789.apps.googleusercontent.com",
  "client_secret": "secret123"
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "type": "oidc",
  "name": "My OIDC Provider",
  "issuer": "https://accounts.google.com",
  "client_id": "123456789.apps.googleusercontent.com",
  "client_secret": "secret123"
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/identity-providers/{idpId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/identity-providers/{idpId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "type": "oidc",
  "name": "My OIDC Provider",
  "issuer": "https://accounts.google.com",
  "client_id": "123456789.apps.googleusercontent.com",
  "client_secret": "secret123"
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
  "id": "ch8i4ug6lnn4g9hqv7l0",
  "type": "oidc",
  "name": "My OIDC Provider",
  "issuer": "https://accounts.google.com",
  "client_id": "123456789.apps.googleusercontent.com"
}
```

**Schema**

```json
{
  "id": "string",
  "type": "string",
  "name": "string",
  "issuer": "string",
  "client_id": "string"
}
```

***

## Delete an Identity Provider   (DELETE /api/identity-providers/{idpId})

Delete an identity provider configuration

### Path Parameters

**idpId (type: string; required)**

The unique identifier of an identity provider

**DELETE /api/identity-providers/{idpId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/identity-providers/{idpId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/identity-providers/{idpId}',
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

url = "https://api.netbird.io/api/identity-providers/{idpId}"

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

  url := "https://api.netbird.io/api/identity-providers/{idpId}"
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

url = URI("https://api.netbird.io/api/identity-providers/{idpId}")

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
  .url("https://api.netbird.io/api/identity-providers/{idpId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/identity-providers/{idpId}',
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
