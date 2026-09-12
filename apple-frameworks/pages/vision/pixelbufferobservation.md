> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/pixelbufferobservation](https://developer.apple.com/documentation/vision/pixelbufferobservation)

# PixelBufferObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An object that represents an image that an image-analysis request produces.

## Declaration

```swift
struct PixelBufferObservation
```

## Topics

### Creating an observation

- [init(\_:)](pixelbufferobservation/init%28__%29.md): Creates a pixel buffer observation.

### Inspecting an observation

- [RequestDescriptor](requestdescriptor.md): A type that describes the request and revision combination.
- [cgImage](pixelbufferobservation/cgimage.md): A Core Graphics image created from the pixel buffer observation.
- [pixelFormat](pixelbufferobservation/pixelformat.md): The four-character code that identifies the pixel format.
- [pixelBuffer](pixelbufferobservation/pixelbuffer.md)
- [size](pixelbufferobservation/size.md): The size of the image.

### Getting pixel data

- [pixel(at:)](pixelbufferobservation/pixel%28at_%29.md): Returns the pixel data for the specified location in the image.

### Accessing the memory

- [withUnsafePointer(\_:)](pixelbufferobservation/withunsafepointer%28__%29.md): Deprecated. Invokes the given closure with a pointer to the given argument.

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

## See Also

### Understanding the result

- [ClassificationObservation](classificationobservation.md): An object that represents classification information that an image-analysis request produces.
- [CoreMLFeatureValueObservation](coremlfeaturevalueobservation.md): An object that represents a collection of key-value information that a Core ML image-analysis request produces.
