> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-backgroundassets](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-backgroundassets)

# List the assets packs ids for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get a list of the Apple hosted background asset IDs for a specific app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/backgroundAssets
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `AppBackgroundAssetsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting background asset information

- [List all background assets for an app](get-v1-apps-_id_-backgroundassets.md): Get information about the Apple-hosted background assets for a specific app.
- [Modify a Background Asset](patch-v1-backgroundassets-_id_.md): Update a specific background asset.
