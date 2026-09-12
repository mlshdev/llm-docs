> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsepreconditioner_t](https://developer.apple.com/documentation/accelerate/sparsepreconditioner_t)

# SparsePreconditioner_t (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define the preconditioner type.

## Declaration

```swift
struct SparsePreconditioner_t
```

## Topics

### Constants

- [SparsePreconditionerDiagScaling](sparsepreconditionerdiagscaling.md): A diagonal scaling preconditioner.
- [SparsePreconditionerDiagonal](sparsepreconditionerdiagonal.md): A Jacobi preconditioner.
- [SparsePreconditionerNone](sparsepreconditionernone.md): No preconditioner.
- [SparsePreconditionerUser](sparsepreconditioneruser.md): A user-provided preconditioner.

### Raw Values

- [init(\_:)](sparsepreconditioner_t/init%28__%29.md)
- [init(rawValue:)](sparsepreconditioner_t/init%28rawvalue_%29.md)
- [rawValue](sparsepreconditioner_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Preconditioners

- [SparseOpaquePreconditioner_Complex_Double](sparseopaquepreconditioner_complex_double.md): Represents a preconditioner for matrices of complex double values .
- [SparseOpaquePreconditioner_Complex_Float](sparseopaquepreconditioner_complex_float.md): Represents a preconditioner for matrices of complex float values .

# SparsePreconditioner_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define the preconditioner type.

## Declaration

```objectivec
typedef enum { ... } SparsePreconditioner_t;
```

## Topics

### Constants

- [SparsePreconditionerDiagScaling](sparsepreconditionerdiagscaling.md): A diagonal scaling preconditioner.
- [SparsePreconditionerDiagonal](sparsepreconditionerdiagonal.md): A Jacobi preconditioner.
- [SparsePreconditionerNone](sparsepreconditionernone.md): No preconditioner.
- [SparsePreconditionerUser](sparsepreconditioneruser.md): A user-provided preconditioner.

## See Also

### Preconditioners

- [SparseOpaquePreconditioner_Complex_Double](sparseopaquepreconditioner_complex_double.md): Represents a preconditioner for matrices of complex double values .
- [SparseOpaquePreconditioner_Complex_Float](sparseopaquepreconditioner_complex_float.md): Represents a preconditioner for matrices of complex float values .
