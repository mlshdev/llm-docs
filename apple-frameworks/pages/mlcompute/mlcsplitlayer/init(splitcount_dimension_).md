> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcsplitlayer/init(splitcount:dimension:)](https://developer.apple.com/documentation/mlcompute/mlcsplitlayer/init(splitcount:dimension:))

# init(splitCount:dimension:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a split layer with the number of splits and dimension you specify.

## Declaration

```swift
convenience init(splitCount: Int, dimension: Int)
```

## Parameters

- `splitCount`: The number of splits.
- `dimension`: The dimension or axis along which to split the tensor.

## See Also

### Creating Split Layers

- [init(splitSectionLengths:dimension:)](init%28splitsectionlengths_dimension_%29.md): Deprecated. Creates a split layer with the lengths of each split section and dimension you specify.

# layerWithSplitCount:dimension: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a split layer with the number of splits and dimension you specify.

## Declaration

```objectivec
+ (instancetype) layerWithSplitCount:(NSUInteger) splitCount dimension:(NSUInteger) dimension;
```

## Parameters

- `splitCount`: The number of splits.
- `dimension`: The dimension or axis along which to split the tensor.

## See Also

### Creating Split Layers

- [layerWithSplitSectionLengths:dimension:](layerwithsplitsectionlengths_dimension_.md): Deprecated. Creates a split layer with the lengths of each split section and dimension you specify.
