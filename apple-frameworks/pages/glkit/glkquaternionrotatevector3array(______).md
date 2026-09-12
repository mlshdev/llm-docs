> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkquaternionrotatevector3array(_:_:_:)](https://developer.apple.com/documentation/glkit/glkquaternionrotatevector3array(_:_:_:))

# GLKQuaternionRotateVector3Array(\_:\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Applies a quaternion rotation to an array of vectors.

## Declaration

```swift
func GLKQuaternionRotateVector3Array(_ quaternion: GLKQuaternion, _ vectors: UnsafeMutablePointer<GLKVector3>, _ vectorCount: Int)
```

## Parameters

- `quaternion`: A quaternion.
- `vectors`: On entry, an array of input vectors. On return, an array of output vectors.
- `vectorCount`: The number of vectors in the array.

## See Also

### Applying Quaternions to Vectors

- [GLKQuaternionRotateVector3(\_:\_:)](glkquaternionrotatevector3%28____%29.md): Returns a new vector that is calculated by applying a quaternion rotation to a vector.
- [GLKQuaternionRotateVector4(\_:\_:)](glkquaternionrotatevector4%28____%29.md): Returns a new vector calculated by applying a quaternion rotation to a vector.
- [GLKQuaternionRotateVector4Array(\_:\_:\_:)](glkquaternionrotatevector4array%28______%29.md): Applies a quaternion rotation to an array of vectors.

# GLKQuaternionRotateVector3Array (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Applies a quaternion rotation to an array of vectors.

## Declaration

```objectivec
void GLKQuaternionRotateVector3Array(GLKQuaternion quaternion, GLKVector3 *vectors, size_t vectorCount);
```

## Parameters

- `quaternion`: A quaternion.
- `vectors`: On entry, an array of input vectors. On return, an array of output vectors.
- `vectorCount`: The number of vectors in the array.

## See Also

### Applying Quaternions to Vectors

- [GLKQuaternionRotateVector3](glkquaternionrotatevector3%28____%29.md): Returns a new vector that is calculated by applying a quaternion rotation to a vector.
- [GLKQuaternionRotateVector4](glkquaternionrotatevector4%28____%29.md): Returns a new vector calculated by applying a quaternion rotation to a vector.
- [GLKQuaternionRotateVector4Array](glkquaternionrotatevector4array%28______%29.md): Applies a quaternion rotation to an array of vectors.
