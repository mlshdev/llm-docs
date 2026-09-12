> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarray/reshaped(to:)](https://developer.apple.com/documentation/coreml/mlshapedarray/reshaped(to:))

# reshaped(to:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

Returns a new reshaped shaped array.

## Declaration

```swift
func reshaped(to newShape: [Int]) -> MLShapedArray<Scalar>
```

## Parameters

- `newShape`: The new shape after reshaping.

<a id="discussion"></a>

## Discussion

The reshaped array gets scalars of the original array in first-major order. Therefore, the initializer is semantically equivalent to:

```swift
let reshaped = MLShapedArray(scalars: original.scalars, shape: newShape)
```

Usage example:

```swift
let original = MLShapedArray<Int32>(scalars: 0..., shape: [4])
let reshaped = original.reshaping(to: [1, 2, 2])
```

A scalar can be reshaped to and from a shape where the product of dimensions is one.

The method raises a runtime error if the product of dimensions in the new shape is different from the current one.

## See Also

### Shaping the array

- [changingLayout(to:)](changinglayout%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a copy with the specified buffer layout.
- [expandingShape(at:)](expandingshape%28at_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new shaped array with expanded dimensions.
- [squeezingShape()](squeezingshape%28%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new squeezed shaped array.
- [transposed()](transposed%28%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new transposed shaped array.
- [transposed(permutation:)](transposed%28permutation_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a transposed shaped array using a custom permutation.
