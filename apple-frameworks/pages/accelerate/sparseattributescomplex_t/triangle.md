> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseattributescomplex_t/triangle](https://developer.apple.com/documentation/accelerate/sparseattributescomplex_t/triangle)

# triangle (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A flag to indicate which triangle of a matrix is used.

## Declaration

```swift
var triangle: SparseTriangle_t { get set }
```

<a id="discussion"></a>

## Discussion

- **`SparseUpperTriangle`**: For triangular and unit-triangular matrices, indicates that the upper triangle is to be used, and the lower triangle is implicitly zero. For symmetric (Hermitian) matrices, indicates that the upper triangle is to be used; the lower triangle is implicitly defined by reflection.
- **`SparseLowerTriangle`**: For triangular matrices, indicates that the lower triangle is to be used, and the upper triangle is implicitly zero. For symmetric (Hermitian) matrices, indicates that the lower triangle is to be used; the upper triangle is implicitly defined by reflection.

# triangle (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A flag to indicate which triangle of a matrix is used.

## Declaration

```objectivec
SparseTriangle_t triangle;
```

<a id="discussion"></a>

## Discussion

- **`SparseUpperTriangle`**: For triangular and unit-triangular matrices, indicates that the upper triangle is to be used, and the lower triangle is implicitly zero. For symmetric (Hermitian) matrices, indicates that the upper triangle is to be used; the lower triangle is implicitly defined by reflection.
- **`SparseLowerTriangle`**: For triangular matrices, indicates that the lower triangle is to be used, and the upper triangle is implicitly zero. For symmetric (Hermitian) matrices, indicates that the lower triangle is to be used; the upper triangle is implicitly defined by reflection.
