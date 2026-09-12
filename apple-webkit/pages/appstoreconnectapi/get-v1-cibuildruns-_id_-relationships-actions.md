> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-cibuildruns-_id_-relationships-actions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-cibuildruns-_id_-relationships-actions)

# List action IDs for a CI build run

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/ciBuildRuns/{id}/relationships/actions
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `CiBuildRunActionsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Build Information

- [Read xcode cloud build information](get-v1-cibuildruns-_id_.md): Get information about a specific Xcode Cloud build.
- [List all actions for an xcode cloud build](get-v1-cibuildruns-_id_-actions.md): List all actions Xcode Cloud performed during a specific build.
- [List all builds xcode cloud created in app store connect](get-v1-cibuildruns-_id_-builds.md): List All App Store Connect and TestFlight Builds when it performed a build.
- [List build IDs for a CI build run](get-v1-cibuildruns-_id_-relationships-builds.md)
