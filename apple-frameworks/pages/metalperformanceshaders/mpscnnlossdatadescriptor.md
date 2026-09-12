> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnlossdatadescriptor](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnlossdatadescriptor)

# MPSCNNLossDataDescriptor (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

An object that specifies properties used by a loss data descriptor.

## Declaration

```swift
class MPSCNNLossDataDescriptor
```

## Topics

### Initializers

- [init(data:layout:size:)](mpscnnlossdatadescriptor/init%28data_layout_size_%29.md)

### Instance Properties

- [bytesPerImage](mpscnnlossdatadescriptor/bytesperimage.md)
- [bytesPerRow](mpscnnlossdatadescriptor/bytesperrow.md)
- [layout](mpscnnlossdatadescriptor/layout.md)
- [size](mpscnnlossdatadescriptor/size.md)

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
- [MPSCNNLossDescriptor](mpscnnlossdescriptor.md): An object that specifies properties used by a loss kernel.
- [MPSCNNLossLabels](mpscnnlosslabels.md): A class that stores the per-element weight buffer used by loss and gradient loss kernels.
- [MPSCNNYOLOLoss](mpscnnyololoss.md): A kernel that computes the YOLO loss and loss gradient between specified predictions and labels.
- [MPSCNNYOLOLossDescriptor](mpscnnyololossdescriptor.md): An object that specifies properties used by a YOLO loss kernel.

# MPSCNNLossDataDescriptor (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

An object that specifies properties used by a loss data descriptor.

## Declaration

```objectivec
@interface MPSCNNLossDataDescriptor : NSObject
```

## Topics

### Instance Properties

- [bytesPerImage](mpscnnlossdatadescriptor/bytesperimage.md)
- [bytesPerRow](mpscnnlossdatadescriptor/bytesperrow.md)
- [layout](mpscnnlossdatadescriptor/layout.md)
- [size](mpscnnlossdatadescriptor/size.md)

### Type Methods

- [cnnLossDataDescriptorWithData:layout:size:](mpscnnlossdatadescriptor/init%28data_layout_size_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Loss Layers

- [MPSCNNLoss](mpscnnloss.md): A kernel that computes the loss and loss gradient between specified predictions and labels.
- [MPSCNNLossDescriptor](mpscnnlossdescriptor.md): An object that specifies properties used by a loss kernel.
- [MPSCNNLossLabels](mpscnnlosslabels.md): A class that stores the per-element weight buffer used by loss and gradient loss kernels.
- [MPSCNNYOLOLoss](mpscnnyololoss.md): A kernel that computes the YOLO loss and loss gradient between specified predictions and labels.
- [MPSCNNYOLOLossDescriptor](mpscnnyololossdescriptor.md): An object that specifies properties used by a YOLO loss kernel.
