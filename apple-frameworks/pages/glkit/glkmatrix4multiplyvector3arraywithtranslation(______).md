> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix4multiplyvector3arraywithtranslation(_:_:_:)](https://developer.apple.com/documentation/glkit/glkmatrix4multiplyvector3arraywithtranslation(_:_:_:))

# GLKMatrix4MultiplyVector3ArrayWithTranslation(\_:\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Multiplies a `4x4` matrix by an array of `3`-component vectors, applying translation.

## Declaration

```swift
func GLKMatrix4MultiplyVector3ArrayWithTranslation(_ matrix: GLKMatrix4, _ vectors: UnsafeMutablePointer<GLKVector3>, _ vectorCount: Int)
```

## Parameters

- `matrix`: The matrix multiplicand.
- `vectors`: On entry, an array of input vectors. On return, an array of output vectors.
- `vectorCount`: The number of vectors in the array.

<a id="Discussion"></a>

## Discussion

The input vectors are treated as they were 4-component vectors with a `w`-component of `1.0`.

## See Also

### Performing Mathematical Operations on Vectors

- [GLKMatrix4MultiplyVector3(\_:\_:)](glkmatrix4multiplyvector3%28____%29.md): Multiplies a `4x4` matrix by a `3`-component vector.
- [GLKMatrix4MultiplyVector3Array(\_:\_:\_:)](glkmatrix4multiplyvector3array%28______%29.md): Multiplies a `4x4` matrix by an array of `3`-component vectors.
- [GLKMatrix4MultiplyVector3WithTranslation(\_:\_:)](glkmatrix4multiplyvector3withtranslation%28____%29.md): Multiplies a `4x4` matrix by a `3`-component vector, applying translation.
- [GLKMatrix4MultiplyVector4(\_:\_:)](glkmatrix4multiplyvector4%28____%29.md): Multiplies a `4x4` matrix by a `4`-component vector.
- [GLKMatrix4MultiplyVector4Array(\_:\_:\_:)](glkmatrix4multiplyvector4array%28______%29.md): Multiplies a `4x4` matrix by an array of `4`-component vectors.
- [GLKMatrix4MultiplyAndProjectVector3(\_:\_:)](glkmatrix4multiplyandprojectvector3%28____%29.md): Multiplies a `4x4` matrix by a position vector to create a vector in homogenous coordinates, then projects the result to a `3`-component vector.
- [GLKMatrix4MultiplyAndProjectVector3Array(\_:\_:\_:)](glkmatrix4multiplyandprojectvector3array%28______%29.md): Multiplies a `4x4` matrix by an array of `3`-component vectors. Each result is projected back to `3`-component vector.

# GLKMatrix4MultiplyVector3ArrayWithTranslation (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Multiplies a `4x4` matrix by an array of `3`-component vectors, applying translation.

## Declaration

```objectivec
static void GLKMatrix4MultiplyVector3ArrayWithTranslation(GLKMatrix4 matrix, GLKVector3 *vectors, size_t vectorCount);
```

## Parameters

- `matrix`: The matrix multiplicand.
- `vectors`: On entry, an array of input vectors. On return, an array of output vectors.
- `vectorCount`: The number of vectors in the array.

<a id="Discussion"></a>

## Discussion

The input vectors are treated as they were 4-component vectors with a `w`-component of `1.0`.

## See Also

### Performing Mathematical Operations on Vectors

- [GLKMatrix4MultiplyVector3](glkmatrix4multiplyvector3%28____%29.md): Multiplies a `4x4` matrix by a `3`-component vector.
- [GLKMatrix4MultiplyVector3Array](glkmatrix4multiplyvector3array%28______%29.md): Multiplies a `4x4` matrix by an array of `3`-component vectors.
- [GLKMatrix4MultiplyVector3WithTranslation](glkmatrix4multiplyvector3withtranslation%28____%29.md): Multiplies a `4x4` matrix by a `3`-component vector, applying translation.
- [GLKMatrix4MultiplyVector4](glkmatrix4multiplyvector4%28____%29.md): Multiplies a `4x4` matrix by a `4`-component vector.
- [GLKMatrix4MultiplyVector4Array](glkmatrix4multiplyvector4array%28______%29.md): Multiplies a `4x4` matrix by an array of `4`-component vectors.
- [GLKMatrix4MultiplyAndProjectVector3](glkmatrix4multiplyandprojectvector3%28____%29.md): Multiplies a `4x4` matrix by a position vector to create a vector in homogenous coordinates, then projects the result to a `3`-component vector.
- [GLKMatrix4MultiplyAndProjectVector3Array](glkmatrix4multiplyandprojectvector3array%28______%29.md): Multiplies a `4x4` matrix by an array of `3`-component vectors. Each result is projected back to `3`-component vector.
