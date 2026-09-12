> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v2-sandboxtesters-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v2-sandboxtesters-_id_)

# Modify a sandbox tester

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.2+

Change the subscription renewal time rate, set interrupted purchases or change territory of Sandbox Apple Account.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v2/sandboxTesters/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the Sandbox Tester resource ID from the [List sandbox testers](get-v2-sandboxtesters.md) response

## HTTP Body

Content type: `application/json`

Type: `SandboxTesterV2UpdateRequest`

## Response Codes

- `200` OK — `SandboxTesterV2Response`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

> **Note**

>  Changes that you make to product metadata with the App Store Connect API can take up to 1 hour to appear in the sandbox environment.

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v2/sandboxTesters/47be9e57-1a3f-49c2-8ce7-af27a977ebb0
```

**Response**

```json
{
  "data" : {
    "type" : "sandboxTesters",
    "id" : "47be9e57-1a3f-49c2-8ce7-af27a977ebb0",
    "attributes" : {
      "firstName" : "Anne",
      "lastName" : "Johnson",
      "acAccountName" : "annejohnson1@icloud.com",
      "territory" : "CAN",
      "applePayCompatible" : true,
      "interruptPurchases" : false,
      "subscriptionRenewalRate" : "MONTHLY_RENEWAL_EVERY_THIRTY_MINUTES"
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v2/sandboxTesters/47be9e57-1a3f-49c2-8ce7-af27a977ebb0"
    }
  },
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v2/sandboxTesters/47be9e57-1a3f-49c2-8ce7-af27a977ebb0"
  }
}

```

## See Also

### Sandbox Tester Lookup and Modification

- [List sandbox testers](get-v2-sandboxtesters.md): Get a list of Sandbox Testers for your team.
- [Clear purchase history for a sandbox tester](post-v2-sandboxtestersclearpurchasehistoryrequest.md): Remove purchase history from a Sandbox Apple Account.
