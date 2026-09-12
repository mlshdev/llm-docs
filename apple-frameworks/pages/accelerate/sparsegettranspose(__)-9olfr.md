> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsegettranspose(_:)-9olfr](https://developer.apple.com/documentation/accelerate/sparsegettranspose(_:)-9olfr)

# SparseGetTranspose(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns a transposed copy of the specified matrix of complex double values.

## Declaration

```swift
func SparseGetTranspose(_ Matrix: SparseMatrix_Complex_Double) -> SparseMatrix_Complex_Double
```

## Parameters

- `Matrix`: The matrix to transpose.

<a id="return-value"></a>

## Return Value

A copy of matrix with `matrix.structure.attributes.transpose` bit flipped and `matrix.structure.attributes.conjugate_transpose` bit cleared.

<a id="discussion"></a>

## Discussion

Note that the underlying storage is *not* reference counted, so users must ensure the original matrix (or at least its underlying storage) is not destroyed before they are finished with the matrix returned by this routine.

## See Also

### Complex transpose functions

- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-1fq2g.md): Returns a transposed, reference-counted copy of a `SparseOpaqueFactorization_Complex_Float`.
- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-2fuzo.md): Returns a transposed, reference-counted copy of a `SparseOpaqueSubfactor_Complex_Float`.
- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-4nr8u.md): Returns a transposed, reference-counted copy of a `SparseOpaqueSubfactor_Complex_Double`.
- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-7dx1i.md): Returns a transposed copy of the specified matrix of complex float values.
- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-7dx1i.md): Returns a transposed copy of the specified matrix of complex float values.
- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-d0ny.md): Returns a transposed, reference-counted copy of a `SparseOpaqueFactorization_Complex_Double`.

# SparseGetTranspose (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns a transposed copy of the specified matrix of complex double values.

## Declaration

```objectivec
static SparseMatrix_Complex_Double SparseGetTranspose(SparseMatrix_Complex_Double Matrix);
```

## Parameters

- `Matrix`: The matrix to transpose.

<a id="return-value"></a>

## Return Value

A copy of matrix with `matrix.structure.attributes.transpose` bit flipped and `matrix.structure.attributes.conjugate_transpose` bit cleared.

<a id="discussion"></a>

## Discussion

Note that the underlying storage is *not* reference counted, so users must ensure the original matrix (or at least its underlying storage) is not destroyed before they are finished with the matrix returned by this routine.

## See Also

### Complex transpose functions

- [SparseGetTranspose](sparsegettranspose%28__%29-1fq2g.md): Returns a transposed, reference-counted copy of a `SparseOpaqueFactorization_Complex_Float`.
- [SparseGetTranspose](sparsegettranspose%28__%29-2fuzo.md): Returns a transposed, reference-counted copy of a `SparseOpaqueSubfactor_Complex_Float`.
- [SparseGetTranspose](sparsegettranspose%28__%29-4nr8u.md): Returns a transposed, reference-counted copy of a `SparseOpaqueSubfactor_Complex_Double`.
- [SparseGetTranspose](sparsegettranspose%28__%29-7dx1i.md): Returns a transposed copy of the specified matrix of complex float values.
- [SparseGetTranspose](sparsegettranspose%28__%29-7dx1i.md): Returns a transposed copy of the specified matrix of complex float values.
- [SparseGetTranspose](sparsegettranspose%28__%29-d0ny.md): Returns a transposed, reference-counted copy of a `SparseOpaqueFactorization_Complex_Double`.
