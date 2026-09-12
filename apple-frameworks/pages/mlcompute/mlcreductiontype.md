> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcreductiontype](https://developer.apple.com/documentation/mlcompute/mlcreductiontype)

# MLCReductionType (Swift)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Constants that describe a reduction operation type.

## Declaration

```swift
enum MLCReductionType
```

## Topics

### Enumeration Cases

- [MLCReductionType.all](mlcreductiontype/all.md): Deprecated. A reduction operation that applies to all dimensions.
- [MLCReductionType.any](mlcreductiontype/any.md): Deprecated. A reduction operation that applies to any dimension.
- [MLCReductionType.argMax](mlcreductiontype/argmax.md): Deprecated. A reduction operation that applies to the maximum dimension you specify.
- [MLCReductionType.argMin](mlcreductiontype/argmin.md): Deprecated. A reduction operation that applies to the minimum dimension you specify.
- [MLCReductionType.max](mlcreductiontype/max.md): Deprecated. A reduction operation that applies to the maximum dimension.
- [MLCReductionType.mean](mlcreductiontype/mean.md): Deprecated. A reduction operation that applies to the mean of the dimensions.
- [MLCReductionType.min](mlcreductiontype/min.md): Deprecated. A reduction operation that applies to the minimum dimension.
- [MLCReductionType.none](mlcreductiontype/none.md): Deprecated. A reduction operation that applies no reduction.
- [MLCReductionType.sum](mlcreductiontype/sum.md): Deprecated. A reduction operation that applies to the sum of the dimensions.
- [MLCReductionType.l1Norm](mlcreductiontype/l1norm.md): Deprecated. A reduction operation that applies a lasso regularization penalty.
- [debugDescription](mlcreductiontype/debugdescription.md): A textual description of the reduction operation you use for debugging.

### Initializers

- [init(rawValue:)](mlcreductiontype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating Reduction Layers

- [init(reductionType:dimension:)](mlcreductionlayer/init%28reductiontype_dimension_%29.md): Deprecated. Creates a reduction layer using the reduction type and dimension you specify.
- [init(reductionType:dimensions:)](mlcreductionlayer/init%28reductiontype_dimensions_%29.md): Deprecated. Creates a reduction layer using the reduction type and dimensions you specify.

# MLCReductionType (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

Constants that describe a reduction operation type.

## Declaration

```objectivec
enum MLCReductionType : int32_t;
```

## Topics

### Enumeration Cases

- [MLCReductionTypeAll](mlcreductiontype/all.md): Deprecated. A reduction operation that applies to all dimensions.
- [MLCReductionTypeAny](mlcreductiontype/any.md): Deprecated. A reduction operation that applies to any dimension.
- [MLCReductionTypeArgMax](mlcreductiontype/argmax.md): Deprecated. A reduction operation that applies to the maximum dimension you specify.
- [MLCReductionTypeArgMin](mlcreductiontype/argmin.md): Deprecated. A reduction operation that applies to the minimum dimension you specify.
- [MLCReductionTypeMax](mlcreductiontype/max.md): Deprecated. A reduction operation that applies to the maximum dimension.
- [MLCReductionTypeMean](mlcreductiontype/mean.md): Deprecated. A reduction operation that applies to the mean of the dimensions.
- [MLCReductionTypeMin](mlcreductiontype/min.md): Deprecated. A reduction operation that applies to the minimum dimension.
- [MLCReductionTypeNone](mlcreductiontype/none.md): Deprecated. A reduction operation that applies no reduction.
- [MLCReductionTypeSum](mlcreductiontype/sum.md): Deprecated. A reduction operation that applies to the sum of the dimensions.
- [MLCReductionTypeL1Norm](mlcreductiontype/l1norm.md): Deprecated. A reduction operation that applies a lasso regularization penalty.
- [MLCReductionTypeCount](mlcreductiontype/mlcreductiontypecount.md): The total number of reduction operations.
- [MLCReductionTypeDebugDescription](mlcreductiontype/debugdescription.md): A textual description of the reduction operation you use for debugging.

## See Also

### Creating Reduction Layers

- [layerWithReductionType:dimension:](mlcreductionlayer/init%28reductiontype_dimension_%29.md): Deprecated. Creates a reduction layer using the reduction type and dimension you specify.
- [layerWithReductionType:dimensions:](mlcreductionlayer/layerwithreductiontype_dimensions_.md): Deprecated. Creates a reduction layer using the reduction type and dimensions you specify.
