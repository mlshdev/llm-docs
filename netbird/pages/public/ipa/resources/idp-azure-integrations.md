> Release-pinned source for NetBird v0.76.1: [netbirdio/docs@14375a092774f250d45a85f6d5f3c524d99fd111:src/pages/ipa/resources/idp-azure-integrations.mdx](https://github.com/netbirdio/docs/blob/14375a092774f250d45a85f6d5f3c524d99fd111/src/pages/ipa/resources/idp-azure-integrations.mdx)

## Create Azure IDP Integration   (POST /api/integrations/azure-idp)

Creates a new Azure AD IDP integration

### Request-Body Parameters

**group\_prefixes (type: string\[]; optional)**

List of start\_with string patterns for groups to sync

**user\_group\_prefixes (type: string\[]; optional)**

List of start\_with string patterns for groups which users to sync

**connector\_id (type: string; optional)**

DEX connector ID for embedded IDP setups

**client\_secret (type: string; required)**

Base64-encoded Azure AD client secret

**client\_id (type: string; required)**

Azure AD application (client) ID

**tenant\_id (type: string; required)**

Azure AD tenant ID

**sync\_interval (type: integer; optional; min: 300)**

Sync interval in seconds (minimum 300). Defaults to 300 if not specified.

**host (type: string; required; values: microsoft.com, microsoft.us)**

Azure host domain for the Graph API

**POST /api/integrations/azure-idp Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/integrations/azure-idp \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "group_prefixes": [
    "Engineering",
    "Sales"
  ],
  "user_group_prefixes": [
    "Users"
  ],
  "connector_id": {
    "type": "string",
    "description": "DEX connector ID for embedded IDP setups"
  },
  "client_secret": "c2VjcmV0...",
  "client_id": "12345678-1234-1234-1234-123456789012",
  "tenant_id": "87654321-4321-4321-4321-210987654321",
  "sync_interval": 300,
  "host": "microsoft.com"
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "group_prefixes": [
    "Engineering",
    "Sales"
  ],
  "user_group_prefixes": [
    "Users"
  ],
  "connector_id": {
    "type": "string",
    "description": "DEX connector ID for embedded IDP setups"
  },
  "client_secret": "c2VjcmV0...",
  "client_id": "12345678-1234-1234-1234-123456789012",
  "tenant_id": "87654321-4321-4321-4321-210987654321",
  "sync_interval": 300,
  "host": "microsoft.com"
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/integrations/azure-idp',
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

url = "https://api.netbird.io/api/integrations/azure-idp"
payload = json.dumps({
  "group_prefixes": [
    "Engineering",
    "Sales"
  ],
  "user_group_prefixes": [
    "Users"
  ],
  "connector_id": {
    "type": "string",
    "description": "DEX connector ID for embedded IDP setups"
  },
  "client_secret": "c2VjcmV0...",
  "client_id": "12345678-1234-1234-1234-123456789012",
  "tenant_id": "87654321-4321-4321-4321-210987654321",
  "sync_interval": 300,
  "host": "microsoft.com"
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

  url := "https://api.netbird.io/api/integrations/azure-idp"
  method := "POST"
  
  payload := strings.NewReader(`{
  "group_prefixes": [
    "Engineering",
    "Sales"
  ],
  "user_group_prefixes": [
    "Users"
  ],
  "connector_id": {
    "type": "string",
    "description": "DEX connector ID for embedded IDP setups"
  },
  "client_secret": "c2VjcmV0...",
  "client_id": "12345678-1234-1234-1234-123456789012",
  "tenant_id": "87654321-4321-4321-4321-210987654321",
  "sync_interval": 300,
  "host": "microsoft.com"
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

url = URI("https://api.netbird.io/api/integrations/azure-idp")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "group_prefixes": [
    "Engineering",
    "Sales"
  ],
  "user_group_prefixes": [
    "Users"
  ],
  "connector_id": {
    "type": "string",
    "description": "DEX connector ID for embedded IDP setups"
  },
  "client_secret": "c2VjcmV0...",
  "client_id": "12345678-1234-1234-1234-123456789012",
  "tenant_id": "87654321-4321-4321-4321-210987654321",
  "sync_interval": 300,
  "host": "microsoft.com"
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "group_prefixes": [
    "Engineering",
    "Sales"
  ],
  "user_group_prefixes": [
    "Users"
  ],
  "connector_id": {
    "type": "string",
    "description": "DEX connector ID for embedded IDP setups"
  },
  "client_secret": "c2VjcmV0...",
  "client_id": "12345678-1234-1234-1234-123456789012",
  "tenant_id": "87654321-4321-4321-4321-210987654321",
  "sync_interval": 300,
  "host": "microsoft.com"
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/integrations/azure-idp")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/azure-idp',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "group_prefixes": [
    "Engineering",
    "Sales"
  ],
  "user_group_prefixes": [
    "Users"
  ],
  "connector_id": {
    "type": "string",
    "description": "DEX connector ID for embedded IDP setups"
  },
  "client_secret": "c2VjcmV0...",
  "client_id": "12345678-1234-1234-1234-123456789012",
  "tenant_id": "87654321-4321-4321-4321-210987654321",
  "sync_interval": 300,
  "host": "microsoft.com"
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
  "enabled": true,
  "group_prefixes": [
    "Engineering",
    "Sales"
  ],
  "user_group_prefixes": [
    "Users"
  ],
  "connector_id": {
    "type": "string",
    "description": "DEX connector ID for embedded IDP setups"
  },
  "id": 1,
  "client_id": "12345678-1234-1234-1234-123456789012",
  "tenant_id": "87654321-4321-4321-4321-210987654321",
  "sync_interval": 300,
  "host": "microsoft.com",
  "last_synced_at": "2023-05-15T10:30:00Z"
}
```

**Schema**

```json
{
  "enabled": "boolean",
  "group_prefixes": [
    "string"
  ],
  "user_group_prefixes": [
    "string"
  ],
  "connector_id": "string",
  "id": "integer",
  "client_id": "string",
  "tenant_id": "string",
  "sync_interval": "integer",
  "host": "string",
  "last_synced_at": "string"
}
```

***

## Get All Azure IDP Integrations   (GET /api/integrations/azure-idp)

Retrieves all Azure AD IDP integrations for the authenticated account

**GET /api/integrations/azure-idp Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/integrations/azure-idp \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/integrations/azure-idp',
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

url = "https://api.netbird.io/api/integrations/azure-idp"

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

  url := "https://api.netbird.io/api/integrations/azure-idp"
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

url = URI("https://api.netbird.io/api/integrations/azure-idp")

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
  .url("https://api.netbird.io/api/integrations/azure-idp")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/azure-idp',
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
    "enabled": true,
    "group_prefixes": [
      "Engineering",
      "Sales"
    ],
    "user_group_prefixes": [
      "Users"
    ],
    "connector_id": {
      "type": "string",
      "description": "DEX connector ID for embedded IDP setups"
    },
    "id": 1,
    "client_id": "12345678-1234-1234-1234-123456789012",
    "tenant_id": "87654321-4321-4321-4321-210987654321",
    "sync_interval": 300,
    "host": "microsoft.com",
    "last_synced_at": "2023-05-15T10:30:00Z"
  }
]
```

**Schema**

```json
[
  {
    "enabled": "boolean",
    "group_prefixes": [
      "string"
    ],
    "user_group_prefixes": [
      "string"
    ],
    "connector_id": "string",
    "id": "integer",
    "client_id": "string",
    "tenant_id": "string",
    "sync_interval": "integer",
    "host": "string",
    "last_synced_at": "string"
  }
]
```

***

## Get Azure IDP Integration   (GET /api/integrations/azure-idp/{id})

Retrieves an Azure IDP integration by ID.

**GET /api/integrations/azure-idp/{id} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/integrations/azure-idp/{id} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/integrations/azure-idp/{id}',
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

url = "https://api.netbird.io/api/integrations/azure-idp/{id}"

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

  url := "https://api.netbird.io/api/integrations/azure-idp/{id}"
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

url = URI("https://api.netbird.io/api/integrations/azure-idp/{id}")

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
  .url("https://api.netbird.io/api/integrations/azure-idp/{id}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/azure-idp/{id}',
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
  "enabled": true,
  "group_prefixes": [
    "Engineering",
    "Sales"
  ],
  "user_group_prefixes": [
    "Users"
  ],
  "connector_id": {
    "type": "string",
    "description": "DEX connector ID for embedded IDP setups"
  },
  "id": 1,
  "client_id": "12345678-1234-1234-1234-123456789012",
  "tenant_id": "87654321-4321-4321-4321-210987654321",
  "sync_interval": 300,
  "host": "microsoft.com",
  "last_synced_at": "2023-05-15T10:30:00Z"
}
```

**Schema**

```json
{
  "enabled": "boolean",
  "group_prefixes": [
    "string"
  ],
  "user_group_prefixes": [
    "string"
  ],
  "connector_id": "string",
  "id": "integer",
  "client_id": "string",
  "tenant_id": "string",
  "sync_interval": "integer",
  "host": "string",
  "last_synced_at": "string"
}
```

***

## Update Azure IDP Integration   (PUT /api/integrations/azure-idp/{id})

Updates an existing Azure AD IDP integration.

### Request-Body Parameters

**enabled (type: boolean; optional)**

Whether the integration is enabled

**group\_prefixes (type: string\[]; optional)**

List of start\_with string patterns for groups to sync

**user\_group\_prefixes (type: string\[]; optional)**

List of start\_with string patterns for groups which users to sync

**connector\_id (type: string; optional)**

DEX connector ID for embedded IDP setups

**client\_secret (type: string; optional)**

Base64-encoded Azure AD client secret

**client\_id (type: string; optional)**

Azure AD application (client) ID

**tenant\_id (type: string; optional)**

Azure AD tenant ID

**sync\_interval (type: integer; optional; min: 300)**

Sync interval in seconds (minimum 300)

**PUT /api/integrations/azure-idp/{id} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/integrations/azure-idp/{id} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "enabled": true,
  "group_prefixes": [
    "Engineering",
    "Sales"
  ],
  "user_group_prefixes": [
    "Users"
  ],
  "connector_id": {
    "type": "string",
    "description": "DEX connector ID for embedded IDP setups"
  },
  "client_secret": {
    "type": "string",
    "description": "Base64-encoded Azure AD client secret"
  },
  "client_id": {
    "type": "string",
    "description": "Azure AD application (client) ID"
  },
  "tenant_id": {
    "type": "string",
    "description": "Azure AD tenant ID"
  },
  "sync_interval": {
    "type": "integer",
    "description": "Sync interval in seconds (minimum 300)",
    "minimum": 300
  }
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "enabled": true,
  "group_prefixes": [
    "Engineering",
    "Sales"
  ],
  "user_group_prefixes": [
    "Users"
  ],
  "connector_id": {
    "type": "string",
    "description": "DEX connector ID for embedded IDP setups"
  },
  "client_secret": {
    "type": "string",
    "description": "Base64-encoded Azure AD client secret"
  },
  "client_id": {
    "type": "string",
    "description": "Azure AD application (client) ID"
  },
  "tenant_id": {
    "type": "string",
    "description": "Azure AD tenant ID"
  },
  "sync_interval": {
    "type": "integer",
    "description": "Sync interval in seconds (minimum 300)",
    "minimum": 300
  }
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/integrations/azure-idp/{id}',
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

url = "https://api.netbird.io/api/integrations/azure-idp/{id}"
payload = json.dumps({
  "enabled": true,
  "group_prefixes": [
    "Engineering",
    "Sales"
  ],
  "user_group_prefixes": [
    "Users"
  ],
  "connector_id": {
    "type": "string",
    "description": "DEX connector ID for embedded IDP setups"
  },
  "client_secret": {
    "type": "string",
    "description": "Base64-encoded Azure AD client secret"
  },
  "client_id": {
    "type": "string",
    "description": "Azure AD application (client) ID"
  },
  "tenant_id": {
    "type": "string",
    "description": "Azure AD tenant ID"
  },
  "sync_interval": {
    "type": "integer",
    "description": "Sync interval in seconds (minimum 300)",
    "minimum": 300
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

  url := "https://api.netbird.io/api/integrations/azure-idp/{id}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "enabled": true,
  "group_prefixes": [
    "Engineering",
    "Sales"
  ],
  "user_group_prefixes": [
    "Users"
  ],
  "connector_id": {
    "type": "string",
    "description": "DEX connector ID for embedded IDP setups"
  },
  "client_secret": {
    "type": "string",
    "description": "Base64-encoded Azure AD client secret"
  },
  "client_id": {
    "type": "string",
    "description": "Azure AD application (client) ID"
  },
  "tenant_id": {
    "type": "string",
    "description": "Azure AD tenant ID"
  },
  "sync_interval": {
    "type": "integer",
    "description": "Sync interval in seconds (minimum 300)",
    "minimum": 300
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

url = URI("https://api.netbird.io/api/integrations/azure-idp/{id}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "enabled": true,
  "group_prefixes": [
    "Engineering",
    "Sales"
  ],
  "user_group_prefixes": [
    "Users"
  ],
  "connector_id": {
    "type": "string",
    "description": "DEX connector ID for embedded IDP setups"
  },
  "client_secret": {
    "type": "string",
    "description": "Base64-encoded Azure AD client secret"
  },
  "client_id": {
    "type": "string",
    "description": "Azure AD application (client) ID"
  },
  "tenant_id": {
    "type": "string",
    "description": "Azure AD tenant ID"
  },
  "sync_interval": {
    "type": "integer",
    "description": "Sync interval in seconds (minimum 300)",
    "minimum": 300
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
  "enabled": true,
  "group_prefixes": [
    "Engineering",
    "Sales"
  ],
  "user_group_prefixes": [
    "Users"
  ],
  "connector_id": {
    "type": "string",
    "description": "DEX connector ID for embedded IDP setups"
  },
  "client_secret": {
    "type": "string",
    "description": "Base64-encoded Azure AD client secret"
  },
  "client_id": {
    "type": "string",
    "description": "Azure AD application (client) ID"
  },
  "tenant_id": {
    "type": "string",
    "description": "Azure AD tenant ID"
  },
  "sync_interval": {
    "type": "integer",
    "description": "Sync interval in seconds (minimum 300)",
    "minimum": 300
  }
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/integrations/azure-idp/{id}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/azure-idp/{id}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "enabled": true,
  "group_prefixes": [
    "Engineering",
    "Sales"
  ],
  "user_group_prefixes": [
    "Users"
  ],
  "connector_id": {
    "type": "string",
    "description": "DEX connector ID for embedded IDP setups"
  },
  "client_secret": {
    "type": "string",
    "description": "Base64-encoded Azure AD client secret"
  },
  "client_id": {
    "type": "string",
    "description": "Azure AD application (client) ID"
  },
  "tenant_id": {
    "type": "string",
    "description": "Azure AD tenant ID"
  },
  "sync_interval": {
    "type": "integer",
    "description": "Sync interval in seconds (minimum 300)",
    "minimum": 300
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
  "enabled": true,
  "group_prefixes": [
    "Engineering",
    "Sales"
  ],
  "user_group_prefixes": [
    "Users"
  ],
  "connector_id": {
    "type": "string",
    "description": "DEX connector ID for embedded IDP setups"
  },
  "id": 1,
  "client_id": "12345678-1234-1234-1234-123456789012",
  "tenant_id": "87654321-4321-4321-4321-210987654321",
  "sync_interval": 300,
  "host": "microsoft.com",
  "last_synced_at": "2023-05-15T10:30:00Z"
}
```

**Schema**

```json
{
  "enabled": "boolean",
  "group_prefixes": [
    "string"
  ],
  "user_group_prefixes": [
    "string"
  ],
  "connector_id": "string",
  "id": "integer",
  "client_id": "string",
  "tenant_id": "string",
  "sync_interval": "integer",
  "host": "string",
  "last_synced_at": "string"
}
```

***

## Delete Azure IDP Integration   (DELETE /api/integrations/azure-idp/{id})

Deletes an Azure IDP integration by ID.

**DELETE /api/integrations/azure-idp/{id} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/integrations/azure-idp/{id} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/integrations/azure-idp/{id}',
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

url = "https://api.netbird.io/api/integrations/azure-idp/{id}"

headers = {     
  'Accept': 'application/json',
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

  url := "https://api.netbird.io/api/integrations/azure-idp/{id}"
  method := "DELETE"
  
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

url = URI("https://api.netbird.io/api/integrations/azure-idp/{id}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Delete.new(url)
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();

Request request = new Request.Builder()
  .url("https://api.netbird.io/api/integrations/azure-idp/{id}")
  .method("DELETE")    
  .addHeader("Accept", "application/json")
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/azure-idp/{id}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'DELETE',  
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
{}
```

**Schema**

```json
{
  "type": "object",
  "example": {}
}
```

***

## Sync Azure IDP Integration   (POST /api/integrations/azure-idp/{id}/sync)

Triggers a manual synchronization for an Azure IDP integration.

**POST /api/integrations/azure-idp/{id}/sync Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/integrations/azure-idp/{id}/sync \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/integrations/azure-idp/{id}/sync',
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

url = "https://api.netbird.io/api/integrations/azure-idp/{id}/sync"

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

  url := "https://api.netbird.io/api/integrations/azure-idp/{id}/sync"
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

url = URI("https://api.netbird.io/api/integrations/azure-idp/{id}/sync")

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
  .url("https://api.netbird.io/api/integrations/azure-idp/{id}/sync")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/azure-idp/{id}/sync',
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
  "result": "ok"
}
```

**Schema**

```json
{
  "result": "string"
}
```

***

## Get Azure Integration Sync Logs   (GET /api/integrations/azure-idp/{id}/logs)

Retrieves synchronization logs for an Azure IDP integration.

**GET /api/integrations/azure-idp/{id}/logs Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/integrations/azure-idp/{id}/logs \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/integrations/azure-idp/{id}/logs',
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

url = "https://api.netbird.io/api/integrations/azure-idp/{id}/logs"

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

  url := "https://api.netbird.io/api/integrations/azure-idp/{id}/logs"
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

url = URI("https://api.netbird.io/api/integrations/azure-idp/{id}/logs")

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
  .url("https://api.netbird.io/api/integrations/azure-idp/{id}/logs")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/azure-idp/{id}/logs',
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
    "id": 123,
    "level": "info",
    "timestamp": "2023-05-15T10:30:00Z",
    "message": "Successfully synchronized users and groups"
  }
]
```

**Schema**

```json
[
  {
    "id": "integer",
    "level": "string",
    "timestamp": "string",
    "message": "string"
  }
]
```

***
