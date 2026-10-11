> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appassetlibraries-_id_-relationships-images

# List the image IDs for an app asset library

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.5+

Get a list of image asset resource IDs for a specific asset library.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appAssetLibraries/{id}/relationships/images
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Query Parameters

- `limit` — `integer`: The maximum number of app asset library image resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AppAssetLibraryImagesLinkagesResponse`: The request completed successfully.
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
https://api.appstoreconnect.apple.com/v1/appAssetLibraries/1234567890/relationships/images?limit=2
```

**Response**

```json
{
  "data" : [ {
    "type" : "appAssetLibraryImages",
    "id" : "f4000005-e036-8f0b-8018-d259974bee61"
  }, {
    "type" : "appAssetLibraryImages",
    "id" : "c3000005-e036-8f0b-8038-36fbc8d1c4ae"
  } ],
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/appAssetLibraries/1234567890/relationships/images",
    "related" : "https://api.appstoreconnect.apple.com/v1/appAssetLibraries/1234567890/images"
  },
  "meta" : {
    "paging" : {
      "total" : 2,
      "limit" : 2
    }
  }
}
```

## See Also

### Getting assets in a library

- [List related images](get-v1-appassetlibraries-_id_-images.md): List the image assets in an app’s asset library.
- [List related videos](get-v1-appassetlibraries-_id_-videos.md): List the video assets in an app’s asset library.
- [List the video IDs for an app asset library](get-v1-appassetlibraries-_id_-relationships-videos.md): Get a list of video asset resource IDs for a specific asset library.
