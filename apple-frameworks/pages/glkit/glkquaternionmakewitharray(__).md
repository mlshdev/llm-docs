> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkquaternionmakewitharray(_:)](https://developer.apple.com/documentation/glkit/glkquaternionmakewitharray(_:))

# GLKQuaternionMakeWithArray(\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a quaternion created from an array of components.

## Declaration

```swift
func GLKQuaternionMakeWithArray(_ values: UnsafeMutablePointer<Float>!) -> GLKQuaternion
```

## Parameters

- `values`: The four components that comprise the new quaternion.

<a id="return-value"></a>

## Return Value

A new quaternion.

## See Also

### Creating Quaternions

- [GLKQuaternionMake(\_:\_:\_:\_:)](glkquaternionmake%28________%29.md): Returns a quaternion created from its separate components.
- [GLKQuaternionMakeWithVector3(\_:\_:)](glkquaternionmakewithvector3%28____%29.md): Returns a quaternion created from a vector and a scalar.
- [GLKQuaternionMakeWithAngleAndAxis(\_:\_:\_:\_:)](glkquaternionmakewithangleandaxis%28________%29.md): Creates a quaternion that represents a rotation around an axis.
- [GLKQuaternionMakeWithAngleAndVector3Axis(\_:\_:)](glkquaternionmakewithangleandvector3axis%28____%29.md): Creates a quaternion that represents a rotation around an axis.
- [GLKQuaternionMakeWithMatrix3(\_:)](glkquaternionmakewithmatrix3%28__%29.md): Creates a quaternion from a rotation matrix.
- [GLKQuaternionMakeWithMatrix4(\_:)](glkquaternionmakewithmatrix4%28__%29.md): Creates a quaternion from a rotation matrix.

# GLKQuaternionMakeWithArray (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a quaternion created from an array of components.

## Declaration

```objectivec
static GLKQuaternion GLKQuaternionMakeWithArray(float values[4]);
```

## Parameters

- `values`: The four components that comprise the new quaternion.

<a id="return-value"></a>

## Return Value

A new quaternion.

## See Also

### Creating Quaternions

- [GLKQuaternionMake](glkquaternionmake%28________%29.md): Returns a quaternion created from its separate components.
- [GLKQuaternionMakeWithVector3](glkquaternionmakewithvector3%28____%29.md): Returns a quaternion created from a vector and a scalar.
- [GLKQuaternionMakeWithAngleAndAxis](glkquaternionmakewithangleandaxis%28________%29.md): Creates a quaternion that represents a rotation around an axis.
- [GLKQuaternionMakeWithAngleAndVector3Axis](glkquaternionmakewithangleandvector3axis%28____%29.md): Creates a quaternion that represents a rotation around an axis.
- [GLKQuaternionMakeWithMatrix3](glkquaternionmakewithmatrix3%28__%29.md): Creates a quaternion from a rotation matrix.
- [GLKQuaternionMakeWithMatrix4](glkquaternionmakewithmatrix4%28__%29.md): Creates a quaternion from a rotation matrix.
