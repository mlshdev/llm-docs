> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnlossgradientnode](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnlossgradientnode)

# MPSNNLossGradientNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class MPSNNLossGradientNode
```

## Topics

### Initializers

- [init(sourceGradient:sourceImage:labels:gradientState:lossDescriptor:isLabelsGradientFilter:)](mpsnnlossgradientnode/init%28sourcegradient_sourceimage_labels_gradientstate_lossdescriptor_islabelsgradientfilter_%29.md)
- [init(sourceGradient:sourceImage:labels:weights:gradientState:lossDescriptor:isLabelsGradientFilter:)](mpsnnlossgradientnode/init%28sourcegradient_sourceimage_labels_weights_gradientstate_lossdescriptor_islabelsgradientfilter_%29-3rcen.md)
- [init(sourceGradient:sourceImage:labels:weights:gradientState:lossDescriptor:isLabelsGradientFilter:)](mpsnnlossgradientnode/init%28sourcegradient_sourceimage_labels_weights_gradientstate_lossdescriptor_islabelsgradientfilter_%29-9eqch.md)
- [init(sources:gradientState:lossDescriptor:isLabelsGradientFilter:)](mpsnnlossgradientnode/init%28sources_gradientstate_lossdescriptor_islabelsgradientfilter_%29.md)

### Instance Properties

- [delta](mpsnnlossgradientnode/delta.md)
- [epsilon](mpsnnlossgradientnode/epsilon.md)
- [isLabelsGradientFilter](mpsnnlossgradientnode/islabelsgradientfilter.md)
- [labelSmoothing](mpsnnlossgradientnode/labelsmoothing.md)
- [lossType](mpsnnlossgradientnode/losstype.md)
- [numberOfClasses](mpsnnlossgradientnode/numberofclasses.md)
- [propertyCallBack](mpsnnlossgradientnode/propertycallback.md)
- [reduceAcrossBatch](mpsnnlossgradientnode/reduceacrossbatch.md)
- [reductionType](mpsnnlossgradientnode/reductiontype.md)
- [weight](mpsnnlossgradientnode/weight.md)

## Relationships

### Inherits From

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MPSNNLossGradientNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSNNLossGradientNode : MPSNNGradientFilterNode
```

## Topics

### Instance Properties

- [delta](mpsnnlossgradientnode/delta.md)
- [epsilon](mpsnnlossgradientnode/epsilon.md)
- [isLabelsGradientFilter](mpsnnlossgradientnode/islabelsgradientfilter.md)
- [labelSmoothing](mpsnnlossgradientnode/labelsmoothing.md)
- [lossType](mpsnnlossgradientnode/losstype.md)
- [numberOfClasses](mpsnnlossgradientnode/numberofclasses.md)
- [propertyCallBack](mpsnnlossgradientnode/propertycallback.md)
- [reduceAcrossBatch](mpsnnlossgradientnode/reduceacrossbatch.md)
- [reductionType](mpsnnlossgradientnode/reductiontype.md)
- [weight](mpsnnlossgradientnode/weight.md)

### Instance Methods

- [initWithSourceGradient:sourceImage:labels:gradientState:lossDescriptor:isLabelsGradientFilter:](mpsnnlossgradientnode/init%28sourcegradient_sourceimage_labels_gradientstate_lossdescriptor_islabelsgradientfilter_%29.md)
- [initWithSourceGradient:sourceImage:labels:weights:gradientState:lossDescriptor:isLabelsGradientFilter:](mpsnnlossgradientnode/init%28sourcegradient_sourceimage_labels_weights_gradientstate_lossdescriptor_islabelsgradientfilter_%29-3rcen.md)
- [initWithSources:gradientState:lossDescriptor:isLabelsGradientFilter:](mpsnnlossgradientnode/init%28sources_gradientstate_lossdescriptor_islabelsgradientfilter_%29.md)

### Type Methods

- [nodeWithSourceGradient:sourceImage:labels:weights:gradientState:lossDescriptor:isLabelsGradientFilter:](mpsnnlossgradientnode/init%28sourcegradient_sourceimage_labels_weights_gradientstate_lossdescriptor_islabelsgradientfilter_%29-9eqch.md)
- [nodeWithSourceGradient:sourceImage:labels:gradientState:lossDescriptor:isLabelsGradientFilter:](mpsnnlossgradientnode/nodewithsourcegradient_sourceimage_labels_gradientstate_lossdescriptor_islabelsgradientfilter_.md)
- [nodeWithSources:gradientState:lossDescriptor:isLabelsGradientFilter:](mpsnnlossgradientnode/nodewithsources_gradientstate_lossdescriptor_islabelsgradientfilter_.md)

## Relationships

### Inherits From

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)
