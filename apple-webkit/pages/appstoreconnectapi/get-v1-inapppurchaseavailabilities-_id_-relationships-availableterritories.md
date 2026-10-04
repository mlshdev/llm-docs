> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-inapppurchaseavailabilities-_id_-relationships-availableterritories

# List available territory IDs for an In-App Purchase availability

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

- [Read information about the availablity of an In-App Purchase](get-v1-inapppurchaseavailabilities-_id_.md): Get information about the territory availablity for an In-App Purchase.
- [List the Territory Availablity of an In-App Purchase](get-v1-inapppurchaseavailabilities-_id_-availableterritories.md): List all the territories where an In-App Purchase is available.
- [Modify the Territory Availablity of an In-App Purchase](post-v1-inapppurchaseavailabilities.md): Update the territory availablity of a specific In-App Purchase.
