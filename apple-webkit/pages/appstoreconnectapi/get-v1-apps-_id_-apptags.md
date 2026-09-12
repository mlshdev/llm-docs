> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-apptags](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-apptags)

# List App Tags

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.1+

List all app tags for a specific app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/appTags
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `fields[appTags]` — `[string]`: Additional fields to include for each app tag resource returned by the response.
  **Allowed values:** `name`, `visibleInAppStore`, `territories`
- `fields[territories]` — `[string]`: Additional fields to include for each territory resource returned by the response.
  **Allowed values:** `currency`
- `filter[visibleInAppStore]` — `[string]`: Filter the returned app tags by visibility in the App Store.
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `territories`
- `limit` — `integer`: The maximum number of app tag resources to return.
  **Maximum:** `200`
- `limit[territories]` — `integer`: The maximum number of related territory resources to return.
  **Maximum:** `50`
- `sort` — `[string]`: Attributes by which to sort.
  **Allowed values:** `name`, `-name`

## Response Codes

- `200` OK — `AppTagsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading app tag information

- [List app tags IDs](get-v1-apps-_id_-relationships-apptags.md): List all app tag IDs for a specific app.
- [List territory IDs for an app tag](get-v1-apptags-_id_-relationships-territories.md): List territory IDs for an app tag.
- [List Territories for an App Tag](get-v1-apptags-_id_-territories.md): List territory availability for a specific app tag.
