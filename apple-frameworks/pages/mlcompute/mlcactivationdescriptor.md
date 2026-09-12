> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcactivationdescriptor](https://developer.apple.com/documentation/mlcompute/mlcactivationdescriptor)

# MLCActivationDescriptor (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A configuration object you use to create an activation layer.

## Declaration

```swift
class MLCActivationDescriptor
```

<a id="overview"></a>

## Overview

The framework provides the following activation descriptor initializers to create the associated descriptors:

- **[init(type:)](mlcactivationdescriptor/init%28type_%29.md)**: Absolute, GELU, Identity, LogSigmoid, Parametric Soft Sign, SELU, Sigmoid, TanhShrink
- **[init(type:a:)](mlcactivationdescriptor/init%28type_a_%29.md)**: CELU, HardShrink, Parametric ELU, ReLU, SoftShrink
- **[init(type:a:b:)](mlcactivationdescriptor/init%28type_a_b_%29.md)**: Hard Sigmoid, Hyperbolic tangent (TanH), Linear, Parametric Soft Plus, ReLUN, Threshold

## Topics

### Creating Activation Descriptors

- [init(type:)](mlcactivationdescriptor/init%28type_%29.md): Deprecated. Creates an activation descriptor with the activation type you specify.
- [init(type:a:)](mlcactivationdescriptor/init%28type_a_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameter a that you specify.
- [init(type:a:b:)](mlcactivationdescriptor/init%28type_a_b_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameters a and b that you specify.
- [init(type:a:b:c:)](mlcactivationdescriptor/init%28type_a_b_c_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameters a, b, and c that you specify.
- [MLCActivationType](mlcactivationtype.md): Deprecated. An activation type that you specify for an activation descriptor.

### Inspecting Activation Descriptors

- [activationType](mlcactivationdescriptor/activationtype.md): Deprecated. The type of activation function.
- [a](mlcactivationdescriptor/a.md): Deprecated. The parameter a to the activation function.
- [b](mlcactivationdescriptor/b.md): Deprecated. The parameter b to the activation function.
- [c](mlcactivationdescriptor/c.md): Deprecated. The parameter c to the activation function.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Creating Activation Layers

- [init(descriptor:)](mlcactivationlayer/init%28descriptor_%29.md): Deprecated. Creates an activation layer with the descriptor you specify.
- [Preconfigured Activation Layers](preconfigured-activation-layers.md): Obtain a preconfigured activation layer with common behavior.

# MLCActivationDescriptor (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A configuration object you use to create an activation layer.

## Declaration

```objectivec
@interface MLCActivationDescriptor : NSObject
```

<a id="overview"></a>

## Overview

The framework provides the following activation descriptor initializers to create the associated descriptors:

- **[descriptorWithType:](mlcactivationdescriptor/init%28type_%29.md)**: Absolute, GELU, Identity, LogSigmoid, Parametric Soft Sign, SELU, Sigmoid, TanhShrink
- **[descriptorWithType:a:](mlcactivationdescriptor/init%28type_a_%29.md)**: CELU, HardShrink, Parametric ELU, ReLU, SoftShrink
- **[descriptorWithType:a:b:](mlcactivationdescriptor/init%28type_a_b_%29.md)**: Hard Sigmoid, Hyperbolic tangent (TanH), Linear, Parametric Soft Plus, ReLUN, Threshold

## Topics

### Creating Activation Descriptors

- [descriptorWithType:](mlcactivationdescriptor/init%28type_%29.md): Deprecated. Creates an activation descriptor with the activation type you specify.
- [descriptorWithType:a:](mlcactivationdescriptor/init%28type_a_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameter a that you specify.
- [descriptorWithType:a:b:](mlcactivationdescriptor/init%28type_a_b_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameters a and b that you specify.
- [descriptorWithType:a:b:c:](mlcactivationdescriptor/init%28type_a_b_c_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameters a, b, and c that you specify.
- [MLCActivationType](mlcactivationtype.md): Deprecated. An activation type that you specify for an activation descriptor.

### Inspecting Activation Descriptors

- [activationType](mlcactivationdescriptor/activationtype.md): Deprecated. The type of activation function.
- [a](mlcactivationdescriptor/a.md): Deprecated. The parameter a to the activation function.
- [b](mlcactivationdescriptor/b.md): Deprecated. The parameter b to the activation function.
- [c](mlcactivationdescriptor/c.md): Deprecated. The parameter c to the activation function.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Creating Activation Layers

- [layerWithDescriptor:](mlcactivationlayer/init%28descriptor_%29.md): Deprecated. Creates an activation layer with the descriptor you specify.
- [Preconfigured Activation Layers](preconfigured-activation-layers.md): Obtain a preconfigured activation layer with common behavior.
