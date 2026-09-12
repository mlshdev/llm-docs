> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcreductionlayer/init(reductiontype:dimensions:)](https://developer.apple.com/documentation/mlcompute/mlcreductionlayer/init(reductiontype:dimensions:))

# init(reductionType:dimensions:)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.5+ (deprecated in 17.0) · iPadOS 14.5+ (deprecated in 17.0) · Mac Catalyst 14.5+ (deprecated in 17.0) · macOS 11.3+ (deprecated in 14.0) · tvOS 14.5+ (deprecated in 17.0)

Creates a reduction layer using the reduction type and dimensions you specify.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
convenience init?(reductionType: MLCReductionType, dimensions: [Int])
```

## Parameters

- `reductionType`: The reduction type.
- `dimensions`: The dimensions to perform the reduction operation on.

## See Also

### Creating Reduction Layers

- [init(reductionType:dimension:)](init%28reductiontype_dimension_%29.md): Deprecated. Creates a reduction layer using the reduction type and dimension you specify.
- [MLCReductionType](../mlcreductiontype.md): Deprecated. Constants that describe a reduction operation type.
