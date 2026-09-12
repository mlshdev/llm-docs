> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix3multiply(_:_:)](https://developer.apple.com/documentation/glkit/glkmatrix3multiply(_:_:))

# GLKMatrix3Multiply(\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns the product of two matrices.

## Declaration

```swift
func GLKMatrix3Multiply(_ matrixLeft: GLKMatrix3, _ matrixRight: GLKMatrix3) -> GLKMatrix3
```

## Parameters

- `matrixLeft`: The multiplicand.
- `matrixRight`: The multiplier.

<a id="return-value"></a>

## Return Value

A new matrix formed by multiplying the two matrices together.

## See Also

### Performing Mathematical Operations on Matrices

- [GLKMatrix3Invert(\_:\_:)](glkmatrix3invert%28____%29.md): Returns the inverse of a matrix.
- [GLKMatrix3Transpose(\_:)](glkmatrix3transpose%28__%29.md): Returns the transpose of a matrix.
- [GLKMatrix3InvertAndTranspose(\_:\_:)](glkmatrix3invertandtranspose%28____%29.md): Returns the inverse transpose of a matrix.
- [GLKMatrix3Rotate(\_:\_:\_:\_:\_:)](glkmatrix3rotate%28__________%29.md): Returns a new `3x3` matrix created by concatenating a matrix with a rotation around a vector.
- [GLKMatrix3RotateWithVector3(\_:\_:\_:)](glkmatrix3rotatewithvector3%28______%29.md): Returns a new `3x3` matrix created by concatenating a matrix with a rotation around a vector.
- [GLKMatrix3RotateWithVector4(\_:\_:\_:)](glkmatrix3rotatewithvector4%28______%29.md): Returns a new `3x3` matrix created by concatenating a matrix with a rotation around a vector.
- [GLKMatrix3RotateX(\_:\_:)](glkmatrix3rotatex%28____%29.md): Returns a new `3x3` matrix created by concatenating a matrix with a rotation around the x-axis.
- [GLKMatrix3RotateY(\_:\_:)](glkmatrix3rotatey%28____%29.md): Returns a new `3x3` matrix created by concatenating a matrix with a rotation around the y-axis.
- [GLKMatrix3RotateZ(\_:\_:)](glkmatrix3rotatez%28____%29.md): Returns a new `3x3` matrix created by concatenating a matrix with a rotation around the z-axis.
- [GLKMatrix3Scale(\_:\_:\_:\_:)](glkmatrix3scale%28________%29.md): Returns a new `3x3` matrix created by concatenating a matrix with a scaling transform.
- [GLKMatrix3ScaleWithVector3(\_:\_:)](glkmatrix3scalewithvector3%28____%29.md): Returns a new `3x3` matrix created by concatenating a matrix with a scaling transform defined by a vector.
- [GLKMatrix3ScaleWithVector4(\_:\_:)](glkmatrix3scalewithvector4%28____%29.md): Returns a new `3x3` matrix created by concatenating a matrix with a scaling transform defined by a vector.
- [GLKMatrix3Add(\_:\_:)](glkmatrix3add%28____%29.md): Returns a new `3x3` matrix created by performing a component-wise addition of two matrices.
- [GLKMatrix3Subtract(\_:\_:)](glkmatrix3subtract%28____%29.md): Returns a new `3x3` matrix created by performing a component-wise subtraction of two matrices.

# GLKMatrix3Multiply (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns the product of two matrices.

## Declaration

```objectivec
static GLKMatrix3 GLKMatrix3Multiply(GLKMatrix3 matrixLeft, GLKMatrix3 matrixRight);
```

## Parameters

- `matrixLeft`: The multiplicand.
- `matrixRight`: The multiplier.

<a id="return-value"></a>

## Return Value

A new matrix formed by multiplying the two matrices together.

## See Also

### Performing Mathematical Operations on Matrices

- [GLKMatrix3Invert](glkmatrix3invert%28____%29.md): Returns the inverse of a matrix.
- [GLKMatrix3Transpose](glkmatrix3transpose%28__%29.md): Returns the transpose of a matrix.
- [GLKMatrix3InvertAndTranspose](glkmatrix3invertandtranspose%28____%29.md): Returns the inverse transpose of a matrix.
- [GLKMatrix3Rotate](glkmatrix3rotate%28__________%29.md): Returns a new `3x3` matrix created by concatenating a matrix with a rotation around a vector.
- [GLKMatrix3RotateWithVector3](glkmatrix3rotatewithvector3%28______%29.md): Returns a new `3x3` matrix created by concatenating a matrix with a rotation around a vector.
- [GLKMatrix3RotateWithVector4](glkmatrix3rotatewithvector4%28______%29.md): Returns a new `3x3` matrix created by concatenating a matrix with a rotation around a vector.
- [GLKMatrix3RotateX](glkmatrix3rotatex%28____%29.md): Returns a new `3x3` matrix created by concatenating a matrix with a rotation around the x-axis.
- [GLKMatrix3RotateY](glkmatrix3rotatey%28____%29.md): Returns a new `3x3` matrix created by concatenating a matrix with a rotation around the y-axis.
- [GLKMatrix3RotateZ](glkmatrix3rotatez%28____%29.md): Returns a new `3x3` matrix created by concatenating a matrix with a rotation around the z-axis.
- [GLKMatrix3Scale](glkmatrix3scale%28________%29.md): Returns a new `3x3` matrix created by concatenating a matrix with a scaling transform.
- [GLKMatrix3ScaleWithVector3](glkmatrix3scalewithvector3%28____%29.md): Returns a new `3x3` matrix created by concatenating a matrix with a scaling transform defined by a vector.
- [GLKMatrix3ScaleWithVector4](glkmatrix3scalewithvector4%28____%29.md): Returns a new `3x3` matrix created by concatenating a matrix with a scaling transform defined by a vector.
- [GLKMatrix3Add](glkmatrix3add%28____%29.md): Returns a new `3x3` matrix created by performing a component-wise addition of two matrices.
- [GLKMatrix3Subtract](glkmatrix3subtract%28____%29.md): Returns a new `3x3` matrix created by performing a component-wise subtraction of two matrices.
