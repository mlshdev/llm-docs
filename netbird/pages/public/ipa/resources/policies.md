> Release-pinned source for NetBird v0.77.1: [netbirdio/docs@d905fda2a3f04a2066746875d09e51a3fe62dfed:src/pages/ipa/resources/policies.mdx](https://github.com/netbirdio/docs/blob/d905fda2a3f04a2066746875d09e51a3fe62dfed/src/pages/ipa/resources/policies.mdx)

## List all Policies   (GET /api/policies)

Returns a list of all policies

**GET /api/policies Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/policies \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/policies',
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

url = "https://api.netbird.io/api/policies"

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

  url := "https://api.netbird.io/api/policies"
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

url = URI("https://api.netbird.io/api/policies")

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
  .url("https://api.netbird.io/api/policies")
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
  CURLOPT_URL => 'https://api.netbird.io/api/policies',
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
    "name": "ch8i4ug6lnn4g9hqv7mg",
    "description": "This is a default policy that allows connections between all the resources",
    "enabled": true,
    "id": "ch8i4ug6lnn4g9hqv7mg",
    "source_posture_checks": [
      "chacdk86lnnboviihd70"
    ],
    "rules": [
      {
        "name": "Default",
        "description": "This is a default rule that allows connections between all the resources",
        "enabled": true,
        "action": "accept",
        "bidirectional": true,
        "protocol": "tcp",
        "port_ranges": [
          {
            "start": 80,
            "end": 320
          }
        ],
        "authorized_groups": {
          "description": "Map of user group ids to a list of local users",
          "type": "object",
          "additionalProperties": [
            "group1"
          ]
        },
        "id": "ch8i4ug6lnn4g9hqv7mg",
        "sources": [
          {
            "id": "ch8i4ug6lnn4g9hqv7m0",
            "name": "devs",
            "peers_count": 2,
            "resources_count": 5,
            "issued": "api"
          }
        ],
        "sourceResource": {
          "id": "chacdk86lnnboviihd7g",
          "type": "host"
        },
        "destinations": [
          {
            "id": "ch8i4ug6lnn4g9hqv7m0",
            "name": "devs",
            "peers_count": 2,
            "resources_count": 5,
            "issued": "api"
          }
        ],
        "destinationResource": {
          "id": "chacdk86lnnboviihd7g",
          "type": "host"
        }
      }
    ]
  }
]
```

**Schema**

```json
[
  {
    "name": "string",
    "description": "string",
    "enabled": "boolean",
    "id": "string",
    "source_posture_checks": [
      "string"
    ],
    "rules": [
      {
        "name": "string",
        "description": "string",
        "enabled": "boolean",
        "action": "string",
        "bidirectional": "boolean",
        "protocol": "string",
        "ports": [
          "string"
        ],
        "port_ranges": [
          {
            "start": "integer",
            "end": "integer"
          }
        ],
        "authorized_groups": {
          "description": "Map of user group ids to a list of local users",
          "type": "object",
          "additionalProperties": [
            "string"
          ]
        },
        "id": "string",
        "sources": [
          {
            "id": "string",
            "name": "string",
            "peers_count": "integer",
            "resources_count": "integer",
            "issued": "string"
          }
        ],
        "sourceResource": {
          "id": "string",
          "type": "string"
        },
        "destinations": [
          {
            "id": "string",
            "name": "string",
            "peers_count": "integer",
            "resources_count": "integer",
            "issued": "string"
          }
        ],
        "destinationResource": {
          "id": "string",
          "type": "string"
        }
      }
    ]
  }
]
```

***

## Create a Policy   (POST /api/policies)

Creates a policy

### Request-Body Parameters

**name (type: string; required)**

Policy name identifier

**description (type: string; optional)**

Policy friendly description

**enabled (type: boolean; required)**

Policy status

**source\_posture\_checks (type: string\[]; optional)**

Posture checks ID's applied to policy source groups

**rules (type: object\[]; required)**

**Policy rule object for policy UI editor**

**name (type: string; required)**

Policy rule name identifier

**description (type: string; optional)**

Policy rule friendly description

**enabled (type: boolean; required)**

Policy rule status

**action (type: string; required; values: accept, drop)**

Policy rule accept or drops packets

**bidirectional (type: boolean; required)**

Define if the rule is applicable in both directions, sources, and destinations.

**protocol (type: string; required; values: all, tcp, udp, icmp, netbird-ssh)**

Policy rule type of the traffic

**ports (type: string\[]; optional)**

Policy rule affected ports. Mutually exclusive with `port_ranges`. A rule accepts either individual ports or port ranges, not both.

**port\_ranges (type: object\[]; optional)**

**Policy rule affected ports ranges list. Mutually exclusive with `ports`. To mix individual ports with ranges in one rule, express each single port as a range with identical start and end values (for example, start 443, end 443).**

**start (type: integer; required)**

The starting port of the range

**end (type: integer; required)**

The ending port of the range

**authorized\_groups (type: object; optional)**

Map of user group ids to a list of local users

**id (type: string; optional)**

Policy rule ID

**sources (type: string\[]; optional)**

Policy rule source group IDs

**sourceResource (type: object; optional)**

**More Information**

**id (type: string; required)**

ID of the resource

**type (type: string; required; values: host, subnet, domain, peer)**

Network resource type based of the address

**destinations (type: string\[]; optional)**

Policy rule destination group IDs

**destinationResource (type: object; optional)**

**More Information**

**id (type: string; required)**

ID of the resource

**type (type: string; required; values: host, subnet, domain, peer)**

Network resource type based of the address

**POST /api/policies Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/policies \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "ch8i4ug6lnn4g9hqv7mg",
  "description": "This is a default policy that allows connections between all the resources",
  "enabled": true,
  "source_posture_checks": [
    "chacdk86lnnboviihd70"
  ],
  "rules": [
    {
      "name": "Default",
      "description": "This is a default rule that allows connections between all the resources",
      "enabled": true,
      "action": "accept",
      "bidirectional": true,
      "protocol": "tcp",
      "port_ranges": [
        {
          "start": 80,
          "end": 320
        }
      ],
      "authorized_groups": {
        "description": "Map of user group ids to a list of local users",
        "type": "object",
        "additionalProperties": [
          "group1"
        ]
      },
      "id": "ch8i4ug6lnn4g9hqv7mg",
      "sources": [
        "ch8i4ug6lnn4g9hqv797"
      ],
      "sourceResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      },
      "destinations": [
        "ch8i4ug6lnn4g9h7v7m0"
      ],
      "destinationResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      }
    }
  ]
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "ch8i4ug6lnn4g9hqv7mg",
  "description": "This is a default policy that allows connections between all the resources",
  "enabled": true,
  "source_posture_checks": [
    "chacdk86lnnboviihd70"
  ],
  "rules": [
    {
      "name": "Default",
      "description": "This is a default rule that allows connections between all the resources",
      "enabled": true,
      "action": "accept",
      "bidirectional": true,
      "protocol": "tcp",
      "port_ranges": [
        {
          "start": 80,
          "end": 320
        }
      ],
      "authorized_groups": {
        "description": "Map of user group ids to a list of local users",
        "type": "object",
        "additionalProperties": [
          "group1"
        ]
      },
      "id": "ch8i4ug6lnn4g9hqv7mg",
      "sources": [
        "ch8i4ug6lnn4g9hqv797"
      ],
      "sourceResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      },
      "destinations": [
        "ch8i4ug6lnn4g9h7v7m0"
      ],
      "destinationResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      }
    }
  ]
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/policies',
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

url = "https://api.netbird.io/api/policies"
payload = json.dumps({
  "name": "ch8i4ug6lnn4g9hqv7mg",
  "description": "This is a default policy that allows connections between all the resources",
  "enabled": true,
  "source_posture_checks": [
    "chacdk86lnnboviihd70"
  ],
  "rules": [
    {
      "name": "Default",
      "description": "This is a default rule that allows connections between all the resources",
      "enabled": true,
      "action": "accept",
      "bidirectional": true,
      "protocol": "tcp",
      "port_ranges": [
        {
          "start": 80,
          "end": 320
        }
      ],
      "authorized_groups": {
        "description": "Map of user group ids to a list of local users",
        "type": "object",
        "additionalProperties": [
          "group1"
        ]
      },
      "id": "ch8i4ug6lnn4g9hqv7mg",
      "sources": [
        "ch8i4ug6lnn4g9hqv797"
      ],
      "sourceResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      },
      "destinations": [
        "ch8i4ug6lnn4g9h7v7m0"
      ],
      "destinationResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      }
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

  url := "https://api.netbird.io/api/policies"
  method := "POST"
  
  payload := strings.NewReader(`{
  "name": "ch8i4ug6lnn4g9hqv7mg",
  "description": "This is a default policy that allows connections between all the resources",
  "enabled": true,
  "source_posture_checks": [
    "chacdk86lnnboviihd70"
  ],
  "rules": [
    {
      "name": "Default",
      "description": "This is a default rule that allows connections between all the resources",
      "enabled": true,
      "action": "accept",
      "bidirectional": true,
      "protocol": "tcp",
      "port_ranges": [
        {
          "start": 80,
          "end": 320
        }
      ],
      "authorized_groups": {
        "description": "Map of user group ids to a list of local users",
        "type": "object",
        "additionalProperties": [
          "group1"
        ]
      },
      "id": "ch8i4ug6lnn4g9hqv7mg",
      "sources": [
        "ch8i4ug6lnn4g9hqv797"
      ],
      "sourceResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      },
      "destinations": [
        "ch8i4ug6lnn4g9h7v7m0"
      ],
      "destinationResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      }
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

url = URI("https://api.netbird.io/api/policies")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "ch8i4ug6lnn4g9hqv7mg",
  "description": "This is a default policy that allows connections between all the resources",
  "enabled": true,
  "source_posture_checks": [
    "chacdk86lnnboviihd70"
  ],
  "rules": [
    {
      "name": "Default",
      "description": "This is a default rule that allows connections between all the resources",
      "enabled": true,
      "action": "accept",
      "bidirectional": true,
      "protocol": "tcp",
      "port_ranges": [
        {
          "start": 80,
          "end": 320
        }
      ],
      "authorized_groups": {
        "description": "Map of user group ids to a list of local users",
        "type": "object",
        "additionalProperties": [
          "group1"
        ]
      },
      "id": "ch8i4ug6lnn4g9hqv7mg",
      "sources": [
        "ch8i4ug6lnn4g9hqv797"
      ],
      "sourceResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      },
      "destinations": [
        "ch8i4ug6lnn4g9h7v7m0"
      ],
      "destinationResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      }
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
  "name": "ch8i4ug6lnn4g9hqv7mg",
  "description": "This is a default policy that allows connections between all the resources",
  "enabled": true,
  "source_posture_checks": [
    "chacdk86lnnboviihd70"
  ],
  "rules": [
    {
      "name": "Default",
      "description": "This is a default rule that allows connections between all the resources",
      "enabled": true,
      "action": "accept",
      "bidirectional": true,
      "protocol": "tcp",
      "port_ranges": [
        {
          "start": 80,
          "end": 320
        }
      ],
      "authorized_groups": {
        "description": "Map of user group ids to a list of local users",
        "type": "object",
        "additionalProperties": [
          "group1"
        ]
      },
      "id": "ch8i4ug6lnn4g9hqv7mg",
      "sources": [
        "ch8i4ug6lnn4g9hqv797"
      ],
      "sourceResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      },
      "destinations": [
        "ch8i4ug6lnn4g9h7v7m0"
      ],
      "destinationResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      }
    }
  ]
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/policies")
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
  CURLOPT_URL => 'https://api.netbird.io/api/policies',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "name": "ch8i4ug6lnn4g9hqv7mg",
  "description": "This is a default policy that allows connections between all the resources",
  "enabled": true,
  "source_posture_checks": [
    "chacdk86lnnboviihd70"
  ],
  "rules": [
    {
      "name": "Default",
      "description": "This is a default rule that allows connections between all the resources",
      "enabled": true,
      "action": "accept",
      "bidirectional": true,
      "protocol": "tcp",
      "port_ranges": [
        {
          "start": 80,
          "end": 320
        }
      ],
      "authorized_groups": {
        "description": "Map of user group ids to a list of local users",
        "type": "object",
        "additionalProperties": [
          "group1"
        ]
      },
      "id": "ch8i4ug6lnn4g9hqv7mg",
      "sources": [
        "ch8i4ug6lnn4g9hqv797"
      ],
      "sourceResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      },
      "destinations": [
        "ch8i4ug6lnn4g9h7v7m0"
      ],
      "destinationResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      }
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
  "name": "ch8i4ug6lnn4g9hqv7mg",
  "description": "This is a default policy that allows connections between all the resources",
  "enabled": true,
  "id": "ch8i4ug6lnn4g9hqv7mg",
  "source_posture_checks": [
    "chacdk86lnnboviihd70"
  ],
  "rules": [
    {
      "name": "Default",
      "description": "This is a default rule that allows connections between all the resources",
      "enabled": true,
      "action": "accept",
      "bidirectional": true,
      "protocol": "tcp",
      "port_ranges": [
        {
          "start": 80,
          "end": 320
        }
      ],
      "authorized_groups": {
        "description": "Map of user group ids to a list of local users",
        "type": "object",
        "additionalProperties": [
          "group1"
        ]
      },
      "id": "ch8i4ug6lnn4g9hqv7mg",
      "sources": [
        {
          "id": "ch8i4ug6lnn4g9hqv7m0",
          "name": "devs",
          "peers_count": 2,
          "resources_count": 5,
          "issued": "api"
        }
      ],
      "sourceResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      },
      "destinations": [
        {
          "id": "ch8i4ug6lnn4g9hqv7m0",
          "name": "devs",
          "peers_count": 2,
          "resources_count": 5,
          "issued": "api"
        }
      ],
      "destinationResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      }
    }
  ]
}
```

**Schema**

```json
{
  "name": "string",
  "description": "string",
  "enabled": "boolean",
  "id": "string",
  "source_posture_checks": [
    "string"
  ],
  "rules": [
    {
      "name": "string",
      "description": "string",
      "enabled": "boolean",
      "action": "string",
      "bidirectional": "boolean",
      "protocol": "string",
      "ports": [
        "string"
      ],
      "port_ranges": [
        {
          "start": "integer",
          "end": "integer"
        }
      ],
      "authorized_groups": {
        "description": "Map of user group ids to a list of local users",
        "type": "object",
        "additionalProperties": [
          "string"
        ]
      },
      "id": "string",
      "sources": [
        {
          "id": "string",
          "name": "string",
          "peers_count": "integer",
          "resources_count": "integer",
          "issued": "string"
        }
      ],
      "sourceResource": {
        "id": "string",
        "type": "string"
      },
      "destinations": [
        {
          "id": "string",
          "name": "string",
          "peers_count": "integer",
          "resources_count": "integer",
          "issued": "string"
        }
      ],
      "destinationResource": {
        "id": "string",
        "type": "string"
      }
    }
  ]
}
```

***

## Retrieve a Policy   (GET /api/policies/{policyId})

Get information about a Policies

### Path Parameters

**policyId (type: string; required)**

The unique identifier of a policy

**GET /api/policies/{policyId} Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/policies/{policyId} \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/policies/{policyId}',
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

url = "https://api.netbird.io/api/policies/{policyId}"

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

  url := "https://api.netbird.io/api/policies/{policyId}"
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

url = URI("https://api.netbird.io/api/policies/{policyId}")

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
  .url("https://api.netbird.io/api/policies/{policyId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/policies/{policyId}',
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
  "name": "ch8i4ug6lnn4g9hqv7mg",
  "description": "This is a default policy that allows connections between all the resources",
  "enabled": true,
  "id": "ch8i4ug6lnn4g9hqv7mg",
  "source_posture_checks": [
    "chacdk86lnnboviihd70"
  ],
  "rules": [
    {
      "name": "Default",
      "description": "This is a default rule that allows connections between all the resources",
      "enabled": true,
      "action": "accept",
      "bidirectional": true,
      "protocol": "tcp",
      "port_ranges": [
        {
          "start": 80,
          "end": 320
        }
      ],
      "authorized_groups": {
        "description": "Map of user group ids to a list of local users",
        "type": "object",
        "additionalProperties": [
          "group1"
        ]
      },
      "id": "ch8i4ug6lnn4g9hqv7mg",
      "sources": [
        {
          "id": "ch8i4ug6lnn4g9hqv7m0",
          "name": "devs",
          "peers_count": 2,
          "resources_count": 5,
          "issued": "api"
        }
      ],
      "sourceResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      },
      "destinations": [
        {
          "id": "ch8i4ug6lnn4g9hqv7m0",
          "name": "devs",
          "peers_count": 2,
          "resources_count": 5,
          "issued": "api"
        }
      ],
      "destinationResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      }
    }
  ]
}
```

**Schema**

```json
{
  "name": "string",
  "description": "string",
  "enabled": "boolean",
  "id": "string",
  "source_posture_checks": [
    "string"
  ],
  "rules": [
    {
      "name": "string",
      "description": "string",
      "enabled": "boolean",
      "action": "string",
      "bidirectional": "boolean",
      "protocol": "string",
      "ports": [
        "string"
      ],
      "port_ranges": [
        {
          "start": "integer",
          "end": "integer"
        }
      ],
      "authorized_groups": {
        "description": "Map of user group ids to a list of local users",
        "type": "object",
        "additionalProperties": [
          "string"
        ]
      },
      "id": "string",
      "sources": [
        {
          "id": "string",
          "name": "string",
          "peers_count": "integer",
          "resources_count": "integer",
          "issued": "string"
        }
      ],
      "sourceResource": {
        "id": "string",
        "type": "string"
      },
      "destinations": [
        {
          "id": "string",
          "name": "string",
          "peers_count": "integer",
          "resources_count": "integer",
          "issued": "string"
        }
      ],
      "destinationResource": {
        "id": "string",
        "type": "string"
      }
    }
  ]
}
```

***

## Update a Policy   (PUT /api/policies/{policyId})

Update/Replace a Policy

### Path Parameters

**policyId (type: string; required)**

The unique identifier of a policy

### Request-Body Parameters

**name (type: string; required)**

Policy name identifier

**description (type: string; optional)**

Policy friendly description

**enabled (type: boolean; required)**

Policy status

**source\_posture\_checks (type: string\[]; optional)**

Posture checks ID's applied to policy source groups

**rules (type: object\[]; required)**

**Policy rule object for policy UI editor**

**name (type: string; required)**

Policy rule name identifier

**description (type: string; optional)**

Policy rule friendly description

**enabled (type: boolean; required)**

Policy rule status

**action (type: string; required; values: accept, drop)**

Policy rule accept or drops packets

**bidirectional (type: boolean; required)**

Define if the rule is applicable in both directions, sources, and destinations.

**protocol (type: string; required; values: all, tcp, udp, icmp, netbird-ssh)**

Policy rule type of the traffic

**ports (type: string\[]; optional)**

Policy rule affected ports. Mutually exclusive with `port_ranges`. A rule accepts either individual ports or port ranges, not both.

**port\_ranges (type: object\[]; optional)**

**Policy rule affected ports ranges list. Mutually exclusive with `ports`. To mix individual ports with ranges in one rule, express each single port as a range with identical start and end values (for example, start 443, end 443).**

**start (type: integer; required)**

The starting port of the range

**end (type: integer; required)**

The ending port of the range

**authorized\_groups (type: object; optional)**

Map of user group ids to a list of local users

**id (type: string; optional)**

Policy rule ID

**sources (type: string\[]; optional)**

Policy rule source group IDs

**sourceResource (type: object; optional)**

**More Information**

**id (type: string; required)**

ID of the resource

**type (type: string; required; values: host, subnet, domain, peer)**

Network resource type based of the address

**destinations (type: string\[]; optional)**

Policy rule destination group IDs

**destinationResource (type: object; optional)**

**More Information**

**id (type: string; required)**

ID of the resource

**type (type: string; required; values: host, subnet, domain, peer)**

Network resource type based of the address

**PUT /api/policies/{policyId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/policies/{policyId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "name": "ch8i4ug6lnn4g9hqv7mg",
  "description": "This is a default policy that allows connections between all the resources",
  "enabled": true,
  "source_posture_checks": [
    "chacdk86lnnboviihd70"
  ],
  "rules": [
    {
      "name": "Default",
      "description": "This is a default rule that allows connections between all the resources",
      "enabled": true,
      "action": "accept",
      "bidirectional": true,
      "protocol": "tcp",
      "port_ranges": [
        {
          "start": 80,
          "end": 320
        }
      ],
      "authorized_groups": {
        "description": "Map of user group ids to a list of local users",
        "type": "object",
        "additionalProperties": [
          "group1"
        ]
      },
      "id": "ch8i4ug6lnn4g9hqv7mg",
      "sources": [
        "ch8i4ug6lnn4g9hqv797"
      ],
      "sourceResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      },
      "destinations": [
        "ch8i4ug6lnn4g9h7v7m0"
      ],
      "destinationResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      }
    }
  ]
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "name": "ch8i4ug6lnn4g9hqv7mg",
  "description": "This is a default policy that allows connections between all the resources",
  "enabled": true,
  "source_posture_checks": [
    "chacdk86lnnboviihd70"
  ],
  "rules": [
    {
      "name": "Default",
      "description": "This is a default rule that allows connections between all the resources",
      "enabled": true,
      "action": "accept",
      "bidirectional": true,
      "protocol": "tcp",
      "port_ranges": [
        {
          "start": 80,
          "end": 320
        }
      ],
      "authorized_groups": {
        "description": "Map of user group ids to a list of local users",
        "type": "object",
        "additionalProperties": [
          "group1"
        ]
      },
      "id": "ch8i4ug6lnn4g9hqv7mg",
      "sources": [
        "ch8i4ug6lnn4g9hqv797"
      ],
      "sourceResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      },
      "destinations": [
        "ch8i4ug6lnn4g9h7v7m0"
      ],
      "destinationResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      }
    }
  ]
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/policies/{policyId}',
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

url = "https://api.netbird.io/api/policies/{policyId}"
payload = json.dumps({
  "name": "ch8i4ug6lnn4g9hqv7mg",
  "description": "This is a default policy that allows connections between all the resources",
  "enabled": true,
  "source_posture_checks": [
    "chacdk86lnnboviihd70"
  ],
  "rules": [
    {
      "name": "Default",
      "description": "This is a default rule that allows connections between all the resources",
      "enabled": true,
      "action": "accept",
      "bidirectional": true,
      "protocol": "tcp",
      "port_ranges": [
        {
          "start": 80,
          "end": 320
        }
      ],
      "authorized_groups": {
        "description": "Map of user group ids to a list of local users",
        "type": "object",
        "additionalProperties": [
          "group1"
        ]
      },
      "id": "ch8i4ug6lnn4g9hqv7mg",
      "sources": [
        "ch8i4ug6lnn4g9hqv797"
      ],
      "sourceResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      },
      "destinations": [
        "ch8i4ug6lnn4g9h7v7m0"
      ],
      "destinationResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      }
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

  url := "https://api.netbird.io/api/policies/{policyId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "name": "ch8i4ug6lnn4g9hqv7mg",
  "description": "This is a default policy that allows connections between all the resources",
  "enabled": true,
  "source_posture_checks": [
    "chacdk86lnnboviihd70"
  ],
  "rules": [
    {
      "name": "Default",
      "description": "This is a default rule that allows connections between all the resources",
      "enabled": true,
      "action": "accept",
      "bidirectional": true,
      "protocol": "tcp",
      "port_ranges": [
        {
          "start": 80,
          "end": 320
        }
      ],
      "authorized_groups": {
        "description": "Map of user group ids to a list of local users",
        "type": "object",
        "additionalProperties": [
          "group1"
        ]
      },
      "id": "ch8i4ug6lnn4g9hqv7mg",
      "sources": [
        "ch8i4ug6lnn4g9hqv797"
      ],
      "sourceResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      },
      "destinations": [
        "ch8i4ug6lnn4g9h7v7m0"
      ],
      "destinationResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      }
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

url = URI("https://api.netbird.io/api/policies/{policyId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "name": "ch8i4ug6lnn4g9hqv7mg",
  "description": "This is a default policy that allows connections between all the resources",
  "enabled": true,
  "source_posture_checks": [
    "chacdk86lnnboviihd70"
  ],
  "rules": [
    {
      "name": "Default",
      "description": "This is a default rule that allows connections between all the resources",
      "enabled": true,
      "action": "accept",
      "bidirectional": true,
      "protocol": "tcp",
      "port_ranges": [
        {
          "start": 80,
          "end": 320
        }
      ],
      "authorized_groups": {
        "description": "Map of user group ids to a list of local users",
        "type": "object",
        "additionalProperties": [
          "group1"
        ]
      },
      "id": "ch8i4ug6lnn4g9hqv7mg",
      "sources": [
        "ch8i4ug6lnn4g9hqv797"
      ],
      "sourceResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      },
      "destinations": [
        "ch8i4ug6lnn4g9h7v7m0"
      ],
      "destinationResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      }
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
  "name": "ch8i4ug6lnn4g9hqv7mg",
  "description": "This is a default policy that allows connections between all the resources",
  "enabled": true,
  "source_posture_checks": [
    "chacdk86lnnboviihd70"
  ],
  "rules": [
    {
      "name": "Default",
      "description": "This is a default rule that allows connections between all the resources",
      "enabled": true,
      "action": "accept",
      "bidirectional": true,
      "protocol": "tcp",
      "port_ranges": [
        {
          "start": 80,
          "end": 320
        }
      ],
      "authorized_groups": {
        "description": "Map of user group ids to a list of local users",
        "type": "object",
        "additionalProperties": [
          "group1"
        ]
      },
      "id": "ch8i4ug6lnn4g9hqv7mg",
      "sources": [
        "ch8i4ug6lnn4g9hqv797"
      ],
      "sourceResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      },
      "destinations": [
        "ch8i4ug6lnn4g9h7v7m0"
      ],
      "destinationResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      }
    }
  ]
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/policies/{policyId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/policies/{policyId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "name": "ch8i4ug6lnn4g9hqv7mg",
  "description": "This is a default policy that allows connections between all the resources",
  "enabled": true,
  "source_posture_checks": [
    "chacdk86lnnboviihd70"
  ],
  "rules": [
    {
      "name": "Default",
      "description": "This is a default rule that allows connections between all the resources",
      "enabled": true,
      "action": "accept",
      "bidirectional": true,
      "protocol": "tcp",
      "port_ranges": [
        {
          "start": 80,
          "end": 320
        }
      ],
      "authorized_groups": {
        "description": "Map of user group ids to a list of local users",
        "type": "object",
        "additionalProperties": [
          "group1"
        ]
      },
      "id": "ch8i4ug6lnn4g9hqv7mg",
      "sources": [
        "ch8i4ug6lnn4g9hqv797"
      ],
      "sourceResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      },
      "destinations": [
        "ch8i4ug6lnn4g9h7v7m0"
      ],
      "destinationResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      }
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
  "name": "ch8i4ug6lnn4g9hqv7mg",
  "description": "This is a default policy that allows connections between all the resources",
  "enabled": true,
  "id": "ch8i4ug6lnn4g9hqv7mg",
  "source_posture_checks": [
    "chacdk86lnnboviihd70"
  ],
  "rules": [
    {
      "name": "Default",
      "description": "This is a default rule that allows connections between all the resources",
      "enabled": true,
      "action": "accept",
      "bidirectional": true,
      "protocol": "tcp",
      "port_ranges": [
        {
          "start": 80,
          "end": 320
        }
      ],
      "authorized_groups": {
        "description": "Map of user group ids to a list of local users",
        "type": "object",
        "additionalProperties": [
          "group1"
        ]
      },
      "id": "ch8i4ug6lnn4g9hqv7mg",
      "sources": [
        {
          "id": "ch8i4ug6lnn4g9hqv7m0",
          "name": "devs",
          "peers_count": 2,
          "resources_count": 5,
          "issued": "api"
        }
      ],
      "sourceResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      },
      "destinations": [
        {
          "id": "ch8i4ug6lnn4g9hqv7m0",
          "name": "devs",
          "peers_count": 2,
          "resources_count": 5,
          "issued": "api"
        }
      ],
      "destinationResource": {
        "id": "chacdk86lnnboviihd7g",
        "type": "host"
      }
    }
  ]
}
```

**Schema**

```json
{
  "name": "string",
  "description": "string",
  "enabled": "boolean",
  "id": "string",
  "source_posture_checks": [
    "string"
  ],
  "rules": [
    {
      "name": "string",
      "description": "string",
      "enabled": "boolean",
      "action": "string",
      "bidirectional": "boolean",
      "protocol": "string",
      "ports": [
        "string"
      ],
      "port_ranges": [
        {
          "start": "integer",
          "end": "integer"
        }
      ],
      "authorized_groups": {
        "description": "Map of user group ids to a list of local users",
        "type": "object",
        "additionalProperties": [
          "string"
        ]
      },
      "id": "string",
      "sources": [
        {
          "id": "string",
          "name": "string",
          "peers_count": "integer",
          "resources_count": "integer",
          "issued": "string"
        }
      ],
      "sourceResource": {
        "id": "string",
        "type": "string"
      },
      "destinations": [
        {
          "id": "string",
          "name": "string",
          "peers_count": "integer",
          "resources_count": "integer",
          "issued": "string"
        }
      ],
      "destinationResource": {
        "id": "string",
        "type": "string"
      }
    }
  ]
}
```

***

## Delete a Policy   (DELETE /api/policies/{policyId})

Delete a policy

### Path Parameters

**policyId (type: string; required)**

The unique identifier of a policy

**DELETE /api/policies/{policyId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/policies/{policyId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/policies/{policyId}',
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

url = "https://api.netbird.io/api/policies/{policyId}"

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

  url := "https://api.netbird.io/api/policies/{policyId}"
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

url = URI("https://api.netbird.io/api/policies/{policyId}")

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
  .url("https://api.netbird.io/api/policies/{policyId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/policies/{policyId}',
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
