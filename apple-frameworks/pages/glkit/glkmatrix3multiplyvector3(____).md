> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix3multiplyvector3(_:_:)](https://developer.apple.com/documentation/glkit/glkmatrix3multiplyvector3(_:_:))

# GLKMatrix3MultiplyVector3(\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Multiplies a `3x3` matrix by a vector.

## Declaration

```swift
func GLKMatrix3MultiplyVector3(_ matrixLeft: GLKMatrix3, _ vectorRight: GLKVector3) -> GLKVector3
```

## Parameters

- `matrixLeft`: The matrix multiplicand.
- `vectorRight`: The vector multiplier.

<a id="return-value"></a>

## Return Value

A new vector created by multiplying the matrix by the vector.

## See Also

### Performing Mathematical Operations on Vectors

- [GLKMatrix3MultiplyVector3Array(\_:\_:\_:)](glkmatrix3multiplyvector3array%28______%29.md): Multiplies a `3x3` matrix by an array of vectors.

# GLKMatrix3MultiplyVector3 (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Multiplies a `3x3` matrix by a vector.

## Declaration

```objectivec
static GLKVector3 GLKMatrix3MultiplyVector3(GLKMatrix3 matrixLeft, GLKVector3 vectorRight);
```

## Parameters

- `matrixLeft`: The matrix multiplicand.
- `vectorRight`: The vector multiplier.

<a id="return-value"></a>

## Return Value

A new vector created by multiplying the matrix by the vector.

## See Also

### Performing Mathematical Operations on Vectors

- [GLKMatrix3MultiplyVector3Array](glkmatrix3multiplyvector3array%28______%29.md): Multiplies a `3x3` matrix by an array of vectors.
