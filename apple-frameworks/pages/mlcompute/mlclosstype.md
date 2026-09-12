> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclosstype](https://developer.apple.com/documentation/mlcompute/mlclosstype)

# MLCLossType (Swift)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A loss function.

## Declaration

```swift
enum MLCLossType
```

## Topics

### Enumeration Cases

- [MLCLossType.categoricalCrossEntropy](mlclosstype/categoricalcrossentropy.md): Deprecated.
- [MLCLossType.cosineDistance](mlclosstype/cosinedistance.md): Deprecated.
- [MLCLossType.hinge](mlclosstype/hinge.md): Deprecated.
- [MLCLossType.huber](mlclosstype/huber.md): Deprecated.
- [MLCLossType.log](mlclosstype/log.md): Deprecated.
- [MLCLossType.meanAbsoluteError](mlclosstype/meanabsoluteerror.md): Deprecated.
- [MLCLossType.meanSquaredError](mlclosstype/meansquarederror.md): Deprecated.
- [MLCLossType.sigmoidCrossEntropy](mlclosstype/sigmoidcrossentropy.md): Deprecated.
- [MLCLossType.softmaxCrossEntropy](mlclosstype/softmaxcrossentropy.md): Deprecated.
- [debugDescription](mlclosstype/debugdescription.md): A textual description of the loss type, suitable for debugging.

### Initializers

- [init(rawValue:)](mlclosstype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating Loss Layers with Descriptors

- [init(descriptor:)](mlclosslayer/init%28descriptor_%29.md): Deprecated. Creates a loss layer with the descriptor you specify.
- [init(descriptor:weights:)](mlclosslayer/init%28descriptor_weights_%29.md): Deprecated. Creates a loss layer with the descriptor and weights you specify.
- [MLCLossDescriptor](mlclossdescriptor.md): Deprecated. A configuration object you use to create a loss layer.

# MLCLossType (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

A loss function.

## Declaration

```objectivec
enum MLCLossType : int32_t;
```

## Topics

### Enumeration Cases

- [MLCLossTypeCategoricalCrossEntropy](mlclosstype/categoricalcrossentropy.md): Deprecated.
- [MLCLossTypeCosineDistance](mlclosstype/cosinedistance.md): Deprecated.
- [MLCLossTypeHinge](mlclosstype/hinge.md): Deprecated.
- [MLCLossTypeHuber](mlclosstype/huber.md): Deprecated.
- [MLCLossTypeLog](mlclosstype/log.md): Deprecated.
- [MLCLossTypeMeanAbsoluteError](mlclosstype/meanabsoluteerror.md): Deprecated.
- [MLCLossTypeMeanSquaredError](mlclosstype/meansquarederror.md): Deprecated.
- [MLCLossTypeSigmoidCrossEntropy](mlclosstype/sigmoidcrossentropy.md): Deprecated.
- [MLCLossTypeSoftmaxCrossEntropy](mlclosstype/softmaxcrossentropy.md): Deprecated.
- [MLCLossTypeCount](mlclosstype/mlclosstypecount.md)
- [MLCLossTypeDebugDescription](mlclosstype/debugdescription.md): A textual description of the loss type, suitable for debugging.

## See Also

### Creating Loss Layers with Descriptors

- [layerWithDescriptor:](mlclosslayer/init%28descriptor_%29.md): Deprecated. Creates a loss layer with the descriptor you specify.
- [layerWithDescriptor:weights:](mlclosslayer/init%28descriptor_weights_%29.md): Deprecated. Creates a loss layer with the descriptor and weights you specify.
- [MLCLossDescriptor](mlclossdescriptor.md): Deprecated. A configuration object you use to create a loss layer.
