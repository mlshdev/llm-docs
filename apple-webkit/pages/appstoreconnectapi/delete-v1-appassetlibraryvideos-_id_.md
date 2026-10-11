> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-appassetlibraryvideos-_id_

# Delete an app asset library video

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.5+

Delete an app asset library video.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/appAssetLibraryVideos/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Response Codes

- `204` No Content:
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
DELETE https://api.appstoreconnect.apple.com/v1/appAssetLibraryVideos/3b100005-e036-8f0b-8021-77aa41c6b502
```

**Response**

```
HTTP/1.1 204 No Content
```

## See Also

### Creating, modifying, and deleting videos

- [Create an app asset library video](post-v1-appassetlibraryvideos.md): Create an app asset library video.
- [Modify an app asset library video](patch-v1-appassetlibraryvideos-_id_.md): Update an app asset library video.
