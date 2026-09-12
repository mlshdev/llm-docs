> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix3multiplyvector3array(_:_:_:)](https://developer.apple.com/documentation/glkit/glkmatrix3multiplyvector3array(_:_:_:))

# GLKMatrix3MultiplyVector3Array(\_:\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Multiplies a `3x3` matrix by an array of vectors.

## Declaration

```swift
func GLKMatrix3MultiplyVector3Array(_ matrix: GLKMatrix3, _ vectors: UnsafeMutablePointer<GLKVector3>, _ vectorCount: Int)
```

## Parameters

- `matrix`: The matrix multiplicand.
- `vectors`: On entry, an array of input vectors. On return, an array of output vectors.
- `vectorCount`: The number of vectors in the array.

## See Also

### Performing Mathematical Operations on Vectors

- [GLKMatrix3MultiplyVector3(\_:\_:)](glkmatrix3multiplyvector3%28____%29.md): Multiplies a `3x3` matrix by a vector.

# GLKMatrix3MultiplyVector3Array (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Multiplies a `3x3` matrix by an array of vectors.

## Declaration

```objectivec
static void GLKMatrix3MultiplyVector3Array(GLKMatrix3 matrix, GLKVector3 *vectors, size_t vectorCount);
```

## Parameters

- `matrix`: The matrix multiplicand.
- `vectors`: On entry, an array of input vectors. On return, an array of output vectors.
- `vectorCount`: The number of vectors in the array.

## See Also

### Performing Mathematical Operations on Vectors

- [GLKMatrix3MultiplyVector3](glkmatrix3multiplyvector3%28____%29.md): Multiplies a `3x3` matrix by a vector.
