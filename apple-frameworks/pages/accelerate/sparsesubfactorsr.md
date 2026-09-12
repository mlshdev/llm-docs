> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesubfactorsr](https://developer.apple.com/documentation/accelerate/sparsesubfactorsr)

# SparseSubfactorSr (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Types of sub-factor object.

## Declaration

```swift
var SparseSubfactorSr: SparseSubfactor_t { get }
```

<a id="discussion"></a>

## Discussion

- **`SparseSubfactorInvalid`**: Invalid subfactor (requested type not compatible with supplied factorization or already destroyed).
- **`SparseSubfactorP`**: Permutation subfactor, valid for all factorization types. (this is the row permutation for LU factorization)
- **`SparseSubfactorS`**: Diagonal scaling subfactor, valid for Cholesky and LDL^T only.
- **`SparseSubfactorL`**: L factor subfactor, valid for Cholesky and LDL^T only.
- **`SparseSubfactorD`**: D factor subfactor, valid for LDL^T only.
- **`SparseSubfactorPLPS`**: Half-solve subfactor, valid for Cholesky and LDL^T only. Corresponds to PLP’ on forward (non-transpose) solve, and corresponds to PLDP’ on backward (transpose) solve (D=I for Chokesky).
- **`SparseSubfactorQ`**: Q factor subfactor, valid for QR only. Column permutation, valid for LU only.
- **`SparseSubfactorR`**: R factor subfactor, valid for QR and CholeskyAtA only.
- **`SparseSubfactorRP`**: Half-solve subfactor, valid for QR and CholeskyAtA only.
- **`SparseSubfactorSr`**: Diagonal row scaling subfactor, valid for LU only.
- **`SparseSubfactorSc`**: Diagonal column scaling subfactor, valid for LU only.

## See Also

### Constants

- [SparseSubfactorInvalid](sparsesubfactorinvalid.md): An invalid subfactor that indicates the requested type is incompatible with the supplied factorization or the system has destroyed it.
- [SparseSubfactorP](sparsesubfactorp.md): A permutation subfactor that’s valid for all factorization types.
- [SparseSubfactorS](sparsesubfactors.md): A diagonal scaling subfactor that’s valid for Cholesky and *LDLᵀ* only.
- [SparseSubfactorL](sparsesubfactorl.md): An *L* factor subfactor that’s valid for Cholesky and *LDLᵀ* only.
- [SparseSubfactorD](sparsesubfactord.md): A *D* factor subfactor that’s valid for *LDLᵀ*` `only.
- [SparseSubfactorPLPS](sparsesubfactorplps.md): A half-solve subfactor that’s valid for Cholesky and *LDLᵀ* only.
- [SparseSubfactorQ](sparsesubfactorq.md): A *Q* factor subfactor that’s valid for QR only.
- [SparseSubfactorR](sparsesubfactorr.md): An *R* factor subfactor that’s valid for QR and Cholesky *AᵀA* only.
- [SparseSubfactorRP](sparsesubfactorrp.md): A half-solve subfactor that’s valid for QR and Cholesky *AᵀA* only.
- [SparseSubfactorSc](sparsesubfactorsc.md): Types of sub-factor object.

# SparseSubfactorSr (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Types of sub-factor object.

## Declaration

```objectivec
SparseSubfactorSr
```

<a id="discussion"></a>

## Discussion

- **`SparseSubfactorInvalid`**: Invalid subfactor (requested type not compatible with supplied factorization or already destroyed).
- **`SparseSubfactorP`**: Permutation subfactor, valid for all factorization types. (this is the row permutation for LU factorization)
- **`SparseSubfactorS`**: Diagonal scaling subfactor, valid for Cholesky and LDL^T only.
- **`SparseSubfactorL`**: L factor subfactor, valid for Cholesky and LDL^T only.
- **`SparseSubfactorD`**: D factor subfactor, valid for LDL^T only.
- **`SparseSubfactorPLPS`**: Half-solve subfactor, valid for Cholesky and LDL^T only. Corresponds to PLP’ on forward (non-transpose) solve, and corresponds to PLDP’ on backward (transpose) solve (D=I for Chokesky).
- **`SparseSubfactorQ`**: Q factor subfactor, valid for QR only. Column permutation, valid for LU only.
- **`SparseSubfactorR`**: R factor subfactor, valid for QR and CholeskyAtA only.
- **`SparseSubfactorRP`**: Half-solve subfactor, valid for QR and CholeskyAtA only.
- **`SparseSubfactorSr`**: Diagonal row scaling subfactor, valid for LU only.
- **`SparseSubfactorSc`**: Diagonal column scaling subfactor, valid for LU only.

## See Also

### Constants

- [SparseSubfactorInvalid](sparsesubfactorinvalid.md): An invalid subfactor that indicates the requested type is incompatible with the supplied factorization or the system has destroyed it.
- [SparseSubfactorP](sparsesubfactorp.md): A permutation subfactor that’s valid for all factorization types.
- [SparseSubfactorS](sparsesubfactors.md): A diagonal scaling subfactor that’s valid for Cholesky and *LDLᵀ* only.
- [SparseSubfactorL](sparsesubfactorl.md): An *L* factor subfactor that’s valid for Cholesky and *LDLᵀ* only.
- [SparseSubfactorD](sparsesubfactord.md): A *D* factor subfactor that’s valid for *LDLᵀ*` `only.
- [SparseSubfactorPLPS](sparsesubfactorplps.md): A half-solve subfactor that’s valid for Cholesky and *LDLᵀ* only.
- [SparseSubfactorQ](sparsesubfactorq.md): A *Q* factor subfactor that’s valid for QR only.
- [SparseSubfactorR](sparsesubfactorr.md): An *R* factor subfactor that’s valid for QR and Cholesky *AᵀA* only.
- [SparseSubfactorRP](sparsesubfactorrp.md): A half-solve subfactor that’s valid for QR and Cholesky *AᵀA* only.
- [SparseSubfactorSc](sparsesubfactorsc.md): Types of sub-factor object.
