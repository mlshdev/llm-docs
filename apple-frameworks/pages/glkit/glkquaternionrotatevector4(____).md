> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkquaternionrotatevector4(_:_:)](https://developer.apple.com/documentation/glkit/glkquaternionrotatevector4(_:_:))

# GLKQuaternionRotateVector4(\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new vector calculated by applying a quaternion rotation to a vector.

## Declaration

```swift
func GLKQuaternionRotateVector4(_ quaternion: GLKQuaternion, _ vector: GLKVector4) -> GLKVector4
```

## Parameters

- `quaternion`: A quaternion.
- `vector`: A source vector.

<a id="return-value"></a>

## Return Value

A new vector.

## See Also

### Applying Quaternions to Vectors

- [GLKQuaternionRotateVector3(\_:\_:)](glkquaternionrotatevector3%28____%29.md): Returns a new vector that is calculated by applying a quaternion rotation to a vector.
- [GLKQuaternionRotateVector3Array(\_:\_:\_:)](glkquaternionrotatevector3array%28______%29.md): Applies a quaternion rotation to an array of vectors.
- [GLKQuaternionRotateVector4Array(\_:\_:\_:)](glkquaternionrotatevector4array%28______%29.md): Applies a quaternion rotation to an array of vectors.

# GLKQuaternionRotateVector4 (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new vector calculated by applying a quaternion rotation to a vector.

## Declaration

```objectivec
static GLKVector4 GLKQuaternionRotateVector4(GLKQuaternion quaternion, GLKVector4 vector);
```

## Parameters

- `quaternion`: A quaternion.
- `vector`: A source vector.

<a id="return-value"></a>

## Return Value

A new vector.

## See Also

### Applying Quaternions to Vectors

- [GLKQuaternionRotateVector3](glkquaternionrotatevector3%28____%29.md): Returns a new vector that is calculated by applying a quaternion rotation to a vector.
- [GLKQuaternionRotateVector3Array](glkquaternionrotatevector3array%28______%29.md): Applies a quaternion rotation to an array of vectors.
- [GLKQuaternionRotateVector4Array](glkquaternionrotatevector4array%28______%29.md): Applies a quaternion rotation to an array of vectors.
