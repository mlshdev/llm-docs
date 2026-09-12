> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnforwardloss](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnforwardloss)

# MPSNNForwardLoss (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class MPSNNForwardLoss
```

## Topics

### Initializers

- [init(coder:device:)](mpsnnforwardloss/init%28coder_device_%29.md)
- [init(device:lossDescriptor:)](mpsnnforwardloss/init%28device_lossdescriptor_%29.md)

### Instance Properties

- [delta](mpsnnforwardloss/delta.md)
- [epsilon](mpsnnforwardloss/epsilon.md)
- [labelSmoothing](mpsnnforwardloss/labelsmoothing.md)
- [lossType](mpsnnforwardloss/losstype.md)
- [numberOfClasses](mpsnnforwardloss/numberofclasses.md)
- [reduceAcrossBatch](mpsnnforwardloss/reduceacrossbatch.md)
- [reductionType](mpsnnforwardloss/reductiontype.md)
- [weight](mpsnnforwardloss/weight.md)

### Instance Methods

- [encodeBatch(commandBuffer:sourceImages:labels:weights:destinationStates:destinationImages:)](mpsnnforwardloss/encodebatch%28commandbuffer_sourceimages_labels_weights_destinationstates_destinationimages_%29.md)
- [encodeBatch(commandBuffer:sourceImages:labels:weights:outStates:isTemporary:)](mpsnnforwardloss/encodebatch%28commandbuffer_sourceimages_labels_weights_outstates_istemporary_%29.md)

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

# MPSNNForwardLoss (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSNNForwardLoss : MPSCNNKernel
```

## Topics

### Instance Properties

- [delta](mpsnnforwardloss/delta.md)
- [epsilon](mpsnnforwardloss/epsilon.md)
- [labelSmoothing](mpsnnforwardloss/labelsmoothing.md)
- [lossType](mpsnnforwardloss/losstype.md)
- [numberOfClasses](mpsnnforwardloss/numberofclasses.md)
- [reduceAcrossBatch](mpsnnforwardloss/reduceacrossbatch.md)
- [reductionType](mpsnnforwardloss/reductiontype.md)
- [weight](mpsnnforwardloss/weight.md)

### Instance Methods

- [encodeBatchToCommandBuffer:sourceImages:labels:weights:destinationStates:destinationImages:](mpsnnforwardloss/encodebatch%28commandbuffer_sourceimages_labels_weights_destinationstates_destinationimages_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:labels:weights:destinationStates:destinationStateIsTemporary:](mpsnnforwardloss/encodebatch%28commandbuffer_sourceimages_labels_weights_outstates_istemporary_%29.md)
- [initWithCoder:device:](mpsnnforwardloss/init%28coder_device_%29.md)
- [initWithDevice:lossDescriptor:](mpsnnforwardloss/init%28device_lossdescriptor_%29.md)

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)
