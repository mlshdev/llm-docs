> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsetriangle_t](https://developer.apple.com/documentation/accelerate/sparsetriangle_t)

# SparseTriangle_t (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines which triangle a symmetric matrix stores, or whether a triangular matrix is upper or lower.

## Declaration

```swift
struct SparseTriangle_t
```

## Topics

### Constants

- [SparseLowerTriangle](sparselowertriangle.md): A constant that specifies the lower triangle.
- [SparseUpperTriangle](sparseuppertriangle.md): A constant that specifies the upper triangle.

### Raw Values

- [init(\_:)](sparsetriangle_t/init%28__%29.md)
- [init(rawValue:)](sparsetriangle_t/init%28rawvalue_%29.md)
- [rawValue](sparsetriangle_t/rawvalue.md)

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
- [kind](sparseattributes_t/kind.md): An eumeration that specifies whether the matrix is ordinary, unit-triangular, triangular, or symmetric.
- [SparseKind_t](sparsekind_t.md): A structure that defines whether the matrix is ordinary, symmetric, or triangular.

# SparseTriangle_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines which triangle a symmetric matrix stores, or whether a triangular matrix is upper or lower.

## Declaration

```objectivec
typedef enum { ... } SparseTriangle_t;
```

## Topics

### Constants

- [SparseLowerTriangle](sparselowertriangle.md): A constant that specifies the lower triangle.
- [SparseUpperTriangle](sparseuppertriangle.md): A constant that specifies the upper triangle.

## See Also

### Instance Properties

- [transpose](sparseattributes_t/transpose.md): A Boolean value that specifies whether to implicitly transpose the matrix.
- [triangle](sparseattributes_t/triangle.md): An enumeration that specifies which triangle unit-triangular, triangular, and symmetric matrices need to use.
- [kind](sparseattributes_t/kind.md): An eumeration that specifies whether the matrix is ordinary, unit-triangular, triangular, or symmetric.
- [SparseKind_t](sparsekind_t.md): A structure that defines whether the matrix is ordinary, symmetric, or triangular.
