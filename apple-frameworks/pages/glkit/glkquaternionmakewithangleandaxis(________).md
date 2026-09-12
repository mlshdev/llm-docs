> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkquaternionmakewithangleandaxis(_:_:_:_:)](https://developer.apple.com/documentation/glkit/glkquaternionmakewithangleandaxis(_:_:_:_:))

# GLKQuaternionMakeWithAngleAndAxis(\_:\_:\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Creates a quaternion that represents a rotation around an axis.

## Declaration

```swift
func GLKQuaternionMakeWithAngleAndAxis(_ radians: Float, _ x: Float, _ y: Float, _ z: Float) -> GLKQuaternion
```

## Parameters

- `radians`: The angle of the rotation in radians (a positive angle is counterclockwise).
- `x`: The `x` component of the axis.
- `y`: The `y` component of the axis.
- `z`: The `z` component of the axis.

<a id="return-value"></a>

## Return Value

A new quaternion.

## See Also

### Creating Quaternions

- [GLKQuaternionMake(\_:\_:\_:\_:)](glkquaternionmake%28________%29.md): Returns a quaternion created from its separate components.
- [GLKQuaternionMakeWithArray(\_:)](glkquaternionmakewitharray%28__%29.md): Returns a quaternion created from an array of components.
- [GLKQuaternionMakeWithVector3(\_:\_:)](glkquaternionmakewithvector3%28____%29.md): Returns a quaternion created from a vector and a scalar.
- [GLKQuaternionMakeWithAngleAndVector3Axis(\_:\_:)](glkquaternionmakewithangleandvector3axis%28____%29.md): Creates a quaternion that represents a rotation around an axis.
- [GLKQuaternionMakeWithMatrix3(\_:)](glkquaternionmakewithmatrix3%28__%29.md): Creates a quaternion from a rotation matrix.
- [GLKQuaternionMakeWithMatrix4(\_:)](glkquaternionmakewithmatrix4%28__%29.md): Creates a quaternion from a rotation matrix.

# GLKQuaternionMakeWithAngleAndAxis (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Creates a quaternion that represents a rotation around an axis.

## Declaration

```objectivec
static GLKQuaternion GLKQuaternionMakeWithAngleAndAxis(float radians, float x, float y, float z);
```

## Parameters

- `radians`: The angle of the rotation in radians (a positive angle is counterclockwise).
- `x`: The `x` component of the axis.
- `y`: The `y` component of the axis.
- `z`: The `z` component of the axis.

<a id="return-value"></a>

## Return Value

A new quaternion.

## See Also

### Creating Quaternions

- [GLKQuaternionMake](glkquaternionmake%28________%29.md): Returns a quaternion created from its separate components.
- [GLKQuaternionMakeWithArray](glkquaternionmakewitharray%28__%29.md): Returns a quaternion created from an array of components.
- [GLKQuaternionMakeWithVector3](glkquaternionmakewithvector3%28____%29.md): Returns a quaternion created from a vector and a scalar.
- [GLKQuaternionMakeWithAngleAndVector3Axis](glkquaternionmakewithangleandvector3axis%28____%29.md): Creates a quaternion that represents a rotation around an axis.
- [GLKQuaternionMakeWithMatrix3](glkquaternionmakewithmatrix3%28__%29.md): Creates a quaternion from a rotation matrix.
- [GLKQuaternionMakeWithMatrix4](glkquaternionmakewithmatrix4%28__%29.md): Creates a quaternion from a rotation matrix.
