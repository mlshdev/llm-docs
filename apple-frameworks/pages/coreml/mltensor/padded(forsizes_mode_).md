> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/padded(forsizes:mode:)](https://developer.apple.com/documentation/coreml/mltensor/padded(forsizes:mode:))

# padded(forSizes:mode:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a padded tensor according to the specified padding sizes and mode.

## Declaration

```swift
func padded(forSizes sizes: [(before: Int, after: Int)], mode: MLTensor.PaddingMode) -> MLTensor
```

## Parameters

- `sizes`: An array of tuples describing the size to be inserted before and after each dimension.
- `mode`: The mode of padding, etiher constant, reflection, or symmetric.

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

let constantPadding = x.padded(forSizes: [(0, 0), (2, 2)], mode: .constant(Float(0)))
// [[0, 0, 1, 2, 3, 0, 0],
//  [0, 0, 4, 5, 6, 0, 0]]

let reflectionPadding = x.padded(forSizes: [(0, 0), (2, 2)], mode: .reflection)
// [[3, 2, 1, 2, 3, 2, 1],
//  [6, 5, 4, 5, 6, 5, 4]]

let symmetricPadding = x.padded(forSizes: [(0, 0), (2, 2)], mode: .symmetric)
// [[2, 1, 1, 2, 3, 3, 2],
//  [5, 4, 4, 5, 6, 6, 5]]
```

## See Also

### Padding the tensor

- [padded(forSizes:with:)](padded%28forsizes_with_%29.md): Returns a tensor padded with the given constant according to the specified padding sizes.
- [MLTensor.PaddingMode](paddingmode.md): A mode that dictates how a tensor is padded.
