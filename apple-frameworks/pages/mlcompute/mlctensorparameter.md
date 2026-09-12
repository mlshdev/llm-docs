> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensorparameter](https://developer.apple.com/documentation/mlcompute/mlctensorparameter)

# MLCTensorParameter (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A tensor parameter object.

## Declaration

```swift
class MLCTensorParameter
```

<a id="overview"></a>

## Overview

Use a tensor parameter to describe input tensors that the optimizer updates during training.

## Topics

### Creating Tensor Parameters

- [init(tensor:)](mlctensorparameter/init%28tensor_%29.md): Deprecated. Creates a tensor parameter with the tensor you specify.
- [init(tensor:optimizerData:)](mlctensorparameter/init%28tensor_optimizerdata_%29.md): Deprecated. Creates a tensor parameter with the tensor and optimizer data you specify.

### Inspecting Tensor Parameters

- [tensor](mlctensorparameter/tensor.md): Deprecated. The underlying tensor.
- [isUpdatable](mlctensorparameter/isupdatable.md): Deprecated. A Boolean that indicates whether this tensor parameter is updatable.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Creating Training Graphs

- [init(graphObjects:lossLayer:optimizer:)](mlctraininggraph/init%28graphobjects_losslayer_optimizer_%29.md): Deprecated. Creates a training graph with the layers from the graph objects, loss layer, and optimizer you specify.
- [Optimizers](optimizers.md): Create an optimizer to use with the training graph.

# MLCTensorParameter (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A tensor parameter object.

## Declaration

```objectivec
@interface MLCTensorParameter : NSObject
```

<a id="overview"></a>

## Overview

Use a tensor parameter to describe input tensors that the optimizer updates during training.

## Topics

### Creating Tensor Parameters

- [parameterWithTensor:](mlctensorparameter/init%28tensor_%29.md): Deprecated. Creates a tensor parameter with the tensor you specify.
- [parameterWithTensor:optimizerData:](mlctensorparameter/init%28tensor_optimizerdata_%29.md): Deprecated. Creates a tensor parameter with the tensor and optimizer data you specify.

### Inspecting Tensor Parameters

- [tensor](mlctensorparameter/tensor.md): Deprecated. The underlying tensor.
- [isUpdatable](mlctensorparameter/isupdatable.md): Deprecated. A Boolean that indicates whether this tensor parameter is updatable.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Creating Training Graphs

- [graphWithGraphObjects:lossLayer:optimizer:](mlctraininggraph/init%28graphobjects_losslayer_optimizer_%29.md): Deprecated. Creates a training graph with the layers from the graph objects, loss layer, and optimizer you specify.
- [Optimizers](optimizers.md): Create an optimizer to use with the training graph.
