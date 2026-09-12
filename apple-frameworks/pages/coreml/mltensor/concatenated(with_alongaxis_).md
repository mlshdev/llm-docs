> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/concatenated(with:alongaxis:)](https://developer.apple.com/documentation/coreml/mltensor/concatenated(with:alongaxis:))

# concatenated(with:alongAxis:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a concatenated tensor along the specified axis.

## Declaration

```swift
func concatenated(with other: MLTensor, alongAxis axis: Int = 0) -> MLTensor
```

## Parameters

- `other`: The tensor to concatenate. The tensors must have the same dimensions, except for the specified axis.
- `axis`: The axis along which to concatenate. Negative values wrap around but must be in the range `[-rank, rank)`.

## See Also

### Clamping and concatenating

- [clamped(to:)](clamped%28to_%29.md): Clamps all elements to the given lower and upper bounds, inclusively.
