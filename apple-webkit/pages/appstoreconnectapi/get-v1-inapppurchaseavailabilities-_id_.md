> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-inapppurchaseavailabilities-_id_

# Read information about the availablity of an In-App Purchase

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.3+

Get information about the territory availablity for an In-App Purchase.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/inAppPurchaseAvailabilities/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the In-App Purchase resource ID from the [List all In-App Purchases for an app](get-v1-apps-_id_-inapppurchasesv2.md) response.

## Query Parameters

- `fields[inAppPurchaseAvailabilities]` — `[string]`: **Allowed values:** `availableInNewTerritories`, `availableTerritories`
- `fields[territories]` — `[string]`: **Allowed values:** `currency`
- `include` — `[string]`: **Allowed values:** `availableTerritories`
- `limit[availableTerritories]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `InAppPurchaseAvailabilityResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/inAppPurchaseAvailabilities/6447501593
```

**Response**

```json
  "data" : {
    "type" : "inAppPurchaseAvailabilities",
    "id" : "6447501593",
    "attributes" : {
      "availableInNewTerritories" : false
    },
    "relationships" : {
      "availableTerritories" : {
        "links" : {
          "self" : "https://api.appstoreconnect.apple.com/v1/inAppPurchaseAvailabilities/6447501593/relationships/availableTerritories",
          "related" : "https://api.appstoreconnect.apple.com/v1/inAppPurchaseAvailabilities/6447501593/availableTerritories"
        }
      }
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/inAppPurchaseAvailabilities/6447501593"
    }
  },
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/inAppPurchaseAvailabilities/6447501593"
  }
}
```

## See Also

### Endpoints

- [List the Territory Availablity of an In-App Purchase](get-v1-inapppurchaseavailabilities-_id_-availableterritories.md): List all the territories where an In-App Purchase is available.
- [List available territory IDs for an In-App Purchase availability](get-v1-inapppurchaseavailabilities-_id_-relationships-availableterritories.md)
- [Modify the Territory Availablity of an In-App Purchase](post-v1-inapppurchaseavailabilities.md): Update the territory availablity of a specific In-App Purchase.
