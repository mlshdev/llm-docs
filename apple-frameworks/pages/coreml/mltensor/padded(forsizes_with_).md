> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/padded(forsizes:with:)](https://developer.apple.com/documentation/coreml/mltensor/padded(forsizes:with:))

# padded(forSizes:with:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a tensor padded with the given constant according to the specified padding sizes.

## Declaration

```swift
func padded(forSizes sizes: [(before: Int, after: Int)], with value: Float) -> MLTensor
```

## Parameters

- `sizes`: An array of tuples describing the size to be inserted before and after each dimension.
- `value`: The constant value used for padding.

<a id="return-value"></a>

## Return Value

The padded tensor.

<a id="discussion"></a>

## Discussion

For example:

```swift
let x = MLTensor(shape: [2, 3], scalars: [
    1, 2, 3,
    4, 5, 6
], scalarType: Float32.self)
let y = x.padded(forSizes: [(0, 0), (2, 2)], with: 0.0)
// [[0, 0, 1, 2, 3, 0, 0],
//  [0, 0, 4, 5, 6, 0, 0]]
```

## See Also

### Padding the tensor

- [padded(forSizes:mode:)](padded%28forsizes_mode_%29.md): Returns a padded tensor according to the specified padding sizes and mode.
- [MLTensor.PaddingMode](paddingmode.md): A mode that dictates how a tensor is padded.
