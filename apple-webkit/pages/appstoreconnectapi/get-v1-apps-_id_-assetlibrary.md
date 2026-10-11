> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-assetlibrary

# Read related asset library

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.5+

Get the asset library for an app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/assetLibrary
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Query Parameters

- `fields[appAssetLibraries]` — `[string]`: Additional fields to include for each app asset library resource returned by the response.
  **Allowed values:** `images`, `videos`

## Response Codes

- `200` OK — `AppAssetLibraryResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.5.1 release notes](app-store-connect-api-4-5-1-release-notes.md)
- [Migrating to the App Asset Library](migrating-to-the-app-asset-library.md)
- [Uploading and managing image assets](uploading-and-managing-image-assets.md)
- [Uploading and managing video assets](uploading-and-managing-video-assets.md)

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/apps/1234567890/assetLibrary
```

**Response**

```json
{
  "data" : {
    "type" : "appAssetLibraries",
    "id" : "1234567890",
    "relationships" : {
      "images" : {
        "links" : {
          "self" : "https://api.appstoreconnect.apple.com/v1/appAssetLibraries/1234567890/relationships/images",
          "related" : "https://api.appstoreconnect.apple.com/v1/appAssetLibraries/1234567890/images"
        }
      },
      "videos" : {
        "links" : {
          "self" : "https://api.appstoreconnect.apple.com/v1/appAssetLibraries/1234567890/relationships/videos",
          "related" : "https://api.appstoreconnect.apple.com/v1/appAssetLibraries/1234567890/videos"
        }
      }
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/appAssetLibraries/1234567890"
    }
  },
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/apps/1234567890/assetLibrary"
  }
}
```

## See Also

### Getting asset library information

- [Get the asset library ID for an app](get-v1-apps-_id_-relationships-assetlibrary.md): Get the asset library resource ID for a specific app.
