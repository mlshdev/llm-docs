> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcconcatenationlayer/init(dimension:)](https://developer.apple.com/documentation/mlcompute/mlcconcatenationlayer/init(dimension:))

# init(dimension:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a concatenation layer with the dimension you specify.

## Declaration

```swift
convenience init(dimension: Int)
```

## Parameters

- `dimension`: The dimension, or axis, along which you concatenate tensors.

## See Also

### Creating Concatenation Layers

- [init()](init%28%29.md): Deprecated. Creates a concatenation layer with a dimension value of 1, which typically represents feature channels.

# layerWithDimension: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a concatenation layer with the dimension you specify.

## Declaration

```objectivec
+ (instancetype) layerWithDimension:(NSUInteger) dimension;
```

## Parameters

- `dimension`: The dimension, or axis, along which you concatenate tensors.

## See Also

### Creating Concatenation Layers

- [layer](init%28%29.md): Deprecated. Creates a concatenation layer with a dimension value of 1, which typically represents feature channels.
