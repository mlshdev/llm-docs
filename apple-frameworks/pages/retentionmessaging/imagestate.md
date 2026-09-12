> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/imagestate](https://developer.apple.com/documentation/retentionmessaging/imagestate)

# imageState

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Type  
**Availability:** Retention Messaging API 1.0+

The approval state of an image.

## Declaration

```
string imageState
```

## Possible Values

- `PENDING`: The image is awaiting approval.
- `APPROVED`: The image is approved.
- `REJECTED`: The image is rejected.

## Mentioned In

- [Setting up retention messages](setting-up-retention-messages.md)

<a id="discussion"></a>

## Discussion

Call [Get Image List](get-image-list.md) to get the list of images and their current state.

## See Also

### Images

- [imageIdentifier](imageidentifier.md): A unique identifier for an image that you provide when you upload the image.
- [imageSize](imagesize.md): The size of an image.
- [altText](alttext.md): The alternative text for a corresponding image.
