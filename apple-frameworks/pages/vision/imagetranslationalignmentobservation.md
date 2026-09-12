> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/imagetranslationalignmentobservation](https://developer.apple.com/documentation/vision/imagetranslationalignmentobservation)

# ImageTranslationAlignmentObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Affine transform information that an image-alignment request produces.

## Declaration

```swift
struct ImageTranslationAlignmentObservation
```

<a id="overview"></a>

## Overview

This type of observation results from a [TrackTranslationalImageRegistrationRequest](tracktranslationalimageregistrationrequest.md), informing the [alignmentTransform](imagetranslationalignmentobservation/alignmenttransform.md) performed to align the input images.

## Topics

### Creating an observation

- [init(\_:)](imagetranslationalignmentobservation/init%28__%29.md): Creates a translation alignment observation.

### Inspecting an observation

- [alignmentTransform](imagetranslationalignmentobservation/alignmenttransform.md): The alignment transform to align the floating image with the reference image.

### Applying a transform

- [applyTransform(to:)](imagetranslationalignmentobservation/applytransform%28to_%29.md): Applies the transform to an image.

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
