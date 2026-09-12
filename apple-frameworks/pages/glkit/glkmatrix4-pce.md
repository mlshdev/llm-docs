> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix4-pce](https://developer.apple.com/documentation/glkit/glkmatrix4-pce)

# GLKMatrix4 (Swift)

**Framework:** GLKit  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The [GLKMatrix4](glkmatrix4.md) type defines a `4x4` floating-point matrix as well as many mathematical operations commonly used to manipulate matrices. 3D graphics programming uses matrices extensively as a convenient way to represent a graphical transformation between different coordinate systems. These transformations include translation, scaling, rotation and projection; through matrix multiplication, multiple transformations can be concatenated into a single transformation matrix.

The functions that manipulate [GLKMatrix4](glkmatrix4.md) structures treat the inputs as immutable, instead returning a new matrix that represent the results of the operation.

## Topics

### Creating Matrices

- [GLKMatrix4Make(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](glkmatrix4make%28________________________________%29.md): Returns a `4x4` matrix created from individual component values.
- [GLKMatrix4MakeAndTranspose(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](glkmatrix4makeandtranspose%28________________________________%29.md): Returns a `4x4` transposed matrix created from individual component values.
- [GLKMatrix4MakeWithArray(\_:)](glkmatrix4makewitharray%28__%29.md): Returns a `4x4` matrix created from an array of component values.
- [GLKMatrix4MakeWithArrayAndTranspose(\_:)](glkmatrix4makewitharrayandtranspose%28__%29.md): Returns a `4x4` transposed matrix created from an array of component values.
- [GLKMatrix4MakeWithColumns(\_:\_:\_:\_:)](glkmatrix4makewithcolumns%28________%29.md): Returns a `4x4` matrix created from four column vectors.
- [GLKMatrix4MakeWithRows(\_:\_:\_:\_:)](glkmatrix4makewithrows%28________%29.md): Returns a `4x4` matrix created from four row vectors.
- [GLKMatrix4MakeRotation(\_:\_:\_:\_:)](glkmatrix4makerotation%28________%29.md): Returns a `4x4` matrix that performs a rotation around an arbitrary vector.
- [GLKMatrix4MakeXRotation(\_:)](glkmatrix4makexrotation%28__%29.md): Returns a `4x4` matrix that performs a rotation around the positive x-axis.
- [GLKMatrix4MakeYRotation(\_:)](glkmatrix4makeyrotation%28__%29.md): Returns a `4x4` matrix that performs a rotation around the positive y-axis.
- [GLKMatrix4MakeZRotation(\_:)](glkmatrix4makezrotation%28__%29.md): Returns a `4x4` matrix that performs a rotation around the positive z-axis.
- [GLKMatrix4MakeWithQuaternion(\_:)](glkmatrix4makewithquaternion%28__%29.md): Returns a `4x4` matrix that performs a rotation based on a quaternion.
- [GLKMatrix4MakeScale(\_:\_:\_:)](glkmatrix4makescale%28______%29.md): Returns a `4x4` matrix that performs a scaling transformation.
- [GLKMatrix4MakeTranslation(\_:\_:\_:)](glkmatrix4maketranslation%28______%29.md): Returns a `4x4` matrix that performs a translation.
- [GLKMatrix4MakeLookAt(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](glkmatrix4makelookat%28__________________%29.md): Returns a `4x4` matrix that transforms world coordinates to eye coordinates.
- [GLKMatrix4MakeOrtho(\_:\_:\_:\_:\_:\_:)](glkmatrix4makeortho%28____________%29.md): Returns a `4x4` orthographic projection matrix.
- [GLKMatrix4MakePerspective(\_:\_:\_:\_:)](glkmatrix4makeperspective%28________%29.md): Returns a `4x4` perspective projection matrix.
- [GLKMatrix4MakeFrustum(\_:\_:\_:\_:\_:\_:)](glkmatrix4makefrustum%28____________%29.md): Returns a `4x4` perspective projection matrix.

### Working With Parts of a Matrix

- [GLKMatrix4GetMatrix2(\_:)](glkmatrix4getmatrix2%28__%29.md): Returns the upper-left `2x2` section of a `4x4` matrix.
- [GLKMatrix4GetMatrix3(\_:)](glkmatrix4getmatrix3%28__%29.md): Returns the upper-left `3x3` section of a `4x4` matrix.
- [GLKMatrix4GetColumn(\_:\_:)](glkmatrix4getcolumn%28____%29.md): Retrieves a column from a `4x4` matrix.
- [GLKMatrix4GetRow(\_:\_:)](glkmatrix4getrow%28____%29.md): Retrieves a row from a `4x4` matrix.
- [GLKMatrix4SetColumn(\_:\_:\_:)](glkmatrix4setcolumn%28______%29.md): Returns a new `4x4` matrix with one column replaced by a new vector.
- [GLKMatrix4SetRow(\_:\_:\_:)](glkmatrix4setrow%28______%29.md): Returns a new `4x4` matrix with one row replaced by a new vector.

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
- [GLKMatrix4TranslateWithVector4(\_:\_:)](glkmatrix4translatewithvector4%28____%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a translation transform defined by a vector.
- [GLKMatrix4Add(\_:\_:)](glkmatrix4add%28____%29.md): Returns a new `4x4` matrix created by performing a component-wise addition of two matrices.
- [GLKMatrix4Subtract(\_:\_:)](glkmatrix4subtract%28____%29.md): Returns a new `4x4` matrix created by performing a component-wise subtraction of two matrices.

### Performing Mathematical Operations on Vectors

- [GLKMatrix4MultiplyVector3(\_:\_:)](glkmatrix4multiplyvector3%28____%29.md): Multiplies a `4x4` matrix by a `3`-component vector.
- [GLKMatrix4MultiplyVector3Array(\_:\_:\_:)](glkmatrix4multiplyvector3array%28______%29.md): Multiplies a `4x4` matrix by an array of `3`-component vectors.
- [GLKMatrix4MultiplyVector3WithTranslation(\_:\_:)](glkmatrix4multiplyvector3withtranslation%28____%29.md): Multiplies a `4x4` matrix by a `3`-component vector, applying translation.
- [GLKMatrix4MultiplyVector3ArrayWithTranslation(\_:\_:\_:)](glkmatrix4multiplyvector3arraywithtranslation%28______%29.md): Multiplies a `4x4` matrix by an array of `3`-component vectors, applying translation.
- [GLKMatrix4MultiplyVector4(\_:\_:)](glkmatrix4multiplyvector4%28____%29.md): Multiplies a `4x4` matrix by a `4`-component vector.
- [GLKMatrix4MultiplyVector4Array(\_:\_:\_:)](glkmatrix4multiplyvector4array%28______%29.md): Multiplies a `4x4` matrix by an array of `4`-component vectors.
- [GLKMatrix4MultiplyAndProjectVector3(\_:\_:)](glkmatrix4multiplyandprojectvector3%28____%29.md): Multiplies a `4x4` matrix by a position vector to create a vector in homogenous coordinates, then projects the result to a `3`-component vector.
- [GLKMatrix4MultiplyAndProjectVector3Array(\_:\_:\_:)](glkmatrix4multiplyandprojectvector3array%28______%29.md): Multiplies a `4x4` matrix by an array of `3`-component vectors. Each result is projected back to `3`-component vector.

### Data Types

- [GLKMatrix4](glkmatrix4.md): A `4x4` matrix.

### Constants

- [GLKMatrix4Identity](glkmatrix4identity.md): A `4x4` identity matrix.

## See Also

### Math Utilties

- [GLKMatrixStack](glkmatrixstack.md): An opaque type that represents a stack of 4 x 4 matrices, providing support for hierarchical transform modeling and similar tasks.
- [GLKMatrix3](glkmatrix3-pcl.md)
- [GLKVector2](glkvector2-pbj.md)
- [GLKVector3](glkvector3-pbt.md)
- [GLKVector4](glkvector4-pbk.md)
- [GLKQuaternion](glkquaternion-pc6.md)
- [GLKit Math Utilities](glkit-math-utilities.md)

# GLKMatrix4 (Objective-C)

**Framework:** GLKit  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The [GLKMatrix4](glkmatrix4.md) type defines a `4x4` floating-point matrix as well as many mathematical operations commonly used to manipulate matrices. 3D graphics programming uses matrices extensively as a convenient way to represent a graphical transformation between different coordinate systems. These transformations include translation, scaling, rotation and projection; through matrix multiplication, multiple transformations can be concatenated into a single transformation matrix.

The functions that manipulate [GLKMatrix4](glkmatrix4.md) structures treat the inputs as immutable, instead returning a new matrix that represent the results of the operation.

## Topics

### Creating Matrices

- [GLKMatrix4Make](glkmatrix4make%28________________________________%29.md): Returns a `4x4` matrix created from individual component values.
- [GLKMatrix4MakeAndTranspose](glkmatrix4makeandtranspose%28________________________________%29.md): Returns a `4x4` transposed matrix created from individual component values.
- [GLKMatrix4MakeWithArray](glkmatrix4makewitharray%28__%29.md): Returns a `4x4` matrix created from an array of component values.
- [GLKMatrix4MakeWithArrayAndTranspose](glkmatrix4makewitharrayandtranspose%28__%29.md): Returns a `4x4` transposed matrix created from an array of component values.
- [GLKMatrix4MakeWithColumns](glkmatrix4makewithcolumns%28________%29.md): Returns a `4x4` matrix created from four column vectors.
- [GLKMatrix4MakeWithRows](glkmatrix4makewithrows%28________%29.md): Returns a `4x4` matrix created from four row vectors.
- [GLKMatrix4MakeRotation](glkmatrix4makerotation%28________%29.md): Returns a `4x4` matrix that performs a rotation around an arbitrary vector.
- [GLKMatrix4MakeXRotation](glkmatrix4makexrotation%28__%29.md): Returns a `4x4` matrix that performs a rotation around the positive x-axis.
- [GLKMatrix4MakeYRotation](glkmatrix4makeyrotation%28__%29.md): Returns a `4x4` matrix that performs a rotation around the positive y-axis.
- [GLKMatrix4MakeZRotation](glkmatrix4makezrotation%28__%29.md): Returns a `4x4` matrix that performs a rotation around the positive z-axis.
- [GLKMatrix4MakeWithQuaternion](glkmatrix4makewithquaternion%28__%29.md): Returns a `4x4` matrix that performs a rotation based on a quaternion.
- [GLKMatrix4MakeScale](glkmatrix4makescale%28______%29.md): Returns a `4x4` matrix that performs a scaling transformation.
- [GLKMatrix4MakeTranslation](glkmatrix4maketranslation%28______%29.md): Returns a `4x4` matrix that performs a translation.
- [GLKMatrix4MakeLookAt](glkmatrix4makelookat%28__________________%29.md): Returns a `4x4` matrix that transforms world coordinates to eye coordinates.
- [GLKMatrix4MakeOrtho](glkmatrix4makeortho%28____________%29.md): Returns a `4x4` orthographic projection matrix.
- [GLKMatrix4MakePerspective](glkmatrix4makeperspective%28________%29.md): Returns a `4x4` perspective projection matrix.
- [GLKMatrix4MakeFrustum](glkmatrix4makefrustum%28____________%29.md): Returns a `4x4` perspective projection matrix.

### Working With Parts of a Matrix

- [GLKMatrix4GetMatrix2](glkmatrix4getmatrix2%28__%29.md): Returns the upper-left `2x2` section of a `4x4` matrix.
- [GLKMatrix4GetMatrix3](glkmatrix4getmatrix3%28__%29.md): Returns the upper-left `3x3` section of a `4x4` matrix.
- [GLKMatrix4GetColumn](glkmatrix4getcolumn%28____%29.md): Retrieves a column from a `4x4` matrix.
- [GLKMatrix4GetRow](glkmatrix4getrow%28____%29.md): Retrieves a row from a `4x4` matrix.
- [GLKMatrix4SetColumn](glkmatrix4setcolumn%28______%29.md): Returns a new `4x4` matrix with one column replaced by a new vector.
- [GLKMatrix4SetRow](glkmatrix4setrow%28______%29.md): Returns a new `4x4` matrix with one row replaced by a new vector.

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
- [GLKMatrix4TranslateWithVector4](glkmatrix4translatewithvector4%28____%29.md): Returns a new `4x4` matrix created by concatenating a matrix with a translation transform defined by a vector.
- [GLKMatrix4Add](glkmatrix4add%28____%29.md): Returns a new `4x4` matrix created by performing a component-wise addition of two matrices.
- [GLKMatrix4Subtract](glkmatrix4subtract%28____%29.md): Returns a new `4x4` matrix created by performing a component-wise subtraction of two matrices.

### Performing Mathematical Operations on Vectors

- [GLKMatrix4MultiplyVector3](glkmatrix4multiplyvector3%28____%29.md): Multiplies a `4x4` matrix by a `3`-component vector.
- [GLKMatrix4MultiplyVector3Array](glkmatrix4multiplyvector3array%28______%29.md): Multiplies a `4x4` matrix by an array of `3`-component vectors.
- [GLKMatrix4MultiplyVector3WithTranslation](glkmatrix4multiplyvector3withtranslation%28____%29.md): Multiplies a `4x4` matrix by a `3`-component vector, applying translation.
- [GLKMatrix4MultiplyVector3ArrayWithTranslation](glkmatrix4multiplyvector3arraywithtranslation%28______%29.md): Multiplies a `4x4` matrix by an array of `3`-component vectors, applying translation.
- [GLKMatrix4MultiplyVector4](glkmatrix4multiplyvector4%28____%29.md): Multiplies a `4x4` matrix by a `4`-component vector.
- [GLKMatrix4MultiplyVector4Array](glkmatrix4multiplyvector4array%28______%29.md): Multiplies a `4x4` matrix by an array of `4`-component vectors.
- [GLKMatrix4MultiplyAndProjectVector3](glkmatrix4multiplyandprojectvector3%28____%29.md): Multiplies a `4x4` matrix by a position vector to create a vector in homogenous coordinates, then projects the result to a `3`-component vector.
- [GLKMatrix4MultiplyAndProjectVector3Array](glkmatrix4multiplyandprojectvector3array%28______%29.md): Multiplies a `4x4` matrix by an array of `3`-component vectors. Each result is projected back to `3`-component vector.

### Data Types

- [GLKMatrix4](glkmatrix4.md): A `4x4` matrix.

### Constants

- [GLKMatrix4Identity](glkmatrix4identity.md): A `4x4` identity matrix.

## See Also

### Math Utilties

- [GLKMatrixStackRef](glkmatrixstack.md): An opaque type that represents a stack of 4 x 4 matrices, providing support for hierarchical transform modeling and similar tasks.
- [GLKMatrix3](glkmatrix3-pcl.md)
- [GLKVector2](glkvector2-pbj.md)
- [GLKVector3](glkvector3-pbt.md)
- [GLKVector4](glkvector4-pbk.md)
- [GLKQuaternion](glkquaternion-pc6.md)
- [GLKit Math Utilities](glkit-math-utilities.md)
