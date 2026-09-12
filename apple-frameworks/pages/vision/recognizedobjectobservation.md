> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizedobjectobservation](https://developer.apple.com/documentation/vision/recognizedobjectobservation)

# RecognizedObjectObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An observation with an array of classification labels that classify the recognized object.

## Declaration

```swift
struct RecognizedObjectObservation
```

<a id="overview"></a>

## Overview

The confidence of the classifications sum up to `1.0`. Multiply the classification confidence with the confidence of this observation.

## Topics

### Creating an observation

- [init(\_:)](recognizedobjectobservation/init%28__%29.md): Creates a recognized object observation.

### Inspecting an observation

- [RequestDescriptor](requestdescriptor.md): A type that describes the request and revision combination.
- [labels](recognizedobjectobservation/labels.md): The classification of the recognized object.
- [ClassificationObservation](classificationobservation.md): An object that represents classification information that an image-analysis request produces.

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
