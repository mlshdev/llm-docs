> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/retentionmessaging/alttext

# altText

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Type  
**Availability:** Retention Messaging API 1.0+

The alternative text for a corresponding image.

## Declaration

```
string altText
```

<a id="Discussion"></a>

## Discussion

Provide the `altText` as a UTF-8-encoded string. The maximum string length for `altText` is `150`.

## See Also

### Images

- [imageIdentifier](imageidentifier.md): A unique identifier for an image that you provide when you upload the image.
- [imageState](imagestate.md): The approval state of an image.
- [imageSize](imagesize.md): The size of an image.
