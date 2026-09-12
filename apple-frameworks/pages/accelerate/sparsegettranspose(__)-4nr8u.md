> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsegettranspose(_:)-4nr8u](https://developer.apple.com/documentation/accelerate/sparsegettranspose(_:)-4nr8u)

# SparseGetTranspose(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns a transposed, reference-counted copy of a `SparseOpaqueSubfactor_Complex_Double`.

## Declaration

```swift
func SparseGetTranspose(_ Subfactor: SparseOpaqueSubfactor_Complex_Double) -> SparseOpaqueSubfactor_Complex_Double
```

## Parameters

- `Subfactor`: The object to transpose.

<a id="return-value"></a>

## Return Value

A subfactor equivalent to the transpose of the one provided. As this is reference counted, it must be freed through a call to `SparseCleanup` once it is no longer required.

## See Also

### Complex transpose functions

- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-1fq2g.md): Returns a transposed, reference-counted copy of a `SparseOpaqueFactorization_Complex_Float`.
- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-2fuzo.md): Returns a transposed, reference-counted copy of a `SparseOpaqueSubfactor_Complex_Float`.
- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-7dx1i.md): Returns a transposed copy of the specified matrix of complex float values.
- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-7dx1i.md): Returns a transposed copy of the specified matrix of complex float values.
- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-9olfr.md): Returns a transposed copy of the specified matrix of complex double values.
- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-d0ny.md): Returns a transposed, reference-counted copy of a `SparseOpaqueFactorization_Complex_Double`.

# SparseGetTranspose (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns a transposed, reference-counted copy of a `SparseOpaqueSubfactor_Complex_Double`.

## Declaration

```objectivec
static SparseOpaqueSubfactor_Complex_Double SparseGetTranspose(SparseOpaqueSubfactor_Complex_Double Subfactor);
```

## Parameters

- `Subfactor`: The object to transpose.

<a id="return-value"></a>

## Return Value

A subfactor equivalent to the transpose of the one provided. As this is reference counted, it must be freed through a call to `SparseCleanup` once it is no longer required.

## See Also

### Complex transpose functions

- [SparseGetTranspose](sparsegettranspose%28__%29-1fq2g.md): Returns a transposed, reference-counted copy of a `SparseOpaqueFactorization_Complex_Float`.
- [SparseGetTranspose](sparsegettranspose%28__%29-2fuzo.md): Returns a transposed, reference-counted copy of a `SparseOpaqueSubfactor_Complex_Float`.
- [SparseGetTranspose](sparsegettranspose%28__%29-7dx1i.md): Returns a transposed copy of the specified matrix of complex float values.
- [SparseGetTranspose](sparsegettranspose%28__%29-7dx1i.md): Returns a transposed copy of the specified matrix of complex float values.
- [SparseGetTranspose](sparsegettranspose%28__%29-9olfr.md): Returns a transposed copy of the specified matrix of complex double values.
- [SparseGetTranspose](sparsegettranspose%28__%29-d0ny.md): Returns a transposed, reference-counted copy of a `SparseOpaqueFactorization_Complex_Double`.
