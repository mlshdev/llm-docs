> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkit-functions](https://developer.apple.com/documentation/glkit/glkit-functions)

# GLKit Functions (Swift)

**Framework:** GLKit  
**Kind:** API Collection

## Topics

### Functions

- [GLKMatrixStackCreate(\_:)](glkmatrixstackcreate%28__%29.md): Allocates and returns a new matrix stack.
- [GLKMatrixStackGetMatrix2(\_:)](glkmatrixstackgetmatrix2%28__%29.md): Returns the top-left `2x2` corner of the top matrix.
- [GLKMatrixStackGetMatrix3(\_:)](glkmatrixstackgetmatrix3%28__%29.md): Returns the top-left `3x3` corner of the top matrix.
- [GLKMatrixStackGetMatrix3Inverse(\_:)](glkmatrixstackgetmatrix3inverse%28__%29.md): Fetches the top-left `3x3` corner of the top matrix and returns its inverse.
- [GLKMatrixStackGetMatrix3InverseTranspose(\_:)](glkmatrixstackgetmatrix3inversetranspose%28__%29.md): Fetches the top-left `3x3` corner of the top matrix and returns its inverse transpose.
- [GLKMatrixStackGetMatrix4(\_:)](glkmatrixstackgetmatrix4%28__%29.md): Returns a copy of the top matrix on the stack.
- [GLKMatrixStackGetMatrix4Inverse(\_:)](glkmatrixstackgetmatrix4inverse%28__%29.md): Returns the inverse of the top matrix.
- [GLKMatrixStackGetMatrix4InverseTranspose(\_:)](glkmatrixstackgetmatrix4inversetranspose%28__%29.md): Returns the inverse transpose of the top matrix.
- [GLKMatrixStackGetTypeID()](glkmatrixstackgettypeid%28%29.md): Returns the Core Foundation type for a matrix stack.
- [GLKMatrixStackLoadMatrix4(\_:\_:)](glkmatrixstackloadmatrix4%28____%29.md): Replaces the contents of the top matrix with a new matrix.
- [GLKMatrixStackMultiplyMatrix4(\_:\_:)](glkmatrixstackmultiplymatrix4%28____%29.md): Replaces the contents of the top matrix with a matrix calculated by multiplying the contents of the top matrix by another matrix.
- [GLKMatrixStackMultiplyMatrixStack(\_:\_:)](glkmatrixstackmultiplymatrixstack%28____%29.md): Replaces the contents of the top matrix with a matrix calculated by multiplying the contents of the top matrix by the top matrix of another matrix stack.
- [GLKMatrixStackPop(\_:)](glkmatrixstackpop%28__%29.md): Removes the topmost entry from the stack.
- [GLKMatrixStackPush(\_:)](glkmatrixstackpush%28__%29.md): Push a copy of the topmost matrix onto the top of the stack.
- [GLKMatrixStackRotate(\_:\_:\_:\_:\_:)](glkmatrixstackrotate%28__________%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a rotation around an arbitrary axis.
- [GLKMatrixStackRotateWithVector3(\_:\_:\_:)](glkmatrixstackrotatewithvector3%28______%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a rotation around an arbitrary axis.
- [GLKMatrixStackRotateWithVector4(\_:\_:\_:)](glkmatrixstackrotatewithvector4%28______%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a rotation around an arbitrary axis.
- [GLKMatrixStackRotateX(\_:\_:)](glkmatrixstackrotatex%28____%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a rotation around the positive-x axis.
- [GLKMatrixStackRotateY(\_:\_:)](glkmatrixstackrotatey%28____%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a rotation around the positive-y axis.
- [GLKMatrixStackRotateZ(\_:\_:)](glkmatrixstackrotatez%28____%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a rotation around the positive-z axis.
- [GLKMatrixStackScale(\_:\_:\_:\_:)](glkmatrixstackscale%28________%29.md): Replaces the contents of the top matrix with a matrix calculated by scaling the contents of the top matrix.
- [GLKMatrixStackScaleWithVector3(\_:\_:)](glkmatrixstackscalewithvector3%28____%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a scaling operation.
- [GLKMatrixStackScaleWithVector4(\_:\_:)](glkmatrixstackscalewithvector4%28____%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a scaling operation defined by a vector.
- [GLKMatrixStackSize(\_:)](glkmatrixstacksize%28__%29.md): Returns the number of matrices present on the matrix stack.
- [GLKMatrixStackTranslate(\_:\_:\_:\_:)](glkmatrixstacktranslate%28________%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a translation operation.
- [GLKMatrixStackTranslateWithVector3(\_:\_:)](glkmatrixstacktranslatewithvector3%28____%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a translation defined by a vector.
- [GLKMatrixStackTranslateWithVector4(\_:\_:)](glkmatrixstacktranslatewithvector4%28____%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a translation defined by a vector.
- [GLKVertexAttributeParametersFromModelIO(\_:)](glkvertexattributeparametersfrommodelio%28__%29.md)

## See Also

### Reference

- [GLKit Structures](glkit-structures.md)
- [GLKit Enumerations](glkit-enumerations.md)
- [GLKit Constants](glkit-constants.md)
- [GLKit Data Types](glkit-data-types.md)

# GLKit Functions (Objective-C)

**Framework:** GLKit  
**Kind:** API Collection

## Topics

### Functions

- [GLKMatrixStackCreate](glkmatrixstackcreate%28__%29.md): Allocates and returns a new matrix stack.
- [GLKMatrixStackGetMatrix2](glkmatrixstackgetmatrix2%28__%29.md): Returns the top-left `2x2` corner of the top matrix.
- [GLKMatrixStackGetMatrix3](glkmatrixstackgetmatrix3%28__%29.md): Returns the top-left `3x3` corner of the top matrix.
- [GLKMatrixStackGetMatrix3Inverse](glkmatrixstackgetmatrix3inverse%28__%29.md): Fetches the top-left `3x3` corner of the top matrix and returns its inverse.
- [GLKMatrixStackGetMatrix3InverseTranspose](glkmatrixstackgetmatrix3inversetranspose%28__%29.md): Fetches the top-left `3x3` corner of the top matrix and returns its inverse transpose.
- [GLKMatrixStackGetMatrix4](glkmatrixstackgetmatrix4%28__%29.md): Returns a copy of the top matrix on the stack.
- [GLKMatrixStackGetMatrix4Inverse](glkmatrixstackgetmatrix4inverse%28__%29.md): Returns the inverse of the top matrix.
- [GLKMatrixStackGetMatrix4InverseTranspose](glkmatrixstackgetmatrix4inversetranspose%28__%29.md): Returns the inverse transpose of the top matrix.
- [GLKMatrixStackGetTypeID](glkmatrixstackgettypeid%28%29.md): Returns the Core Foundation type for a matrix stack.
- [GLKMatrixStackLoadMatrix4](glkmatrixstackloadmatrix4%28____%29.md): Replaces the contents of the top matrix with a new matrix.
- [GLKMatrixStackMultiplyMatrix4](glkmatrixstackmultiplymatrix4%28____%29.md): Replaces the contents of the top matrix with a matrix calculated by multiplying the contents of the top matrix by another matrix.
- [GLKMatrixStackMultiplyMatrixStack](glkmatrixstackmultiplymatrixstack%28____%29.md): Replaces the contents of the top matrix with a matrix calculated by multiplying the contents of the top matrix by the top matrix of another matrix stack.
- [GLKMatrixStackPop](glkmatrixstackpop%28__%29.md): Removes the topmost entry from the stack.
- [GLKMatrixStackPush](glkmatrixstackpush%28__%29.md): Push a copy of the topmost matrix onto the top of the stack.
- [GLKMatrixStackRotate](glkmatrixstackrotate%28__________%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a rotation around an arbitrary axis.
- [GLKMatrixStackRotateWithVector3](glkmatrixstackrotatewithvector3%28______%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a rotation around an arbitrary axis.
- [GLKMatrixStackRotateWithVector4](glkmatrixstackrotatewithvector4%28______%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a rotation around an arbitrary axis.
- [GLKMatrixStackRotateX](glkmatrixstackrotatex%28____%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a rotation around the positive-x axis.
- [GLKMatrixStackRotateY](glkmatrixstackrotatey%28____%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a rotation around the positive-y axis.
- [GLKMatrixStackRotateZ](glkmatrixstackrotatez%28____%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a rotation around the positive-z axis.
- [GLKMatrixStackScale](glkmatrixstackscale%28________%29.md): Replaces the contents of the top matrix with a matrix calculated by scaling the contents of the top matrix.
- [GLKMatrixStackScaleWithVector3](glkmatrixstackscalewithvector3%28____%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a scaling operation.
- [GLKMatrixStackScaleWithVector4](glkmatrixstackscalewithvector4%28____%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a scaling operation defined by a vector.
- [GLKMatrixStackSize](glkmatrixstacksize%28__%29.md): Returns the number of matrices present on the matrix stack.
- [GLKMatrixStackTranslate](glkmatrixstacktranslate%28________%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a translation operation.
- [GLKMatrixStackTranslateWithVector3](glkmatrixstacktranslatewithvector3%28____%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a translation defined by a vector.
- [GLKMatrixStackTranslateWithVector4](glkmatrixstacktranslatewithvector4%28____%29.md): Replaces the contents of the top matrix with a matrix calculated by composing the top matrix with a translation defined by a vector.
- [GLKVertexAttributeParametersFromModelIO](glkvertexattributeparametersfrommodelio%28__%29.md)

## See Also

### Reference

- [GLKit Structures](glkit-structures.md)
- [GLKit Enumerations](glkit-enumerations.md)
- [GLKit Constants](glkit-constants.md)
- [GLKit Data Types](glkit-data-types.md)
