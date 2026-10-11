> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appassetlibraryvideos-_id_-relationships-placements

# List the placement IDs for an app asset library video

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.5+

Get a list of placement resource IDs for a specific app asset library video.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appAssetLibraryVideos/{id}/relationships/placements
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Query Parameters

- `limit` — `integer`: The maximum number of app asset library placement resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AppAssetLibraryVideoPlacementsLinkagesResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## Mentioned In

- [Uploading and managing video assets](uploading-and-managing-video-assets.md)

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/appAssetLibraryVideos/3b100005-e036-8f0b-8021-77aa41c6b502/relationships/placements?limit=1
```

**Response**

```json
{
  "data" : [ {
    "type" : "appAssetLibraryPlacements",
    "id" : "2e000005-e036-8f0b-8f25-6dbc2baa784a"
  } ],
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/appAssetLibraryVideos/3b100005-e036-8f0b-8021-77aa41c6b502/relationships/placements",
    "related" : "https://api.appstoreconnect.apple.com/v1/appAssetLibraryVideos/3b100005-e036-8f0b-8021-77aa41c6b502/placements"
  },
  "meta" : {
    "paging" : {
      "total" : 1,
      "limit" : 1
    }
  }
}
```

## See Also

### Getting videos and reading information

- [Read an app asset library video](get-v1-appassetlibraryvideos-_id_.md): Get information about an app asset library video.
- [List related placements](get-v1-appassetlibraryvideos-_id_-placements.md): List the placements that reuse an app asset library video.
