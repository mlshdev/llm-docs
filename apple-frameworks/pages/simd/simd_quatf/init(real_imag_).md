> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_quatf/init(real:imag:)](https://developer.apple.com/documentation/simd/simd_quatf/init(real:imag:))

# init(real:imag:)

**Framework:** simd  
**Kind:** Initializer

Creates a new quaternion from a scalar real part and a vector imaginary part.

## Declaration

```swift
init(real: Float, imag: SIMD3<Float>)
```

## Parameters

- `real`: A scalar value that specifies the real part of the quaternion.
- `imag`: A three-element vector that specifies the imaginary part of the quaternion.

## See Also

### Initializing a quaternion

- [init()](init%28%29.md): Creates a new quaternion.
- [init(vector:)](init%28vector_%29.md): Creates a new quaternion from a four-element vector.
- [init(\_:)](init%28__%29-1hlsg.md): Creates a new quaternion from a 3 x 3 rotation matrix.
- [init(\_:)](init%28__%29-3751.md): Creates a new quaternion from a 4 x 4 rotation matrix.
- [init(angle:axis:)](init%28angle_axis_%29.md): Creates a new quaternion with an action that’s a rotation about an axis.
- [init(from:to:)](init%28from_to_%29.md): Creates a new quaternion with an action that’s a rotation between two vectors.
- [init(ix:iy:iz:r:)](init%28ix_iy_iz_r_%29.md): Creates a new quaternion from four scalar values that specify the imaginary and real parts.
- [init(\_:)](init%28__%29-9rvr0.md)
