> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/getimagelistresponseitem](https://developer.apple.com/documentation/retentionmessaging/getimagelistresponseitem)

# GetImageListResponseItem

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Object  
**Availability:** Retention Messaging API 1.0+

An image identifier and state information for an image.

## Declaration

```
object GetImageListResponseItem
```

## Properties

- `imageIdentifier` — `imageIdentifier`: The identifier of the image.
- `imageSize` — `imageSize`: The size of the image.
  **Default:** `FULL_SIZE`
- `imageState` — `imageState`: The current state of the image.

## Mentioned In

- [Retention Messaging API changelog](retention-messaging-changelog.md)

<a id="Discussion"></a>

## Discussion

The [Get Image List](get-image-list.md) endpoint returns an array of these values in its response.

## See Also

### Image configuration

- [Upload Image](upload-image.md): Uploads an image to use for retention messaging.
- [Delete Image](delete-image.md): Deletes a previously uploaded image.
- [Get Image List](get-image-list.md): Gets the image identifier and state for all uploaded images.
- [GetImageListResponse](getimagelistresponse.md): A response that contains status information for all images.
