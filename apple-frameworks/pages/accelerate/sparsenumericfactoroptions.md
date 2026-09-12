> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsenumericfactoroptions](https://developer.apple.com/documentation/accelerate/sparsenumericfactoroptions)

# SparseNumericFactorOptions (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains options that affect the numerical stage of a sparse factorization.

## Declaration

```swift
struct SparseNumericFactorOptions
```

<a id="overview"></a>

## Overview

[SparseNumericFactorOptions](sparsenumericfactoroptions.md) supports the following types of scaling:

| [SparseScalingDefault](sparsescalingdefault.md) | Default scaling — [SparseScalingEquilibriationInf](sparsescalingequilibriationinf.md) if *LDLᵀ*, or no scaling if Cholesky. |
| --- | --- |
| [SparseScalingUser](sparsescalinguser.md) | User scaling if [scaling](sparsenumericfactoroptions/scaling.md) is nonnull; otherwise, no scaling. |
| [SparseScalingEquilibriationInf](sparsescalingequilibriationinf.md) | Norm equilibration scaling using infinity norm. |

Note that the system clamps [pivotTolerance](sparsenumericfactoroptions/pivottolerance.md) to range `[0,0.5]`.

## Topics

### Creating a Numeric Factor Options Stucture

- [init(control:scalingMethod:scaling:pivotTolerance:zeroTolerance:)](sparsenumericfactoroptions/init%28control_scalingmethod_scaling_pivottolerance_zerotolerance_%29.md): Returns a new numeric factor options structure with the specified properties.
- [init()](sparsenumericfactoroptions/init%28%29.md): Returns a new numeric factor options structure with default properties.

### Instance Properties

- [control](sparsenumericfactoroptions/control.md): The flags that control the computation.
- [SparseControl_t](sparsecontrol_t.md): Options that control the computation.
- [scalingMethod](sparsenumericfactoroptions/scalingmethod.md): The scaling method.
- [scaling](sparsenumericfactoroptions/scaling.md): An array that scales the matrix before factorization.
- [SparseScaling_t](sparsescaling_t.md): Options that define which scaling algorithm to use.
- [pivotTolerance](sparsenumericfactoroptions/pivottolerance.md): The pivot tolerance that threshold partial pivoting uses.
- [zeroTolerance](sparsenumericfactoroptions/zerotolerance.md): The zero tolerance that some pivoting modes use.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Structures that specify factorization type and factorization options

- [SparseFactorization_t](sparsefactorization_t.md): Constants that define the factorization type.
- [SparseSymbolicFactorOptions](sparsesymbolicfactoroptions.md): A structure that contains options that affect the symbolic stage of a sparse factorization.

# SparseNumericFactorOptions (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains options that affect the numerical stage of a sparse factorization.

## Declaration

```objectivec
typedef struct { ... } SparseNumericFactorOptions;
```

<a id="overview"></a>

## Overview

[SparseNumericFactorOptions](sparsenumericfactoroptions.md) supports the following types of scaling:

| [SparseScalingDefault](sparsescalingdefault.md) | Default scaling — [SparseScalingEquilibriationInf](sparsescalingequilibriationinf.md) if *LDLᵀ*, or no scaling if Cholesky. |
| --- | --- |
| [SparseScalingUser](sparsescalinguser.md) | User scaling if [scaling](sparsenumericfactoroptions/scaling.md) is nonnull; otherwise, no scaling. |
| [SparseScalingEquilibriationInf](sparsescalingequilibriationinf.md) | Norm equilibration scaling using infinity norm. |

Note that the system clamps [pivotTolerance](sparsenumericfactoroptions/pivottolerance.md) to range `[0,0.5]`.

## Topics

### Instance Properties

- [control](sparsenumericfactoroptions/control.md): The flags that control the computation.
- [SparseControl_t](sparsecontrol_t.md): Options that control the computation.
- [scalingMethod](sparsenumericfactoroptions/scalingmethod.md): The scaling method.
- [scaling](sparsenumericfactoroptions/scaling.md): An array that scales the matrix before factorization.
- [SparseScaling_t](sparsescaling_t.md): Options that define which scaling algorithm to use.
- [pivotTolerance](sparsenumericfactoroptions/pivottolerance.md): The pivot tolerance that threshold partial pivoting uses.
- [zeroTolerance](sparsenumericfactoroptions/zerotolerance.md): The zero tolerance that some pivoting modes use.

## See Also

### Structures that specify factorization type and factorization options

- [SparseFactorization_t](sparsefactorization_t.md): Constants that define the factorization type.
- [SparseSymbolicFactorOptions](sparsesymbolicfactoroptions.md): A structure that contains options that affect the symbolic stage of a sparse factorization.
