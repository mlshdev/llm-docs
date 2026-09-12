> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsegettranspose(_:)-9r7s5](https://developer.apple.com/documentation/accelerate/sparsegettranspose(_:)-9r7s5)

# SparseGetTranspose(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a transposed copy of the specified double-precision subfactor.

## Declaration

```swift
func SparseGetTranspose(_ Subfactor: SparseOpaqueSubfactor_Double) -> SparseOpaqueSubfactor_Double
```

## Parameters

- `Subfactor`: The subfactor to transpose.

<a id="return-value"></a>

## Return Value

An object equivalent to the transpose of the one you provide. Because this is a reference-counted subfactor, the system must free it through a call to [SparseCleanup(\_:)](sparsecleanup%28__%29-15kpj.md) when it no longer needs it.

## See Also

### Subfactor transpose functions

- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-827va.md): Returns a transposed copy of the specified single-precision subfactor.

# SparseGetTranspose (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a transposed copy of the specified double-precision subfactor.

## Declaration

```objectivec
static SparseOpaqueSubfactor_Double SparseGetTranspose(SparseOpaqueSubfactor_Double Subfactor);
```

## Parameters

- `Subfactor`: The subfactor to transpose.

<a id="return-value"></a>

## Return Value

An object equivalent to the transpose of the one you provide. Because this is a reference-counted subfactor, the system must free it through a call to [SparseCleanup](sparsecleanup%28__%29-15kpj.md) when it no longer needs it.

## See Also

### Subfactor transpose functions

- [SparseGetTranspose](sparsegettranspose%28__%29-827va.md): Returns a transposed copy of the specified single-precision subfactor.
