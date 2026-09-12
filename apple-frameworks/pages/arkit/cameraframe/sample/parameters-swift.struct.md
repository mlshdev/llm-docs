> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/cameraframe/sample/parameters-swift.struct](https://developer.apple.com/documentation/arkit/cameraframe/sample/parameters-swift.struct)

# CameraFrame.Sample.Parameters

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A frame’s parameters, such as the camera type, intrinsics, timestamps, exposure, and so on.

## Declaration

```swift
struct Parameters
```

## Topics

### Getting frame parameters

- [cameraPosition](parameters-swift.struct/cameraposition.md): The camera position.
- [cameraType](parameters-swift.struct/cameratype.md)
- [captureTimestamp](parameters-swift.struct/capturetimestamp.md): The capture timestamp.
- [colorTemperature](parameters-swift.struct/colortemperature.md): The white balance correlated color temperature in kelvin.
- [exposureDuration](parameters-swift.struct/exposureduration.md): The camera frame exposure duration in seconds.
- [extrinsics](parameters-swift.struct/extrinsics.md): The camera extrinsics.
- [intrinsics](parameters-swift.struct/intrinsics.md)
- [midExposureTimestamp](parameters-swift.struct/midexposuretimestamp.md): The mid exposure timestamp.

### Operators

- [==(\_:\_:)](parameters-swift.struct/==%28____%29.md): Returns a Boolean value indicating whether two camera frame parameters are equal.

### Instance Properties

- [description](parameters-swift.struct/description.md): A textual representation of these camera frame parameters.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting camera frame samples

- [parameters](parameters-swift.property.md): The frame’s parameters.
- [pixelBuffer](pixelbuffer.md): Deprecated.
