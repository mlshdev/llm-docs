> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcreductiontype/debugdescription](https://developer.apple.com/documentation/mlcompute/mlcreductiontype/debugdescription)

# debugDescription (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

A textual description of the reduction operation you use for debugging.

## Declaration

```swift
var debugDescription: String { get }
```

## See Also

### Enumeration Cases

- [MLCReductionType.all](all.md): Deprecated. A reduction operation that applies to all dimensions.
- [MLCReductionType.any](any.md): Deprecated. A reduction operation that applies to any dimension.
- [MLCReductionType.argMax](argmax.md): Deprecated. A reduction operation that applies to the maximum dimension you specify.
- [MLCReductionType.argMin](argmin.md): Deprecated. A reduction operation that applies to the minimum dimension you specify.
- [MLCReductionType.max](max.md): Deprecated. A reduction operation that applies to the maximum dimension.
- [MLCReductionType.mean](mean.md): Deprecated. A reduction operation that applies to the mean of the dimensions.
- [MLCReductionType.min](min.md): Deprecated. A reduction operation that applies to the minimum dimension.
- [MLCReductionType.none](none.md): Deprecated. A reduction operation that applies no reduction.
- [MLCReductionType.sum](sum.md): Deprecated. A reduction operation that applies to the sum of the dimensions.
- [MLCReductionType.l1Norm](l1norm.md): Deprecated. A reduction operation that applies a lasso regularization penalty.

# MLCReductionTypeDebugDescription (Objective-C)

**Framework:** ML Compute  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

A textual description of the reduction operation you use for debugging.

## Declaration

```objectivec
NSString *MLCReductionTypeDebugDescription(MLCReductionType reductionType);
```

## See Also

### Enumeration Cases

- [MLCReductionTypeAll](all.md): Deprecated. A reduction operation that applies to all dimensions.
- [MLCReductionTypeAny](any.md): Deprecated. A reduction operation that applies to any dimension.
- [MLCReductionTypeArgMax](argmax.md): Deprecated. A reduction operation that applies to the maximum dimension you specify.
- [MLCReductionTypeArgMin](argmin.md): Deprecated. A reduction operation that applies to the minimum dimension you specify.
- [MLCReductionTypeMax](max.md): Deprecated. A reduction operation that applies to the maximum dimension.
- [MLCReductionTypeMean](mean.md): Deprecated. A reduction operation that applies to the mean of the dimensions.
- [MLCReductionTypeMin](min.md): Deprecated. A reduction operation that applies to the minimum dimension.
- [MLCReductionTypeNone](none.md): Deprecated. A reduction operation that applies no reduction.
- [MLCReductionTypeSum](sum.md): Deprecated. A reduction operation that applies to the sum of the dimensions.
- [MLCReductionTypeL1Norm](l1norm.md): Deprecated. A reduction operation that applies a lasso regularization penalty.
- [MLCReductionTypeCount](mlcreductiontypecount.md): The total number of reduction operations.
