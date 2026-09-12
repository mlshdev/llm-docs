> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsefactor(_:_:_:)-6s9g](https://developer.apple.com/documentation/accelerate/sparsefactor(_:_:_:)-6s9g)

# SparseFactor(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns a symbolic factorization of the requested type for a complex matrix with the given structure, with the supplied options.

## Declaration

```swift
func SparseFactor(_ type: SparseFactorization_t, _ MatrixComplex: SparseMatrixStructureComplex, _ options: SparseSymbolicFactorOptions) -> SparseOpaqueSymbolicFactorization
```

## Parameters

- `type`: The type of factorization to perform.

<a id="return-value"></a>

## Return Value

The requested symbolic factorization of Matrix.

<a id="discussion"></a>

## Discussion

The resulting symbolic factorization may be used for multiple numerical factorizations with different numerical values but the same non-zero structure.

## See Also

### Complex factorization functions

- [SparseFactor(\_:\_:)](sparsefactor%28____%29-7a3l4.md): Returns the factorization of a sparse matrix of complex float values corresponding to the supplied symbolic factorization.
- [SparseFactor(\_:\_:\_:)](sparsefactor%28______%29-7kqvi.md): Returns the factorization of a sparse matrix of complex float values corresponding to the supplied symbolic factorization, using the specified options.
- [SparseFactor(\_:\_:\_:)](sparsefactor%28______%29-9ypz5.md): Returns the factorization of a sparse matrix of complex double values corresponding to the supplied symbolic factorization, using the specified options.
- [SparseFactor(\_:\_:\_:\_:)](sparsefactor%28________%29-6hqfp.md): Returns the specified factorization of a sparse matrix of complex double values, using the specified options.
- [SparseFactor(\_:\_:\_:\_:)](sparsefactor%28________%29-9ykfp.md): Returns the specified factorization of a sparse matrix of complex float values, using the specified options.
- [SparseFactor(\_:\_:\_:\_:\_:)](sparsefactor%28__________%29-2dqfv.md): Returns the factorization of a sparse matrix of complex float values corresponding to the supplied symbolic factorization, using the specified options and without any internal memory allocations.
- [SparseFactor(\_:\_:\_:\_:\_:)](sparsefactor%28__________%29-7j0dm.md): Returns the factorization of a sparse matrix of complex double values corresponding to the supplied symbolic factorization, using the specified options and without any internal memory allocations.

# SparseFactor (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns a symbolic factorization of the requested type for a complex matrix with the given structure, with the supplied options.

## Declaration

```objectivec
static SparseOpaqueSymbolicFactorization SparseFactor(SparseFactorization_t type, SparseMatrixStructureComplex Matrix, SparseSymbolicFactorOptions sfoptions);
```

## Parameters

- `type`: The type of factorization to perform.
- `Matrix`: The structure of the sparse matrix to be factorized.
- `sfoptions`: Symbolic factor options, for example the ordering algorithm to use.

<a id="return-value"></a>

## Return Value

The requested symbolic factorization of Matrix.

<a id="discussion"></a>

## Discussion

The resulting symbolic factorization may be used for multiple numerical factorizations with different numerical values but the same non-zero structure.

## See Also

### Complex factorization functions

- [SparseFactor](sparsefactor%28____%29-7a3l4.md): Returns the factorization of a sparse matrix of complex float values corresponding to the supplied symbolic factorization.
- [SparseFactor](sparsefactor%28______%29-7kqvi.md): Returns the factorization of a sparse matrix of complex float values corresponding to the supplied symbolic factorization, using the specified options.
- [SparseFactor](sparsefactor%28______%29-9ypz5.md): Returns the factorization of a sparse matrix of complex double values corresponding to the supplied symbolic factorization, using the specified options.
- [SparseFactor](sparsefactor%28________%29-6hqfp.md): Returns the specified factorization of a sparse matrix of complex double values, using the specified options.
- [SparseFactor](sparsefactor%28________%29-9ykfp.md): Returns the specified factorization of a sparse matrix of complex float values, using the specified options.
- [SparseFactor](sparsefactor%28__________%29-2dqfv.md): Returns the factorization of a sparse matrix of complex float values corresponding to the supplied symbolic factorization, using the specified options and without any internal memory allocations.
- [SparseFactor](sparsefactor%28__________%29-7j0dm.md): Returns the factorization of a sparse matrix of complex double values corresponding to the supplied symbolic factorization, using the specified options and without any internal memory allocations.
