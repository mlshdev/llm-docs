> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesymmetric](https://developer.apple.com/documentation/accelerate/sparsesymmetric)

# SparseSymmetric (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A symmetric sparse matrix.

## Declaration

```swift
var SparseSymmetric: SparseKind_t { get }
```

## Mentioned In

- [Creating a sparse matrix from coordinate format arrays](creating-a-sparse-matrix-from-coordinate-format-arrays.md)

<a id="Discussion"></a>

## Discussion

The [SparseTriangle_t](sparsetriangle_t.md) field indicates which triangle (upper or lower) represents the matrix.

## See Also

### Constants

- [SparseOrdinary](sparseordinary.md): An unsymmetric sparse matrix without special structure.
- [SparseTriangular](sparsetriangular.md): A triangular sparse matrix with a nonunit diagonal.
- [SparseUnitTriangular](sparseunittriangular.md): A triangular sparse matrix with a unit diagonal.
- [SparseHermitian](sparsehermitian.md): A flag to describe the type of matrix represented.

# SparseSymmetric (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A symmetric sparse matrix.

## Declaration

```objectivec
SparseSymmetric
```

## Mentioned In

- [Creating a sparse matrix from coordinate format arrays](creating-a-sparse-matrix-from-coordinate-format-arrays.md)

<a id="Discussion"></a>

## Discussion

The [SparseTriangle_t](sparsetriangle_t.md) field indicates which triangle (upper or lower) represents the matrix.

## See Also

### Constants

- [SparseOrdinary](sparseordinary.md): An unsymmetric sparse matrix without special structure.
- [SparseTriangular](sparsetriangular.md): A triangular sparse matrix with a nonunit diagonal.
- [SparseUnitTriangular](sparseunittriangular.md): A triangular sparse matrix with a unit diagonal.
- [SparseHermitian](sparsehermitian.md): A flag to describe the type of matrix represented.
