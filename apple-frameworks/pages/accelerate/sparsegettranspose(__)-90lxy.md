> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsegettranspose(_:)-90lxy](https://developer.apple.com/documentation/accelerate/sparsegettranspose(_:)-90lxy)

# SparseGetTranspose(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a transposed copy of the specified double-precision factorization.

## Declaration

```swift
func SparseGetTranspose(_ Factor: SparseOpaqueFactorization_Double) -> SparseOpaqueFactorization_Double
```

## Parameters

- `Factor`: The factorization to transpose.

<a id="return-value"></a>

## Return Value

A matrix factorization of *A\__ᵀ*, where the original was of *A*. Because this is a reference-counted factorization, you must free it through a call to [SparseCleanup(\_:)](sparsecleanup%28__%29-3cnxt.md) when you no longer need it.

## See Also

### Factorization transpose functions

- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-48t76.md): Returns a transposed copy of the specified single-precision factorization.

# SparseGetTranspose (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a transposed copy of the specified double-precision factorization.

## Declaration

```objectivec
static SparseOpaqueFactorization_Double SparseGetTranspose(SparseOpaqueFactorization_Double Factor);
```

## Parameters

- `Factor`: The factorization to transpose.

<a id="return-value"></a>

## Return Value

A matrix factorization of *A\__ᵀ*, where the original was of *A*. Because this is a reference-counted factorization, you must free it through a call to [SparseCleanup](sparsecleanup%28__%29-3cnxt.md) when you no longer need it.

## See Also

### Factorization transpose functions

- [SparseGetTranspose](sparsegettranspose%28__%29-48t76.md): Returns a transposed copy of the specified single-precision factorization.
