> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrixstackcreate(_:)](https://developer.apple.com/documentation/glkit/glkmatrixstackcreate(_:))

# GLKMatrixStackCreate(\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Allocates and returns a new matrix stack.

## Declaration

```swift
func GLKMatrixStackCreate(_ alloc: CFAllocator?) -> Unmanaged<GLKMatrixStack>?
```

## Parameters

- `alloc`: The allocator to use to allocate the matrix stack.

<a id="return-value"></a>

## Return Value

A new matrix stack, or `NULL` if an error occurred.

<a id="Discussion"></a>

## Discussion

A matrix stack is a Core Foundation type. Ownership follows [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029) in [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i).

A matrix stack is initialized with a single identity matrix on the top of the stack.

## See Also

### Functions

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

# GLKMatrixStackCreate (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Allocates and returns a new matrix stack.

## Declaration

```objectivec
GLKMatrixStackRefGLKMatrixStackCreate(CFAllocatorRef alloc);
```

## Parameters

- `alloc`: The allocator to use to allocate the matrix stack.

<a id="return-value"></a>

## Return Value

A new matrix stack, or `NULL` if an error occurred.

<a id="Discussion"></a>

## Discussion

A matrix stack is a Core Foundation type. Ownership follows [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029) in [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i).

A matrix stack is initialized with a single identity matrix on the top of the stack.

## See Also

### Functions

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
