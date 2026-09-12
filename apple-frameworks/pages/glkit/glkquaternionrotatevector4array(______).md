> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkquaternionrotatevector4array(_:_:_:)](https://developer.apple.com/documentation/glkit/glkquaternionrotatevector4array(_:_:_:))

# GLKQuaternionRotateVector4Array(\_:\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Applies a quaternion rotation to an array of vectors.

## Declaration

```swift
func GLKQuaternionRotateVector4Array(_ quaternion: GLKQuaternion, _ vectors: UnsafeMutablePointer<GLKVector4>, _ vectorCount: Int)
```

## Parameters

- `quaternion`: A quaternion.
- `vectors`: On entry, an array of input vectors. On return, an array of output vectors.
- `vectorCount`: The number of vectors in the array.

## See Also

### Applying Quaternions to Vectors

- [GLKQuaternionRotateVector3(\_:\_:)](glkquaternionrotatevector3%28____%29.md): Returns a new vector that is calculated by applying a quaternion rotation to a vector.
- [GLKQuaternionRotateVector3Array(\_:\_:\_:)](glkquaternionrotatevector3array%28______%29.md): Applies a quaternion rotation to an array of vectors.
- [GLKQuaternionRotateVector4(\_:\_:)](glkquaternionrotatevector4%28____%29.md): Returns a new vector calculated by applying a quaternion rotation to a vector.

# GLKQuaternionRotateVector4Array (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Applies a quaternion rotation to an array of vectors.

## Declaration

```objectivec
void GLKQuaternionRotateVector4Array(GLKQuaternion quaternion, GLKVector4 *vectors, size_t vectorCount);
```

## Parameters

- `quaternion`: A quaternion.
- `vectors`: On entry, an array of input vectors. On return, an array of output vectors.
- `vectorCount`: The number of vectors in the array.

## See Also

### Applying Quaternions to Vectors

- [GLKQuaternionRotateVector3](glkquaternionrotatevector3%28____%29.md): Returns a new vector that is calculated by applying a quaternion rotation to a vector.
- [GLKQuaternionRotateVector3Array](glkquaternionrotatevector3array%28______%29.md): Applies a quaternion rotation to an array of vectors.
- [GLKQuaternionRotateVector4](glkquaternionrotatevector4%28____%29.md): Returns a new vector calculated by applying a quaternion rotation to a vector.
