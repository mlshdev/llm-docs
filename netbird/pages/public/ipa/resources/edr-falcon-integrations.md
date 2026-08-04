> Release-pinned source for NetBird v0.76.1: [netbirdio/docs@14375a092774f250d45a85f6d5f3c524d99fd111:src/pages/ipa/resources/edr-falcon-integrations.mdx](https://github.com/netbirdio/docs/blob/14375a092774f250d45a85f6d5f3c524d99fd111/src/pages/ipa/resources/edr-falcon-integrations.mdx)

## Create EDR Falcon Integration   (POST /api/integrations/edr/falcon)

Creates a new EDR Falcon integration

### Request-Body Parameters

**client\_id (type: string; required)**

CrowdStrike API client ID

**secret (type: string; required)**

CrowdStrike API client secret

**cloud\_id (type: string; required)**

CrowdStrike cloud identifier (e.g., "us-1", "us-2", "eu-1")

**groups (type: string\[]; required)**

The Groups this integration applies to

**zta\_score\_threshold (type: integer; required; min: 0; max: 100)**

The minimum Zero Trust Assessment score required for agent approval (0-100)

**enabled (type: boolean; optional)**

Indicates whether the integration is enabled

**POST /api/integrations/edr/falcon Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/integrations/edr/falcon \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "client_id": {
    "type": "string",
    "description": "CrowdStrike API client ID"
  },
  "secret": {
    "type": "string",
    "description": "CrowdStrike API client secret"
  },
  "cloud_id": {
    "type": "string",
    "description": "CrowdStrike cloud identifier (e.g., \"us-1\", \"us-2\", \"eu-1\")"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "zta_score_threshold": 75,
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
    "description": "CrowdStrike API client ID"
  },
  "secret": {
    "type": "string",
    "description": "CrowdStrike API client secret"
  },
  "cloud_id": {
    "type": "string",
    "description": "CrowdStrike cloud identifier (e.g., \"us-1\", \"us-2\", \"eu-1\")"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "zta_score_threshold": 75,
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  }
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/integrations/edr/falcon',
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

url = "https://api.netbird.io/api/integrations/edr/falcon"
payload = json.dumps({
  "client_id": {
    "type": "string",
    "description": "CrowdStrike API client ID"
  },
  "secret": {
    "type": "string",
    "description": "CrowdStrike API client secret"
  },
  "cloud_id": {
    "type": "string",
    "description": "CrowdStrike cloud identifier (e.g., \"us-1\", \"us-2\", \"eu-1\")"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "zta_score_threshold": 75,
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

  url := "https://api.netbird.io/api/integrations/edr/falcon"
  method := "POST"
  
  payload := strings.NewReader(`{
  "client_id": {
    "type": "string",
    "description": "CrowdStrike API client ID"
  },
  "secret": {
    "type": "string",
    "description": "CrowdStrike API client secret"
  },
  "cloud_id": {
    "type": "string",
    "description": "CrowdStrike cloud identifier (e.g., \"us-1\", \"us-2\", \"eu-1\")"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "zta_score_threshold": 75,
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

url = URI("https://api.netbird.io/api/integrations/edr/falcon")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "client_id": {
    "type": "string",
    "description": "CrowdStrike API client ID"
  },
  "secret": {
    "type": "string",
    "description": "CrowdStrike API client secret"
  },
  "cloud_id": {
    "type": "string",
    "description": "CrowdStrike cloud identifier (e.g., \"us-1\", \"us-2\", \"eu-1\")"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "zta_score_threshold": 75,
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
    "description": "CrowdStrike API client ID"
  },
  "secret": {
    "type": "string",
    "description": "CrowdStrike API client secret"
  },
  "cloud_id": {
    "type": "string",
    "description": "CrowdStrike cloud identifier (e.g., \"us-1\", \"us-2\", \"eu-1\")"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "zta_score_threshold": 75,
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  }
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/integrations/edr/falcon")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/edr/falcon',
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
    "description": "CrowdStrike API client ID"
  },
  "secret": {
    "type": "string",
    "description": "CrowdStrike API client secret"
  },
  "cloud_id": {
    "type": "string",
    "description": "CrowdStrike cloud identifier (e.g., \"us-1\", \"us-2\", \"eu-1\")"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "zta_score_threshold": 75,
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
  "account_id": "ch8i4ug6lnn4g9hqv7l0",
  "last_synced_at": "2023-05-15T10:30:00Z",
  "created_by": {
    "type": "string",
    "description": "The user id that created the integration"
  },
  "created_at": "2023-05-15T10:30:00Z",
  "updated_at": "2023-05-16T11:45:00Z",
  "cloud_id": {
    "type": "string",
    "description": "CrowdStrike cloud identifier"
  },
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
  "zta_score_threshold": {
    "type": "integer",
    "description": "The minimum Zero Trust Assessment score required for agent approval (0-100)"
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
  "cloud_id": "string",
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
  "zta_score_threshold": "integer",
  "enabled": "boolean"
}
```

***

## Get EDR Falcon Integration   (GET /api/integrations/edr/falcon)

Retrieves a specific EDR Falcon integration by its ID.

**GET /api/integrations/edr/falcon Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/integrations/edr/falcon \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/integrations/edr/falcon',
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

url = "https://api.netbird.io/api/integrations/edr/falcon"

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

  url := "https://api.netbird.io/api/integrations/edr/falcon"
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

url = URI("https://api.netbird.io/api/integrations/edr/falcon")

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
  .url("https://api.netbird.io/api/integrations/edr/falcon")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/edr/falcon',
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
  "account_id": "ch8i4ug6lnn4g9hqv7l0",
  "last_synced_at": "2023-05-15T10:30:00Z",
  "created_by": {
    "type": "string",
    "description": "The user id that created the integration"
  },
  "created_at": "2023-05-15T10:30:00Z",
  "updated_at": "2023-05-16T11:45:00Z",
  "cloud_id": {
    "type": "string",
    "description": "CrowdStrike cloud identifier"
  },
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
  "zta_score_threshold": {
    "type": "integer",
    "description": "The minimum Zero Trust Assessment score required for agent approval (0-100)"
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
  "cloud_id": "string",
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
  "zta_score_threshold": "integer",
  "enabled": "boolean"
}
```

***

## Update EDR Falcon Integration   (PUT /api/integrations/edr/falcon)

Updates an existing EDR Falcon Integration.

### Request-Body Parameters

**client\_id (type: string; required)**

CrowdStrike API client ID

**secret (type: string; required)**

CrowdStrike API client secret

**cloud\_id (type: string; required)**

CrowdStrike cloud identifier (e.g., "us-1", "us-2", "eu-1")

**groups (type: string\[]; required)**

The Groups this integration applies to

**zta\_score\_threshold (type: integer; required; min: 0; max: 100)**

The minimum Zero Trust Assessment score required for agent approval (0-100)

**enabled (type: boolean; optional)**

Indicates whether the integration is enabled

**PUT /api/integrations/edr/falcon Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/integrations/edr/falcon \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "client_id": {
    "type": "string",
    "description": "CrowdStrike API client ID"
  },
  "secret": {
    "type": "string",
    "description": "CrowdStrike API client secret"
  },
  "cloud_id": {
    "type": "string",
    "description": "CrowdStrike cloud identifier (e.g., \"us-1\", \"us-2\", \"eu-1\")"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "zta_score_threshold": 75,
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
    "description": "CrowdStrike API client ID"
  },
  "secret": {
    "type": "string",
    "description": "CrowdStrike API client secret"
  },
  "cloud_id": {
    "type": "string",
    "description": "CrowdStrike cloud identifier (e.g., \"us-1\", \"us-2\", \"eu-1\")"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "zta_score_threshold": 75,
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  }
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/integrations/edr/falcon',
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

url = "https://api.netbird.io/api/integrations/edr/falcon"
payload = json.dumps({
  "client_id": {
    "type": "string",
    "description": "CrowdStrike API client ID"
  },
  "secret": {
    "type": "string",
    "description": "CrowdStrike API client secret"
  },
  "cloud_id": {
    "type": "string",
    "description": "CrowdStrike cloud identifier (e.g., \"us-1\", \"us-2\", \"eu-1\")"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "zta_score_threshold": 75,
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

  url := "https://api.netbird.io/api/integrations/edr/falcon"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "client_id": {
    "type": "string",
    "description": "CrowdStrike API client ID"
  },
  "secret": {
    "type": "string",
    "description": "CrowdStrike API client secret"
  },
  "cloud_id": {
    "type": "string",
    "description": "CrowdStrike cloud identifier (e.g., \"us-1\", \"us-2\", \"eu-1\")"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "zta_score_threshold": 75,
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

url = URI("https://api.netbird.io/api/integrations/edr/falcon")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "client_id": {
    "type": "string",
    "description": "CrowdStrike API client ID"
  },
  "secret": {
    "type": "string",
    "description": "CrowdStrike API client secret"
  },
  "cloud_id": {
    "type": "string",
    "description": "CrowdStrike cloud identifier (e.g., \"us-1\", \"us-2\", \"eu-1\")"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "zta_score_threshold": 75,
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
    "description": "CrowdStrike API client ID"
  },
  "secret": {
    "type": "string",
    "description": "CrowdStrike API client secret"
  },
  "cloud_id": {
    "type": "string",
    "description": "CrowdStrike cloud identifier (e.g., \"us-1\", \"us-2\", \"eu-1\")"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "zta_score_threshold": 75,
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  }
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/integrations/edr/falcon")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/edr/falcon',
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
    "description": "CrowdStrike API client ID"
  },
  "secret": {
    "type": "string",
    "description": "CrowdStrike API client secret"
  },
  "cloud_id": {
    "type": "string",
    "description": "CrowdStrike cloud identifier (e.g., \"us-1\", \"us-2\", \"eu-1\")"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "zta_score_threshold": 75,
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
  "account_id": "ch8i4ug6lnn4g9hqv7l0",
  "last_synced_at": "2023-05-15T10:30:00Z",
  "created_by": {
    "type": "string",
    "description": "The user id that created the integration"
  },
  "created_at": "2023-05-15T10:30:00Z",
  "updated_at": "2023-05-16T11:45:00Z",
  "cloud_id": {
    "type": "string",
    "description": "CrowdStrike cloud identifier"
  },
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
  "zta_score_threshold": {
    "type": "integer",
    "description": "The minimum Zero Trust Assessment score required for agent approval (0-100)"
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
  "cloud_id": "string",
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
  "zta_score_threshold": "integer",
  "enabled": "boolean"
}
```

***

## Delete EDR Falcon Integration   (DELETE /api/integrations/edr/falcon)

Deletes an existing EDR Falcon Integration by its ID.

**DELETE /api/integrations/edr/falcon Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/integrations/edr/falcon \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/integrations/edr/falcon',
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

url = "https://api.netbird.io/api/integrations/edr/falcon"

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

  url := "https://api.netbird.io/api/integrations/edr/falcon"
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

url = URI("https://api.netbird.io/api/integrations/edr/falcon")

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
  .url("https://api.netbird.io/api/integrations/edr/falcon")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/edr/falcon',
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
