> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnlogsoftmaxgradient](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnlogsoftmaxgradient)

# MPSCNNLogSoftMaxGradient (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient logarithmic softmax filter.

## Declaration

```swift
class MPSCNNLogSoftMaxGradient
```

## Topics

### Initializers

- [init(coder:device:)](mpscnnlogsoftmaxgradient/init%28coder_device_%29.md)
- [init(device:)](mpscnnlogsoftmaxgradient/init%28device_%29.md)

## Relationships

### Inherits From

- [MPSCNNGradientKernel](mpscnngradientkernel.md)

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

### Softmax Layers

- [MPSCNNSoftMax](mpscnnsoftmax.md): A neural transfer function that is useful for classification tasks.
- [MPSCNNLogSoftMax](mpscnnlogsoftmax.md): A neural transfer function that is useful for constructing a loss function to be minimized when training neural networks.
- [MPSCNNSoftMaxGradient](mpscnnsoftmaxgradient.md): A gradient softmax filter.

# MPSCNNLogSoftMaxGradient (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient logarithmic softmax filter.

## Declaration

```objectivec
@interface MPSCNNLogSoftMaxGradient : MPSCNNGradientKernel
```

## Topics

### Instance Methods

- [initWithCoder:device:](mpscnnlogsoftmaxgradient/init%28coder_device_%29.md)
- [initWithDevice:](mpscnnlogsoftmaxgradient/init%28device_%29.md)

## Relationships

### Inherits From

- [MPSCNNGradientKernel](mpscnngradientkernel.md)

## See Also

### Softmax Layers

- [MPSCNNSoftMax](mpscnnsoftmax.md): A neural transfer function that is useful for classification tasks.
- [MPSCNNLogSoftMax](mpscnnlogsoftmax.md): A neural transfer function that is useful for constructing a loss function to be minimized when training neural networks.
- [MPSCNNSoftMaxGradient](mpscnnsoftmaxgradient.md): A gradient softmax filter.
