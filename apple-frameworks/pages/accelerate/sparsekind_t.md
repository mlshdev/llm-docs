> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsekind_t](https://developer.apple.com/documentation/accelerate/sparsekind_t)

# SparseKind_t (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines whether the matrix is ordinary, symmetric, or triangular.

## Declaration

```swift
struct SparseKind_t
```

## Topics

### Constants

- [SparseOrdinary](sparseordinary.md): An unsymmetric sparse matrix without special structure.
- [SparseSymmetric](sparsesymmetric.md): A symmetric sparse matrix.
- [SparseTriangular](sparsetriangular.md): A triangular sparse matrix with a nonunit diagonal.
- [SparseUnitTriangular](sparseunittriangular.md): A triangular sparse matrix with a unit diagonal.
- [SparseHermitian](sparsehermitian.md): A flag to describe the type of matrix represented.

### Raw Values

- [init(\_:)](sparsekind_t/init%28__%29.md)
- [init(rawValue:)](sparsekind_t/init%28rawvalue_%29.md)
- [rawValue](sparsekind_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Instance Properties

- [transpose](sparseattributes_t/transpose.md): A Boolean value that specifies whether to implicitly transpose the matrix.
- [triangle](sparseattributes_t/triangle.md): An enumeration that specifies which triangle unit-triangular, triangular, and symmetric matrices need to use.
- [SparseTriangle_t](sparsetriangle_t.md): A structure that defines which triangle a symmetric matrix stores, or whether a triangular matrix is upper or lower.
- [kind](sparseattributes_t/kind.md): An eumeration that specifies whether the matrix is ordinary, unit-triangular, triangular, or symmetric.

# SparseKind_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines whether the matrix is ordinary, symmetric, or triangular.

## Declaration

```objectivec
typedef enum { ... } SparseKind_t;
```

## Topics

### Constants

- [SparseOrdinary](sparseordinary.md): An unsymmetric sparse matrix without special structure.
- [SparseSymmetric](sparsesymmetric.md): A symmetric sparse matrix.
- [SparseTriangular](sparsetriangular.md): A triangular sparse matrix with a nonunit diagonal.
- [SparseUnitTriangular](sparseunittriangular.md): A triangular sparse matrix with a unit diagonal.
- [SparseHermitian](sparsehermitian.md): A flag to describe the type of matrix represented.

## See Also

### Instance Properties

- [transpose](sparseattributes_t/transpose.md): A Boolean value that specifies whether to implicitly transpose the matrix.
- [triangle](sparseattributes_t/triangle.md): An enumeration that specifies which triangle unit-triangular, triangular, and symmetric matrices need to use.
- [SparseTriangle_t](sparsetriangle_t.md): A structure that defines which triangle a symmetric matrix stores, or whether a triangular matrix is upper or lower.
- [kind](sparseattributes_t/kind.md): An eumeration that specifies whether the matrix is ordinary, unit-triangular, triangular, or symmetric.
