> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivecameracalibration/cameratexturemapping](https://developer.apple.com/documentation/immersivemediasupport/immersivecameracalibration/cameratexturemapping)

# ImmersiveCameraCalibration.CameraTextureMapping

**Framework:** Immersive Media Support  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

A type that holds the matrices used for video frame texture mapping on the camera lens geometry.

## Declaration

```swift
struct CameraTextureMapping
```

## Topics

### Initializers

- [init(left:right:)](cameratexturemapping/init%28left_right_%29.md)

### Type Properties

- [identity](cameratexturemapping/identity.md): The default camera texture matrix for the immersive camera.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Calibration geometry

- [ImmersiveCameraCalibration.CameraOrigin](cameraorigin.md): A type that holds the position information representing the origin from which to render the calibration in 3D space relative to the person’s eye.
- [ImmersiveCameraMeshCalibration](../immersivecamerameshcalibration.md): Calibration mesh geometry based on USDZ data.
