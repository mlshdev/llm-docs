> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsefactorizationcholesky](https://developer.apple.com/documentation/accelerate/sparsefactorizationcholesky)

# SparseFactorizationCholesky (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A constant that represents Cholesky (*LLᵀ*) factorization.

## Declaration

```swift
var SparseFactorizationCholesky: SparseFactorization_t { get }
```

<a id="Discussion"></a>

## Discussion

[SparseFactorizationCholesky](sparsefactorizationcholesky.md) provides a sparse counterpart to the dense Cholesky routines `spotrf()` and `dpotrf()` from LAPACK.

## See Also

### Factorization types for symmetric coefficient matrices

- [SparseFactorizationLDLT](sparsefactorizationldlt.md): A constant that represents the default *LDLᵀ* factorization.
- [SparseFactorizationLDLTUnpivoted](sparsefactorizationldltunpivoted.md): A constant that represents Cholesky-like *LDLᵀ* factorization with only one-by-one pivots and no pivoting.
- [SparseFactorizationLDLTSBK](sparsefactorizationldltsbk.md): A constant that represents *LDLᵀ* factorization with Supernode-Bunch-Kaufman and static pivoting.
- [SparseFactorizationLDLTTPP](sparsefactorizationldlttpp.md): A constant that represents *LDLᵀ* factorization with full-threshold partial pivoting.

# SparseFactorizationCholesky (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A constant that represents Cholesky (*LLᵀ*) factorization.

## Declaration

```objectivec
SparseFactorizationCholesky
```

<a id="Discussion"></a>

## Discussion

[SparseFactorizationCholesky](sparsefactorizationcholesky.md) provides a sparse counterpart to the dense Cholesky routines `spotrf()` and `dpotrf()` from LAPACK.

## See Also

### Factorization types for symmetric coefficient matrices

- [SparseFactorizationLDLT](sparsefactorizationldlt.md): A constant that represents the default *LDLᵀ* factorization.
- [SparseFactorizationLDLTUnpivoted](sparsefactorizationldltunpivoted.md): A constant that represents Cholesky-like *LDLᵀ* factorization with only one-by-one pivots and no pivoting.
- [SparseFactorizationLDLTSBK](sparsefactorizationldltsbk.md): A constant that represents *LDLᵀ* factorization with Supernode-Bunch-Kaufman and static pivoting.
- [SparseFactorizationLDLTTPP](sparsefactorizationldlttpp.md): A constant that represents *LDLᵀ* factorization with full-threshold partial pivoting.
