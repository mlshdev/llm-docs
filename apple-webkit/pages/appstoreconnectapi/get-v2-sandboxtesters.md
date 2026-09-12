> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v2-sandboxtesters](https://developer.apple.com/documentation/appstoreconnectapi/get-v2-sandboxtesters)

# List sandbox testers

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.2+

Get a list of Sandbox Testers for your team.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/sandboxTesters
```

## Query Parameters

- `fields[sandboxTesters]` — `[string]`: **Allowed values:** `firstName`, `lastName`, `acAccountName`, `territory`, `applePayCompatible`, `interruptPurchases`, `subscriptionRenewalRate`
- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `SandboxTestersV2Response`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v2/sandboxTesters
```

**Response**

```json
{
  "data" : [ {
    "type" : "sandboxTesters",
    "id" : "47be9e57-1a3f-49c2-8ce7-af27a977ebb0",
    "attributes" : {
      "firstName" : "Anne",
      "lastName" : "Johnson",
      "acAccountName" : "annejohnson1@icloud.com",
      "territory" : "USA",
      "applePayCompatible" : true,
      "interruptPurchases" : false,
      "subscriptionRenewalRate" : "MONTHLY_RENEWAL_EVERY_FIVE_MINUTES"
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v2/sandboxTesters/47be9e57-1a3f-49c2-8ce7-af27a977ebb0"
    }
  } ],
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v2/sandboxTesters"
  },
  "meta" : {
    "paging" : {
      "total" : 1,
      "limit" : 50
    }
  }
}

```

## See Also

### Sandbox Tester Lookup and Modification

- [Modify a sandbox tester](patch-v2-sandboxtesters-_id_.md): Change the subscription renewal time rate, set interrupted purchases or change territory of Sandbox Apple Account.
- [Clear purchase history for a sandbox tester](post-v2-sandboxtestersclearpurchasehistoryrequest.md): Remove purchase history from a Sandbox Apple Account.
