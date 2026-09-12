> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/getimagelistresponse](https://developer.apple.com/documentation/retentionmessaging/getimagelistresponse)

# GetImageListResponse

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Object  
**Availability:** Retention Messaging API 1.0+

A response that contains status information for all images.

## Declaration

```
object GetImageListResponse
```

## Properties

- `imageIdentifiers` — `[GetImageListResponseItem]`: An array of all image identifiers and their image state.

<a id="Discussion"></a>

## Discussion

The [Get Image List](get-image-list.md) endpoint returns this response.

## See Also

### Image configuration

- [Upload Image](upload-image.md): Uploads an image to use for retention messaging.
- [Delete Image](delete-image.md): Deletes a previously uploaded image.
- [Get Image List](get-image-list.md): Gets the image identifier and state for all uploaded images.
- [GetImageListResponseItem](getimagelistresponseitem.md): An image identifier and state information for an image.
