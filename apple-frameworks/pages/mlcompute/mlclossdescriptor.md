> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclossdescriptor](https://developer.apple.com/documentation/mlcompute/mlclossdescriptor)

# MLCLossDescriptor (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A configuration object you use to create a loss layer.

## Declaration

```swift
class MLCLossDescriptor
```

## Topics

### Creating Loss Descriptors

- [init(type:reductionType:)](mlclossdescriptor/init%28type_reductiontype_%29.md): Deprecated. Creates a loss descriptor with the loss function and reduction type you specify.
- [init(type:reductionType:weight:)](mlclossdescriptor/init%28type_reductiontype_weight_%29.md): Deprecated. Creates a loss descriptor with the loss function, reduction type, and weight you specify.
- [init(type:reductionType:weight:labelSmoothing:classCount:)](mlclossdescriptor/init%28type_reductiontype_weight_labelsmoothing_classcount_%29.md): Deprecated. Creates a loss descriptor with the loss function, reduction type, weight, label smoothing, and number of classes you specify.
- [init(type:reductionType:weight:labelSmoothing:classCount:epsilon:delta:)](mlclossdescriptor/init%28type_reductiontype_weight_labelsmoothing_classcount_epsilon_delta_%29.md): Deprecated. Creates a loss descriptor with the loss function, reduction type, weight, label smoothing, and number of classes, epsilon, and delta that you specify.

### Inspecting Loss Descriptors

- [lossType](mlclossdescriptor/losstype.md): Deprecated. The loss function type.
- [reductionType](mlclossdescriptor/reductiontype.md): Deprecated. The reduction operation performed by the loss function.
- [weight](mlclossdescriptor/weight.md): Deprecated. The scale factor you apply to each element of a result.
- [labelSmoothing](mlclossdescriptor/labelsmoothing.md): Deprecated. The value for label smoothing.
- [classCount](mlclossdescriptor/classcount.md): Deprecated. The number of classes.
- [epsilon](mlclossdescriptor/epsilon.md): Deprecated. The epsilon value.
- [delta](mlclossdescriptor/delta.md): Deprecated. The delta value.

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

### Creating Loss Layers with Descriptors

- [init(descriptor:)](mlclosslayer/init%28descriptor_%29.md): Deprecated. Creates a loss layer with the descriptor you specify.
- [init(descriptor:weights:)](mlclosslayer/init%28descriptor_weights_%29.md): Deprecated. Creates a loss layer with the descriptor and weights you specify.
- [MLCLossType](mlclosstype.md): Deprecated. A loss function.

# MLCLossDescriptor (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A configuration object you use to create a loss layer.

## Declaration

```objectivec
@interface MLCLossDescriptor : NSObject
```

## Topics

### Creating Loss Descriptors

- [descriptorWithType:reductionType:](mlclossdescriptor/init%28type_reductiontype_%29.md): Deprecated. Creates a loss descriptor with the loss function and reduction type you specify.
- [descriptorWithType:reductionType:weight:](mlclossdescriptor/init%28type_reductiontype_weight_%29.md): Deprecated. Creates a loss descriptor with the loss function, reduction type, and weight you specify.
- [descriptorWithType:reductionType:weight:labelSmoothing:classCount:](mlclossdescriptor/init%28type_reductiontype_weight_labelsmoothing_classcount_%29.md): Deprecated. Creates a loss descriptor with the loss function, reduction type, weight, label smoothing, and number of classes you specify.
- [descriptorWithType:reductionType:weight:labelSmoothing:classCount:epsilon:delta:](mlclossdescriptor/init%28type_reductiontype_weight_labelsmoothing_classcount_epsilon_delta_%29.md): Deprecated. Creates a loss descriptor with the loss function, reduction type, weight, label smoothing, and number of classes, epsilon, and delta that you specify.

### Inspecting Loss Descriptors

- [lossType](mlclossdescriptor/losstype.md): Deprecated. The loss function type.
- [reductionType](mlclossdescriptor/reductiontype.md): Deprecated. The reduction operation performed by the loss function.
- [weight](mlclossdescriptor/weight.md): Deprecated. The scale factor you apply to each element of a result.
- [labelSmoothing](mlclossdescriptor/labelsmoothing.md): Deprecated. The value for label smoothing.
- [classCount](mlclossdescriptor/classcount.md): Deprecated. The number of classes.
- [epsilon](mlclossdescriptor/epsilon.md): Deprecated. The epsilon value.
- [delta](mlclossdescriptor/delta.md): Deprecated. The delta value.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Creating Loss Layers with Descriptors

- [layerWithDescriptor:](mlclosslayer/init%28descriptor_%29.md): Deprecated. Creates a loss layer with the descriptor you specify.
- [layerWithDescriptor:weights:](mlclosslayer/init%28descriptor_weights_%29.md): Deprecated. Creates a loss layer with the descriptor and weights you specify.
- [MLCLossType](mlclosstype.md): Deprecated. A loss function.
