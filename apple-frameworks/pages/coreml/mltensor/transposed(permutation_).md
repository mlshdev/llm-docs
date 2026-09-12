> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/transposed(permutation:)](https://developer.apple.com/documentation/coreml/mltensor/transposed(permutation:))

# transposed(permutation:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Permutes the dimensions of the tensor in the specified order.

## Declaration

```swift
func transposed(permutation: Int...) -> MLTensor
```

## Parameters

- `permutation`: An array of integers defining the permutation, must be of length `rank` and define a valid permutation.

<a id="return-value"></a>

## Return Value

A permuted tensor.

<a id="discussion"></a>

## Discussion

For example:

```swift
let x = MLTensor(shape: [1, 2, 3], scalars: [1, 2, 3, 4, 5, 6], scalarType: Float.self)
let y = x.transposed(1, 0, 2)
y.shape // is [2, 1, 3]
```

## See Also

### Transposing the tensor

- [transposed()](transposed%28%29.md): Permutes the tensor with dimensions permuted in reverse order.
