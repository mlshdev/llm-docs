> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkquaternionnormalize(_:)](https://developer.apple.com/documentation/glkit/glkquaternionnormalize(_:))

# GLKQuaternionNormalize(\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a normalized version of a quaternion.

## Declaration

```swift
func GLKQuaternionNormalize(_ quaternion: GLKQuaternion) -> GLKQuaternion
```

## Parameters

- `quaternion`: A quaternion.

<a id="return-value"></a>

## Return Value

A new quaternion, normalized to have a length of `1.0`.

## See Also

### Performing Mathematical Operations on Quaternions

- [GLKQuaternionInvert(\_:)](glkquaternioninvert%28__%29.md): Returns an inverse of a quaternion.
- [GLKQuaternionConjugate(\_:)](glkquaternionconjugate%28__%29.md): Returns the conjugate of a quaternion.
- [GLKQuaternionAdd(\_:\_:)](glkquaternionadd%28____%29.md): Returns the sum of two quaternions.
- [GLKQuaternionSubtract(\_:\_:)](glkquaternionsubtract%28____%29.md): Returns the difference between two quaternions.
- [GLKQuaternionMultiply(\_:\_:)](glkquaternionmultiply%28____%29.md): Returns the product of two quaternions.
- [GLKQuaternionSlerp(\_:\_:\_:)](glkquaternionslerp%28______%29.md): Returns the spherical linear interpolation of two quaternions.

# GLKQuaternionNormalize (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a normalized version of a quaternion.

## Declaration

```objectivec
static GLKQuaternion GLKQuaternionNormalize(GLKQuaternion quaternion);
```

## Parameters

- `quaternion`: A quaternion.

<a id="return-value"></a>

## Return Value

A new quaternion, normalized to have a length of `1.0`.

## See Also

### Performing Mathematical Operations on Quaternions

- [GLKQuaternionInvert](glkquaternioninvert%28__%29.md): Returns an inverse of a quaternion.
- [GLKQuaternionConjugate](glkquaternionconjugate%28__%29.md): Returns the conjugate of a quaternion.
- [GLKQuaternionAdd](glkquaternionadd%28____%29.md): Returns the sum of two quaternions.
- [GLKQuaternionSubtract](glkquaternionsubtract%28____%29.md): Returns the difference between two quaternions.
- [GLKQuaternionMultiply](glkquaternionmultiply%28____%29.md): Returns the product of two quaternions.
- [GLKQuaternionSlerp](glkquaternionslerp%28______%29.md): Returns the spherical linear interpolation of two quaternions.
