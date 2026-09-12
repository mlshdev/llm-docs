> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnlossgradient](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnlossgradient)

# MPSNNLossGradient (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class MPSNNLossGradient
```

## Topics

### Initializers

- [init(coder:device:)](mpsnnlossgradient/init%28coder_device_%29.md)
- [init(device:lossDescriptor:)](mpsnnlossgradient/init%28device_lossdescriptor_%29.md)

### Instance Properties

- [computeLabelGradients](mpsnnlossgradient/computelabelgradients.md)
- [delta](mpsnnlossgradient/delta.md)
- [epsilon](mpsnnlossgradient/epsilon.md)
- [labelSmoothing](mpsnnlossgradient/labelsmoothing.md)
- [lossType](mpsnnlossgradient/losstype.md)
- [numberOfClasses](mpsnnlossgradient/numberofclasses.md)
- [reduceAcrossBatch](mpsnnlossgradient/reduceacrossbatch.md)
- [reductionType](mpsnnlossgradient/reductiontype.md)
- [weight](mpsnnlossgradient/weight.md)

### Instance Methods

- [encodeBatch(commandBuffer:sourceGradients:sourceImages:labels:weights:sourceStates:)](mpsnnlossgradient/encodebatch%28commandbuffer_sourcegradients_sourceimages_labels_weights_sourcestates_%29.md)
- [encodeBatch(commandBuffer:sourceGradients:sourceImages:labels:weights:sourceStates:destinationGradients:)](mpsnnlossgradient/encodebatch%28commandbuffer_sourcegradients_sourceimages_labels_weights_sourcestates_destinationgradients_%29.md)

## Relationships

### Inherits From

- [MPSCNNBinaryKernel](mpscnnbinarykernel.md)

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

# MPSNNLossGradient (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSNNLossGradient : MPSCNNBinaryKernel
```

## Topics

### Instance Properties

- [computeLabelGradients](mpsnnlossgradient/computelabelgradients.md)
- [delta](mpsnnlossgradient/delta.md)
- [epsilon](mpsnnlossgradient/epsilon.md)
- [labelSmoothing](mpsnnlossgradient/labelsmoothing.md)
- [lossType](mpsnnlossgradient/losstype.md)
- [numberOfClasses](mpsnnlossgradient/numberofclasses.md)
- [reduceAcrossBatch](mpsnnlossgradient/reduceacrossbatch.md)
- [reductionType](mpsnnlossgradient/reductiontype.md)
- [weight](mpsnnlossgradient/weight.md)

### Instance Methods

- [encodeBatchToCommandBuffer:sourceGradients:sourceImages:labels:weights:sourceStates:](mpsnnlossgradient/encodebatch%28commandbuffer_sourcegradients_sourceimages_labels_weights_sourcestates_%29.md)
- [encodeBatchToCommandBuffer:sourceGradients:sourceImages:labels:weights:sourceStates:destinationGradients:](mpsnnlossgradient/encodebatch%28commandbuffer_sourcegradients_sourceimages_labels_weights_sourcestates_destinationgradients_%29.md)
- [initWithCoder:device:](mpsnnlossgradient/init%28coder_device_%29.md)
- [initWithDevice:lossDescriptor:](mpsnnlossgradient/init%28device_lossdescriptor_%29.md)

## Relationships

### Inherits From

- [MPSCNNBinaryKernel](mpscnnbinarykernel.md)
