> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apptags-_id_-relationships-territories](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apptags-_id_-relationships-territories)

# List territory IDs for an app tag

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.1+

List territory IDs for an app tag.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appTags/{id}/relationships/territories
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app tag resource ID from the [List App Tags](get-v1-apps-_id_-apptags.md) response.

## Query Parameters

- `limit` — `integer`: The maximum number of territory resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AppTagTerritoriesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading app tag information

- [List App Tags](get-v1-apps-_id_-apptags.md): List all app tags for a specific app.
- [List app tags IDs](get-v1-apps-_id_-relationships-apptags.md): List all app tag IDs for a specific app.
- [List Territories for an App Tag](get-v1-apptags-_id_-territories.md): List territory availability for a specific app tag.
