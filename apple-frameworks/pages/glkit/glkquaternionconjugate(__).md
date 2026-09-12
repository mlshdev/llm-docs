> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkquaternionconjugate(_:)](https://developer.apple.com/documentation/glkit/glkquaternionconjugate(_:))

# GLKQuaternionConjugate(\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns the conjugate of a quaternion.

## Declaration

```swift
func GLKQuaternionConjugate(_ quaternion: GLKQuaternion) -> GLKQuaternion
```

## Parameters

- `quaternion`: A quaternion.

<a id="return-value"></a>

## Return Value

A new quaternion that is the conjugate of the source quaternion.

<a id="Discussion"></a>

## Discussion

The conjugate of a quaternion has the same scalar value, but the signs of the vector components are flipped.

## See Also

### Performing Mathematical Operations on Quaternions

- [GLKQuaternionNormalize(\_:)](glkquaternionnormalize%28__%29.md): Returns a normalized version of a quaternion.
- [GLKQuaternionInvert(\_:)](glkquaternioninvert%28__%29.md): Returns an inverse of a quaternion.
- [GLKQuaternionAdd(\_:\_:)](glkquaternionadd%28____%29.md): Returns the sum of two quaternions.
- [GLKQuaternionSubtract(\_:\_:)](glkquaternionsubtract%28____%29.md): Returns the difference between two quaternions.
- [GLKQuaternionMultiply(\_:\_:)](glkquaternionmultiply%28____%29.md): Returns the product of two quaternions.
- [GLKQuaternionSlerp(\_:\_:\_:)](glkquaternionslerp%28______%29.md): Returns the spherical linear interpolation of two quaternions.

# GLKQuaternionConjugate (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns the conjugate of a quaternion.

## Declaration

```objectivec
static GLKQuaternion GLKQuaternionConjugate(GLKQuaternion quaternion);
```

## Parameters

- `quaternion`: A quaternion.

<a id="return-value"></a>

## Return Value

A new quaternion that is the conjugate of the source quaternion.

<a id="Discussion"></a>

## Discussion

The conjugate of a quaternion has the same scalar value, but the signs of the vector components are flipped.

## See Also

### Performing Mathematical Operations on Quaternions

- [GLKQuaternionNormalize](glkquaternionnormalize%28__%29.md): Returns a normalized version of a quaternion.
- [GLKQuaternionInvert](glkquaternioninvert%28__%29.md): Returns an inverse of a quaternion.
- [GLKQuaternionAdd](glkquaternionadd%28____%29.md): Returns the sum of two quaternions.
- [GLKQuaternionSubtract](glkquaternionsubtract%28____%29.md): Returns the difference between two quaternions.
- [GLKQuaternionMultiply](glkquaternionmultiply%28____%29.md): Returns the product of two quaternions.
- [GLKQuaternionSlerp](glkquaternionslerp%28______%29.md): Returns the spherical linear interpolation of two quaternions.
