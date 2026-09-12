> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/faceobservation](https://developer.apple.com/documentation/vision/faceobservation)

# FaceObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An image-analysis request that identifies facial features in an image.

## Declaration

```swift
struct FaceObservation
```

## Topics

### Creating an observation

- [init(\_:)](faceobservation/init%28__%29.md): Creates a face observation.
- [init(boundingBox:revision:)](faceobservation/init%28boundingbox_revision_%29.md): Creates a face observation from its bounding box.

### Inspecting an observation

- [RequestDescriptor](requestdescriptor.md): A type that describes the request and revision combination.
- [FaceObservation.Landmarks2D](faceobservation/landmarks2d.md): A collection of facial features that a request detects.
- [landmarks](faceobservation/landmarks.md): The facial features of the detected face.
- [pitch](faceobservation/pitch.md): The pitch angle of a face.
- [roll](faceobservation/roll.md): The roll angle of a face.
- [yaw](faceobservation/yaw.md): The yaw angle of a face.

### Getting the capture quality

- [captureQuality](faceobservation/capturequality-swift.property.md): The quality of the face capture.
- [FaceObservation.CaptureQuality](faceobservation/capturequality-swift.struct.md): An indicator of the quality of a face capture.

## Relationships

### Conforms To

- [BoundingBoxProviding](boundingboxproviding.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VisionObservation](visionobservation.md)
