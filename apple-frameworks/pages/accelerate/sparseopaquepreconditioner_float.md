> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseopaquepreconditioner_float](https://developer.apple.com/documentation/accelerate/sparseopaquepreconditioner_float)

# SparseOpaquePreconditioner_Float (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that represents a single-precision preconditioner.

## Declaration

```swift
struct SparseOpaquePreconditioner_Float
```

## Topics

### Creating a Preconditioner

- [init(type:mem:apply:)](sparseopaquepreconditioner_float/init%28type_mem_apply_%29.md): Creates a new single-precision preconditioner.

### Inspecting Preconditioner Properties

- [apply](sparseopaquepreconditioner_float/apply.md): A function that calculates *Y = PX*, where *P* is the preconditioner.
- [mem](sparseopaquepreconditioner_float/mem.md): The unaltered memory pointer that passes as the first parameter of the apply function.
- [type](sparseopaquepreconditioner_float/type.md): The preconditioner type.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Creating preconditioners

- [SparseCreatePreconditioner(\_:\_:)](sparsecreatepreconditioner%28____%29-4ysww.md): Creates a preconditioner for the specified matrix of double-precision values.
- [SparseCreatePreconditioner(\_:\_:)](sparsecreatepreconditioner%28____%29-59ql5.md): Creates a preconditioner for the specified matrix of single-precision values.
- [SparseOpaquePreconditioner_Double](sparseopaquepreconditioner_double.md): A structure that represents a double-precision preconditioner.
- [SparseCreatePreconditioner(\_:\_:)](sparsecreatepreconditioner%28____%29-1yp4n.md): Create a preconditioner for the given matrix of complex double values.
- [SparseCreatePreconditioner(\_:\_:)](sparsecreatepreconditioner%28____%29-95u9p.md): Create a preconditioner for the given matrix of complex float values.

# SparseOpaquePreconditioner_Float (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that represents a single-precision preconditioner.

## Declaration

```objectivec
typedef struct { ... } SparseOpaquePreconditioner_Float;
```

## Topics

### Inspecting Preconditioner Properties

- [apply](sparseopaquepreconditioner_float/apply.md): A function that calculates *Y = PX*, where *P* is the preconditioner.
- [mem](sparseopaquepreconditioner_float/mem.md): The unaltered memory pointer that passes as the first parameter of the apply function.
- [type](sparseopaquepreconditioner_float/type.md): The preconditioner type.

## See Also

### Creating preconditioners

- [SparseCreatePreconditioner](sparsecreatepreconditioner%28____%29-4ysww.md): Creates a preconditioner for the specified matrix of double-precision values.
- [SparseCreatePreconditioner](sparsecreatepreconditioner%28____%29-59ql5.md): Creates a preconditioner for the specified matrix of single-precision values.
- [SparseOpaquePreconditioner_Double](sparseopaquepreconditioner_double.md): A structure that represents a double-precision preconditioner.
- [SparseCreatePreconditioner](sparsecreatepreconditioner%28____%29-1yp4n.md): Create a preconditioner for the given matrix of complex double values.
- [SparseCreatePreconditioner](sparsecreatepreconditioner%28____%29-95u9p.md): Create a preconditioner for the given matrix of complex float values.
