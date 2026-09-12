> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysample/depthdatamap](https://developer.apple.com/documentation/realitykit/photogrammetrysample/depthdatamap)

# depthDataMap

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The image’s depth data.

## Declaration

```swift
var depthDataMap: CVPixelBuffer? { get set }
```

<a id="discussion"></a>

## Discussion

Some cameras, including iPhone cameras, capture depth data in addition to image data. Providing this data can help [PhotogrammetrySession](../photogrammetrysession.md) determine the real-world scale of the photographed object and result in a correctly sized 3D object for placement in an AR scene. This property is read-only.

Depth data can be in either [kCVPixelFormatType_DisparityFloat32](../../corevideo/kcvpixelformattype_disparityfloat32.md) or [kCVPixelFormatType_DepthFloat32](../../corevideo/kcvpixelformattype_depthfloat32.md) format.

## See Also

### Describing the sample

- [image](image.md): The image data for this sample.
- [metadata](metadata.md): An image’s EXIF metadata.
- [gravity](gravity.md): An image’s gravity vector.
- [objectMask](objectmask.md): The image’s object mask.
