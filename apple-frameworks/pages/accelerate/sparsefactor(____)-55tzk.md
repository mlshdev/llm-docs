> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsefactor(_:_:)-55tzk](https://developer.apple.com/documentation/accelerate/sparsefactor(_:_:)-55tzk)

# SparseFactor(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns a symbolic factorization of the requested type for a complex matrix with the given structure.

## Declaration

```swift
func SparseFactor(_ type: SparseFactorization_t, _ Matrix: SparseMatrixStructureComplex) -> SparseOpaqueSymbolicFactorization
```

## Parameters

- `type`: The type of factorization to perform.
- `Matrix`: The structure of the sparse matrix to be factorized.

<a id="return-value"></a>

## Return Value

The requested symbolic factorization of Matrix.

<a id="discussion"></a>

## Discussion

The resulting symbolic factorization may be used for multiple numerical factorizations with different numerical values but the same non-zero structure.

## See Also

### Complex matrix factorization functions

- [SparseFactor(\_:\_:)](sparsefactor%28____%29-1avkp.md): Returns the specified factorization of a sparse matrix of complex double values.
- [SparseFactor(\_:\_:)](sparsefactor%28____%29-5zzpu.md): Returns the factorization of a sparse matrix of complex double values corresponding to the supplied symbolic factorization.
- [SparseFactor(\_:\_:)](sparsefactor%28____%29-73n38.md): Returns the specified factorization of a sparse matrix of complex float values.

# SparseFactor (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns a symbolic factorization of the requested type for a complex matrix with the given structure.

## Declaration

```objectivec
static SparseOpaqueSymbolicFactorization SparseFactor(SparseFactorization_t type, SparseMatrixStructureComplex Matrix);
```

## Parameters

- `type`: The type of factorization to perform.
- `Matrix`: The structure of the sparse matrix to be factorized.

<a id="return-value"></a>

## Return Value

The requested symbolic factorization of Matrix.

<a id="discussion"></a>

## Discussion

The resulting symbolic factorization may be used for multiple numerical factorizations with different numerical values but the same non-zero structure.

## See Also

### Complex matrix factorization functions

- [SparseFactor](sparsefactor%28____%29-1avkp.md): Returns the specified factorization of a sparse matrix of complex double values.
- [SparseFactor](sparsefactor%28____%29-5zzpu.md): Returns the factorization of a sparse matrix of complex double values corresponding to the supplied symbolic factorization.
- [SparseFactor](sparsefactor%28____%29-73n38.md): Returns the specified factorization of a sparse matrix of complex float values.
