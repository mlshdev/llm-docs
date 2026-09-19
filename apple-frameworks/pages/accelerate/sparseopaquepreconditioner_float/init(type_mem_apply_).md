> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/sparseopaquepreconditioner_float/init(type:mem:apply:)

# init(type:mem:apply:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new single-precision preconditioner.

## Declaration

```swift
init(type: SparsePreconditioner_t, mem: UnsafeMutableRawPointer, apply: (UnsafeMutableRawPointer, CBLAS_TRANSPOSE, DenseMatrix_Float, DenseMatrix_Float) -> Void)
```

## Parameters

- `type`: The preconditioner type.
- `mem`: The unaltered memory pointer that passes as the first parameter of the `apply` function.
- `apply`: A function that calculates *Y = PX*, where *P* is the preconditioner.
