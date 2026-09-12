> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsescaling_t](https://developer.apple.com/documentation/accelerate/sparsescaling_t)

# SparseScaling_t (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options that define which scaling algorithm to use.

## Declaration

```swift
struct SparseScaling_t
```

## Topics

### Constants

- [SparseScalingDefault](sparsescalingdefault.md): Default scaling.
- [SparseScalingUser](sparsescalinguser.md): User scaling.
- [SparseScalingEquilibriationInf](sparsescalingequilibriationinf.md): The norm equilibration scaling using infinity norm.
- [SparseScalingHungarianScalingOnly](sparsescalinghungarianscalingonly.md): Scaling using the Hungarian algorithm.
- [SparseScalingHungarianScalingAndOrdering](sparsescalinghungarianscalingandordering.md): Scaling and ordering using the Hungarian algorithm.

### Raw Values

- [init(\_:)](sparsescaling_t/init%28__%29.md)
- [init(rawValue:)](sparsescaling_t/init%28rawvalue_%29.md)
- [rawValue](sparsescaling_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Instance Properties

- [control](sparsenumericfactoroptions/control.md): The flags that control the computation.
- [SparseControl_t](sparsecontrol_t.md): Options that control the computation.
- [scalingMethod](sparsenumericfactoroptions/scalingmethod.md): The scaling method.
- [scaling](sparsenumericfactoroptions/scaling.md): An array that scales the matrix before factorization.
- [pivotTolerance](sparsenumericfactoroptions/pivottolerance.md): The pivot tolerance that threshold partial pivoting uses.
- [zeroTolerance](sparsenumericfactoroptions/zerotolerance.md): The zero tolerance that some pivoting modes use.

# SparseScaling_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options that define which scaling algorithm to use.

## Declaration

```objectivec
typedef enum { ... } SparseScaling_t;
```

## Topics

### Constants

- [SparseScalingDefault](sparsescalingdefault.md): Default scaling.
- [SparseScalingUser](sparsescalinguser.md): User scaling.
- [SparseScalingEquilibriationInf](sparsescalingequilibriationinf.md): The norm equilibration scaling using infinity norm.
- [SparseScalingHungarianScalingOnly](sparsescalinghungarianscalingonly.md): Scaling using the Hungarian algorithm.
- [SparseScalingHungarianScalingAndOrdering](sparsescalinghungarianscalingandordering.md): Scaling and ordering using the Hungarian algorithm.

## See Also

### Instance Properties

- [control](sparsenumericfactoroptions/control.md): The flags that control the computation.
- [SparseControl_t](sparsecontrol_t.md): Options that control the computation.
- [scalingMethod](sparsenumericfactoroptions/scalingmethod.md): The scaling method.
- [scaling](sparsenumericfactoroptions/scaling.md): An array that scales the matrix before factorization.
- [pivotTolerance](sparsenumericfactoroptions/pivottolerance.md): The pivot tolerance that threshold partial pivoting uses.
- [zeroTolerance](sparsenumericfactoroptions/zerotolerance.md): The zero tolerance that some pivoting modes use.
