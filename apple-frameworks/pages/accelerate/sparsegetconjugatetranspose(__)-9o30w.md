> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsegetconjugatetranspose(_:)-9o30w](https://developer.apple.com/documentation/accelerate/sparsegetconjugatetranspose(_:)-9o30w)

# SparseGetConjugateTranspose(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns a conjugate transposed copy of the specified specified matrix of complex double values.

## Declaration

```swift
func SparseGetConjugateTranspose(_ Matrix: SparseMatrix_Complex_Double) -> SparseMatrix_Complex_Double
```

## Parameters

- `Matrix`: The matrix to conjugate transpose.

<a id="return-value"></a>

## Return Value

A copy of matrix with `matrix.structure.attributes.transpose` bit flipped and `matrix.structure.attributes.conjugate_transpose` bit set.

<a id="discussion"></a>

## Discussion

Note that the underlying storage is *not* reference counted, so users must ensure the original matrix (or at least its underlying storage) is not destroyed before they are finished with the matrix returned by this routine.

## See Also

### Complex conjugate transpose functions

- [SparseGetConjugateTranspose(\_:)](sparsegetconjugatetranspose%28__%29-1e0js.md): Returns a conjugate transposed copy of the specified matrix of complex float values.
- [SparseGetConjugateTranspose(\_:)](sparsegetconjugatetranspose%28__%29-4hysc.md): Returns a conjugate transposed, reference-counted copy of a `SparseOpaqueSubfactor_Complex_Float`.
- [SparseGetConjugateTranspose(\_:)](sparsegetconjugatetranspose%28__%29-675y1.md): Returns a conjugate transposed, reference-counted copy of a `SparseOpaqueFactorization_Complex_Double`.
- [SparseGetConjugateTranspose(\_:)](sparsegetconjugatetranspose%28__%29-a56p.md): Returns a conjugate transposed, reference-counted copy of a `SparseOpaqueFactorization_Complex_Float`.
- [SparseGetConjugateTranspose(\_:)](sparsegetconjugatetranspose%28__%29-5hc5a.md): Returns a conjugate transposed, reference-counted copy of a `SparseOpaqueSubfactor_Complex_Double`.

# SparseGetConjugateTranspose (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns a conjugate transposed copy of the specified specified matrix of complex double values.

## Declaration

```objectivec
static SparseMatrix_Complex_Double SparseGetConjugateTranspose(SparseMatrix_Complex_Double Matrix);
```

## Parameters

- `Matrix`: The matrix to conjugate transpose.

<a id="return-value"></a>

## Return Value

A copy of matrix with `matrix.structure.attributes.transpose` bit flipped and `matrix.structure.attributes.conjugate_transpose` bit set.

<a id="discussion"></a>

## Discussion

Note that the underlying storage is *not* reference counted, so users must ensure the original matrix (or at least its underlying storage) is not destroyed before they are finished with the matrix returned by this routine.

## See Also

### Complex conjugate transpose functions

- [SparseGetConjugateTranspose](sparsegetconjugatetranspose%28__%29-1e0js.md): Returns a conjugate transposed copy of the specified matrix of complex float values.
- [SparseGetConjugateTranspose](sparsegetconjugatetranspose%28__%29-4hysc.md): Returns a conjugate transposed, reference-counted copy of a `SparseOpaqueSubfactor_Complex_Float`.
- [SparseGetConjugateTranspose](sparsegetconjugatetranspose%28__%29-675y1.md): Returns a conjugate transposed, reference-counted copy of a `SparseOpaqueFactorization_Complex_Double`.
- [SparseGetConjugateTranspose](sparsegetconjugatetranspose%28__%29-a56p.md): Returns a conjugate transposed, reference-counted copy of a `SparseOpaqueFactorization_Complex_Float`.
- [SparseGetConjugateTranspose](sparsegetconjugatetranspose%28__%29-5hc5a.md): Returns a conjugate transposed, reference-counted copy of a `SparseOpaqueSubfactor_Complex_Double`.
