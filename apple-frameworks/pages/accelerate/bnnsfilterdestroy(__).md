> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfilterdestroy(_:)](https://developer.apple.com/documentation/accelerate/bnnsfilterdestroy(_:))

# BNNSFilterDestroy(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 10.0+ (deprecated in 18.0) · iPadOS 10.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.12+ (deprecated in 15.0) · tvOS 10.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 3.0+ (deprecated in 11.0)

Destroys the specified filter, releasing all resources allocated for it.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSFilterDestroy(_ filter: BNNSFilter?)
```

## Parameters

- `filter`: A BNNSFilter object.

## See Also

### General filters

- [BNNSFilter](bnnsfilter.md): Deprecated. An opaque type that represents a filter.
- [Applying Filters](applying-filters.md)
- [BNNS.Layer](bnns/layer.md): Deprecated. The base class for layer objects that wrap filters and manage deinitialization.
- [BNNS.UnaryLayer](bnns/unarylayer.md): Deprecated. The base class for layers that accept a single input.
- [BNNS.BinaryLayer](bnns/binarylayer.md): Deprecated. The base class for layers that accept two inputs.
- [BNNSFilterParameters](bnnsfilterparameters.md): A structure that contains common filter parameters.
- [BNNSAlloc](bnnsalloc.md): A type-alias for a user-provided memory allocation function.
- [BNNSFree](bnnsfree.md): A type-alias for a user-provided memory deallocation function.

# BNNSFilterDestroy (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 10.0+ (deprecated in 18.0) · iPadOS 10.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.12+ (deprecated in 15.0) · tvOS 10.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 3.0+ (deprecated in 11.0)

Destroys the specified filter, releasing all resources allocated for it.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
void BNNSFilterDestroy(BNNSFilter filter);
```

## Parameters

- `filter`: A BNNSFilter object.

## See Also

### General filters

- [BNNSFilter](bnnsfilter.md): Deprecated. An opaque type that represents a filter.
- [Applying Filters](applying-filters.md)
- [BNNSFilterParameters](bnnsfilterparameters.md): A structure that contains common filter parameters.
- [BNNSAlloc](bnnsalloc.md): A type-alias for a user-provided memory allocation function.
- [BNNSFree](bnnsfree.md): A type-alias for a user-provided memory deallocation function.
