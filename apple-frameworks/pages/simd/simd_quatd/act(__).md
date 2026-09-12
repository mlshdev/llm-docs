> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_quatd/act(_:)](https://developer.apple.com/documentation/simd/simd_quatd/act(_:))

# act(\_:)

**Framework:** simd  
**Kind:** Instance Method

Returns the specified vector rotated by the quaternion.

## Declaration

```swift
func act(_ vector: SIMD3<Double>) -> SIMD3<Double>
```

## See Also

### Applying geometric operations to quaternions

- [simd_act(\_:\_:)](../simd_act%28____%29-47h09.md): Returns a vector rotated by a quaternion.
- [simd_angle(\_:)](../simd_angle%28__%29-zuvx.md): Returns the angle by which a quaternion rotates.
- [simd_axis(\_:)](../simd_axis%28__%29-56wf4.md): Returns the normalized axis about which the action of the specified quaternion rotates.
- [simd_bezier(\_:\_:\_:\_:\_:)](../simd_bezier%28__________%29-556xd.md): Returns the spherical cubic Bezier interpolation between quaternions.
- [simd_conjugate(\_:)](../simd_conjugate%28__%29-98awl.md): Returns the conjugate of a quaternion.
- [simd_imag(\_:)](../simd_imag%28__%29-2c7fz.md): Returns the imaginary (vector) part of a quaternion.
- [simd_negate(\_:)](../simd_negate%28__%29-3ysgu.md): Returns the negation of a quaternion.
- [simd_real(\_:)](../simd_real%28__%29-75t5f.md): Returns the real (scalar) part of a quaternion.
- [simd_slerp(\_:\_:\_:)](../simd_slerp%28______%29-65dt5.md): Returns a spherical linearly interpolated value along the shortest arc between two quaternions.
- [simd_slerp_longest(\_:\_:\_:)](../simd_slerp_longest%28______%29-8hbz2.md): Returns a spherical linearly interpolated value along the longest arc between two quaternions.
- [simd_spline(\_:\_:\_:\_:\_:)](../simd_spline%28__________%29-19wbg.md): Returns an interpolated value between two quaternions along a spherical cubic spline.
- [simd_dot(\_:\_:)](../simd_dot%28____%29-2bnqp.md): Returns the dot product of two quaternions.
- [dot(\_:\_:)](../dot%28____%29-438xp.md)
- [simd_length(\_:)](../simd_length%28__%29-52o29.md): Returns the length of a quaternion.
- [simd_normalize(\_:)](../simd_normalize%28__%29-ud11.md): Returns a quaternion pointing in the same direction as the supplied quaternion with a length of 1.
