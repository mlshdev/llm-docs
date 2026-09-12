> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseopaquepreconditioner_complex_float](https://developer.apple.com/documentation/accelerate/sparseopaquepreconditioner_complex_float)

# SparseOpaquePreconditioner_Complex_Float (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Represents a preconditioner for matrices of complex float values .

## Declaration

```swift
struct SparseOpaquePreconditioner_Complex_Float
```

<a id="overview"></a>

## Overview

- **`type`**: The type of preconditioner represented.
- **`mem`**: Block of memory that will be passed unaltered as the first argument of the `apply()` callback.
- **`apply(mem, trans, X, Y)`**: Function to call to apply the preconditioner as `Y = PX` (`trans=false`) or `Y = P^TX` (`trans`=`true`).

  - `mem` : The unaltered pointer mem from this struct.
  - `trans` : Flags whether to apply the preconditioner or its transpose.
  - `X`: The right-hand side vectors X.
  - `Y`: The result vectors Y.

## Topics

### Initializers

- [init(type:mem:apply:)](sparseopaquepreconditioner_complex_float/init%28type_mem_apply_%29.md)

### Instance Properties

- [apply](sparseopaquepreconditioner_complex_float/apply.md)
- [mem](sparseopaquepreconditioner_complex_float/mem.md)
- [type](sparseopaquepreconditioner_complex_float/type.md): Types of preconditioner.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Preconditioners

- [SparsePreconditioner_t](sparsepreconditioner_t.md): Constants that define the preconditioner type.
- [SparseOpaquePreconditioner_Complex_Double](sparseopaquepreconditioner_complex_double.md): Represents a preconditioner for matrices of complex double values .

# SparseOpaquePreconditioner_Complex_Float (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Represents a preconditioner for matrices of complex float values .

## Declaration

```objectivec
typedef struct { ... } SparseOpaquePreconditioner_Complex_Float;
```

<a id="overview"></a>

## Overview

- **`type`**: The type of preconditioner represented.
- **`mem`**: Block of memory that will be passed unaltered as the first argument of the `apply()` callback.
- **`apply(mem, trans, X, Y)`**: Function to call to apply the preconditioner as `Y = PX` (`trans=false`) or `Y = P^TX` (`trans`=`true`).

  - `mem` : The unaltered pointer mem from this struct.
  - `trans` : Flags whether to apply the preconditioner or its transpose.
  - `X`: The right-hand side vectors X.
  - `Y`: The result vectors Y.

## Topics

### Instance Properties

- [apply](sparseopaquepreconditioner_complex_float/apply.md)
- [mem](sparseopaquepreconditioner_complex_float/mem.md)
- [type](sparseopaquepreconditioner_complex_float/type.md): Types of preconditioner.

## See Also

### Preconditioners

- [SparsePreconditioner_t](sparsepreconditioner_t.md): Constants that define the preconditioner type.
- [SparseOpaquePreconditioner_Complex_Double](sparseopaquepreconditioner_complex_double.md): Represents a preconditioner for matrices of complex double values .
