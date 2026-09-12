> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/attachableimageformat/init(contenttype:encodingquality:)](https://developer.apple.com/documentation/testing/attachableimageformat/init(contenttype:encodingquality:))

# init(contentType:encodingQuality:)

**Framework:** Testing  
**Kind:** Initializer  
**Availability:** Swift 6.3+ · Xcode 26.4+

Initialize an instance of this type with the given content type and encoding quality.

## Declaration

```swift
init(contentType: UTType, encodingQuality: Float = 1.0)
```

## Parameters

- `contentType`: The image format to use when encoding images.
- `encodingQuality`: The encoding quality to use when encoding images. For the lowest supported quality, pass `0.0`. For the highest supported quality, pass `1.0`.

<a id="discussion"></a>

## Discussion

If the target image format does not support variable-quality encoding, the value of the `encodingQuality` argument is ignored.

If `contentType` does not conform to [UTType.image](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/image), the result is undefined.
