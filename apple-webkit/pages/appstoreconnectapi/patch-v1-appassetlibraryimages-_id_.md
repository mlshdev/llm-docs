> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-appassetlibraryimages-_id_

# Modify an app asset library image

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.5+

Update an app asset library image.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/appAssetLibraryImages/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## HTTP Body

Content type: `application/json`

Type: `AppAssetLibraryImageUpdateRequest`

The request body you use to update an app asset library image.

## Response Codes

- `200` OK — `AppAssetLibraryImageResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Uploading and managing image assets](uploading-and-managing-image-assets.md)

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
PATCH https://api.appstoreconnect.apple.com/v1/appAssetLibraryImages/f4000005-e036-8f0b-8018-d259974bee61

{
  "data": {
    "type": "appAssetLibraryImages",
    "id": "f4000005-e036-8f0b-8018-d259974bee61",
    "attributes": {
      "uploaded": true
    }
  }
}
```

**Response**

```json
{
  "data" : {
    "type" : "appAssetLibraryImages",
    "id" : "f4000005-e036-8f0b-8018-d259974bee61",
    "attributes" : {
      "category" : "APP_SCREENSHOTS_AND_PREVIEWS",
      "createdDate" : "2026-08-11T22:44:12Z",
      "lastModifiedDate" : "2026-08-11T22:44:21Z",
      "fileName" : "menu-screen-6-9.png",
      "fileSize" : 1284736,
      "imageAsset" : null,
      "referenceName" : "Menu screen",
      "specId" : null,
      "state" : "UPLOAD_COMPLETE",
      "stateDetails" : null
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/appAssetLibraryImages/f4000005-e036-8f0b-8018-d259974bee61"
    }
  },
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/appAssetLibraryImages/f4000005-e036-8f0b-8018-d259974bee61"
  }
}
```

## See Also

### Creating, modifying, and deleting images

- [Create an app asset library image](post-v1-appassetlibraryimages.md): Create an app asset library image.
- [Delete an app asset library image](delete-v1-appassetlibraryimages-_id_.md): Delete an app asset library image.
