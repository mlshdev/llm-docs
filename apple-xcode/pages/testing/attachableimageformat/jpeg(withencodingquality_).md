> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/testing/attachableimageformat/jpeg(withencodingquality:)

# jpeg(withEncodingQuality:)

**Framework:** Swift Testing  
**Kind:** Type Method  
**Availability:** Swift 6.3+ · Xcode 26.4+

The JPEG image format.

## Declaration

```swift
static func jpeg(withEncodingQuality encodingQuality: Float) -> AttachableImageFormat
```

## Parameters

- `encodingQuality`: The encoding quality to use when serializing an image. A value of `0.0` indicates the lowest supported encoding quality and a value of `1.0` indicates the highest supported encoding quality.

<a id="return-value"></a>

## Return Value

An instance of this type representing the JPEG image format with the specified encoding quality.
