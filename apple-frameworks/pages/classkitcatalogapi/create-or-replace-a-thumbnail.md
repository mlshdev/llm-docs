> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkitcatalogapi/create-or-replace-a-thumbnail](https://developer.apple.com/documentation/classkitcatalogapi/create-or-replace-a-thumbnail)

# Create or Replace a Thumbnail

**Interface language:** Data

**Framework:** ClassKit Catalog API  
**Kind:** Web Service Endpoint  
**Availability:** ClassKit 1.0+

Store an image that represents one of your app’s assignable activities.

## URL

```http
POST https://classkit-catalog.apple.com/v1/thumbnails
```

## Query Parameters

- `environment` — `string` (required): The development or production environment to use for this access. For details, see [Testing Your ClassKit Catalog Implementation](testing-your-classkit-catalog-implementation.md).
  **Allowed values:** `development`, `production`
- `thumbnailId` — `string` (required): The thumbnail identifier for the thumbnail to upload. Format this value as a URL-encoded string.

## Response Codes

- `201` Created: The request succeeded.
- `202` Accepted: The API accepted, but hasn’t completed the request. To ask for a status update later, see [Get Status](get-status.md).
- `400` Bad Request: The request contained an error.
- `403` Forbidden: The request wasn’t authorized.

<a id="Discussion"></a>

## Discussion

You can associate a thumbnail image with one or more contexts. Create an association by matching the `thumbnailId` value that you provide as a query parameter to this call with the `thumbnailId` field of a [Context.Data](context/data-data.dictionary.md) object that you upload with a call to [Create or Replace Contexts](create-or-replace-contexts.md). Upload the context that references a thumbnail before uploading the thumbnail.

Provide the thumbnail image as binary data in the request body. For example, after obtaining a web token, as [Authenticating Calls to the ClassKit Catalog API](authenticating-calls-to-the-classkit-catalog-api.md) describes, you could use the following `curl` command to upload the image in the file `catalog.png`:

```shell
% curl --request POST \
       --url 'https://classkit-catalog.apple.com/v1/thumbnails?thumbnailId=catalog.png&environment=production' \
       --header 'authorization: Bearer <JWT>' \
       --header 'content-type: image/png' \
       --data-binary '@catalog.png'
```

Follow the same guidelines for creating thumbnails as you follow when working with the ClassKit API in your app. In particular, provide images that are at least 80 x 80 pixels, and no larger than 330 x 330 pixels. The system ignores thumbnails that are too small, and scales down thumbnails that are too large. Use a thumbnail with the maximum dimensions to produce the best result across devices.

If you delete every context that references a thumbnail, the system automatically deletes the thumbnail image as well.

## See Also

### Uploading Thumbnails

- [Get a Thumbnail](get-a-thumbnail.md): Fetch the image for one of your app’s assignable activities.
- [Delete a Thumbnail](delete-a-thumbnail.md): Remove one of the images for your app’s assignable activities.
