> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsefactorization_t](https://developer.apple.com/documentation/accelerate/sparsefactorization_t)

# SparseFactorization_t (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define the factorization type.

## Declaration

```swift
struct SparseFactorization_t
```

## Topics

### LU factorization types

- [SparseFactorizationLU](sparsefactorizationlu.md): Default LU factorization, currently LU with TPP.
- [SparseFactorizationLUSPP](sparsefactorizationluspp.md): LU factorization with partial pivoting restricted to within supernodes only.
- [SparseFactorizationLUTPP](sparsefactorizationlutpp.md): LU factorization with threshold partial pivoting.
- [SparseFactorizationLUUnpivoted](sparsefactorizationluunpivoted.md): LU factorization with no numerical pivoting.

### Factorization types for symmetric coefficient matrices

- [SparseFactorizationCholesky](sparsefactorizationcholesky.md): A constant that represents Cholesky (*LLᵀ*) factorization.
- [SparseFactorizationLDLT](sparsefactorizationldlt.md): A constant that represents the default *LDLᵀ* factorization.
- [SparseFactorizationLDLTUnpivoted](sparsefactorizationldltunpivoted.md): A constant that represents Cholesky-like *LDLᵀ* factorization with only one-by-one pivots and no pivoting.
- [SparseFactorizationLDLTSBK](sparsefactorizationldltsbk.md): A constant that represents *LDLᵀ* factorization with Supernode-Bunch-Kaufman and static pivoting.
- [SparseFactorizationLDLTTPP](sparsefactorizationldlttpp.md): A constant that represents *LDLᵀ* factorization with full-threshold partial pivoting.

### Factorization types for overdetermined and underdetermined systems

- [SparseFactorizationQR](sparsefactorizationqr.md): A constant that represents QR factorization.
- [SparseFactorizationCholeskyAtA](sparsefactorizationcholeskyata.md): A constant that represents *QR* factorization without storing *Q*.

### Raw Values

- [init(\_:)](sparsefactorization_t/init%28__%29.md)
- [init(rawValue:)](sparsefactorization_t/init%28rawvalue_%29.md)
- [rawValue](sparsefactorization_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Structures that specify factorization type and factorization options

- [SparseSymbolicFactorOptions](sparsesymbolicfactoroptions.md): A structure that contains options that affect the symbolic stage of a sparse factorization.
- [SparseNumericFactorOptions](sparsenumericfactoroptions.md): A structure that contains options that affect the numerical stage of a sparse factorization.

# SparseFactorization_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define the factorization type.

## Declaration

```objectivec
typedef enum { ... } SparseFactorization_t;
```

## Topics

### LU factorization types

- [SparseFactorizationLU](sparsefactorizationlu.md): Default LU factorization, currently LU with TPP.
- [SparseFactorizationLUSPP](sparsefactorizationluspp.md): LU factorization with partial pivoting restricted to within supernodes only.
- [SparseFactorizationLUTPP](sparsefactorizationlutpp.md): LU factorization with threshold partial pivoting.
- [SparseFactorizationLUUnpivoted](sparsefactorizationluunpivoted.md): LU factorization with no numerical pivoting.

### Factorization types for symmetric coefficient matrices

- [SparseFactorizationCholesky](sparsefactorizationcholesky.md): A constant that represents Cholesky (*LLᵀ*) factorization.
- [SparseFactorizationLDLT](sparsefactorizationldlt.md): A constant that represents the default *LDLᵀ* factorization.
- [SparseFactorizationLDLTUnpivoted](sparsefactorizationldltunpivoted.md): A constant that represents Cholesky-like *LDLᵀ* factorization with only one-by-one pivots and no pivoting.
- [SparseFactorizationLDLTSBK](sparsefactorizationldltsbk.md): A constant that represents *LDLᵀ* factorization with Supernode-Bunch-Kaufman and static pivoting.
- [SparseFactorizationLDLTTPP](sparsefactorizationldlttpp.md): A constant that represents *LDLᵀ* factorization with full-threshold partial pivoting.

### Factorization types for overdetermined and underdetermined systems

- [SparseFactorizationQR](sparsefactorizationqr.md): A constant that represents QR factorization.
- [SparseFactorizationCholeskyAtA](sparsefactorizationcholeskyata.md): A constant that represents *QR* factorization without storing *Q*.

## See Also

### Structures that specify factorization type and factorization options

- [SparseSymbolicFactorOptions](sparsesymbolicfactoroptions.md): A structure that contains options that affect the symbolic stage of a sparse factorization.
- [SparseNumericFactorOptions](sparsenumericfactoroptions.md): A structure that contains options that affect the numerical stage of a sparse factorization.
