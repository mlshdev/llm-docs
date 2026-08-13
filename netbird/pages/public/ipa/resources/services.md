> Release-pinned source for NetBird v0.77.0: [netbirdio/docs@abb8d4607fd4a1260c80bcdad1493e92941e1837:src/pages/ipa/resources/services.mdx](https://github.com/netbirdio/docs/blob/abb8d4607fd4a1260c80bcdad1493e92941e1837/src/pages/ipa/resources/services.mdx)

## List available proxy clusters   (GET /api/reverse-proxies/clusters)

Returns a list of available proxy clusters with their connection status

**GET /api/reverse-proxies/clusters Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/reverse-proxies/clusters \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/reverse-proxies/clusters',
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

url = "https://api.netbird.io/api/reverse-proxies/clusters"

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

  url := "https://api.netbird.io/api/reverse-proxies/clusters"
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

url = URI("https://api.netbird.io/api/reverse-proxies/clusters")

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
  .url("https://api.netbird.io/api/reverse-proxies/clusters")
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
  CURLOPT_URL => 'https://api.netbird.io/api/reverse-proxies/clusters',
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
    "id": "chlfq4q5r8kc73b0qjpg",
    "address": "eu.proxy.netbird.io",
    "type": "shared",
    "online": true,
    "connected_proxies": 3,
    "supports_custom_ports": true,
    "require_subdomain": false,
    "supports_crowdsec": false,
    "private": false
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "address": "string",
    "type": "string",
    "online": "boolean",
    "connected_proxies": "integer",
    "supports_custom_ports": "boolean",
    "require_subdomain": "boolean",
    "supports_crowdsec": "boolean",
    "private": "boolean"
  }
]
```

***

## Delete a self-hosted proxy cluster   (DELETE /api/reverse-proxies/clusters/{clusterAddress})

Removes all self-hosted (BYOP) proxy registrations for the given cluster address owned by the account.

### Path Parameters

**clusterAddress (type: string; required)**

The address of the proxy cluster

**DELETE /api/reverse-proxies/clusters/{clusterAddress} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/reverse-proxies/clusters/{clusterAddress} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/reverse-proxies/clusters/{clusterAddress}',
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

url = "https://api.netbird.io/api/reverse-proxies/clusters/{clusterAddress}"

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

  url := "https://api.netbird.io/api/reverse-proxies/clusters/{clusterAddress}"
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

url = URI("https://api.netbird.io/api/reverse-proxies/clusters/{clusterAddress}")

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
  .url("https://api.netbird.io/api/reverse-proxies/clusters/{clusterAddress}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/reverse-proxies/clusters/{clusterAddress}',
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

## List all Services   (GET /api/reverse-proxies/services)

Returns a list of all reverse proxy services

**GET /api/reverse-proxies/services Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/reverse-proxies/services \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/reverse-proxies/services',
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

url = "https://api.netbird.io/api/reverse-proxies/services"

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

  url := "https://api.netbird.io/api/reverse-proxies/services"
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

url = URI("https://api.netbird.io/api/reverse-proxies/services")

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
  .url("https://api.netbird.io/api/reverse-proxies/services")
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
  CURLOPT_URL => 'https://api.netbird.io/api/reverse-proxies/services',
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
    "id": "cs8i4ug6lnn4g9hqv7mg",
    "name": "myapp.example.netbird.app",
    "domain": "myapp.example.netbird.app",
    "mode": "http",
    "listen_port": 8443,
    "port_auto_assigned": false,
    "proxy_cluster": "eu.proxy.netbird.io",
    "targets": [
      {
        "target_id": "cs8i4ug6lnn4g9hqv7mg",
        "target_type": "subnet",
        "path": "/",
        "protocol": "http",
        "host": "10.10.0.1",
        "port": 8080,
        "enabled": true,
        "options": {
          "skip_tls_verify": false,
          "request_timeout": "30s",
          "path_rewrite": "preserve",
          "custom_headers": {
            "X-Custom-Header": "value"
          },
          "proxy_protocol": false,
          "session_idle_timeout": "2m",
          "direct_upstream": false
        }
      }
    ],
    "enabled": true,
    "terminated": false,
    "pass_host_header": false,
    "rewrite_redirects": false,
    "auth": {
      "password_auth": {
        "enabled": true,
        "password": "s3cret"
      },
      "pin_auth": {
        "enabled": false,
        "pin": "1234"
      },
      "bearer_auth": {
        "enabled": true,
        "distribution_groups": [
          "ch8i4ug6lnn4g9hqv7mg"
        ]
      },
      "link_auth": {
        "enabled": false
      },
      "header_auths": [
        {
          "enabled": true,
          "header": "X-API-Key",
          "value": "my-secret-api-key"
        }
      ]
    },
    "access_restrictions": {
      "allowed_cidrs": [
        "192.168.1.0/24"
      ],
      "blocked_cidrs": [
        "10.0.0.0/8"
      ],
      "allowed_countries": [
        "US"
      ],
      "blocked_countries": [
        "DE"
      ],
      "crowdsec_mode": {
        "type": "string",
        "enum": [
          "off",
          "enforce",
          "observe"
        ],
        "default": "off",
        "description": "CrowdSec IP reputation mode. Only available when the proxy cluster supports CrowdSec."
      }
    },
    "meta": {
      "created_at": "2024-02-03T10:30:00Z",
      "certificate_issued_at": "2024-02-03T10:35:00Z",
      "status": "active"
    },
    "private": false,
    "access_groups": [
      "group-engineering"
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
    "domain": "string",
    "mode": "string",
    "listen_port": "integer",
    "port_auto_assigned": "boolean",
    "proxy_cluster": "string",
    "targets": [
      {
        "target_id": "string",
        "target_type": "string",
        "path": "string",
        "protocol": "string",
        "host": "string",
        "port": "integer",
        "enabled": "boolean",
        "options": {
          "skip_tls_verify": "boolean",
          "request_timeout": "string",
          "path_rewrite": "string",
          "custom_headers": {
            "type": "object",
            "description": "Extra headers sent to the backend. Hop-by-hop and proxy-managed headers (Host, Connection, Transfer-Encoding, etc.) are rejected.",
            "propertyNames": "string",
            "additionalProperties": "string",
            "example": {
              "X-Custom-Header": "value"
            }
          },
          "proxy_protocol": "boolean",
          "session_idle_timeout": "string",
          "direct_upstream": "boolean"
        }
      }
    ],
    "enabled": "boolean",
    "terminated": "boolean",
    "pass_host_header": "boolean",
    "rewrite_redirects": "boolean",
    "auth": {
      "password_auth": {
        "enabled": "boolean",
        "password": "string"
      },
      "pin_auth": {
        "enabled": "boolean",
        "pin": "string"
      },
      "bearer_auth": {
        "enabled": "boolean",
        "distribution_groups": [
          "string"
        ]
      },
      "link_auth": {
        "enabled": "boolean"
      },
      "header_auths": [
        {
          "enabled": "boolean",
          "header": "string",
          "value": "string"
        }
      ]
    },
    "access_restrictions": {
      "allowed_cidrs": [
        "string"
      ],
      "blocked_cidrs": [
        "string"
      ],
      "allowed_countries": [
        "string"
      ],
      "blocked_countries": [
        "string"
      ],
      "crowdsec_mode": "string"
    },
    "meta": {
      "created_at": "string",
      "certificate_issued_at": "string",
      "status": "string"
    },
    "private": "boolean",
    "access_groups": [
      "string"
    ]
  }
]
```

***

## Create a Service   (POST /api/reverse-proxies/services)

Creates a new reverse proxy service

### Request-Body Parameters

**name (type: string; required)**

Service name

**domain (type: string; required)**

Domain for the service

**mode (type: string; optional; values: http, tcp, udp, tls)**

Service mode. "http" for L7 reverse proxy, "tcp"/"udp"/"tls" for L4 passthrough.

**listen\_port (type: integer; optional; min: 0; max: 65535)**

Port the proxy listens on (L4/TLS only). Set to 0 for auto-assignment.

**targets (type: object\[]; optional)**

**List of target backends for this service**

**target\_id (type: string; required)**

Target ID

**target\_type (type: string; required; values: peer, host, domain, subnet, cluster)**

Target type

**path (type: string; optional)**

URL path prefix for this target (HTTP only)

**protocol (type: string; required; values: http, https, tcp, udp)**

Protocol to use when connecting to the backend

**host (type: string; optional)**

Backend ip or domain for this target

**port (type: integer; required; min: 1; max: 65535)**

Backend port for this target

**enabled (type: boolean; required)**

Whether this target is enabled

**options (type: object; optional)**

**More Information**

**skip\_tls\_verify (type: boolean; optional)**

Skip TLS certificate verification for this backend

**request\_timeout (type: string; optional)**

Per-target response timeout as a Go duration string (e.g. "30s", "2m")

**path\_rewrite (type: string; optional; values: preserve)**

Controls how the request path is rewritten before forwarding to the backend. Default strips the matched prefix. "preserve" keeps the full original request path.

**custom\_headers (type: object; optional)**

Extra headers sent to the backend. Hop-by-hop and proxy-managed headers (Host, Connection, Transfer-Encoding, etc.) are rejected.

**proxy\_protocol (type: boolean; optional)**

Send PROXY Protocol v2 header to this backend (TCP/TLS only)

**session\_idle\_timeout (type: string; optional)**

Idle timeout before a UDP session is reaped, as a Go duration string (e.g. "30s", "2m").

**direct\_upstream (type: boolean; optional)**

When true, the proxy dials this target via the host's network stack
instead of through its embedded NetBird client. Use for upstreams
reachable without WireGuard (public APIs, LAN services, localhost
sidecars).

**enabled (type: boolean; required)**

Whether the service is enabled

**pass\_host\_header (type: boolean; optional)**

When true, the original client Host header is passed through to the backend instead of being rewritten to the backend's address

**rewrite\_redirects (type: boolean; optional)**

When true, Location headers in backend responses are rewritten to replace the backend address with the public-facing domain

**auth (type: object; optional)**

**More Information**

**password\_auth (type: object; optional)**

**More Information**

**enabled (type: boolean; required)**

Whether password auth is enabled

**password (type: string; required)**

Auth password

**pin\_auth (type: object; optional)**

**More Information**

**enabled (type: boolean; required)**

Whether PIN auth is enabled

**pin (type: string; required)**

PIN value

**bearer\_auth (type: object; optional)**

**More Information**

**enabled (type: boolean; required)**

Whether bearer auth is enabled

**distribution\_groups (type: string\[]; optional)**

List of group IDs that can use bearer auth

**link\_auth (type: object; optional)**

**More Information**

**enabled (type: boolean; required)**

Whether link auth is enabled

**header\_auths (type: object\[]; optional)**

**More Information**

**enabled (type: boolean; required)**

Whether header auth is enabled

**header (type: string; required)**

HTTP header name to check (e.g. "Authorization", "X-API-Key")

**value (type: string; required)**

Expected header value. For Basic auth use "Basic base64(user:pass)". For Bearer use "Bearer token". Cleared in responses.

**access\_restrictions (type: object; optional)**

**Connection-level access restrictions based on IP address or geography. Applies to both HTTP and L4 services.**

**allowed\_cidrs (type: string\[]; optional)**

CIDR allowlist. If non-empty, only IPs matching these CIDRs are allowed.

**blocked\_cidrs (type: string\[]; optional)**

CIDR blocklist. Connections from these CIDRs are rejected. Evaluated after allowed\_cidrs.

**allowed\_countries (type: string\[]; optional)**

ISO 3166-1 alpha-2 country codes to allow. If non-empty, only these countries are permitted.

**blocked\_countries (type: string\[]; optional)**

ISO 3166-1 alpha-2 country codes to block.

**crowdsec\_mode (type: string; optional; values: off, enforce, observe)**

CrowdSec IP reputation mode. Only available when the proxy cluster supports CrowdSec.

**private (type: boolean; optional)**

When true, the service is NetBird-only — its target points at a proxy cluster, inbound peers authenticate via their WireGuard tunnel identity (no OIDC), and an ACL policy is auto-generated from access\_groups to the cluster's proxy-peer group. Requires mode=http.

**access\_groups (type: string\[]; optional)**

NetBird group IDs whose peers may reach this private service over the tunnel. Required when private=true; ignored otherwise. Mutually exclusive with bearer auth (SSO).

**POST /api/reverse-proxies/services Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/reverse-proxies/services \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "myapp.example.netbird.app",
  "domain": "myapp.example.netbird.app",
  "mode": "http",
  "listen_port": 5432,
  "targets": [
    {
      "target_id": "cs8i4ug6lnn4g9hqv7mg",
      "target_type": "subnet",
      "path": "/",
      "protocol": "http",
      "host": "10.10.0.1",
      "port": 8080,
      "enabled": true,
      "options": {
        "skip_tls_verify": false,
        "request_timeout": "30s",
        "path_rewrite": "preserve",
        "custom_headers": {
          "X-Custom-Header": "value"
        },
        "proxy_protocol": false,
        "session_idle_timeout": "2m",
        "direct_upstream": false
      }
    }
  ],
  "enabled": true,
  "pass_host_header": false,
  "rewrite_redirects": false,
  "auth": {
    "password_auth": {
      "enabled": true,
      "password": "s3cret"
    },
    "pin_auth": {
      "enabled": false,
      "pin": "1234"
    },
    "bearer_auth": {
      "enabled": true,
      "distribution_groups": [
        "ch8i4ug6lnn4g9hqv7mg"
      ]
    },
    "link_auth": {
      "enabled": false
    },
    "header_auths": [
      {
        "enabled": true,
        "header": "X-API-Key",
        "value": "my-secret-api-key"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "192.168.1.0/24"
    ],
    "blocked_cidrs": [
      "10.0.0.0/8"
    ],
    "allowed_countries": [
      "US"
    ],
    "blocked_countries": [
      "DE"
    ],
    "crowdsec_mode": {
      "type": "string",
      "enum": [
        "off",
        "enforce",
        "observe"
      ],
      "default": "off",
      "description": "CrowdSec IP reputation mode. Only available when the proxy cluster supports CrowdSec."
    }
  },
  "private": false,
  "access_groups": [
    "group-engineering"
  ]
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "myapp.example.netbird.app",
  "domain": "myapp.example.netbird.app",
  "mode": "http",
  "listen_port": 5432,
  "targets": [
    {
      "target_id": "cs8i4ug6lnn4g9hqv7mg",
      "target_type": "subnet",
      "path": "/",
      "protocol": "http",
      "host": "10.10.0.1",
      "port": 8080,
      "enabled": true,
      "options": {
        "skip_tls_verify": false,
        "request_timeout": "30s",
        "path_rewrite": "preserve",
        "custom_headers": {
          "X-Custom-Header": "value"
        },
        "proxy_protocol": false,
        "session_idle_timeout": "2m",
        "direct_upstream": false
      }
    }
  ],
  "enabled": true,
  "pass_host_header": false,
  "rewrite_redirects": false,
  "auth": {
    "password_auth": {
      "enabled": true,
      "password": "s3cret"
    },
    "pin_auth": {
      "enabled": false,
      "pin": "1234"
    },
    "bearer_auth": {
      "enabled": true,
      "distribution_groups": [
        "ch8i4ug6lnn4g9hqv7mg"
      ]
    },
    "link_auth": {
      "enabled": false
    },
    "header_auths": [
      {
        "enabled": true,
        "header": "X-API-Key",
        "value": "my-secret-api-key"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "192.168.1.0/24"
    ],
    "blocked_cidrs": [
      "10.0.0.0/8"
    ],
    "allowed_countries": [
      "US"
    ],
    "blocked_countries": [
      "DE"
    ],
    "crowdsec_mode": {
      "type": "string",
      "enum": [
        "off",
        "enforce",
        "observe"
      ],
      "default": "off",
      "description": "CrowdSec IP reputation mode. Only available when the proxy cluster supports CrowdSec."
    }
  },
  "private": false,
  "access_groups": [
    "group-engineering"
  ]
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/reverse-proxies/services',
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

url = "https://api.netbird.io/api/reverse-proxies/services"
payload = json.dumps({
  "name": "myapp.example.netbird.app",
  "domain": "myapp.example.netbird.app",
  "mode": "http",
  "listen_port": 5432,
  "targets": [
    {
      "target_id": "cs8i4ug6lnn4g9hqv7mg",
      "target_type": "subnet",
      "path": "/",
      "protocol": "http",
      "host": "10.10.0.1",
      "port": 8080,
      "enabled": true,
      "options": {
        "skip_tls_verify": false,
        "request_timeout": "30s",
        "path_rewrite": "preserve",
        "custom_headers": {
          "X-Custom-Header": "value"
        },
        "proxy_protocol": false,
        "session_idle_timeout": "2m",
        "direct_upstream": false
      }
    }
  ],
  "enabled": true,
  "pass_host_header": false,
  "rewrite_redirects": false,
  "auth": {
    "password_auth": {
      "enabled": true,
      "password": "s3cret"
    },
    "pin_auth": {
      "enabled": false,
      "pin": "1234"
    },
    "bearer_auth": {
      "enabled": true,
      "distribution_groups": [
        "ch8i4ug6lnn4g9hqv7mg"
      ]
    },
    "link_auth": {
      "enabled": false
    },
    "header_auths": [
      {
        "enabled": true,
        "header": "X-API-Key",
        "value": "my-secret-api-key"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "192.168.1.0/24"
    ],
    "blocked_cidrs": [
      "10.0.0.0/8"
    ],
    "allowed_countries": [
      "US"
    ],
    "blocked_countries": [
      "DE"
    ],
    "crowdsec_mode": {
      "type": "string",
      "enum": [
        "off",
        "enforce",
        "observe"
      ],
      "default": "off",
      "description": "CrowdSec IP reputation mode. Only available when the proxy cluster supports CrowdSec."
    }
  },
  "private": false,
  "access_groups": [
    "group-engineering"
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

  url := "https://api.netbird.io/api/reverse-proxies/services"
  method := "POST"
  
  payload := strings.NewReader(`{
  "name": "myapp.example.netbird.app",
  "domain": "myapp.example.netbird.app",
  "mode": "http",
  "listen_port": 5432,
  "targets": [
    {
      "target_id": "cs8i4ug6lnn4g9hqv7mg",
      "target_type": "subnet",
      "path": "/",
      "protocol": "http",
      "host": "10.10.0.1",
      "port": 8080,
      "enabled": true,
      "options": {
        "skip_tls_verify": false,
        "request_timeout": "30s",
        "path_rewrite": "preserve",
        "custom_headers": {
          "X-Custom-Header": "value"
        },
        "proxy_protocol": false,
        "session_idle_timeout": "2m",
        "direct_upstream": false
      }
    }
  ],
  "enabled": true,
  "pass_host_header": false,
  "rewrite_redirects": false,
  "auth": {
    "password_auth": {
      "enabled": true,
      "password": "s3cret"
    },
    "pin_auth": {
      "enabled": false,
      "pin": "1234"
    },
    "bearer_auth": {
      "enabled": true,
      "distribution_groups": [
        "ch8i4ug6lnn4g9hqv7mg"
      ]
    },
    "link_auth": {
      "enabled": false
    },
    "header_auths": [
      {
        "enabled": true,
        "header": "X-API-Key",
        "value": "my-secret-api-key"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "192.168.1.0/24"
    ],
    "blocked_cidrs": [
      "10.0.0.0/8"
    ],
    "allowed_countries": [
      "US"
    ],
    "blocked_countries": [
      "DE"
    ],
    "crowdsec_mode": {
      "type": "string",
      "enum": [
        "off",
        "enforce",
        "observe"
      ],
      "default": "off",
      "description": "CrowdSec IP reputation mode. Only available when the proxy cluster supports CrowdSec."
    }
  },
  "private": false,
  "access_groups": [
    "group-engineering"
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

url = URI("https://api.netbird.io/api/reverse-proxies/services")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "myapp.example.netbird.app",
  "domain": "myapp.example.netbird.app",
  "mode": "http",
  "listen_port": 5432,
  "targets": [
    {
      "target_id": "cs8i4ug6lnn4g9hqv7mg",
      "target_type": "subnet",
      "path": "/",
      "protocol": "http",
      "host": "10.10.0.1",
      "port": 8080,
      "enabled": true,
      "options": {
        "skip_tls_verify": false,
        "request_timeout": "30s",
        "path_rewrite": "preserve",
        "custom_headers": {
          "X-Custom-Header": "value"
        },
        "proxy_protocol": false,
        "session_idle_timeout": "2m",
        "direct_upstream": false
      }
    }
  ],
  "enabled": true,
  "pass_host_header": false,
  "rewrite_redirects": false,
  "auth": {
    "password_auth": {
      "enabled": true,
      "password": "s3cret"
    },
    "pin_auth": {
      "enabled": false,
      "pin": "1234"
    },
    "bearer_auth": {
      "enabled": true,
      "distribution_groups": [
        "ch8i4ug6lnn4g9hqv7mg"
      ]
    },
    "link_auth": {
      "enabled": false
    },
    "header_auths": [
      {
        "enabled": true,
        "header": "X-API-Key",
        "value": "my-secret-api-key"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "192.168.1.0/24"
    ],
    "blocked_cidrs": [
      "10.0.0.0/8"
    ],
    "allowed_countries": [
      "US"
    ],
    "blocked_countries": [
      "DE"
    ],
    "crowdsec_mode": {
      "type": "string",
      "enum": [
        "off",
        "enforce",
        "observe"
      ],
      "default": "off",
      "description": "CrowdSec IP reputation mode. Only available when the proxy cluster supports CrowdSec."
    }
  },
  "private": false,
  "access_groups": [
    "group-engineering"
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
  "name": "myapp.example.netbird.app",
  "domain": "myapp.example.netbird.app",
  "mode": "http",
  "listen_port": 5432,
  "targets": [
    {
      "target_id": "cs8i4ug6lnn4g9hqv7mg",
      "target_type": "subnet",
      "path": "/",
      "protocol": "http",
      "host": "10.10.0.1",
      "port": 8080,
      "enabled": true,
      "options": {
        "skip_tls_verify": false,
        "request_timeout": "30s",
        "path_rewrite": "preserve",
        "custom_headers": {
          "X-Custom-Header": "value"
        },
        "proxy_protocol": false,
        "session_idle_timeout": "2m",
        "direct_upstream": false
      }
    }
  ],
  "enabled": true,
  "pass_host_header": false,
  "rewrite_redirects": false,
  "auth": {
    "password_auth": {
      "enabled": true,
      "password": "s3cret"
    },
    "pin_auth": {
      "enabled": false,
      "pin": "1234"
    },
    "bearer_auth": {
      "enabled": true,
      "distribution_groups": [
        "ch8i4ug6lnn4g9hqv7mg"
      ]
    },
    "link_auth": {
      "enabled": false
    },
    "header_auths": [
      {
        "enabled": true,
        "header": "X-API-Key",
        "value": "my-secret-api-key"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "192.168.1.0/24"
    ],
    "blocked_cidrs": [
      "10.0.0.0/8"
    ],
    "allowed_countries": [
      "US"
    ],
    "blocked_countries": [
      "DE"
    ],
    "crowdsec_mode": {
      "type": "string",
      "enum": [
        "off",
        "enforce",
        "observe"
      ],
      "default": "off",
      "description": "CrowdSec IP reputation mode. Only available when the proxy cluster supports CrowdSec."
    }
  },
  "private": false,
  "access_groups": [
    "group-engineering"
  ]
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/reverse-proxies/services")
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
  CURLOPT_URL => 'https://api.netbird.io/api/reverse-proxies/services',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "name": "myapp.example.netbird.app",
  "domain": "myapp.example.netbird.app",
  "mode": "http",
  "listen_port": 5432,
  "targets": [
    {
      "target_id": "cs8i4ug6lnn4g9hqv7mg",
      "target_type": "subnet",
      "path": "/",
      "protocol": "http",
      "host": "10.10.0.1",
      "port": 8080,
      "enabled": true,
      "options": {
        "skip_tls_verify": false,
        "request_timeout": "30s",
        "path_rewrite": "preserve",
        "custom_headers": {
          "X-Custom-Header": "value"
        },
        "proxy_protocol": false,
        "session_idle_timeout": "2m",
        "direct_upstream": false
      }
    }
  ],
  "enabled": true,
  "pass_host_header": false,
  "rewrite_redirects": false,
  "auth": {
    "password_auth": {
      "enabled": true,
      "password": "s3cret"
    },
    "pin_auth": {
      "enabled": false,
      "pin": "1234"
    },
    "bearer_auth": {
      "enabled": true,
      "distribution_groups": [
        "ch8i4ug6lnn4g9hqv7mg"
      ]
    },
    "link_auth": {
      "enabled": false
    },
    "header_auths": [
      {
        "enabled": true,
        "header": "X-API-Key",
        "value": "my-secret-api-key"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "192.168.1.0/24"
    ],
    "blocked_cidrs": [
      "10.0.0.0/8"
    ],
    "allowed_countries": [
      "US"
    ],
    "blocked_countries": [
      "DE"
    ],
    "crowdsec_mode": {
      "type": "string",
      "enum": [
        "off",
        "enforce",
        "observe"
      ],
      "default": "off",
      "description": "CrowdSec IP reputation mode. Only available when the proxy cluster supports CrowdSec."
    }
  },
  "private": false,
  "access_groups": [
    "group-engineering"
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
  "id": "cs8i4ug6lnn4g9hqv7mg",
  "name": "myapp.example.netbird.app",
  "domain": "myapp.example.netbird.app",
  "mode": "http",
  "listen_port": 8443,
  "port_auto_assigned": false,
  "proxy_cluster": "eu.proxy.netbird.io",
  "targets": [
    {
      "target_id": "cs8i4ug6lnn4g9hqv7mg",
      "target_type": "subnet",
      "path": "/",
      "protocol": "http",
      "host": "10.10.0.1",
      "port": 8080,
      "enabled": true,
      "options": {
        "skip_tls_verify": false,
        "request_timeout": "30s",
        "path_rewrite": "preserve",
        "custom_headers": {
          "X-Custom-Header": "value"
        },
        "proxy_protocol": false,
        "session_idle_timeout": "2m",
        "direct_upstream": false
      }
    }
  ],
  "enabled": true,
  "terminated": false,
  "pass_host_header": false,
  "rewrite_redirects": false,
  "auth": {
    "password_auth": {
      "enabled": true,
      "password": "s3cret"
    },
    "pin_auth": {
      "enabled": false,
      "pin": "1234"
    },
    "bearer_auth": {
      "enabled": true,
      "distribution_groups": [
        "ch8i4ug6lnn4g9hqv7mg"
      ]
    },
    "link_auth": {
      "enabled": false
    },
    "header_auths": [
      {
        "enabled": true,
        "header": "X-API-Key",
        "value": "my-secret-api-key"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "192.168.1.0/24"
    ],
    "blocked_cidrs": [
      "10.0.0.0/8"
    ],
    "allowed_countries": [
      "US"
    ],
    "blocked_countries": [
      "DE"
    ],
    "crowdsec_mode": {
      "type": "string",
      "enum": [
        "off",
        "enforce",
        "observe"
      ],
      "default": "off",
      "description": "CrowdSec IP reputation mode. Only available when the proxy cluster supports CrowdSec."
    }
  },
  "meta": {
    "created_at": "2024-02-03T10:30:00Z",
    "certificate_issued_at": "2024-02-03T10:35:00Z",
    "status": "active"
  },
  "private": false,
  "access_groups": [
    "group-engineering"
  ]
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "domain": "string",
  "mode": "string",
  "listen_port": "integer",
  "port_auto_assigned": "boolean",
  "proxy_cluster": "string",
  "targets": [
    {
      "target_id": "string",
      "target_type": "string",
      "path": "string",
      "protocol": "string",
      "host": "string",
      "port": "integer",
      "enabled": "boolean",
      "options": {
        "skip_tls_verify": "boolean",
        "request_timeout": "string",
        "path_rewrite": "string",
        "custom_headers": {
          "type": "object",
          "description": "Extra headers sent to the backend. Hop-by-hop and proxy-managed headers (Host, Connection, Transfer-Encoding, etc.) are rejected.",
          "propertyNames": "string",
          "additionalProperties": "string",
          "example": {
            "X-Custom-Header": "value"
          }
        },
        "proxy_protocol": "boolean",
        "session_idle_timeout": "string",
        "direct_upstream": "boolean"
      }
    }
  ],
  "enabled": "boolean",
  "terminated": "boolean",
  "pass_host_header": "boolean",
  "rewrite_redirects": "boolean",
  "auth": {
    "password_auth": {
      "enabled": "boolean",
      "password": "string"
    },
    "pin_auth": {
      "enabled": "boolean",
      "pin": "string"
    },
    "bearer_auth": {
      "enabled": "boolean",
      "distribution_groups": [
        "string"
      ]
    },
    "link_auth": {
      "enabled": "boolean"
    },
    "header_auths": [
      {
        "enabled": "boolean",
        "header": "string",
        "value": "string"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "string"
    ],
    "blocked_cidrs": [
      "string"
    ],
    "allowed_countries": [
      "string"
    ],
    "blocked_countries": [
      "string"
    ],
    "crowdsec_mode": "string"
  },
  "meta": {
    "created_at": "string",
    "certificate_issued_at": "string",
    "status": "string"
  },
  "private": "boolean",
  "access_groups": [
    "string"
  ]
}
```

***

## Retrieve a Service   (GET /api/reverse-proxies/services/{serviceId})

Get information about a specific reverse proxy service

### Path Parameters

**serviceId (type: string; required)**

The unique identifier of a service

**GET /api/reverse-proxies/services/{serviceId} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/reverse-proxies/services/{serviceId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/reverse-proxies/services/{serviceId}',
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

url = "https://api.netbird.io/api/reverse-proxies/services/{serviceId}"

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

  url := "https://api.netbird.io/api/reverse-proxies/services/{serviceId}"
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

url = URI("https://api.netbird.io/api/reverse-proxies/services/{serviceId}")

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
  .url("https://api.netbird.io/api/reverse-proxies/services/{serviceId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/reverse-proxies/services/{serviceId}',
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
  "id": "cs8i4ug6lnn4g9hqv7mg",
  "name": "myapp.example.netbird.app",
  "domain": "myapp.example.netbird.app",
  "mode": "http",
  "listen_port": 8443,
  "port_auto_assigned": false,
  "proxy_cluster": "eu.proxy.netbird.io",
  "targets": [
    {
      "target_id": "cs8i4ug6lnn4g9hqv7mg",
      "target_type": "subnet",
      "path": "/",
      "protocol": "http",
      "host": "10.10.0.1",
      "port": 8080,
      "enabled": true,
      "options": {
        "skip_tls_verify": false,
        "request_timeout": "30s",
        "path_rewrite": "preserve",
        "custom_headers": {
          "X-Custom-Header": "value"
        },
        "proxy_protocol": false,
        "session_idle_timeout": "2m",
        "direct_upstream": false
      }
    }
  ],
  "enabled": true,
  "terminated": false,
  "pass_host_header": false,
  "rewrite_redirects": false,
  "auth": {
    "password_auth": {
      "enabled": true,
      "password": "s3cret"
    },
    "pin_auth": {
      "enabled": false,
      "pin": "1234"
    },
    "bearer_auth": {
      "enabled": true,
      "distribution_groups": [
        "ch8i4ug6lnn4g9hqv7mg"
      ]
    },
    "link_auth": {
      "enabled": false
    },
    "header_auths": [
      {
        "enabled": true,
        "header": "X-API-Key",
        "value": "my-secret-api-key"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "192.168.1.0/24"
    ],
    "blocked_cidrs": [
      "10.0.0.0/8"
    ],
    "allowed_countries": [
      "US"
    ],
    "blocked_countries": [
      "DE"
    ],
    "crowdsec_mode": {
      "type": "string",
      "enum": [
        "off",
        "enforce",
        "observe"
      ],
      "default": "off",
      "description": "CrowdSec IP reputation mode. Only available when the proxy cluster supports CrowdSec."
    }
  },
  "meta": {
    "created_at": "2024-02-03T10:30:00Z",
    "certificate_issued_at": "2024-02-03T10:35:00Z",
    "status": "active"
  },
  "private": false,
  "access_groups": [
    "group-engineering"
  ]
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "domain": "string",
  "mode": "string",
  "listen_port": "integer",
  "port_auto_assigned": "boolean",
  "proxy_cluster": "string",
  "targets": [
    {
      "target_id": "string",
      "target_type": "string",
      "path": "string",
      "protocol": "string",
      "host": "string",
      "port": "integer",
      "enabled": "boolean",
      "options": {
        "skip_tls_verify": "boolean",
        "request_timeout": "string",
        "path_rewrite": "string",
        "custom_headers": {
          "type": "object",
          "description": "Extra headers sent to the backend. Hop-by-hop and proxy-managed headers (Host, Connection, Transfer-Encoding, etc.) are rejected.",
          "propertyNames": "string",
          "additionalProperties": "string",
          "example": {
            "X-Custom-Header": "value"
          }
        },
        "proxy_protocol": "boolean",
        "session_idle_timeout": "string",
        "direct_upstream": "boolean"
      }
    }
  ],
  "enabled": "boolean",
  "terminated": "boolean",
  "pass_host_header": "boolean",
  "rewrite_redirects": "boolean",
  "auth": {
    "password_auth": {
      "enabled": "boolean",
      "password": "string"
    },
    "pin_auth": {
      "enabled": "boolean",
      "pin": "string"
    },
    "bearer_auth": {
      "enabled": "boolean",
      "distribution_groups": [
        "string"
      ]
    },
    "link_auth": {
      "enabled": "boolean"
    },
    "header_auths": [
      {
        "enabled": "boolean",
        "header": "string",
        "value": "string"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "string"
    ],
    "blocked_cidrs": [
      "string"
    ],
    "allowed_countries": [
      "string"
    ],
    "blocked_countries": [
      "string"
    ],
    "crowdsec_mode": "string"
  },
  "meta": {
    "created_at": "string",
    "certificate_issued_at": "string",
    "status": "string"
  },
  "private": "boolean",
  "access_groups": [
    "string"
  ]
}
```

***

## Update a Service   (PUT /api/reverse-proxies/services/{serviceId})

Update an existing service

### Path Parameters

**serviceId (type: string; required)**

The unique identifier of a service

### Request-Body Parameters

**name (type: string; required)**

Service name

**domain (type: string; required)**

Domain for the service

**mode (type: string; optional; values: http, tcp, udp, tls)**

Service mode. "http" for L7 reverse proxy, "tcp"/"udp"/"tls" for L4 passthrough.

**listen\_port (type: integer; optional; min: 0; max: 65535)**

Port the proxy listens on (L4/TLS only). Set to 0 for auto-assignment.

**targets (type: object\[]; optional)**

**List of target backends for this service**

**target\_id (type: string; required)**

Target ID

**target\_type (type: string; required; values: peer, host, domain, subnet, cluster)**

Target type

**path (type: string; optional)**

URL path prefix for this target (HTTP only)

**protocol (type: string; required; values: http, https, tcp, udp)**

Protocol to use when connecting to the backend

**host (type: string; optional)**

Backend ip or domain for this target

**port (type: integer; required; min: 1; max: 65535)**

Backend port for this target

**enabled (type: boolean; required)**

Whether this target is enabled

**options (type: object; optional)**

**More Information**

**skip\_tls\_verify (type: boolean; optional)**

Skip TLS certificate verification for this backend

**request\_timeout (type: string; optional)**

Per-target response timeout as a Go duration string (e.g. "30s", "2m")

**path\_rewrite (type: string; optional; values: preserve)**

Controls how the request path is rewritten before forwarding to the backend. Default strips the matched prefix. "preserve" keeps the full original request path.

**custom\_headers (type: object; optional)**

Extra headers sent to the backend. Hop-by-hop and proxy-managed headers (Host, Connection, Transfer-Encoding, etc.) are rejected.

**proxy\_protocol (type: boolean; optional)**

Send PROXY Protocol v2 header to this backend (TCP/TLS only)

**session\_idle\_timeout (type: string; optional)**

Idle timeout before a UDP session is reaped, as a Go duration string (e.g. "30s", "2m").

**direct\_upstream (type: boolean; optional)**

When true, the proxy dials this target via the host's network stack
instead of through its embedded NetBird client. Use for upstreams
reachable without WireGuard (public APIs, LAN services, localhost
sidecars).

**enabled (type: boolean; required)**

Whether the service is enabled

**pass\_host\_header (type: boolean; optional)**

When true, the original client Host header is passed through to the backend instead of being rewritten to the backend's address

**rewrite\_redirects (type: boolean; optional)**

When true, Location headers in backend responses are rewritten to replace the backend address with the public-facing domain

**auth (type: object; optional)**

**More Information**

**password\_auth (type: object; optional)**

**More Information**

**enabled (type: boolean; required)**

Whether password auth is enabled

**password (type: string; required)**

Auth password

**pin\_auth (type: object; optional)**

**More Information**

**enabled (type: boolean; required)**

Whether PIN auth is enabled

**pin (type: string; required)**

PIN value

**bearer\_auth (type: object; optional)**

**More Information**

**enabled (type: boolean; required)**

Whether bearer auth is enabled

**distribution\_groups (type: string\[]; optional)**

List of group IDs that can use bearer auth

**link\_auth (type: object; optional)**

**More Information**

**enabled (type: boolean; required)**

Whether link auth is enabled

**header\_auths (type: object\[]; optional)**

**More Information**

**enabled (type: boolean; required)**

Whether header auth is enabled

**header (type: string; required)**

HTTP header name to check (e.g. "Authorization", "X-API-Key")

**value (type: string; required)**

Expected header value. For Basic auth use "Basic base64(user:pass)". For Bearer use "Bearer token". Cleared in responses.

**access\_restrictions (type: object; optional)**

**Connection-level access restrictions based on IP address or geography. Applies to both HTTP and L4 services.**

**allowed\_cidrs (type: string\[]; optional)**

CIDR allowlist. If non-empty, only IPs matching these CIDRs are allowed.

**blocked\_cidrs (type: string\[]; optional)**

CIDR blocklist. Connections from these CIDRs are rejected. Evaluated after allowed\_cidrs.

**allowed\_countries (type: string\[]; optional)**

ISO 3166-1 alpha-2 country codes to allow. If non-empty, only these countries are permitted.

**blocked\_countries (type: string\[]; optional)**

ISO 3166-1 alpha-2 country codes to block.

**crowdsec\_mode (type: string; optional; values: off, enforce, observe)**

CrowdSec IP reputation mode. Only available when the proxy cluster supports CrowdSec.

**private (type: boolean; optional)**

When true, the service is NetBird-only — its target points at a proxy cluster, inbound peers authenticate via their WireGuard tunnel identity (no OIDC), and an ACL policy is auto-generated from access\_groups to the cluster's proxy-peer group. Requires mode=http.

**access\_groups (type: string\[]; optional)**

NetBird group IDs whose peers may reach this private service over the tunnel. Required when private=true; ignored otherwise. Mutually exclusive with bearer auth (SSO).

**PUT /api/reverse-proxies/services/{serviceId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/reverse-proxies/services/{serviceId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "myapp.example.netbird.app",
  "domain": "myapp.example.netbird.app",
  "mode": "http",
  "listen_port": 5432,
  "targets": [
    {
      "target_id": "cs8i4ug6lnn4g9hqv7mg",
      "target_type": "subnet",
      "path": "/",
      "protocol": "http",
      "host": "10.10.0.1",
      "port": 8080,
      "enabled": true,
      "options": {
        "skip_tls_verify": false,
        "request_timeout": "30s",
        "path_rewrite": "preserve",
        "custom_headers": {
          "X-Custom-Header": "value"
        },
        "proxy_protocol": false,
        "session_idle_timeout": "2m",
        "direct_upstream": false
      }
    }
  ],
  "enabled": true,
  "pass_host_header": false,
  "rewrite_redirects": false,
  "auth": {
    "password_auth": {
      "enabled": true,
      "password": "s3cret"
    },
    "pin_auth": {
      "enabled": false,
      "pin": "1234"
    },
    "bearer_auth": {
      "enabled": true,
      "distribution_groups": [
        "ch8i4ug6lnn4g9hqv7mg"
      ]
    },
    "link_auth": {
      "enabled": false
    },
    "header_auths": [
      {
        "enabled": true,
        "header": "X-API-Key",
        "value": "my-secret-api-key"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "192.168.1.0/24"
    ],
    "blocked_cidrs": [
      "10.0.0.0/8"
    ],
    "allowed_countries": [
      "US"
    ],
    "blocked_countries": [
      "DE"
    ],
    "crowdsec_mode": {
      "type": "string",
      "enum": [
        "off",
        "enforce",
        "observe"
      ],
      "default": "off",
      "description": "CrowdSec IP reputation mode. Only available when the proxy cluster supports CrowdSec."
    }
  },
  "private": false,
  "access_groups": [
    "group-engineering"
  ]
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "myapp.example.netbird.app",
  "domain": "myapp.example.netbird.app",
  "mode": "http",
  "listen_port": 5432,
  "targets": [
    {
      "target_id": "cs8i4ug6lnn4g9hqv7mg",
      "target_type": "subnet",
      "path": "/",
      "protocol": "http",
      "host": "10.10.0.1",
      "port": 8080,
      "enabled": true,
      "options": {
        "skip_tls_verify": false,
        "request_timeout": "30s",
        "path_rewrite": "preserve",
        "custom_headers": {
          "X-Custom-Header": "value"
        },
        "proxy_protocol": false,
        "session_idle_timeout": "2m",
        "direct_upstream": false
      }
    }
  ],
  "enabled": true,
  "pass_host_header": false,
  "rewrite_redirects": false,
  "auth": {
    "password_auth": {
      "enabled": true,
      "password": "s3cret"
    },
    "pin_auth": {
      "enabled": false,
      "pin": "1234"
    },
    "bearer_auth": {
      "enabled": true,
      "distribution_groups": [
        "ch8i4ug6lnn4g9hqv7mg"
      ]
    },
    "link_auth": {
      "enabled": false
    },
    "header_auths": [
      {
        "enabled": true,
        "header": "X-API-Key",
        "value": "my-secret-api-key"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "192.168.1.0/24"
    ],
    "blocked_cidrs": [
      "10.0.0.0/8"
    ],
    "allowed_countries": [
      "US"
    ],
    "blocked_countries": [
      "DE"
    ],
    "crowdsec_mode": {
      "type": "string",
      "enum": [
        "off",
        "enforce",
        "observe"
      ],
      "default": "off",
      "description": "CrowdSec IP reputation mode. Only available when the proxy cluster supports CrowdSec."
    }
  },
  "private": false,
  "access_groups": [
    "group-engineering"
  ]
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/reverse-proxies/services/{serviceId}',
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

url = "https://api.netbird.io/api/reverse-proxies/services/{serviceId}"
payload = json.dumps({
  "name": "myapp.example.netbird.app",
  "domain": "myapp.example.netbird.app",
  "mode": "http",
  "listen_port": 5432,
  "targets": [
    {
      "target_id": "cs8i4ug6lnn4g9hqv7mg",
      "target_type": "subnet",
      "path": "/",
      "protocol": "http",
      "host": "10.10.0.1",
      "port": 8080,
      "enabled": true,
      "options": {
        "skip_tls_verify": false,
        "request_timeout": "30s",
        "path_rewrite": "preserve",
        "custom_headers": {
          "X-Custom-Header": "value"
        },
        "proxy_protocol": false,
        "session_idle_timeout": "2m",
        "direct_upstream": false
      }
    }
  ],
  "enabled": true,
  "pass_host_header": false,
  "rewrite_redirects": false,
  "auth": {
    "password_auth": {
      "enabled": true,
      "password": "s3cret"
    },
    "pin_auth": {
      "enabled": false,
      "pin": "1234"
    },
    "bearer_auth": {
      "enabled": true,
      "distribution_groups": [
        "ch8i4ug6lnn4g9hqv7mg"
      ]
    },
    "link_auth": {
      "enabled": false
    },
    "header_auths": [
      {
        "enabled": true,
        "header": "X-API-Key",
        "value": "my-secret-api-key"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "192.168.1.0/24"
    ],
    "blocked_cidrs": [
      "10.0.0.0/8"
    ],
    "allowed_countries": [
      "US"
    ],
    "blocked_countries": [
      "DE"
    ],
    "crowdsec_mode": {
      "type": "string",
      "enum": [
        "off",
        "enforce",
        "observe"
      ],
      "default": "off",
      "description": "CrowdSec IP reputation mode. Only available when the proxy cluster supports CrowdSec."
    }
  },
  "private": false,
  "access_groups": [
    "group-engineering"
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

  url := "https://api.netbird.io/api/reverse-proxies/services/{serviceId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "name": "myapp.example.netbird.app",
  "domain": "myapp.example.netbird.app",
  "mode": "http",
  "listen_port": 5432,
  "targets": [
    {
      "target_id": "cs8i4ug6lnn4g9hqv7mg",
      "target_type": "subnet",
      "path": "/",
      "protocol": "http",
      "host": "10.10.0.1",
      "port": 8080,
      "enabled": true,
      "options": {
        "skip_tls_verify": false,
        "request_timeout": "30s",
        "path_rewrite": "preserve",
        "custom_headers": {
          "X-Custom-Header": "value"
        },
        "proxy_protocol": false,
        "session_idle_timeout": "2m",
        "direct_upstream": false
      }
    }
  ],
  "enabled": true,
  "pass_host_header": false,
  "rewrite_redirects": false,
  "auth": {
    "password_auth": {
      "enabled": true,
      "password": "s3cret"
    },
    "pin_auth": {
      "enabled": false,
      "pin": "1234"
    },
    "bearer_auth": {
      "enabled": true,
      "distribution_groups": [
        "ch8i4ug6lnn4g9hqv7mg"
      ]
    },
    "link_auth": {
      "enabled": false
    },
    "header_auths": [
      {
        "enabled": true,
        "header": "X-API-Key",
        "value": "my-secret-api-key"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "192.168.1.0/24"
    ],
    "blocked_cidrs": [
      "10.0.0.0/8"
    ],
    "allowed_countries": [
      "US"
    ],
    "blocked_countries": [
      "DE"
    ],
    "crowdsec_mode": {
      "type": "string",
      "enum": [
        "off",
        "enforce",
        "observe"
      ],
      "default": "off",
      "description": "CrowdSec IP reputation mode. Only available when the proxy cluster supports CrowdSec."
    }
  },
  "private": false,
  "access_groups": [
    "group-engineering"
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

url = URI("https://api.netbird.io/api/reverse-proxies/services/{serviceId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "myapp.example.netbird.app",
  "domain": "myapp.example.netbird.app",
  "mode": "http",
  "listen_port": 5432,
  "targets": [
    {
      "target_id": "cs8i4ug6lnn4g9hqv7mg",
      "target_type": "subnet",
      "path": "/",
      "protocol": "http",
      "host": "10.10.0.1",
      "port": 8080,
      "enabled": true,
      "options": {
        "skip_tls_verify": false,
        "request_timeout": "30s",
        "path_rewrite": "preserve",
        "custom_headers": {
          "X-Custom-Header": "value"
        },
        "proxy_protocol": false,
        "session_idle_timeout": "2m",
        "direct_upstream": false
      }
    }
  ],
  "enabled": true,
  "pass_host_header": false,
  "rewrite_redirects": false,
  "auth": {
    "password_auth": {
      "enabled": true,
      "password": "s3cret"
    },
    "pin_auth": {
      "enabled": false,
      "pin": "1234"
    },
    "bearer_auth": {
      "enabled": true,
      "distribution_groups": [
        "ch8i4ug6lnn4g9hqv7mg"
      ]
    },
    "link_auth": {
      "enabled": false
    },
    "header_auths": [
      {
        "enabled": true,
        "header": "X-API-Key",
        "value": "my-secret-api-key"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "192.168.1.0/24"
    ],
    "blocked_cidrs": [
      "10.0.0.0/8"
    ],
    "allowed_countries": [
      "US"
    ],
    "blocked_countries": [
      "DE"
    ],
    "crowdsec_mode": {
      "type": "string",
      "enum": [
        "off",
        "enforce",
        "observe"
      ],
      "default": "off",
      "description": "CrowdSec IP reputation mode. Only available when the proxy cluster supports CrowdSec."
    }
  },
  "private": false,
  "access_groups": [
    "group-engineering"
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
  "name": "myapp.example.netbird.app",
  "domain": "myapp.example.netbird.app",
  "mode": "http",
  "listen_port": 5432,
  "targets": [
    {
      "target_id": "cs8i4ug6lnn4g9hqv7mg",
      "target_type": "subnet",
      "path": "/",
      "protocol": "http",
      "host": "10.10.0.1",
      "port": 8080,
      "enabled": true,
      "options": {
        "skip_tls_verify": false,
        "request_timeout": "30s",
        "path_rewrite": "preserve",
        "custom_headers": {
          "X-Custom-Header": "value"
        },
        "proxy_protocol": false,
        "session_idle_timeout": "2m",
        "direct_upstream": false
      }
    }
  ],
  "enabled": true,
  "pass_host_header": false,
  "rewrite_redirects": false,
  "auth": {
    "password_auth": {
      "enabled": true,
      "password": "s3cret"
    },
    "pin_auth": {
      "enabled": false,
      "pin": "1234"
    },
    "bearer_auth": {
      "enabled": true,
      "distribution_groups": [
        "ch8i4ug6lnn4g9hqv7mg"
      ]
    },
    "link_auth": {
      "enabled": false
    },
    "header_auths": [
      {
        "enabled": true,
        "header": "X-API-Key",
        "value": "my-secret-api-key"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "192.168.1.0/24"
    ],
    "blocked_cidrs": [
      "10.0.0.0/8"
    ],
    "allowed_countries": [
      "US"
    ],
    "blocked_countries": [
      "DE"
    ],
    "crowdsec_mode": {
      "type": "string",
      "enum": [
        "off",
        "enforce",
        "observe"
      ],
      "default": "off",
      "description": "CrowdSec IP reputation mode. Only available when the proxy cluster supports CrowdSec."
    }
  },
  "private": false,
  "access_groups": [
    "group-engineering"
  ]
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/reverse-proxies/services/{serviceId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/reverse-proxies/services/{serviceId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "name": "myapp.example.netbird.app",
  "domain": "myapp.example.netbird.app",
  "mode": "http",
  "listen_port": 5432,
  "targets": [
    {
      "target_id": "cs8i4ug6lnn4g9hqv7mg",
      "target_type": "subnet",
      "path": "/",
      "protocol": "http",
      "host": "10.10.0.1",
      "port": 8080,
      "enabled": true,
      "options": {
        "skip_tls_verify": false,
        "request_timeout": "30s",
        "path_rewrite": "preserve",
        "custom_headers": {
          "X-Custom-Header": "value"
        },
        "proxy_protocol": false,
        "session_idle_timeout": "2m",
        "direct_upstream": false
      }
    }
  ],
  "enabled": true,
  "pass_host_header": false,
  "rewrite_redirects": false,
  "auth": {
    "password_auth": {
      "enabled": true,
      "password": "s3cret"
    },
    "pin_auth": {
      "enabled": false,
      "pin": "1234"
    },
    "bearer_auth": {
      "enabled": true,
      "distribution_groups": [
        "ch8i4ug6lnn4g9hqv7mg"
      ]
    },
    "link_auth": {
      "enabled": false
    },
    "header_auths": [
      {
        "enabled": true,
        "header": "X-API-Key",
        "value": "my-secret-api-key"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "192.168.1.0/24"
    ],
    "blocked_cidrs": [
      "10.0.0.0/8"
    ],
    "allowed_countries": [
      "US"
    ],
    "blocked_countries": [
      "DE"
    ],
    "crowdsec_mode": {
      "type": "string",
      "enum": [
        "off",
        "enforce",
        "observe"
      ],
      "default": "off",
      "description": "CrowdSec IP reputation mode. Only available when the proxy cluster supports CrowdSec."
    }
  },
  "private": false,
  "access_groups": [
    "group-engineering"
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
  "id": "cs8i4ug6lnn4g9hqv7mg",
  "name": "myapp.example.netbird.app",
  "domain": "myapp.example.netbird.app",
  "mode": "http",
  "listen_port": 8443,
  "port_auto_assigned": false,
  "proxy_cluster": "eu.proxy.netbird.io",
  "targets": [
    {
      "target_id": "cs8i4ug6lnn4g9hqv7mg",
      "target_type": "subnet",
      "path": "/",
      "protocol": "http",
      "host": "10.10.0.1",
      "port": 8080,
      "enabled": true,
      "options": {
        "skip_tls_verify": false,
        "request_timeout": "30s",
        "path_rewrite": "preserve",
        "custom_headers": {
          "X-Custom-Header": "value"
        },
        "proxy_protocol": false,
        "session_idle_timeout": "2m",
        "direct_upstream": false
      }
    }
  ],
  "enabled": true,
  "terminated": false,
  "pass_host_header": false,
  "rewrite_redirects": false,
  "auth": {
    "password_auth": {
      "enabled": true,
      "password": "s3cret"
    },
    "pin_auth": {
      "enabled": false,
      "pin": "1234"
    },
    "bearer_auth": {
      "enabled": true,
      "distribution_groups": [
        "ch8i4ug6lnn4g9hqv7mg"
      ]
    },
    "link_auth": {
      "enabled": false
    },
    "header_auths": [
      {
        "enabled": true,
        "header": "X-API-Key",
        "value": "my-secret-api-key"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "192.168.1.0/24"
    ],
    "blocked_cidrs": [
      "10.0.0.0/8"
    ],
    "allowed_countries": [
      "US"
    ],
    "blocked_countries": [
      "DE"
    ],
    "crowdsec_mode": {
      "type": "string",
      "enum": [
        "off",
        "enforce",
        "observe"
      ],
      "default": "off",
      "description": "CrowdSec IP reputation mode. Only available when the proxy cluster supports CrowdSec."
    }
  },
  "meta": {
    "created_at": "2024-02-03T10:30:00Z",
    "certificate_issued_at": "2024-02-03T10:35:00Z",
    "status": "active"
  },
  "private": false,
  "access_groups": [
    "group-engineering"
  ]
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "domain": "string",
  "mode": "string",
  "listen_port": "integer",
  "port_auto_assigned": "boolean",
  "proxy_cluster": "string",
  "targets": [
    {
      "target_id": "string",
      "target_type": "string",
      "path": "string",
      "protocol": "string",
      "host": "string",
      "port": "integer",
      "enabled": "boolean",
      "options": {
        "skip_tls_verify": "boolean",
        "request_timeout": "string",
        "path_rewrite": "string",
        "custom_headers": {
          "type": "object",
          "description": "Extra headers sent to the backend. Hop-by-hop and proxy-managed headers (Host, Connection, Transfer-Encoding, etc.) are rejected.",
          "propertyNames": "string",
          "additionalProperties": "string",
          "example": {
            "X-Custom-Header": "value"
          }
        },
        "proxy_protocol": "boolean",
        "session_idle_timeout": "string",
        "direct_upstream": "boolean"
      }
    }
  ],
  "enabled": "boolean",
  "terminated": "boolean",
  "pass_host_header": "boolean",
  "rewrite_redirects": "boolean",
  "auth": {
    "password_auth": {
      "enabled": "boolean",
      "password": "string"
    },
    "pin_auth": {
      "enabled": "boolean",
      "pin": "string"
    },
    "bearer_auth": {
      "enabled": "boolean",
      "distribution_groups": [
        "string"
      ]
    },
    "link_auth": {
      "enabled": "boolean"
    },
    "header_auths": [
      {
        "enabled": "boolean",
        "header": "string",
        "value": "string"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "string"
    ],
    "blocked_cidrs": [
      "string"
    ],
    "allowed_countries": [
      "string"
    ],
    "blocked_countries": [
      "string"
    ],
    "crowdsec_mode": "string"
  },
  "meta": {
    "created_at": "string",
    "certificate_issued_at": "string",
    "status": "string"
  },
  "private": "boolean",
  "access_groups": [
    "string"
  ]
}
```

***

## Delete a Service   (DELETE /api/reverse-proxies/services/{serviceId})

Delete an existing service

### Path Parameters

**serviceId (type: string; required)**

The unique identifier of a service

**DELETE /api/reverse-proxies/services/{serviceId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/reverse-proxies/services/{serviceId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/reverse-proxies/services/{serviceId}',
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

url = "https://api.netbird.io/api/reverse-proxies/services/{serviceId}"

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

  url := "https://api.netbird.io/api/reverse-proxies/services/{serviceId}"
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

url = URI("https://api.netbird.io/api/reverse-proxies/services/{serviceId}")

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
  .url("https://api.netbird.io/api/reverse-proxies/services/{serviceId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/reverse-proxies/services/{serviceId}',
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

## Retrieve Service Domains   (GET /api/reverse-proxies/domains)

Get information about domains that can be used for service endpoints.

**GET /api/reverse-proxies/domains Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/reverse-proxies/domains \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/reverse-proxies/domains',
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

url = "https://api.netbird.io/api/reverse-proxies/domains"

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

  url := "https://api.netbird.io/api/reverse-proxies/domains"
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

url = URI("https://api.netbird.io/api/reverse-proxies/domains")

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
  .url("https://api.netbird.io/api/reverse-proxies/domains")
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
  CURLOPT_URL => 'https://api.netbird.io/api/reverse-proxies/domains',
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
    "id": "ds8i4ug6lnn4g9hqv7mg",
    "domain": "example.netbird.app",
    "validated": true,
    "type": "free",
    "target_cluster": "eu.proxy.netbird.io",
    "supports_custom_ports": true,
    "require_subdomain": false,
    "supports_crowdsec": false,
    "supports_private": false
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "domain": "string",
    "validated": "boolean",
    "type": "string",
    "target_cluster": "string",
    "supports_custom_ports": "boolean",
    "require_subdomain": "boolean",
    "supports_crowdsec": "boolean",
    "supports_private": "boolean"
  }
]
```

***

## Create a Custom domain   (POST /api/reverse-proxies/domains)

Create a new Custom domain for use with service endpoints, this will trigger an initial validation check

### Request-Body Parameters

**domain (type: string; required)**

Domain name

**target\_cluster (type: string; required)**

The proxy cluster this domain should be validated against

**POST /api/reverse-proxies/domains Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/reverse-proxies/domains \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "domain": "myapp.example.com",
  "target_cluster": "eu.proxy.netbird.io"
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "domain": "myapp.example.com",
  "target_cluster": "eu.proxy.netbird.io"
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/reverse-proxies/domains',
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

url = "https://api.netbird.io/api/reverse-proxies/domains"
payload = json.dumps({
  "domain": "myapp.example.com",
  "target_cluster": "eu.proxy.netbird.io"
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

  url := "https://api.netbird.io/api/reverse-proxies/domains"
  method := "POST"
  
  payload := strings.NewReader(`{
  "domain": "myapp.example.com",
  "target_cluster": "eu.proxy.netbird.io"
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

url = URI("https://api.netbird.io/api/reverse-proxies/domains")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "domain": "myapp.example.com",
  "target_cluster": "eu.proxy.netbird.io"
})
response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, '{
  "domain": "myapp.example.com",
  "target_cluster": "eu.proxy.netbird.io"
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/reverse-proxies/domains")
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
  CURLOPT_URL => 'https://api.netbird.io/api/reverse-proxies/domains',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "domain": "myapp.example.com",
  "target_cluster": "eu.proxy.netbird.io"
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
  "id": "cs8i4ug6lnn4g9hqv7mg",
  "name": "myapp.example.netbird.app",
  "domain": "myapp.example.netbird.app",
  "mode": "http",
  "listen_port": 8443,
  "port_auto_assigned": false,
  "proxy_cluster": "eu.proxy.netbird.io",
  "targets": [
    {
      "target_id": "cs8i4ug6lnn4g9hqv7mg",
      "target_type": "subnet",
      "path": "/",
      "protocol": "http",
      "host": "10.10.0.1",
      "port": 8080,
      "enabled": true,
      "options": {
        "skip_tls_verify": false,
        "request_timeout": "30s",
        "path_rewrite": "preserve",
        "custom_headers": {
          "X-Custom-Header": "value"
        },
        "proxy_protocol": false,
        "session_idle_timeout": "2m",
        "direct_upstream": false
      }
    }
  ],
  "enabled": true,
  "terminated": false,
  "pass_host_header": false,
  "rewrite_redirects": false,
  "auth": {
    "password_auth": {
      "enabled": true,
      "password": "s3cret"
    },
    "pin_auth": {
      "enabled": false,
      "pin": "1234"
    },
    "bearer_auth": {
      "enabled": true,
      "distribution_groups": [
        "ch8i4ug6lnn4g9hqv7mg"
      ]
    },
    "link_auth": {
      "enabled": false
    },
    "header_auths": [
      {
        "enabled": true,
        "header": "X-API-Key",
        "value": "my-secret-api-key"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "192.168.1.0/24"
    ],
    "blocked_cidrs": [
      "10.0.0.0/8"
    ],
    "allowed_countries": [
      "US"
    ],
    "blocked_countries": [
      "DE"
    ],
    "crowdsec_mode": {
      "type": "string",
      "enum": [
        "off",
        "enforce",
        "observe"
      ],
      "default": "off",
      "description": "CrowdSec IP reputation mode. Only available when the proxy cluster supports CrowdSec."
    }
  },
  "meta": {
    "created_at": "2024-02-03T10:30:00Z",
    "certificate_issued_at": "2024-02-03T10:35:00Z",
    "status": "active"
  },
  "private": false,
  "access_groups": [
    "group-engineering"
  ]
}
```

**Schema**

```json
{
  "id": "string",
  "name": "string",
  "domain": "string",
  "mode": "string",
  "listen_port": "integer",
  "port_auto_assigned": "boolean",
  "proxy_cluster": "string",
  "targets": [
    {
      "target_id": "string",
      "target_type": "string",
      "path": "string",
      "protocol": "string",
      "host": "string",
      "port": "integer",
      "enabled": "boolean",
      "options": {
        "skip_tls_verify": "boolean",
        "request_timeout": "string",
        "path_rewrite": "string",
        "custom_headers": {
          "type": "object",
          "description": "Extra headers sent to the backend. Hop-by-hop and proxy-managed headers (Host, Connection, Transfer-Encoding, etc.) are rejected.",
          "propertyNames": "string",
          "additionalProperties": "string",
          "example": {
            "X-Custom-Header": "value"
          }
        },
        "proxy_protocol": "boolean",
        "session_idle_timeout": "string",
        "direct_upstream": "boolean"
      }
    }
  ],
  "enabled": "boolean",
  "terminated": "boolean",
  "pass_host_header": "boolean",
  "rewrite_redirects": "boolean",
  "auth": {
    "password_auth": {
      "enabled": "boolean",
      "password": "string"
    },
    "pin_auth": {
      "enabled": "boolean",
      "pin": "string"
    },
    "bearer_auth": {
      "enabled": "boolean",
      "distribution_groups": [
        "string"
      ]
    },
    "link_auth": {
      "enabled": "boolean"
    },
    "header_auths": [
      {
        "enabled": "boolean",
        "header": "string",
        "value": "string"
      }
    ]
  },
  "access_restrictions": {
    "allowed_cidrs": [
      "string"
    ],
    "blocked_cidrs": [
      "string"
    ],
    "allowed_countries": [
      "string"
    ],
    "blocked_countries": [
      "string"
    ],
    "crowdsec_mode": "string"
  },
  "meta": {
    "created_at": "string",
    "certificate_issued_at": "string",
    "status": "string"
  },
  "private": "boolean",
  "access_groups": [
    "string"
  ]
}
```

***

## Delete a Custom domain   (DELETE /api/reverse-proxies/domains/{domainId})

Delete an existing service custom domain

### Path Parameters

**domainId (type: string; required)**

The custom domain ID

**DELETE /api/reverse-proxies/domains/{domainId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/reverse-proxies/domains/{domainId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/reverse-proxies/domains/{domainId}',
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

url = "https://api.netbird.io/api/reverse-proxies/domains/{domainId}"

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

  url := "https://api.netbird.io/api/reverse-proxies/domains/{domainId}"
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

url = URI("https://api.netbird.io/api/reverse-proxies/domains/{domainId}")

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
  .url("https://api.netbird.io/api/reverse-proxies/domains/{domainId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/reverse-proxies/domains/{domainId}',
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

## Validate a custom domain   (GET /api/reverse-proxies/domains/{domainId}/validate)

Trigger domain ownership validation for a custom domain

### Path Parameters

**domainId (type: string; required)**

The custom domain ID

**GET /api/reverse-proxies/domains/{domainId}/validate Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/reverse-proxies/domains/{domainId}/validate \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/reverse-proxies/domains/{domainId}/validate',
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

url = "https://api.netbird.io/api/reverse-proxies/domains/{domainId}/validate"

headers = {     
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

  url := "https://api.netbird.io/api/reverse-proxies/domains/{domainId}/validate"
  method := "GET"
  
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

url = URI("https://api.netbird.io/api/reverse-proxies/domains/{domainId}/validate")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = "Token <TOKEN>"

response = https.request(request)
puts response.read_body
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();

Request request = new Request.Builder()
  .url("https://api.netbird.io/api/reverse-proxies/domains/{domainId}/validate")
  .method("GET")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/reverse-proxies/domains/{domainId}/validate',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',  
  CURLOPT_HTTPHEADER => array(        
    'Authorization: Token <TOKEN>'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```

***
