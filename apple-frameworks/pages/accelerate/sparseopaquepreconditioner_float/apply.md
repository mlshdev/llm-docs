> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseopaquepreconditioner_float/apply](https://developer.apple.com/documentation/accelerate/sparseopaquepreconditioner_float/apply)

# apply (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A function that calculates *Y = PX*, where *P* is the preconditioner.

## Declaration

```swift
var apply: (UnsafeMutableRawPointer, CBLAS_TRANSPOSE, DenseMatrix_Float, DenseMatrix_Float) -> Void
```

<a id="Discussion"></a>

## Discussion

The function has some approximation to *A⁻¹*.

## See Also

### Inspecting Preconditioner Properties

- [mem](mem.md): The unaltered memory pointer that passes as the first parameter of the apply function.
- [type](type.md): The preconditioner type.

# apply (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A function that calculates *Y = PX*, where *P* is the preconditioner.

## Declaration

```objectivec
void (*)(void *, enum CBLAS_TRANSPOSE, DenseMatrix_Float, DenseMatrix_Float) apply;
```

<a id="Discussion"></a>

## Discussion

The function has some approximation to *A⁻¹*.

## See Also

### Inspecting Preconditioner Properties

- [mem](mem.md): The unaltered memory pointer that passes as the first parameter of the apply function.
- [type](type.md): The preconditioner type.
