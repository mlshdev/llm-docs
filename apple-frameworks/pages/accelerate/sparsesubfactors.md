> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesubfactors](https://developer.apple.com/documentation/accelerate/sparsesubfactors)

# SparseSubfactorS (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A diagonal scaling subfactor that’s valid for Cholesky and *LDLᵀ* only.

## Declaration

```swift
var SparseSubfactorS: SparseSubfactor_t { get }
```

## See Also

### Constants

- [SparseSubfactorInvalid](sparsesubfactorinvalid.md): An invalid subfactor that indicates the requested type is incompatible with the supplied factorization or the system has destroyed it.
- [SparseSubfactorP](sparsesubfactorp.md): A permutation subfactor that’s valid for all factorization types.
- [SparseSubfactorL](sparsesubfactorl.md): An *L* factor subfactor that’s valid for Cholesky and *LDLᵀ* only.
- [SparseSubfactorD](sparsesubfactord.md): A *D* factor subfactor that’s valid for *LDLᵀ*` `only.
- [SparseSubfactorPLPS](sparsesubfactorplps.md): A half-solve subfactor that’s valid for Cholesky and *LDLᵀ* only.
- [SparseSubfactorQ](sparsesubfactorq.md): A *Q* factor subfactor that’s valid for QR only.
- [SparseSubfactorR](sparsesubfactorr.md): An *R* factor subfactor that’s valid for QR and Cholesky *AᵀA* only.
- [SparseSubfactorRP](sparsesubfactorrp.md): A half-solve subfactor that’s valid for QR and Cholesky *AᵀA* only.
- [SparseSubfactorSc](sparsesubfactorsc.md): Types of sub-factor object.
- [SparseSubfactorSr](sparsesubfactorsr.md): Types of sub-factor object.

# SparseSubfactorS (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A diagonal scaling subfactor that’s valid for Cholesky and *LDLᵀ* only.

## Declaration

```objectivec
SparseSubfactorS
```

## See Also

### Constants

- [SparseSubfactorInvalid](sparsesubfactorinvalid.md): An invalid subfactor that indicates the requested type is incompatible with the supplied factorization or the system has destroyed it.
- [SparseSubfactorP](sparsesubfactorp.md): A permutation subfactor that’s valid for all factorization types.
- [SparseSubfactorL](sparsesubfactorl.md): An *L* factor subfactor that’s valid for Cholesky and *LDLᵀ* only.
- [SparseSubfactorD](sparsesubfactord.md): A *D* factor subfactor that’s valid for *LDLᵀ*` `only.
- [SparseSubfactorPLPS](sparsesubfactorplps.md): A half-solve subfactor that’s valid for Cholesky and *LDLᵀ* only.
- [SparseSubfactorQ](sparsesubfactorq.md): A *Q* factor subfactor that’s valid for QR only.
- [SparseSubfactorR](sparsesubfactorr.md): An *R* factor subfactor that’s valid for QR and Cholesky *AᵀA* only.
- [SparseSubfactorRP](sparsesubfactorrp.md): A half-solve subfactor that’s valid for QR and Cholesky *AᵀA* only.
- [SparseSubfactorSc](sparsesubfactorsc.md): Types of sub-factor object.
- [SparseSubfactorSr](sparsesubfactorsr.md): Types of sub-factor object.
