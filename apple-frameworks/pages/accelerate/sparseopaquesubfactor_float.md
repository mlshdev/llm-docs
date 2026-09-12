> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseopaquesubfactor_float](https://developer.apple.com/documentation/accelerate/sparseopaquesubfactor_float)

# SparseOpaqueSubfactor_Float (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Represents a sub-factor of the factorization (for example,  `L` from `LDL^T`).

## Declaration

```swift
struct SparseOpaqueSubfactor_Float
```

<a id="overview"></a>

## Overview

- **`attributes`**: Attributes of subfactor. Notably transpose indicates whether it should be considered as the transpose of its underlying contents (e.g. should it count as L or L^T if `.contents=SparseSubfactorL`).
- **`contents`**: Subfactor this represents, e.g. L or Q.
- **`factor`**: Underlying factorization this subfactor is part of.
- **`workspaceRequiredStatic`**: The size of the workspace, in bytes, required to perform `SparseMultiply` or `SparseSolve` with this subfactor is given by the expression: `workspaceRequiredStatic + nrhs*workspaceRequiredPerRhs` where `nrhs` is the number of right-hand side vectors.
- **`workspaceRequiredPerRHS`**: The size of the workspace, in bytes, required to perform SparseMultiply() or SparseSolve() with this subfactor is given by the expression: workspaceRequiredStatic + nrhs\*workspaceRequiredPerRhs where nrhs is the number of right-hand side vectors.

## Topics

### Initializers

- [init()](sparseopaquesubfactor_float/init%28%29.md)
- [init(attributes:contents:factor:workspaceRequiredStatic:workspaceRequiredPerRHS:)](sparseopaquesubfactor_float/init%28attributes_contents_factor_workspacerequiredstatic_workspacerequiredperrhs_%29.md)

### Instance Properties

- [attributes](sparseopaquesubfactor_float/attributes.md): A type representing the attributes of a matrix.
- [contents](sparseopaquesubfactor_float/contents.md): Types of sub-factor object.
- [factor](sparseopaquesubfactor_float/factor.md): A semi-opaque type representing a matrix factorization in float.
- [workspaceRequiredPerRHS](sparseopaquesubfactor_float/workspacerequiredperrhs.md)
- [workspaceRequiredStatic](sparseopaquesubfactor_float/workspacerequiredstatic.md)

## See Also

### Structures

- [SparseOpaqueSubfactor_Double](sparseopaquesubfactor_double.md): Represents a sub-factor of the factorization (for example, `L` from `LDL^T`).
- [SparseOpaqueSubfactor_Complex_Double](sparseopaquesubfactor_complex_double.md): Represents a sub-factor of the factorization (for example, `L` from `LDL^T`).
- [SparseOpaqueSubfactor_Complex_Float](sparseopaquesubfactor_complex_float.md): Represents a sub-factor of the factorization (for example, `L` from `LDL^T`).

# SparseOpaqueSubfactor_Float (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Represents a sub-factor of the factorization (for example,  `L` from `LDL^T`).

## Declaration

```objectivec
typedef struct { ... } SparseOpaqueSubfactor_Float;
```

<a id="overview"></a>

## Overview

- **`attributes`**: Attributes of subfactor. Notably transpose indicates whether it should be considered as the transpose of its underlying contents (e.g. should it count as L or L^T if `.contents=SparseSubfactorL`).
- **`contents`**: Subfactor this represents, e.g. L or Q.
- **`factor`**: Underlying factorization this subfactor is part of.
- **`workspaceRequiredStatic`**: The size of the workspace, in bytes, required to perform `SparseMultiply` or `SparseSolve` with this subfactor is given by the expression: `workspaceRequiredStatic + nrhs*workspaceRequiredPerRhs` where `nrhs` is the number of right-hand side vectors.
- **`workspaceRequiredPerRHS`**: The size of the workspace, in bytes, required to perform SparseMultiply() or SparseSolve() with this subfactor is given by the expression: workspaceRequiredStatic + nrhs\*workspaceRequiredPerRhs where nrhs is the number of right-hand side vectors.

## Topics

### Instance Properties

- [attributes](sparseopaquesubfactor_float/attributes.md): A type representing the attributes of a matrix.
- [contents](sparseopaquesubfactor_float/contents.md): Types of sub-factor object.
- [factor](sparseopaquesubfactor_float/factor.md): A semi-opaque type representing a matrix factorization in float.
- [workspaceRequiredPerRHS](sparseopaquesubfactor_float/workspacerequiredperrhs.md)
- [workspaceRequiredStatic](sparseopaquesubfactor_float/workspacerequiredstatic.md)

## See Also

### Structures

- [SparseOpaqueSubfactor_Double](sparseopaquesubfactor_double.md): Represents a sub-factor of the factorization (for example, `L` from `LDL^T`).
- [SparseOpaqueSubfactor_Complex_Double](sparseopaquesubfactor_complex_double.md): Represents a sub-factor of the factorization (for example, `L` from `LDL^T`).
- [SparseOpaqueSubfactor_Complex_Float](sparseopaquesubfactor_complex_float.md): Represents a sub-factor of the factorization (for example, `L` from `LDL^T`).
