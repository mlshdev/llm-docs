> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix3-pcl](https://developer.apple.com/documentation/glkit/glkmatrix3-pcl)

# GLKMatrix3 (Swift)

**Framework:** GLKit  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `GLKMatrix3` type defines a `3x3` floating-point matrix as well as many mathematical operations commonly used to manipulate matrices. A `3x3` matrix is commonly used in graphics programming to represent scaling or rotation transformations to convert from one coordinate system to another.

The functions that manipulate `GLKMatrix3` structures treat the inputs as immutable, instead returning a new matrix that represent the results of the operation.

## Topics

### Creating Matrices

- [GLKMatrix3Make(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](glkmatrix3make%28__________________%29.md): Returns a `3x3` matrix created from individual component values.
- [GLKMatrix3MakeAndTranspose(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](glkmatrix3makeandtranspose%28__________________%29.md): Returns a `3x3` transposed matrix created from individual component values.
- [GLKMatrix3MakeWithArray(\_:)](glkmatrix3makewitharray%28__%29.md): Returns a `3x3` matrix created from an array of component values.
- [GLKMatrix3MakeWithArrayAndTranspose(\_:)](glkmatrix3makewitharrayandtranspose%28__%29.md): Returns a `3x3` transposed matrix created from an array of component values.
- [GLKMatrix3MakeWithColumns(\_:\_:\_:)](glkmatrix3makewithcolumns%28______%29.md): Returns a `3x3` matrix created from three column vectors.
- [GLKMatrix3MakeWithRows(\_:\_:\_:)](glkmatrix3makewithrows%28______%29.md): Returns a `3x3` matrix created from three row vectors.
- [GLKMatrix3MakeRotation(\_:\_:\_:\_:)](glkmatrix3makerotation%28________%29.md): Returns a `3x3` matrix that performs a rotation around an arbitrary vector.
- [GLKMatrix3MakeXRotation(\_:)](glkmatrix3makexrotation%28__%29.md): Returns a `3x3` matrix that performs a rotation around the positive x-axis.
- [GLKMatrix3MakeYRotation(\_:)](glkmatrix3makeyrotation%28__%29.md): Returns a `3x3` matrix that performs a rotation around the positive y-axis.
- [GLKMatrix3MakeZRotation(\_:)](glkmatrix3makezrotation%28__%29.md): Returns a `3x3` matrix that performs a rotation around the positive z-axis.
- [GLKMatrix3MakeWithQuaternion(\_:)](glkmatrix3makewithquaternion%28__%29.md): Returns a `3x3` matrix that performs a rotation based on a quaternion.
- [GLKMatrix3MakeScale(\_:\_:\_:)](glkmatrix3makescale%28______%29.md): Returns a `3x3` matrix that performs a scaling transformation.

### Working With Parts of a Matrix

- [GLKMatrix3GetMatrix2(\_:)](glkmatrix3getmatrix2%28__%29.md): Returns the upper-left `2x2` section of a `3x3` matrix.
- [GLKMatrix3GetColumn(\_:\_:)](glkmatrix3getcolumn%28____%29.md): Retrieves a column from a `3x3` matrix.
- [GLKMatrix3GetRow(\_:\_:)](glkmatrix3getrow%28____%29.md): Retrieves a row from a `3x3` matrix.
- [GLKMatrix3SetColumn(\_:\_:\_:)](glkmatrix3setcolumn%28______%29.md): Returns a new `3x3` matrix with one column replaced by a new vector.
- [GLKMatrix3SetRow(\_:\_:\_:)](glkmatrix3setrow%28______%29.md): Returns a new `3x3` matrix with one row replaced by a new vector.

### Performing Mathematical Operations on Matrices

- [GLKMatrix3Invert(\_:\_:)](glkmatrix3invert%28____%29.md): Returns the inverse of a matrix.
- [GLKMatrix3Transpose(\_:)](glkmatrix3transpose%28__%29.md): Returns the transpose of a matrix.
- [GLKMatrix3InvertAndTranspose(\_:\_:)](glkmatrix3invertandtranspose%28____%29.md): Returns the inverse transpose of a matrix.
- [GLKMatrix3Multiply(\_:\_:)](glkmatrix3multiply%28____%29.md): Returns the product of two matrices.
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

### Performing Mathematical Operations on Vectors

- [GLKMatrix3MultiplyVector3(\_:\_:)](glkmatrix3multiplyvector3%28____%29.md): Multiplies a `3x3` matrix by a vector.
- [GLKMatrix3MultiplyVector3Array(\_:\_:\_:)](glkmatrix3multiplyvector3array%28______%29.md): Multiplies a `3x3` matrix by an array of vectors.

### Data Types

- [GLKMatrix2](glkmatrix2.md): A `2x2` matrix.
- [GLKMatrix3](glkmatrix3.md): A `3x3` matrix stored in column-major order.

### Constants

- [GLKMatrix3Identity](glkmatrix3identity.md): A `3x3` identity matrix.

## See Also

### Math Utilties

- [GLKMatrixStack](glkmatrixstack.md): An opaque type that represents a stack of 4 x 4 matrices, providing support for hierarchical transform modeling and similar tasks.
- [GLKMatrix4](glkmatrix4-pce.md)
- [GLKVector2](glkvector2-pbj.md)
- [GLKVector3](glkvector3-pbt.md)
- [GLKVector4](glkvector4-pbk.md)
- [GLKQuaternion](glkquaternion-pc6.md)
- [GLKit Math Utilities](glkit-math-utilities.md)

# GLKMatrix3 (Objective-C)

**Framework:** GLKit  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `GLKMatrix3` type defines a `3x3` floating-point matrix as well as many mathematical operations commonly used to manipulate matrices. A `3x3` matrix is commonly used in graphics programming to represent scaling or rotation transformations to convert from one coordinate system to another.

The functions that manipulate `GLKMatrix3` structures treat the inputs as immutable, instead returning a new matrix that represent the results of the operation.

## Topics

### Creating Matrices

- [GLKMatrix3Make](glkmatrix3make%28__________________%29.md): Returns a `3x3` matrix created from individual component values.
- [GLKMatrix3MakeAndTranspose](glkmatrix3makeandtranspose%28__________________%29.md): Returns a `3x3` transposed matrix created from individual component values.
- [GLKMatrix3MakeWithArray](glkmatrix3makewitharray%28__%29.md): Returns a `3x3` matrix created from an array of component values.
- [GLKMatrix3MakeWithArrayAndTranspose](glkmatrix3makewitharrayandtranspose%28__%29.md): Returns a `3x3` transposed matrix created from an array of component values.
- [GLKMatrix3MakeWithColumns](glkmatrix3makewithcolumns%28______%29.md): Returns a `3x3` matrix created from three column vectors.
- [GLKMatrix3MakeWithRows](glkmatrix3makewithrows%28______%29.md): Returns a `3x3` matrix created from three row vectors.
- [GLKMatrix3MakeRotation](glkmatrix3makerotation%28________%29.md): Returns a `3x3` matrix that performs a rotation around an arbitrary vector.
- [GLKMatrix3MakeXRotation](glkmatrix3makexrotation%28__%29.md): Returns a `3x3` matrix that performs a rotation around the positive x-axis.
- [GLKMatrix3MakeYRotation](glkmatrix3makeyrotation%28__%29.md): Returns a `3x3` matrix that performs a rotation around the positive y-axis.
- [GLKMatrix3MakeZRotation](glkmatrix3makezrotation%28__%29.md): Returns a `3x3` matrix that performs a rotation around the positive z-axis.
- [GLKMatrix3MakeWithQuaternion](glkmatrix3makewithquaternion%28__%29.md): Returns a `3x3` matrix that performs a rotation based on a quaternion.
- [GLKMatrix3MakeScale](glkmatrix3makescale%28______%29.md): Returns a `3x3` matrix that performs a scaling transformation.

### Working With Parts of a Matrix

- [GLKMatrix3GetMatrix2](glkmatrix3getmatrix2%28__%29.md): Returns the upper-left `2x2` section of a `3x3` matrix.
- [GLKMatrix3GetColumn](glkmatrix3getcolumn%28____%29.md): Retrieves a column from a `3x3` matrix.
- [GLKMatrix3GetRow](glkmatrix3getrow%28____%29.md): Retrieves a row from a `3x3` matrix.
- [GLKMatrix3SetColumn](glkmatrix3setcolumn%28______%29.md): Returns a new `3x3` matrix with one column replaced by a new vector.
- [GLKMatrix3SetRow](glkmatrix3setrow%28______%29.md): Returns a new `3x3` matrix with one row replaced by a new vector.

### Performing Mathematical Operations on Matrices

- [GLKMatrix3Invert](glkmatrix3invert%28____%29.md): Returns the inverse of a matrix.
- [GLKMatrix3Transpose](glkmatrix3transpose%28__%29.md): Returns the transpose of a matrix.
- [GLKMatrix3InvertAndTranspose](glkmatrix3invertandtranspose%28____%29.md): Returns the inverse transpose of a matrix.
- [GLKMatrix3Multiply](glkmatrix3multiply%28____%29.md): Returns the product of two matrices.
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

### Performing Mathematical Operations on Vectors

- [GLKMatrix3MultiplyVector3](glkmatrix3multiplyvector3%28____%29.md): Multiplies a `3x3` matrix by a vector.
- [GLKMatrix3MultiplyVector3Array](glkmatrix3multiplyvector3array%28______%29.md): Multiplies a `3x3` matrix by an array of vectors.

### Data Types

- [GLKMatrix2](glkmatrix2.md): A `2x2` matrix.
- [GLKMatrix3](glkmatrix3.md): A `3x3` matrix stored in column-major order.

### Constants

- [GLKMatrix3Identity](glkmatrix3identity.md): A `3x3` identity matrix.

## See Also

### Math Utilties

- [GLKMatrixStackRef](glkmatrixstack.md): An opaque type that represents a stack of 4 x 4 matrices, providing support for hierarchical transform modeling and similar tasks.
- [GLKMatrix4](glkmatrix4-pce.md)
- [GLKVector2](glkvector2-pbj.md)
- [GLKVector3](glkvector3-pbt.md)
- [GLKVector4](glkvector4-pbk.md)
- [GLKQuaternion](glkquaternion-pc6.md)
- [GLKit Math Utilities](glkit-math-utilities.md)
