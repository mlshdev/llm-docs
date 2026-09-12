> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/imageidentifier](https://developer.apple.com/documentation/retentionmessaging/imageidentifier)

# imageIdentifier

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Type  
**Availability:** Retention Messaging API 1.0+

A unique identifier for an image that you provide when you upload the image.

## Declaration

```
uuid imageIdentifier
```

<a id="discussion"></a>

## Discussion

You create a UUID to identify an image when you call [Upload Image](upload-image.md). Use this identifier to refer to the same image throughout the API.

## See Also

### Images

- [imageState](imagestate.md): The approval state of an image.
- [imageSize](imagesize.md): The size of an image.
- [altText](alttext.md): The alternative text for a corresponding image.
