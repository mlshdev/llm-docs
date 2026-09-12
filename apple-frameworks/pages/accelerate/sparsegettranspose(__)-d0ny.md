> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsegettranspose(_:)-d0ny](https://developer.apple.com/documentation/accelerate/sparsegettranspose(_:)-d0ny)

# SparseGetTranspose(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns a transposed, reference-counted copy of a `SparseOpaqueFactorization_Complex_Double`.

## Declaration

```swift
func SparseGetTranspose(_ Factor: SparseOpaqueFactorization_Complex_Double) -> SparseOpaqueFactorization_Complex_Double
```

## Parameters

- `Factor`: The factorization to transpose.

<a id="return-value"></a>

## Return Value

A matrix factorization of `A^T`, where the original was of `A`. As this is reference counted, it must be freed through a call to `SparseCleanup` once it is no longer required.

## See Also

### Complex transpose functions

- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-1fq2g.md): Returns a transposed, reference-counted copy of a `SparseOpaqueFactorization_Complex_Float`.
- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-2fuzo.md): Returns a transposed, reference-counted copy of a `SparseOpaqueSubfactor_Complex_Float`.
- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-4nr8u.md): Returns a transposed, reference-counted copy of a `SparseOpaqueSubfactor_Complex_Double`.
- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-7dx1i.md): Returns a transposed copy of the specified matrix of complex float values.
- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-7dx1i.md): Returns a transposed copy of the specified matrix of complex float values.
- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-9olfr.md): Returns a transposed copy of the specified matrix of complex double values.

# SparseGetTranspose (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns a transposed, reference-counted copy of a `SparseOpaqueFactorization_Complex_Double`.

## Declaration

```objectivec
static SparseOpaqueFactorization_Complex_Double SparseGetTranspose(SparseOpaqueFactorization_Complex_Double Factor);
```

## Parameters

- `Factor`: The factorization to transpose.

<a id="return-value"></a>

## Return Value

A matrix factorization of `A^T`, where the original was of `A`. As this is reference counted, it must be freed through a call to `SparseCleanup` once it is no longer required.

## See Also

### Complex transpose functions

- [SparseGetTranspose](sparsegettranspose%28__%29-1fq2g.md): Returns a transposed, reference-counted copy of a `SparseOpaqueFactorization_Complex_Float`.
- [SparseGetTranspose](sparsegettranspose%28__%29-2fuzo.md): Returns a transposed, reference-counted copy of a `SparseOpaqueSubfactor_Complex_Float`.
- [SparseGetTranspose](sparsegettranspose%28__%29-4nr8u.md): Returns a transposed, reference-counted copy of a `SparseOpaqueSubfactor_Complex_Double`.
- [SparseGetTranspose](sparsegettranspose%28__%29-7dx1i.md): Returns a transposed copy of the specified matrix of complex float values.
- [SparseGetTranspose](sparsegettranspose%28__%29-7dx1i.md): Returns a transposed copy of the specified matrix of complex float values.
- [SparseGetTranspose](sparsegettranspose%28__%29-9olfr.md): Returns a transposed copy of the specified matrix of complex double values.
