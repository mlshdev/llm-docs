> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix4multiplyandprojectvector3(_:_:)](https://developer.apple.com/documentation/glkit/glkmatrix4multiplyandprojectvector3(_:_:))

# GLKMatrix4MultiplyAndProjectVector3(\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Multiplies a `4x4` matrix by a position vector to create a vector in homogenous coordinates, then projects the result to a `3`-component vector.

## Declaration

```swift
func GLKMatrix4MultiplyAndProjectVector3(_ matrixLeft: GLKMatrix4, _ vectorRight: GLKVector3) -> GLKVector3
```

## Parameters

- `matrixLeft`: The matrix multiplicand.
- `vectorRight`: The vector multiplier.

<a id="return-value"></a>

## Return Value

A new vector created by first multiplying the matrix by the vector and then performing perspective division on the result vector.

<a id="Discussion"></a>

## Discussion

## See Also

### Performing Mathematical Operations on Vectors

- [GLKMatrix4MultiplyVector3(\_:\_:)](glkmatrix4multiplyvector3%28____%29.md): Multiplies a `4x4` matrix by a `3`-component vector.
- [GLKMatrix4MultiplyVector3Array(\_:\_:\_:)](glkmatrix4multiplyvector3array%28______%29.md): Multiplies a `4x4` matrix by an array of `3`-component vectors.
- [GLKMatrix4MultiplyVector3WithTranslation(\_:\_:)](glkmatrix4multiplyvector3withtranslation%28____%29.md): Multiplies a `4x4` matrix by a `3`-component vector, applying translation.
- [GLKMatrix4MultiplyVector3ArrayWithTranslation(\_:\_:\_:)](glkmatrix4multiplyvector3arraywithtranslation%28______%29.md): Multiplies a `4x4` matrix by an array of `3`-component vectors, applying translation.
- [GLKMatrix4MultiplyVector4(\_:\_:)](glkmatrix4multiplyvector4%28____%29.md): Multiplies a `4x4` matrix by a `4`-component vector.
- [GLKMatrix4MultiplyVector4Array(\_:\_:\_:)](glkmatrix4multiplyvector4array%28______%29.md): Multiplies a `4x4` matrix by an array of `4`-component vectors.
- [GLKMatrix4MultiplyAndProjectVector3Array(\_:\_:\_:)](glkmatrix4multiplyandprojectvector3array%28______%29.md): Multiplies a `4x4` matrix by an array of `3`-component vectors. Each result is projected back to `3`-component vector.

# GLKMatrix4MultiplyAndProjectVector3 (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Multiplies a `4x4` matrix by a position vector to create a vector in homogenous coordinates, then projects the result to a `3`-component vector.

## Declaration

```objectivec
static GLKVector3 GLKMatrix4MultiplyAndProjectVector3(GLKMatrix4 matrixLeft, GLKVector3 vectorRight);
```

## Parameters

- `matrixLeft`: The matrix multiplicand.
- `vectorRight`: The vector multiplier.

<a id="return-value"></a>

## Return Value

A new vector created by first multiplying the matrix by the vector and then performing perspective division on the result vector.

<a id="Discussion"></a>

## Discussion

## See Also

### Performing Mathematical Operations on Vectors

- [GLKMatrix4MultiplyVector3](glkmatrix4multiplyvector3%28____%29.md): Multiplies a `4x4` matrix by a `3`-component vector.
- [GLKMatrix4MultiplyVector3Array](glkmatrix4multiplyvector3array%28______%29.md): Multiplies a `4x4` matrix by an array of `3`-component vectors.
- [GLKMatrix4MultiplyVector3WithTranslation](glkmatrix4multiplyvector3withtranslation%28____%29.md): Multiplies a `4x4` matrix by a `3`-component vector, applying translation.
- [GLKMatrix4MultiplyVector3ArrayWithTranslation](glkmatrix4multiplyvector3arraywithtranslation%28______%29.md): Multiplies a `4x4` matrix by an array of `3`-component vectors, applying translation.
- [GLKMatrix4MultiplyVector4](glkmatrix4multiplyvector4%28____%29.md): Multiplies a `4x4` matrix by a `4`-component vector.
- [GLKMatrix4MultiplyVector4Array](glkmatrix4multiplyvector4array%28______%29.md): Multiplies a `4x4` matrix by an array of `4`-component vectors.
- [GLKMatrix4MultiplyAndProjectVector3Array](glkmatrix4multiplyandprojectvector3array%28______%29.md): Multiplies a `4x4` matrix by an array of `3`-component vectors. Each result is projected back to `3`-component vector.
