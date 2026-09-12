> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/textobservation](https://developer.apple.com/documentation/vision/textobservation)

# TextObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Information about regions of text that an image-analysis request detects.

## Declaration

```swift
struct TextObservation
```

## Topics

### Creating an observation

- [init(\_:)](textobservation/init%28__%29.md): Creates a text observation.

### Inspecting an observation

- [characterBoxes](textobservation/characterboxes.md): An array of detected individual character bounding boxes.
- [RectangleObservation](rectangleobservation.md): An object that represents the four vertices of a detected rectangle.

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
- [QuadrilateralProviding](quadrilateralproviding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VisionObservation](visionobservation.md)
