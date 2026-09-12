> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/paddingmode/constant(_:)](https://developer.apple.com/documentation/coreml/mltensor/paddingmode/constant(_:))

# MLTensor.PaddingMode.constant(\_:)

**Framework:** Core ML  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Pads the input tensor boundaries with a constant value.

## Declaration

```swift
case constant(Float)
```

## See Also

### Padding modes

- [MLTensor.PaddingMode.reflection](reflection.md): Pads the input tensor using the reflection of the input boundary.
- [MLTensor.PaddingMode.symmetric](symmetric.md): Pads the input tensor using the reflection of the input, including the edge value.
