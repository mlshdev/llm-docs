> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkquaternionslerp(_:_:_:)](https://developer.apple.com/documentation/glkit/glkquaternionslerp(_:_:_:))

# GLKQuaternionSlerp(\_:\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns the spherical linear interpolation of two quaternions.

## Declaration

```swift
func GLKQuaternionSlerp(_ quaternionStart: GLKQuaternion, _ quaternionEnd: GLKQuaternion, _ t: Float) -> GLKQuaternion
```

## Parameters

- `quaternionStart`: The starting point.
- `quaternionEnd`: The ending point.
- `t`: The interpolation factor.

<a id="return-value"></a>

## Return Value

A new quaternion. When `t=0`, the result is the start quaternion. When `t=1.0`, the result is the end quaternion. For any other value of `t`, the result is a spherical linear interpolation between the two quaternions.

## See Also

### Performing Mathematical Operations on Quaternions

- [GLKQuaternionNormalize(\_:)](glkquaternionnormalize%28__%29.md): Returns a normalized version of a quaternion.
- [GLKQuaternionInvert(\_:)](glkquaternioninvert%28__%29.md): Returns an inverse of a quaternion.
- [GLKQuaternionConjugate(\_:)](glkquaternionconjugate%28__%29.md): Returns the conjugate of a quaternion.
- [GLKQuaternionAdd(\_:\_:)](glkquaternionadd%28____%29.md): Returns the sum of two quaternions.
- [GLKQuaternionSubtract(\_:\_:)](glkquaternionsubtract%28____%29.md): Returns the difference between two quaternions.
- [GLKQuaternionMultiply(\_:\_:)](glkquaternionmultiply%28____%29.md): Returns the product of two quaternions.

# GLKQuaternionSlerp (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns the spherical linear interpolation of two quaternions.

## Declaration

```objectivec
GLKQuaternion GLKQuaternionSlerp(GLKQuaternion quaternionStart, GLKQuaternion quaternionEnd, float t);
```

## Parameters

- `quaternionStart`: The starting point.
- `quaternionEnd`: The ending point.
- `t`: The interpolation factor.

<a id="return-value"></a>

## Return Value

A new quaternion. When `t=0`, the result is the start quaternion. When `t=1.0`, the result is the end quaternion. For any other value of `t`, the result is a spherical linear interpolation between the two quaternions.

## See Also

### Performing Mathematical Operations on Quaternions

- [GLKQuaternionNormalize](glkquaternionnormalize%28__%29.md): Returns a normalized version of a quaternion.
- [GLKQuaternionInvert](glkquaternioninvert%28__%29.md): Returns an inverse of a quaternion.
- [GLKQuaternionConjugate](glkquaternionconjugate%28__%29.md): Returns the conjugate of a quaternion.
- [GLKQuaternionAdd](glkquaternionadd%28____%29.md): Returns the sum of two quaternions.
- [GLKQuaternionSubtract](glkquaternionsubtract%28____%29.md): Returns the difference between two quaternions.
- [GLKQuaternionMultiply](glkquaternionmultiply%28____%29.md): Returns the product of two quaternions.
