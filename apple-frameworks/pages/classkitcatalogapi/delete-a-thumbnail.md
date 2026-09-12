> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkitcatalogapi/delete-a-thumbnail](https://developer.apple.com/documentation/classkitcatalogapi/delete-a-thumbnail)

# Delete a Thumbnail

**Interface language:** Data

**Framework:** ClassKit Catalog API  
**Kind:** Web Service Endpoint  
**Availability:** ClassKit 1.0+

Remove one of the images for your app’s assignable activities.

## URL

```http
DELETE https://classkit-catalog.apple.com/v1/thumbnails
```

## Query Parameters

- `environment` — `string` (required): The development or production environment to use for this access. For details, see [Testing Your ClassKit Catalog Implementation](testing-your-classkit-catalog-implementation.md).
  **Allowed values:** `development`, `production`
- `thumbnailId` — `string` (required): The thumbnail identifier for the thumbnail to delete. Format this value as a URL-encoded string.

## Response Codes

- `202` Accepted: The API accepted but hasn’t completed the request. To ask for a status update later, see [Get Status](get-status.md).
- `204` No Content: The request succeeded.
- `400` Bad Request: The request contained an error.
- `403` Forbidden: The request wasn’t authorized.

## See Also

### Uploading Thumbnails

- [Create or Replace a Thumbnail](create-or-replace-a-thumbnail.md): Store an image that represents one of your app’s assignable activities.
- [Get a Thumbnail](get-a-thumbnail.md): Fetch the image for one of your app’s assignable activities.
