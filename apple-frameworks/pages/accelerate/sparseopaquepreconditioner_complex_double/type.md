> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseopaquepreconditioner_complex_double/type](https://developer.apple.com/documentation/accelerate/sparseopaquepreconditioner_complex_double/type)

# type (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Types of preconditioner.

## Declaration

```swift
var type: SparsePreconditioner_t
```

<a id="discussion"></a>

## Discussion

- **`SparsePreconditionerNone`**: No preconditioner, used to flag an empty type as required.
- **`SparsePreconditionerUser`**: User-defined preconditioner.
- **`SparsePreconditionerDiagonal`**: Diagonal (Jacobi) preconditioner `D_ii = 1.0 / A_ii`. Zero entries on the diagonal of `A` are replaced with `1.0`.
- **`SparsePreconditionerDiagScaling`**: Diagonal scaling preconditioner `D_ii = 1.0 / || A_i ||_2`, where `A_i` is `i`-th column of `A`.

# type (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Types of preconditioner.

## Declaration

```objectivec
SparsePreconditioner_t type;
```

<a id="discussion"></a>

## Discussion

- **`SparsePreconditionerNone`**: No preconditioner, used to flag an empty type as required.
- **`SparsePreconditionerUser`**: User-defined preconditioner.
- **`SparsePreconditionerDiagonal`**: Diagonal (Jacobi) preconditioner `D_ii = 1.0 / A_ii`. Zero entries on the diagonal of `A` are replaced with `1.0`.
- **`SparsePreconditionerDiagScaling`**: Diagonal scaling preconditioner `D_ii = 1.0 / || A_i ||_2`, where `A_i` is `i`-th column of `A`.
