> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/classificationobservation](https://developer.apple.com/documentation/vision/classificationobservation)

# ClassificationObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An object that represents classification information that an image-analysis request produces.

## Declaration

```swift
struct ClassificationObservation
```

## Topics

### Creating an observation

- [init(\_:)](classificationobservation/init%28__%29.md): Creates a classification observation.

### Inspecting an observation

- [RequestDescriptor](requestdescriptor.md): A type that describes the request and revision combination.
- [hasPrecisionRecallCurve](classificationobservation/hasprecisionrecallcurve.md): A Boolean value that indicates whether the observation contains precision and recall curves.
- [identifier](classificationobservation/identifier.md): The classification label that identifies the type of observation.

### Determining precision and recall

- [hasMinimumPrecision(\_:forRecall:)](classificationobservation/hasminimumprecision%28__forrecall_%29.md): Determines whether the observation has a minimum precision value for a specific recall.
- [hasMinimumRecall(\_:forPrecision:)](classificationobservation/hasminimumrecall%28__forprecision_%29.md): Determines whether the observation has a minimum recall value for a specific precision.

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
