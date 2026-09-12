> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_conjugate(_:)-98bil](https://developer.apple.com/documentation/simd/simd_conjugate(_:)-98bil)

# simd_conjugate(\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns the conjugate of a quaternion.

## Declaration

```swift
func simd_conjugate(_ q: simd_quatf) -> simd_quatf
```

## See Also

### Applying geometric operations to quaternions

- [simd_act(\_:\_:)](simd_act%28____%29-2liww.md): Returns a vector rotated by a quaternion.
- [act(\_:)](simd_quatf/act%28__%29.md): Returns the specified vector rotated by the quaternion.
- [simd_angle(\_:)](simd_angle%28__%29-zu9h.md): Returns the angle by which a quaternion rotates.
- [simd_axis(\_:)](simd_axis%28__%29-56wzs.md): Returns the normalized axis about which the action of the specified quaternion rotates.
- [simd_bezier(\_:\_:\_:\_:\_:)](simd_bezier%28__________%29-1z3gf.md): Returns the spherical cubic Bezier interpolation between quaternions.
- [simd_imag(\_:)](simd_imag%28__%29-2c837.md): Returns the imaginary (vector) part of a quaternion.
- [simd_negate(\_:)](simd_negate%28__%29-3yt2y.md): Returns the negation of a quaternion.
- [simd_real(\_:)](simd_real%28__%29-75sl3.md): Returns the real (scalar) part of a quaternion.
- [simd_slerp(\_:\_:\_:)](simd_slerp%28______%29-u2db.md): Returns a spherical linearly interpolated value along the shortest arc between two quaternions.
- [simd_slerp_longest(\_:\_:\_:)](simd_slerp_longest%28______%29-3qens.md): Returns a spherical linearly interpolated value along the longest arc between two quaternions.
- [simd_spline(\_:\_:\_:\_:\_:)](simd_spline%28__________%29-1ok51.md): Returns an interpolated value between two quaternions along a spherical cubic spline.
- [simd_dot(\_:\_:)](simd_dot%28____%29-7frqx.md): Returns the dot product of two quaternions.
- [dot(\_:\_:)](dot%28____%29-2en8e.md)
- [simd_length(\_:)](simd_length%28__%29-52nf5.md): Returns the length of a quaternion.
- [simd_normalize(\_:)](simd_normalize%28__%29-uch9.md): Returns a quaternion pointing in the same direction as the supplied quaternion with a length of 1.

# simd_conjugate (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns the conjugate of a quaternion.

## Declaration

```objectivec
static simd_quatf simd_conjugate(simd_quatf q);
```

## See Also

### Applying geometric operations to quaternions

- [simd_act](simd_act%28____%29-2liww.md): Returns a vector rotated by a quaternion.
- [simd_angle](simd_angle%28__%29-zu9h.md): Returns the angle by which a quaternion rotates.
- [simd_axis](simd_axis%28__%29-56wzs.md): Returns the normalized axis about which the action of the specified quaternion rotates.
- [simd_bezier](simd_bezier%28__________%29-1z3gf.md): Returns the spherical cubic Bezier interpolation between quaternions.
- [simd_imag](simd_imag%28__%29-2c837.md): Returns the imaginary (vector) part of a quaternion.
- [simd_negate](simd_negate%28__%29-3yt2y.md): Returns the negation of a quaternion.
- [simd_real](simd_real%28__%29-75sl3.md): Returns the real (scalar) part of a quaternion.
- [simd_slerp](simd_slerp%28______%29-u2db.md): Returns a spherical linearly interpolated value along the shortest arc between two quaternions.
- [simd_slerp_longest](simd_slerp_longest%28______%29-3qens.md): Returns a spherical linearly interpolated value along the longest arc between two quaternions.
- [simd_spline](simd_spline%28__________%29-1ok51.md): Returns an interpolated value between two quaternions along a spherical cubic spline.
- [simd_dot](simd_dot%28____%29-7frqx.md): Returns the dot product of two quaternions.
- [simd_length](simd_length%28__%29-52nf5.md): Returns the length of a quaternion.
- [simd_normalize](simd_normalize%28__%29-uch9.md): Returns a quaternion pointing in the same direction as the supplied quaternion with a length of 1.
