> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcreductionlayer/init(reductiontype:dimension:)](https://developer.apple.com/documentation/mlcompute/mlcreductionlayer/init(reductiontype:dimension:))

# init(reductionType:dimension:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a reduction layer using the reduction type and dimension you specify.

## Declaration

```swift
convenience init?(reductionType: MLCReductionType, dimension: Int)
```

## Parameters

- `reductionType`: The reduction type.
- `dimension`: The dimension to perform the reduction operation on.

<a id="return-value"></a>

## Return Value

A new [MLCReductionLayer](../mlcreductionlayer.md) instance.

## See Also

### Creating Reduction Layers

- [init(reductionType:dimensions:)](init%28reductiontype_dimensions_%29.md): Deprecated. Creates a reduction layer using the reduction type and dimensions you specify.
- [MLCReductionType](../mlcreductiontype.md): Deprecated. Constants that describe a reduction operation type.

# layerWithReductionType:dimension: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a reduction layer using the reduction type and dimension you specify.

## Declaration

```objectivec
+ (instancetype) layerWithReductionType:(MLCReductionType) reductionType dimension:(NSUInteger) dimension;
```

## Parameters

- `reductionType`: The reduction type.
- `dimension`: The dimension to perform the reduction operation on.

<a id="return-value"></a>

## Return Value

A new [MLCReductionLayer](../mlcreductionlayer.md) instance.

## See Also

### Creating Reduction Layers

- [layerWithReductionType:dimensions:](layerwithreductiontype_dimensions_.md): Deprecated. Creates a reduction layer using the reduction type and dimensions you specify.
- [MLCReductionType](../mlcreductiontype.md): Deprecated. Constants that describe a reduction operation type.
