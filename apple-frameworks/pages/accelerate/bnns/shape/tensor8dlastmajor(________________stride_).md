> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/shape/tensor8dlastmajor(_:_:_:_:_:_:_:_:stride:)](https://developer.apple.com/documentation/accelerate/bnns/shape/tensor8dlastmajor(_:_:_:_:_:_:_:_:stride:))

# BNNS.Shape.tensor8DLastMajor(\_:\_:\_:\_:\_:\_:\_:\_:stride:)

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A constant that represents a shape with a 8D last-major data layout.

## Declaration

```swift
case tensor8DLastMajor(Int, Int, Int, Int, Int, Int, Int, Int, stride: (Int, Int, Int, Int, Int, Int, Int, Int) = (0, 0, 0, 0, 0, 0, 0, 0))
```

## See Also

### Shape Constants

- [BNNS.Shape.vector(\_:stride:)](vector%28__stride_%29.md): A constant that represents a shape with a 1D vector data layout.
- [BNNS.Shape.matrixColumnMajor(\_:\_:stride:)](matrixcolumnmajor%28____stride_%29.md): A constant that represents a shape with a 2D column-major data layout.
- [BNNS.Shape.matrixRowMajor(\_:\_:stride:)](matrixrowmajor%28____stride_%29.md): A constant that represents a shape with a 2D row-major data layout.
- [BNNS.Shape.matrixFirstMajor(\_:\_:stride:)](matrixfirstmajor%28____stride_%29.md): A constant that represents a shape with a 2D first-major data layout.
- [BNNS.Shape.matrixLastMajor(\_:\_:stride:)](matrixlastmajor%28____stride_%29.md): A constant that represents a shape with a 2D last-major data layout.
- [BNNS.Shape.imageCHW(\_:\_:\_:stride:)](imagechw%28______stride_%29.md): A constant that represents a shape with a 3D image stack data layout.
- [BNNS.Shape.tensor3DFirstMajor(\_:\_:\_:stride:)](tensor3dfirstmajor%28______stride_%29.md): A constant that represents a shape with a 3D first-major data layout.
- [BNNS.Shape.tensor3DLastMajor(\_:\_:\_:stride:)](tensor3dlastmajor%28______stride_%29.md): A constant that represents a shape with a 3D last-major data layout.
- [BNNS.Shape.tensor3DNSE(\_:\_:\_:stride:)](tensor3dnse%28______stride_%29.md): A constant that represents a shape with the size elements embedding dimension, sequence length, and batch size.
- [BNNS.Shape.tensor3DSNE(\_:\_:\_:stride:)](tensor3dsne%28______stride_%29.md): A constant that represents a shape with the size elements embedding dimension, batch size, and sequence length.
- [BNNS.Shape.convolutionWeightsOIHW(\_:\_:\_:\_:stride:)](convolutionweightsoihw%28________stride_%29.md): A constant that represents a shape with a 4D array of convolution weights data layout.
- [BNNS.Shape.tensor4DFirstMajor(\_:\_:\_:\_:stride:)](tensor4dfirstmajor%28________stride_%29.md): A constant that represents a shape with a 4D first-major data layout.
- [BNNS.Shape.tensor4DLastMajor(\_:\_:\_:\_:stride:)](tensor4dlastmajor%28________stride_%29.md): A constant that represents a shape with a 4D last-major data layout.
- [BNNS.Shape.tensor5DFirstMajor(\_:\_:\_:\_:\_:stride:)](tensor5dfirstmajor%28__________stride_%29.md): A constant that represents a shape with a 5D first-major data layout.
- [BNNS.Shape.tensor5DLastMajor(\_:\_:\_:\_:\_:stride:)](tensor5dlastmajor%28__________stride_%29.md): A constant that represents a shape with a 5D last-major data layout.
