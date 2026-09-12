> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detectedobjectobservation](https://developer.apple.com/documentation/vision/detectedobjectobservation)

# DetectedObjectObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An observation that provides the position and extent of an image feature that an image-analysis request detects.

## Declaration

```swift
struct DetectedObjectObservation
```

<a id="overview"></a>

## Overview

This class is the observation type that [TrackObjectRequest](trackobjectrequest.md) generates. It represents an object that the Vision request detects and tracks.

## Topics

### Creating an observation

- [init(\_:)](detectedobjectobservation/init%28__%29.md): Creates a detected object observation.
- [init(boundingBox:)](detectedobjectobservation/init%28boundingbox_%29.md): Creates a detected object observation with the bounding box you specify.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VisionObservation](visionobservation.md)
