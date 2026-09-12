> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/imagesize](https://developer.apple.com/documentation/retentionmessaging/imagesize)

# imageSize

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Type  
**Availability:** Retention Messaging API 1.4+

The size of an image.

## Declaration

```
string imageSize
```

## Possible Values

- `FULL_SIZE`: 3840 pixels in width, and from 160 to 2160 pixels in height, inclusive.
- `BULLET_POINT`: 1024 by 1024 pixels, to use for bullet points only.

## Mentioned In

- [Retention Messaging API changelog](retention-messaging-changelog.md)

<a id="discussion"></a>

## Discussion

Specify the `FULL_SIZE` image size when you upload an image to appear above the message body.

Specify the `BULLET_POINT` size when you upload an image to use as a bullet point icon.

For more information, see [Upload Image](upload-image.md) and [BulletPoint](bulletpoint.md).

## See Also

### Images

- [imageIdentifier](imageidentifier.md): A unique identifier for an image that you provide when you upload the image.
- [imageState](imagestate.md): The approval state of an image.
- [altText](alttext.md): The alternative text for a corresponding image.
