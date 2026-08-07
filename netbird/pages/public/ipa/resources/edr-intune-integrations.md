> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/ipa/resources/edr-intune-integrations.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/ipa/resources/edr-intune-integrations.mdx)

## Create EDR Intune Integration   (POST /api/integrations/edr/intune)

Creates a new EDR Intune integration for the authenticated account.

### Request-Body Parameters

**client\_id (type: string; required)**

The Azure application client id

**tenant\_id (type: string; required)**

The Azure tenant id

**secret (type: string; required)**

The Azure application client secret

**groups (type: string\[]; required)**

The Groups this integrations applies to

**last\_synced\_interval (type: integer; required; min: 24)**

The devices last sync requirement interval in hours. Minimum value is 24 hours.

**enabled (type: boolean; optional)**

Indicates whether the integration is enabled

**POST /api/integrations/edr/intune Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/integrations/edr/intune \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "client_id": {
    "type": "string",
    "description": "The Azure application client id"
  },
  "tenant_id": {
    "type": "string",
    "description": "The Azure tenant id"
  },
  "secret": {
    "type": "string",
    "description": "The Azure application client secret"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours.",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  }
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "client_id": {
    "type": "string",
    "description": "The Azure application client id"
  },
  "tenant_id": {
    "type": "string",
    "description": "The Azure tenant id"
  },
  "secret": {
    "type": "string",
    "description": "The Azure application client secret"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours.",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  }
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/integrations/edr/intune',
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

url = "https://api.netbird.io/api/integrations/edr/intune"
payload = json.dumps({
  "client_id": {
    "type": "string",
    "description": "The Azure application client id"
  },
  "tenant_id": {
    "type": "string",
    "description": "The Azure tenant id"
  },
  "secret": {
    "type": "string",
    "description": "The Azure application client secret"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours.",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
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

  url := "https://api.netbird.io/api/integrations/edr/intune"
  method := "POST"
  
  payload := strings.NewReader(`{
  "client_id": {
    "type": "string",
    "description": "The Azure application client id"
  },
  "tenant_id": {
    "type": "string",
    "description": "The Azure tenant id"
  },
  "secret": {
    "type": "string",
    "description": "The Azure application client secret"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours.",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
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

url = URI("https://api.netbird.io/api/integrations/edr/intune")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "client_id": {
    "type": "string",
    "description": "The Azure application client id"
  },
  "tenant_id": {
    "type": "string",
    "description": "The Azure tenant id"
  },
  "secret": {
    "type": "string",
    "description": "The Azure application client secret"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours.",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
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
  "client_id": {
    "type": "string",
    "description": "The Azure application client id"
  },
  "tenant_id": {
    "type": "string",
    "description": "The Azure tenant id"
  },
  "secret": {
    "type": "string",
    "description": "The Azure application client secret"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours.",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  }
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/integrations/edr/intune")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/edr/intune',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "client_id": {
    "type": "string",
    "description": "The Azure application client id"
  },
  "tenant_id": {
    "type": "string",
    "description": "The Azure tenant id"
  },
  "secret": {
    "type": "string",
    "description": "The Azure application client secret"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours.",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
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
  "id": 123,
  "account_id": "acc_abcdef123456",
  "last_synced_at": "2023-05-15T10:30:00Z",
  "created_by": {
    "type": "string",
    "description": "The user id that created the integration"
  },
  "created_at": "2023-05-15T10:30:00Z",
  "updated_at": "2023-05-16T11:45:00Z",
  "client_id": "acc_abcdef123456",
  "tenant_id": "acc_abcdef123456",
  "groups": [
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
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours."
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled"
  }
}
```

**Schema**

```json
{
  "id": "integer",
  "account_id": "string",
  "last_synced_at": "string",
  "created_by": "string",
  "created_at": "string",
  "updated_at": "string",
  "client_id": "string",
  "tenant_id": "string",
  "groups": [
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
  ],
  "last_synced_interval": "integer",
  "enabled": "boolean"
}
```

***

## Get EDR Intune Integration   (GET /api/integrations/edr/intune)

Retrieves a specific EDR Intune integration by its ID.

**GET /api/integrations/edr/intune Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/integrations/edr/intune \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/integrations/edr/intune',
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

url = "https://api.netbird.io/api/integrations/edr/intune"

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

  url := "https://api.netbird.io/api/integrations/edr/intune"
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

url = URI("https://api.netbird.io/api/integrations/edr/intune")

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
  .url("https://api.netbird.io/api/integrations/edr/intune")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/edr/intune',
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
  "id": 123,
  "account_id": "acc_abcdef123456",
  "last_synced_at": "2023-05-15T10:30:00Z",
  "created_by": {
    "type": "string",
    "description": "The user id that created the integration"
  },
  "created_at": "2023-05-15T10:30:00Z",
  "updated_at": "2023-05-16T11:45:00Z",
  "client_id": "acc_abcdef123456",
  "tenant_id": "acc_abcdef123456",
  "groups": [
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
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours."
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled"
  }
}
```

**Schema**

```json
{
  "id": "integer",
  "account_id": "string",
  "last_synced_at": "string",
  "created_by": "string",
  "created_at": "string",
  "updated_at": "string",
  "client_id": "string",
  "tenant_id": "string",
  "groups": [
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
  ],
  "last_synced_interval": "integer",
  "enabled": "boolean"
}
```

***

## Update EDR Intune Integration   (PUT /api/integrations/edr/intune)

Updates an existing EDR Intune Integration. The request body structure is `EDRIntuneRequest`.

### Request-Body Parameters

**client\_id (type: string; required)**

The Azure application client id

**tenant\_id (type: string; required)**

The Azure tenant id

**secret (type: string; required)**

The Azure application client secret

**groups (type: string\[]; required)**

The Groups this integrations applies to

**last\_synced\_interval (type: integer; required; min: 24)**

The devices last sync requirement interval in hours. Minimum value is 24 hours.

**enabled (type: boolean; optional)**

Indicates whether the integration is enabled

**PUT /api/integrations/edr/intune Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/integrations/edr/intune \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "client_id": {
    "type": "string",
    "description": "The Azure application client id"
  },
  "tenant_id": {
    "type": "string",
    "description": "The Azure tenant id"
  },
  "secret": {
    "type": "string",
    "description": "The Azure application client secret"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours.",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  }
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "client_id": {
    "type": "string",
    "description": "The Azure application client id"
  },
  "tenant_id": {
    "type": "string",
    "description": "The Azure tenant id"
  },
  "secret": {
    "type": "string",
    "description": "The Azure application client secret"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours.",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  }
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/integrations/edr/intune',
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

url = "https://api.netbird.io/api/integrations/edr/intune"
payload = json.dumps({
  "client_id": {
    "type": "string",
    "description": "The Azure application client id"
  },
  "tenant_id": {
    "type": "string",
    "description": "The Azure tenant id"
  },
  "secret": {
    "type": "string",
    "description": "The Azure application client secret"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours.",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
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

  url := "https://api.netbird.io/api/integrations/edr/intune"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "client_id": {
    "type": "string",
    "description": "The Azure application client id"
  },
  "tenant_id": {
    "type": "string",
    "description": "The Azure tenant id"
  },
  "secret": {
    "type": "string",
    "description": "The Azure application client secret"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours.",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
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

url = URI("https://api.netbird.io/api/integrations/edr/intune")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "client_id": {
    "type": "string",
    "description": "The Azure application client id"
  },
  "tenant_id": {
    "type": "string",
    "description": "The Azure tenant id"
  },
  "secret": {
    "type": "string",
    "description": "The Azure application client secret"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours.",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
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
  "client_id": {
    "type": "string",
    "description": "The Azure application client id"
  },
  "tenant_id": {
    "type": "string",
    "description": "The Azure tenant id"
  },
  "secret": {
    "type": "string",
    "description": "The Azure application client secret"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours.",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  }
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/integrations/edr/intune")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/edr/intune',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "client_id": {
    "type": "string",
    "description": "The Azure application client id"
  },
  "tenant_id": {
    "type": "string",
    "description": "The Azure tenant id"
  },
  "secret": {
    "type": "string",
    "description": "The Azure application client secret"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours.",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
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
  "id": 123,
  "account_id": "acc_abcdef123456",
  "last_synced_at": "2023-05-15T10:30:00Z",
  "created_by": {
    "type": "string",
    "description": "The user id that created the integration"
  },
  "created_at": "2023-05-15T10:30:00Z",
  "updated_at": "2023-05-16T11:45:00Z",
  "client_id": "acc_abcdef123456",
  "tenant_id": "acc_abcdef123456",
  "groups": [
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
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours."
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled"
  }
}
```

**Schema**

```json
{
  "id": "integer",
  "account_id": "string",
  "last_synced_at": "string",
  "created_by": "string",
  "created_at": "string",
  "updated_at": "string",
  "client_id": "string",
  "tenant_id": "string",
  "groups": [
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
  ],
  "last_synced_interval": "integer",
  "enabled": "boolean"
}
```

***

## Delete EDR Intune Integration   (DELETE /api/integrations/edr/intune)

Deletes an EDR Intune Integration by its ID.

**DELETE /api/integrations/edr/intune Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/integrations/edr/intune \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/integrations/edr/intune',
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

url = "https://api.netbird.io/api/integrations/edr/intune"

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

  url := "https://api.netbird.io/api/integrations/edr/intune"
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

url = URI("https://api.netbird.io/api/integrations/edr/intune")

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
  .url("https://api.netbird.io/api/integrations/edr/intune")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/edr/intune',
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
