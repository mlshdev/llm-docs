> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayslice/transposed(permutation:)](https://developer.apple.com/documentation/coreml/mlshapedarrayslice/transposed(permutation:))

# transposed(permutation:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

Returns a new transposed shaped array using a custom permutation.

## Declaration

```swift
func transposed(permutation axes: [Int]) -> MLShapedArraySlice<Scalar>
```

<a id="discussion"></a>

## Discussion

Use this method to convert, for example, the image data layout from `[C, H, W]` to `[C, W, H]`, where `C` is channel, `W` is width, and `H` is height.

```swift
// The source tensor has 3 channels, 128 x 64 image in [C, H, W] layout.
let imageCHW = MLShapedArray<Int32>(scalars: pixelValues,
                                    shape: [3, 64, 128])
// Slice for the first two channels.
let imageSliceCHW = imageCHW[0..<2]

// Transpose.
let imageSliceCWH = imageSliceCHW.transposed(permutation: [0, 2, 1])
imageSliceCHW.shape // [2, 64, 128]
imageSliceCWH.shape // [2, 128, 64]
```

The shape (`shape_out`) is transposed from the input shape (`shape_in`) as follows.

```swift
shape_out[i]
  == permutation.map { shape_in[$0] }
```

The scalar value of the output shaped array (`array_out`) is related to the input shaped array (`array_in`) as follows.

```swift
array_out(scalarAt: permutation.map { indices[$0] })
  == array_in[scalarAt: indices]]
```

## See Also

### Shaping the array slice

- [changingLayout(to:)](changinglayout%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a copy with the specified buffer layout.
- [expandingShape(at:)](expandingshape%28at_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new shaped array with expanded dimensions
- [reshaped(to:)](reshaped%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new reshaped shaped array.
- [squeezingShape()](squeezingshape%28%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new squeezed shaped array.
- [transposed()](transposed%28%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new transposed shaped array
