> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appassetlibraryvideos

# Create an app asset library video

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.5+

Create an app asset library video.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appAssetLibraryVideos
```

## HTTP Body

Content type: `application/json`

Type: `AppAssetLibraryVideoCreateRequest`

The request body you use to create an app asset library video.

## Response Codes

- `201` Created — `AppAssetLibraryVideoResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.5.1 release notes](app-store-connect-api-4-5-1-release-notes.md)
- [Migrating to the App Asset Library](migrating-to-the-app-asset-library.md)
- [Uploading and managing video assets](uploading-and-managing-video-assets.md)

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
POST https://api.appstoreconnect.apple.com/v1/appAssetLibraryVideos

{
  "data": {
    "type": "appAssetLibraryVideos",
    "attributes": {
      "fileName": "app-preview-6-9.mp4",
      "fileSize": 31457280,
      "category": "APP_SCREENSHOTS_AND_PREVIEWS",
      "previewFrameTimeCode": "00:00:03:00",
      "referenceName": "Fall campaign preview"
    },
    "relationships": {
      "assetLibrary": {
        "data": {
          "type": "appAssetLibraries",
          "id": "1234567890"
        }
      }
    }
  }
}
```

**Response**

```json
{
  "data" : {
    "type" : "appAssetLibraryVideos",
    "id" : "3b100005-e036-8f0b-8021-77aa41c6b502",
    "attributes" : {
      "category" : "APP_SCREENSHOTS_AND_PREVIEWS",
      "createdDate" : "2026-08-11T22:51:04Z",
      "lastModifiedDate" : "2026-08-11T22:51:04Z",
      "fileName" : "app-preview-6-9.mp4",
      "fileSize" : 31457280,
      "previewFrameImage" : null,
      "previewFrameTimeCode" : "00:00:03:00",
      "referenceName" : "Fall campaign preview",
      "specId" : null,
      "state" : "AWAITING_UPLOAD",
      "stateDetails" : null,
      "videoAsset" : null,
      "uploadOperations" : [ {
        "method" : "PUT",
        "url" : "https://store-030.blobstore.apple.com/assets/PurpleSource112/v4/8c/be/40/8cbe4070-6a92-e2ac-c88b-65834bf2eab5?uploadId=2bd6bf70-95d6-11f1-b9d8-7e19c51190cb&partNumber=1&Expires=1786488251",
        "length" : 31457280,
        "offset" : 0,
        "requestHeaders" : [ {
          "name" : "Content-Type",
          "value" : "video/mp4"
        } ]
      } ]
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/appAssetLibraryVideos/3b100005-e036-8f0b-8021-77aa41c6b502"
    }
  },
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/appAssetLibraryVideos"
  }
}
```

## See Also

### Creating, modifying, and deleting videos

- [Modify an app asset library video](patch-v1-appassetlibraryvideos-_id_.md): Update an app asset library video.
- [Delete an app asset library video](delete-v1-appassetlibraryvideos-_id_.md): Delete an app asset library video.
