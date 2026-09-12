> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseopaquesubfactor_double/attributes](https://developer.apple.com/documentation/accelerate/sparseopaquesubfactor_double/attributes)

# attributes (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type representing the attributes of a matrix.

## Declaration

```swift
var attributes: SparseAttributes_t
```

<a id="discussion"></a>

## Discussion

- **`transpose`**: If `true`, the matrix is implicitly transposed when used in any functions.
- **`triangle`**: If `kind` is `SparseOrdinary`, this field is ignored. Otherwise it indicates which triangle (upper or lower) represents the matrix.
- **`kind`**: Identifies the matrix as being full (`SparseOrdinary`), \[unit-\] triangular (`SparseTriangular`, `SparseUnitTriangular`), or symmetric (Hermitian) (`SparseSymmetric`, `SparseHermitian`).
- **`_reserved`**: for future expansion. Must be zero.
- **`_allocatedBySparse`**: an implementation detail. Should be zero for any matrix you allocate.

# attributes (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type representing the attributes of a matrix.

## Declaration

```objectivec
SparseAttributes_t attributes;
```

<a id="discussion"></a>

## Discussion

- **`transpose`**: If `true`, the matrix is implicitly transposed when used in any functions.
- **`triangle`**: If `kind` is `SparseOrdinary`, this field is ignored. Otherwise it indicates which triangle (upper or lower) represents the matrix.
- **`kind`**: Identifies the matrix as being full (`SparseOrdinary`), \[unit-\] triangular (`SparseTriangular`, `SparseUnitTriangular`), or symmetric (Hermitian) (`SparseSymmetric`, `SparseHermitian`).
- **`_reserved`**: for future expansion. Must be zero.
- **`_allocatedBySparse`**: an implementation detail. Should be zero for any matrix you allocate.
