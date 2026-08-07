> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/ipa/resources/events.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/ipa/resources/events.mdx)

## List all Audit Events   (GET /api/events/audit)

Returns a list of all audit events

**GET /api/events/audit Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/events/audit \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/events/audit',
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

url = "https://api.netbird.io/api/events/audit"

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

  url := "https://api.netbird.io/api/events/audit"
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

url = URI("https://api.netbird.io/api/events/audit")

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
  .url("https://api.netbird.io/api/events/audit")
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
  CURLOPT_URL => 'https://api.netbird.io/api/events/audit',
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
    "id": 10,
    "timestamp": "2023-05-05T10:04:37.473542Z",
    "activity": "Route created",
    "activity_code": "route.add",
    "initiator_id": "google-oauth2|123456789012345678901",
    "initiator_name": "John Doe",
    "initiator_email": "demo@netbird.io",
    "target_id": "chad9d86lnnc59g18ou0",
    "meta": {
      "name": "my route",
      "network_range": "10.64.0.0/24",
      "peer_id": "chacbco6lnnbn6cg5s91"
    }
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "timestamp": "string",
    "activity": "string",
    "activity_code": "string",
    "initiator_id": "string",
    "initiator_name": "string",
    "initiator_email": "string",
    "target_id": "string",
    "meta": {
      "description": "The metadata of the event",
      "type": "object",
      "additionalProperties": "string",
      "example": {
        "name": "my route",
        "network_range": "10.64.0.0/24",
        "peer_id": "chacbco6lnnbn6cg5s91"
      }
    }
  }
]
```

***

## List all Traffic Events  **cloud-only - cloud-only - This feature is only available in the cloud version of NetBird.**  **experimental - experimental - This feature is experimental. The endpoint will likely change and we do not guarantee backwards compatibility.**   (GET /api/events/network-traffic)

Returns a list of all network traffic events

### Query Parameters

**page (type: integer; optional)**

Page number

**page\_size (type: integer; optional)**

Number of items per page

**user\_id (type: string; optional)**

Filter by user ID

**reporter\_id (type: string; optional)**

Filter by reporter ID

**source\_id (type: string; optional)**

Filter by source endpoint ID

**destination\_id (type: string; optional)**

Filter by destination endpoint ID

**protocol (type: integer; optional)**

Filter by protocol

**type (type: string; optional)**

Filter by event type

**connection\_type (type: string; optional)**

Filter by connection type

**direction (type: string; optional)**

Filter by direction

**search (type: string; optional)**

Case-insensitive partial match on user email, source/destination names, and source/destination addresses

**start\_date (type: string; optional)**

Start date for filtering events (ISO 8601 format, e.g., 2024-01-01T00:00:00Z).

**end\_date (type: string; optional)**

End date for filtering events (ISO 8601 format, e.g., 2024-01-31T23:59:59Z).

**GET /api/events/network-traffic Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/events/network-traffic \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/events/network-traffic',
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

url = "https://api.netbird.io/api/events/network-traffic"

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

  url := "https://api.netbird.io/api/events/network-traffic"
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

url = URI("https://api.netbird.io/api/events/network-traffic")

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
  .url("https://api.netbird.io/api/events/network-traffic")
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
  CURLOPT_URL => 'https://api.netbird.io/api/events/network-traffic',
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
      "flow_id": "61092452-b17c-4b14-b7cf-a2158c549826",
      "reporter_id": "ch8i4ug6lnn4g9hqv7m0",
      "source": {
        "id": "ch8i4ug6lnn4g9hqv7m0",
        "type": "PEER",
        "name": "My Peer",
        "geo_location": {
          "city_name": "Berlin",
          "country_code": "DE"
        },
        "os": "Linux",
        "address": "100.64.0.10:51820",
        "dns_label": "*.mydomain.com"
      },
      "destination": {
        "id": "ch8i4ug6lnn4g9hqv7m0",
        "type": "PEER",
        "name": "My Peer",
        "geo_location": {
          "city_name": "Berlin",
          "country_code": "DE"
        },
        "os": "Linux",
        "address": "100.64.0.10:51820",
        "dns_label": "*.mydomain.com"
      },
      "user": {
        "id": "google-oauth2|123456789012345678901",
        "email": "alice@netbird.io",
        "name": "Alice Smith"
      },
      "policy": {
        "id": "ch8i4ug6lnn4g9hqv7m0",
        "name": "All to All"
      },
      "icmp": {
        "type": 8,
        "code": 0
      },
      "protocol": 6,
      "direction": "INGRESS",
      "rx_bytes": 1234,
      "rx_packets": 5,
      "tx_bytes": 1234,
      "tx_packets": 5,
      "num_of_starts": 3,
      "num_of_ends": 4,
      "num_of_drops": 5,
      "window_start": {},
      "window_end": {},
      "events": [
        {
          "type": "TYPE_START",
          "timestamp": {}
        }
      ]
    }
  ],
  "page": {
    "type": "integer",
    "description": "Current page number"
  },
  "page_size": {
    "type": "integer",
    "description": "Number of items per page"
  },
  "total_records": {
    "type": "integer",
    "description": "Total number of event records available"
  },
  "total_pages": {
    "type": "integer",
    "description": "Total number of pages available"
  }
}
```

**Schema**

```json
{
  "data": [
    {
      "flow_id": "string",
      "reporter_id": "string",
      "source": {
        "id": "string",
        "type": "string",
        "name": "string",
        "geo_location": {
          "city_name": "string",
          "country_code": "string"
        },
        "os": "string",
        "address": "string",
        "dns_label": "string"
      },
      "destination": {
        "id": "string",
        "type": "string",
        "name": "string",
        "geo_location": {
          "city_name": "string",
          "country_code": "string"
        },
        "os": "string",
        "address": "string",
        "dns_label": "string"
      },
      "user": {
        "id": "string",
        "email": "string",
        "name": "string"
      },
      "policy": {
        "id": "string",
        "name": "string"
      },
      "icmp": {
        "type": "integer",
        "code": "integer"
      },
      "protocol": "integer",
      "direction": "string",
      "rx_bytes": "integer",
      "rx_packets": "integer",
      "tx_bytes": "integer",
      "tx_packets": "integer",
      "num_of_starts": "integer",
      "num_of_ends": "integer",
      "num_of_drops": "integer",
      "window_start": "string",
      "window_end": "string",
      "events": [
        {
          "type": "string",
          "timestamp": "string"
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

## List all Reverse Proxy Access Logs   (GET /api/events/proxy)

Returns a paginated list of all reverse proxy access log entries

### Query Parameters

**page (type: integer; optional)**

Page number for pagination (1-indexed)

**page\_size (type: integer; optional)**

Number of items per page (max 100)

**sort\_by (type: string; optional)**

Field to sort by (url sorts by host then path)

**sort\_order (type: string; optional)**

Sort order (ascending or descending)

**search (type: string; optional)**

General search across request ID, host, path, source IP, user email, and user name

**source\_ip (type: string; optional)**

Filter by source IP address

**host (type: string; optional)**

Filter by host header

**path (type: string; optional)**

Filter by request path (supports partial matching)

**user\_id (type: string; optional)**

Filter by authenticated user ID

**user\_email (type: string; optional)**

Filter by user email (partial matching)

**user\_name (type: string; optional)**

Filter by user name (partial matching)

**method (type: string; optional)**

Filter by HTTP method

**status (type: string; optional)**

Filter by status (success = 2xx/3xx, failed = 1xx/4xx/5xx)

**status\_code (type: integer; optional)**

Filter by HTTP status code

**start\_date (type: string; optional)**

Filter by timestamp >= start\_date (RFC3339 format)

**end\_date (type: string; optional)**

Filter by timestamp <= end\_date (RFC3339 format)

**GET /api/events/proxy Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/events/proxy \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/events/proxy',
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

url = "https://api.netbird.io/api/events/proxy"

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

  url := "https://api.netbird.io/api/events/proxy"
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

url = URI("https://api.netbird.io/api/events/proxy")

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
  .url("https://api.netbird.io/api/events/proxy")
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
  CURLOPT_URL => 'https://api.netbird.io/api/events/proxy',
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
      "service_id": "ch8i4ug6lnn4g9hqv7m0",
      "timestamp": "2024-01-31T15:30:00Z",
      "method": "GET",
      "host": "example.com",
      "path": "/api/users",
      "duration_ms": 150,
      "status_code": 200,
      "source_ip": "192.168.1.100",
      "reason": "Authentication failed",
      "user_id": "user-123",
      "auth_method_used": "oidc",
      "country_code": "US",
      "city_name": "San Francisco",
      "subdivision_code": "CA",
      "bytes_upload": 1024,
      "bytes_download": 8192,
      "protocol": "http",
      "metadata": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        },
        "description": "Extra context about the request (e.g. crowdsec_verdict)"
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
      "method": "string",
      "host": "string",
      "path": "string",
      "duration_ms": "integer",
      "status_code": "integer",
      "source_ip": "string",
      "reason": "string",
      "user_id": "string",
      "auth_method_used": "string",
      "country_code": "string",
      "city_name": "string",
      "subdivision_code": "string",
      "bytes_upload": "integer",
      "bytes_download": "integer",
      "protocol": "string",
      "metadata": {
        "type": "object",
        "additionalProperties": "string",
        "description": "Extra context about the request (e.g. crowdsec_verdict)"
      }
    }
  ],
  "page": "integer",
  "page_size": "integer",
  "total_records": "integer",
  "total_pages": "integer"
}
```

***
