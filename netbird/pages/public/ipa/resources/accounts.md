> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/ipa/resources/accounts.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/ipa/resources/accounts.mdx)

## List all Accounts   (GET /api/accounts)

Returns a list of accounts of a user. Always returns a list of one account.

**GET /api/accounts Request**

**cURL**

```bash
curl -X GET https://api.netbird.io/api/accounts \
-H 'Accept: application/json' \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '/api/accounts',
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

url = "https://api.netbird.io/api/accounts"

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

  url := "https://api.netbird.io/api/accounts"
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

url = URI("https://api.netbird.io/api/accounts")

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
  .url("https://api.netbird.io/api/accounts")
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
  CURLOPT_URL => 'https://api.netbird.io/api/accounts',
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
    "id": "ch8i4ug6lnn4g9hqv7l0",
    "settings": {
      "peer_login_expiration_enabled": true,
      "peer_login_expiration": 43200,
      "peer_inactivity_expiration_enabled": true,
      "peer_inactivity_expiration": 43200,
      "regular_users_view_blocked": true,
      "groups_propagation_enabled": true,
      "jwt_groups_enabled": true,
      "jwt_groups_claim_name": "roles",
      "jwt_allow_groups": [
        "Administrators"
      ],
      "routing_peer_dns_resolution_enabled": true,
      "dns_domain": "my-organization.org",
      "network_range": {
        "description": "Allows to define a custom network range for the account in CIDR format",
        "type": "string",
        "format": "cidr"
      },
      "network_range_v6": "fd00:1234:5678::/64",
      "peer_expose_enabled": false,
      "peer_expose_groups": [
        "ch8i4ug6lnn4g9hqv7m0"
      ],
      "extra": {
        "peer_approval_enabled": true,
        "user_approval_required": false,
        "network_traffic_logs_enabled": true,
        "network_traffic_logs_groups": [
          "ch8i4ug6lnn4g9hqv7m0"
        ],
        "network_traffic_packet_counter_enabled": true
      },
      "lazy_connection_enabled": true,
      "auto_update_version": "0.51.2",
      "auto_update_always": false,
      "metrics_push_enabled": false,
      "agent_network_only": false,
      "dashboard_features": {
        "agent_network": true
      },
      "embedded_idp_enabled": false,
      "local_auth_disabled": false,
      "local_mfa_enabled": false,
      "ipv6_enabled_groups": [
        "ch8i4ug6lnn4g9hqv7m0"
      ]
    },
    "domain": "netbird.io",
    "domain_category": "private",
    "created_at": "2023-05-05T09:00:35.477782Z",
    "created_by": "google-oauth2|277474792786460067937",
    "onboarding": {
      "signup_form_pending": true,
      "onboarding_flow_pending": false
    }
  }
]
```

**Schema**

```json
[
  {
    "id": "string",
    "settings": {
      "peer_login_expiration_enabled": "boolean",
      "peer_login_expiration": "integer",
      "peer_inactivity_expiration_enabled": "boolean",
      "peer_inactivity_expiration": "integer",
      "regular_users_view_blocked": "boolean",
      "groups_propagation_enabled": "boolean",
      "jwt_groups_enabled": "boolean",
      "jwt_groups_claim_name": "string",
      "jwt_allow_groups": [
        "string"
      ],
      "routing_peer_dns_resolution_enabled": "boolean",
      "dns_domain": "string",
      "network_range": "string",
      "network_range_v6": "string",
      "peer_expose_enabled": "boolean",
      "peer_expose_groups": [
        "string"
      ],
      "extra": {
        "peer_approval_enabled": "boolean",
        "user_approval_required": "boolean",
        "network_traffic_logs_enabled": "boolean",
        "network_traffic_logs_groups": [
          "string"
        ],
        "network_traffic_packet_counter_enabled": "boolean"
      },
      "lazy_connection_enabled": "boolean",
      "auto_update_version": "string",
      "auto_update_always": "boolean",
      "metrics_push_enabled": "boolean",
      "agent_network_only": "boolean",
      "dashboard_features": {
        "agent_network": "boolean"
      },
      "embedded_idp_enabled": "boolean",
      "local_auth_disabled": "boolean",
      "local_mfa_enabled": "boolean",
      "ipv6_enabled_groups": [
        "string"
      ]
    },
    "domain": "string",
    "domain_category": "string",
    "created_at": "string",
    "created_by": "string",
    "onboarding": {
      "signup_form_pending": "boolean",
      "onboarding_flow_pending": "boolean"
    }
  }
]
```

***

## Delete an Account   (DELETE /api/accounts/{accountId})

Deletes an account and all its resources. Only account owners can delete accounts.

### Path Parameters

**accountId (type: string; required)**

The unique identifier of an account

**DELETE /api/accounts/{accountId} Request**

**cURL**

```bash
curl -X DELETE https://api.netbird.io/api/accounts/{accountId} \
-H 'Authorization: Token <TOKEN>' 
```

```js
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: '/api/accounts/{accountId}',
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

url = "https://api.netbird.io/api/accounts/{accountId}"

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

  url := "https://api.netbird.io/api/accounts/{accountId}"
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

url = URI("https://api.netbird.io/api/accounts/{accountId}")

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
  .url("https://api.netbird.io/api/accounts/{accountId}")
  .method("DELETE")    
  .addHeader("Authorization: Token <TOKEN>")
  .build();
Response response = client.newCall(request).execute();
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.netbird.io/api/accounts/{accountId}',
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

## Update an Account   (PUT /api/accounts/{accountId})

Update information about an account

### Path Parameters

**accountId (type: string; required)**

The unique identifier of an account

### Request-Body Parameters

**settings (type: object; required)**

**More Information**

**peer\_login\_expiration\_enabled (type: boolean; required)**

Enables or disables peer login expiration globally. After peer's login has expired the user has to log in (authenticate). Applies only to peers that were added by a user (interactive SSO login).

**peer\_login\_expiration (type: integer; required)**

Period of time after which peer login expires (seconds).

**peer\_inactivity\_expiration\_enabled (type: boolean; required)**

Enables or disables peer inactivity expiration globally. After peer's session has expired the user has to log in (authenticate). Applies only to peers that were added by a user (interactive SSO login).

**peer\_inactivity\_expiration (type: integer; required)**

Period of time of inactivity after which peer session expires (seconds).

**regular\_users\_view\_blocked (type: boolean; required)**

Allows blocking regular users from viewing parts of the system.

**groups\_propagation\_enabled (type: boolean; optional)**

Allows propagate the new user auto groups to peers that belongs to the user

**jwt\_groups\_enabled (type: boolean; optional)**

Allows extract groups from JWT claim and add it to account groups.

**jwt\_groups\_claim\_name (type: string; optional)**

Name of the claim from which we extract groups names to add it to account groups.

**jwt\_allow\_groups (type: string\[]; optional)**

List of groups to which users are allowed access

**routing\_peer\_dns\_resolution\_enabled (type: boolean; optional)**

Enables or disables DNS resolution on the routing peers

**dns\_domain (type: string; optional)**

Allows to define a custom dns domain for the account

**network\_range (type: string; optional)**

Allows to define a custom network range for the account in CIDR format

**network\_range\_v6 (type: string; optional)**

Allows to define a custom IPv6 network range for the account in CIDR format.

**peer\_expose\_enabled (type: boolean; required)**

Enables or disables peer expose. If enabled, peers can expose local services through the reverse proxy using the CLI.

**peer\_expose\_groups (type: string\[]; required)**

Limits which peer groups are allowed to expose services. If empty, all peers are allowed when peer expose is enabled.

**extra (type: object; optional)**

**More Information**

**peer\_approval\_enabled (type: boolean; required)**

(Cloud only) Enables or disables peer approval globally. If enabled, all peers added will be in pending state until approved by an admin.

**user\_approval\_required (type: boolean; required)**

Enables manual approval for new users joining via domain matching. When enabled, users are blocked with pending approval status until explicitly approved by an admin.

**network\_traffic\_logs\_enabled (type: boolean; required)**

Enables or disables network traffic logging. If enabled, all network traffic events from peers will be stored.

**network\_traffic\_logs\_groups (type: string\[]; required)**

Limits traffic logging to these groups. If unset all peers are enabled.

**network\_traffic\_packet\_counter\_enabled (type: boolean; required)**

Enables or disables network traffic packet counter. If enabled, network packets and their size will be counted and reported. (This can have an slight impact on performance)

**lazy\_connection\_enabled (type: boolean; optional)**

Enables or disables experimental lazy connection

**auto\_update\_version (type: string; optional)**

Set Clients auto-update version. "latest", "disabled", or a specific version (e.g "0.50.1")

**auto\_update\_always (type: boolean; optional)**

When true, updates are installed automatically in the background. When false, updates require user interaction from the UI.

**metrics\_push\_enabled (type: boolean; optional)**

Enables or disables client metrics push for all peers in the account

**agent\_network\_only (type: boolean; optional)**

Limits the dashboard to the Agent Network surface for this account. Set for accounts created via netbird.ai signups and can be disabled later. Enabling this requires dashboard\_features.agent\_network to be true in the same request.

**dashboard\_features (type: object; optional)**

**Per-account dashboard section visibility overrides. Omitted keys follow the default dashboard behavior.**

**agent\_network (type: boolean; optional)**

Controls the Agent Network menu for the account regardless of the deployment feature flag. When true the menu is shown, when false it is hidden, and when omitted the default behavior applies. Must be true when agent\_network\_only is enabled.

**embedded\_idp\_enabled (type: boolean; optional)**

Indicates whether the embedded identity provider (Dex) is enabled for this account. This is a read-only field.

**local\_auth\_disabled (type: boolean; optional)**

Indicates whether local (email/password) authentication is disabled. When true, users can only authenticate via external identity providers. This is a read-only field.

**local\_mfa\_enabled (type: boolean; optional)**

Enables or disables TOTP multi-factor authentication for local users. Only applicable when the embedded identity provider is enabled.

**ipv6\_enabled\_groups (type: string\[]; optional)**

List of group IDs whose peers receive IPv6 overlay addresses. Peers not in any of these groups will not be allocated an IPv6 address. New accounts default to the All group.

**onboarding (type: object; optional)**

**More Information**

**signup\_form\_pending (type: boolean; required)**

Indicates whether the account signup form is pending

**onboarding\_flow\_pending (type: boolean; required)**

Indicates whether the account onboarding flow is pending

**PUT /api/accounts/{accountId} Request**

**cURL**

```bash
curl -X PUT https://api.netbird.io/api/accounts/{accountId} \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Token <TOKEN>' \
--data-raw '{
  "settings": {
    "peer_login_expiration_enabled": true,
    "peer_login_expiration": 43200,
    "peer_inactivity_expiration_enabled": true,
    "peer_inactivity_expiration": 43200,
    "regular_users_view_blocked": true,
    "groups_propagation_enabled": true,
    "jwt_groups_enabled": true,
    "jwt_groups_claim_name": "roles",
    "jwt_allow_groups": [
      "Administrators"
    ],
    "routing_peer_dns_resolution_enabled": true,
    "dns_domain": "my-organization.org",
    "network_range": {
      "description": "Allows to define a custom network range for the account in CIDR format",
      "type": "string",
      "format": "cidr"
    },
    "network_range_v6": "fd00:1234:5678::/64",
    "peer_expose_enabled": false,
    "peer_expose_groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ],
    "extra": {
      "peer_approval_enabled": true,
      "user_approval_required": false,
      "network_traffic_logs_enabled": true,
      "network_traffic_logs_groups": [
        "ch8i4ug6lnn4g9hqv7m0"
      ],
      "network_traffic_packet_counter_enabled": true
    },
    "lazy_connection_enabled": true,
    "auto_update_version": "0.51.2",
    "auto_update_always": false,
    "metrics_push_enabled": false,
    "agent_network_only": false,
    "dashboard_features": {
      "agent_network": true
    },
    "embedded_idp_enabled": false,
    "local_auth_disabled": false,
    "local_mfa_enabled": false,
    "ipv6_enabled_groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ]
  },
  "onboarding": {
    "signup_form_pending": true,
    "onboarding_flow_pending": false
  }
}'
```

```js
const axios = require('axios');
let data = JSON.stringify({
  "settings": {
    "peer_login_expiration_enabled": true,
    "peer_login_expiration": 43200,
    "peer_inactivity_expiration_enabled": true,
    "peer_inactivity_expiration": 43200,
    "regular_users_view_blocked": true,
    "groups_propagation_enabled": true,
    "jwt_groups_enabled": true,
    "jwt_groups_claim_name": "roles",
    "jwt_allow_groups": [
      "Administrators"
    ],
    "routing_peer_dns_resolution_enabled": true,
    "dns_domain": "my-organization.org",
    "network_range": {
      "description": "Allows to define a custom network range for the account in CIDR format",
      "type": "string",
      "format": "cidr"
    },
    "network_range_v6": "fd00:1234:5678::/64",
    "peer_expose_enabled": false,
    "peer_expose_groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ],
    "extra": {
      "peer_approval_enabled": true,
      "user_approval_required": false,
      "network_traffic_logs_enabled": true,
      "network_traffic_logs_groups": [
        "ch8i4ug6lnn4g9hqv7m0"
      ],
      "network_traffic_packet_counter_enabled": true
    },
    "lazy_connection_enabled": true,
    "auto_update_version": "0.51.2",
    "auto_update_always": false,
    "metrics_push_enabled": false,
    "agent_network_only": false,
    "dashboard_features": {
      "agent_network": true
    },
    "embedded_idp_enabled": false,
    "local_auth_disabled": false,
    "local_mfa_enabled": false,
    "ipv6_enabled_groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ]
  },
  "onboarding": {
    "signup_form_pending": true,
    "onboarding_flow_pending": false
  }
});
let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: '/api/accounts/{accountId}',
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

url = "https://api.netbird.io/api/accounts/{accountId}"
payload = json.dumps({
  "settings": {
    "peer_login_expiration_enabled": true,
    "peer_login_expiration": 43200,
    "peer_inactivity_expiration_enabled": true,
    "peer_inactivity_expiration": 43200,
    "regular_users_view_blocked": true,
    "groups_propagation_enabled": true,
    "jwt_groups_enabled": true,
    "jwt_groups_claim_name": "roles",
    "jwt_allow_groups": [
      "Administrators"
    ],
    "routing_peer_dns_resolution_enabled": true,
    "dns_domain": "my-organization.org",
    "network_range": {
      "description": "Allows to define a custom network range for the account in CIDR format",
      "type": "string",
      "format": "cidr"
    },
    "network_range_v6": "fd00:1234:5678::/64",
    "peer_expose_enabled": false,
    "peer_expose_groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ],
    "extra": {
      "peer_approval_enabled": true,
      "user_approval_required": false,
      "network_traffic_logs_enabled": true,
      "network_traffic_logs_groups": [
        "ch8i4ug6lnn4g9hqv7m0"
      ],
      "network_traffic_packet_counter_enabled": true
    },
    "lazy_connection_enabled": true,
    "auto_update_version": "0.51.2",
    "auto_update_always": false,
    "metrics_push_enabled": false,
    "agent_network_only": false,
    "dashboard_features": {
      "agent_network": true
    },
    "embedded_idp_enabled": false,
    "local_auth_disabled": false,
    "local_mfa_enabled": false,
    "ipv6_enabled_groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ]
  },
  "onboarding": {
    "signup_form_pending": true,
    "onboarding_flow_pending": false
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

  url := "https://api.netbird.io/api/accounts/{accountId}"
  method := "PUT"
  
  payload := strings.NewReader(`{
  "settings": {
    "peer_login_expiration_enabled": true,
    "peer_login_expiration": 43200,
    "peer_inactivity_expiration_enabled": true,
    "peer_inactivity_expiration": 43200,
    "regular_users_view_blocked": true,
    "groups_propagation_enabled": true,
    "jwt_groups_enabled": true,
    "jwt_groups_claim_name": "roles",
    "jwt_allow_groups": [
      "Administrators"
    ],
    "routing_peer_dns_resolution_enabled": true,
    "dns_domain": "my-organization.org",
    "network_range": {
      "description": "Allows to define a custom network range for the account in CIDR format",
      "type": "string",
      "format": "cidr"
    },
    "network_range_v6": "fd00:1234:5678::/64",
    "peer_expose_enabled": false,
    "peer_expose_groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ],
    "extra": {
      "peer_approval_enabled": true,
      "user_approval_required": false,
      "network_traffic_logs_enabled": true,
      "network_traffic_logs_groups": [
        "ch8i4ug6lnn4g9hqv7m0"
      ],
      "network_traffic_packet_counter_enabled": true
    },
    "lazy_connection_enabled": true,
    "auto_update_version": "0.51.2",
    "auto_update_always": false,
    "metrics_push_enabled": false,
    "agent_network_only": false,
    "dashboard_features": {
      "agent_network": true
    },
    "embedded_idp_enabled": false,
    "local_auth_disabled": false,
    "local_mfa_enabled": false,
    "ipv6_enabled_groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ]
  },
  "onboarding": {
    "signup_form_pending": true,
    "onboarding_flow_pending": false
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

url = URI("https://api.netbird.io/api/accounts/{accountId}")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
request["Authorization"] = "Token <TOKEN>"

request.body = JSON.dump({
  "settings": {
    "peer_login_expiration_enabled": true,
    "peer_login_expiration": 43200,
    "peer_inactivity_expiration_enabled": true,
    "peer_inactivity_expiration": 43200,
    "regular_users_view_blocked": true,
    "groups_propagation_enabled": true,
    "jwt_groups_enabled": true,
    "jwt_groups_claim_name": "roles",
    "jwt_allow_groups": [
      "Administrators"
    ],
    "routing_peer_dns_resolution_enabled": true,
    "dns_domain": "my-organization.org",
    "network_range": {
      "description": "Allows to define a custom network range for the account in CIDR format",
      "type": "string",
      "format": "cidr"
    },
    "network_range_v6": "fd00:1234:5678::/64",
    "peer_expose_enabled": false,
    "peer_expose_groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ],
    "extra": {
      "peer_approval_enabled": true,
      "user_approval_required": false,
      "network_traffic_logs_enabled": true,
      "network_traffic_logs_groups": [
        "ch8i4ug6lnn4g9hqv7m0"
      ],
      "network_traffic_packet_counter_enabled": true
    },
    "lazy_connection_enabled": true,
    "auto_update_version": "0.51.2",
    "auto_update_always": false,
    "metrics_push_enabled": false,
    "agent_network_only": false,
    "dashboard_features": {
      "agent_network": true
    },
    "embedded_idp_enabled": false,
    "local_auth_disabled": false,
    "local_mfa_enabled": false,
    "ipv6_enabled_groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ]
  },
  "onboarding": {
    "signup_form_pending": true,
    "onboarding_flow_pending": false
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
  "settings": {
    "peer_login_expiration_enabled": true,
    "peer_login_expiration": 43200,
    "peer_inactivity_expiration_enabled": true,
    "peer_inactivity_expiration": 43200,
    "regular_users_view_blocked": true,
    "groups_propagation_enabled": true,
    "jwt_groups_enabled": true,
    "jwt_groups_claim_name": "roles",
    "jwt_allow_groups": [
      "Administrators"
    ],
    "routing_peer_dns_resolution_enabled": true,
    "dns_domain": "my-organization.org",
    "network_range": {
      "description": "Allows to define a custom network range for the account in CIDR format",
      "type": "string",
      "format": "cidr"
    },
    "network_range_v6": "fd00:1234:5678::/64",
    "peer_expose_enabled": false,
    "peer_expose_groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ],
    "extra": {
      "peer_approval_enabled": true,
      "user_approval_required": false,
      "network_traffic_logs_enabled": true,
      "network_traffic_logs_groups": [
        "ch8i4ug6lnn4g9hqv7m0"
      ],
      "network_traffic_packet_counter_enabled": true
    },
    "lazy_connection_enabled": true,
    "auto_update_version": "0.51.2",
    "auto_update_always": false,
    "metrics_push_enabled": false,
    "agent_network_only": false,
    "dashboard_features": {
      "agent_network": true
    },
    "embedded_idp_enabled": false,
    "local_auth_disabled": false,
    "local_mfa_enabled": false,
    "ipv6_enabled_groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ]
  },
  "onboarding": {
    "signup_form_pending": true,
    "onboarding_flow_pending": false
  }
}');
Request request = new Request.Builder()
  .url("https://api.netbird.io/api/accounts/{accountId}")
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
  CURLOPT_URL => 'https://api.netbird.io/api/accounts/{accountId}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',  
  CURLOPT_POSTFIELDS => '{
  "settings": {
    "peer_login_expiration_enabled": true,
    "peer_login_expiration": 43200,
    "peer_inactivity_expiration_enabled": true,
    "peer_inactivity_expiration": 43200,
    "regular_users_view_blocked": true,
    "groups_propagation_enabled": true,
    "jwt_groups_enabled": true,
    "jwt_groups_claim_name": "roles",
    "jwt_allow_groups": [
      "Administrators"
    ],
    "routing_peer_dns_resolution_enabled": true,
    "dns_domain": "my-organization.org",
    "network_range": {
      "description": "Allows to define a custom network range for the account in CIDR format",
      "type": "string",
      "format": "cidr"
    },
    "network_range_v6": "fd00:1234:5678::/64",
    "peer_expose_enabled": false,
    "peer_expose_groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ],
    "extra": {
      "peer_approval_enabled": true,
      "user_approval_required": false,
      "network_traffic_logs_enabled": true,
      "network_traffic_logs_groups": [
        "ch8i4ug6lnn4g9hqv7m0"
      ],
      "network_traffic_packet_counter_enabled": true
    },
    "lazy_connection_enabled": true,
    "auto_update_version": "0.51.2",
    "auto_update_always": false,
    "metrics_push_enabled": false,
    "agent_network_only": false,
    "dashboard_features": {
      "agent_network": true
    },
    "embedded_idp_enabled": false,
    "local_auth_disabled": false,
    "local_mfa_enabled": false,
    "ipv6_enabled_groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ]
  },
  "onboarding": {
    "signup_form_pending": true,
    "onboarding_flow_pending": false
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
  "id": "ch8i4ug6lnn4g9hqv7l0",
  "settings": {
    "peer_login_expiration_enabled": true,
    "peer_login_expiration": 43200,
    "peer_inactivity_expiration_enabled": true,
    "peer_inactivity_expiration": 43200,
    "regular_users_view_blocked": true,
    "groups_propagation_enabled": true,
    "jwt_groups_enabled": true,
    "jwt_groups_claim_name": "roles",
    "jwt_allow_groups": [
      "Administrators"
    ],
    "routing_peer_dns_resolution_enabled": true,
    "dns_domain": "my-organization.org",
    "network_range": {
      "description": "Allows to define a custom network range for the account in CIDR format",
      "type": "string",
      "format": "cidr"
    },
    "network_range_v6": "fd00:1234:5678::/64",
    "peer_expose_enabled": false,
    "peer_expose_groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ],
    "extra": {
      "peer_approval_enabled": true,
      "user_approval_required": false,
      "network_traffic_logs_enabled": true,
      "network_traffic_logs_groups": [
        "ch8i4ug6lnn4g9hqv7m0"
      ],
      "network_traffic_packet_counter_enabled": true
    },
    "lazy_connection_enabled": true,
    "auto_update_version": "0.51.2",
    "auto_update_always": false,
    "metrics_push_enabled": false,
    "agent_network_only": false,
    "dashboard_features": {
      "agent_network": true
    },
    "embedded_idp_enabled": false,
    "local_auth_disabled": false,
    "local_mfa_enabled": false,
    "ipv6_enabled_groups": [
      "ch8i4ug6lnn4g9hqv7m0"
    ]
  },
  "domain": "netbird.io",
  "domain_category": "private",
  "created_at": "2023-05-05T09:00:35.477782Z",
  "created_by": "google-oauth2|277474792786460067937",
  "onboarding": {
    "signup_form_pending": true,
    "onboarding_flow_pending": false
  }
}
```

**Schema**

```json
{
  "id": "string",
  "settings": {
    "peer_login_expiration_enabled": "boolean",
    "peer_login_expiration": "integer",
    "peer_inactivity_expiration_enabled": "boolean",
    "peer_inactivity_expiration": "integer",
    "regular_users_view_blocked": "boolean",
    "groups_propagation_enabled": "boolean",
    "jwt_groups_enabled": "boolean",
    "jwt_groups_claim_name": "string",
    "jwt_allow_groups": [
      "string"
    ],
    "routing_peer_dns_resolution_enabled": "boolean",
    "dns_domain": "string",
    "network_range": "string",
    "network_range_v6": "string",
    "peer_expose_enabled": "boolean",
    "peer_expose_groups": [
      "string"
    ],
    "extra": {
      "peer_approval_enabled": "boolean",
      "user_approval_required": "boolean",
      "network_traffic_logs_enabled": "boolean",
      "network_traffic_logs_groups": [
        "string"
      ],
      "network_traffic_packet_counter_enabled": "boolean"
    },
    "lazy_connection_enabled": "boolean",
    "auto_update_version": "string",
    "auto_update_always": "boolean",
    "metrics_push_enabled": "boolean",
    "agent_network_only": "boolean",
    "dashboard_features": {
      "agent_network": "boolean"
    },
    "embedded_idp_enabled": "boolean",
    "local_auth_disabled": "boolean",
    "local_mfa_enabled": "boolean",
    "ipv6_enabled_groups": [
      "string"
    ]
  },
  "domain": "string",
  "domain_category": "string",
  "created_at": "string",
  "created_by": "string",
  "onboarding": {
    "signup_form_pending": "boolean",
    "onboarding_flow_pending": "boolean"
  }
}
```

***
