> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/split(sizes:alongaxis:)](https://developer.apple.com/documentation/coreml/mltensor/split(sizes:alongaxis:))

# split(sizes:alongAxis:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Splits a tensor into multiple tensors. The tensor is split  into `sizes.shape[0]` parts.

## Declaration

```swift
func split(sizes: [Int], alongAxis axis: Int = 0) -> [MLTensor]
```

## Parameters

- `sizes`: A one-dimensional tensor containing the size of each split, must add up to the size of dimension `axis`.
- `axis`: The dimension along which to split this tensor. Must be in the range `[-rank, rank)`.

<a id="return-value"></a>

## Return Value

Array containing the tensors parts.

<a id="discussion"></a>

## Discussion

For example:

```
// 'value' is a tensor with shape [5, 30]
// Split 'value' into 3 tensors with sizes [4, 15, 11] along dimension 1:
let parts = value.split(sizes: [4, 15, 11], alongAxis: 1)
parts[0] // has shape [5, 4]
parts[1] // has shape [5, 15]
parts[2] // has shape [5, 11]
```

## See Also

### Splitting the tensor

- [split(count:alongAxis:)](split%28count_alongaxis_%29.md): Splits a tensor into multiple tensors. The tensor is split along dimension `axis` into `count` smaller tensors.
