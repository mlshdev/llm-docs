> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseattributes_t/transpose](https://developer.apple.com/documentation/accelerate/sparseattributes_t/transpose)

# transpose (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that specifies whether to implicitly transpose the matrix.

## Declaration

```swift
var transpose: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the system implicitly transposes the matrix when it uses it in any functions.

## See Also

### Instance Properties

- [triangle](triangle.md): An enumeration that specifies which triangle unit-triangular, triangular, and symmetric matrices need to use.
- [SparseTriangle_t](../sparsetriangle_t.md): A structure that defines which triangle a symmetric matrix stores, or whether a triangular matrix is upper or lower.
- [kind](kind.md): An eumeration that specifies whether the matrix is ordinary, unit-triangular, triangular, or symmetric.
- [SparseKind_t](../sparsekind_t.md): A structure that defines whether the matrix is ordinary, symmetric, or triangular.

# transpose (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that specifies whether to implicitly transpose the matrix.

## Declaration

```objectivec
bool transpose;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the system implicitly transposes the matrix when it uses it in any functions.

## See Also

### Instance Properties

- [triangle](triangle.md): An enumeration that specifies which triangle unit-triangular, triangular, and symmetric matrices need to use.
- [SparseTriangle_t](../sparsetriangle_t.md): A structure that defines which triangle a symmetric matrix stores, or whether a triangular matrix is upper or lower.
- [kind](kind.md): An eumeration that specifies whether the matrix is ordinary, unit-triangular, triangular, or symmetric.
- [SparseKind_t](../sparsekind_t.md): A structure that defines whether the matrix is ordinary, symmetric, or triangular.
