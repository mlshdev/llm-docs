> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcactivationlayer](https://developer.apple.com/documentation/mlcompute/mlcactivationlayer)

# MLCActivationLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that applies an activation function to the source tensor and produces an output.

## Declaration

```swift
class MLCActivationLayer
```

<a id="overview"></a>

## Overview

To construct an activation layer, create an activation descriptor and then pass it to the initializer.

> **Tip**

>  If you don’t need to customize the behavior of the activation layer, you can save time by using [Preconfigured Activation Layers](preconfigured-activation-layers.md) instead of creating a descriptor to use with an activation layer initializer.

## Topics

### Creating Activation Layers

- [init(descriptor:)](mlcactivationlayer/init%28descriptor_%29.md): Deprecated. Creates an activation layer with the descriptor you specify.
- [Preconfigured Activation Layers](preconfigured-activation-layers.md): Obtain a preconfigured activation layer with common behavior.
- [MLCActivationDescriptor](mlcactivationdescriptor.md): Deprecated. A configuration object you use to create an activation layer.

### Inspecting Activation Layers

- [descriptor](mlcactivationlayer/descriptor.md): Deprecated. The configuration object you use to create an activation layer.

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

- [MLCMultiheadAttentionLayer](mlcmultiheadattentionlayer.md): Deprecated. A multihead, scaled dot-product attention layer that attends to one or more entries in the input key-value pairs.
- [MLCSoftmaxLayer](mlcsoftmaxlayer.md): Deprecated. A layer that outputs a probability distribution as attention weights.

# MLCActivationLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that applies an activation function to the source tensor and produces an output.

## Declaration

```objectivec
@interface MLCActivationLayer : MLCLayer
```

<a id="overview"></a>

## Overview

To construct an activation layer, create an activation descriptor and then pass it to the initializer.

> **Tip**

>  If you don’t need to customize the behavior of the activation layer, you can save time by using [Preconfigured Activation Layers](preconfigured-activation-layers.md) instead of creating a descriptor to use with an activation layer initializer.

## Topics

### Creating Activation Layers

- [layerWithDescriptor:](mlcactivationlayer/init%28descriptor_%29.md): Deprecated. Creates an activation layer with the descriptor you specify.
- [Preconfigured Activation Layers](preconfigured-activation-layers.md): Obtain a preconfigured activation layer with common behavior.
- [MLCActivationDescriptor](mlcactivationdescriptor.md): Deprecated. A configuration object you use to create an activation layer.

### Inspecting Activation Layers

- [descriptor](mlcactivationlayer/descriptor.md): Deprecated. The configuration object you use to create an activation layer.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

## See Also

### Activation Layers

- [MLCMultiheadAttentionLayer](mlcmultiheadattentionlayer.md): Deprecated. A multihead, scaled dot-product attention layer that attends to one or more entries in the input key-value pairs.
- [MLCSoftmaxLayer](mlcsoftmaxlayer.md): Deprecated. A layer that outputs a probability distribution as attention weights.
