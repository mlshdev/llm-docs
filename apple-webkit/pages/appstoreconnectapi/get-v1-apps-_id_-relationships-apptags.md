> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-apptags](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-apptags)

# List app tags IDs

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.1+

List all app tag IDs for a specific app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/appTags
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `limit` — `integer`: The maximum number of app tag resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AppAppTagsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading app tag information

- [List App Tags](get-v1-apps-_id_-apptags.md): List all app tags for a specific app.
- [List territory IDs for an app tag](get-v1-apptags-_id_-relationships-territories.md): List territory IDs for an app tag.
- [List Territories for an App Tag](get-v1-apptags-_id_-territories.md): List territory availability for a specific app tag.
