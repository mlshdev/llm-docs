> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-backgroundassets-_id_-relationships-versions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-backgroundassets-_id_-relationships-versions)

# Read version ids for a background asset

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get version IDs about a specific background asset version.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/backgroundAssets/{id}/relationships/versions
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `backgroundAssets` resource ID from the [List all background assets for an app](get-v1-apps-_id_-backgroundassets.md) response.

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `BackgroundAssetVersionsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading background asset information

- [List all background assets for an app](get-v1-apps-_id_-backgroundassets.md): Get information about the Apple-hosted background assets for a specific app.
- [List the assets packs ids for an app](get-v1-apps-_id_-relationships-backgroundassets.md): Get a list of the Apple hosted background asset IDs for a specific app.
- [Read Background Assets Information](get-v1-backgroundassets-_id_.md): Get details about a specific background asset.
- [Read Version Details for a Background Asset](get-v1-backgroundassets-_id_-versions.md): Get details about a specific background asset version.
