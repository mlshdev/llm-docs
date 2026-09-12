> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnforwardlossnode](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnforwardlossnode)

# MPSNNForwardLossNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class MPSNNForwardLossNode
```

## Topics

### Initializers

- [init(source:labels:lossDescriptor:)](mpsnnforwardlossnode/init%28source_labels_lossdescriptor_%29.md)
- [init(source:labels:weights:lossDescriptor:)](mpsnnforwardlossnode/init%28source_labels_weights_lossdescriptor_%29-8c2l6.md)
- [init(source:labels:weights:lossDescriptor:)](mpsnnforwardlossnode/init%28source_labels_weights_lossdescriptor_%29-9bsd7.md)
- [init(sources:lossDescriptor:)](mpsnnforwardlossnode/init%28sources_lossdescriptor_%29.md)

### Instance Properties

- [delta](mpsnnforwardlossnode/delta.md)
- [epsilon](mpsnnforwardlossnode/epsilon.md)
- [labelSmoothing](mpsnnforwardlossnode/labelsmoothing.md)
- [lossType](mpsnnforwardlossnode/losstype.md)
- [numberOfClasses](mpsnnforwardlossnode/numberofclasses.md)
- [propertyCallBack](mpsnnforwardlossnode/propertycallback.md)
- [reduceAcrossBatch](mpsnnforwardlossnode/reduceacrossbatch.md)
- [reductionType](mpsnnforwardlossnode/reductiontype.md)
- [weight](mpsnnforwardlossnode/weight.md)

### Instance Methods

- [gradientFilter(withSource:)](mpsnnforwardlossnode/gradientfilter%28withsource_%29.md)
- [gradientFilter(withSources:)](mpsnnforwardlossnode/gradientfilter%28withsources_%29.md)
- [gradientFilters(withSource:)](mpsnnforwardlossnode/gradientfilters%28withsource_%29.md)
- [gradientFilters(withSources:)](mpsnnforwardlossnode/gradientfilters%28withsources_%29.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MPSNNForwardLossNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSNNForwardLossNode : MPSNNFilterNode
```

## Topics

### Instance Properties

- [delta](mpsnnforwardlossnode/delta.md)
- [epsilon](mpsnnforwardlossnode/epsilon.md)
- [labelSmoothing](mpsnnforwardlossnode/labelsmoothing.md)
- [lossType](mpsnnforwardlossnode/losstype.md)
- [numberOfClasses](mpsnnforwardlossnode/numberofclasses.md)
- [propertyCallBack](mpsnnforwardlossnode/propertycallback.md)
- [reduceAcrossBatch](mpsnnforwardlossnode/reduceacrossbatch.md)
- [reductionType](mpsnnforwardlossnode/reductiontype.md)
- [weight](mpsnnforwardlossnode/weight.md)

### Instance Methods

- [gradientFilterWithSource:](mpsnnforwardlossnode/gradientfilter%28withsource_%29.md)
- [gradientFilterWithSources:](mpsnnforwardlossnode/gradientfilter%28withsources_%29.md)
- [gradientFiltersWithSource:](mpsnnforwardlossnode/gradientfilters%28withsource_%29.md)
- [gradientFiltersWithSources:](mpsnnforwardlossnode/gradientfilters%28withsources_%29.md)
- [initWithSource:labels:lossDescriptor:](mpsnnforwardlossnode/init%28source_labels_lossdescriptor_%29.md)
- [initWithSource:labels:weights:lossDescriptor:](mpsnnforwardlossnode/init%28source_labels_weights_lossdescriptor_%29-8c2l6.md)
- [initWithSources:lossDescriptor:](mpsnnforwardlossnode/init%28sources_lossdescriptor_%29.md)

### Type Methods

- [nodeWithSource:labels:weights:lossDescriptor:](mpsnnforwardlossnode/init%28source_labels_weights_lossdescriptor_%29-9bsd7.md)
- [nodeWithSource:labels:lossDescriptor:](mpsnnforwardlossnode/nodewithsource_labels_lossdescriptor_.md)
- [nodeWithSources:lossDescriptor:](mpsnnforwardlossnode/nodewithsources_lossdescriptor_.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)
