> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcsoftmaxlayer](https://developer.apple.com/documentation/mlcompute/mlcsoftmaxlayer)

# MLCSoftmaxLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that outputs a probability distribution as attention weights.

## Declaration

```swift
class MLCSoftmaxLayer
```

## Topics

### Creating Softmax Layers

- [init(operation:)](mlcsoftmaxlayer/init%28operation_%29.md): Deprecated. Creates a softmax layer with the operation you specify.
- [init(operation:dimension:)](mlcsoftmaxlayer/init%28operation_dimension_%29.md): Deprecated. Creates a softmax layer with the operation and dimension you specify.
- [MLCSoftmaxOperation](mlcsoftmaxoperation.md): Deprecated. A softmax operation.

### Inspecting Softmax Layers

- [operation](mlcsoftmaxlayer/operation.md): Deprecated. The softmax operation.
- [dimension](mlcsoftmaxlayer/dimension.md): Deprecated. The dimension over which you want to perform the softmax operation.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Activation Layers

- [MLCActivationLayer](mlcactivationlayer.md): Deprecated. A layer that applies an activation function to the source tensor and produces an output.
- [MLCMultiheadAttentionLayer](mlcmultiheadattentionlayer.md): Deprecated. A multihead, scaled dot-product attention layer that attends to one or more entries in the input key-value pairs.

# MLCSoftmaxLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that outputs a probability distribution as attention weights.

## Declaration

```objectivec
@interface MLCSoftmaxLayer : MLCLayer
```

## Topics

### Creating Softmax Layers

- [layerWithOperation:](mlcsoftmaxlayer/init%28operation_%29.md): Deprecated. Creates a softmax layer with the operation you specify.
- [layerWithOperation:dimension:](mlcsoftmaxlayer/init%28operation_dimension_%29.md): Deprecated. Creates a softmax layer with the operation and dimension you specify.
- [MLCSoftmaxOperation](mlcsoftmaxoperation.md): Deprecated. A softmax operation.

### Inspecting Softmax Layers

- [operation](mlcsoftmaxlayer/operation.md): Deprecated. The softmax operation.
- [dimension](mlcsoftmaxlayer/dimension.md): Deprecated. The dimension over which you want to perform the softmax operation.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

## See Also

### Activation Layers

- [MLCActivationLayer](mlcactivationlayer.md): Deprecated. A layer that applies an activation function to the source tensor and produces an output.
- [MLCMultiheadAttentionLayer](mlcmultiheadattentionlayer.md): Deprecated. A multihead, scaled dot-product attention layer that attends to one or more entries in the input key-value pairs.
