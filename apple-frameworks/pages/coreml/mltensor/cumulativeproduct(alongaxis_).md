> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/cumulativeproduct(alongaxis:)](https://developer.apple.com/documentation/coreml/mltensor/cumulativeproduct(alongaxis:))

# cumulativeProduct(alongAxis:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Computes the cumulative product along the specified axis.

## Declaration

```swift
func cumulativeProduct(alongAxis axis: Int = 0) -> MLTensor
```

## Parameters

- `axis`: The axis along which to perform the cumulative product. The default value is `0`. Must be in the range `[-rank, rank)` and have a rank greater than zero.

<a id="return-value"></a>

## Return Value

The result of the cumulative product operation.

<a id="discussion"></a>

## Discussion

The scalar type of the tensor must be numeric.

For example:

```swift
MLTensor([1, 2, 3]).cumulativeProduct() = [1, 1 * 2, 1 * 2 * 3]
```

## See Also

### Computing the cumulative value

- [cumulativeSum(alongAxis:)](cumulativesum%28alongaxis_%29.md): Computes the cumulative sum along the specified axis.
