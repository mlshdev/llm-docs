> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_quatd/init(ix:iy:iz:r:)](https://developer.apple.com/documentation/simd/simd_quatd/init(ix:iy:iz:r:))

# init(ix:iy:iz:r:)

**Framework:** simd  
**Kind:** Initializer

Creates a new quaternion from four scalar values that specify the imaginary and real parts.

## Declaration

```swift
init(ix: Double, iy: Double, iz: Double, r: Double)
```

## Parameters

- `ix`: The first component of the imaginary part.
- `iy`: The second component of the imaginary part.
- `iz`: The third component of the imaginary part.
- `r`: The real part.

## See Also

### Initializing a quaternion

- [init()](init%28%29.md): Creates a new quaternion.
- [init(vector:)](init%28vector_%29.md): Creates a new quaternion from a four-element vector.
- [init(\_:)](init%28__%29-791zk.md): Creates a new quaternion from a 3 x 3 rotation matrix.
- [init(\_:)](init%28__%29-5vcd5.md): Creates a new quaternion from a 4 x 4 rotation matrix.
- [init(angle:axis:)](init%28angle_axis_%29.md): Creates a new quaternion with an action that’s a rotation about an axis.
- [init(from:to:)](init%28from_to_%29.md): Creates a new quaternion with an action that’s a rotation between two vectors.
- [init(real:imag:)](init%28real_imag_%29.md): Creates a new quaternion from a scalar real part and a vector imaginary part.
