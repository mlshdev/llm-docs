> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/resizemethod](https://developer.apple.com/documentation/coreml/mltensor/resizemethod)

# MLTensor.ResizeMethod

**Framework:** Core ML  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A resize algorithm.

## Declaration

```swift
enum ResizeMethod
```

## Topics

### Resize methods

- [MLTensor.ResizeMethod.bilinear(alignCorners:)](resizemethod/bilinear%28aligncorners_%29.md): The bilinear interpolation mode where values are computed using bilinear interpolation of 4 neighboring pixels.
- [MLTensor.ResizeMethod.nearestNeighbor](resizemethod/nearestneighbor.md): The nearest interpolation mode where values are interpolated using the closest neighbor pixel.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Resizing the tensor

- [resized(to:method:)](resized%28to_method_%29.md): Resize the tensor’s spatial dimensions to size using the specified method.
