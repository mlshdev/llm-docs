> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/paddingmode](https://developer.apple.com/documentation/coreml/mltensor/paddingmode)

# MLTensor.PaddingMode

**Framework:** Core ML  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A mode that dictates how a tensor is padded.

## Declaration

```swift
enum PaddingMode
```

## Topics

### Padding modes

- [MLTensor.PaddingMode.constant(\_:)](paddingmode/constant%28__%29.md): Pads the input tensor boundaries with a constant value.
- [MLTensor.PaddingMode.reflection](paddingmode/reflection.md): Pads the input tensor using the reflection of the input boundary.
- [MLTensor.PaddingMode.symmetric](paddingmode/symmetric.md): Pads the input tensor using the reflection of the input, including the edge value.

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

### Padding the tensor

- [padded(forSizes:mode:)](padded%28forsizes_mode_%29.md): Returns a padded tensor according to the specified padding sizes and mode.
- [padded(forSizes:with:)](padded%28forsizes_with_%29.md): Returns a tensor padded with the given constant according to the specified padding sizes.
