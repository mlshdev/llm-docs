> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_quatf/init(angle:axis:)](https://developer.apple.com/documentation/simd/simd_quatf/init(angle:axis:))

# init(angle:axis:)

**Framework:** simd  
**Kind:** Initializer

Creates a new quaternion with an action that’s a rotation about an axis.

## Declaration

```swift
init(angle: Float, axis: SIMD3<Float>)
```

## Parameters

- `angle`: The rotation angle in radians.
- `axis`: A three-element vector that specifies the rotation axis.

## See Also

### Initializing a quaternion

- [init()](init%28%29.md): Creates a new quaternion.
- [init(vector:)](init%28vector_%29.md): Creates a new quaternion from a four-element vector.
- [init(\_:)](init%28__%29-1hlsg.md): Creates a new quaternion from a 3 x 3 rotation matrix.
- [init(\_:)](init%28__%29-3751.md): Creates a new quaternion from a 4 x 4 rotation matrix.
- [init(from:to:)](init%28from_to_%29.md): Creates a new quaternion with an action that’s a rotation between two vectors.
- [init(ix:iy:iz:r:)](init%28ix_iy_iz_r_%29.md): Creates a new quaternion from four scalar values that specify the imaginary and real parts.
- [init(real:imag:)](init%28real_imag_%29.md): Creates a new quaternion from a scalar real part and a vector imaginary part.
- [init(\_:)](init%28__%29-9rvr0.md)
