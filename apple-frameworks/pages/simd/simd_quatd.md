> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_quatd](https://developer.apple.com/documentation/simd/simd_quatd)

# simd_quatd (Swift)

**Framework:** simd  
**Kind:** Structure

A double-precision quaternion.

## Declaration

```swift
struct simd_quatd
```

## Topics

### Initializing a quaternion

- [init()](simd_quatd/init%28%29.md): Creates a new quaternion.
- [init(vector:)](simd_quatd/init%28vector_%29.md): Creates a new quaternion from a four-element vector.
- [init(\_:)](simd_quatd/init%28__%29-791zk.md): Creates a new quaternion from a 3 x 3 rotation matrix.
- [init(\_:)](simd_quatd/init%28__%29-5vcd5.md): Creates a new quaternion from a 4 x 4 rotation matrix.
- [init(angle:axis:)](simd_quatd/init%28angle_axis_%29.md): Creates a new quaternion with an action that’s a rotation about an axis.
- [init(from:to:)](simd_quatd/init%28from_to_%29.md): Creates a new quaternion with an action that’s a rotation between two vectors.
- [init(ix:iy:iz:r:)](simd_quatd/init%28ix_iy_iz_r_%29.md): Creates a new quaternion from four scalar values that specify the imaginary and real parts.
- [init(real:imag:)](simd_quatd/init%28real_imag_%29.md): Creates a new quaternion from a scalar real part and a vector imaginary part.

### Querying a quaternion’s properties

- [angle](simd_quatd/angle.md): The angle, in radians, by which the quaternion’s action rotates.
- [axis](simd_quatd/axis.md): The normalized axis about which the quaternion’s action rotates.
- [conjugate](simd_quatd/conjugate.md): The conjugate of the quaternion.
- [imag](simd_quatd/imag.md): The imaginary part of the quaternion.
- [real](simd_quatd/real.md): The real part of the quaternion.
- [inverse](simd_quatd/inverse.md): The inverse of the quaternion.
- [length](simd_quatd/length.md): The length of the quaternion.
- [normalized](simd_quatd/normalized.md): The unit quaternion of the quaternion.
- [vector](simd_quatd/vector.md): The underlying vector of the quaternion.

### Creating a quaternion from other data types

- [simd_quaternion(\_:\_:\_:\_:)](simd_quaternion%28________%29-1adm9.md): Returns a new quaternion from 4 scalar values.
- [simd_quaternion(\_:\_:)](simd_quaternion%28____%29-2jzvc.md): Returns a new quaternion from a scalar value and a three-element vector.
- [simd_quaternion(\_:)](simd_quaternion%28__%29-8kl4p.md): Returns a new quaternion from a pointer to scalar values.
- [simd_quaternion(\_:\_:)](simd_quaternion%28____%29-2yoqw.md): Returns a new quaternion from 2 three-element vectors.
- [simd_quaternion(\_:)](simd_quaternion%28__%29-7paor.md): Returns a new quaternion from a 3 x 3 matrix.
- [simd_quaternion(\_:)](simd_quaternion%28__%29-459vs.md): Returns a new quaternion from a four-element vector.
- [simd_quaternion(\_:)](simd_quaternion%28__%29-8e0xf.md): Returns a new quaternion from a 4 x 4 matrix.

### Applying arithmetic operations to quaternions

- [simd_add(\_:\_:)](simd_add%28____%29-6ohmq.md): Returns the sum of two quaternions.
- [simd_mul(\_:\_:)](simd_mul%28____%29-531pe.md): Returns the product of two quaternions.
- [simd_mul(\_:\_:)](simd_mul%28____%29-8aedk.md)
- [simd_mul(\_:\_:)](simd_mul%28____%29-8uidm.md)
- [simd_sub(\_:\_:)](simd_sub%28____%29-87caf.md): Returns the difference between two quaternions.
- [exp(\_:)](exp%28__%29-9nl1f.md)
- [log(\_:)](log%28__%29-77xdo.md)

### Applying geometric operations to quaternions

- [simd_act(\_:\_:)](simd_act%28____%29-47h09.md): Returns a vector rotated by a quaternion.
- [act(\_:)](simd_quatd/act%28__%29.md): Returns the specified vector rotated by the quaternion.
- [simd_angle(\_:)](simd_angle%28__%29-zuvx.md): Returns the angle by which a quaternion rotates.
- [simd_axis(\_:)](simd_axis%28__%29-56wf4.md): Returns the normalized axis about which the action of the specified quaternion rotates.
- [simd_bezier(\_:\_:\_:\_:\_:)](simd_bezier%28__________%29-556xd.md): Returns the spherical cubic Bezier interpolation between quaternions.
- [simd_conjugate(\_:)](simd_conjugate%28__%29-98awl.md): Returns the conjugate of a quaternion.
- [simd_imag(\_:)](simd_imag%28__%29-2c7fz.md): Returns the imaginary (vector) part of a quaternion.
- [simd_negate(\_:)](simd_negate%28__%29-3ysgu.md): Returns the negation of a quaternion.
- [simd_real(\_:)](simd_real%28__%29-75t5f.md): Returns the real (scalar) part of a quaternion.
- [simd_slerp(\_:\_:\_:)](simd_slerp%28______%29-65dt5.md): Returns a spherical linearly interpolated value along the shortest arc between two quaternions.
- [simd_slerp_longest(\_:\_:\_:)](simd_slerp_longest%28______%29-8hbz2.md): Returns a spherical linearly interpolated value along the longest arc between two quaternions.
- [simd_spline(\_:\_:\_:\_:\_:)](simd_spline%28__________%29-19wbg.md): Returns an interpolated value between two quaternions along a spherical cubic spline.
- [simd_dot(\_:\_:)](simd_dot%28____%29-2bnqp.md): Returns the dot product of two quaternions.
- [dot(\_:\_:)](dot%28____%29-438xp.md)
- [simd_length(\_:)](simd_length%28__%29-52o29.md): Returns the length of a quaternion.
- [simd_normalize(\_:)](simd_normalize%28__%29-ud11.md): Returns a quaternion pointing in the same direction as the supplied quaternion with a length of 1.

### Inverting a quaternion

- [simd_inverse(\_:)](simd_inverse%28__%29-3cvvi.md): Returns the inverse of a quaternion.

### Providing a hash value

- [hash(into:)](simd_quatd/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

### Operators

- [\*(\_:\_:)](simd_quatd/_%28____%29-5wd9q.md): Multiplies two quaternions and produces their product.
- [\*(\_:\_:)](simd_quatd/_%28____%29-5wtdl.md): Multiplies a quaternion and a scalar value, and produces their product.
- [\*(\_:\_:)](simd_quatd/_%28____%29-6yv0o.md): Multiplies a scalar value and a quaternion, and produces their product.
- [\*=(\_:\_:)](simd_quatd/_=%28____%29-66wf4.md): Multiplies a quaternion and a scalar value, and stores the result in the left-hand-side variable.
- [\*=(\_:\_:)](simd_quatd/_=%28____%29-9rhrs.md): Multiplies two quaternions and stores the result in the left-hand-side variable.
- [+(\_:\_:)](simd_quatd/+%28____%29.md): Adds two quaternions and produces their sum.
- [+=(\_:\_:)](simd_quatd/+=%28____%29.md): Adds two quaternions and stores the result in the left-hand-side variable.
- [-(\_:)](simd_quatd/-%28__%29.md): Calculates the additive inverse of a quaternion.
- [-(\_:\_:)](simd_quatd/-%28____%29.md): Subtracts one quaternion from another and produces their difference.
- [-=(\_:\_:)](simd_quatd/-=%28____%29.md): Subtracts the second quaternion from the first and stores the difference in the left-hand-side variable.
- [/(\_:\_:)](simd_quatd/_%28____%29-2ftmo.md): Divides a quaternion by a scalar value and produces the quotient.
- [/(\_:\_:)](simd_quatd/_%28____%29-dhx4.md): Divides the first quaternion by the second and produces the quotient.
- [/=(\_:\_:)](simd_quatd/_=%28____%29-40h2o.md): Divides the first quaternion by the second and stores the quotient in the left-hand-side variable.
- [/=(\_:\_:)](simd_quatd/_=%28____%29-4w1si.md): Divides a quaternion by a scalar value and stores the quotient in the left-hand-side variable.

### Initializers

- [init(\_:)](simd_quatd/init%28__%29-3wkyg.md): Returns a new quaternion from a Spatial rotation.

### Default Implementations

- [Hashable Implementations](simd_quatd/hashable-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Quaternions

- [Working with Quaternions](../accelerate/working-with-quaternions.md): Rotate points around the surface of a sphere, and interpolate between them.
- [Rotating a cube by transforming its vertices](../accelerate/rotating-a-cube-by-transforming-its-vertices.md): Rotate a cube through a series of keyframes using quaternion interpolation to transition between them.
- [simd_quatf](simd_quatf.md): A single-precision quaternion.

# simd_quatd (Objective-C)

**Framework:** simd  
**Kind:** Structure

A double-precision quaternion.

## Declaration

```objectivec
typedef struct { ... } simd_quatd;
```

## Topics

### Querying a quaternion’s properties

- [vector](simd_quatd/vector.md): The underlying vector of the quaternion.

### Creating a quaternion from other data types

- [simd_quaternion](simd_quaternion%28________%29-1adm9.md): Returns a new quaternion from 4 scalar values.
- [simd_quaternion](simd_quaternion%28____%29-2jzvc.md): Returns a new quaternion from a scalar value and a three-element vector.
- [simd_quaternion](simd_quaternion%28__%29-8kl4p.md): Returns a new quaternion from a pointer to scalar values.
- [simd_quaternion](simd_quaternion%28____%29-2yoqw.md): Returns a new quaternion from 2 three-element vectors.
- [simd_quaternion](simd_quaternion%28__%29-7paor.md): Returns a new quaternion from a 3 x 3 matrix.
- [simd_quaternion](simd_quaternion%28__%29-459vs.md): Returns a new quaternion from a four-element vector.
- [simd_quaternion](simd_quaternion%28__%29-8e0xf.md): Returns a new quaternion from a 4 x 4 matrix.

### Applying arithmetic operations to quaternions

- [simd_add](simd_add%28____%29-6ohmq.md): Returns the sum of two quaternions.
- [simd_mul](simd_mul%28____%29-531pe.md): Returns the product of two quaternions.
- [simd_mul](simd_mul%28____%29-8aedk.md)
- [simd_mul](simd_mul%28____%29-8uidm.md)
- [simd_sub](simd_sub%28____%29-87caf.md): Returns the difference between two quaternions.

### Applying geometric operations to quaternions

- [simd_act](simd_act%28____%29-47h09.md): Returns a vector rotated by a quaternion.
- [simd_angle](simd_angle%28__%29-zuvx.md): Returns the angle by which a quaternion rotates.
- [simd_axis](simd_axis%28__%29-56wf4.md): Returns the normalized axis about which the action of the specified quaternion rotates.
- [simd_bezier](simd_bezier%28__________%29-556xd.md): Returns the spherical cubic Bezier interpolation between quaternions.
- [simd_conjugate](simd_conjugate%28__%29-98awl.md): Returns the conjugate of a quaternion.
- [simd_imag](simd_imag%28__%29-2c7fz.md): Returns the imaginary (vector) part of a quaternion.
- [simd_negate](simd_negate%28__%29-3ysgu.md): Returns the negation of a quaternion.
- [simd_real](simd_real%28__%29-75t5f.md): Returns the real (scalar) part of a quaternion.
- [simd_slerp](simd_slerp%28______%29-65dt5.md): Returns a spherical linearly interpolated value along the shortest arc between two quaternions.
- [simd_slerp_longest](simd_slerp_longest%28______%29-8hbz2.md): Returns a spherical linearly interpolated value along the longest arc between two quaternions.
- [simd_spline](simd_spline%28__________%29-19wbg.md): Returns an interpolated value between two quaternions along a spherical cubic spline.
- [simd_dot](simd_dot%28____%29-2bnqp.md): Returns the dot product of two quaternions.
- [simd_length](simd_length%28__%29-52o29.md): Returns the length of a quaternion.
- [simd_normalize](simd_normalize%28__%29-ud11.md): Returns a quaternion pointing in the same direction as the supplied quaternion with a length of 1.

### Inverting a quaternion

- [simd_inverse](simd_inverse%28__%29-3cvvi.md): Returns the inverse of a quaternion.

## See Also

### Quaternions

- [Working with Quaternions](../accelerate/working-with-quaternions.md): Rotate points around the surface of a sphere, and interpolate between them.
- [Rotating a cube by transforming its vertices](../accelerate/rotating-a-cube-by-transforming-its-vertices.md): Rotate a cube through a series of keyframes using quaternion interpolation to transition between them.
- [simd_quatf](simd_quatf.md): A single-precision quaternion.
