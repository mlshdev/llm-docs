> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsecontrol_t](https://developer.apple.com/documentation/accelerate/sparsecontrol_t)

# SparseControl_t (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options that control the computation.

## Declaration

```swift
struct SparseControl_t
```

## Topics

### Constants

- [SparseDefaultControl](sparsedefaultcontrol.md): A flag that indicates default values.

### Raw Values

- [init(\_:)](sparsecontrol_t/init%28__%29.md)
- [init(rawValue:)](sparsecontrol_t/init%28rawvalue_%29.md)
- [rawValue](sparsecontrol_t/rawvalue.md)

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
- [scalingMethod](sparsenumericfactoroptions/scalingmethod.md): The scaling method.
- [scaling](sparsenumericfactoroptions/scaling.md): An array that scales the matrix before factorization.
- [SparseScaling_t](sparsescaling_t.md): Options that define which scaling algorithm to use.
- [pivotTolerance](sparsenumericfactoroptions/pivottolerance.md): The pivot tolerance that threshold partial pivoting uses.
- [zeroTolerance](sparsenumericfactoroptions/zerotolerance.md): The zero tolerance that some pivoting modes use.

# SparseControl_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options that control the computation.

## Declaration

```objectivec
typedef enum { ... } SparseControl_t;
```

## Topics

### Constants

- [SparseDefaultControl](sparsedefaultcontrol.md): A flag that indicates default values.

## See Also

### Instance Properties

- [control](sparsenumericfactoroptions/control.md): The flags that control the computation.
- [scalingMethod](sparsenumericfactoroptions/scalingmethod.md): The scaling method.
- [scaling](sparsenumericfactoroptions/scaling.md): An array that scales the matrix before factorization.
- [SparseScaling_t](sparsescaling_t.md): Options that define which scaling algorithm to use.
- [pivotTolerance](sparsenumericfactoroptions/pivottolerance.md): The pivot tolerance that threshold partial pivoting uses.
- [zeroTolerance](sparsenumericfactoroptions/zerotolerance.md): The zero tolerance that some pivoting modes use.
