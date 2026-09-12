> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsalloc](https://developer.apple.com/documentation/accelerate/bnnsalloc)

# BNNSAlloc (Swift)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type-alias for a user-provided memory allocation function.

## Declaration

```swift
typealias BNNSAlloc = (UnsafeMutablePointer<UnsafeMutableRawPointer?>?, Int, Int) -> Int32
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
- [BNNSFree](bnnsfree.md): A type-alias for a user-provided memory deallocation function.

# BNNSAlloc (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type-alias for a user-provided memory allocation function.

## Declaration

```objectivec
typedef int (*)(void **, unsigned long, unsigned long) BNNSAlloc;
```

## See Also

### General filters

- [BNNSFilter](bnnsfilter.md): Deprecated. An opaque type that represents a filter.
- [Applying Filters](applying-filters.md)
- [BNNSFilterParameters](bnnsfilterparameters.md): A structure that contains common filter parameters.
- [BNNSFilterDestroy](bnnsfilterdestroy%28__%29.md): Deprecated. Destroys the specified filter, releasing all resources allocated for it.
- [BNNSFree](bnnsfree.md): A type-alias for a user-provided memory deallocation function.
