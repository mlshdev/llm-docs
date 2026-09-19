> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/concatenate(_:axis:)

# concatenate(\_:axis:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a concatenation operation to the current graph.

## Declaration

```swift
func concatenate<T>(_ tensors: [BNNSGraph.Builder.Tensor<T>], axis: Int) -> BNNSGraph.Builder.Tensor<T> where T : BNNSScalar
```

## Parameters

- `tensors`: An array that contains the tensors that the operation concatenates.
- `axis`: The axis along which the operation performs concatenation.
