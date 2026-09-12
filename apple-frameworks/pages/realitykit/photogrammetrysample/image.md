> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysample/image](https://developer.apple.com/documentation/realitykit/photogrammetrysample/image)

# image

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The image data for this sample.

## Declaration

```swift
let image: CVPixelBuffer
```

<a id="discussion"></a>

## Discussion

Provide image data in the [kCVPixelFormatType_32BGRA](../../corevideo/kcvpixelformattype_32bgra.md) or [kCVPixelFormatType_32ARGB](../../corevideo/kcvpixelformattype_32argb.md) pixel formats.

## See Also

### Describing the sample

- [metadata](metadata.md): An image’s EXIF metadata.
- [depthDataMap](depthdatamap.md): The image’s depth data.
- [gravity](gravity.md): An image’s gravity vector.
- [objectMask](objectmask.md): The image’s object mask.
