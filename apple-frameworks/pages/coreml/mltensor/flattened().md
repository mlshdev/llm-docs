> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/flattened()](https://developer.apple.com/documentation/coreml/mltensor/flattened())

# flattened()

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Reshape to a one-dimensional tensor.

## Declaration

```swift
func flattened() -> MLTensor
```

<a id="discussion"></a>

## Discussion

> **Note**

> Flattening a zero-dimensional tensor will return a one-dimensional tensor.

For example:

```swift
let x = MLTensor(shape: [2, 2], scalars: [1, 2, 3, 4], scalarType: Float.self)
let y = x.flattened()
y.shape // is [4]
```

## See Also

### Reshaping the tensor

- [reshaped(to:)](reshaped%28to_%29.md): Reshape to the specified shape.
