> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcsplitlayer/init(splitsectionlengths:dimension:)](https://developer.apple.com/documentation/mlcompute/mlcsplitlayer/init(splitsectionlengths:dimension:))

# init(splitSectionLengths:dimension:)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

Creates a split layer with the lengths of each split section and dimension you specify.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
convenience init(splitSectionLengths: [Int], dimension: Int)
```

## Parameters

- `splitSectionLengths`: An array that contains the lengths of each split section.
- `dimension`: The dimension or axis along which to split the tensor.

## See Also

### Creating Split Layers

- [init(splitCount:dimension:)](init%28splitcount_dimension_%29.md): Deprecated. Creates a split layer with the number of splits and dimension you specify.
