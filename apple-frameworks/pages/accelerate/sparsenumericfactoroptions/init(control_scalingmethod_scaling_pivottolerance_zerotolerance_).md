> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsenumericfactoroptions/init(control:scalingmethod:scaling:pivottolerance:zerotolerance:)](https://developer.apple.com/documentation/accelerate/sparsenumericfactoroptions/init(control:scalingmethod:scaling:pivottolerance:zerotolerance:))

# init(control:scalingMethod:scaling:pivotTolerance:zeroTolerance:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a new numeric factor options structure with the specified properties.

## Declaration

```swift
init(control: SparseControl_t, scalingMethod: SparseScaling_t, scaling: UnsafeMutableRawPointer?, pivotTolerance: Double, zeroTolerance: Double)
```

## Parameters

- `control`: The flags that control the computation.
- `scalingMethod`: The scaling method.
- `scaling`: An array that scales the matrix before factorization.
- `pivotTolerance`: The pivot tolerance that threshold partial pivoting uses.
- `zeroTolerance`: The zero tolerance that some pivoting modes use.

<a id="Discussion"></a>

## Discussion

> **Note**

>  Only the symmetric factorization algorithms use the [pivotTolerance](pivottolerance.md) and [zeroTolerance](zerotolerance.md) parameters. [SparseFactorizationQR](../sparsefactorizationqr.md) ignores the pivot and zero tolerance values.

## See Also

### Creating a Numeric Factor Options Stucture

- [init()](init%28%29.md): Returns a new numeric factor options structure with default properties.
