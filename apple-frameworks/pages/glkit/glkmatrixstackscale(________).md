> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrixstackscale(_:_:_:_:)](https://developer.apple.com/documentation/glkit/glkmatrixstackscale(_:_:_:_:))

# GLKMatrixStackScale(\_:\_:\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Replaces the contents of the top matrix with a matrix calculated by scaling the contents of the top matrix.

## Declaration

```swift
func GLKMatrixStackScale(_ stack: GLKMatrixStack, _ sx: Float, _ sy: Float, _ sz: Float)
```

## Parameters

- `stack`: A matrix stack.
- `sx`: The scaling factor used to modify the `x` components.
- `sy`: The scaling factor used to modify the `y` components.
- `sz`: The scaling factor used to modify the `z` components.

## See Also

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

# GLKMatrixStackScale (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Replaces the contents of the top matrix with a matrix calculated by scaling the contents of the top matrix.

## Declaration

```objectivec
void GLKMatrixStackScale(GLKMatrixStackRef stack, float sx, float sy, float sz);
```

## Parameters

- `stack`: A matrix stack.
- `sx`: The scaling factor used to modify the `x` components.
- `sy`: The scaling factor used to modify the `y` components.
- `sz`: The scaling factor used to modify the `z` components.

## See Also

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
