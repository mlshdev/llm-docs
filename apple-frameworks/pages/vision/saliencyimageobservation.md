> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/saliencyimageobservation](https://developer.apple.com/documentation/vision/saliencyimageobservation)

# SaliencyImageObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An observation that contains a grayscale heat map of important areas across an image.

## Declaration

```swift
struct SaliencyImageObservation
```

## Topics

### Creating an observation

- [init(\_:)](saliencyimageobservation/init%28__%29.md): Creates a saliency image observation.

### Inspecting an observation

- [RequestDescriptor](requestdescriptor.md): A type that describes the request and revision combination.
- [heatMap](saliencyimageobservation/heatmap.md): A grayscale heat map of important areas across the image.
- [PixelBufferObservation](pixelbufferobservation.md): An object that represents an image that an image-analysis request produces.
- [salientObjects](saliencyimageobservation/salientobjects.md): A collection of objects describing the distinct areas of the saliency heat map.
- [RectangleObservation](rectangleobservation.md): An object that represents the four vertices of a detected rectangle.

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
