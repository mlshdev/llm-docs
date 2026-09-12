> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarray/transposed()](https://developer.apple.com/documentation/coreml/mlshapedarray/transposed())

# transposed()

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

Returns a new transposed shaped array.

## Declaration

```swift
func transposed() -> MLShapedArray<Scalar>
```

<a id="discussion"></a>

## Discussion

This is equivalent to `transposed(permutation:)` where `permutation:` parameter is `[shape.count-1, shape.count-2, ..., 0]`, which reverses the shape.

```swift
let original = MLShapedArray<Int32>(scalars: 0..., shape: [1, 2, 3])
let transposed = original.transposed()
transposed.shape // [3, 2, 1]
```

## See Also

### Shaping the array

- [changingLayout(to:)](changinglayout%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a copy with the specified buffer layout.
- [expandingShape(at:)](expandingshape%28at_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new shaped array with expanded dimensions.
- [reshaped(to:)](reshaped%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new reshaped shaped array.
- [squeezingShape()](squeezingshape%28%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new squeezed shaped array.
- [transposed(permutation:)](transposed%28permutation_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a transposed shaped array using a custom permutation.
