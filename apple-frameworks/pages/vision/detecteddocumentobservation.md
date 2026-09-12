> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detecteddocumentobservation](https://developer.apple.com/documentation/vision/detecteddocumentobservation)

# DetectedDocumentObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The heat map that’s a pixel buffer in a one-component floating-point pixel format.

## Declaration

```swift
struct DetectedDocumentObservation
```

<a id="overview"></a>

## Overview

The observation includes the four corner points of a document’s quadrilateral and saliency masks.

## Topics

### Creating an observation

- [init(\_:)](detecteddocumentobservation/init%28__%29.md): Creates a detected document observation.

### Inspecting an observation

- [RequestDescriptor](requestdescriptor.md): A type that describes the request and revision combination.
- [globalSegmentationMask](detecteddocumentobservation/globalsegmentationmask.md): A pixel buffer representing a segmentation mask for the detected document.
- [PixelBufferObservation](pixelbufferobservation.md): An object that represents an image that an image-analysis request produces.

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
