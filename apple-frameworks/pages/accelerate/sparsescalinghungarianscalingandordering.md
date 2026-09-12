> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsescalinghungarianscalingandordering](https://developer.apple.com/documentation/accelerate/sparsescalinghungarianscalingandordering)

# SparseScalingHungarianScalingAndOrdering (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Scaling and ordering using the Hungarian algorithm.

## Declaration

```swift
var SparseScalingHungarianScalingAndOrdering: SparseScaling_t { get }
```

<a id="Discussion"></a>

## Discussion

The Sparse Solvers library uses the associated matching to place large entries on the diagonal. This option is only valid if you use a combined symbolic and numeric call to `SparseFactor`()\`. The Sparse Solvers library only supports this option for LU factorizations.

This algorithm is similar to MC64.

## See Also

### Constants

- [SparseScalingDefault](sparsescalingdefault.md): Default scaling.
- [SparseScalingUser](sparsescalinguser.md): User scaling.
- [SparseScalingEquilibriationInf](sparsescalingequilibriationinf.md): The norm equilibration scaling using infinity norm.
- [SparseScalingHungarianScalingOnly](sparsescalinghungarianscalingonly.md): Scaling using the Hungarian algorithm.

# SparseScalingHungarianScalingAndOrdering (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Scaling and ordering using the Hungarian algorithm.

## Declaration

```objectivec
SparseScalingHungarianScalingAndOrdering
```

<a id="Discussion"></a>

## Discussion

The Sparse Solvers library uses the associated matching to place large entries on the diagonal. This option is only valid if you use a combined symbolic and numeric call to `SparseFactor`()\`. The Sparse Solvers library only supports this option for LU factorizations.

This algorithm is similar to MC64.

## See Also

### Constants

- [SparseScalingDefault](sparsescalingdefault.md): Default scaling.
- [SparseScalingUser](sparsescalinguser.md): User scaling.
- [SparseScalingEquilibriationInf](sparsescalingequilibriationinf.md): The norm equilibration scaling using infinity norm.
- [SparseScalingHungarianScalingOnly](sparsescalinghungarianscalingonly.md): Scaling using the Hungarian algorithm.
