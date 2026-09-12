> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkquaternionmake(_:_:_:_:)](https://developer.apple.com/documentation/glkit/glkquaternionmake(_:_:_:_:))

# GLKQuaternionMake(\_:\_:\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a quaternion created from its separate components.

## Declaration

```swift
func GLKQuaternionMake(_ x: Float, _ y: Float, _ z: Float, _ w: Float) -> GLKQuaternion
```

## Parameters

- `x`: The `x` component of the quaternion.
- `y`: The `y` component of the quaternion.
- `z`: The `z` component of the quaternion.
- `w`: The `w` component of the quaternion.

<a id="return-value"></a>

## Return Value

A new quaternion.

## See Also

### Creating Quaternions

- [GLKQuaternionMakeWithArray(\_:)](glkquaternionmakewitharray%28__%29.md): Returns a quaternion created from an array of components.
- [GLKQuaternionMakeWithVector3(\_:\_:)](glkquaternionmakewithvector3%28____%29.md): Returns a quaternion created from a vector and a scalar.
- [GLKQuaternionMakeWithAngleAndAxis(\_:\_:\_:\_:)](glkquaternionmakewithangleandaxis%28________%29.md): Creates a quaternion that represents a rotation around an axis.
- [GLKQuaternionMakeWithAngleAndVector3Axis(\_:\_:)](glkquaternionmakewithangleandvector3axis%28____%29.md): Creates a quaternion that represents a rotation around an axis.
- [GLKQuaternionMakeWithMatrix3(\_:)](glkquaternionmakewithmatrix3%28__%29.md): Creates a quaternion from a rotation matrix.
- [GLKQuaternionMakeWithMatrix4(\_:)](glkquaternionmakewithmatrix4%28__%29.md): Creates a quaternion from a rotation matrix.

# GLKQuaternionMake (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a quaternion created from its separate components.

## Declaration

```objectivec
static GLKQuaternion GLKQuaternionMake(float x, float y, float z, float w);
```

## Parameters

- `x`: The `x` component of the quaternion.
- `y`: The `y` component of the quaternion.
- `z`: The `z` component of the quaternion.
- `w`: The `w` component of the quaternion.

<a id="return-value"></a>

## Return Value

A new quaternion.

## See Also

### Creating Quaternions

- [GLKQuaternionMakeWithArray](glkquaternionmakewitharray%28__%29.md): Returns a quaternion created from an array of components.
- [GLKQuaternionMakeWithVector3](glkquaternionmakewithvector3%28____%29.md): Returns a quaternion created from a vector and a scalar.
- [GLKQuaternionMakeWithAngleAndAxis](glkquaternionmakewithangleandaxis%28________%29.md): Creates a quaternion that represents a rotation around an axis.
- [GLKQuaternionMakeWithAngleAndVector3Axis](glkquaternionmakewithangleandvector3axis%28____%29.md): Creates a quaternion that represents a rotation around an axis.
- [GLKQuaternionMakeWithMatrix3](glkquaternionmakewithmatrix3%28__%29.md): Creates a quaternion from a rotation matrix.
- [GLKQuaternionMakeWithMatrix4](glkquaternionmakewithmatrix4%28__%29.md): Creates a quaternion from a rotation matrix.
