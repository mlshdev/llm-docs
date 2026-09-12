> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/horizonobservation](https://developer.apple.com/documentation/vision/horizonobservation)

# HorizonObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The horizon angle information that an image-analysis request detects.

## Declaration

```swift
struct HorizonObservation
```

<a id="overview"></a>

## Overview

Instances of this class result from invoking a [DetectHorizonRequest](detecthorizonrequest.md), and report the angle and transform of the horizon in an image.

## Topics

### Creating an observation

- [init(\_:)](horizonobservation/init%28__%29.md): Creates a horizon observation.

### Inspecting an observation

- [angle](horizonobservation/angle.md): The angle of the observed horizon.

### Getting the transform

- [transform](horizonobservation/transform.md): The transform to apply to the detected horizon.
- [transform(for:)](horizonobservation/transform%28for_%29.md): Creates an affine transform for the specified image width and height.

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
