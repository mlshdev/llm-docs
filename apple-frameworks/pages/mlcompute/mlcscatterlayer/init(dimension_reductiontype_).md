> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcscatterlayer/init(dimension:reductiontype:)](https://developer.apple.com/documentation/mlcompute/mlcscatterlayer/init(dimension:reductiontype:))

# init(dimension:reductionType:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

Creates a scatter layer with the dimension and reduction type you specify.

## Declaration

```swift
convenience init?(dimension: Int, reductionType: MLCReductionType)
```

## Parameters

- `dimension`: The dimension to index.
- `reductionType`: The reduction type that applies to all values in a source tensor.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The reduction type can be either [MLCReductionType.none](../mlcreductiontype/none.md) or [MLCReductionType.sum](../mlcreductiontype/sum.md).

# layerWithDimension:reductionType: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

Creates a scatter layer with the dimension and reduction type you specify.

## Declaration

```objectivec
+ (instancetype) layerWithDimension:(NSUInteger) dimension reductionType:(MLCReductionType) reductionType;
```

## Parameters

- `dimension`: The dimension to index.
- `reductionType`: The reduction type that applies to all values in a source tensor.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The reduction type can be either [MLCReductionTypeNone](../mlcreductiontype/none.md) or [MLCReductionTypeSum](../mlcreductiontype/sum.md).
