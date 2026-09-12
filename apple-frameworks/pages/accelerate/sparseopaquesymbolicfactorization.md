> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseopaquesymbolicfactorization](https://developer.apple.com/documentation/accelerate/sparseopaquesymbolicfactorization)

# SparseOpaqueSymbolicFactorization (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A semi-opaque type that represents symbolic matrix factorization.

## Declaration

```swift
struct SparseOpaqueSymbolicFactorization
```

<a id="overview"></a>

## Overview

Represents a symbolic matrix factorization (that is, the pattern of the factors without the values). A single symbolic factorization may be the basis for multiple numerical factorizations of matrices with the same pattern but different nonzero values.

Use the [SparseCleanup(\_:)](sparsecleanup%28__%29-6jpd8.md) function to free resources that these objects hold. The system reference-counts the internal factorize pointer, so it’s safe to destroy this object even if numeric factorizations exist that still depend on it.

## Topics

### Creating an Opaque Symbolic Factorization

- [init()](sparseopaquesymbolicfactorization/init%28%29.md)
- [init(status:rowCount:columnCount:attributes:blockSize:type:factorization:workspaceSize_Float:workspaceSize_Double:factorSize_Float:factorSize_Double:)](sparseopaquesymbolicfactorization/init%28status_rowcount_columncount_attributes_blocksize_type_factorization_workspacesize_float_workspacesize_double_factorsize_float_factorsize_double_%29.md): Creates an opaque symbolic factorization.

### Instance Properties

- [status](sparseopaquesymbolicfactorization/status.md): The status of the factorization.
- [SparseStatus_t](sparsestatus_t.md): Constants that describe the status of a factorization.
- [type](sparseopaquesymbolicfactorization/type.md): The factorization type.
- [factorization](sparseopaquesymbolicfactorization/factorization.md): A pointer to a private internal representation of the symbolic factor.
- [SparseFactorization_t](sparsefactorization_t.md): Constants that define the factorization type.

### Inspecting a Factorization’s Structure

- [attributes](sparseopaquesymbolicfactorization/attributes.md): The attributes of the factorization.
- [SparseAttributes_t](sparseattributes_t.md): A structure that represents the attributes of a matrix.
- [blockSize](sparseopaquesymbolicfactorization/blocksize.md): The block size.
- [columnCount](sparseopaquesymbolicfactorization/columncount.md): The number of columns.
- [rowCount](sparseopaquesymbolicfactorization/rowcount.md): The number of rows.
- [workspaceSize_Double](sparseopaquesymbolicfactorization/workspacesize_double.md): Size, in bytes, of workspace required to perform numerical factorization in doubles.
- [workspaceSize_Float](sparseopaquesymbolicfactorization/workspacesize_float.md): Size, in bytes, of workspace required to perform numerical factorization in floats.
- [factorSize_Double](sparseopaquesymbolicfactorization/factorsize_double.md): Minimum size, in bytes, required to store numerical factors in doubles.
- [factorSize_Float](sparseopaquesymbolicfactorization/factorsize_float.md): Minimum size, in bytes, required to store numerical factors in float.

## See Also

### Supporting types

- [SparseFactorization_t](sparsefactorization_t.md): Constants that define the factorization type.
- [SparseSymbolicFactorOptions](sparsesymbolicfactoroptions.md): A structure that contains options that affect the symbolic stage of a sparse factorization.

# SparseOpaqueSymbolicFactorization (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A semi-opaque type that represents symbolic matrix factorization.

## Declaration

```objectivec
typedef struct { ... } SparseOpaqueSymbolicFactorization;
```

<a id="overview"></a>

## Overview

Represents a symbolic matrix factorization (that is, the pattern of the factors without the values). A single symbolic factorization may be the basis for multiple numerical factorizations of matrices with the same pattern but different nonzero values.

Use the [SparseCleanup](sparsecleanup%28__%29-6jpd8.md) function to free resources that these objects hold. The system reference-counts the internal factorize pointer, so it’s safe to destroy this object even if numeric factorizations exist that still depend on it.

## Topics

### Instance Properties

- [status](sparseopaquesymbolicfactorization/status.md): The status of the factorization.
- [SparseStatus_t](sparsestatus_t.md): Constants that describe the status of a factorization.
- [type](sparseopaquesymbolicfactorization/type.md): The factorization type.
- [factorization](sparseopaquesymbolicfactorization/factorization.md): A pointer to a private internal representation of the symbolic factor.
- [SparseFactorization_t](sparsefactorization_t.md): Constants that define the factorization type.

### Inspecting a Factorization’s Structure

- [attributes](sparseopaquesymbolicfactorization/attributes.md): The attributes of the factorization.
- [SparseAttributes_t](sparseattributes_t.md): A structure that represents the attributes of a matrix.
- [blockSize](sparseopaquesymbolicfactorization/blocksize.md): The block size.
- [columnCount](sparseopaquesymbolicfactorization/columncount.md): The number of columns.
- [rowCount](sparseopaquesymbolicfactorization/rowcount.md): The number of rows.
- [workspaceSize_Double](sparseopaquesymbolicfactorization/workspacesize_double.md): Size, in bytes, of workspace required to perform numerical factorization in doubles.
- [workspaceSize_Float](sparseopaquesymbolicfactorization/workspacesize_float.md): Size, in bytes, of workspace required to perform numerical factorization in floats.
- [factorSize_Double](sparseopaquesymbolicfactorization/factorsize_double.md): Minimum size, in bytes, required to store numerical factors in doubles.
- [factorSize_Float](sparseopaquesymbolicfactorization/factorsize_float.md): Minimum size, in bytes, required to store numerical factors in float.

## See Also

### Supporting types

- [SparseFactorization_t](sparsefactorization_t.md): Constants that define the factorization type.
- [SparseSymbolicFactorOptions](sparsesymbolicfactoroptions.md): A structure that contains options that affect the symbolic stage of a sparse factorization.
