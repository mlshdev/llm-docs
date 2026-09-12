> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/imageaestheticsscoresobservation](https://developer.apple.com/documentation/vision/imageaestheticsscoresobservation)

# ImageAestheticsScoresObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An observation that provides an overall score of aesthetic attributes for an image.

## Declaration

```swift
struct ImageAestheticsScoresObservation
```

## Topics

### Creating an observation

- [init(\_:)](imageaestheticsscoresobservation/init%28__%29.md): Creates an image aesthetics scores observation.

### Inspecting an observation

- [RequestDescriptor](requestdescriptor.md): A type that describes the request and revision combination.
- [isUtility](imageaestheticsscoresobservation/isutility.md): A Boolean value that represents images that are not necessarily of poor image quality, but may not have memorable or exciting content.
- [overallScore](imageaestheticsscoresobservation/overallscore.md): A score which incorporates aesthetic score, failure score, and utility labels.

## Relationships

### Conforms To

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
