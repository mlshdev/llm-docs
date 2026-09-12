> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/cameraframe](https://developer.apple.com/documentation/arkit/cameraframe)

# CameraFrame

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

The representation of a camera frame.

## Declaration

```swift
struct CameraFrame
```

## Topics

### Getting camera frame information

- [primarySample](cameraframe/primarysample.md): Gets the primary frame sample for a camera frame.
- [CameraFrame.Sample](cameraframe/sample.md): Information that describes a sample from a camera frame.
- [sample(for:)](cameraframe/sample%28for_%29.md): Returns the camera frame sample for a given camera position.
- [description](cameraframe/description.md): A textual representation of this camera frame.

### Operators

- [==(\_:\_:)](cameraframe/==%28____%29.md): Returns a Boolean value indicating whether two camera frames are equal.

### Instance Properties

- [samples](cameraframe/samples.md): All the camera frame samples on this frame.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Camera sampling

- [CameraFrameProvider](cameraframeprovider.md): An object that provides camera streams.
- [CameraVideoFormat](cameravideoformat.md): A structure that represents a camera video format.
