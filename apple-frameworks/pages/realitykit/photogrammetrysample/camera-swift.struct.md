> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysample/camera-swift.struct](https://developer.apple.com/documentation/realitykit/photogrammetrysample/camera-swift.struct)

# PhotogrammetrySample.Camera

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

A read-only data structure representing metadata about the camera used to capture the RGB `image`. All transforms are tagged by the `sessionID` and are only commensurate between samples with the same `sessionID`.

## Declaration

```swift
struct Camera
```

## Topics

### Instance Properties

- [calibrationData](camera-swift.struct/calibrationdata.md): The calibration data (distortion parameters, etc) for this camera if available.
- [id](camera-swift.struct/id.md): Value identifying the capture device within the `sessionID` in case there are more than 1.
- [intrinsics](camera-swift.struct/intrinsics.md): A matrix that converts between the 2D camera plane and the 3D world coordinate space defined by the `sessionID`.
- [transform](camera-swift.struct/transform.md): The 4x4 homogeneous transform matrix consisting of rotation and translation factors that maps the local camera device coordinate system position and orientation into the world coordinate space tagged by `sessionID`.
