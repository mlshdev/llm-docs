> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/reversed(alongaxes:)](https://developer.apple.com/documentation/coreml/mltensor/reversed(alongaxes:))

# reversed(alongAxes:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a new tensor with the specified dimensions reversed.

## Declaration

```swift
func reversed(alongAxes axes: Int...) -> MLTensor
```

## Parameters

- `axes`: The indices of the dimensions to reverse. Must be in the range `[-rank, rank)`.

<a id="return-value"></a>

## Return Value

A new tensor with the same shape and scalar type with the specified dimensions reversed.

<a id="discussion"></a>

## Discussion

For example:

```swift
let x = MLTensor(shape: [4], scalars: [0,  1,  2,  3], scalarType: Float.self)
let y = x.reversed(alongAxes: 0)
// [3, 2, 1, 0]
```
