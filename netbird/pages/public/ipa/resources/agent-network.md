> Release-pinned source for NetBird v0.77.0: [netbirdio/docs@abb8d4607fd4a1260c80bcdad1493e92941e1837:src/pages/ipa/resources/agent-network.mdx](https://github.com/netbirdio/docs/blob/abb8d4607fd4a1260c80bcdad1493e92941e1837/src/pages/ipa/resources/agent-network.mdx)

## List Agent Network access logs   (GET /api/agent-network/access-logs)

Returns a paginated, server-side-filtered list of agent-network (LLM) access log entries. Available only when the account has log collection enabled; otherwise entries are not retained.

### Query Parameters

**page (type: integer; optional)**

Page number for pagination (1-indexed).

**page\_size (type: integer; optional)**

Number of items per page (max 100).

**sort\_by (type: string; optional)**

Field to sort by.

**sort\_order (type: string; optional)**

Sort order (ascending or descending).

**search (type: string; optional)**

General search across log ID, host, path, model, and user email/name.

**user\_id (type: string; optional)**

Filter by authenticated user ID.

**session\_id (type: string; optional)**

Filter to a single conversation / coding session id (groups all requests of one session).

**group\_id (type: array; optional)**

Filter by authorising group id. Repeat for multiple (matches any).

**provider\_id (type: array; optional)**

Filter by resolved provider id. Repeat for multiple (matches any).

**model (type: array; optional)**

Filter by model. Repeat for multiple (matches any).

**decision (type: string; optional)**

Filter by policy decision (e.g. allow, deny).

**path (type: string; optional)**

Filter by request path prefix (matches entries whose path starts with this value).

**start\_date (type: string; optional)**

Filter by timestamp >= start\_date (RFC3339 format).

**end\_date (type: string; optional)**

Filter by timestamp <= end\_date (RFC3339 format).

**GET /api/agent-network/access-logs Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/agent-network/access-logs \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/agent-network/access-logs',
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

url = "https://api.netbird.io/api/agent-network/access-logs"

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

  url := "https://api.netbird.io/api/agent-network/access-logs"
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

url = URI("https://api.netbird.io/api/agent-network/access-logs")

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
  .url("https://api.netbird.io/api/agent-network/access-logs")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/access-logs',
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
  "data": [
    {
      "id": "ch8i4ug6lnn4g9hqv7m0",
      "service_id": {
        "type": "string",
        "description": "ID of the synthesised agent-network service that handled the request."
      },
      "timestamp": "2026-05-05T12:34:56Z",
      "status_code": 200,
      "duration_ms": 850,
      "user_id": {
        "type": "string",
        "description": "NetBird user id of the authenticated caller, if applicable."
      },
      "source_ip": {
        "type": "string",
        "description": "Source IP of the request. Empty when log collection is disabled."
      },
      "method": "POST",
      "host": {
        "type": "string",
        "description": "Upstream host the request was routed to. Empty when log collection is disabled."
      },
      "path": {
        "type": "string",
        "description": "Request path. Empty when log collection is disabled."
      },
      "provider": "openai",
      "model": "gpt-4o",
      "session_id": "019eeb72-ab7c-7cd2-aa05-6e8eb834afcb",
      "resolved_provider_id": {
        "type": "string",
        "description": "NetBird agent-network provider id that served the request."
      },
      "selected_policy_id": {
        "type": "string",
        "description": "Agent-network policy id that authorised (or denied) the request."
      },
      "decision": "allow",
      "deny_reason": {
        "type": "string",
        "description": "Raw deny reason code when the request was blocked (e.g. llm_policy.token_cap_exceeded)."
      },
      "input_tokens": 1200,
      "output_tokens": 640,
      "total_tokens": 1840,
      "cached_input_tokens": 0,
      "cache_creation_tokens": 30528,
      "cost_usd": 0.0231,
      "input_cost_usd": 0.0048,
      "cached_input_cost_usd": 0.0015,
      "cache_creation_cost_usd": 0.113,
      "output_cost_usd": 0.0038,
      "cache_cost_usd": 0.1145,
      "stream": {
        "type": "boolean",
        "description": "Whether the request was a streaming completion."
      },
      "group_ids": [
        {
          "type": "string"
        }
      ],
      "request_prompt": {
        "type": "string",
        "description": "Captured request prompt. Present only when prompt collection is enabled."
      },
      "response_completion": {
        "type": "string",
        "description": "Captured response completion. Present only when prompt collection is enabled."
      }
    }
  ],
  "page": 1,
  "page_size": 50,
  "total_records": 523,
  "total_pages": 11
}
```

**Schema**

```json
{
  "data": [
    {
      "id": "string",
      "service_id": "string",
      "timestamp": "string",
      "status_code": "integer",
      "duration_ms": "integer",
      "user_id": "string",
      "source_ip": "string",
      "method": "string",
      "host": "string",
      "path": "string",
      "provider": "string",
      "model": "string",
      "session_id": "string",
      "resolved_provider_id": "string",
      "selected_policy_id": "string",
      "decision": "string",
      "deny_reason": "string",
      "input_tokens": "integer",
      "output_tokens": "integer",
      "total_tokens": "integer",
      "cached_input_tokens": "integer",
      "cache_creation_tokens": "integer",
      "cost_usd": "number",
      "input_cost_usd": "number",
      "cached_input_cost_usd": "number",
      "cache_creation_cost_usd": "number",
      "output_cost_usd": "number",
      "cache_cost_usd": "number",
      "stream": "boolean",
      "group_ids": [
        "string"
      ],
      "request_prompt": "string",
      "response_completion": "string"
    }
  ],
  "page": "integer",
  "page_size": "integer",
  "total_records": "integer",
  "total_pages": "integer"
}
```

***

## List Agent Network access logs grouped by session   (GET /api/agent-network/access-log-sessions)

Returns a paginated, server-side-filtered list of agent-network (LLM) access logs grouped by session. The page unit is a session (total\_records counts sessions); each session carries an aggregate summary and its ordered entries. Requests the client sent no session id for each form their own singleton group. Accepts the same filters as the flat access-logs endpoint. Available only when the account has log collection enabled.

### Query Parameters

**page (type: integer; optional)**

Page number for pagination (1-indexed).

**page\_size (type: integer; optional)**

Number of sessions per page (max 100).

**sort\_by (type: string; optional)**

Session-level field to sort by. "timestamp" is the session's last activity, "started\_at" its first.

**sort\_order (type: string; optional)**

Sort order (ascending or descending).

**search (type: string; optional)**

General search across log ID, host, path, model, and user email/name.

**user\_id (type: string; optional)**

Filter by authenticated user ID.

**session\_id (type: string; optional)**

Filter to a single conversation / coding session id.

**group\_id (type: array; optional)**

Filter by authorising group id. Repeat for multiple (matches any).

**provider\_id (type: array; optional)**

Filter by resolved provider id. Repeat for multiple (matches any).

**model (type: array; optional)**

Filter by model. Repeat for multiple (matches any).

**decision (type: string; optional)**

Filter by policy decision (e.g. allow, deny).

**path (type: string; optional)**

Filter by request path prefix (matches entries whose path starts with this value).

**start\_date (type: string; optional)**

Filter by timestamp >= start\_date (RFC3339 format).

**end\_date (type: string; optional)**

Filter by timestamp <= end\_date (RFC3339 format).

**GET /api/agent-network/access-log-sessions Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/agent-network/access-log-sessions \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/agent-network/access-log-sessions',
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

url = "https://api.netbird.io/api/agent-network/access-log-sessions"

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

  url := "https://api.netbird.io/api/agent-network/access-log-sessions"
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

url = URI("https://api.netbird.io/api/agent-network/access-log-sessions")

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
  .url("https://api.netbird.io/api/agent-network/access-log-sessions")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/access-log-sessions',
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
  "data": [
    {
      "session_id": "019eeb72-ab7c-7cd2-aa05-6e8eb834afcb",
      "user_id": {
        "type": "string",
        "description": "NetBird user id of the session's caller."
      },
      "group_ids": [
        {
          "type": "string"
        }
      ],
      "started_at": "2026-05-05T12:30:00Z",
      "ended_at": "2026-05-05T12:34:56Z",
      "request_count": 7,
      "input_tokens": 8400,
      "output_tokens": 4480,
      "total_tokens": 12880,
      "cached_input_tokens": 0,
      "cache_creation_tokens": 30528,
      "cost_usd": 0.1617,
      "input_cost_usd": 0.021,
      "cached_input_cost_usd": 0.0015,
      "cache_creation_cost_usd": 0.113,
      "output_cost_usd": 0.0262,
      "cache_cost_usd": 0.1145,
      "providers": [
        {
          "type": "string"
        }
      ],
      "models": [
        {
          "type": "string"
        }
      ],
      "decision": "allow",
      "entries": [
        {
          "id": "ch8i4ug6lnn4g9hqv7m0",
          "service_id": {
            "type": "string",
            "description": "ID of the synthesised agent-network service that handled the request."
          },
          "timestamp": "2026-05-05T12:34:56Z",
          "status_code": 200,
          "duration_ms": 850,
          "user_id": {
            "type": "string",
            "description": "NetBird user id of the authenticated caller, if applicable."
          },
          "source_ip": {
            "type": "string",
            "description": "Source IP of the request. Empty when log collection is disabled."
          },
          "method": "POST",
          "host": {
            "type": "string",
            "description": "Upstream host the request was routed to. Empty when log collection is disabled."
          },
          "path": {
            "type": "string",
            "description": "Request path. Empty when log collection is disabled."
          },
          "provider": "openai",
          "model": "gpt-4o",
          "session_id": "019eeb72-ab7c-7cd2-aa05-6e8eb834afcb",
          "resolved_provider_id": {
            "type": "string",
            "description": "NetBird agent-network provider id that served the request."
          },
          "selected_policy_id": {
            "type": "string",
            "description": "Agent-network policy id that authorised (or denied) the request."
          },
          "decision": "allow",
          "deny_reason": {
            "type": "string",
            "description": "Raw deny reason code when the request was blocked (e.g. llm_policy.token_cap_exceeded)."
          },
          "input_tokens": 1200,
          "output_tokens": 640,
          "total_tokens": 1840,
          "cached_input_tokens": 0,
          "cache_creation_tokens": 30528,
          "cost_usd": 0.0231,
          "input_cost_usd": 0.0048,
          "cached_input_cost_usd": 0.0015,
          "cache_creation_cost_usd": 0.113,
          "output_cost_usd": 0.0038,
          "cache_cost_usd": 0.1145,
          "stream": {
            "type": "boolean",
            "description": "Whether the request was a streaming completion."
          },
          "group_ids": [
            {
              "type": "string"
            }
          ],
          "request_prompt": {
            "type": "string",
            "description": "Captured request prompt. Present only when prompt collection is enabled."
          },
          "response_completion": {
            "type": "string",
            "description": "Captured response completion. Present only when prompt collection is enabled."
          }
        }
      ]
    }
  ],
  "page": 1,
  "page_size": 50,
  "total_records": 124,
  "total_pages": 3
}
```

**Schema**

```json
{
  "data": [
    {
      "session_id": "string",
      "user_id": "string",
      "group_ids": [
        "string"
      ],
      "started_at": "string",
      "ended_at": "string",
      "request_count": "integer",
      "input_tokens": "integer",
      "output_tokens": "integer",
      "total_tokens": "integer",
      "cached_input_tokens": "integer",
      "cache_creation_tokens": "integer",
      "cost_usd": "number",
      "input_cost_usd": "number",
      "cached_input_cost_usd": "number",
      "cache_creation_cost_usd": "number",
      "output_cost_usd": "number",
      "cache_cost_usd": "number",
      "providers": [
        "string"
      ],
      "models": [
        "string"
      ],
      "decision": "string",
      "entries": [
        {
          "id": "string",
          "service_id": "string",
          "timestamp": "string",
          "status_code": "integer",
          "duration_ms": "integer",
          "user_id": "string",
          "source_ip": "string",
          "method": "string",
          "host": "string",
          "path": "string",
          "provider": "string",
          "model": "string",
          "session_id": "string",
          "resolved_provider_id": "string",
          "selected_policy_id": "string",
          "decision": "string",
          "deny_reason": "string",
          "input_tokens": "integer",
          "output_tokens": "integer",
          "total_tokens": "integer",
          "cached_input_tokens": "integer",
          "cache_creation_tokens": "integer",
          "cost_usd": "number",
          "input_cost_usd": "number",
          "cached_input_cost_usd": "number",
          "cache_creation_cost_usd": "number",
          "output_cost_usd": "number",
          "cache_cost_usd": "number",
          "stream": "boolean",
          "group_ids": [
            "string"
          ],
          "request_prompt": "string",
          "response_completion": "string"
        }
      ]
    }
  ],
  "page": "integer",
  "page_size": "integer",
  "total_records": "integer",
  "total_pages": "integer"
}
```

***

## Agent Network usage overview   (GET /api/agent-network/usage/overview)

Returns agent-network token and cost usage aggregated into time buckets, server-side filtered. Usage is always collected (independent of log collection).

### Query Parameters

**granularity (type: string; optional)**

Time bucket width. Defaults to day.

**start\_date (type: string; optional)**

Filter by timestamp >= start\_date (RFC3339 format).

**end\_date (type: string; optional)**

Filter by timestamp <= end\_date (RFC3339 format).

**user\_id (type: string; optional)**

Filter by user ID.

**session\_id (type: string; optional)**

Filter to a single conversation / coding session id.

**group\_id (type: array; optional)**

Filter by authorising group id. Repeat for multiple (matches any).

**provider\_id (type: array; optional)**

Filter by resolved provider id. Repeat for multiple (matches any).

**model (type: array; optional)**

Filter by model. Repeat for multiple (matches any).

**GET /api/agent-network/usage/overview Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/agent-network/usage/overview \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/agent-network/usage/overview',
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

url = "https://api.netbird.io/api/agent-network/usage/overview"

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

  url := "https://api.netbird.io/api/agent-network/usage/overview"
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

url = URI("https://api.netbird.io/api/agent-network/usage/overview")

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
  .url("https://api.netbird.io/api/agent-network/usage/overview")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/usage/overview',
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
    "period_start": "2026-05-05",
    "input_tokens": 120000,
    "output_tokens": 64000,
    "total_tokens": 184000,
    "cached_input_tokens": 20000,
    "cache_creation_tokens": 45000,
    "input_cost_usd": 1.12,
    "cached_input_cost_usd": 0.06,
    "cache_creation_cost_usd": 0.36,
    "output_cost_usd": 0.77,
    "cost_usd": 2.31,
    "cache_cost_usd": 0.42
  }
]
```

**Schema**

```json
[
  {
    "period_start": "string",
    "input_tokens": "integer",
    "output_tokens": "integer",
    "total_tokens": "integer",
    "cached_input_tokens": "integer",
    "cache_creation_tokens": "integer",
    "input_cost_usd": "number",
    "cached_input_cost_usd": "number",
    "cache_creation_cost_usd": "number",
    "output_cost_usd": "number",
    "cost_usd": "number",
    "cache_cost_usd": "number"
  }
]
```

***

## List Agent Network consumption counters   (GET /api/agent-network/consumption)

Returns every per-(dimension, window) consumption counter recorded for the account, ordered window-newest-first. Empty list when nothing has been consumed yet.

**GET /api/agent-network/consumption Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/agent-network/consumption \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/agent-network/consumption',
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

url = "https://api.netbird.io/api/agent-network/consumption"

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

  url := "https://api.netbird.io/api/agent-network/consumption"
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

url = URI("https://api.netbird.io/api/agent-network/consumption")

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
  .url("https://api.netbird.io/api/agent-network/consumption")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/consumption',
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
    "dimension_kind": {
      "type": "string",
      "enum": [
        "user",
        "group"
      ],
      "description": "Whether this row counts a single end user or a single source group across every member."
    },
    "dimension_id": "grp-engineers",
    "window_seconds": 86400,
    "window_start_utc": "2026-05-05T12:00:00Z",
    "tokens_input": 12000,
    "tokens_output": 6500,
    "cost_usd": 0.4231,
    "updated_at": "2026-05-05T12:34:56Z"
  }
]
```

**Schema**

```json
[
  {
    "dimension_kind": "string",
    "dimension_id": "string",
    "window_seconds": "integer",
    "window_start_utc": "string",
    "tokens_input": "integer",
    "tokens_output": "integer",
    "cost_usd": "number",
    "updated_at": "string"
  }
]
```

***

## Retrieve Agent Network settings   (GET /api/agent-network/settings)

Returns the per-account Agent Network gateway settings (endpoint, proxy address, collection toggles). Before the account is bootstrapped via POST, the response carries the default values with an empty endpoint and proxy address.

**GET /api/agent-network/settings Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/agent-network/settings \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/agent-network/settings',
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

url = "https://api.netbird.io/api/agent-network/settings"

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

  url := "https://api.netbird.io/api/agent-network/settings"
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

url = URI("https://api.netbird.io/api/agent-network/settings")

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
  .url("https://api.netbird.io/api/agent-network/settings")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/settings',
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
  "endpoint": "brave-otter.eu.proxy.netbird.io",
  "proxy_address": "eu.proxy.netbird.io",
  "dedicated": false,
  "enable_log_collection": false,
  "enable_prompt_collection": false,
  "redact_pii": false,
  "access_log_retention_days": 30,
  "created_at": "2026-04-26T10:30:00Z",
  "updated_at": "2026-04-26T10:30:00Z"
}
```

**Schema**

```json
{
  "endpoint": "string",
  "proxy_address": "string",
  "dedicated": "boolean",
  "enable_log_collection": "boolean",
  "enable_prompt_collection": "boolean",
  "redact_pii": "boolean",
  "access_log_retention_days": "integer",
  "created_at": "string",
  "updated_at": "string"
}
```

***

## Bootstrap Agent Network settings   (POST /api/agent-network/settings)

Creates the per-account Agent Network settings row and allocates the account's endpoint. Exactly one of `proxy_address` (labeled endpoint under that cluster; the server allocates the label) and `endpoint` (self-addressed dedicated endpoint, claimed verbatim) must be provided. The endpoint and proxy address are immutable once assigned. Returns 409 when the account already has a settings row.

### Request-Body Parameters

**proxy\_address (type: string; optional)**

Cluster address to allocate a labeled endpoint beneath. Mutually exclusive with `endpoint`.

**endpoint (type: string; optional)**

Hostname to claim as the account's self-addressed (dedicated) endpoint. Mutually exclusive with `proxy_address`. Rejected when another account already holds it.

**enable\_log\_collection (type: boolean; optional)**

Whether per-request access-log entries are collected for this account's agent-network traffic. Defaults to true.

**enable\_prompt\_collection (type: boolean; optional)**

Master switch for request/response prompt capture. Defaults to false.

**redact\_pii (type: boolean; optional)**

Whether captured prompts have PII redacted. Defaults to false.

**access\_log\_retention\_days (type: integer; optional)**

Days to retain full access-log rows; older rows are swept. 0 or less means keep indefinitely. Defaults to 30.

**POST /api/agent-network/settings Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/agent-network/settings \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "proxy_address": "eu.proxy.netbird.io",
  "endpoint": "brave-otter.gateway.example.com",
  "enable_log_collection": true,
  "enable_prompt_collection": false,
  "redact_pii": false,
  "access_log_retention_days": 30
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "proxy_address": "eu.proxy.netbird.io",
  "endpoint": "brave-otter.gateway.example.com",
  "enable_log_collection": true,
  "enable_prompt_collection": false,
  "redact_pii": false,
  "access_log_retention_days": 30
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/agent-network/settings',
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

url = "https://api.netbird.io/api/agent-network/settings"
payload = json.dumps({
  "proxy_address": "eu.proxy.netbird.io",
  "endpoint": "brave-otter.gateway.example.com",
  "enable_log_collection": true,
  "enable_prompt_collection": false,
  "redact_pii": false,
  "access_log_retention_days": 30
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

  url := "https://api.netbird.io/api/agent-network/settings"
  method := "POST"
  
  payload := strings.NewReader(`{
  "proxy_address": "eu.proxy.netbird.io",
  "endpoint": "brave-otter.gateway.example.com",
  "enable_log_collection": true,
  "enable_prompt_collection": false,
  "redact_pii": false,
  "access_log_retention_days": 30
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

url = URI("https://api.netbird.io/api/agent-network/settings")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "proxy_address": "eu.proxy.netbird.io",
  "endpoint": "brave-otter.gateway.example.com",
  "enable_log_collection": true,
  "enable_prompt_collection": false,
  "redact_pii": false,
  "access_log_retention_days": 30
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "proxy_address": "eu.proxy.netbird.io",
  "endpoint": "brave-otter.gateway.example.com",
  "enable_log_collection": true,
  "enable_prompt_collection": false,
  "redact_pii": false,
  "access_log_retention_days": 30
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/agent-network/settings")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/settings',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "proxy_address": "eu.proxy.netbird.io",
  "endpoint": "brave-otter.gateway.example.com",
  "enable_log_collection": true,
  "enable_prompt_collection": false,
  "redact_pii": false,
  "access_log_retention_days": 30
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
  "endpoint": "brave-otter.eu.proxy.netbird.io",
  "proxy_address": "eu.proxy.netbird.io",
  "dedicated": false,
  "enable_log_collection": false,
  "enable_prompt_collection": false,
  "redact_pii": false,
  "access_log_retention_days": 30,
  "created_at": "2026-04-26T10:30:00Z",
  "updated_at": "2026-04-26T10:30:00Z"
}
```

**Schema**

```json
{
  "endpoint": "string",
  "proxy_address": "string",
  "dedicated": "boolean",
  "enable_log_collection": "boolean",
  "enable_prompt_collection": "boolean",
  "redact_pii": "boolean",
  "access_log_retention_days": "integer",
  "created_at": "string",
  "updated_at": "string"
}
```

***

## Update Agent Network settings   (PUT /api/agent-network/settings)

Updates the account-level Agent Network settings; the request carries every field, replacing the mutable ones (collection toggles and retention). Returns 404 when the account has no settings row yet — bootstrap it with POST first. The endpoint and proxy address are assigned at bootstrap and immutable; the request must carry them unchanged, and a request carrying different values is rejected.

### Request-Body Parameters

**endpoint (type: string; required)**

The account's gateway endpoint hostname. Immutable — must match the assigned value; a different value is rejected.

**proxy\_address (type: string; required)**

Declared cluster address of the proxy serving this account's gateway. Immutable — must match the assigned value; a different value is rejected.

**enable\_log\_collection (type: boolean; required)**

Whether per-request access-log entries are collected for this account's agent-network traffic.

**enable\_prompt\_collection (type: boolean; required)**

Master switch for request/response prompt capture.

**redact\_pii (type: boolean; required)**

Whether captured prompts have PII redacted.

**access\_log\_retention\_days (type: integer; required)**

Days to retain full access-log rows; older rows are swept. 0 or less means keep indefinitely.

**PUT /api/agent-network/settings Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/agent-network/settings \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "endpoint": "brave-otter.eu.proxy.netbird.io",
  "proxy_address": "eu.proxy.netbird.io",
  "enable_log_collection": true,
  "enable_prompt_collection": true,
  "redact_pii": true,
  "access_log_retention_days": 30
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "endpoint": "brave-otter.eu.proxy.netbird.io",
  "proxy_address": "eu.proxy.netbird.io",
  "enable_log_collection": true,
  "enable_prompt_collection": true,
  "redact_pii": true,
  "access_log_retention_days": 30
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/agent-network/settings',
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

url = "https://api.netbird.io/api/agent-network/settings"
payload = json.dumps({
  "endpoint": "brave-otter.eu.proxy.netbird.io",
  "proxy_address": "eu.proxy.netbird.io",
  "enable_log_collection": true,
  "enable_prompt_collection": true,
  "redact_pii": true,
  "access_log_retention_days": 30
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

  url := "https://api.netbird.io/api/agent-network/settings"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "endpoint": "brave-otter.eu.proxy.netbird.io",
  "proxy_address": "eu.proxy.netbird.io",
  "enable_log_collection": true,
  "enable_prompt_collection": true,
  "redact_pii": true,
  "access_log_retention_days": 30
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

url = URI("https://api.netbird.io/api/agent-network/settings")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "endpoint": "brave-otter.eu.proxy.netbird.io",
  "proxy_address": "eu.proxy.netbird.io",
  "enable_log_collection": true,
  "enable_prompt_collection": true,
  "redact_pii": true,
  "access_log_retention_days": 30
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "endpoint": "brave-otter.eu.proxy.netbird.io",
  "proxy_address": "eu.proxy.netbird.io",
  "enable_log_collection": true,
  "enable_prompt_collection": true,
  "redact_pii": true,
  "access_log_retention_days": 30
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/agent-network/settings")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/settings',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "endpoint": "brave-otter.eu.proxy.netbird.io",
  "proxy_address": "eu.proxy.netbird.io",
  "enable_log_collection": true,
  "enable_prompt_collection": true,
  "redact_pii": true,
  "access_log_retention_days": 30
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
  "endpoint": "brave-otter.eu.proxy.netbird.io",
  "proxy_address": "eu.proxy.netbird.io",
  "dedicated": false,
  "enable_log_collection": false,
  "enable_prompt_collection": false,
  "redact_pii": false,
  "access_log_retention_days": 30,
  "created_at": "2026-04-26T10:30:00Z",
  "updated_at": "2026-04-26T10:30:00Z"
}
```

**Schema**

```json
{
  "endpoint": "string",
  "proxy_address": "string",
  "dedicated": "boolean",
  "enable_log_collection": "boolean",
  "enable_prompt_collection": "boolean",
  "redact_pii": "boolean",
  "access_log_retention_days": "integer",
  "created_at": "string",
  "updated_at": "string"
}
```

***

## Delete Agent Network settings   (DELETE /api/agent-network/settings)

Deletes the account's Agent Network settings row, releasing the endpoint. Guarded — the delete is refused with 412 while any Agent Network provider exists for the account or while a proxy is actively serving the endpoint. Bootstrapping again after a delete allocates a new endpoint; the released hostname is not reserved.

**DELETE /api/agent-network/settings Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/agent-network/settings \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/agent-network/settings',
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

url = "https://api.netbird.io/api/agent-network/settings"

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

  url := "https://api.netbird.io/api/agent-network/settings"
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

url = URI("https://api.netbird.io/api/agent-network/settings")

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
  .url("https://api.netbird.io/api/agent-network/settings")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/settings',
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

## List all Agent Network budget rules   (GET /api/agent-network/budget-rules)

Returns all account-level budget rules.

**GET /api/agent-network/budget-rules Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/agent-network/budget-rules \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/agent-network/budget-rules',
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

url = "https://api.netbird.io/api/agent-network/budget-rules"

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

  url := "https://api.netbird.io/api/agent-network/budget-rules"
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

url = URI("https://api.netbird.io/api/agent-network/budget-rules")

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
  .url("https://api.netbird.io/api/agent-network/budget-rules")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/budget-rules',
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
    "id": "ainbud_d1m3kebd9pcs0c1pnu7g",
    "name": "Org monthly ceiling",
    "enabled": true,
    "target_groups": [
      "ch8vp3o6lnna9hg0sd8g"
    ],
    "target_users": [],
    "limits": {
      "token_limit": {
        "enabled": true,
        "group_cap": 10000000,
        "user_cap": 1000000,
        "window_seconds": 2592000
      },
      "budget_limit": {
        "enabled": true,
        "group_cap_usd": 1000,
        "user_cap_usd": 100,
        "window_seconds": 2592000
      }
    },
    "created_at": "2026-04-26T10:30:00Z",
    "updated_at": "2026-04-26T10:30:00Z"
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "name": "string",
    "enabled": "boolean",
    "target_groups": [
      "string"
    ],
    "target_users": [
      "string"
    ],
    "limits": {
      "token_limit": {
        "enabled": "boolean",
        "group_cap": "integer",
        "user_cap": "integer",
        "window_seconds": "integer"
      },
      "budget_limit": {
        "enabled": "boolean",
        "group_cap_usd": "number",
        "user_cap_usd": "number",
        "window_seconds": "integer"
      }
    },
    "created_at": "string",
    "updated_at": "string"
  }
]
```

***

## Create an Agent Network budget rule   (POST /api/agent-network/budget-rules)

Creates a new account-level budget rule.

### Request-Body Parameters

**name (type: string; required)**

Display name for the budget rule.

**enabled (type: boolean; optional)**

Whether the rule is enforced. Defaults to true on create.

**target\_groups (type: string\[]; optional)**

NetBird group ids the rule binds. Empty plus empty target\_users means account-wide.

**target\_users (type: string\[]; optional)**

NetBird user ids the rule binds directly.

**limits (type: object; required)**

**Token and budget caps attached directly to the policy. These compose with any guardrail-level checks.**

**token\_limit (type: object; required)**

**Per-policy token cap. `group_cap` is applied to each source group independently — every group in the policy's `source_groups` gets its own bucket of this size. `user_cap` is applied independently to each individual user. Caps reset to zero at the start of each window.**

**enabled (type: boolean; required)**

**group\_cap (type: integer; required; min: 0)**

Tokens allowed per source group within the window (each group has its own bucket of this size). 0 means uncapped.

**user\_cap (type: integer; required; min: 0)**

Tokens allowed per individual user within the window. 0 means uncapped.

**window\_seconds (type: integer; required; min: 60)**

Reset frequency in seconds. The cap counter resets to zero at the start of each window. Minimum 60 (one minute) when the limit is enabled.

**budget\_limit (type: object; required)**

**Per-policy USD spend cap. `group_cap_usd` is applied to each source group independently — every group in the policy's `source_groups` gets its own bucket of this size. `user_cap_usd` is applied independently to each individual user. Caps reset to zero at the start of each window.**

**enabled (type: boolean; required)**

**group\_cap\_usd (type: number; required; min: 0)**

USD allowed per source group within the window (each group has its own bucket of this size). 0 means uncapped.

**user\_cap\_usd (type: number; required; min: 0)**

USD allowed per individual user within the window. 0 means uncapped.

**window\_seconds (type: integer; required; min: 60)**

Reset frequency in seconds. Caps reset at the start of each window. Minimum 60 (one minute) when the limit is enabled.

**POST /api/agent-network/budget-rules Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/agent-network/budget-rules \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "Org monthly ceiling",
  "enabled": true,
  "target_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "target_users": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
  }
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "Org monthly ceiling",
  "enabled": true,
  "target_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "target_users": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
  }
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/agent-network/budget-rules',
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

url = "https://api.netbird.io/api/agent-network/budget-rules"
payload = json.dumps({
  "name": "Org monthly ceiling",
  "enabled": true,
  "target_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "target_users": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
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

  url := "https://api.netbird.io/api/agent-network/budget-rules"
  method := "POST"
  
  payload := strings.NewReader(`{
  "name": "Org monthly ceiling",
  "enabled": true,
  "target_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "target_users": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
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

url = URI("https://api.netbird.io/api/agent-network/budget-rules")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "Org monthly ceiling",
  "enabled": true,
  "target_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "target_users": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
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
  "name": "Org monthly ceiling",
  "enabled": true,
  "target_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "target_users": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
  }
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/agent-network/budget-rules")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/budget-rules',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "name": "Org monthly ceiling",
  "enabled": true,
  "target_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "target_users": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
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
  "id": "ainbud_d1m3kebd9pcs0c1pnu7g",
  "name": "Org monthly ceiling",
  "enabled": true,
  "target_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "target_users": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
  },
  "created_at": "2026-04-26T10:30:00Z",
  "updated_at": "2026-04-26T10:30:00Z"
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "enabled": "boolean",
  "target_groups": [
    "string"
  ],
  "target_users": [
    "string"
  ],
  "limits": {
    "token_limit": {
      "enabled": "boolean",
      "group_cap": "integer",
      "user_cap": "integer",
      "window_seconds": "integer"
    },
    "budget_limit": {
      "enabled": "boolean",
      "group_cap_usd": "number",
      "user_cap_usd": "number",
      "window_seconds": "integer"
    }
  },
  "created_at": "string",
  "updated_at": "string"
}
```

***

## Retrieve an Agent Network budget rule   (GET /api/agent-network/budget-rules/{ruleId})

Get a specific account-level budget rule.

### Path Parameters

**ruleId (type: string; required)**

The unique identifier of a budget rule

**GET /api/agent-network/budget-rules/{ruleId} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/agent-network/budget-rules/{ruleId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/agent-network/budget-rules/{ruleId}',
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

url = "https://api.netbird.io/api/agent-network/budget-rules/{ruleId}"

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

  url := "https://api.netbird.io/api/agent-network/budget-rules/{ruleId}"
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

url = URI("https://api.netbird.io/api/agent-network/budget-rules/{ruleId}")

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
  .url("https://api.netbird.io/api/agent-network/budget-rules/{ruleId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/budget-rules/{ruleId}',
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
  "id": "ainbud_d1m3kebd9pcs0c1pnu7g",
  "name": "Org monthly ceiling",
  "enabled": true,
  "target_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "target_users": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
  },
  "created_at": "2026-04-26T10:30:00Z",
  "updated_at": "2026-04-26T10:30:00Z"
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "enabled": "boolean",
  "target_groups": [
    "string"
  ],
  "target_users": [
    "string"
  ],
  "limits": {
    "token_limit": {
      "enabled": "boolean",
      "group_cap": "integer",
      "user_cap": "integer",
      "window_seconds": "integer"
    },
    "budget_limit": {
      "enabled": "boolean",
      "group_cap_usd": "number",
      "user_cap_usd": "number",
      "window_seconds": "integer"
    }
  },
  "created_at": "string",
  "updated_at": "string"
}
```

***

## Update an Agent Network budget rule   (PUT /api/agent-network/budget-rules/{ruleId})

Updates an existing account-level budget rule.

### Path Parameters

**ruleId (type: string; required)**

The unique identifier of a budget rule

### Request-Body Parameters

**name (type: string; required)**

Display name for the budget rule.

**enabled (type: boolean; optional)**

Whether the rule is enforced. Defaults to true on create.

**target\_groups (type: string\[]; optional)**

NetBird group ids the rule binds. Empty plus empty target\_users means account-wide.

**target\_users (type: string\[]; optional)**

NetBird user ids the rule binds directly.

**limits (type: object; required)**

**Token and budget caps attached directly to the policy. These compose with any guardrail-level checks.**

**token\_limit (type: object; required)**

**Per-policy token cap. `group_cap` is applied to each source group independently — every group in the policy's `source_groups` gets its own bucket of this size. `user_cap` is applied independently to each individual user. Caps reset to zero at the start of each window.**

**enabled (type: boolean; required)**

**group\_cap (type: integer; required; min: 0)**

Tokens allowed per source group within the window (each group has its own bucket of this size). 0 means uncapped.

**user\_cap (type: integer; required; min: 0)**

Tokens allowed per individual user within the window. 0 means uncapped.

**window\_seconds (type: integer; required; min: 60)**

Reset frequency in seconds. The cap counter resets to zero at the start of each window. Minimum 60 (one minute) when the limit is enabled.

**budget\_limit (type: object; required)**

**Per-policy USD spend cap. `group_cap_usd` is applied to each source group independently — every group in the policy's `source_groups` gets its own bucket of this size. `user_cap_usd` is applied independently to each individual user. Caps reset to zero at the start of each window.**

**enabled (type: boolean; required)**

**group\_cap\_usd (type: number; required; min: 0)**

USD allowed per source group within the window (each group has its own bucket of this size). 0 means uncapped.

**user\_cap\_usd (type: number; required; min: 0)**

USD allowed per individual user within the window. 0 means uncapped.

**window\_seconds (type: integer; required; min: 60)**

Reset frequency in seconds. Caps reset at the start of each window. Minimum 60 (one minute) when the limit is enabled.

**PUT /api/agent-network/budget-rules/{ruleId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/agent-network/budget-rules/{ruleId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "Org monthly ceiling",
  "enabled": true,
  "target_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "target_users": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
  }
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "Org monthly ceiling",
  "enabled": true,
  "target_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "target_users": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
  }
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/agent-network/budget-rules/{ruleId}',
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

url = "https://api.netbird.io/api/agent-network/budget-rules/{ruleId}"
payload = json.dumps({
  "name": "Org monthly ceiling",
  "enabled": true,
  "target_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "target_users": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
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

  url := "https://api.netbird.io/api/agent-network/budget-rules/{ruleId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "name": "Org monthly ceiling",
  "enabled": true,
  "target_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "target_users": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
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

url = URI("https://api.netbird.io/api/agent-network/budget-rules/{ruleId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "Org monthly ceiling",
  "enabled": true,
  "target_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "target_users": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
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
  "name": "Org monthly ceiling",
  "enabled": true,
  "target_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "target_users": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
  }
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/agent-network/budget-rules/{ruleId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/budget-rules/{ruleId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "name": "Org monthly ceiling",
  "enabled": true,
  "target_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "target_users": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
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
  "id": "ainbud_d1m3kebd9pcs0c1pnu7g",
  "name": "Org monthly ceiling",
  "enabled": true,
  "target_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "target_users": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
  },
  "created_at": "2026-04-26T10:30:00Z",
  "updated_at": "2026-04-26T10:30:00Z"
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "enabled": "boolean",
  "target_groups": [
    "string"
  ],
  "target_users": [
    "string"
  ],
  "limits": {
    "token_limit": {
      "enabled": "boolean",
      "group_cap": "integer",
      "user_cap": "integer",
      "window_seconds": "integer"
    },
    "budget_limit": {
      "enabled": "boolean",
      "group_cap_usd": "number",
      "user_cap_usd": "number",
      "window_seconds": "integer"
    }
  },
  "created_at": "string",
  "updated_at": "string"
}
```

***

## Delete an Agent Network budget rule   (DELETE /api/agent-network/budget-rules/{ruleId})

Deletes an account-level budget rule.

### Path Parameters

**ruleId (type: string; required)**

The unique identifier of a budget rule

**DELETE /api/agent-network/budget-rules/{ruleId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/agent-network/budget-rules/{ruleId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/agent-network/budget-rules/{ruleId}',
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

url = "https://api.netbird.io/api/agent-network/budget-rules/{ruleId}"

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

  url := "https://api.netbird.io/api/agent-network/budget-rules/{ruleId}"
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

url = URI("https://api.netbird.io/api/agent-network/budget-rules/{ruleId}")

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
  .url("https://api.netbird.io/api/agent-network/budget-rules/{ruleId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/budget-rules/{ruleId}',
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
{
  "type": "object"
}
```

**Schema**

```json
{
  "type": "object"
}
```

***

## List Agent Network catalog providers   (GET /api/agent-network/catalog/providers)

Returns the static catalog of supported Agent Network providers (OpenAI, Anthropic, …) along with their default upstream host, auth header template, brand color, and known models.

**GET /api/agent-network/catalog/providers Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/agent-network/catalog/providers \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/agent-network/catalog/providers',
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

url = "https://api.netbird.io/api/agent-network/catalog/providers"

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

  url := "https://api.netbird.io/api/agent-network/catalog/providers"
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

url = URI("https://api.netbird.io/api/agent-network/catalog/providers")

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
  .url("https://api.netbird.io/api/agent-network/catalog/providers")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/catalog/providers',
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
    "id": "openai_api",
    "name": "OpenAI API",
    "description": "GPT, Responses API, and Embeddings",
    "default_host": "api.openai.com",
    "auth_header_template": "Bearer ${API_KEY}",
    "default_content_type": "application/json",
    "brand_color": "#10A37F",
    "kind": "provider",
    "extra_headers": [
      {
        "name": "x-portkey-config"
      }
    ],
    "identity_injection": {
      "header_pair": {
        "customizable": true,
        "end_user_id_header": "x-bf-dim-netbird_user_id",
        "tags_header": "x-bf-dim-netbird_groups"
      },
      "json_metadata": {
        "customizable": true,
        "header": "cf-aig-metadata",
        "user_key": "netbird_user_id",
        "groups_key": "netbird_groups"
      }
    },
    "pricing_surfaces": [
      "openai"
    ],
    "models": [
      {
        "id": "gpt-4o",
        "label": "GPT-4o",
        "input_per_1k": 0.005,
        "output_per_1k": 0.015,
        "cached_input_per_1k": 0.000075,
        "cache_read_per_1k": 0.0003,
        "cache_creation_per_1k": 0.00375,
        "context_window": 128000
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
    "description": "string",
    "default_host": "string",
    "auth_header_template": "string",
    "default_content_type": "string",
    "brand_color": "string",
    "kind": "string",
    "extra_headers": [
      {
        "name": "string"
      }
    ],
    "identity_injection": {
      "header_pair": {
        "customizable": "boolean",
        "end_user_id_header": "string",
        "tags_header": "string"
      },
      "json_metadata": {
        "customizable": "boolean",
        "header": "string",
        "user_key": "string",
        "groups_key": "string"
      }
    },
    "pricing_surfaces": [
      "string"
    ],
    "models": [
      {
        "id": "string",
        "label": "string",
        "input_per_1k": "number",
        "output_per_1k": "number",
        "cached_input_per_1k": "number",
        "cache_read_per_1k": "number",
        "cache_creation_per_1k": "number",
        "context_window": "integer"
      }
    ]
  }
]
```

***

## List all Agent Network Providers   (GET /api/agent-network/providers)

Returns a list of all Agent Network AI providers configured for the account.

**GET /api/agent-network/providers Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/agent-network/providers \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/agent-network/providers',
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

url = "https://api.netbird.io/api/agent-network/providers"

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

  url := "https://api.netbird.io/api/agent-network/providers"
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

url = URI("https://api.netbird.io/api/agent-network/providers")

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
  .url("https://api.netbird.io/api/agent-network/providers")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/providers',
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
    "id": "ainp_d1m3kebd9pcs0c1pnu7g",
    "provider_id": "openai_api",
    "name": "OpenAI API",
    "upstream_url": "https://api.openai.com",
    "models": [
      {
        "id": "gpt-4o-mini",
        "input_per_1k": 0.00015,
        "output_per_1k": 0.0006,
        "cached_input_per_1k": 0.000075,
        "cache_read_per_1k": 0.0003,
        "cache_creation_per_1k": 0.00375
      }
    ],
    "extra_values": {
      "x-portkey-config": "pc-prod-3f2a"
    },
    "identity_header_user_id": "x-bf-dim-netbird_user_id",
    "identity_header_groups": "x-bf-dim-netbird_groups",
    "enabled": true,
    "skip_tls_verification": false,
    "metadata_disabled": false,
    "created_at": "2026-04-26T10:30:00Z",
    "updated_at": "2026-04-26T10:30:00Z"
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "provider_id": "string",
    "name": "string",
    "upstream_url": "string",
    "models": [
      {
        "id": "string",
        "input_per_1k": "number",
        "output_per_1k": "number",
        "cached_input_per_1k": "number",
        "cache_read_per_1k": "number",
        "cache_creation_per_1k": "number"
      }
    ],
    "extra_values": {
      "type": "object",
      "description": "Operator-typed values for catalog-declared extra headers. Keys are wire header names (e.g. `x-portkey-config`); values are the strings the proxy stamps on every upstream request to this provider. Catalog (AgentNetworkCatalogProvider.extra_headers) declares which keys are accepted; values not declared by the catalog are ignored at synth time. Empty / missing values mean no header stamped.\n",
      "additionalProperties": "string",
      "example": {
        "x-portkey-config": "pc-prod-3f2a"
      }
    },
    "identity_header_user_id": "string",
    "identity_header_groups": "string",
    "enabled": "boolean",
    "skip_tls_verification": "boolean",
    "metadata_disabled": "boolean",
    "created_at": "string",
    "updated_at": "string"
  }
]
```

***

## Create an Agent Network Provider   (POST /api/agent-network/providers)

Connects a new Agent Network AI provider for the account.

### Request-Body Parameters

**provider\_id (type: string; required)**

Catalog identifier for the upstream AI provider (e.g. openai\_api, anthropic\_api, azure\_openai\_api, bedrock\_api, vertex\_ai\_api, mistral\_api, custom).

**name (type: string; required)**

Display name for the provider.

**upstream\_url (type: string; required)**

Full upstream URL (with scheme) that NetBird forwards traffic to.

**api\_key (type: string; optional)**

Upstream provider API key. Sealed at rest on the management server and never returned in responses. Required on create; optional on update (omit to keep the existing key).

**models (type: object\[]; optional)**

**Models exposed through this endpoint, with the operator's per-1k input/output prices. Empty means all catalog models are allowed at catalog prices.**

**id (type: string; required)**

Model identifier (e.g. "gpt-4o-mini").

**input\_per\_1k (type: number; required)**

Cost per 1k input tokens, in USD.

**output\_per\_1k (type: number; required)**

Cost per 1k output tokens, in USD.

**cached\_input\_per\_1k (type: number; optional)**

OpenAI-shape cache rate — cost per 1k cached prompt tokens (a subset of input tokens), in USD. Omitted means inherit NetBird's default rate for this model when one exists; 0 means no discount (cached tokens bill at input\_per\_1k).

**cache\_read\_per\_1k (type: number; optional)**

Anthropic-shape cache rate — cost per 1k cache-read tokens (additive to input tokens), in USD. Omitted means inherit NetBird's default rate for this model when one exists; 0 means cache reads bill at input\_per\_1k.

**cache\_creation\_per\_1k (type: number; optional)**

Anthropic-shape cache rate — cost per 1k cache-creation tokens (additive to input tokens), in USD. Omitted means inherit NetBird's default rate for this model when one exists; 0 means cache writes bill at input\_per\_1k.

**extra\_values (type: object; optional)**

Operator-typed values for catalog-declared extra headers (see AgentNetworkProvider.extra\_values). The request's map replaces the stored values; empty strings drop the corresponding key.

**identity\_header\_user\_id (type: string; optional)**

Wire header name for the caller's display identity. See AgentNetworkProvider.identity\_header\_user\_id. Empty or omitted disables stamping for this dimension.

**identity\_header\_groups (type: string; optional)**

Wire header name for the caller's groups CSV. See AgentNetworkProvider.identity\_header\_groups. Same semantics as `identity_header_user_id`.

**enabled (type: boolean; optional)**

Whether the provider is enabled. Defaults to true on create.

**skip\_tls\_verification (type: boolean; optional)**

Skip upstream TLS certificate verification when the proxy dials this provider's URL. For self-hosted / internal gateways behind a private or self-signed certificate. Defaults to false.

**metadata\_disabled (type: boolean; optional)**

Disable identity metadata injection (the caller's user + authorizing group) for this provider. Defaults to false (metadata is injected).

**POST /api/agent-network/providers Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/agent-network/providers \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "provider_id": "openai_api",
  "name": "OpenAI API",
  "upstream_url": "https://api.openai.com",
  "api_key": "sk-...",
  "models": [
    {
      "id": "gpt-4o-mini",
      "input_per_1k": 0.00015,
      "output_per_1k": 0.0006,
      "cached_input_per_1k": 0.000075,
      "cache_read_per_1k": 0.0003,
      "cache_creation_per_1k": 0.00375
    }
  ],
  "extra_values": {
    "x-portkey-config": "pc-prod-3f2a"
  },
  "identity_header_user_id": "x-bf-dim-netbird_user_id",
  "identity_header_groups": "x-bf-dim-netbird_groups",
  "enabled": true,
  "skip_tls_verification": false,
  "metadata_disabled": false
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "provider_id": "openai_api",
  "name": "OpenAI API",
  "upstream_url": "https://api.openai.com",
  "api_key": "sk-...",
  "models": [
    {
      "id": "gpt-4o-mini",
      "input_per_1k": 0.00015,
      "output_per_1k": 0.0006,
      "cached_input_per_1k": 0.000075,
      "cache_read_per_1k": 0.0003,
      "cache_creation_per_1k": 0.00375
    }
  ],
  "extra_values": {
    "x-portkey-config": "pc-prod-3f2a"
  },
  "identity_header_user_id": "x-bf-dim-netbird_user_id",
  "identity_header_groups": "x-bf-dim-netbird_groups",
  "enabled": true,
  "skip_tls_verification": false,
  "metadata_disabled": false
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/agent-network/providers',
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

url = "https://api.netbird.io/api/agent-network/providers"
payload = json.dumps({
  "provider_id": "openai_api",
  "name": "OpenAI API",
  "upstream_url": "https://api.openai.com",
  "api_key": "sk-...",
  "models": [
    {
      "id": "gpt-4o-mini",
      "input_per_1k": 0.00015,
      "output_per_1k": 0.0006,
      "cached_input_per_1k": 0.000075,
      "cache_read_per_1k": 0.0003,
      "cache_creation_per_1k": 0.00375
    }
  ],
  "extra_values": {
    "x-portkey-config": "pc-prod-3f2a"
  },
  "identity_header_user_id": "x-bf-dim-netbird_user_id",
  "identity_header_groups": "x-bf-dim-netbird_groups",
  "enabled": true,
  "skip_tls_verification": false,
  "metadata_disabled": false
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

  url := "https://api.netbird.io/api/agent-network/providers"
  method := "POST"
  
  payload := strings.NewReader(`{
  "provider_id": "openai_api",
  "name": "OpenAI API",
  "upstream_url": "https://api.openai.com",
  "api_key": "sk-...",
  "models": [
    {
      "id": "gpt-4o-mini",
      "input_per_1k": 0.00015,
      "output_per_1k": 0.0006,
      "cached_input_per_1k": 0.000075,
      "cache_read_per_1k": 0.0003,
      "cache_creation_per_1k": 0.00375
    }
  ],
  "extra_values": {
    "x-portkey-config": "pc-prod-3f2a"
  },
  "identity_header_user_id": "x-bf-dim-netbird_user_id",
  "identity_header_groups": "x-bf-dim-netbird_groups",
  "enabled": true,
  "skip_tls_verification": false,
  "metadata_disabled": false
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

url = URI("https://api.netbird.io/api/agent-network/providers")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "provider_id": "openai_api",
  "name": "OpenAI API",
  "upstream_url": "https://api.openai.com",
  "api_key": "sk-...",
  "models": [
    {
      "id": "gpt-4o-mini",
      "input_per_1k": 0.00015,
      "output_per_1k": 0.0006,
      "cached_input_per_1k": 0.000075,
      "cache_read_per_1k": 0.0003,
      "cache_creation_per_1k": 0.00375
    }
  ],
  "extra_values": {
    "x-portkey-config": "pc-prod-3f2a"
  },
  "identity_header_user_id": "x-bf-dim-netbird_user_id",
  "identity_header_groups": "x-bf-dim-netbird_groups",
  "enabled": true,
  "skip_tls_verification": false,
  "metadata_disabled": false
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "provider_id": "openai_api",
  "name": "OpenAI API",
  "upstream_url": "https://api.openai.com",
  "api_key": "sk-...",
  "models": [
    {
      "id": "gpt-4o-mini",
      "input_per_1k": 0.00015,
      "output_per_1k": 0.0006,
      "cached_input_per_1k": 0.000075,
      "cache_read_per_1k": 0.0003,
      "cache_creation_per_1k": 0.00375
    }
  ],
  "extra_values": {
    "x-portkey-config": "pc-prod-3f2a"
  },
  "identity_header_user_id": "x-bf-dim-netbird_user_id",
  "identity_header_groups": "x-bf-dim-netbird_groups",
  "enabled": true,
  "skip_tls_verification": false,
  "metadata_disabled": false
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/agent-network/providers")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/providers',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "provider_id": "openai_api",
  "name": "OpenAI API",
  "upstream_url": "https://api.openai.com",
  "api_key": "sk-...",
  "models": [
    {
      "id": "gpt-4o-mini",
      "input_per_1k": 0.00015,
      "output_per_1k": 0.0006,
      "cached_input_per_1k": 0.000075,
      "cache_read_per_1k": 0.0003,
      "cache_creation_per_1k": 0.00375
    }
  ],
  "extra_values": {
    "x-portkey-config": "pc-prod-3f2a"
  },
  "identity_header_user_id": "x-bf-dim-netbird_user_id",
  "identity_header_groups": "x-bf-dim-netbird_groups",
  "enabled": true,
  "skip_tls_verification": false,
  "metadata_disabled": false
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
  "id": "ainp_d1m3kebd9pcs0c1pnu7g",
  "provider_id": "openai_api",
  "name": "OpenAI API",
  "upstream_url": "https://api.openai.com",
  "models": [
    {
      "id": "gpt-4o-mini",
      "input_per_1k": 0.00015,
      "output_per_1k": 0.0006,
      "cached_input_per_1k": 0.000075,
      "cache_read_per_1k": 0.0003,
      "cache_creation_per_1k": 0.00375
    }
  ],
  "extra_values": {
    "x-portkey-config": "pc-prod-3f2a"
  },
  "identity_header_user_id": "x-bf-dim-netbird_user_id",
  "identity_header_groups": "x-bf-dim-netbird_groups",
  "enabled": true,
  "skip_tls_verification": false,
  "metadata_disabled": false,
  "created_at": "2026-04-26T10:30:00Z",
  "updated_at": "2026-04-26T10:30:00Z"
}
```

**Schema**

```json
{
  "id": "string",
  "provider_id": "string",
  "name": "string",
  "upstream_url": "string",
  "models": [
    {
      "id": "string",
      "input_per_1k": "number",
      "output_per_1k": "number",
      "cached_input_per_1k": "number",
      "cache_read_per_1k": "number",
      "cache_creation_per_1k": "number"
    }
  ],
  "extra_values": {
    "type": "object",
    "description": "Operator-typed values for catalog-declared extra headers. Keys are wire header names (e.g. `x-portkey-config`); values are the strings the proxy stamps on every upstream request to this provider. Catalog (AgentNetworkCatalogProvider.extra_headers) declares which keys are accepted; values not declared by the catalog are ignored at synth time. Empty / missing values mean no header stamped.\n",
    "additionalProperties": "string",
    "example": {
      "x-portkey-config": "pc-prod-3f2a"
    }
  },
  "identity_header_user_id": "string",
  "identity_header_groups": "string",
  "enabled": "boolean",
  "skip_tls_verification": "boolean",
  "metadata_disabled": "boolean",
  "created_at": "string",
  "updated_at": "string"
}
```

***

## Retrieve an Agent Network Provider   (GET /api/agent-network/providers/{providerId})

Get information about a specific Agent Network AI provider.

### Path Parameters

**providerId (type: string; required)**

The unique identifier of an Agent Network provider

**GET /api/agent-network/providers/{providerId} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/agent-network/providers/{providerId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/agent-network/providers/{providerId}',
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

url = "https://api.netbird.io/api/agent-network/providers/{providerId}"

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

  url := "https://api.netbird.io/api/agent-network/providers/{providerId}"
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

url = URI("https://api.netbird.io/api/agent-network/providers/{providerId}")

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
  .url("https://api.netbird.io/api/agent-network/providers/{providerId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/providers/{providerId}',
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
  "id": "ainp_d1m3kebd9pcs0c1pnu7g",
  "provider_id": "openai_api",
  "name": "OpenAI API",
  "upstream_url": "https://api.openai.com",
  "models": [
    {
      "id": "gpt-4o-mini",
      "input_per_1k": 0.00015,
      "output_per_1k": 0.0006,
      "cached_input_per_1k": 0.000075,
      "cache_read_per_1k": 0.0003,
      "cache_creation_per_1k": 0.00375
    }
  ],
  "extra_values": {
    "x-portkey-config": "pc-prod-3f2a"
  },
  "identity_header_user_id": "x-bf-dim-netbird_user_id",
  "identity_header_groups": "x-bf-dim-netbird_groups",
  "enabled": true,
  "skip_tls_verification": false,
  "metadata_disabled": false,
  "created_at": "2026-04-26T10:30:00Z",
  "updated_at": "2026-04-26T10:30:00Z"
}
```

**Schema**

```json
{
  "id": "string",
  "provider_id": "string",
  "name": "string",
  "upstream_url": "string",
  "models": [
    {
      "id": "string",
      "input_per_1k": "number",
      "output_per_1k": "number",
      "cached_input_per_1k": "number",
      "cache_read_per_1k": "number",
      "cache_creation_per_1k": "number"
    }
  ],
  "extra_values": {
    "type": "object",
    "description": "Operator-typed values for catalog-declared extra headers. Keys are wire header names (e.g. `x-portkey-config`); values are the strings the proxy stamps on every upstream request to this provider. Catalog (AgentNetworkCatalogProvider.extra_headers) declares which keys are accepted; values not declared by the catalog are ignored at synth time. Empty / missing values mean no header stamped.\n",
    "additionalProperties": "string",
    "example": {
      "x-portkey-config": "pc-prod-3f2a"
    }
  },
  "identity_header_user_id": "string",
  "identity_header_groups": "string",
  "enabled": "boolean",
  "skip_tls_verification": "boolean",
  "metadata_disabled": "boolean",
  "created_at": "string",
  "updated_at": "string"
}
```

***

## Update an Agent Network Provider   (PUT /api/agent-network/providers/{providerId})

Update an existing Agent Network AI provider.

### Path Parameters

**providerId (type: string; required)**

The unique identifier of an Agent Network provider

### Request-Body Parameters

**provider\_id (type: string; required)**

Catalog identifier for the upstream AI provider (e.g. openai\_api, anthropic\_api, azure\_openai\_api, bedrock\_api, vertex\_ai\_api, mistral\_api, custom).

**name (type: string; required)**

Display name for the provider.

**upstream\_url (type: string; required)**

Full upstream URL (with scheme) that NetBird forwards traffic to.

**api\_key (type: string; optional)**

Upstream provider API key. Sealed at rest on the management server and never returned in responses. Required on create; optional on update (omit to keep the existing key).

**models (type: object\[]; optional)**

**Models exposed through this endpoint, with the operator's per-1k input/output prices. Empty means all catalog models are allowed at catalog prices.**

**id (type: string; required)**

Model identifier (e.g. "gpt-4o-mini").

**input\_per\_1k (type: number; required)**

Cost per 1k input tokens, in USD.

**output\_per\_1k (type: number; required)**

Cost per 1k output tokens, in USD.

**cached\_input\_per\_1k (type: number; optional)**

OpenAI-shape cache rate — cost per 1k cached prompt tokens (a subset of input tokens), in USD. Omitted means inherit NetBird's default rate for this model when one exists; 0 means no discount (cached tokens bill at input\_per\_1k).

**cache\_read\_per\_1k (type: number; optional)**

Anthropic-shape cache rate — cost per 1k cache-read tokens (additive to input tokens), in USD. Omitted means inherit NetBird's default rate for this model when one exists; 0 means cache reads bill at input\_per\_1k.

**cache\_creation\_per\_1k (type: number; optional)**

Anthropic-shape cache rate — cost per 1k cache-creation tokens (additive to input tokens), in USD. Omitted means inherit NetBird's default rate for this model when one exists; 0 means cache writes bill at input\_per\_1k.

**extra\_values (type: object; optional)**

Operator-typed values for catalog-declared extra headers (see AgentNetworkProvider.extra\_values). The request's map replaces the stored values; empty strings drop the corresponding key.

**identity\_header\_user\_id (type: string; optional)**

Wire header name for the caller's display identity. See AgentNetworkProvider.identity\_header\_user\_id. Empty or omitted disables stamping for this dimension.

**identity\_header\_groups (type: string; optional)**

Wire header name for the caller's groups CSV. See AgentNetworkProvider.identity\_header\_groups. Same semantics as `identity_header_user_id`.

**enabled (type: boolean; optional)**

Whether the provider is enabled. Defaults to true on create.

**skip\_tls\_verification (type: boolean; optional)**

Skip upstream TLS certificate verification when the proxy dials this provider's URL. For self-hosted / internal gateways behind a private or self-signed certificate. Defaults to false.

**metadata\_disabled (type: boolean; optional)**

Disable identity metadata injection (the caller's user + authorizing group) for this provider. Defaults to false (metadata is injected).

**PUT /api/agent-network/providers/{providerId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/agent-network/providers/{providerId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "provider_id": "openai_api",
  "name": "OpenAI API",
  "upstream_url": "https://api.openai.com",
  "api_key": "sk-...",
  "models": [
    {
      "id": "gpt-4o-mini",
      "input_per_1k": 0.00015,
      "output_per_1k": 0.0006,
      "cached_input_per_1k": 0.000075,
      "cache_read_per_1k": 0.0003,
      "cache_creation_per_1k": 0.00375
    }
  ],
  "extra_values": {
    "x-portkey-config": "pc-prod-3f2a"
  },
  "identity_header_user_id": "x-bf-dim-netbird_user_id",
  "identity_header_groups": "x-bf-dim-netbird_groups",
  "enabled": true,
  "skip_tls_verification": false,
  "metadata_disabled": false
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "provider_id": "openai_api",
  "name": "OpenAI API",
  "upstream_url": "https://api.openai.com",
  "api_key": "sk-...",
  "models": [
    {
      "id": "gpt-4o-mini",
      "input_per_1k": 0.00015,
      "output_per_1k": 0.0006,
      "cached_input_per_1k": 0.000075,
      "cache_read_per_1k": 0.0003,
      "cache_creation_per_1k": 0.00375
    }
  ],
  "extra_values": {
    "x-portkey-config": "pc-prod-3f2a"
  },
  "identity_header_user_id": "x-bf-dim-netbird_user_id",
  "identity_header_groups": "x-bf-dim-netbird_groups",
  "enabled": true,
  "skip_tls_verification": false,
  "metadata_disabled": false
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/agent-network/providers/{providerId}',
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

url = "https://api.netbird.io/api/agent-network/providers/{providerId}"
payload = json.dumps({
  "provider_id": "openai_api",
  "name": "OpenAI API",
  "upstream_url": "https://api.openai.com",
  "api_key": "sk-...",
  "models": [
    {
      "id": "gpt-4o-mini",
      "input_per_1k": 0.00015,
      "output_per_1k": 0.0006,
      "cached_input_per_1k": 0.000075,
      "cache_read_per_1k": 0.0003,
      "cache_creation_per_1k": 0.00375
    }
  ],
  "extra_values": {
    "x-portkey-config": "pc-prod-3f2a"
  },
  "identity_header_user_id": "x-bf-dim-netbird_user_id",
  "identity_header_groups": "x-bf-dim-netbird_groups",
  "enabled": true,
  "skip_tls_verification": false,
  "metadata_disabled": false
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

  url := "https://api.netbird.io/api/agent-network/providers/{providerId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "provider_id": "openai_api",
  "name": "OpenAI API",
  "upstream_url": "https://api.openai.com",
  "api_key": "sk-...",
  "models": [
    {
      "id": "gpt-4o-mini",
      "input_per_1k": 0.00015,
      "output_per_1k": 0.0006,
      "cached_input_per_1k": 0.000075,
      "cache_read_per_1k": 0.0003,
      "cache_creation_per_1k": 0.00375
    }
  ],
  "extra_values": {
    "x-portkey-config": "pc-prod-3f2a"
  },
  "identity_header_user_id": "x-bf-dim-netbird_user_id",
  "identity_header_groups": "x-bf-dim-netbird_groups",
  "enabled": true,
  "skip_tls_verification": false,
  "metadata_disabled": false
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

url = URI("https://api.netbird.io/api/agent-network/providers/{providerId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "provider_id": "openai_api",
  "name": "OpenAI API",
  "upstream_url": "https://api.openai.com",
  "api_key": "sk-...",
  "models": [
    {
      "id": "gpt-4o-mini",
      "input_per_1k": 0.00015,
      "output_per_1k": 0.0006,
      "cached_input_per_1k": 0.000075,
      "cache_read_per_1k": 0.0003,
      "cache_creation_per_1k": 0.00375
    }
  ],
  "extra_values": {
    "x-portkey-config": "pc-prod-3f2a"
  },
  "identity_header_user_id": "x-bf-dim-netbird_user_id",
  "identity_header_groups": "x-bf-dim-netbird_groups",
  "enabled": true,
  "skip_tls_verification": false,
  "metadata_disabled": false
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "provider_id": "openai_api",
  "name": "OpenAI API",
  "upstream_url": "https://api.openai.com",
  "api_key": "sk-...",
  "models": [
    {
      "id": "gpt-4o-mini",
      "input_per_1k": 0.00015,
      "output_per_1k": 0.0006,
      "cached_input_per_1k": 0.000075,
      "cache_read_per_1k": 0.0003,
      "cache_creation_per_1k": 0.00375
    }
  ],
  "extra_values": {
    "x-portkey-config": "pc-prod-3f2a"
  },
  "identity_header_user_id": "x-bf-dim-netbird_user_id",
  "identity_header_groups": "x-bf-dim-netbird_groups",
  "enabled": true,
  "skip_tls_verification": false,
  "metadata_disabled": false
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/agent-network/providers/{providerId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/providers/{providerId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "provider_id": "openai_api",
  "name": "OpenAI API",
  "upstream_url": "https://api.openai.com",
  "api_key": "sk-...",
  "models": [
    {
      "id": "gpt-4o-mini",
      "input_per_1k": 0.00015,
      "output_per_1k": 0.0006,
      "cached_input_per_1k": 0.000075,
      "cache_read_per_1k": 0.0003,
      "cache_creation_per_1k": 0.00375
    }
  ],
  "extra_values": {
    "x-portkey-config": "pc-prod-3f2a"
  },
  "identity_header_user_id": "x-bf-dim-netbird_user_id",
  "identity_header_groups": "x-bf-dim-netbird_groups",
  "enabled": true,
  "skip_tls_verification": false,
  "metadata_disabled": false
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
  "id": "ainp_d1m3kebd9pcs0c1pnu7g",
  "provider_id": "openai_api",
  "name": "OpenAI API",
  "upstream_url": "https://api.openai.com",
  "models": [
    {
      "id": "gpt-4o-mini",
      "input_per_1k": 0.00015,
      "output_per_1k": 0.0006,
      "cached_input_per_1k": 0.000075,
      "cache_read_per_1k": 0.0003,
      "cache_creation_per_1k": 0.00375
    }
  ],
  "extra_values": {
    "x-portkey-config": "pc-prod-3f2a"
  },
  "identity_header_user_id": "x-bf-dim-netbird_user_id",
  "identity_header_groups": "x-bf-dim-netbird_groups",
  "enabled": true,
  "skip_tls_verification": false,
  "metadata_disabled": false,
  "created_at": "2026-04-26T10:30:00Z",
  "updated_at": "2026-04-26T10:30:00Z"
}
```

**Schema**

```json
{
  "id": "string",
  "provider_id": "string",
  "name": "string",
  "upstream_url": "string",
  "models": [
    {
      "id": "string",
      "input_per_1k": "number",
      "output_per_1k": "number",
      "cached_input_per_1k": "number",
      "cache_read_per_1k": "number",
      "cache_creation_per_1k": "number"
    }
  ],
  "extra_values": {
    "type": "object",
    "description": "Operator-typed values for catalog-declared extra headers. Keys are wire header names (e.g. `x-portkey-config`); values are the strings the proxy stamps on every upstream request to this provider. Catalog (AgentNetworkCatalogProvider.extra_headers) declares which keys are accepted; values not declared by the catalog are ignored at synth time. Empty / missing values mean no header stamped.\n",
    "additionalProperties": "string",
    "example": {
      "x-portkey-config": "pc-prod-3f2a"
    }
  },
  "identity_header_user_id": "string",
  "identity_header_groups": "string",
  "enabled": "boolean",
  "skip_tls_verification": "boolean",
  "metadata_disabled": "boolean",
  "created_at": "string",
  "updated_at": "string"
}
```

***

## Delete an Agent Network Provider   (DELETE /api/agent-network/providers/{providerId})

Delete an existing Agent Network AI provider.

### Path Parameters

**providerId (type: string; required)**

The unique identifier of an Agent Network provider

**DELETE /api/agent-network/providers/{providerId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/agent-network/providers/{providerId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/agent-network/providers/{providerId}',
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

url = "https://api.netbird.io/api/agent-network/providers/{providerId}"

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

  url := "https://api.netbird.io/api/agent-network/providers/{providerId}"
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

url = URI("https://api.netbird.io/api/agent-network/providers/{providerId}")

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
  .url("https://api.netbird.io/api/agent-network/providers/{providerId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/providers/{providerId}',
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

## List all Agent Network Policies   (GET /api/agent-network/policies)

Returns a list of all Agent Network policies for the account.

**GET /api/agent-network/policies Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/agent-network/policies \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/agent-network/policies',
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

url = "https://api.netbird.io/api/agent-network/policies"

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

  url := "https://api.netbird.io/api/agent-network/policies"
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

url = URI("https://api.netbird.io/api/agent-network/policies")

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
  .url("https://api.netbird.io/api/agent-network/policies")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/policies',
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
    "id": "ainpol_d1m3kebd9pcs0c1pnu7g",
    "name": "Engineering → OpenAI",
    "description": "Engineers can call OpenAI under production guardrails.",
    "enabled": true,
    "source_groups": [
      "ch8vp3o6lnna9hg0sd8g"
    ],
    "destination_provider_ids": [
      "ainp_d1m3kebd9pcs0c1pnu7g"
    ],
    "guardrail_ids": [],
    "limits": {
      "token_limit": {
        "enabled": true,
        "group_cap": 10000000,
        "user_cap": 1000000,
        "window_seconds": 2592000
      },
      "budget_limit": {
        "enabled": true,
        "group_cap_usd": 1000,
        "user_cap_usd": 100,
        "window_seconds": 2592000
      }
    },
    "created_at": "2026-04-26T10:30:00Z",
    "updated_at": "2026-04-26T10:30:00Z"
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
    "enabled": "boolean",
    "source_groups": [
      "string"
    ],
    "destination_provider_ids": [
      "string"
    ],
    "guardrail_ids": [
      "string"
    ],
    "limits": {
      "token_limit": {
        "enabled": "boolean",
        "group_cap": "integer",
        "user_cap": "integer",
        "window_seconds": "integer"
      },
      "budget_limit": {
        "enabled": "boolean",
        "group_cap_usd": "number",
        "user_cap_usd": "number",
        "window_seconds": "integer"
      }
    },
    "created_at": "string",
    "updated_at": "string"
  }
]
```

***

## Create an Agent Network Policy   (POST /api/agent-network/policies)

Creates a new Agent Network policy binding source groups to destination providers, optionally enforced by guardrails.

### Request-Body Parameters

**name (type: string; required)**

Display name for the policy.

**description (type: string; optional)**

Optional human-readable description.

**enabled (type: boolean; optional)**

Whether the policy is enabled. Defaults to true on create.

**source\_groups (type: string\[]; required)**

NetBird group ids whose members are allowed to call the destination providers.

**destination\_provider\_ids (type: string\[]; required)**

Agent Network provider ids the source groups can reach.

**guardrail\_ids (type: string\[]; optional)**

Agent Network guardrail ids to attach to this policy.

**limits (type: object; optional)**

**Token and budget caps attached directly to the policy. These compose with any guardrail-level checks.**

**token\_limit (type: object; required)**

**Per-policy token cap. `group_cap` is applied to each source group independently — every group in the policy's `source_groups` gets its own bucket of this size. `user_cap` is applied independently to each individual user. Caps reset to zero at the start of each window.**

**enabled (type: boolean; required)**

**group\_cap (type: integer; required; min: 0)**

Tokens allowed per source group within the window (each group has its own bucket of this size). 0 means uncapped.

**user\_cap (type: integer; required; min: 0)**

Tokens allowed per individual user within the window. 0 means uncapped.

**window\_seconds (type: integer; required; min: 60)**

Reset frequency in seconds. The cap counter resets to zero at the start of each window. Minimum 60 (one minute) when the limit is enabled.

**budget\_limit (type: object; required)**

**Per-policy USD spend cap. `group_cap_usd` is applied to each source group independently — every group in the policy's `source_groups` gets its own bucket of this size. `user_cap_usd` is applied independently to each individual user. Caps reset to zero at the start of each window.**

**enabled (type: boolean; required)**

**group\_cap\_usd (type: number; required; min: 0)**

USD allowed per source group within the window (each group has its own bucket of this size). 0 means uncapped.

**user\_cap\_usd (type: number; required; min: 0)**

USD allowed per individual user within the window. 0 means uncapped.

**window\_seconds (type: integer; required; min: 60)**

Reset frequency in seconds. Caps reset at the start of each window. Minimum 60 (one minute) when the limit is enabled.

**POST /api/agent-network/policies Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/agent-network/policies \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "Engineering → OpenAI",
  "description": "Engineers can call OpenAI under production guardrails.",
  "enabled": true,
  "source_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "destination_provider_ids": [
    "ainp_d1m3kebd9pcs0c1pnu7g"
  ],
  "guardrail_ids": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
  }
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "Engineering → OpenAI",
  "description": "Engineers can call OpenAI under production guardrails.",
  "enabled": true,
  "source_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "destination_provider_ids": [
    "ainp_d1m3kebd9pcs0c1pnu7g"
  ],
  "guardrail_ids": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
  }
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/agent-network/policies',
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

url = "https://api.netbird.io/api/agent-network/policies"
payload = json.dumps({
  "name": "Engineering → OpenAI",
  "description": "Engineers can call OpenAI under production guardrails.",
  "enabled": true,
  "source_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "destination_provider_ids": [
    "ainp_d1m3kebd9pcs0c1pnu7g"
  ],
  "guardrail_ids": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
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

  url := "https://api.netbird.io/api/agent-network/policies"
  method := "POST"
  
  payload := strings.NewReader(`{
  "name": "Engineering → OpenAI",
  "description": "Engineers can call OpenAI under production guardrails.",
  "enabled": true,
  "source_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "destination_provider_ids": [
    "ainp_d1m3kebd9pcs0c1pnu7g"
  ],
  "guardrail_ids": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
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

url = URI("https://api.netbird.io/api/agent-network/policies")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "Engineering → OpenAI",
  "description": "Engineers can call OpenAI under production guardrails.",
  "enabled": true,
  "source_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "destination_provider_ids": [
    "ainp_d1m3kebd9pcs0c1pnu7g"
  ],
  "guardrail_ids": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
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
  "name": "Engineering → OpenAI",
  "description": "Engineers can call OpenAI under production guardrails.",
  "enabled": true,
  "source_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "destination_provider_ids": [
    "ainp_d1m3kebd9pcs0c1pnu7g"
  ],
  "guardrail_ids": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
  }
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/agent-network/policies")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/policies',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "name": "Engineering → OpenAI",
  "description": "Engineers can call OpenAI under production guardrails.",
  "enabled": true,
  "source_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "destination_provider_ids": [
    "ainp_d1m3kebd9pcs0c1pnu7g"
  ],
  "guardrail_ids": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
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
  "id": "ainpol_d1m3kebd9pcs0c1pnu7g",
  "name": "Engineering → OpenAI",
  "description": "Engineers can call OpenAI under production guardrails.",
  "enabled": true,
  "source_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "destination_provider_ids": [
    "ainp_d1m3kebd9pcs0c1pnu7g"
  ],
  "guardrail_ids": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
  },
  "created_at": "2026-04-26T10:30:00Z",
  "updated_at": "2026-04-26T10:30:00Z"
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "enabled": "boolean",
  "source_groups": [
    "string"
  ],
  "destination_provider_ids": [
    "string"
  ],
  "guardrail_ids": [
    "string"
  ],
  "limits": {
    "token_limit": {
      "enabled": "boolean",
      "group_cap": "integer",
      "user_cap": "integer",
      "window_seconds": "integer"
    },
    "budget_limit": {
      "enabled": "boolean",
      "group_cap_usd": "number",
      "user_cap_usd": "number",
      "window_seconds": "integer"
    }
  },
  "created_at": "string",
  "updated_at": "string"
}
```

***

## Retrieve an Agent Network Policy   (GET /api/agent-network/policies/{policyId})

Get information about a specific Agent Network policy.

### Path Parameters

**policyId (type: string; required)**

The unique identifier of an Agent Network policy

**GET /api/agent-network/policies/{policyId} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/agent-network/policies/{policyId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/agent-network/policies/{policyId}',
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

url = "https://api.netbird.io/api/agent-network/policies/{policyId}"

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

  url := "https://api.netbird.io/api/agent-network/policies/{policyId}"
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

url = URI("https://api.netbird.io/api/agent-network/policies/{policyId}")

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
  .url("https://api.netbird.io/api/agent-network/policies/{policyId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/policies/{policyId}',
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
  "id": "ainpol_d1m3kebd9pcs0c1pnu7g",
  "name": "Engineering → OpenAI",
  "description": "Engineers can call OpenAI under production guardrails.",
  "enabled": true,
  "source_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "destination_provider_ids": [
    "ainp_d1m3kebd9pcs0c1pnu7g"
  ],
  "guardrail_ids": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
  },
  "created_at": "2026-04-26T10:30:00Z",
  "updated_at": "2026-04-26T10:30:00Z"
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "enabled": "boolean",
  "source_groups": [
    "string"
  ],
  "destination_provider_ids": [
    "string"
  ],
  "guardrail_ids": [
    "string"
  ],
  "limits": {
    "token_limit": {
      "enabled": "boolean",
      "group_cap": "integer",
      "user_cap": "integer",
      "window_seconds": "integer"
    },
    "budget_limit": {
      "enabled": "boolean",
      "group_cap_usd": "number",
      "user_cap_usd": "number",
      "window_seconds": "integer"
    }
  },
  "created_at": "string",
  "updated_at": "string"
}
```

***

## Update an Agent Network Policy   (PUT /api/agent-network/policies/{policyId})

Update an existing Agent Network policy.

### Path Parameters

**policyId (type: string; required)**

The unique identifier of an Agent Network policy

### Request-Body Parameters

**name (type: string; required)**

Display name for the policy.

**description (type: string; optional)**

Optional human-readable description.

**enabled (type: boolean; optional)**

Whether the policy is enabled. Defaults to true on create.

**source\_groups (type: string\[]; required)**

NetBird group ids whose members are allowed to call the destination providers.

**destination\_provider\_ids (type: string\[]; required)**

Agent Network provider ids the source groups can reach.

**guardrail\_ids (type: string\[]; optional)**

Agent Network guardrail ids to attach to this policy.

**limits (type: object; optional)**

**Token and budget caps attached directly to the policy. These compose with any guardrail-level checks.**

**token\_limit (type: object; required)**

**Per-policy token cap. `group_cap` is applied to each source group independently — every group in the policy's `source_groups` gets its own bucket of this size. `user_cap` is applied independently to each individual user. Caps reset to zero at the start of each window.**

**enabled (type: boolean; required)**

**group\_cap (type: integer; required; min: 0)**

Tokens allowed per source group within the window (each group has its own bucket of this size). 0 means uncapped.

**user\_cap (type: integer; required; min: 0)**

Tokens allowed per individual user within the window. 0 means uncapped.

**window\_seconds (type: integer; required; min: 60)**

Reset frequency in seconds. The cap counter resets to zero at the start of each window. Minimum 60 (one minute) when the limit is enabled.

**budget\_limit (type: object; required)**

**Per-policy USD spend cap. `group_cap_usd` is applied to each source group independently — every group in the policy's `source_groups` gets its own bucket of this size. `user_cap_usd` is applied independently to each individual user. Caps reset to zero at the start of each window.**

**enabled (type: boolean; required)**

**group\_cap\_usd (type: number; required; min: 0)**

USD allowed per source group within the window (each group has its own bucket of this size). 0 means uncapped.

**user\_cap\_usd (type: number; required; min: 0)**

USD allowed per individual user within the window. 0 means uncapped.

**window\_seconds (type: integer; required; min: 60)**

Reset frequency in seconds. Caps reset at the start of each window. Minimum 60 (one minute) when the limit is enabled.

**PUT /api/agent-network/policies/{policyId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/agent-network/policies/{policyId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "Engineering → OpenAI",
  "description": "Engineers can call OpenAI under production guardrails.",
  "enabled": true,
  "source_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "destination_provider_ids": [
    "ainp_d1m3kebd9pcs0c1pnu7g"
  ],
  "guardrail_ids": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
  }
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "Engineering → OpenAI",
  "description": "Engineers can call OpenAI under production guardrails.",
  "enabled": true,
  "source_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "destination_provider_ids": [
    "ainp_d1m3kebd9pcs0c1pnu7g"
  ],
  "guardrail_ids": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
  }
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/agent-network/policies/{policyId}',
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

url = "https://api.netbird.io/api/agent-network/policies/{policyId}"
payload = json.dumps({
  "name": "Engineering → OpenAI",
  "description": "Engineers can call OpenAI under production guardrails.",
  "enabled": true,
  "source_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "destination_provider_ids": [
    "ainp_d1m3kebd9pcs0c1pnu7g"
  ],
  "guardrail_ids": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
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

  url := "https://api.netbird.io/api/agent-network/policies/{policyId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "name": "Engineering → OpenAI",
  "description": "Engineers can call OpenAI under production guardrails.",
  "enabled": true,
  "source_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "destination_provider_ids": [
    "ainp_d1m3kebd9pcs0c1pnu7g"
  ],
  "guardrail_ids": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
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

url = URI("https://api.netbird.io/api/agent-network/policies/{policyId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "Engineering → OpenAI",
  "description": "Engineers can call OpenAI under production guardrails.",
  "enabled": true,
  "source_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "destination_provider_ids": [
    "ainp_d1m3kebd9pcs0c1pnu7g"
  ],
  "guardrail_ids": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
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
  "name": "Engineering → OpenAI",
  "description": "Engineers can call OpenAI under production guardrails.",
  "enabled": true,
  "source_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "destination_provider_ids": [
    "ainp_d1m3kebd9pcs0c1pnu7g"
  ],
  "guardrail_ids": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
  }
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/agent-network/policies/{policyId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/policies/{policyId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "name": "Engineering → OpenAI",
  "description": "Engineers can call OpenAI under production guardrails.",
  "enabled": true,
  "source_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "destination_provider_ids": [
    "ainp_d1m3kebd9pcs0c1pnu7g"
  ],
  "guardrail_ids": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
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
  "id": "ainpol_d1m3kebd9pcs0c1pnu7g",
  "name": "Engineering → OpenAI",
  "description": "Engineers can call OpenAI under production guardrails.",
  "enabled": true,
  "source_groups": [
    "ch8vp3o6lnna9hg0sd8g"
  ],
  "destination_provider_ids": [
    "ainp_d1m3kebd9pcs0c1pnu7g"
  ],
  "guardrail_ids": [],
  "limits": {
    "token_limit": {
      "enabled": true,
      "group_cap": 10000000,
      "user_cap": 1000000,
      "window_seconds": 2592000
    },
    "budget_limit": {
      "enabled": true,
      "group_cap_usd": 1000,
      "user_cap_usd": 100,
      "window_seconds": 2592000
    }
  },
  "created_at": "2026-04-26T10:30:00Z",
  "updated_at": "2026-04-26T10:30:00Z"
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "enabled": "boolean",
  "source_groups": [
    "string"
  ],
  "destination_provider_ids": [
    "string"
  ],
  "guardrail_ids": [
    "string"
  ],
  "limits": {
    "token_limit": {
      "enabled": "boolean",
      "group_cap": "integer",
      "user_cap": "integer",
      "window_seconds": "integer"
    },
    "budget_limit": {
      "enabled": "boolean",
      "group_cap_usd": "number",
      "user_cap_usd": "number",
      "window_seconds": "integer"
    }
  },
  "created_at": "string",
  "updated_at": "string"
}
```

***

## Delete an Agent Network Policy   (DELETE /api/agent-network/policies/{policyId})

Delete an existing Agent Network policy.

### Path Parameters

**policyId (type: string; required)**

The unique identifier of an Agent Network policy

**DELETE /api/agent-network/policies/{policyId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/agent-network/policies/{policyId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/agent-network/policies/{policyId}',
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

url = "https://api.netbird.io/api/agent-network/policies/{policyId}"

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

  url := "https://api.netbird.io/api/agent-network/policies/{policyId}"
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

url = URI("https://api.netbird.io/api/agent-network/policies/{policyId}")

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
  .url("https://api.netbird.io/api/agent-network/policies/{policyId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/policies/{policyId}',
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

## List all Agent Network Guardrails   (GET /api/agent-network/guardrails)

Returns a list of all Agent Network guardrails for the account.

**GET /api/agent-network/guardrails Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/agent-network/guardrails \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/agent-network/guardrails',
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

url = "https://api.netbird.io/api/agent-network/guardrails"

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

  url := "https://api.netbird.io/api/agent-network/guardrails"
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

url = URI("https://api.netbird.io/api/agent-network/guardrails")

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
  .url("https://api.netbird.io/api/agent-network/guardrails")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/guardrails',
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
    "id": "ainguard_d1m3kebd9pcs0c1pnu7g",
    "name": "Strict — Production",
    "description": "Tight model allowlist, PII redaction, hard monthly budget.",
    "checks": {
      "model_allowlist": {
        "enabled": true,
        "models": [
          "gpt-4o-mini",
          "claude-haiku-4-5"
        ]
      },
      "prompt_capture": {
        "enabled": true,
        "redact_pii": true
      }
    },
    "created_at": "2026-04-26T10:30:00Z",
    "updated_at": "2026-04-26T10:30:00Z"
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
    "checks": {
      "model_allowlist": {
        "enabled": "boolean",
        "models": [
          "string"
        ]
      },
      "prompt_capture": {
        "enabled": "boolean",
        "redact_pii": "boolean"
      }
    },
    "created_at": "string",
    "updated_at": "string"
  }
]
```

***

## Create an Agent Network Guardrail   (POST /api/agent-network/guardrails)

Creates a new Agent Network guardrail that can be attached to one or more policies.

### Request-Body Parameters

**name (type: string; required)**

Display name for the guardrail.

**description (type: string; optional)**

Optional human-readable description.

**checks (type: object; required)**

**Guardrail check parameters. Each entry has an `enabled` flag plus per-check configuration; disabled entries are inert.**

**model\_allowlist (type: object; required)**

**More Information**

**enabled (type: boolean; required)**

**models (type: string\[]; required)**

Allowed catalog model ids. Requests for any other model are denied.

**prompt\_capture (type: object; required)**

**More Information**

**enabled (type: boolean; required)**

**redact\_pii (type: boolean; required)**

**POST /api/agent-network/guardrails Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/agent-network/guardrails \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "Strict — Production",
  "description": "Tight model allowlist, PII redaction, hard monthly budget.",
  "checks": {
    "model_allowlist": {
      "enabled": true,
      "models": [
        "gpt-4o-mini",
        "claude-haiku-4-5"
      ]
    },
    "prompt_capture": {
      "enabled": true,
      "redact_pii": true
    }
  }
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "Strict — Production",
  "description": "Tight model allowlist, PII redaction, hard monthly budget.",
  "checks": {
    "model_allowlist": {
      "enabled": true,
      "models": [
        "gpt-4o-mini",
        "claude-haiku-4-5"
      ]
    },
    "prompt_capture": {
      "enabled": true,
      "redact_pii": true
    }
  }
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/agent-network/guardrails',
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

url = "https://api.netbird.io/api/agent-network/guardrails"
payload = json.dumps({
  "name": "Strict — Production",
  "description": "Tight model allowlist, PII redaction, hard monthly budget.",
  "checks": {
    "model_allowlist": {
      "enabled": true,
      "models": [
        "gpt-4o-mini",
        "claude-haiku-4-5"
      ]
    },
    "prompt_capture": {
      "enabled": true,
      "redact_pii": true
    }
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

  url := "https://api.netbird.io/api/agent-network/guardrails"
  method := "POST"
  
  payload := strings.NewReader(`{
  "name": "Strict — Production",
  "description": "Tight model allowlist, PII redaction, hard monthly budget.",
  "checks": {
    "model_allowlist": {
      "enabled": true,
      "models": [
        "gpt-4o-mini",
        "claude-haiku-4-5"
      ]
    },
    "prompt_capture": {
      "enabled": true,
      "redact_pii": true
    }
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

url = URI("https://api.netbird.io/api/agent-network/guardrails")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "Strict — Production",
  "description": "Tight model allowlist, PII redaction, hard monthly budget.",
  "checks": {
    "model_allowlist": {
      "enabled": true,
      "models": [
        "gpt-4o-mini",
        "claude-haiku-4-5"
      ]
    },
    "prompt_capture": {
      "enabled": true,
      "redact_pii": true
    }
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
  "name": "Strict — Production",
  "description": "Tight model allowlist, PII redaction, hard monthly budget.",
  "checks": {
    "model_allowlist": {
      "enabled": true,
      "models": [
        "gpt-4o-mini",
        "claude-haiku-4-5"
      ]
    },
    "prompt_capture": {
      "enabled": true,
      "redact_pii": true
    }
  }
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/agent-network/guardrails")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/guardrails',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "name": "Strict — Production",
  "description": "Tight model allowlist, PII redaction, hard monthly budget.",
  "checks": {
    "model_allowlist": {
      "enabled": true,
      "models": [
        "gpt-4o-mini",
        "claude-haiku-4-5"
      ]
    },
    "prompt_capture": {
      "enabled": true,
      "redact_pii": true
    }
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
  "id": "ainguard_d1m3kebd9pcs0c1pnu7g",
  "name": "Strict — Production",
  "description": "Tight model allowlist, PII redaction, hard monthly budget.",
  "checks": {
    "model_allowlist": {
      "enabled": true,
      "models": [
        "gpt-4o-mini",
        "claude-haiku-4-5"
      ]
    },
    "prompt_capture": {
      "enabled": true,
      "redact_pii": true
    }
  },
  "created_at": "2026-04-26T10:30:00Z",
  "updated_at": "2026-04-26T10:30:00Z"
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "checks": {
    "model_allowlist": {
      "enabled": "boolean",
      "models": [
        "string"
      ]
    },
    "prompt_capture": {
      "enabled": "boolean",
      "redact_pii": "boolean"
    }
  },
  "created_at": "string",
  "updated_at": "string"
}
```

***

## Retrieve an Agent Network Guardrail   (GET /api/agent-network/guardrails/{guardrailId})

Get information about a specific Agent Network guardrail.

### Path Parameters

**guardrailId (type: string; required)**

The unique identifier of an Agent Network guardrail

**GET /api/agent-network/guardrails/{guardrailId} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/agent-network/guardrails/{guardrailId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/agent-network/guardrails/{guardrailId}',
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

url = "https://api.netbird.io/api/agent-network/guardrails/{guardrailId}"

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

  url := "https://api.netbird.io/api/agent-network/guardrails/{guardrailId}"
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

url = URI("https://api.netbird.io/api/agent-network/guardrails/{guardrailId}")

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
  .url("https://api.netbird.io/api/agent-network/guardrails/{guardrailId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/guardrails/{guardrailId}',
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
  "id": "ainguard_d1m3kebd9pcs0c1pnu7g",
  "name": "Strict — Production",
  "description": "Tight model allowlist, PII redaction, hard monthly budget.",
  "checks": {
    "model_allowlist": {
      "enabled": true,
      "models": [
        "gpt-4o-mini",
        "claude-haiku-4-5"
      ]
    },
    "prompt_capture": {
      "enabled": true,
      "redact_pii": true
    }
  },
  "created_at": "2026-04-26T10:30:00Z",
  "updated_at": "2026-04-26T10:30:00Z"
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "checks": {
    "model_allowlist": {
      "enabled": "boolean",
      "models": [
        "string"
      ]
    },
    "prompt_capture": {
      "enabled": "boolean",
      "redact_pii": "boolean"
    }
  },
  "created_at": "string",
  "updated_at": "string"
}
```

***

## Update an Agent Network Guardrail   (PUT /api/agent-network/guardrails/{guardrailId})

Update an existing Agent Network guardrail.

### Path Parameters

**guardrailId (type: string; required)**

The unique identifier of an Agent Network guardrail

### Request-Body Parameters

**name (type: string; required)**

Display name for the guardrail.

**description (type: string; optional)**

Optional human-readable description.

**checks (type: object; required)**

**Guardrail check parameters. Each entry has an `enabled` flag plus per-check configuration; disabled entries are inert.**

**model\_allowlist (type: object; required)**

**More Information**

**enabled (type: boolean; required)**

**models (type: string\[]; required)**

Allowed catalog model ids. Requests for any other model are denied.

**prompt\_capture (type: object; required)**

**More Information**

**enabled (type: boolean; required)**

**redact\_pii (type: boolean; required)**

**PUT /api/agent-network/guardrails/{guardrailId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/agent-network/guardrails/{guardrailId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "Strict — Production",
  "description": "Tight model allowlist, PII redaction, hard monthly budget.",
  "checks": {
    "model_allowlist": {
      "enabled": true,
      "models": [
        "gpt-4o-mini",
        "claude-haiku-4-5"
      ]
    },
    "prompt_capture": {
      "enabled": true,
      "redact_pii": true
    }
  }
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "Strict — Production",
  "description": "Tight model allowlist, PII redaction, hard monthly budget.",
  "checks": {
    "model_allowlist": {
      "enabled": true,
      "models": [
        "gpt-4o-mini",
        "claude-haiku-4-5"
      ]
    },
    "prompt_capture": {
      "enabled": true,
      "redact_pii": true
    }
  }
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/agent-network/guardrails/{guardrailId}',
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

url = "https://api.netbird.io/api/agent-network/guardrails/{guardrailId}"
payload = json.dumps({
  "name": "Strict — Production",
  "description": "Tight model allowlist, PII redaction, hard monthly budget.",
  "checks": {
    "model_allowlist": {
      "enabled": true,
      "models": [
        "gpt-4o-mini",
        "claude-haiku-4-5"
      ]
    },
    "prompt_capture": {
      "enabled": true,
      "redact_pii": true
    }
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

  url := "https://api.netbird.io/api/agent-network/guardrails/{guardrailId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "name": "Strict — Production",
  "description": "Tight model allowlist, PII redaction, hard monthly budget.",
  "checks": {
    "model_allowlist": {
      "enabled": true,
      "models": [
        "gpt-4o-mini",
        "claude-haiku-4-5"
      ]
    },
    "prompt_capture": {
      "enabled": true,
      "redact_pii": true
    }
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

url = URI("https://api.netbird.io/api/agent-network/guardrails/{guardrailId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "Strict — Production",
  "description": "Tight model allowlist, PII redaction, hard monthly budget.",
  "checks": {
    "model_allowlist": {
      "enabled": true,
      "models": [
        "gpt-4o-mini",
        "claude-haiku-4-5"
      ]
    },
    "prompt_capture": {
      "enabled": true,
      "redact_pii": true
    }
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
  "name": "Strict — Production",
  "description": "Tight model allowlist, PII redaction, hard monthly budget.",
  "checks": {
    "model_allowlist": {
      "enabled": true,
      "models": [
        "gpt-4o-mini",
        "claude-haiku-4-5"
      ]
    },
    "prompt_capture": {
      "enabled": true,
      "redact_pii": true
    }
  }
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/agent-network/guardrails/{guardrailId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/guardrails/{guardrailId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "name": "Strict — Production",
  "description": "Tight model allowlist, PII redaction, hard monthly budget.",
  "checks": {
    "model_allowlist": {
      "enabled": true,
      "models": [
        "gpt-4o-mini",
        "claude-haiku-4-5"
      ]
    },
    "prompt_capture": {
      "enabled": true,
      "redact_pii": true
    }
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
  "id": "ainguard_d1m3kebd9pcs0c1pnu7g",
  "name": "Strict — Production",
  "description": "Tight model allowlist, PII redaction, hard monthly budget.",
  "checks": {
    "model_allowlist": {
      "enabled": true,
      "models": [
        "gpt-4o-mini",
        "claude-haiku-4-5"
      ]
    },
    "prompt_capture": {
      "enabled": true,
      "redact_pii": true
    }
  },
  "created_at": "2026-04-26T10:30:00Z",
  "updated_at": "2026-04-26T10:30:00Z"
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "checks": {
    "model_allowlist": {
      "enabled": "boolean",
      "models": [
        "string"
      ]
    },
    "prompt_capture": {
      "enabled": "boolean",
      "redact_pii": "boolean"
    }
  },
  "created_at": "string",
  "updated_at": "string"
}
```

***

## Delete an Agent Network Guardrail   (DELETE /api/agent-network/guardrails/{guardrailId})

Delete an existing Agent Network guardrail.

### Path Parameters

**guardrailId (type: string; required)**

The unique identifier of an Agent Network guardrail

**DELETE /api/agent-network/guardrails/{guardrailId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/agent-network/guardrails/{guardrailId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/agent-network/guardrails/{guardrailId}',
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

url = "https://api.netbird.io/api/agent-network/guardrails/{guardrailId}"

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

  url := "https://api.netbird.io/api/agent-network/guardrails/{guardrailId}"
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

url = URI("https://api.netbird.io/api/agent-network/guardrails/{guardrailId}")

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
  .url("https://api.netbird.io/api/agent-network/guardrails/{guardrailId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/agent-network/guardrails/{guardrailId}',
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
