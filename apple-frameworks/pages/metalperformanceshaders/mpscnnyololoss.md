> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnyololoss](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnyololoss)

# MPSCNNYOLOLoss (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A kernel that computes the YOLO loss and loss gradient between specified predictions and labels.

## Declaration

```swift
class MPSCNNYOLOLoss
```

## Topics

### Initializers

- [init(coder:device:)](mpscnnyololoss/init%28coder_device_%29.md)
- [init(device:lossDescriptor:)](mpscnnyololoss/init%28device_lossdescriptor_%29.md)

### Instance Properties

- [anchorBoxes](mpscnnyololoss/anchorboxes.md)
- [lossClasses](mpscnnyololoss/lossclasses.md)
- [lossConfidence](mpscnnyololoss/lossconfidence.md)
- [lossWH](mpscnnyololoss/losswh.md)
- [lossXY](mpscnnyololoss/lossxy.md)
- [maxIOUForObjectAbsence](mpscnnyololoss/maxiouforobjectabsence.md)
- [minIOUForObjectPresence](mpscnnyololoss/miniouforobjectpresence.md)
- [numberOfAnchorBoxes](mpscnnyololoss/numberofanchorboxes.md)
- [reduceAcrossBatch](mpscnnyololoss/reduceacrossbatch.md)
- [reductionType](mpscnnyololoss/reductiontype.md)
- [scaleClass](mpscnnyololoss/scaleclass.md)
- [scaleNoObject](mpscnnyololoss/scalenoobject.md)
- [scaleObject](mpscnnyololoss/scaleobject.md)
- [scaleWH](mpscnnyololoss/scalewh.md)
- [scaleXY](mpscnnyololoss/scalexy.md)

### Instance Methods

- [encode(commandBuffer:sourceImage:labels:)](mpscnnyololoss/encode%28commandbuffer_sourceimage_labels_%29.md)
- [encode(commandBuffer:sourceImage:labels:destinationImage:)](mpscnnyololoss/encode%28commandbuffer_sourceimage_labels_destinationimage_%29.md)
- [encode(commandBuffer:sourceImages:labels:)](mpscnnyololoss/encode%28commandbuffer_sourceimages_labels_%29.md)
- [encode(commandBuffer:sourceImages:labels:destinationImages:)](mpscnnyololoss/encode%28commandbuffer_sourceimages_labels_destinationimages_%29.md)

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

- [MPSCNNLoss](mpscnnloss.md): A kernel that computes the loss and loss gradient between specified predictions and labels.
- [MPSCNNLossDataDescriptor](mpscnnlossdatadescriptor.md): An object that specifies properties used by a loss data descriptor.
- [MPSCNNLossDescriptor](mpscnnlossdescriptor.md): An object that specifies properties used by a loss kernel.
- [MPSCNNLossLabels](mpscnnlosslabels.md): A class that stores the per-element weight buffer used by loss and gradient loss kernels.
- [MPSCNNYOLOLossDescriptor](mpscnnyololossdescriptor.md): An object that specifies properties used by a YOLO loss kernel.

# MPSCNNYOLOLoss (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A kernel that computes the YOLO loss and loss gradient between specified predictions and labels.

## Declaration

```objectivec
@interface MPSCNNYOLOLoss : MPSCNNKernel
```

## Topics

### Instance Properties

- [anchorBoxes](mpscnnyololoss/anchorboxes.md)
- [lossClasses](mpscnnyololoss/lossclasses.md)
- [lossConfidence](mpscnnyololoss/lossconfidence.md)
- [lossWH](mpscnnyololoss/losswh.md)
- [lossXY](mpscnnyololoss/lossxy.md)
- [maxIOUForObjectAbsence](mpscnnyololoss/maxiouforobjectabsence.md)
- [minIOUForObjectPresence](mpscnnyololoss/miniouforobjectpresence.md)
- [numberOfAnchorBoxes](mpscnnyololoss/numberofanchorboxes.md)
- [reduceAcrossBatch](mpscnnyololoss/reduceacrossbatch.md)
- [reductionType](mpscnnyololoss/reductiontype.md)
- [scaleClass](mpscnnyololoss/scaleclass.md)
- [scaleNoObject](mpscnnyololoss/scalenoobject.md)
- [scaleObject](mpscnnyololoss/scaleobject.md)
- [scaleWH](mpscnnyololoss/scalewh.md)
- [scaleXY](mpscnnyololoss/scalexy.md)

### Instance Methods

- [encodeToCommandBuffer:sourceImage:labels:](mpscnnyololoss/encode%28commandbuffer_sourceimage_labels_%29.md)
- [encodeToCommandBuffer:sourceImage:labels:destinationImage:](mpscnnyololoss/encode%28commandbuffer_sourceimage_labels_destinationimage_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:labels:](mpscnnyololoss/encode%28commandbuffer_sourceimages_labels_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:labels:destinationImages:](mpscnnyololoss/encode%28commandbuffer_sourceimages_labels_destinationimages_%29.md)
- [initWithCoder:device:](mpscnnyololoss/init%28coder_device_%29.md)
- [initWithDevice:lossDescriptor:](mpscnnyololoss/init%28device_lossdescriptor_%29.md)

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)

## See Also

### Loss Layers

- [MPSCNNLoss](mpscnnloss.md): A kernel that computes the loss and loss gradient between specified predictions and labels.
- [MPSCNNLossDataDescriptor](mpscnnlossdatadescriptor.md): An object that specifies properties used by a loss data descriptor.
- [MPSCNNLossDescriptor](mpscnnlossdescriptor.md): An object that specifies properties used by a loss kernel.
- [MPSCNNLossLabels](mpscnnlosslabels.md): A class that stores the per-element weight buffer used by loss and gradient loss kernels.
- [MPSCNNYOLOLossDescriptor](mpscnnyololossdescriptor.md): An object that specifies properties used by a YOLO loss kernel.
