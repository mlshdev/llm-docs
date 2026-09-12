> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-backgroundassets-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-backgroundassets-_id_)

# Modify a Background Asset

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Update a specific background asset.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/backgroundAssets/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `BackgroundAssetUpdateRequest`

## Response Codes

- `200` OK — `BackgroundAssetResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting background asset information

- [List all background assets for an app](get-v1-apps-_id_-backgroundassets.md): Get information about the Apple-hosted background assets for a specific app.
- [List the assets packs ids for an app](get-v1-apps-_id_-relationships-backgroundassets.md): Get a list of the Apple hosted background asset IDs for a specific app.
