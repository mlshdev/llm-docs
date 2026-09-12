> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcsoftmaxlayer/init(operation:)](https://developer.apple.com/documentation/mlcompute/mlcsoftmaxlayer/init(operation:))

# init(operation:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a softmax layer with the operation you specify.

## Declaration

```swift
convenience init(operation: MLCSoftmaxOperation)
```

## Parameters

- `operation`: The softmax operation.

## See Also

### Creating Softmax Layers

- [init(operation:dimension:)](init%28operation_dimension_%29.md): Deprecated. Creates a softmax layer with the operation and dimension you specify.
- [MLCSoftmaxOperation](../mlcsoftmaxoperation.md): Deprecated. A softmax operation.

# layerWithOperation: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a softmax layer with the operation you specify.

## Declaration

```objectivec
+ (instancetype) layerWithOperation:(MLCSoftmaxOperation) operation;
```

## Parameters

- `operation`: The softmax operation.

## See Also

### Creating Softmax Layers

- [layerWithOperation:dimension:](init%28operation_dimension_%29.md): Deprecated. Creates a softmax layer with the operation and dimension you specify.
- [MLCSoftmaxOperation](../mlcsoftmaxoperation.md): Deprecated. A softmax operation.
