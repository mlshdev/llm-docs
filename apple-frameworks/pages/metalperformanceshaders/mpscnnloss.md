> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnloss](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnloss)

# MPSCNNLoss (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A kernel that computes the loss and loss gradient between specified predictions and labels.

## Declaration

```swift
class MPSCNNLoss
```

## Topics

### Initializers

- [init(coder:device:)](mpscnnloss/init%28coder_device_%29.md)
- [init(device:lossDescriptor:)](mpscnnloss/init%28device_lossdescriptor_%29.md)

### Instance Properties

- [delta](mpscnnloss/delta.md)
- [epsilon](mpscnnloss/epsilon.md)
- [labelSmoothing](mpscnnloss/labelsmoothing.md)
- [lossType](mpscnnloss/losstype.md)
- [numberOfClasses](mpscnnloss/numberofclasses.md)
- [reduceAcrossBatch](mpscnnloss/reduceacrossbatch.md)
- [reductionType](mpscnnloss/reductiontype.md)
- [weight](mpscnnloss/weight.md)

### Instance Methods

- [encode(commandBuffer:sourceImage:labels:)](mpscnnloss/encode%28commandbuffer_sourceimage_labels_%29.md)
- [encode(commandBuffer:sourceImage:labels:destinationImage:)](mpscnnloss/encode%28commandbuffer_sourceimage_labels_destinationimage_%29.md)
- [encode(commandBuffer:sourceImages:labels:)](mpscnnloss/encode%28commandbuffer_sourceimages_labels_%29.md)
- [encode(commandBuffer:sourceImages:labels:destinationImages:)](mpscnnloss/encode%28commandbuffer_sourceimages_labels_destinationimages_%29.md)

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

## See Also

### Loss Layers

- [MPSCNNLossDataDescriptor](mpscnnlossdatadescriptor.md): An object that specifies properties used by a loss data descriptor.
- [MPSCNNLossDescriptor](mpscnnlossdescriptor.md): An object that specifies properties used by a loss kernel.
- [MPSCNNLossLabels](mpscnnlosslabels.md): A class that stores the per-element weight buffer used by loss and gradient loss kernels.
- [MPSCNNYOLOLoss](mpscnnyololoss.md): A kernel that computes the YOLO loss and loss gradient between specified predictions and labels.
- [MPSCNNYOLOLossDescriptor](mpscnnyololossdescriptor.md): An object that specifies properties used by a YOLO loss kernel.

# MPSCNNLoss (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A kernel that computes the loss and loss gradient between specified predictions and labels.

## Declaration

```objectivec
@interface MPSCNNLoss : MPSCNNKernel
```

## Topics

### Instance Properties

- [delta](mpscnnloss/delta.md)
- [epsilon](mpscnnloss/epsilon.md)
- [labelSmoothing](mpscnnloss/labelsmoothing.md)
- [lossType](mpscnnloss/losstype.md)
- [numberOfClasses](mpscnnloss/numberofclasses.md)
- [reduceAcrossBatch](mpscnnloss/reduceacrossbatch.md)
- [reductionType](mpscnnloss/reductiontype.md)
- [weight](mpscnnloss/weight.md)

### Instance Methods

- [encodeToCommandBuffer:sourceImage:labels:](mpscnnloss/encode%28commandbuffer_sourceimage_labels_%29.md)
- [encodeToCommandBuffer:sourceImage:labels:destinationImage:](mpscnnloss/encode%28commandbuffer_sourceimage_labels_destinationimage_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:labels:](mpscnnloss/encode%28commandbuffer_sourceimages_labels_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:labels:destinationImages:](mpscnnloss/encode%28commandbuffer_sourceimages_labels_destinationimages_%29.md)
- [initWithCoder:device:](mpscnnloss/init%28coder_device_%29.md)
- [initWithDevice:lossDescriptor:](mpscnnloss/init%28device_lossdescriptor_%29.md)

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)

## See Also

### Loss Layers

- [MPSCNNLossDataDescriptor](mpscnnlossdatadescriptor.md): An object that specifies properties used by a loss data descriptor.
- [MPSCNNLossDescriptor](mpscnnlossdescriptor.md): An object that specifies properties used by a loss kernel.
- [MPSCNNLossLabels](mpscnnlosslabels.md): A class that stores the per-element weight buffer used by loss and gradient loss kernels.
- [MPSCNNYOLOLoss](mpscnnyololoss.md): A kernel that computes the YOLO loss and loss gradient between specified predictions and labels.
- [MPSCNNYOLOLossDescriptor](mpscnnyololossdescriptor.md): An object that specifies properties used by a YOLO loss kernel.
