> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsegettranspose(_:)-827va](https://developer.apple.com/documentation/accelerate/sparsegettranspose(_:)-827va)

# SparseGetTranspose(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a transposed copy of the specified single-precision subfactor.

## Declaration

```swift
func SparseGetTranspose(_ Subfactor: SparseOpaqueSubfactor_Float) -> SparseOpaqueSubfactor_Float
```

## Parameters

- `Subfactor`: The subfactor to transpose.

<a id="return-value"></a>

## Return Value

An object equivalent to the transpose of the one you provide. Because this is a reference-counted subfactor, the system must free it through a call to [SparseCleanup(\_:)](sparsecleanup%28__%29-1mrmc.md) when it no longer needs it.

## See Also

### Subfactor transpose functions

- [SparseGetTranspose(\_:)](sparsegettranspose%28__%29-9r7s5.md): Returns a transposed copy of the specified double-precision subfactor.

# SparseGetTranspose (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a transposed copy of the specified single-precision subfactor.

## Declaration

```objectivec
static SparseOpaqueSubfactor_Float SparseGetTranspose(SparseOpaqueSubfactor_Float Subfactor);
```

## Parameters

- `Subfactor`: The subfactor to transpose.

<a id="return-value"></a>

## Return Value

An object equivalent to the transpose of the one you provide. Because this is a reference-counted subfactor, the system must free it through a call to [SparseCleanup](sparsecleanup%28__%29-1mrmc.md) when it no longer needs it.

## See Also

### Subfactor transpose functions

- [SparseGetTranspose](sparsegettranspose%28__%29-9r7s5.md): Returns a transposed copy of the specified double-precision subfactor.
