> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkquaternionsubtract(_:_:)](https://developer.apple.com/documentation/glkit/glkquaternionsubtract(_:_:))

# GLKQuaternionSubtract(\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns the difference between two quaternions.

## Declaration

```swift
func GLKQuaternionSubtract(_ quaternionLeft: GLKQuaternion, _ quaternionRight: GLKQuaternion) -> GLKQuaternion
```

## Parameters

- `quaternionLeft`: The minuend.
- `quaternionRight`: The subtrahend.

<a id="return-value"></a>

## Return Value

A new quaternion.

## See Also

### Performing Mathematical Operations on Quaternions

- [GLKQuaternionNormalize(\_:)](glkquaternionnormalize%28__%29.md): Returns a normalized version of a quaternion.
- [GLKQuaternionInvert(\_:)](glkquaternioninvert%28__%29.md): Returns an inverse of a quaternion.
- [GLKQuaternionConjugate(\_:)](glkquaternionconjugate%28__%29.md): Returns the conjugate of a quaternion.
- [GLKQuaternionAdd(\_:\_:)](glkquaternionadd%28____%29.md): Returns the sum of two quaternions.
- [GLKQuaternionMultiply(\_:\_:)](glkquaternionmultiply%28____%29.md): Returns the product of two quaternions.
- [GLKQuaternionSlerp(\_:\_:\_:)](glkquaternionslerp%28______%29.md): Returns the spherical linear interpolation of two quaternions.

# GLKQuaternionSubtract (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns the difference between two quaternions.

## Declaration

```objectivec
static GLKQuaternion GLKQuaternionSubtract(GLKQuaternion quaternionLeft, GLKQuaternion quaternionRight);
```

## Parameters

- `quaternionLeft`: The minuend.
- `quaternionRight`: The subtrahend.

<a id="return-value"></a>

## Return Value

A new quaternion.

## See Also

### Performing Mathematical Operations on Quaternions

- [GLKQuaternionNormalize](glkquaternionnormalize%28__%29.md): Returns a normalized version of a quaternion.
- [GLKQuaternionInvert](glkquaternioninvert%28__%29.md): Returns an inverse of a quaternion.
- [GLKQuaternionConjugate](glkquaternionconjugate%28__%29.md): Returns the conjugate of a quaternion.
- [GLKQuaternionAdd](glkquaternionadd%28____%29.md): Returns the sum of two quaternions.
- [GLKQuaternionMultiply](glkquaternionmultiply%28____%29.md): Returns the product of two quaternions.
- [GLKQuaternionSlerp](glkquaternionslerp%28______%29.md): Returns the spherical linear interpolation of two quaternions.
