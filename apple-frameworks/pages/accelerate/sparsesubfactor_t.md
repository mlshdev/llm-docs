> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesubfactor_t](https://developer.apple.com/documentation/accelerate/sparsesubfactor_t)

# SparseSubfactor_t (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define the subfactor of a factorization.

## Declaration

```swift
struct SparseSubfactor_t
```

## Topics

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
- [SparseSubfactorSr](sparsesubfactorsr.md): Types of sub-factor object.

### Raw Values

- [init(\_:)](sparsesubfactor_t/init%28__%29.md)
- [init(rawValue:)](sparsesubfactor_t/init%28rawvalue_%29.md)
- [rawValue](sparsesubfactor_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Subfactor Extraction

- [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-49d8w.md): Returns an opaque object that represents a subfactor of a factorization of a matrix of double-precision values.
- [SparseOpaqueFactorization_Double](sparseopaquefactorization_double.md): A structure that represents the factorization of a matrix of double-precision, floating-point values.
- [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-4renf.md): Returns an opaque object that represents a subfactor of a factorization of a matrix of single-precision values.
- [SparseOpaqueFactorization_Float](sparseopaquefactorization_float.md): A structure that represents the factorization of a matrix of single-precision, floating-point values.
- [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-39487.md): Returns an opaque object representing a sub-factor of a factorization in complex double.
- [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-udwd.md): Returns an opaque object representing a sub-factor of a factorization in complex float.

# SparseSubfactor_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define the subfactor of a factorization.

## Declaration

```objectivec
typedef enum { ... } SparseSubfactor_t;
```

## Topics

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
- [SparseSubfactorSr](sparsesubfactorsr.md): Types of sub-factor object.

## See Also

### Subfactor Extraction

- [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-49d8w.md): Returns an opaque object that represents a subfactor of a factorization of a matrix of double-precision values.
- [SparseOpaqueFactorization_Double](sparseopaquefactorization_double.md): A structure that represents the factorization of a matrix of double-precision, floating-point values.
- [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-4renf.md): Returns an opaque object that represents a subfactor of a factorization of a matrix of single-precision values.
- [SparseOpaqueFactorization_Float](sparseopaquefactorization_float.md): A structure that represents the factorization of a matrix of single-precision, floating-point values.
- [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-39487.md): Returns an opaque object representing a sub-factor of a factorization in complex double.
- [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-udwd.md): Returns an opaque object representing a sub-factor of a factorization in complex float.
