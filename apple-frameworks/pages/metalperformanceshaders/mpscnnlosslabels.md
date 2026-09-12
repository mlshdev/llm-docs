> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnlosslabels](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnlosslabels)

# MPSCNNLossLabels (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A class that stores the per-element weight buffer used by loss and gradient loss kernels.

## Declaration

```swift
class MPSCNNLossLabels
```

## Topics

### Initializers

- [init(device:labelsDescriptor:)](mpscnnlosslabels/init%28device_labelsdescriptor_%29.md)
- [init(device:lossImageSize:labelsDescriptor:weightsDescriptor:)](mpscnnlosslabels/init%28device_lossimagesize_labelsdescriptor_weightsdescriptor_%29.md)
- [init(device:lossImageSize:labelsImage:weightsImage:)](mpscnnlosslabels/init%28device_lossimagesize_labelsimage_weightsimage_%29.md)

### Instance Methods

- [labelsImage()](mpscnnlosslabels/labelsimage%28%29.md)
- [lossImage()](mpscnnlosslabels/lossimage%28%29.md)
- [weightsImage()](mpscnnlosslabels/weightsimage%28%29.md)

## Relationships

### Inherits From

- [MPSState](mpsstate.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Loss Layers

- [MPSCNNLoss](mpscnnloss.md): A kernel that computes the loss and loss gradient between specified predictions and labels.
- [MPSCNNLossDataDescriptor](mpscnnlossdatadescriptor.md): An object that specifies properties used by a loss data descriptor.
- [MPSCNNLossDescriptor](mpscnnlossdescriptor.md): An object that specifies properties used by a loss kernel.
- [MPSCNNYOLOLoss](mpscnnyololoss.md): A kernel that computes the YOLO loss and loss gradient between specified predictions and labels.
- [MPSCNNYOLOLossDescriptor](mpscnnyololossdescriptor.md): An object that specifies properties used by a YOLO loss kernel.

# MPSCNNLossLabels (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A class that stores the per-element weight buffer used by loss and gradient loss kernels.

## Declaration

```objectivec
@interface MPSCNNLossLabels : MPSState
```

## Topics

### Instance Methods

- [initWithDevice:labelsDescriptor:](mpscnnlosslabels/init%28device_labelsdescriptor_%29.md)
- [initWithDevice:lossImageSize:labelsDescriptor:weightsDescriptor:](mpscnnlosslabels/init%28device_lossimagesize_labelsdescriptor_weightsdescriptor_%29.md)
- [initWithDevice:lossImageSize:labelsImage:weightsImage:](mpscnnlosslabels/init%28device_lossimagesize_labelsimage_weightsimage_%29.md)
- [labelsImage](mpscnnlosslabels/labelsimage%28%29.md)
- [lossImage](mpscnnlosslabels/lossimage%28%29.md)
- [weightsImage](mpscnnlosslabels/weightsimage%28%29.md)

## Relationships

### Inherits From

- [MPSState](mpsstate.md)

## See Also

### Loss Layers

- [MPSCNNLoss](mpscnnloss.md): A kernel that computes the loss and loss gradient between specified predictions and labels.
- [MPSCNNLossDataDescriptor](mpscnnlossdatadescriptor.md): An object that specifies properties used by a loss data descriptor.
- [MPSCNNLossDescriptor](mpscnnlossdescriptor.md): An object that specifies properties used by a loss kernel.
- [MPSCNNYOLOLoss](mpscnnyololoss.md): A kernel that computes the YOLO loss and loss gradient between specified predictions and labels.
- [MPSCNNYOLOLossDescriptor](mpscnnyololossdescriptor.md): An object that specifies properties used by a YOLO loss kernel.
