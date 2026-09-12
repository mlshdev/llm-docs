> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephoto/pixelbuffer](https://developer.apple.com/documentation/avfoundation/avcapturephoto/pixelbuffer)

# pixelBuffer (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The uncompressed or RAW image sample buffer for the photo, if requested.

## Declaration

```swift
var pixelBuffer: CVPixelBuffer? { get }
```

## Mentioned In

- [Capturing uncompressed image data](../capturing-uncompressed-image-data.md)

<a id="Discussion"></a>

## Discussion

If you requested photo capture in a RAW format, or in a processed format without compression such as TIFF, you can use this property to access the underlying sample buffer.

If you requested capture in a compressed format such as JPEG or HEVC/HEIF, this property’s value is `nil`. Use the [fileDataRepresentation()](filedatarepresentation%28%29.md) or [cgImageRepresentation()](cgimagerepresentation%28%29.md) method to obtain compressed image data.

## See Also

### Accessing photo pixel data

- [isRawPhoto](israwphoto.md): A Boolean value indicating whether this photo object contains RAW format data.

# pixelBuffer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The uncompressed or RAW image sample buffer for the photo, if requested.

## Declaration

```objectivec
@property (readonly, nullable) CVPixelBufferRef pixelBuffer;
```

## Mentioned In

- [Capturing uncompressed image data](../capturing-uncompressed-image-data.md)

<a id="Discussion"></a>

## Discussion

If you requested photo capture in a RAW format, or in a processed format without compression such as TIFF, you can use this property to access the underlying sample buffer.

If you requested capture in a compressed format such as JPEG or HEVC/HEIF, this property’s value is `nil`. Use the [fileDataRepresentation](filedatarepresentation%28%29.md) or [CGImageRepresentation](cgimagerepresentation%28%29.md) method to obtain compressed image data.

## See Also

### Accessing photo pixel data

- [rawPhoto](israwphoto.md): A Boolean value indicating whether this photo object contains RAW format data.
