> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsegetinertia(_:_:_:_:)-2ykzq](https://developer.apple.com/documentation/accelerate/sparsegetinertia(_:_:_:_:)-2ykzq)

# SparseGetInertia(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the inertia of a double-precision *LDLᵀ* factorization.

## Declaration

```swift
func SparseGetInertia(_ Factored: SparseOpaqueFactorization_Double, _ num_positive: UnsafeMutablePointer<Int32>, _ num_zero: UnsafeMutablePointer<Int32>, _ num_negative: UnsafeMutablePointer<Int32>) -> Int32
```

## Parameters

- `Factored`: The [SparseFactorizationLDLTTPP](sparsefactorizationldlttpp.md) factorization.
- `num_positive`: On return, the number of positive pivots the sparse factorization functions take during the factorization of `Factored`.
- `num_zero`: On return, the number of zero pivots the sparse factorization functions take during the factorization of `Factored`.
- `num_negative`: On return, the number of negative pivots the sparse factorization functions take during the factorization of `Factored`.

<a id="return-value"></a>

## Return Value

`0` on success; otherwise, a nonzero value on error.

<a id="Discussion"></a>

## Discussion

This function returns the number of negative, zero, and positive pivots that the sparse factorization functions, [SparseFactor(\_:\_:)](sparsefactor%28____%29-8gl6j.md) and [SparseFactor(\_:\_:\_:\_:)](sparsefactor%28________%29-88xmk.md), take during an *LDLᵀ* factorization.

In some cases — for example, when the original matrix’s eigenvalues are close to zero — the computed numerical inertia may not be an accurate reflection of the true inertia. In such cases, the computed numerical inertia is dependent on the [zeroTolerance](sparsenumericfactoroptions/zerotolerance.md) and [pivotTolerance](sparsenumericfactoroptions/pivottolerance.md) values of the [SparseNumericFactorOptions](sparsenumericfactoroptions.md) structure.

> **Important**

>  This function supports only [SparseFactorizationLDLTTPP](sparsefactorizationldlttpp.md) factorizations.

## See Also

### Factorization inertia functions

- [SparseGetInertia(\_:\_:\_:\_:)](sparsegetinertia%28________%29-6r90r.md): Returns the inertia of a single-precision *LDLᵀ* factorization.
- [SparseGetInertia(\_:\_:\_:\_:)](sparsegetinertia%28________%29-2gc7f.md): Returns the inertia of an LDLT factorization in complex double.
- [SparseGetInertia(\_:\_:\_:\_:)](sparsegetinertia%28________%29-6ca5h.md): Returns the inertia of an LDLT factorization in complex float.
- [SparseUpdate_t](sparseupdate_t.md): Low-rank update algorithm selector
- [SparseUpdatePartialRefactor](sparseupdatepartialrefactor.md): Low-rank update algorithm selector

# SparseGetInertia (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the inertia of a double-precision *LDLᵀ* factorization.

## Declaration

```objectivec
int SparseGetInertia(SparseOpaqueFactorization_Double Factored, int *num_positive, int *num_zero, int *num_negative);
```

## Parameters

- `Factored`: The [SparseFactorizationLDLTTPP](sparsefactorizationldlttpp.md) factorization.
- `num_positive`: On return, the number of positive pivots the sparse factorization functions take during the factorization of `Factored`.
- `num_zero`: On return, the number of zero pivots the sparse factorization functions take during the factorization of `Factored`.
- `num_negative`: On return, the number of negative pivots the sparse factorization functions take during the factorization of `Factored`.

<a id="return-value"></a>

## Return Value

`0` on success; otherwise, a nonzero value on error.

<a id="Discussion"></a>

## Discussion

This function returns the number of negative, zero, and positive pivots that the sparse factorization functions, [SparseFactor](sparsefactor%28____%29-8gl6j.md) and [SparseFactor](sparsefactor%28________%29-88xmk.md), take during an *LDLᵀ* factorization.

In some cases — for example, when the original matrix’s eigenvalues are close to zero — the computed numerical inertia may not be an accurate reflection of the true inertia. In such cases, the computed numerical inertia is dependent on the [zeroTolerance](sparsenumericfactoroptions/zerotolerance.md) and [pivotTolerance](sparsenumericfactoroptions/pivottolerance.md) values of the [SparseNumericFactorOptions](sparsenumericfactoroptions.md) structure.

> **Important**

>  This function supports only [SparseFactorizationLDLTTPP](sparsefactorizationldlttpp.md) factorizations.

## See Also

### Factorization inertia functions

- [SparseGetInertia](sparsegetinertia%28________%29-6r90r.md): Returns the inertia of a single-precision *LDLᵀ* factorization.
- [SparseGetInertia](sparsegetinertia%28________%29-2gc7f.md): Returns the inertia of an LDLT factorization in complex double.
- [SparseGetInertia](sparsegetinertia%28________%29-6ca5h.md): Returns the inertia of an LDLT factorization in complex float.
- [SparseUpdate_t](sparseupdate_t.md): Low-rank update algorithm selector
- [SparseUpdatePartialRefactor](sparseupdatepartialrefactor.md): Low-rank update algorithm selector
