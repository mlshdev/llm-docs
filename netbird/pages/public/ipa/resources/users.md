> Release-pinned source for NetBird v0.76.1: [netbirdio/docs@14375a092774f250d45a85f6d5f3c524d99fd111:src/pages/ipa/resources/users.mdx](https://github.com/netbirdio/docs/blob/14375a092774f250d45a85f6d5f3c524d99fd111/src/pages/ipa/resources/users.mdx)

## List all Users   (GET /api/users)

Returns a list of all users

### Query Parameters

**service\_user (type: boolean; optional)**

Filters users and returns either regular users or service users

**GET /api/users Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/users \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/users',
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

url = "https://api.netbird.io/api/users"

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

  url := "https://api.netbird.io/api/users"
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

url = URI("https://api.netbird.io/api/users")

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
  .url("https://api.netbird.io/api/users")
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
  CURLOPT_URL => 'https://api.netbird.io/api/users',
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
    "id": "google-oauth2|277474792786460067937",
    "email": "demo@netbird.io",
    "password": "super_secure_password",
    "name": "Tom Schulz",
    "role": "admin",
    "status": "active",
    "last_login": "2023-05-05T09:00:35.477782Z",
    "auto_groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ],
    "is_current": true,
    "is_service_user": false,
    "is_blocked": false,
    "pending_approval": false,
    "issued": "api",
    "idp_id": "okta-abc123",
    "permissions": {
      "is_restricted": {
        "type": "boolean",
        "description": "Indicates whether this User's Peers view is restricted"
      },
      "modules": {
        "networks": {
          "read": true,
          "create": false,
          "update": false,
          "delete": false
        },
        "peers": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false
        }
      }
    }
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "email": "string",
    "password": "string",
    "name": "string",
    "role": "string",
    "status": "string",
    "last_login": "string",
    "auto_groups": [
      "string"
    ],
    "is_current": "boolean",
    "is_service_user": "boolean",
    "is_blocked": "boolean",
    "pending_approval": "boolean",
    "issued": "string",
    "idp_id": "string",
    "permissions": {
      "is_restricted": "boolean",
      "modules": {
        "type": "object",
        "additionalProperties": {
          "type": "object",
          "additionalProperties": "boolean",
          "propertyNames": "string"
        },
        "propertyNames": "string",
        "example": {
          "networks": {
            "read": true,
            "create": false,
            "update": false,
            "delete": false
          },
          "peers": {
            "read": false,
            "create": false,
            "update": false,
            "delete": false
          }
        }
      }
    }
  }
]
```

***

## Create a User   (POST /api/users)

Creates a new service user or sends an invite to a regular user

### Request-Body Parameters

**email (type: string; optional)**

User's Email to send invite to

**name (type: string; optional)**

User's full name

**role (type: string; required)**

User's NetBird account role

**auto\_groups (type: string\[]; required)**

Group IDs to auto-assign to peers registered by this user

**is\_service\_user (type: boolean; required)**

Is true if this user is a service user

**POST /api/users Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/users \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "email": "demo@netbird.io",
  "name": "Tom Schulz",
  "role": "admin",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "is_service_user": false
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "email": "demo@netbird.io",
  "name": "Tom Schulz",
  "role": "admin",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "is_service_user": false
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/users',
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

url = "https://api.netbird.io/api/users"
payload = json.dumps({
  "email": "demo@netbird.io",
  "name": "Tom Schulz",
  "role": "admin",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "is_service_user": false
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

  url := "https://api.netbird.io/api/users"
  method := "POST"
  
  payload := strings.NewReader(`{
  "email": "demo@netbird.io",
  "name": "Tom Schulz",
  "role": "admin",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "is_service_user": false
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

url = URI("https://api.netbird.io/api/users")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "email": "demo@netbird.io",
  "name": "Tom Schulz",
  "role": "admin",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "is_service_user": false
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "email": "demo@netbird.io",
  "name": "Tom Schulz",
  "role": "admin",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "is_service_user": false
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/users")
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
  CURLOPT_URL => 'https://api.netbird.io/api/users',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "email": "demo@netbird.io",
  "name": "Tom Schulz",
  "role": "admin",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "is_service_user": false
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
  "id": "google-oauth2|277474792786460067937",
  "email": "demo@netbird.io",
  "password": "super_secure_password",
  "name": "Tom Schulz",
  "role": "admin",
  "status": "active",
  "last_login": "2023-05-05T09:00:35.477782Z",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "is_current": true,
  "is_service_user": false,
  "is_blocked": false,
  "pending_approval": false,
  "issued": "api",
  "idp_id": "okta-abc123",
  "permissions": {
    "is_restricted": {
      "type": "boolean",
      "description": "Indicates whether this User's Peers view is restricted"
    },
    "modules": {
      "networks": {
        "read": true,
        "create": false,
        "update": false,
        "delete": false
      },
      "peers": {
        "read": false,
        "create": false,
        "update": false,
        "delete": false
      }
    }
  }
}
```

**Schema**

```json
{
  "id": "string",
  "email": "string",
  "password": "string",
  "name": "string",
  "role": "string",
  "status": "string",
  "last_login": "string",
  "auto_groups": [
    "string"
  ],
  "is_current": "boolean",
  "is_service_user": "boolean",
  "is_blocked": "boolean",
  "pending_approval": "boolean",
  "issued": "string",
  "idp_id": "string",
  "permissions": {
    "is_restricted": "boolean",
    "modules": {
      "type": "object",
      "additionalProperties": {
        "type": "object",
        "additionalProperties": "boolean",
        "propertyNames": "string"
      },
      "propertyNames": "string",
      "example": {
        "networks": {
          "read": true,
          "create": false,
          "update": false,
          "delete": false
        },
        "peers": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false
        }
      }
    }
  }
}
```

***

## Update a User   (PUT /api/users/{userId})

Update information about a User

### Path Parameters

**userId (type: string; required)**

The unique identifier of a user

### Request-Body Parameters

**role (type: string; required)**

User's NetBird account role

**auto\_groups (type: string\[]; required)**

Group IDs to auto-assign to peers registered by this user

**is\_blocked (type: boolean; required)**

If set to true then user is blocked and can't use the system

**PUT /api/users/{userId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/users/{userId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "role": "admin",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "is_blocked": false
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "role": "admin",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "is_blocked": false
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/users/{userId}',
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

url = "https://api.netbird.io/api/users/{userId}"
payload = json.dumps({
  "role": "admin",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "is_blocked": false
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

  url := "https://api.netbird.io/api/users/{userId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "role": "admin",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "is_blocked": false
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

url = URI("https://api.netbird.io/api/users/{userId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "role": "admin",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "is_blocked": false
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "role": "admin",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "is_blocked": false
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/users/{userId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/users/{userId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "role": "admin",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "is_blocked": false
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
  "id": "google-oauth2|277474792786460067937",
  "email": "demo@netbird.io",
  "password": "super_secure_password",
  "name": "Tom Schulz",
  "role": "admin",
  "status": "active",
  "last_login": "2023-05-05T09:00:35.477782Z",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "is_current": true,
  "is_service_user": false,
  "is_blocked": false,
  "pending_approval": false,
  "issued": "api",
  "idp_id": "okta-abc123",
  "permissions": {
    "is_restricted": {
      "type": "boolean",
      "description": "Indicates whether this User's Peers view is restricted"
    },
    "modules": {
      "networks": {
        "read": true,
        "create": false,
        "update": false,
        "delete": false
      },
      "peers": {
        "read": false,
        "create": false,
        "update": false,
        "delete": false
      }
    }
  }
}
```

**Schema**

```json
{
  "id": "string",
  "email": "string",
  "password": "string",
  "name": "string",
  "role": "string",
  "status": "string",
  "last_login": "string",
  "auto_groups": [
    "string"
  ],
  "is_current": "boolean",
  "is_service_user": "boolean",
  "is_blocked": "boolean",
  "pending_approval": "boolean",
  "issued": "string",
  "idp_id": "string",
  "permissions": {
    "is_restricted": "boolean",
    "modules": {
      "type": "object",
      "additionalProperties": {
        "type": "object",
        "additionalProperties": "boolean",
        "propertyNames": "string"
      },
      "propertyNames": "string",
      "example": {
        "networks": {
          "read": true,
          "create": false,
          "update": false,
          "delete": false
        },
        "peers": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false
        }
      }
    }
  }
}
```

***

## Delete a User   (DELETE /api/users/{userId})

This method removes a user from accessing the system. For this leaves the IDP user intact unless the `--user-delete-from-idp` is passed to management startup.

### Path Parameters

**userId (type: string; required)**

The unique identifier of a user

**DELETE /api/users/{userId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/users/{userId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/users/{userId}',
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

url = "https://api.netbird.io/api/users/{userId}"

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

  url := "https://api.netbird.io/api/users/{userId}"
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

url = URI("https://api.netbird.io/api/users/{userId}")

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
  .url("https://api.netbird.io/api/users/{userId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/users/{userId}',
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

## Resend user invitation   (POST /api/users/{userId}/invite)

Resend user invitation

### Path Parameters

**userId (type: string; required)**

The unique identifier of a user

**POST /api/users/{userId}/invite Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/users/{userId}/invite \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/users/{userId}/invite',
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

url = "https://api.netbird.io/api/users/{userId}/invite"

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

  url := "https://api.netbird.io/api/users/{userId}/invite"
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

url = URI("https://api.netbird.io/api/users/{userId}/invite")

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
  .url("https://api.netbird.io/api/users/{userId}/invite")
  .method("POST")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/users/{userId}/invite',
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

## Approve user   (POST /api/users/{userId}/approve)

Approve a user that is pending approval

### Path Parameters

**userId (type: string; required)**

The unique identifier of a user

**POST /api/users/{userId}/approve Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/users/{userId}/approve \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/users/{userId}/approve',
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

url = "https://api.netbird.io/api/users/{userId}/approve"

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

  url := "https://api.netbird.io/api/users/{userId}/approve"
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

url = URI("https://api.netbird.io/api/users/{userId}/approve")

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
  .url("https://api.netbird.io/api/users/{userId}/approve")
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
  CURLOPT_URL => 'https://api.netbird.io/api/users/{userId}/approve',
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
  "id": "google-oauth2|277474792786460067937",
  "email": "demo@netbird.io",
  "password": "super_secure_password",
  "name": "Tom Schulz",
  "role": "admin",
  "status": "active",
  "last_login": "2023-05-05T09:00:35.477782Z",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "is_current": true,
  "is_service_user": false,
  "is_blocked": false,
  "pending_approval": false,
  "issued": "api",
  "idp_id": "okta-abc123",
  "permissions": {
    "is_restricted": {
      "type": "boolean",
      "description": "Indicates whether this User's Peers view is restricted"
    },
    "modules": {
      "networks": {
        "read": true,
        "create": false,
        "update": false,
        "delete": false
      },
      "peers": {
        "read": false,
        "create": false,
        "update": false,
        "delete": false
      }
    }
  }
}
```

**Schema**

```json
{
  "id": "string",
  "email": "string",
  "password": "string",
  "name": "string",
  "role": "string",
  "status": "string",
  "last_login": "string",
  "auto_groups": [
    "string"
  ],
  "is_current": "boolean",
  "is_service_user": "boolean",
  "is_blocked": "boolean",
  "pending_approval": "boolean",
  "issued": "string",
  "idp_id": "string",
  "permissions": {
    "is_restricted": "boolean",
    "modules": {
      "type": "object",
      "additionalProperties": {
        "type": "object",
        "additionalProperties": "boolean",
        "propertyNames": "string"
      },
      "propertyNames": "string",
      "example": {
        "networks": {
          "read": true,
          "create": false,
          "update": false,
          "delete": false
        },
        "peers": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false
        }
      }
    }
  }
}
```

***

## Reject user   (DELETE /api/users/{userId}/reject)

Reject a user that is pending approval by removing them from the account

### Path Parameters

**userId (type: string; required)**

The unique identifier of a user

**DELETE /api/users/{userId}/reject Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/users/{userId}/reject \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/users/{userId}/reject',
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

url = "https://api.netbird.io/api/users/{userId}/reject"

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

  url := "https://api.netbird.io/api/users/{userId}/reject"
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

url = URI("https://api.netbird.io/api/users/{userId}/reject")

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
  .url("https://api.netbird.io/api/users/{userId}/reject")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/users/{userId}/reject',
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

## Change user password   (PUT /api/users/{userId}/password)

Change the password for a user. Only available when embedded IdP is enabled. Users can only change their own password.

### Path Parameters

**userId (type: string; required)**

The unique identifier of a user

### Request-Body Parameters

**old\_password (type: string; required)**

The current password

**new\_password (type: string; required)**

The new password to set

**PUT /api/users/{userId}/password Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/users/{userId}/password \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "old_password": "currentPassword123",
  "new_password": "newSecurePassword456"
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "old_password": "currentPassword123",
  "new_password": "newSecurePassword456"
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/users/{userId}/password',
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

url = "https://api.netbird.io/api/users/{userId}/password"
payload = json.dumps({
  "old_password": "currentPassword123",
  "new_password": "newSecurePassword456"
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

  url := "https://api.netbird.io/api/users/{userId}/password"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "old_password": "currentPassword123",
  "new_password": "newSecurePassword456"
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

url = URI("https://api.netbird.io/api/users/{userId}/password")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "old_password": "currentPassword123",
  "new_password": "newSecurePassword456"
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "old_password": "currentPassword123",
  "new_password": "newSecurePassword456"
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/users/{userId}/password")
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
  CURLOPT_URL => 'https://api.netbird.io/api/users/{userId}/password',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "old_password": "currentPassword123",
  "new_password": "newSecurePassword456"
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

## Retrieve current user   (GET /api/users/current)

Get information about the current user

**GET /api/users/current Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/users/current \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/users/current',
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

url = "https://api.netbird.io/api/users/current"

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

  url := "https://api.netbird.io/api/users/current"
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

url = URI("https://api.netbird.io/api/users/current")

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
  .url("https://api.netbird.io/api/users/current")
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
  CURLOPT_URL => 'https://api.netbird.io/api/users/current',
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
  "id": "google-oauth2|277474792786460067937",
  "email": "demo@netbird.io",
  "password": "super_secure_password",
  "name": "Tom Schulz",
  "role": "admin",
  "status": "active",
  "last_login": "2023-05-05T09:00:35.477782Z",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "is_current": true,
  "is_service_user": false,
  "is_blocked": false,
  "pending_approval": false,
  "issued": "api",
  "idp_id": "okta-abc123",
  "permissions": {
    "is_restricted": {
      "type": "boolean",
      "description": "Indicates whether this User's Peers view is restricted"
    },
    "modules": {
      "networks": {
        "read": true,
        "create": false,
        "update": false,
        "delete": false
      },
      "peers": {
        "read": false,
        "create": false,
        "update": false,
        "delete": false
      }
    }
  }
}
```

**Schema**

```json
{
  "id": "string",
  "email": "string",
  "password": "string",
  "name": "string",
  "role": "string",
  "status": "string",
  "last_login": "string",
  "auto_groups": [
    "string"
  ],
  "is_current": "boolean",
  "is_service_user": "boolean",
  "is_blocked": "boolean",
  "pending_approval": "boolean",
  "issued": "string",
  "idp_id": "string",
  "permissions": {
    "is_restricted": "boolean",
    "modules": {
      "type": "object",
      "additionalProperties": {
        "type": "object",
        "additionalProperties": "boolean",
        "propertyNames": "string"
      },
      "propertyNames": "string",
      "example": {
        "networks": {
          "read": true,
          "create": false,
          "update": false,
          "delete": false
        },
        "peers": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false
        }
      }
    }
  }
}
```

***

## List user invites   (GET /api/users/invites)

Lists all pending invites for the account. Only available when embedded IdP is enabled.

**GET /api/users/invites Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/users/invites \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/users/invites',
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

url = "https://api.netbird.io/api/users/invites"

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

  url := "https://api.netbird.io/api/users/invites"
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

url = URI("https://api.netbird.io/api/users/invites")

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
  .url("https://api.netbird.io/api/users/invites")
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
  CURLOPT_URL => 'https://api.netbird.io/api/users/invites',
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
    "id": "d5p7eedra0h0lt6f59hg",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "user",
    "auto_groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ],
    "expires_at": "2024-01-25T10:00:00Z",
    "created_at": "2024-01-22T10:00:00Z",
    "expired": false,
    "invite_token": "nbi_Xk5Lz9mP2vQwRtYu1aN3bC4dE5fGh0ABC123"
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "email": "string",
    "name": "string",
    "role": "string",
    "auto_groups": [
      "string"
    ],
    "expires_at": "string",
    "created_at": "string",
    "expired": "boolean",
    "invite_token": "string"
  }
]
```

***

## Create a user invite   (POST /api/users/invites)

Creates an invite link for a new user. Only available when embedded IdP is enabled. The user is not created until they accept the invite.

### Request-Body Parameters

**email (type: string; required)**

User's email address

**name (type: string; required)**

User's full name

**role (type: string; required)**

User's NetBird account role

**auto\_groups (type: string\[]; required)**

Group IDs to auto-assign to peers registered by this user

**expires\_in (type: integer; optional)**

Invite expiration time in seconds (default 72 hours)

**POST /api/users/invites Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/users/invites \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "email": "user@example.com",
  "name": "John Doe",
  "role": "user",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "expires_in": 259200
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "email": "user@example.com",
  "name": "John Doe",
  "role": "user",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "expires_in": 259200
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/users/invites',
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

url = "https://api.netbird.io/api/users/invites"
payload = json.dumps({
  "email": "user@example.com",
  "name": "John Doe",
  "role": "user",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "expires_in": 259200
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

  url := "https://api.netbird.io/api/users/invites"
  method := "POST"
  
  payload := strings.NewReader(`{
  "email": "user@example.com",
  "name": "John Doe",
  "role": "user",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "expires_in": 259200
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

url = URI("https://api.netbird.io/api/users/invites")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "email": "user@example.com",
  "name": "John Doe",
  "role": "user",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "expires_in": 259200
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "email": "user@example.com",
  "name": "John Doe",
  "role": "user",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "expires_in": 259200
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/users/invites")
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
  CURLOPT_URL => 'https://api.netbird.io/api/users/invites',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "email": "user@example.com",
  "name": "John Doe",
  "role": "user",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "expires_in": 259200
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
  "id": "d5p7eedra0h0lt6f59hg",
  "email": "user@example.com",
  "name": "John Doe",
  "role": "user",
  "auto_groups": [
    "ch8i4ug6lnn4g9hqv7m0"
  ],
  "expires_at": "2024-01-25T10:00:00Z",
  "created_at": "2024-01-22T10:00:00Z",
  "expired": false,
  "invite_token": "nbi_Xk5Lz9mP2vQwRtYu1aN3bC4dE5fGh0ABC123"
}
```

**Schema**

```json
{
  "id": "string",
  "email": "string",
  "name": "string",
  "role": "string",
  "auto_groups": [
    "string"
  ],
  "expires_at": "string",
  "created_at": "string",
  "expired": "boolean",
  "invite_token": "string"
}
```

***

## Delete a user invite   (DELETE /api/users/invites/{inviteId})

Deletes a pending invite. Only available when embedded IdP is enabled.

### Path Parameters

**inviteId (type: string; required)**

The ID of the invite to delete

**DELETE /api/users/invites/{inviteId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/users/invites/{inviteId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/users/invites/{inviteId}',
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

url = "https://api.netbird.io/api/users/invites/{inviteId}"

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

  url := "https://api.netbird.io/api/users/invites/{inviteId}"
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

url = URI("https://api.netbird.io/api/users/invites/{inviteId}")

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
  .url("https://api.netbird.io/api/users/invites/{inviteId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/users/invites/{inviteId}',
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

## Regenerate a user invite   (POST /api/users/invites/{inviteId}/regenerate)

Regenerates an invite link for an existing invite. Invalidates the previous token and creates a new one.

### Path Parameters

**inviteId (type: string; required)**

The ID of the invite to regenerate

### Request-Body Parameters

**expires\_in (type: integer; optional)**

Invite expiration time in seconds (default 72 hours)

**POST /api/users/invites/{inviteId}/regenerate Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/users/invites/{inviteId}/regenerate \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "expires_in": 259200
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "expires_in": 259200
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/users/invites/{inviteId}/regenerate',
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

url = "https://api.netbird.io/api/users/invites/{inviteId}/regenerate"
payload = json.dumps({
  "expires_in": 259200
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

  url := "https://api.netbird.io/api/users/invites/{inviteId}/regenerate"
  method := "POST"
  
  payload := strings.NewReader(`{
  "expires_in": 259200
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

url = URI("https://api.netbird.io/api/users/invites/{inviteId}/regenerate")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "expires_in": 259200
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "expires_in": 259200
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/users/invites/{inviteId}/regenerate")
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
  CURLOPT_URL => 'https://api.netbird.io/api/users/invites/{inviteId}/regenerate',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "expires_in": 259200
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
  "invite_token": "nbi_Xk5Lz9mP2vQwRtYu1aN3bC4dE5fGh0ABC123",
  "invite_expires_at": "2024-01-28T10:00:00Z"
}
```

**Schema**

```json
{
  "invite_token": "string",
  "invite_expires_at": "string"
}
```

***

## Get invite information   (GET /api/users/invites/{token})

Retrieves public information about an invite. This endpoint is unauthenticated and protected by the token itself.

### Path Parameters

**token (type: string; required)**

The invite token

**GET /api/users/invites/{token} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/users/invites/{token} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/users/invites/{token}',
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

url = "https://api.netbird.io/api/users/invites/{token}"

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

  url := "https://api.netbird.io/api/users/invites/{token}"
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

url = URI("https://api.netbird.io/api/users/invites/{token}")

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
  .url("https://api.netbird.io/api/users/invites/{token}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/users/invites/{token}',
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
  "email": "user@example.com",
  "name": "John Doe",
  "expires_at": "2024-01-25T10:00:00Z",
  "valid": true,
  "invited_by": "Admin User"
}
```

**Schema**

```json
{
  "email": "string",
  "name": "string",
  "expires_at": "string",
  "valid": "boolean",
  "invited_by": "string"
}
```

***

## Accept an invite   (POST /api/users/invites/{token}/accept)

Accepts an invite and creates the user with the provided password. This endpoint is unauthenticated and protected by the token itself.

### Path Parameters

**token (type: string; required)**

The invite token

### Request-Body Parameters

**password (type: string; required; minLen: 8)**

The password the user wants to set. Must be at least 8 characters long and contain at least one uppercase letter, one digit, and one special character (any character that is not a letter or digit, including spaces).

**POST /api/users/invites/{token}/accept Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/users/invites/{token}/accept \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "password": "SecurePass123!"
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "password": "SecurePass123!"
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/users/invites/{token}/accept',
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

url = "https://api.netbird.io/api/users/invites/{token}/accept"
payload = json.dumps({
  "password": "SecurePass123!"
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

  url := "https://api.netbird.io/api/users/invites/{token}/accept"
  method := "POST"
  
  payload := strings.NewReader(`{
  "password": "SecurePass123!"
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

url = URI("https://api.netbird.io/api/users/invites/{token}/accept")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "password": "SecurePass123!"
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "password": "SecurePass123!"
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/users/invites/{token}/accept")
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
  CURLOPT_URL => 'https://api.netbird.io/api/users/invites/{token}/accept',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "password": "SecurePass123!"
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
  "success": true
}
```

**Schema**

```json
{
  "success": "boolean"
}
```

***
