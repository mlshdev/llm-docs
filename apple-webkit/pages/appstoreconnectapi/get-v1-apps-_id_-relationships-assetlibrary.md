> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-assetlibrary

# Get the asset library ID for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.5+

Get the asset library resource ID for a specific app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/assetLibrary
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Response Codes

- `200` OK — `AppAssetLibraryLinkageResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/apps/1234567890/relationships/assetLibrary
```

**Response**

```json
{
  "data" : {
    "type" : "appAssetLibraries",
    "id" : "1234567890"
  },
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/apps/1234567890/relationships/assetLibrary",
    "related" : "https://api.appstoreconnect.apple.com/v1/apps/1234567890/assetLibrary"
  }
}
```

## See Also

### Getting asset library information

- [Read related asset library](get-v1-apps-_id_-assetlibrary.md): Get the asset library for an app.
