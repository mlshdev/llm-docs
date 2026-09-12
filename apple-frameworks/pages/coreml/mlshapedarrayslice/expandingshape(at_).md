> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayslice/expandingshape(at:)](https://developer.apple.com/documentation/coreml/mlshapedarrayslice/expandingshape(at:))

# expandingShape(at:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

Returns a new shaped array with expanded dimensions

## Declaration

```swift
func expandingShape(at axis: Int) -> MLShapedArraySlice<Scalar>
```

<a id="discussion"></a>

## Discussion

The shape of the new `MLShapedArraySlice` gets a new dimension of 1 at the specified axis index.

```swift
let original = MLShapedArraySlice<Int32>(scalars: 0..., shape: [2, 3])
let expanded = original.expanded(alongAxis: 0)
expanded.shape // [1, 2, 3]
```

## See Also

### Shaping the array slice

- [changingLayout(to:)](changinglayout%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a copy with the specified buffer layout.
- [reshaped(to:)](reshaped%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new reshaped shaped array.
- [squeezingShape()](squeezingshape%28%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new squeezed shaped array.
- [transposed()](transposed%28%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new transposed shaped array
- [transposed(permutation:)](transposed%28permutation_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new transposed shaped array using a custom permutation.
