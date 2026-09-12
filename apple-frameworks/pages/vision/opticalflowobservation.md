> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/opticalflowobservation](https://developer.apple.com/documentation/vision/opticalflowobservation)

# OpticalFlowObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An object that represents an optical flow that an image-analysis request produces.

## Declaration

```swift
struct OpticalFlowObservation
```

<a id="overview"></a>

## Overview

The optical flow is a 2D image, with each pixel representing the directional change from a previous to current image.

## Topics

### Creating an observation

- [init(\_:)](opticalflowobservation/init%28__%29.md): Creates an optical flow observation.

### Inspecting an observation

- [pixelFormat](opticalflowobservation/pixelformat.md): The four-character code that identifies the pixel format.
- [pixelBuffer](opticalflowobservation/pixelbuffer.md)
- [size](opticalflowobservation/size.md): The size of the observation image.

### Getting the optical flow

- [flow(at:)](opticalflowobservation/flow%28at_%29.md): Returns the optical flow for the specified location in the observation image.

### Accessing the memory

- [withUnsafePointer(\_:)](opticalflowobservation/withunsafepointer%28__%29.md): Deprecated. Invokes the given closure with a pointer to the given argument.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VisionObservation](visionobservation.md)
