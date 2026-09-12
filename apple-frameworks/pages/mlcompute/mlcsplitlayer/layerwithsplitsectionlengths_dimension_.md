> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcsplitlayer/layerwithsplitsectionlengths:dimension:](https://developer.apple.com/documentation/mlcompute/mlcsplitlayer/layerwithsplitsectionlengths:dimension:)

# layerWithSplitSectionLengths:dimension:

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a split layer with the lengths of each split section and dimension you specify.

## Declaration

```objectivec
+ (instancetype) layerWithSplitSectionLengths:(NSArray<NSNumber *> *) splitSectionLengths dimension:(NSUInteger) dimension;
```

## Parameters

- `splitSectionLengths`: An array that contains the lengths of each split section.
- `dimension`: The dimension or axis along which to split the tensor.

<a id="return-value"></a>

## Return Value

A split layer.

## See Also

### Creating Split Layers

- [layerWithSplitCount:dimension:](init%28splitcount_dimension_%29.md): Deprecated. Creates a split layer with the number of splits and dimension you specify.
