> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnlossdescriptor](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnlossdescriptor)

# MPSCNNLossDescriptor (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

An object that specifies properties used by a loss kernel.

## Declaration

```swift
class MPSCNNLossDescriptor
```

## Topics

### Initializers

- [init(type:reductionType:)](mpscnnlossdescriptor/init%28type_reductiontype_%29.md)

### Instance Properties

- [delta](mpscnnlossdescriptor/delta.md)
- [epsilon](mpscnnlossdescriptor/epsilon.md)
- [labelSmoothing](mpscnnlossdescriptor/labelsmoothing.md)
- [lossType](mpscnnlossdescriptor/losstype.md)
- [numberOfClasses](mpscnnlossdescriptor/numberofclasses.md)
- [reduceAcrossBatch](mpscnnlossdescriptor/reduceacrossbatch.md)
- [reductionType](mpscnnlossdescriptor/reductiontype.md)
- [weight](mpscnnlossdescriptor/weight.md)

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
- [MPSCNNLossLabels](mpscnnlosslabels.md): A class that stores the per-element weight buffer used by loss and gradient loss kernels.
- [MPSCNNYOLOLoss](mpscnnyololoss.md): A kernel that computes the YOLO loss and loss gradient between specified predictions and labels.
- [MPSCNNYOLOLossDescriptor](mpscnnyololossdescriptor.md): An object that specifies properties used by a YOLO loss kernel.

# MPSCNNLossDescriptor (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

An object that specifies properties used by a loss kernel.

## Declaration

```objectivec
@interface MPSCNNLossDescriptor : NSObject
```

## Topics

### Instance Properties

- [delta](mpscnnlossdescriptor/delta.md)
- [epsilon](mpscnnlossdescriptor/epsilon.md)
- [labelSmoothing](mpscnnlossdescriptor/labelsmoothing.md)
- [lossType](mpscnnlossdescriptor/losstype.md)
- [numberOfClasses](mpscnnlossdescriptor/numberofclasses.md)
- [reduceAcrossBatch](mpscnnlossdescriptor/reduceacrossbatch.md)
- [reductionType](mpscnnlossdescriptor/reductiontype.md)
- [weight](mpscnnlossdescriptor/weight.md)

### Type Methods

- [cnnLossDescriptorWithType:reductionType:](mpscnnlossdescriptor/init%28type_reductiontype_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Loss Layers

- [MPSCNNLoss](mpscnnloss.md): A kernel that computes the loss and loss gradient between specified predictions and labels.
- [MPSCNNLossDataDescriptor](mpscnnlossdatadescriptor.md): An object that specifies properties used by a loss data descriptor.
- [MPSCNNLossLabels](mpscnnlosslabels.md): A class that stores the per-element weight buffer used by loss and gradient loss kernels.
- [MPSCNNYOLOLoss](mpscnnyololoss.md): A kernel that computes the YOLO loss and loss gradient between specified predictions and labels.
- [MPSCNNYOLOLossDescriptor](mpscnnyololossdescriptor.md): An object that specifies properties used by a YOLO loss kernel.
