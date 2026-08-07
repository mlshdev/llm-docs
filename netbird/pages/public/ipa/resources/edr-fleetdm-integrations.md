> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/ipa/resources/edr-fleetdm-integrations.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/ipa/resources/edr-fleetdm-integrations.mdx)

## Create EDR FleetDM Integration   (POST /api/integrations/edr/fleetdm)

Creates a new EDR FleetDM integration

### Request-Body Parameters

**api\_url (type: string; required)**

FleetDM server URL

**api\_token (type: string; required)**

FleetDM API token

**groups (type: string\[]; required)**

The Groups this integrations applies to

**last\_synced\_interval (type: integer; required; min: 24)**

The devices last sync requirement interval in hours. Minimum value is 24 hours

**enabled (type: boolean; optional)**

Indicates whether the integration is enabled

**match\_attributes (type: object; required)**

**Attribute conditions to match when approving FleetDM hosts. Most attributes work with FleetDM's free/open-source version. Premium-only attributes are marked accordingly**

**disk\_encryption\_enabled (type: boolean; optional)**

Whether disk encryption (FileVault/BitLocker) must be enabled on the host

**failing\_policies\_count\_max (type: integer; optional; min: 0)**

Maximum number of allowed failing policies. Use 0 to require all policies to pass

**vulnerable\_software\_count\_max (type: integer; optional; min: 0)**

Maximum number of allowed vulnerable software on the host

**status\_online (type: boolean; optional)**

Whether the host must be online (recently seen by Fleet)

**required\_policies (type: integer\[]; optional)**

List of FleetDM policy IDs that must be passing on the host. If any of these policies is failing, the host is non-compliant

**POST /api/integrations/edr/fleetdm Request**

**cURL**

```bash
curl -X POST https://api.netbird.io/api/integrations/edr/fleetdm \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "api_url": {
    "type": "string",
    "description": "FleetDM server URL"
  },
  "api_token": {
    "type": "string",
    "description": "FleetDM API token"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  },
  "match_attributes": {
    "disk_encryption_enabled": {
      "type": "boolean",
      "description": "Whether disk encryption (FileVault/BitLocker) must be enabled on the host"
    },
    "failing_policies_count_max": 0,
    "vulnerable_software_count_max": 0,
    "status_online": {
      "type": "boolean",
      "description": "Whether the host must be online (recently seen by Fleet)"
    },
    "required_policies": [
      1,
      5,
      12
    ]
  }
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "api_url": {
    "type": "string",
    "description": "FleetDM server URL"
  },
  "api_token": {
    "type": "string",
    "description": "FleetDM API token"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  },
  "match_attributes": {
    "disk_encryption_enabled": {
      "type": "boolean",
      "description": "Whether disk encryption (FileVault/BitLocker) must be enabled on the host"
    },
    "failing_policies_count_max": 0,
    "vulnerable_software_count_max": 0,
    "status_online": {
      "type": "boolean",
      "description": "Whether the host must be online (recently seen by Fleet)"
    },
    "required_policies": [
      1,
      5,
      12
    ]
  }
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/api/integrations/edr/fleetdm',
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

url = "https://api.netbird.io/api/integrations/edr/fleetdm"
payload = json.dumps({
  "api_url": {
    "type": "string",
    "description": "FleetDM server URL"
  },
  "api_token": {
    "type": "string",
    "description": "FleetDM API token"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  },
  "match_attributes": {
    "disk_encryption_enabled": {
      "type": "boolean",
      "description": "Whether disk encryption (FileVault/BitLocker) must be enabled on the host"
    },
    "failing_policies_count_max": 0,
    "vulnerable_software_count_max": 0,
    "status_online": {
      "type": "boolean",
      "description": "Whether the host must be online (recently seen by Fleet)"
    },
    "required_policies": [
      1,
      5,
      12
    ]
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

  url := "https://api.netbird.io/api/integrations/edr/fleetdm"
  method := "POST"
  
  payload := strings.NewReader(`{
  "api_url": {
    "type": "string",
    "description": "FleetDM server URL"
  },
  "api_token": {
    "type": "string",
    "description": "FleetDM API token"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  },
  "match_attributes": {
    "disk_encryption_enabled": {
      "type": "boolean",
      "description": "Whether disk encryption (FileVault/BitLocker) must be enabled on the host"
    },
    "failing_policies_count_max": 0,
    "vulnerable_software_count_max": 0,
    "status_online": {
      "type": "boolean",
      "description": "Whether the host must be online (recently seen by Fleet)"
    },
    "required_policies": [
      1,
      5,
      12
    ]
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

url = URI("https://api.netbird.io/api/integrations/edr/fleetdm")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "api_url": {
    "type": "string",
    "description": "FleetDM server URL"
  },
  "api_token": {
    "type": "string",
    "description": "FleetDM API token"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  },
  "match_attributes": {
    "disk_encryption_enabled": {
      "type": "boolean",
      "description": "Whether disk encryption (FileVault/BitLocker) must be enabled on the host"
    },
    "failing_policies_count_max": 0,
    "vulnerable_software_count_max": 0,
    "status_online": {
      "type": "boolean",
      "description": "Whether the host must be online (recently seen by Fleet)"
    },
    "required_policies": [
      1,
      5,
      12
    ]
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
  "api_url": {
    "type": "string",
    "description": "FleetDM server URL"
  },
  "api_token": {
    "type": "string",
    "description": "FleetDM API token"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  },
  "match_attributes": {
    "disk_encryption_enabled": {
      "type": "boolean",
      "description": "Whether disk encryption (FileVault/BitLocker) must be enabled on the host"
    },
    "failing_policies_count_max": 0,
    "vulnerable_software_count_max": 0,
    "status_online": {
      "type": "boolean",
      "description": "Whether the host must be online (recently seen by Fleet)"
    },
    "required_policies": [
      1,
      5,
      12
    ]
  }
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/integrations/edr/fleetdm")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/edr/fleetdm',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',  
  CURLOPT_POSTFIELDS => '{
  "api_url": {
    "type": "string",
    "description": "FleetDM server URL"
  },
  "api_token": {
    "type": "string",
    "description": "FleetDM API token"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  },
  "match_attributes": {
    "disk_encryption_enabled": {
      "type": "boolean",
      "description": "Whether disk encryption (FileVault/BitLocker) must be enabled on the host"
    },
    "failing_policies_count_max": 0,
    "vulnerable_software_count_max": 0,
    "status_online": {
      "type": "boolean",
      "description": "Whether the host must be online (recently seen by Fleet)"
    },
    "required_policies": [
      1,
      5,
      12
    ]
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
  "api_url": {
    "type": "string",
    "description": "FleetDM server URL"
  },
  "last_synced_at": "2023-05-15T10:30:00Z",
  "created_by": {
    "type": "string",
    "description": "The user id that created the integration"
  },
  "created_at": "2023-05-15T10:30:00Z",
  "updated_at": "2023-05-16T11:45:00Z",
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
    "description": "Indicates whether the integration is enabled",
    "default": true
  },
  "match_attributes": {
    "disk_encryption_enabled": {
      "type": "boolean",
      "description": "Whether disk encryption (FileVault/BitLocker) must be enabled on the host"
    },
    "failing_policies_count_max": 0,
    "vulnerable_software_count_max": 0,
    "status_online": {
      "type": "boolean",
      "description": "Whether the host must be online (recently seen by Fleet)"
    },
    "required_policies": [
      1,
      5,
      12
    ]
  }
}
```

**Schema**

```json
{
  "id": "integer",
  "account_id": "string",
  "api_url": "string",
  "last_synced_at": "string",
  "created_by": "string",
  "created_at": "string",
  "updated_at": "string",
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
  "enabled": "boolean",
  "match_attributes": {
    "disk_encryption_enabled": "boolean",
    "failing_policies_count_max": "integer",
    "vulnerable_software_count_max": "integer",
    "status_online": "boolean",
    "required_policies": [
      "integer"
    ]
  }
}
```

***

## Get EDR FleetDM Integration   (GET /api/integrations/edr/fleetdm)

Retrieves a specific EDR FleetDM integration by its ID.

**GET /api/integrations/edr/fleetdm Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/integrations/edr/fleetdm \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/integrations/edr/fleetdm',
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

url = "https://api.netbird.io/api/integrations/edr/fleetdm"

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

  url := "https://api.netbird.io/api/integrations/edr/fleetdm"
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

url = URI("https://api.netbird.io/api/integrations/edr/fleetdm")

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
  .url("https://api.netbird.io/api/integrations/edr/fleetdm")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/edr/fleetdm',
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
  "api_url": {
    "type": "string",
    "description": "FleetDM server URL"
  },
  "last_synced_at": "2023-05-15T10:30:00Z",
  "created_by": {
    "type": "string",
    "description": "The user id that created the integration"
  },
  "created_at": "2023-05-15T10:30:00Z",
  "updated_at": "2023-05-16T11:45:00Z",
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
    "description": "Indicates whether the integration is enabled",
    "default": true
  },
  "match_attributes": {
    "disk_encryption_enabled": {
      "type": "boolean",
      "description": "Whether disk encryption (FileVault/BitLocker) must be enabled on the host"
    },
    "failing_policies_count_max": 0,
    "vulnerable_software_count_max": 0,
    "status_online": {
      "type": "boolean",
      "description": "Whether the host must be online (recently seen by Fleet)"
    },
    "required_policies": [
      1,
      5,
      12
    ]
  }
}
```

**Schema**

```json
{
  "id": "integer",
  "account_id": "string",
  "api_url": "string",
  "last_synced_at": "string",
  "created_by": "string",
  "created_at": "string",
  "updated_at": "string",
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
  "enabled": "boolean",
  "match_attributes": {
    "disk_encryption_enabled": "boolean",
    "failing_policies_count_max": "integer",
    "vulnerable_software_count_max": "integer",
    "status_online": "boolean",
    "required_policies": [
      "integer"
    ]
  }
}
```

***

## Update EDR FleetDM Integration   (PUT /api/integrations/edr/fleetdm)

Updates an existing EDR FleetDM Integration.

### Request-Body Parameters

**api\_url (type: string; required)**

FleetDM server URL

**api\_token (type: string; required)**

FleetDM API token

**groups (type: string\[]; required)**

The Groups this integrations applies to

**last\_synced\_interval (type: integer; required; min: 24)**

The devices last sync requirement interval in hours. Minimum value is 24 hours

**enabled (type: boolean; optional)**

Indicates whether the integration is enabled

**match\_attributes (type: object; required)**

**Attribute conditions to match when approving FleetDM hosts. Most attributes work with FleetDM's free/open-source version. Premium-only attributes are marked accordingly**

**disk\_encryption\_enabled (type: boolean; optional)**

Whether disk encryption (FileVault/BitLocker) must be enabled on the host

**failing\_policies\_count\_max (type: integer; optional; min: 0)**

Maximum number of allowed failing policies. Use 0 to require all policies to pass

**vulnerable\_software\_count\_max (type: integer; optional; min: 0)**

Maximum number of allowed vulnerable software on the host

**status\_online (type: boolean; optional)**

Whether the host must be online (recently seen by Fleet)

**required\_policies (type: integer\[]; optional)**

List of FleetDM policy IDs that must be passing on the host. If any of these policies is failing, the host is non-compliant

**PUT /api/integrations/edr/fleetdm Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/integrations/edr/fleetdm \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "api_url": {
    "type": "string",
    "description": "FleetDM server URL"
  },
  "api_token": {
    "type": "string",
    "description": "FleetDM API token"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  },
  "match_attributes": {
    "disk_encryption_enabled": {
      "type": "boolean",
      "description": "Whether disk encryption (FileVault/BitLocker) must be enabled on the host"
    },
    "failing_policies_count_max": 0,
    "vulnerable_software_count_max": 0,
    "status_online": {
      "type": "boolean",
      "description": "Whether the host must be online (recently seen by Fleet)"
    },
    "required_policies": [
      1,
      5,
      12
    ]
  }
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "api_url": {
    "type": "string",
    "description": "FleetDM server URL"
  },
  "api_token": {
    "type": "string",
    "description": "FleetDM API token"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  },
  "match_attributes": {
    "disk_encryption_enabled": {
      "type": "boolean",
      "description": "Whether disk encryption (FileVault/BitLocker) must be enabled on the host"
    },
    "failing_policies_count_max": 0,
    "vulnerable_software_count_max": 0,
    "status_online": {
      "type": "boolean",
      "description": "Whether the host must be online (recently seen by Fleet)"
    },
    "required_policies": [
      1,
      5,
      12
    ]
  }
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/integrations/edr/fleetdm',
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

url = "https://api.netbird.io/api/integrations/edr/fleetdm"
payload = json.dumps({
  "api_url": {
    "type": "string",
    "description": "FleetDM server URL"
  },
  "api_token": {
    "type": "string",
    "description": "FleetDM API token"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  },
  "match_attributes": {
    "disk_encryption_enabled": {
      "type": "boolean",
      "description": "Whether disk encryption (FileVault/BitLocker) must be enabled on the host"
    },
    "failing_policies_count_max": 0,
    "vulnerable_software_count_max": 0,
    "status_online": {
      "type": "boolean",
      "description": "Whether the host must be online (recently seen by Fleet)"
    },
    "required_policies": [
      1,
      5,
      12
    ]
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

  url := "https://api.netbird.io/api/integrations/edr/fleetdm"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "api_url": {
    "type": "string",
    "description": "FleetDM server URL"
  },
  "api_token": {
    "type": "string",
    "description": "FleetDM API token"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  },
  "match_attributes": {
    "disk_encryption_enabled": {
      "type": "boolean",
      "description": "Whether disk encryption (FileVault/BitLocker) must be enabled on the host"
    },
    "failing_policies_count_max": 0,
    "vulnerable_software_count_max": 0,
    "status_online": {
      "type": "boolean",
      "description": "Whether the host must be online (recently seen by Fleet)"
    },
    "required_policies": [
      1,
      5,
      12
    ]
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

url = URI("https://api.netbird.io/api/integrations/edr/fleetdm")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "api_url": {
    "type": "string",
    "description": "FleetDM server URL"
  },
  "api_token": {
    "type": "string",
    "description": "FleetDM API token"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  },
  "match_attributes": {
    "disk_encryption_enabled": {
      "type": "boolean",
      "description": "Whether disk encryption (FileVault/BitLocker) must be enabled on the host"
    },
    "failing_policies_count_max": 0,
    "vulnerable_software_count_max": 0,
    "status_online": {
      "type": "boolean",
      "description": "Whether the host must be online (recently seen by Fleet)"
    },
    "required_policies": [
      1,
      5,
      12
    ]
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
  "api_url": {
    "type": "string",
    "description": "FleetDM server URL"
  },
  "api_token": {
    "type": "string",
    "description": "FleetDM API token"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  },
  "match_attributes": {
    "disk_encryption_enabled": {
      "type": "boolean",
      "description": "Whether disk encryption (FileVault/BitLocker) must be enabled on the host"
    },
    "failing_policies_count_max": 0,
    "vulnerable_software_count_max": 0,
    "status_online": {
      "type": "boolean",
      "description": "Whether the host must be online (recently seen by Fleet)"
    },
    "required_policies": [
      1,
      5,
      12
    ]
  }
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/integrations/edr/fleetdm")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/edr/fleetdm',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "api_url": {
    "type": "string",
    "description": "FleetDM server URL"
  },
  "api_token": {
    "type": "string",
    "description": "FleetDM API token"
  },
  "groups": [
    {
      "type": "string"
    }
  ],
  "last_synced_interval": {
    "type": "integer",
    "description": "The devices last sync requirement interval in hours. Minimum value is 24 hours",
    "minimum": 24
  },
  "enabled": {
    "type": "boolean",
    "description": "Indicates whether the integration is enabled",
    "default": true
  },
  "match_attributes": {
    "disk_encryption_enabled": {
      "type": "boolean",
      "description": "Whether disk encryption (FileVault/BitLocker) must be enabled on the host"
    },
    "failing_policies_count_max": 0,
    "vulnerable_software_count_max": 0,
    "status_online": {
      "type": "boolean",
      "description": "Whether the host must be online (recently seen by Fleet)"
    },
    "required_policies": [
      1,
      5,
      12
    ]
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
  "api_url": {
    "type": "string",
    "description": "FleetDM server URL"
  },
  "last_synced_at": "2023-05-15T10:30:00Z",
  "created_by": {
    "type": "string",
    "description": "The user id that created the integration"
  },
  "created_at": "2023-05-15T10:30:00Z",
  "updated_at": "2023-05-16T11:45:00Z",
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
    "description": "Indicates whether the integration is enabled",
    "default": true
  },
  "match_attributes": {
    "disk_encryption_enabled": {
      "type": "boolean",
      "description": "Whether disk encryption (FileVault/BitLocker) must be enabled on the host"
    },
    "failing_policies_count_max": 0,
    "vulnerable_software_count_max": 0,
    "status_online": {
      "type": "boolean",
      "description": "Whether the host must be online (recently seen by Fleet)"
    },
    "required_policies": [
      1,
      5,
      12
    ]
  }
}
```

**Schema**

```json
{
  "id": "integer",
  "account_id": "string",
  "api_url": "string",
  "last_synced_at": "string",
  "created_by": "string",
  "created_at": "string",
  "updated_at": "string",
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
  "enabled": "boolean",
  "match_attributes": {
    "disk_encryption_enabled": "boolean",
    "failing_policies_count_max": "integer",
    "vulnerable_software_count_max": "integer",
    "status_online": "boolean",
    "required_policies": [
      "integer"
    ]
  }
}
```

***

## Delete EDR FleetDM Integration   (DELETE /api/integrations/edr/fleetdm)

Deletes an EDR FleetDM Integration by its ID.

**DELETE /api/integrations/edr/fleetdm Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/integrations/edr/fleetdm \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/integrations/edr/fleetdm',
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

url = "https://api.netbird.io/api/integrations/edr/fleetdm"

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

  url := "https://api.netbird.io/api/integrations/edr/fleetdm"
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

url = URI("https://api.netbird.io/api/integrations/edr/fleetdm")

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
  .url("https://api.netbird.io/api/integrations/edr/fleetdm")
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
  CURLOPT_URL => 'https://api.netbird.io/api/integrations/edr/fleetdm',
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
