> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v2-appavailabilities-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v2-appavailabilities-_id_)

# Read app availability

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Get information about your app’s availalbility.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/appAvailabilities/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[appAvailabilities]` — `[string]`: **Allowed values:** `availableInNewTerritories`, `territoryAvailabilities`
- `fields[territoryAvailabilities]` — `[string]`: **Allowed values:** `available`, `releaseDate`, `preOrderEnabled`, `preOrderPublishDate`, `contentStatuses`, `territory`
- `include` — `[string]`: **Allowed values:** `territoryAvailabilities`
- `limit[territoryAvailabilities]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `AppAvailabilityV2Response`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 3.1 release notes](app-store-connect-api-3-1-release-notes.md)

## See Also

### Managing app and territory availability

- [Read app availablity territories](get-v2-appavailabilities-_id_-territoryavailabilities.md): Read the territory availablity for a specific app.
- [List territory availability IDs for an app availability](get-v2-appavailabilities-_id_-relationships-territoryavailabilities.md): Get a list of territory availability IDs for a specific app availability.
- [Create an app pre-order](post-v2-appavailabilities.md): Create an app pre-order and set the expected app release date.
- [Modify the territory availability for an app pre-order](patch-v1-territoryavailabilities-_id_.md): Update the release territories for your app pre-order.
- [End an app pre-order](post-v1-endappavailabilitypreorders.md): End the pre-order for your app and release to store immediately.
