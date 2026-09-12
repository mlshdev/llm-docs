> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/humanobservation](https://developer.apple.com/documentation/vision/humanobservation)

# HumanObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An object that represents a person that the request detects.

## Declaration

```swift
struct HumanObservation
```

## Topics

### Creating an observation

- [init(\_:)](humanobservation/init%28__%29.md): Creates a human observation.
- [init(boundingBox:revision:)](humanobservation/init%28boundingbox_revision_%29.md)

### Inspecting an observation

- [RequestDescriptor](requestdescriptor.md): A type that describes the request and revision combination.
- [isUpperBodyOnly](humanobservation/isupperbodyonly.md): A Boolean value that indicates whether the observation represents an upper-body or full-body rectangle.

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
