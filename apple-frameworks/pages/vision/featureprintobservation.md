> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/featureprintobservation](https://developer.apple.com/documentation/vision/featureprintobservation)

# FeaturePrintObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An observation that provides the recognized feature print.

## Declaration

```swift
struct FeaturePrintObservation
```

## Topics

### Creating an observation

- [init(\_:)](featureprintobservation/init%28__%29.md): Creates a feature print observation.

### Inspecting an observation

- [data](featureprintobservation/data.md): The feature print data.
- [elementCount](featureprintobservation/elementcount.md): The total number of elements in the data.
- [elementType](featureprintobservation/elementtype.md): The type of each element in the data.
- [ElementType](elementtype.md): The type of element in feature print data.

### Getting the distance

- [distance(to:)](featureprintobservation/distance%28to_%29.md): Computes the distance between two feature print observations.

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
