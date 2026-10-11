> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-appassetlibraryimages-_id_

# Delete an app asset library image

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.5+

Delete an app asset library image.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/appAssetLibraryImages/{id}
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

- [Uploading and managing image assets](uploading-and-managing-image-assets.md)

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
DELETE https://api.appstoreconnect.apple.com/v1/appAssetLibraryImages/f4000005-e036-8f0b-8018-d259974bee61
```

**Response**

```
HTTP/1.1 204 No Content
```

## See Also

### Creating, modifying, and deleting images

- [Create an app asset library image](post-v1-appassetlibraryimages.md): Create an app asset library image.
- [Modify an app asset library image](patch-v1-appassetlibraryimages-_id_.md): Update an app asset library image.
