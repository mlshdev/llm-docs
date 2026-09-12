> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsenumericfactoroptions/pivottolerance](https://developer.apple.com/documentation/accelerate/sparsenumericfactoroptions/pivottolerance)

# pivotTolerance (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The pivot tolerance that threshold partial pivoting uses.

## Declaration

```swift
var pivotTolerance: Double
```

<a id="Discussion"></a>

## Discussion

The system clamps this to range `[0,0.5]`.

> **Note**

>  Only the symmetric factorization algorithms use the [pivotTolerance](pivottolerance.md) parameter. [SparseFactorizationQR](../sparsefactorizationqr.md)  ignores the pivot tolerance value.

## See Also

### Instance Properties

- [control](control.md): The flags that control the computation.
- [SparseControl_t](../sparsecontrol_t.md): Options that control the computation.
- [scalingMethod](scalingmethod.md): The scaling method.
- [scaling](scaling.md): An array that scales the matrix before factorization.
- [SparseScaling_t](../sparsescaling_t.md): Options that define which scaling algorithm to use.
- [zeroTolerance](zerotolerance.md): The zero tolerance that some pivoting modes use.

# pivotTolerance (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The pivot tolerance that threshold partial pivoting uses.

## Declaration

```objectivec
double pivotTolerance;
```

<a id="Discussion"></a>

## Discussion

The system clamps this to range `[0,0.5]`.

> **Note**

>  Only the symmetric factorization algorithms use the [pivotTolerance](pivottolerance.md) parameter. [SparseFactorizationQR](../sparsefactorizationqr.md)  ignores the pivot tolerance value.

## See Also

### Instance Properties

- [control](control.md): The flags that control the computation.
- [SparseControl_t](../sparsecontrol_t.md): Options that control the computation.
- [scalingMethod](scalingmethod.md): The scaling method.
- [scaling](scaling.md): An array that scales the matrix before factorization.
- [SparseScaling_t](../sparsescaling_t.md): Options that define which scaling algorithm to use.
- [zeroTolerance](zerotolerance.md): The zero tolerance that some pivoting modes use.
