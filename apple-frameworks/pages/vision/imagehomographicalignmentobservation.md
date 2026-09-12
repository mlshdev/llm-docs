> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/imagehomographicalignmentobservation](https://developer.apple.com/documentation/vision/imagehomographicalignmentobservation)

# ImageHomographicAlignmentObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An object that represents a perspective warp transformation.

## Declaration

```swift
struct ImageHomographicAlignmentObservation
```

<a id="overview"></a>

## Overview

This type of observation results from a [TrackHomographicImageRegistrationRequest](trackhomographicimageregistrationrequest.md), informing the [warpTransform](imagehomographicalignmentobservation/warptransform.md) performed to align the input images.

## Topics

### Creating an observation

- [init(\_:)](imagehomographicalignmentobservation/init%28__%29.md): Creates a homographic alignment observation.

### Inspecting an observation

- [warpTransform](imagehomographicalignmentobservation/warptransform.md): The warp transform matrix to morph the floating image into the reference image.

### Applying a transform

- [applyTransform(to:)](imagehomographicalignmentobservation/applytransform%28to_%29.md): Applies the transform to an image.

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
