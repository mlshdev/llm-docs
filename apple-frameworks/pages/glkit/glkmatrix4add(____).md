> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix4add(_:_:)](https://developer.apple.com/documentation/glkit/glkmatrix4add(_:_:))

# GLKMatrix4Add(\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new `4x4` matrix created by performing a component-wise addition of two matrices.

## Declaration

```swift
func GLKMatrix4Add(_ matrixLeft: GLKMatrix4, _ matrixRight: GLKMatrix4) -> GLKMatrix4
```

## Parameters

- `matrixLeft`: The first matrix.
- `matrixRight`: The second matrix.

<a id="return-value"></a>

## Return Value

A new matrix whose components each represent the sum of the components found in the same positions of the two source matrices.

## See Also

### Performing Mathematical Operations on Matrices

- [GLKMatrix4Invert(\_:\_:)](glkmatrix4invert%28____%29.md): Returns the inverse of a matrix.
- [GLKMatrix4Transpose(\_:)](glkmatrix4transpose%28__%29.md): Returns the transpose of a matrix.
- [GLKMatrix4InvertAndTranspose(\_:\_:)](glkmatrix4invertandtranspose%28____%29.md): Returns the inverse transpose of a matrix.
- [GLKMatrix4Multiply(\_:\_:)](glkmatrix4multiply%28____%29.md): Returns the product of two matrices.
- [GLKMatrix4Rotate(\_:\_:\_:\_:\_:)](glkmatrix4rotate%28__________%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a rotation around a vector.
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

# GLKMatrix4Add (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new `4x4` matrix created by performing a component-wise addition of two matrices.

## Declaration

```objectivec
static GLKMatrix4 GLKMatrix4Add(GLKMatrix4 matrixLeft, GLKMatrix4 matrixRight);
```

## Parameters

- `matrixLeft`: The first matrix.
- `matrixRight`: The second matrix.

<a id="return-value"></a>

## Return Value

A new matrix whose components each represent the sum of the components found in the same positions of the two source matrices.

## See Also

### Performing Mathematical Operations on Matrices

- [GLKMatrix4Invert](glkmatrix4invert%28____%29.md): Returns the inverse of a matrix.
- [GLKMatrix4Transpose](glkmatrix4transpose%28__%29.md): Returns the transpose of a matrix.
- [GLKMatrix4InvertAndTranspose](glkmatrix4invertandtranspose%28____%29.md): Returns the inverse transpose of a matrix.
- [GLKMatrix4Multiply](glkmatrix4multiply%28____%29.md): Returns the product of two matrices.
- [GLKMatrix4Rotate](glkmatrix4rotate%28__________%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a rotation around a vector.
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
