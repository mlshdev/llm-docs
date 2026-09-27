> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/post-v1-inapppurchaseavailabilities

# Modify the Territory Availablity of an In-App Purchase

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.3+

Update the territory availablity of a specific In-App Purchase.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/inAppPurchaseAvailabilities
```

## HTTP Body

Content type: `application/json`

Type: `InAppPurchaseAvailabilityCreateRequest`

## Response Codes

- `201` Created — `InAppPurchaseAvailabilityResponse`:
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
https://api.appstoreconnect.apple.com/v1/inAppPurchaseAvailabilities -d
{
  "data": {
    "type": "inAppPurchaseAvailabilities",
    "attributes": {
      "availableInNewTerritories": true
    },
    "relationships": {
      "availableTerritories": {
        "data": [
          {
            "type": "territories",
            "id": "USA"
          },
          {
            "type": "territories",
            "id": "CAN"
          },
          {
            "type": "territories",
            "id": "ISL"
          }
        ]
      },
      "inAppPurchase": {
        "data": {
          "id": "6447501593",
          "type": "inAppPurchases"
        }
      }
    }
  }
}
```

**Response**

```json
{
  "data" : {
    "type" : "inAppPurchaseAvailabilities",
    "id" : "6447501593",
    "attributes" : {
      "availableInNewTerritories" : true
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
    "self" : "https://api.appstoreconnect.apple.com/v1/inAppPurchaseAvailabilities"
  }
}
```

## See Also

### Endpoints

- [Read information about the availablity of an In-App Purchase](get-v1-inapppurchaseavailabilities-_id_.md): Get information about the territory availablity for an In-App Purchase.
- [List the Territory Availablity of an In-App Purchase](get-v1-inapppurchaseavailabilities-_id_-availableterritories.md): List all the territories where an In-App Purchase is available.
- [List available territory IDs for an In-App Purchase availability](get-v1-inapppurchaseavailabilities-_id_-relationships-availableterritories.md)
