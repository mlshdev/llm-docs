> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysample/gravity](https://developer.apple.com/documentation/realitykit/photogrammetrysample/gravity)

# gravity

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An image’s gravity vector.

## Declaration

```swift
var gravity: CMAcceleration? { get set }
```

<a id="discussion"></a>

## Discussion

Some cameras, including iPhone cameras, capture a gravity vector for each image. This vector indicates the orientation of the camera at the moment you took the picture. RealityKit uses this gravity vector to improve landmark matching with the other images in the session.

## See Also

### Describing the sample

- [image](image.md): The image data for this sample.
- [metadata](metadata.md): An image’s EXIF metadata.
- [depthDataMap](depthdatamap.md): The image’s depth data.
- [objectMask](objectmask.md): The image’s object mask.
