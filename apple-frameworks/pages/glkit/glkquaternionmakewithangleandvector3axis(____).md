> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkquaternionmakewithangleandvector3axis(_:_:)](https://developer.apple.com/documentation/glkit/glkquaternionmakewithangleandvector3axis(_:_:))

# GLKQuaternionMakeWithAngleAndVector3Axis(\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Creates a quaternion that represents a rotation around an axis.

## Declaration

```swift
func GLKQuaternionMakeWithAngleAndVector3Axis(_ radians: Float, _ axisVector: GLKVector3) -> GLKQuaternion
```

## Parameters

- `radians`: The angle of the rotation in radians (a positive angle is counterclockwise).
- `axisVector`: The axis of rotation.

<a id="return-value"></a>

## Return Value

A new quaternion.

## See Also

### Creating Quaternions

- [GLKQuaternionMake(\_:\_:\_:\_:)](glkquaternionmake%28________%29.md): Returns a quaternion created from its separate components.
- [GLKQuaternionMakeWithArray(\_:)](glkquaternionmakewitharray%28__%29.md): Returns a quaternion created from an array of components.
- [GLKQuaternionMakeWithVector3(\_:\_:)](glkquaternionmakewithvector3%28____%29.md): Returns a quaternion created from a vector and a scalar.
- [GLKQuaternionMakeWithAngleAndAxis(\_:\_:\_:\_:)](glkquaternionmakewithangleandaxis%28________%29.md): Creates a quaternion that represents a rotation around an axis.
- [GLKQuaternionMakeWithMatrix3(\_:)](glkquaternionmakewithmatrix3%28__%29.md): Creates a quaternion from a rotation matrix.
- [GLKQuaternionMakeWithMatrix4(\_:)](glkquaternionmakewithmatrix4%28__%29.md): Creates a quaternion from a rotation matrix.

# GLKQuaternionMakeWithAngleAndVector3Axis (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Creates a quaternion that represents a rotation around an axis.

## Declaration

```objectivec
static GLKQuaternion GLKQuaternionMakeWithAngleAndVector3Axis(float radians, GLKVector3 axisVector);
```

## Parameters

- `radians`: The angle of the rotation in radians (a positive angle is counterclockwise).
- `axisVector`: The axis of rotation.

<a id="return-value"></a>

## Return Value

A new quaternion.

## See Also

### Creating Quaternions

- [GLKQuaternionMake](glkquaternionmake%28________%29.md): Returns a quaternion created from its separate components.
- [GLKQuaternionMakeWithArray](glkquaternionmakewitharray%28__%29.md): Returns a quaternion created from an array of components.
- [GLKQuaternionMakeWithVector3](glkquaternionmakewithvector3%28____%29.md): Returns a quaternion created from a vector and a scalar.
- [GLKQuaternionMakeWithAngleAndAxis](glkquaternionmakewithangleandaxis%28________%29.md): Creates a quaternion that represents a rotation around an axis.
- [GLKQuaternionMakeWithMatrix3](glkquaternionmakewithmatrix3%28__%29.md): Creates a quaternion from a rotation matrix.
- [GLKQuaternionMakeWithMatrix4](glkquaternionmakewithmatrix4%28__%29.md): Creates a quaternion from a rotation matrix.
