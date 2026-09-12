> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsenumericfactoroptions/zerotolerance](https://developer.apple.com/documentation/accelerate/sparsenumericfactoroptions/zerotolerance)

# zeroTolerance (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The zero tolerance that some pivoting modes use.

## Declaration

```swift
var zeroTolerance: Double
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  Only the symmetric factorization algorithms use the [zeroTolerance](zerotolerance.md) parameter. [SparseFactorizationQR](../sparsefactorizationqr.md) ignores the zero tolerance value.

## See Also

### Instance Properties

- [control](control.md): The flags that control the computation.
- [SparseControl_t](../sparsecontrol_t.md): Options that control the computation.
- [scalingMethod](scalingmethod.md): The scaling method.
- [scaling](scaling.md): An array that scales the matrix before factorization.
- [SparseScaling_t](../sparsescaling_t.md): Options that define which scaling algorithm to use.
- [pivotTolerance](pivottolerance.md): The pivot tolerance that threshold partial pivoting uses.

# zeroTolerance (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The zero tolerance that some pivoting modes use.

## Declaration

```objectivec
double zeroTolerance;
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  Only the symmetric factorization algorithms use the [zeroTolerance](zerotolerance.md) parameter. [SparseFactorizationQR](../sparsefactorizationqr.md) ignores the zero tolerance value.

## See Also

### Instance Properties

- [control](control.md): The flags that control the computation.
- [SparseControl_t](../sparsecontrol_t.md): Options that control the computation.
- [scalingMethod](scalingmethod.md): The scaling method.
- [scaling](scaling.md): An array that scales the matrix before factorization.
- [SparseScaling_t](../sparsescaling_t.md): Options that define which scaling algorithm to use.
- [pivotTolerance](pivottolerance.md): The pivot tolerance that threshold partial pivoting uses.
