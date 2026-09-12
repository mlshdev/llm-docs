> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfilter](https://developer.apple.com/documentation/accelerate/bnnsfilter)

# BNNSFilter (Swift)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ (deprecated in 18.0) · iPadOS 10.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.12+ (deprecated in 15.0) · tvOS 10.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 3.0+ (deprecated in 11.0)

An opaque type that represents a filter.

> Use BNNSGraph\* APIs

## Declaration

```swift
typealias BNNSFilter = UnsafeMutableRawPointer
```

## See Also

### General filters

- [Applying Filters](applying-filters.md)
- [BNNS.Layer](bnns/layer.md): Deprecated. The base class for layer objects that wrap filters and manage deinitialization.
- [BNNS.UnaryLayer](bnns/unarylayer.md): Deprecated. The base class for layers that accept a single input.
- [BNNS.BinaryLayer](bnns/binarylayer.md): Deprecated. The base class for layers that accept two inputs.
- [BNNSFilterParameters](bnnsfilterparameters.md): A structure that contains common filter parameters.
- [BNNSFilterDestroy(\_:)](bnnsfilterdestroy%28__%29.md): Deprecated. Destroys the specified filter, releasing all resources allocated for it.
- [BNNSAlloc](bnnsalloc.md): A type-alias for a user-provided memory allocation function.
- [BNNSFree](bnnsfree.md): A type-alias for a user-provided memory deallocation function.

# BNNSFilter (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ (deprecated in 18.0) · iPadOS 10.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.12+ (deprecated in 15.0) · tvOS 10.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 3.0+ (deprecated in 11.0)

An opaque type that represents a filter.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
typedef void * BNNSFilter;
```

## See Also

### General filters

- [Applying Filters](applying-filters.md)
- [BNNSFilterParameters](bnnsfilterparameters.md): A structure that contains common filter parameters.
- [BNNSFilterDestroy](bnnsfilterdestroy%28__%29.md): Deprecated. Destroys the specified filter, releasing all resources allocated for it.
- [BNNSAlloc](bnnsalloc.md): A type-alias for a user-provided memory allocation function.
- [BNNSFree](bnnsfree.md): A type-alias for a user-provided memory deallocation function.
