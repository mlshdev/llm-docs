> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-inapppurchaseavailabilities-_id_-relationships-availableterritories](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-inapppurchaseavailabilities-_id_-relationships-availableterritories)

# List available territory IDs for an in-app purchase availability

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/inAppPurchaseAvailabilities/{id}/relationships/availableTerritories
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `InAppPurchaseAvailabilityAvailableTerritoriesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Read information about the availablity of an in-app purchase](get-v1-inapppurchaseavailabilities-_id_.md): Get information about the territory availablity for an in-app purchase.
- [List the Territory Availablity of an In-App Purchase](get-v1-inapppurchaseavailabilities-_id_-availableterritories.md): List all the territories where an in-app purchase is available.
- [Modify the Territory Availablity of an In-App Purchase](post-v1-inapppurchaseavailabilities.md): Update the territory availablity of a specific in-app purchase.
