> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v2-appavailabilities-_id_-territoryavailabilities](https://developer.apple.com/documentation/appstoreconnectapi/get-v2-appavailabilities-_id_-territoryavailabilities)

# Read app availablity territories

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Read the territory availablity for a specific app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/appAvailabilities/{id}/territoryAvailabilities
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app availability resource ID from the `GET-v1-apps-{id}-appAvailability` response.

## Query Parameters

- `fields[territories]` — `[string]`: Additional fields to include for each territories resource returned by the response.
  **Allowed values:** `currency`
- `fields[territoryAvailabilities]` — `[string]`: Additional fields to include for each territory availabilities resource returned by the response.
  **Allowed values:** `available`, `releaseDate`, `preOrderEnabled`, `preOrderPublishDate`, `contentStatuses`, `territory`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `territory`
- `limit` — `integer`: The maximum number of territory availabilities resources to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `TerritoryAvailabilitiesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 3.1 release notes](app-store-connect-api-3-1-release-notes.md)
- [App Store Connect API 4.3.1 release notes](app-store-connect-api-4-3-1-release-notes.md)

## See Also

### Managing app and territory availability

- [Read app availability](get-v2-appavailabilities-_id_.md): Get information about your app’s availalbility.
- [List territory availability IDs for an app availability](get-v2-appavailabilities-_id_-relationships-territoryavailabilities.md): Get a list of territory availability IDs for a specific app availability.
- [Create an app pre-order](post-v2-appavailabilities.md): Create an app pre-order and set the expected app release date.
- [Modify the territory availability for an app pre-order](patch-v1-territoryavailabilities-_id_.md): Update the release territories for your app pre-order.
- [End an app pre-order](post-v1-endappavailabilitypreorders.md): End the pre-order for your app and release to store immediately.
