> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsescalingdefault](https://developer.apple.com/documentation/accelerate/sparsescalingdefault)

# SparseScalingDefault (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Default scaling.

## Declaration

```swift
var SparseScalingDefault: SparseScaling_t { get }
```

<a id="Discussion"></a>

## Discussion

The default scaling is [SparseScalingEquilibriationInf](sparsescalingequilibriationinf.md) if *LDLᵀ*, or no scaling if Cholesky.

## See Also

### Constants

- [SparseScalingUser](sparsescalinguser.md): User scaling.
- [SparseScalingEquilibriationInf](sparsescalingequilibriationinf.md): The norm equilibration scaling using infinity norm.
- [SparseScalingHungarianScalingOnly](sparsescalinghungarianscalingonly.md): Scaling using the Hungarian algorithm.
- [SparseScalingHungarianScalingAndOrdering](sparsescalinghungarianscalingandordering.md): Scaling and ordering using the Hungarian algorithm.

# SparseScalingDefault (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Default scaling.

## Declaration

```objectivec
SparseScalingDefault
```

<a id="Discussion"></a>

## Discussion

The default scaling is [SparseScalingEquilibriationInf](sparsescalingequilibriationinf.md) if *LDLᵀ*, or no scaling if Cholesky.

## See Also

### Constants

- [SparseScalingUser](sparsescalinguser.md): User scaling.
- [SparseScalingEquilibriationInf](sparsescalingequilibriationinf.md): The norm equilibration scaling using infinity norm.
- [SparseScalingHungarianScalingOnly](sparsescalinghungarianscalingonly.md): Scaling using the Hungarian algorithm.
- [SparseScalingHungarianScalingAndOrdering](sparsescalinghungarianscalingandordering.md): Scaling and ordering using the Hungarian algorithm.
