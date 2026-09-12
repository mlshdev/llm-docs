> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnyololossdescriptor](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnyololossdescriptor)

# MPSCNNYOLOLossDescriptor (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

An object that specifies properties used by a YOLO loss kernel.

## Declaration

```swift
class MPSCNNYOLOLossDescriptor
```

## Topics

### Instance Properties

- [anchorBoxes](mpscnnyololossdescriptor/anchorboxes.md)
- [classesLossDescriptor](mpscnnyololossdescriptor/classeslossdescriptor.md)
- [confidenceLossDescriptor](mpscnnyololossdescriptor/confidencelossdescriptor.md)
- [maxIOUForObjectAbsence](mpscnnyololossdescriptor/maxiouforobjectabsence.md)
- [minIOUForObjectPresence](mpscnnyololossdescriptor/miniouforobjectpresence.md)
- [numberOfAnchorBoxes](mpscnnyololossdescriptor/numberofanchorboxes.md)
- [reduceAcrossBatch](mpscnnyololossdescriptor/reduceacrossbatch.md)
- [reductionType](mpscnnyololossdescriptor/reductiontype.md)
- [rescore](mpscnnyololossdescriptor/rescore.md)
- [scaleClass](mpscnnyololossdescriptor/scaleclass.md)
- [scaleNoObject](mpscnnyololossdescriptor/scalenoobject.md)
- [scaleObject](mpscnnyololossdescriptor/scaleobject.md)
- [scaleWH](mpscnnyololossdescriptor/scalewh.md)
- [scaleXY](mpscnnyololossdescriptor/scalexy.md)
- [whLossDescriptor](mpscnnyololossdescriptor/whlossdescriptor.md)
- [xyLossDescriptor](mpscnnyololossdescriptor/xylossdescriptor.md)

### Type Methods

- [cnnLossDescriptor(withXYLossType:whLossType:confidenceLossType:classesLossType:reductionType:anchorBoxes:numberOfAnchorBoxes:)](mpscnnyololossdescriptor/cnnlossdescriptor%28withxylosstype_whlosstype_confidencelosstype_classeslosstype_reductiontype_anchorboxes_numberofanchorboxes_%29.md)

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

### Loss Layers

- [MPSCNNLoss](mpscnnloss.md): A kernel that computes the loss and loss gradient between specified predictions and labels.
- [MPSCNNLossDataDescriptor](mpscnnlossdatadescriptor.md): An object that specifies properties used by a loss data descriptor.
- [MPSCNNLossDescriptor](mpscnnlossdescriptor.md): An object that specifies properties used by a loss kernel.
- [MPSCNNLossLabels](mpscnnlosslabels.md): A class that stores the per-element weight buffer used by loss and gradient loss kernels.
- [MPSCNNYOLOLoss](mpscnnyololoss.md): A kernel that computes the YOLO loss and loss gradient between specified predictions and labels.

# MPSCNNYOLOLossDescriptor (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

An object that specifies properties used by a YOLO loss kernel.

## Declaration

```objectivec
@interface MPSCNNYOLOLossDescriptor : NSObject
```

## Topics

### Instance Properties

- [anchorBoxes](mpscnnyololossdescriptor/anchorboxes.md)
- [classesLossDescriptor](mpscnnyololossdescriptor/classeslossdescriptor.md)
- [confidenceLossDescriptor](mpscnnyololossdescriptor/confidencelossdescriptor.md)
- [maxIOUForObjectAbsence](mpscnnyololossdescriptor/maxiouforobjectabsence.md)
- [minIOUForObjectPresence](mpscnnyololossdescriptor/miniouforobjectpresence.md)
- [numberOfAnchorBoxes](mpscnnyololossdescriptor/numberofanchorboxes.md)
- [reduceAcrossBatch](mpscnnyololossdescriptor/reduceacrossbatch.md)
- [reductionType](mpscnnyololossdescriptor/reductiontype.md)
- [rescore](mpscnnyololossdescriptor/rescore.md)
- [scaleClass](mpscnnyololossdescriptor/scaleclass.md)
- [scaleNoObject](mpscnnyololossdescriptor/scalenoobject.md)
- [scaleObject](mpscnnyololossdescriptor/scaleobject.md)
- [scaleWH](mpscnnyololossdescriptor/scalewh.md)
- [scaleXY](mpscnnyololossdescriptor/scalexy.md)
- [WHLossDescriptor](mpscnnyololossdescriptor/whlossdescriptor.md)
- [XYLossDescriptor](mpscnnyololossdescriptor/xylossdescriptor.md)

### Type Methods

- [cnnLossDescriptorWithXYLossType:WHLossType:confidenceLossType:classesLossType:reductionType:anchorBoxes:numberOfAnchorBoxes:](mpscnnyololossdescriptor/cnnlossdescriptor%28withxylosstype_whlosstype_confidencelosstype_classeslosstype_reductiontype_anchorboxes_numberofanchorboxes_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Loss Layers

- [MPSCNNLoss](mpscnnloss.md): A kernel that computes the loss and loss gradient between specified predictions and labels.
- [MPSCNNLossDataDescriptor](mpscnnlossdatadescriptor.md): An object that specifies properties used by a loss data descriptor.
- [MPSCNNLossDescriptor](mpscnnlossdescriptor.md): An object that specifies properties used by a loss kernel.
- [MPSCNNLossLabels](mpscnnlosslabels.md): A class that stores the per-element weight buffer used by loss and gradient loss kernels.
- [MPSCNNYOLOLoss](mpscnnyololoss.md): A kernel that computes the YOLO loss and loss gradient between specified predictions and labels.
