> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mlcompute/mlcreductionlayer/layerwithreductiontype:dimensions:

# layerWithReductionType:dimensions:

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

Creates a reduction layer using the reduction type and dimensions you specify.

## Declaration

```objectivec
+ (instancetype) layerWithReductionType:(MLCReductionType) reductionType dimensions:(NSArray<NSNumber *> *) dimensions;
```

## Parameters

- `reductionType`: The reduction type.
- `dimensions`: The dimensions to perform the reduction operation on.

<a id="return-value"></a>

## Return Value

A new `MLCReductionLayer` instance.

## See Also

### Creating Reduction Layers

- [layerWithReductionType:dimension:](init%28reductiontype_dimension_%29.md): Deprecated. Creates a reduction layer using the reduction type and dimension you specify.
- [MLCReductionType](../mlcreductiontype.md): Deprecated. Constants that describe a reduction operation type.
