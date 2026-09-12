> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/transposed()](https://developer.apple.com/documentation/coreml/mltensor/transposed())

# transposed()

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Permutes the tensor with dimensions permuted in reverse order.

## Declaration

```swift
func transposed() -> MLTensor
```

<a id="return-value"></a>

## Return Value

A permuted tensor.

<a id="discussion"></a>

## Discussion

For example:

```swift
let x = MLTensor(shape: [1, 2, 3], scalars: [1, 2, 3, 4, 5, 6], scalarType: Float.self)
let y = x.transposed()
y.shape // is [3, 2, 1]
```

## See Also

### Transposing the tensor

- [transposed(permutation:)](transposed%28permutation_%29.md): Permutes the dimensions of the tensor in the specified order.
