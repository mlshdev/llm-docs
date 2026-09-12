> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/cameraframe/sample](https://developer.apple.com/documentation/arkit/cameraframe/sample)

# CameraFrame.Sample

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

Information that describes a sample from a camera frame.

## Declaration

```swift
struct Sample
```

<a id="overview"></a>

## Overview

Use this structure to access information about a sample from a [CameraFrame](../cameraframe.md), such as the frame’s settings and parameters, a pixel buffer that contains the sample’s data, and so on.

## Topics

### Inspecting camera frame samples

- [parameters](sample/parameters-swift.property.md): The frame’s parameters.
- [CameraFrame.Sample.Parameters](sample/parameters-swift.struct.md): A frame’s parameters, such as the camera type, intrinsics, timestamps, exposure, and so on.
- [pixelBuffer](sample/pixelbuffer.md): Deprecated.

### Operators

- [==(\_:\_:)](sample/==%28____%29.md): Returns a Boolean value indicating whether two camera frame samples are equal.

### Instance Properties

- [buffer](sample/buffer.md): The pixel buffer.
- [description](sample/description.md): A textual representation of this camera frame sample.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting camera frame information

- [primarySample](primarysample.md): Gets the primary frame sample for a camera frame.
- [sample(for:)](sample%28for_%29.md): Returns the camera frame sample for a given camera position.
- [description](description.md): A textual representation of this camera frame.
