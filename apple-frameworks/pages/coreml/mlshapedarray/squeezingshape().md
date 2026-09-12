> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarray/squeezingshape()](https://developer.apple.com/documentation/coreml/mlshapedarray/squeezingshape())

# squeezingShape()

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

Returns a new squeezed shaped array.

## Declaration

```swift
func squeezingShape() -> MLShapedArray<Scalar>
```

<a id="discussion"></a>

## Discussion

The new shape removes 1s in the original shape.

```swift
let original = MLShapedArray<Int32>(scalars: 0..., shape: [1, 2, 1, 2])
let squeezed = original.squeezingShape()
squeezed.shape // [2, 2]
```

When all the dimensions of the original shape is one, the resultant shaped array is a scalar.

```swift
let original = MLShapedArray<Int32>(scalars: 42, shape: [1, 1])
let squeezed = original.squeezingShape()
squeezed.scalar // 42
```

## See Also

### Shaping the array

- [changingLayout(to:)](changinglayout%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a copy with the specified buffer layout.
- [expandingShape(at:)](expandingshape%28at_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new shaped array with expanded dimensions.
- [reshaped(to:)](reshaped%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new reshaped shaped array.
- [transposed()](transposed%28%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new transposed shaped array.
- [transposed(permutation:)](transposed%28permutation_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a transposed shaped array using a custom permutation.
