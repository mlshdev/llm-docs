> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/reshaped(to:)](https://developer.apple.com/documentation/coreml/mltensor/reshaped(to:))

# reshaped(to:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Reshape to the specified shape.

## Declaration

```swift
func reshaped(to newShape: [Int]) -> MLTensor
```

## Parameters

- `newShape`: The new shape of the array. The number of scalars matches the new shape.

<a id="discussion"></a>

## Discussion

For example:

```swift
let x = MLTensor(shape: [2], scalars: [1, 2], scalarType: Float.self)
let y = x.reshaped(at: [1, 2, 1])
y.shape // is [1, 2, 1]
```

## See Also

### Reshaping the tensor

- [flattened()](flattened%28%29.md): Reshape to a one-dimensional tensor.
