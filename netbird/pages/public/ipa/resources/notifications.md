> Release-pinned source for NetBird v0.76.1: [netbirdio/docs@14375a092774f250d45a85f6d5f3c524d99fd111:src/pages/ipa/resources/notifications.mdx](https://github.com/netbirdio/docs/blob/14375a092774f250d45a85f6d5f3c524d99fd111/src/pages/ipa/resources/notifications.mdx)

## List Notification Event Types   (GET /api/integrations/notifications/types)

Returns a map of all supported activity event type codes to their
human-readable descriptions. Use these codes when configuring
`event_types` on notification channels.

**GET /api/integrations/notifications/types Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/integrations/notifications/types \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/integrations/notifications/types',
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

url = "https://api.netbird.io/api/integrations/notifications/types"

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

  url := "https://api.netbird.io/api/integrations/notifications/types"
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

url = URI("https://api.netbird.io/api/integrations/notifications/types")

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
  .url("https://api.netbird.io/api/integrations/notifications/types")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/notifications/types',
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
  "user.join": "User joined"
}
```

**Schema**

```json
{
  "type": "object",
  "description": "A map of event type codes to their human-readable descriptions.",
  "additionalProperties": "string",
  "example": {
    "user.join": "User joined"
  }
}
```

***

## List Notification Channels   (GET /api/integrations/notifications/channels)

Retrieves all notification channels configured for the authenticated account.

**GET /api/integrations/notifications/channels Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/integrations/notifications/channels \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/integrations/notifications/channels',
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

url = "https://api.netbird.io/api/integrations/notifications/channels"

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

  url := "https://api.netbird.io/api/integrations/notifications/channels"
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

url = URI("https://api.netbird.io/api/integrations/notifications/channels")

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
  .url("https://api.netbird.io/api/integrations/notifications/channels")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/notifications/channels',
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
    "type": "email",
    "target": {
      "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: an `EmailTarget` object\n- `webhook`: a `WebhookTarget` object\n",
      "oneOf": [
        {
          "emails": [
            "admin@example.com",
            "ops@example.com"
          ]
        },
        {
          "url": "https://hooks.example.com/netbird",
          "headers": {
            "Authorization": "Bearer token",
            "X-Webhook-Secret": "secret"
          }
        }
      ]
    },
    "event_types": [
      "user.join",
      "peer.user.add",
      "peer.login.expire"
    ],
    "enabled": true
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "type": "string",
    "target": {
      "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: an `EmailTarget` object\n- `webhook`: a `WebhookTarget` object\n",
      "oneOf": [
        {
          "emails": [
            "string"
          ]
        },
        {
          "url": "string",
          "headers": {
            "type": "object",
            "additionalProperties": "string",
            "description": "Custom HTTP headers sent with each webhook request.\nValues are write-only; in GET responses all values are masked.\n",
            "example": {
              "Authorization": "Bearer token",
              "X-Webhook-Secret": "secret"
            }
          }
        }
      ]
    },
    "event_types": [
      "string"
    ],
    "enabled": "boolean"
  }
]
```

***

## Create Notification Channel   (POST /api/integrations/notifications/channels)

Creates a new notification channel for the authenticated account.
Supported channel types are `email` and `webhook`.

### Request-Body Parameters

**type (type: string; required; values: email, webhook)**

The type of notification channel.

**target (optional)**

Channel-specific target configuration. The shape depends on the `type` field:
\- `email`: requires an `EmailTarget` object
\- `webhook`: requires a `WebhookTarget` object

**event\_types (type: string\[]; required)**

List of activity event type codes this channel subscribes to.

**enabled (type: boolean; required)**

Whether this notification channel is active.

**POST /api/integrations/notifications/channels Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/integrations/notifications/channels \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "type": "email",
  "target": {
    "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: requires an `EmailTarget` object\n- `webhook`: requires a `WebhookTarget` object\n",
    "oneOf": [
      {
        "emails": [
          "admin@example.com",
          "ops@example.com"
        ]
      },
      {
        "url": "https://hooks.example.com/netbird",
        "headers": {
          "Authorization": "Bearer token",
          "X-Webhook-Secret": "secret"
        }
      }
    ]
  },
  "event_types": [
    "user.join",
    "peer.user.add",
    "peer.login.expire"
  ],
  "enabled": true
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "type": "email",
  "target": {
    "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: requires an `EmailTarget` object\n- `webhook`: requires a `WebhookTarget` object\n",
    "oneOf": [
      {
        "emails": [
          "admin@example.com",
          "ops@example.com"
        ]
      },
      {
        "url": "https://hooks.example.com/netbird",
        "headers": {
          "Authorization": "Bearer token",
          "X-Webhook-Secret": "secret"
        }
      }
    ]
  },
  "event_types": [
    "user.join",
    "peer.user.add",
    "peer.login.expire"
  ],
  "enabled": true
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/integrations/notifications/channels',
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

url = "https://api.netbird.io/api/integrations/notifications/channels"
payload = json.dumps({
  "type": "email",
  "target": {
    "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: requires an `EmailTarget` object\n- `webhook`: requires a `WebhookTarget` object\n",
    "oneOf": [
      {
        "emails": [
          "admin@example.com",
          "ops@example.com"
        ]
      },
      {
        "url": "https://hooks.example.com/netbird",
        "headers": {
          "Authorization": "Bearer token",
          "X-Webhook-Secret": "secret"
        }
      }
    ]
  },
  "event_types": [
    "user.join",
    "peer.user.add",
    "peer.login.expire"
  ],
  "enabled": true
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

  url := "https://api.netbird.io/api/integrations/notifications/channels"
  method := "POST"
  
  payload := strings.NewReader(`{
  "type": "email",
  "target": {
    "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: requires an `EmailTarget` object\n- `webhook`: requires a `WebhookTarget` object\n",
    "oneOf": [
      {
        "emails": [
          "admin@example.com",
          "ops@example.com"
        ]
      },
      {
        "url": "https://hooks.example.com/netbird",
        "headers": {
          "Authorization": "Bearer token",
          "X-Webhook-Secret": "secret"
        }
      }
    ]
  },
  "event_types": [
    "user.join",
    "peer.user.add",
    "peer.login.expire"
  ],
  "enabled": true
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

url = URI("https://api.netbird.io/api/integrations/notifications/channels")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "type": "email",
  "target": {
    "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: requires an `EmailTarget` object\n- `webhook`: requires a `WebhookTarget` object\n",
    "oneOf": [
      {
        "emails": [
          "admin@example.com",
          "ops@example.com"
        ]
      },
      {
        "url": "https://hooks.example.com/netbird",
        "headers": {
          "Authorization": "Bearer token",
          "X-Webhook-Secret": "secret"
        }
      }
    ]
  },
  "event_types": [
    "user.join",
    "peer.user.add",
    "peer.login.expire"
  ],
  "enabled": true
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "type": "email",
  "target": {
    "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: requires an `EmailTarget` object\n- `webhook`: requires a `WebhookTarget` object\n",
    "oneOf": [
      {
        "emails": [
          "admin@example.com",
          "ops@example.com"
        ]
      },
      {
        "url": "https://hooks.example.com/netbird",
        "headers": {
          "Authorization": "Bearer token",
          "X-Webhook-Secret": "secret"
        }
      }
    ]
  },
  "event_types": [
    "user.join",
    "peer.user.add",
    "peer.login.expire"
  ],
  "enabled": true
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/integrations/notifications/channels")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/notifications/channels',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "type": "email",
  "target": {
    "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: requires an `EmailTarget` object\n- `webhook`: requires a `WebhookTarget` object\n",
    "oneOf": [
      {
        "emails": [
          "admin@example.com",
          "ops@example.com"
        ]
      },
      {
        "url": "https://hooks.example.com/netbird",
        "headers": {
          "Authorization": "Bearer token",
          "X-Webhook-Secret": "secret"
        }
      }
    ]
  },
  "event_types": [
    "user.join",
    "peer.user.add",
    "peer.login.expire"
  ],
  "enabled": true
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
  "type": "email",
  "target": {
    "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: an `EmailTarget` object\n- `webhook`: a `WebhookTarget` object\n",
    "oneOf": [
      {
        "emails": [
          "admin@example.com",
          "ops@example.com"
        ]
      },
      {
        "url": "https://hooks.example.com/netbird",
        "headers": {
          "Authorization": "Bearer token",
          "X-Webhook-Secret": "secret"
        }
      }
    ]
  },
  "event_types": [
    "user.join",
    "peer.user.add",
    "peer.login.expire"
  ],
  "enabled": true
}
```

**Schema**

```json
{
  "id": "string",
  "type": "string",
  "target": {
    "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: an `EmailTarget` object\n- `webhook`: a `WebhookTarget` object\n",
    "oneOf": [
      {
        "emails": [
          "string"
        ]
      },
      {
        "url": "string",
        "headers": {
          "type": "object",
          "additionalProperties": "string",
          "description": "Custom HTTP headers sent with each webhook request.\nValues are write-only; in GET responses all values are masked.\n",
          "example": {
            "Authorization": "Bearer token",
            "X-Webhook-Secret": "secret"
          }
        }
      }
    ]
  },
  "event_types": [
    "string"
  ],
  "enabled": "boolean"
}
```

***

## Get Notification Channel   (GET /api/integrations/notifications/channels/{channelId})

Retrieves a specific notification channel by its ID.

**GET /api/integrations/notifications/channels/{channelId} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/integrations/notifications/channels/{channelId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/integrations/notifications/channels/{channelId}',
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

url = "https://api.netbird.io/api/integrations/notifications/channels/{channelId}"

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

  url := "https://api.netbird.io/api/integrations/notifications/channels/{channelId}"
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

url = URI("https://api.netbird.io/api/integrations/notifications/channels/{channelId}")

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
  .url("https://api.netbird.io/api/integrations/notifications/channels/{channelId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/notifications/channels/{channelId}',
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
  "type": "email",
  "target": {
    "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: an `EmailTarget` object\n- `webhook`: a `WebhookTarget` object\n",
    "oneOf": [
      {
        "emails": [
          "admin@example.com",
          "ops@example.com"
        ]
      },
      {
        "url": "https://hooks.example.com/netbird",
        "headers": {
          "Authorization": "Bearer token",
          "X-Webhook-Secret": "secret"
        }
      }
    ]
  },
  "event_types": [
    "user.join",
    "peer.user.add",
    "peer.login.expire"
  ],
  "enabled": true
}
```

**Schema**

```json
{
  "id": "string",
  "type": "string",
  "target": {
    "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: an `EmailTarget` object\n- `webhook`: a `WebhookTarget` object\n",
    "oneOf": [
      {
        "emails": [
          "string"
        ]
      },
      {
        "url": "string",
        "headers": {
          "type": "object",
          "additionalProperties": "string",
          "description": "Custom HTTP headers sent with each webhook request.\nValues are write-only; in GET responses all values are masked.\n",
          "example": {
            "Authorization": "Bearer token",
            "X-Webhook-Secret": "secret"
          }
        }
      }
    ]
  },
  "event_types": [
    "string"
  ],
  "enabled": "boolean"
}
```

***

## Update Notification Channel   (PUT /api/integrations/notifications/channels/{channelId})

Updates an existing notification channel.

### Request-Body Parameters

**type (type: string; required; values: email, webhook)**

The type of notification channel.

**target (optional)**

Channel-specific target configuration. The shape depends on the `type` field:
\- `email`: requires an `EmailTarget` object
\- `webhook`: requires a `WebhookTarget` object

**event\_types (type: string\[]; required)**

List of activity event type codes this channel subscribes to.

**enabled (type: boolean; required)**

Whether this notification channel is active.

**PUT /api/integrations/notifications/channels/{channelId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/integrations/notifications/channels/{channelId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "type": "email",
  "target": {
    "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: requires an `EmailTarget` object\n- `webhook`: requires a `WebhookTarget` object\n",
    "oneOf": [
      {
        "emails": [
          "admin@example.com",
          "ops@example.com"
        ]
      },
      {
        "url": "https://hooks.example.com/netbird",
        "headers": {
          "Authorization": "Bearer token",
          "X-Webhook-Secret": "secret"
        }
      }
    ]
  },
  "event_types": [
    "user.join",
    "peer.user.add",
    "peer.login.expire"
  ],
  "enabled": true
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "type": "email",
  "target": {
    "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: requires an `EmailTarget` object\n- `webhook`: requires a `WebhookTarget` object\n",
    "oneOf": [
      {
        "emails": [
          "admin@example.com",
          "ops@example.com"
        ]
      },
      {
        "url": "https://hooks.example.com/netbird",
        "headers": {
          "Authorization": "Bearer token",
          "X-Webhook-Secret": "secret"
        }
      }
    ]
  },
  "event_types": [
    "user.join",
    "peer.user.add",
    "peer.login.expire"
  ],
  "enabled": true
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/integrations/notifications/channels/{channelId}',
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

url = "https://api.netbird.io/api/integrations/notifications/channels/{channelId}"
payload = json.dumps({
  "type": "email",
  "target": {
    "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: requires an `EmailTarget` object\n- `webhook`: requires a `WebhookTarget` object\n",
    "oneOf": [
      {
        "emails": [
          "admin@example.com",
          "ops@example.com"
        ]
      },
      {
        "url": "https://hooks.example.com/netbird",
        "headers": {
          "Authorization": "Bearer token",
          "X-Webhook-Secret": "secret"
        }
      }
    ]
  },
  "event_types": [
    "user.join",
    "peer.user.add",
    "peer.login.expire"
  ],
  "enabled": true
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

  url := "https://api.netbird.io/api/integrations/notifications/channels/{channelId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "type": "email",
  "target": {
    "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: requires an `EmailTarget` object\n- `webhook`: requires a `WebhookTarget` object\n",
    "oneOf": [
      {
        "emails": [
          "admin@example.com",
          "ops@example.com"
        ]
      },
      {
        "url": "https://hooks.example.com/netbird",
        "headers": {
          "Authorization": "Bearer token",
          "X-Webhook-Secret": "secret"
        }
      }
    ]
  },
  "event_types": [
    "user.join",
    "peer.user.add",
    "peer.login.expire"
  ],
  "enabled": true
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

url = URI("https://api.netbird.io/api/integrations/notifications/channels/{channelId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "type": "email",
  "target": {
    "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: requires an `EmailTarget` object\n- `webhook`: requires a `WebhookTarget` object\n",
    "oneOf": [
      {
        "emails": [
          "admin@example.com",
          "ops@example.com"
        ]
      },
      {
        "url": "https://hooks.example.com/netbird",
        "headers": {
          "Authorization": "Bearer token",
          "X-Webhook-Secret": "secret"
        }
      }
    ]
  },
  "event_types": [
    "user.join",
    "peer.user.add",
    "peer.login.expire"
  ],
  "enabled": true
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "type": "email",
  "target": {
    "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: requires an `EmailTarget` object\n- `webhook`: requires a `WebhookTarget` object\n",
    "oneOf": [
      {
        "emails": [
          "admin@example.com",
          "ops@example.com"
        ]
      },
      {
        "url": "https://hooks.example.com/netbird",
        "headers": {
          "Authorization": "Bearer token",
          "X-Webhook-Secret": "secret"
        }
      }
    ]
  },
  "event_types": [
    "user.join",
    "peer.user.add",
    "peer.login.expire"
  ],
  "enabled": true
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/integrations/notifications/channels/{channelId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/notifications/channels/{channelId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "type": "email",
  "target": {
    "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: requires an `EmailTarget` object\n- `webhook`: requires a `WebhookTarget` object\n",
    "oneOf": [
      {
        "emails": [
          "admin@example.com",
          "ops@example.com"
        ]
      },
      {
        "url": "https://hooks.example.com/netbird",
        "headers": {
          "Authorization": "Bearer token",
          "X-Webhook-Secret": "secret"
        }
      }
    ]
  },
  "event_types": [
    "user.join",
    "peer.user.add",
    "peer.login.expire"
  ],
  "enabled": true
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
  "type": "email",
  "target": {
    "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: an `EmailTarget` object\n- `webhook`: a `WebhookTarget` object\n",
    "oneOf": [
      {
        "emails": [
          "admin@example.com",
          "ops@example.com"
        ]
      },
      {
        "url": "https://hooks.example.com/netbird",
        "headers": {
          "Authorization": "Bearer token",
          "X-Webhook-Secret": "secret"
        }
      }
    ]
  },
  "event_types": [
    "user.join",
    "peer.user.add",
    "peer.login.expire"
  ],
  "enabled": true
}
```

**Schema**

```json
{
  "id": "string",
  "type": "string",
  "target": {
    "description": "Channel-specific target configuration. The shape depends on the `type` field:\n- `email`: an `EmailTarget` object\n- `webhook`: a `WebhookTarget` object\n",
    "oneOf": [
      {
        "emails": [
          "string"
        ]
      },
      {
        "url": "string",
        "headers": {
          "type": "object",
          "additionalProperties": "string",
          "description": "Custom HTTP headers sent with each webhook request.\nValues are write-only; in GET responses all values are masked.\n",
          "example": {
            "Authorization": "Bearer token",
            "X-Webhook-Secret": "secret"
          }
        }
      }
    ]
  },
  "event_types": [
    "string"
  ],
  "enabled": "boolean"
}
```

***

## Delete Notification Channel   (DELETE /api/integrations/notifications/channels/{channelId})

Deletes a notification channel by its ID.

**DELETE /api/integrations/notifications/channels/{channelId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/integrations/notifications/channels/{channelId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/integrations/notifications/channels/{channelId}',
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

url = "https://api.netbird.io/api/integrations/notifications/channels/{channelId}"

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

  url := "https://api.netbird.io/api/integrations/notifications/channels/{channelId}"
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

url = URI("https://api.netbird.io/api/integrations/notifications/channels/{channelId}")

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
  .url("https://api.netbird.io/api/integrations/notifications/channels/{channelId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/notifications/channels/{channelId}',
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
