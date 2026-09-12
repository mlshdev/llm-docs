> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsefactor(_:_:)-1avkp](https://developer.apple.com/documentation/accelerate/sparsefactor(_:_:)-1avkp)

# SparseFactor(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns the specified factorization of a sparse matrix of complex double values.

## Declaration

```swift
func SparseFactor(_ type: SparseFactorization_t, _ Matrix: SparseMatrix_Complex_Double) -> SparseOpaqueFactorization_Complex_Double
```

## Parameters

- `type`: The type of factorization to perform.
- `Matrix`: The matrix to factorize.

## See Also

### Complex matrix factorization functions

- [SparseFactor(\_:\_:)](sparsefactor%28____%29-55tzk.md): Returns a symbolic factorization of the requested type for a complex matrix with the given structure.
- [SparseFactor(\_:\_:)](sparsefactor%28____%29-5zzpu.md): Returns the factorization of a sparse matrix of complex double values corresponding to the supplied symbolic factorization.
- [SparseFactor(\_:\_:)](sparsefactor%28____%29-73n38.md): Returns the specified factorization of a sparse matrix of complex float values.

# SparseFactor (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns the specified factorization of a sparse matrix of complex double values.

## Declaration

```objectivec
static SparseOpaqueFactorization_Complex_Double SparseFactor(SparseFactorization_t type, SparseMatrix_Complex_Double Matrix);
```

## Parameters

- `type`: The type of factorization to perform.
- `Matrix`: The matrix to factorize.

## See Also

### Complex matrix factorization functions

- [SparseFactor](sparsefactor%28____%29-55tzk.md): Returns a symbolic factorization of the requested type for a complex matrix with the given structure.
- [SparseFactor](sparsefactor%28____%29-5zzpu.md): Returns the factorization of a sparse matrix of complex double values corresponding to the supplied symbolic factorization.
- [SparseFactor](sparsefactor%28____%29-73n38.md): Returns the specified factorization of a sparse matrix of complex float values.
