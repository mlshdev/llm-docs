> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsenumericfactoroptions/scaling](https://developer.apple.com/documentation/accelerate/sparsenumericfactoroptions/scaling)

# scaling (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array that scales the matrix before factorization.

## Declaration

```swift
var scaling: UnsafeMutableRawPointer?
```

<a id="Discussion"></a>

## Discussion

This array can either be `nil` or a pointer to an array of real values with a length greater than or equal to the size of the matrix that you’re factoring. The type of the array values is the element type of the matrix (but real, even if the matrix is complex).

If [scalingMethod](scalingmethod.md) is [SparseScalingUser](../sparsescalinguser.md), and this pointer is `nil`, the system doesn’t apply scaling.

If [scalingMethod](scalingmethod.md) is [SparseScalingUser](../sparsescalinguser.md), and this pointer isn’t `nil`, the system uses the user-provided array to scale the matrix before factorization.

If [scalingMethod](scalingmethod.md) isn’t [SparseScalingUser](../sparsescalinguser.md), the factor function computes its own scaling.

If this pointer isn’t `nil`, the computed scaling returns in the array.

## See Also

### Instance Properties

- [control](control.md): The flags that control the computation.
- [SparseControl_t](../sparsecontrol_t.md): Options that control the computation.
- [scalingMethod](scalingmethod.md): The scaling method.
- [SparseScaling_t](../sparsescaling_t.md): Options that define which scaling algorithm to use.
- [pivotTolerance](pivottolerance.md): The pivot tolerance that threshold partial pivoting uses.
- [zeroTolerance](zerotolerance.md): The zero tolerance that some pivoting modes use.

# scaling (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array that scales the matrix before factorization.

## Declaration

```objectivec
void * scaling;
```

<a id="Discussion"></a>

## Discussion

This array can either be `nil` or a pointer to an array of real values with a length greater than or equal to the size of the matrix that you’re factoring. The type of the array values is the element type of the matrix (but real, even if the matrix is complex).

If [scalingMethod](scalingmethod.md) is [SparseScalingUser](../sparsescalinguser.md), and this pointer is `nil`, the system doesn’t apply scaling.

If [scalingMethod](scalingmethod.md) is [SparseScalingUser](../sparsescalinguser.md), and this pointer isn’t `nil`, the system uses the user-provided array to scale the matrix before factorization.

If [scalingMethod](scalingmethod.md) isn’t [SparseScalingUser](../sparsescalinguser.md), the factor function computes its own scaling.

If this pointer isn’t `nil`, the computed scaling returns in the array.

## See Also

### Instance Properties

- [control](control.md): The flags that control the computation.
- [SparseControl_t](../sparsecontrol_t.md): Options that control the computation.
- [scalingMethod](scalingmethod.md): The scaling method.
- [SparseScaling_t](../sparsescaling_t.md): Options that define which scaling algorithm to use.
- [pivotTolerance](pivottolerance.md): The pivot tolerance that threshold partial pivoting uses.
- [zeroTolerance](zerotolerance.md): The zero tolerance that some pivoting modes use.
