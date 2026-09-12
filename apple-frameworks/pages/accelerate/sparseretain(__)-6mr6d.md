> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseretain(_:)-6mr6d](https://developer.apple.com/documentation/accelerate/sparseretain(_:)-6mr6d)

# SparseRetain(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Increases the reference count on a single-precision subfactor object.

## Declaration

```swift
func SparseRetain(_ Subfactor: SparseOpaqueSubfactor_Float) -> SparseOpaqueSubfactor_Float
```

## Parameters

- `Subfactor`: The subfactor object to increase the reference count upon.

<a id="return-value"></a>

## Return Value

The supplied numeric subfactor object.

## See Also

### Resource Retention

- [SparseRetain(\_:)](sparseretain%28__%29-8r2dm.md): Increases the reference count on a symbolic factorization object.
- [SparseRetain(\_:)](sparseretain%28__%29-8943y.md): Increases the reference count on a double-precision numeric factorization object.
- [SparseRetain(\_:)](sparseretain%28__%29-7onhr.md): Increases the reference count on a single-precision numeric factorization object.
- [SparseRetain(\_:)](sparseretain%28__%29-2pmdl.md): Increases the reference count on a double-precision subfactor object.
- [SparseRetain(\_:)](sparseretain%28__%29-5sahb.md): Increase reference count on a numeric factorization object, returning a copy.
- [SparseRetain(\_:)](sparseretain%28__%29-6pp40.md): Increase reference count on a numeric factorization object, returning a copy.
- [SparseRetain(\_:)](sparseretain%28__%29-92857.md): Increase reference count on a numeric factorization object, returning a copy.
- [SparseRetain(\_:)](sparseretain%28__%29-92v4w.md): Increase reference count on a numeric factorization object, returning a copy.

# SparseRetain (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Increases the reference count on a single-precision subfactor object.

## Declaration

```objectivec
static SparseOpaqueSubfactor_Float SparseRetain(SparseOpaqueSubfactor_Float NumericFactor);
```

## Parameters

- `NumericFactor`: The subfactor object to increase the reference count upon.

<a id="return-value"></a>

## Return Value

The supplied numeric subfactor object.

## See Also

### Resource Retention

- [SparseRetain](sparseretain%28__%29-8r2dm.md): Increases the reference count on a symbolic factorization object.
- [SparseRetain](sparseretain%28__%29-8943y.md): Increases the reference count on a double-precision numeric factorization object.
- [SparseRetain](sparseretain%28__%29-7onhr.md): Increases the reference count on a single-precision numeric factorization object.
- [SparseRetain](sparseretain%28__%29-2pmdl.md): Increases the reference count on a double-precision subfactor object.
- [SparseRetain](sparseretain%28__%29-5sahb.md): Increase reference count on a numeric factorization object, returning a copy.
- [SparseRetain](sparseretain%28__%29-6pp40.md): Increase reference count on a numeric factorization object, returning a copy.
- [SparseRetain](sparseretain%28__%29-92857.md): Increase reference count on a numeric factorization object, returning a copy.
- [SparseRetain](sparseretain%28__%29-92v4w.md): Increase reference count on a numeric factorization object, returning a copy.
