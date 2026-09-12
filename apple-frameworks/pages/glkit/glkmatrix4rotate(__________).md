> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix4rotate(_:_:_:_:_:)](https://developer.apple.com/documentation/glkit/glkmatrix4rotate(_:_:_:_:_:))

# GLKMatrix4Rotate(\_:\_:\_:\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new `4x4` matrix created by concatenating a matrix with a rotation around a vector.

## Declaration

```swift
func GLKMatrix4Rotate(_ matrix: GLKMatrix4, _ radians: Float, _ x: Float, _ y: Float, _ z: Float) -> GLKMatrix4
```

## Parameters

- `matrix`: A matrix.
- `radians`: The angle of the rotation (a positive angle is counterclockwise).
- `x`: The `x` component of the rotation vector.
- `y`: The `y` component of the rotation vector.
- `z`: The `z` component of the rotation vector.

<a id="return-value"></a>

## Return Value

A new matrix.

## See Also

### Performing Mathematical Operations on Matrices

- [GLKMatrix4Invert(\_:\_:)](glkmatrix4invert%28____%29.md): Returns the inverse of a matrix.
- [GLKMatrix4Transpose(\_:)](glkmatrix4transpose%28__%29.md): Returns the transpose of a matrix.
- [GLKMatrix4InvertAndTranspose(\_:\_:)](glkmatrix4invertandtranspose%28____%29.md): Returns the inverse transpose of a matrix.
- [GLKMatrix4Multiply(\_:\_:)](glkmatrix4multiply%28____%29.md): Returns the product of two matrices.
- [GLKMatrix4RotateWithVector3(\_:\_:\_:)](glkmatrix4rotatewithvector3%28______%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a rotation around a vector.
- [GLKMatrix4RotateWithVector4(\_:\_:\_:)](glkmatrix4rotatewithvector4%28______%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a rotation around a vector.
- [GLKMatrix4RotateX(\_:\_:)](glkmatrix4rotatex%28____%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a rotation around the x-axis.
- [GLKMatrix4RotateY(\_:\_:)](glkmatrix4rotatey%28____%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a rotation around the y-axis.
- [GLKMatrix4RotateZ(\_:\_:)](glkmatrix4rotatez%28____%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a rotation around the z-axis.
- [GLKMatrix4Scale(\_:\_:\_:\_:)](glkmatrix4scale%28________%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a scaling transform.
- [GLKMatrix4ScaleWithVector3(\_:\_:)](glkmatrix4scalewithvector3%28____%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a scaling transform defined by a vector.
- [GLKMatrix4ScaleWithVector4(\_:\_:)](glkmatrix4scalewithvector4%28____%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a scaling transform defined by a vector.
- [GLKMatrix4Translate(\_:\_:\_:\_:)](glkmatrix4translate%28________%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a translation transform.
- [GLKMatrix4TranslateWithVector3(\_:\_:)](glkmatrix4translatewithvector3%28____%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a translation transform defined by a vector.
- [GLKMatrix4TranslateWithVector4(\_:\_:)](glkmatrix4translatewithvector4%28____%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a translation transform defined by a vector.

# GLKMatrix4Rotate (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new `4x4` matrix created by concatenating a matrix with a rotation around a vector.

## Declaration

```objectivec
static GLKMatrix4 GLKMatrix4Rotate(GLKMatrix4 matrix, float radians, float x, float y, float z);
```

## Parameters

- `matrix`: A matrix.
- `radians`: The angle of the rotation (a positive angle is counterclockwise).
- `x`: The `x` component of the rotation vector.
- `y`: The `y` component of the rotation vector.
- `z`: The `z` component of the rotation vector.

<a id="return-value"></a>

## Return Value

A new matrix.

## See Also

### Performing Mathematical Operations on Matrices

- [GLKMatrix4Invert](glkmatrix4invert%28____%29.md): Returns the inverse of a matrix.
- [GLKMatrix4Transpose](glkmatrix4transpose%28__%29.md): Returns the transpose of a matrix.
- [GLKMatrix4InvertAndTranspose](glkmatrix4invertandtranspose%28____%29.md): Returns the inverse transpose of a matrix.
- [GLKMatrix4Multiply](glkmatrix4multiply%28____%29.md): Returns the product of two matrices.
- [GLKMatrix4RotateWithVector3](glkmatrix4rotatewithvector3%28______%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a rotation around a vector.
- [GLKMatrix4RotateWithVector4](glkmatrix4rotatewithvector4%28______%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a rotation around a vector.
- [GLKMatrix4RotateX](glkmatrix4rotatex%28____%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a rotation around the x-axis.
- [GLKMatrix4RotateY](glkmatrix4rotatey%28____%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a rotation around the y-axis.
- [GLKMatrix4RotateZ](glkmatrix4rotatez%28____%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a rotation around the z-axis.
- [GLKMatrix4Scale](glkmatrix4scale%28________%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a scaling transform.
- [GLKMatrix4ScaleWithVector3](glkmatrix4scalewithvector3%28____%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a scaling transform defined by a vector.
- [GLKMatrix4ScaleWithVector4](glkmatrix4scalewithvector4%28____%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a scaling transform defined by a vector.
- [GLKMatrix4Translate](glkmatrix4translate%28________%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a translation transform.
- [GLKMatrix4TranslateWithVector3](glkmatrix4translatewithvector3%28____%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a translation transform defined by a vector.
- [GLKMatrix4TranslateWithVector4](glkmatrix4translatewithvector4%28____%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a translation transform defined by a vector.
