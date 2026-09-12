> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsefactor(_:_:)-5zzpu](https://developer.apple.com/documentation/accelerate/sparsefactor(_:_:)-5zzpu)

# SparseFactor(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns the factorization of a sparse matrix of complex double values corresponding to the supplied symbolic factorization.

## Declaration

```swift
func SparseFactor(_ SymbolicFactor: SparseOpaqueSymbolicFactorization, _ Matrix: SparseMatrix_Complex_Double) -> SparseOpaqueFactorization_Complex_Double
```

<a id="return-value"></a>

## Return Value

Factorization of Matrix.

<a id="discussion"></a>

## Discussion

- Parameter SymbolicFactor A symbolic factorization, as returned by a call of the form `SymbolicFactor = SparseFactor(Matrix.structure)`.
- Parameter Matrix The matrix to factorize.

## See Also

### Complex matrix factorization functions

- [SparseFactor(\_:\_:)](sparsefactor%28____%29-1avkp.md): Returns the specified factorization of a sparse matrix of complex double values.
- [SparseFactor(\_:\_:)](sparsefactor%28____%29-55tzk.md): Returns a symbolic factorization of the requested type for a complex matrix with the given structure.
- [SparseFactor(\_:\_:)](sparsefactor%28____%29-73n38.md): Returns the specified factorization of a sparse matrix of complex float values.

# SparseFactor (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns the factorization of a sparse matrix of complex double values corresponding to the supplied symbolic factorization.

## Declaration

```objectivec
static SparseOpaqueFactorization_Complex_Double SparseFactor(SparseOpaqueSymbolicFactorization SymbolicFactor, SparseMatrix_Complex_Double Matrix);
```

<a id="return-value"></a>

## Return Value

Factorization of Matrix.

<a id="discussion"></a>

## Discussion

- Parameter SymbolicFactor A symbolic factorization, as returned by a call of the form `SymbolicFactor = SparseFactor(Matrix.structure)`.
- Parameter Matrix The matrix to factorize.

## See Also

### Complex matrix factorization functions

- [SparseFactor](sparsefactor%28____%29-1avkp.md): Returns the specified factorization of a sparse matrix of complex double values.
- [SparseFactor](sparsefactor%28____%29-55tzk.md): Returns a symbolic factorization of the requested type for a complex matrix with the given structure.
- [SparseFactor](sparsefactor%28____%29-73n38.md): Returns the specified factorization of a sparse matrix of complex float values.
