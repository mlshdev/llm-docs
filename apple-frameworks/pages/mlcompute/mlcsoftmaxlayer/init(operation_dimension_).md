> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcsoftmaxlayer/init(operation:dimension:)](https://developer.apple.com/documentation/mlcompute/mlcsoftmaxlayer/init(operation:dimension:))

# init(operation:dimension:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a softmax layer with the operation and dimension you specify.

## Declaration

```swift
convenience init(operation: MLCSoftmaxOperation, dimension: Int)
```

## Parameters

- `operation`: The softmax operation.
- `dimension`: The dimension over which you perform the softmax operation.

## See Also

### Creating Softmax Layers

- [init(operation:)](init%28operation_%29.md): Deprecated. Creates a softmax layer with the operation you specify.
- [MLCSoftmaxOperation](../mlcsoftmaxoperation.md): Deprecated. A softmax operation.

# layerWithOperation:dimension: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a softmax layer with the operation and dimension you specify.

## Declaration

```objectivec
+ (instancetype) layerWithOperation:(MLCSoftmaxOperation) operation dimension:(NSUInteger) dimension;
```

## Parameters

- `operation`: The softmax operation.
- `dimension`: The dimension over which you perform the softmax operation.

## See Also

### Creating Softmax Layers

- [layerWithOperation:](init%28operation_%29.md): Deprecated. Creates a softmax layer with the operation you specify.
- [MLCSoftmaxOperation](../mlcsoftmaxoperation.md): Deprecated. A softmax operation.
