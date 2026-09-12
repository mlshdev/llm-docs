> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/rectangleobservation](https://developer.apple.com/documentation/vision/rectangleobservation)

# RectangleObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An object that represents the four vertices of a detected rectangle.

## Declaration

```swift
struct RectangleObservation
```

## Topics

### Creating an observation

- [init(\_:)](rectangleobservation/init%28__%29.md): Creates a rectangle observation.
- [init(topLeft:topRight:bottomRight:bottomLeft:)](rectangleobservation/init%28topleft_topright_bottomright_bottomleft_%29.md): Creates a rectangle observation from its corner points.

### Inspecting an observation

- [RequestDescriptor](requestdescriptor.md): A type that describes the request and revision combination.

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
