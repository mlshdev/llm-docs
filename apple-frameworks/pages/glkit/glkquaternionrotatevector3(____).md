> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkquaternionrotatevector3(_:_:)](https://developer.apple.com/documentation/glkit/glkquaternionrotatevector3(_:_:))

# GLKQuaternionRotateVector3(\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new vector that is calculated by applying a quaternion rotation to a vector.

## Declaration

```swift
func GLKQuaternionRotateVector3(_ quaternion: GLKQuaternion, _ vector: GLKVector3) -> GLKVector3
```

## Parameters

- `quaternion`: A quaternion.
- `vector`: A source vector.

<a id="return-value"></a>

## Return Value

A new vector.

## See Also

### Applying Quaternions to Vectors

- [GLKQuaternionRotateVector3Array(\_:\_:\_:)](glkquaternionrotatevector3array%28______%29.md): Applies a quaternion rotation to an array of vectors.
- [GLKQuaternionRotateVector4(\_:\_:)](glkquaternionrotatevector4%28____%29.md): Returns a new vector calculated by applying a quaternion rotation to a vector.
- [GLKQuaternionRotateVector4Array(\_:\_:\_:)](glkquaternionrotatevector4array%28______%29.md): Applies a quaternion rotation to an array of vectors.

# GLKQuaternionRotateVector3 (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new vector that is calculated by applying a quaternion rotation to a vector.

## Declaration

```objectivec
static GLKVector3 GLKQuaternionRotateVector3(GLKQuaternion quaternion, GLKVector3 vector);
```

## Parameters

- `quaternion`: A quaternion.
- `vector`: A source vector.

<a id="return-value"></a>

## Return Value

A new vector.

## See Also

### Applying Quaternions to Vectors

- [GLKQuaternionRotateVector3Array](glkquaternionrotatevector3array%28______%29.md): Applies a quaternion rotation to an array of vectors.
- [GLKQuaternionRotateVector4](glkquaternionrotatevector4%28____%29.md): Returns a new vector calculated by applying a quaternion rotation to a vector.
- [GLKQuaternionRotateVector4Array](glkquaternionrotatevector4array%28______%29.md): Applies a quaternion rotation to an array of vectors.
