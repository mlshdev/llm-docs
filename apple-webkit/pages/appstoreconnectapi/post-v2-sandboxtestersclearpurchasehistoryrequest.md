> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v2-sandboxtestersclearpurchasehistoryrequest](https://developer.apple.com/documentation/appstoreconnectapi/post-v2-sandboxtestersclearpurchasehistoryrequest)

# Clear purchase history for a sandbox tester

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.2+

Remove purchase history from a Sandbox Apple Account.

## URL

```http
POST https://api.appstoreconnect.apple.com/v2/sandboxTestersClearPurchaseHistoryRequest
```

## HTTP Body

Content type: `application/json`

Type: `SandboxTestersClearPurchaseHistoryRequestV2CreateRequest`

## Response Codes

- `201` Created — `SandboxTestersClearPurchaseHistoryRequestV2Response`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v2/sandboxTestersClearPurchaseHistoryRequest 
-d
{
  "data": {
    "type": "sandboxTestersClearPurchaseHistoryRequest",
    "relationships": {
      "sandboxTesters": {
        "data": [
          {
            "id": "47be9e57-1a3f-49c2-8ce7-af27a977ebb0",
            "type": "sandboxTesters"
          }
        ]
      }
    }
  }
}

```

**Response**

```json
{
  "data" : {
    "type" : "sandboxTestersClearPurchaseHistoryRequest",
    "id" : "c47f2eda-042e-4f4b-9bb9-ded24c507e41",
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v2/sandboxTestersClearPurchaseHistoryRequest/c47f2eda-042e-4f4b-9bb9-ded24c507e41"
    }
  },
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v2/sandboxTestersClearPurchaseHistoryRequest"
  }
}
```

## See Also

### Sandbox Tester Lookup and Modification

- [List sandbox testers](get-v2-sandboxtesters.md): Get a list of Sandbox Testers for your team.
- [Modify a sandbox tester](patch-v2-sandboxtesters-_id_.md): Change the subscription renewal time rate, set interrupted purchases or change territory of Sandbox Apple Account.
