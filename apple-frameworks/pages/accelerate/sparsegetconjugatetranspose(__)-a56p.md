> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsegetconjugatetranspose(_:)-a56p](https://developer.apple.com/documentation/accelerate/sparsegetconjugatetranspose(_:)-a56p)

# SparseGetConjugateTranspose(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns a conjugate transposed, reference-counted copy of a `SparseOpaqueFactorization_Complex_Float`.

## Declaration

```swift
func SparseGetConjugateTranspose(_ Factor: SparseOpaqueFactorization_Complex_Float) -> SparseOpaqueFactorization_Complex_Float
```

## Parameters

- `Factor`: The factorization to conjugate transpose.

<a id="return-value"></a>

## Return Value

A matrix factorization of `A^H`, where the original was of `A`. As this is reference counted, it must be freed through a call to `SparseCleanup` once it is no longer required.

## See Also

### Complex conjugate transpose functions

- [SparseGetConjugateTranspose(\_:)](sparsegetconjugatetranspose%28__%29-1e0js.md): Returns a conjugate transposed copy of the specified matrix of complex float values.
- [SparseGetConjugateTranspose(\_:)](sparsegetconjugatetranspose%28__%29-4hysc.md): Returns a conjugate transposed, reference-counted copy of a `SparseOpaqueSubfactor_Complex_Float`.
- [SparseGetConjugateTranspose(\_:)](sparsegetconjugatetranspose%28__%29-675y1.md): Returns a conjugate transposed, reference-counted copy of a `SparseOpaqueFactorization_Complex_Double`.
- [SparseGetConjugateTranspose(\_:)](sparsegetconjugatetranspose%28__%29-9o30w.md): Returns a conjugate transposed copy of the specified specified matrix of complex double values.
- [SparseGetConjugateTranspose(\_:)](sparsegetconjugatetranspose%28__%29-9o30w.md): Returns a conjugate transposed copy of the specified specified matrix of complex double values.
- [SparseGetConjugateTranspose(\_:)](sparsegetconjugatetranspose%28__%29-5hc5a.md): Returns a conjugate transposed, reference-counted copy of a `SparseOpaqueSubfactor_Complex_Double`.

# SparseGetConjugateTranspose (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns a conjugate transposed, reference-counted copy of a `SparseOpaqueFactorization_Complex_Float`.

## Declaration

```objectivec
static SparseOpaqueFactorization_Complex_Float SparseGetConjugateTranspose(SparseOpaqueFactorization_Complex_Float Factor);
```

## Parameters

- `Factor`: The factorization to conjugate transpose.

<a id="return-value"></a>

## Return Value

A matrix factorization of `A^H`, where the original was of `A`. As this is reference counted, it must be freed through a call to `SparseCleanup` once it is no longer required.

## See Also

### Complex conjugate transpose functions

- [SparseGetConjugateTranspose](sparsegetconjugatetranspose%28__%29-1e0js.md): Returns a conjugate transposed copy of the specified matrix of complex float values.
- [SparseGetConjugateTranspose](sparsegetconjugatetranspose%28__%29-4hysc.md): Returns a conjugate transposed, reference-counted copy of a `SparseOpaqueSubfactor_Complex_Float`.
- [SparseGetConjugateTranspose](sparsegetconjugatetranspose%28__%29-675y1.md): Returns a conjugate transposed, reference-counted copy of a `SparseOpaqueFactorization_Complex_Double`.
- [SparseGetConjugateTranspose](sparsegetconjugatetranspose%28__%29-9o30w.md): Returns a conjugate transposed copy of the specified specified matrix of complex double values.
- [SparseGetConjugateTranspose](sparsegetconjugatetranspose%28__%29-9o30w.md): Returns a conjugate transposed copy of the specified specified matrix of complex double values.
- [SparseGetConjugateTranspose](sparsegetconjugatetranspose%28__%29-5hc5a.md): Returns a conjugate transposed, reference-counted copy of a `SparseOpaqueSubfactor_Complex_Double`.
