> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkquaternionmakewithvector3(_:_:)](https://developer.apple.com/documentation/glkit/glkquaternionmakewithvector3(_:_:))

# GLKQuaternionMakeWithVector3(\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a quaternion created from a vector and a scalar.

## Declaration

```swift
func GLKQuaternionMakeWithVector3(_ vector: GLKVector3, _ scalar: Float) -> GLKQuaternion
```

## Parameters

- `vector`: The vector portion of the new quaternion.
- `scalar`: The scalar portion of the new quaternion.

<a id="return-value"></a>

## Return Value

A new quaternion.

## See Also

### Creating Quaternions

- [GLKQuaternionMake(\_:\_:\_:\_:)](glkquaternionmake%28________%29.md): Returns a quaternion created from its separate components.
- [GLKQuaternionMakeWithArray(\_:)](glkquaternionmakewitharray%28__%29.md): Returns a quaternion created from an array of components.
- [GLKQuaternionMakeWithAngleAndAxis(\_:\_:\_:\_:)](glkquaternionmakewithangleandaxis%28________%29.md): Creates a quaternion that represents a rotation around an axis.
- [GLKQuaternionMakeWithAngleAndVector3Axis(\_:\_:)](glkquaternionmakewithangleandvector3axis%28____%29.md): Creates a quaternion that represents a rotation around an axis.
- [GLKQuaternionMakeWithMatrix3(\_:)](glkquaternionmakewithmatrix3%28__%29.md): Creates a quaternion from a rotation matrix.
- [GLKQuaternionMakeWithMatrix4(\_:)](glkquaternionmakewithmatrix4%28__%29.md): Creates a quaternion from a rotation matrix.

# GLKQuaternionMakeWithVector3 (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a quaternion created from a vector and a scalar.

## Declaration

```objectivec
static GLKQuaternion GLKQuaternionMakeWithVector3(GLKVector3 vector, float scalar);
```

## Parameters

- `vector`: The vector portion of the new quaternion.
- `scalar`: The scalar portion of the new quaternion.

<a id="return-value"></a>

## Return Value

A new quaternion.

## See Also

### Creating Quaternions

- [GLKQuaternionMake](glkquaternionmake%28________%29.md): Returns a quaternion created from its separate components.
- [GLKQuaternionMakeWithArray](glkquaternionmakewitharray%28__%29.md): Returns a quaternion created from an array of components.
- [GLKQuaternionMakeWithAngleAndAxis](glkquaternionmakewithangleandaxis%28________%29.md): Creates a quaternion that represents a rotation around an axis.
- [GLKQuaternionMakeWithAngleAndVector3Axis](glkquaternionmakewithangleandvector3axis%28____%29.md): Creates a quaternion that represents a rotation around an axis.
- [GLKQuaternionMakeWithMatrix3](glkquaternionmakewithmatrix3%28__%29.md): Creates a quaternion from a rotation matrix.
- [GLKQuaternionMakeWithMatrix4](glkquaternionmakewithmatrix4%28__%29.md): Creates a quaternion from a rotation matrix.
