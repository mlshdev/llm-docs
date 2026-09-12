> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfree](https://developer.apple.com/documentation/accelerate/bnnsfree)

# BNNSFree (Swift)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type-alias for a user-provided memory deallocation function.

## Declaration

```swift
typealias BNNSFree = (UnsafeMutableRawPointer?) -> Void
```

## See Also

### General filters

- [BNNSFilter](bnnsfilter.md): Deprecated. An opaque type that represents a filter.
- [Applying Filters](applying-filters.md)
- [BNNS.Layer](bnns/layer.md): Deprecated. The base class for layer objects that wrap filters and manage deinitialization.
- [BNNS.UnaryLayer](bnns/unarylayer.md): Deprecated. The base class for layers that accept a single input.
- [BNNS.BinaryLayer](bnns/binarylayer.md): Deprecated. The base class for layers that accept two inputs.
- [BNNSFilterParameters](bnnsfilterparameters.md): A structure that contains common filter parameters.
- [BNNSFilterDestroy(\_:)](bnnsfilterdestroy%28__%29.md): Deprecated. Destroys the specified filter, releasing all resources allocated for it.
- [BNNSAlloc](bnnsalloc.md): A type-alias for a user-provided memory allocation function.

# BNNSFree (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type-alias for a user-provided memory deallocation function.

## Declaration

```objectivec
typedef void (*)(void *) BNNSFree;
```

## See Also

### General filters

- [BNNSFilter](bnnsfilter.md): Deprecated. An opaque type that represents a filter.
- [Applying Filters](applying-filters.md)
- [BNNSFilterParameters](bnnsfilterparameters.md): A structure that contains common filter parameters.
- [BNNSFilterDestroy](bnnsfilterdestroy%28__%29.md): Deprecated. Destroys the specified filter, releasing all resources allocated for it.
- [BNNSAlloc](bnnsalloc.md): A type-alias for a user-provided memory allocation function.
