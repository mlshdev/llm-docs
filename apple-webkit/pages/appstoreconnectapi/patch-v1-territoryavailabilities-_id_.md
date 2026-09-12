> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-territoryavailabilities-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-territoryavailabilities-_id_)

# Modify the territory availability for an app pre-order

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Update the release territories for your app pre-order.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/territoryAvailabilities/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `TerritoryAvailabilityUpdateRequest`

## Response Codes

- `200` OK — `TerritoryAvailabilityResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing app and territory availability

- [Read app availability](get-v2-appavailabilities-_id_.md): Get information about your app’s availalbility.
- [Read app availablity territories](get-v2-appavailabilities-_id_-territoryavailabilities.md): Read the territory availablity for a specific app.
- [List territory availability IDs for an app availability](get-v2-appavailabilities-_id_-relationships-territoryavailabilities.md): Get a list of territory availability IDs for a specific app availability.
- [Create an app pre-order](post-v2-appavailabilities.md): Create an app pre-order and set the expected app release date.
- [End an app pre-order](post-v1-endappavailabilitypreorders.md): End the pre-order for your app and release to store immediately.
