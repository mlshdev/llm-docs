> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnsoftmaxgradient](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnsoftmaxgradient)

# MPSCNNSoftMaxGradient (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient softmax filter.

## Declaration

```swift
class MPSCNNSoftMaxGradient
```

## Topics

### Initializers

- [init(coder:device:)](mpscnnsoftmaxgradient/init%28coder_device_%29.md)
- [init(device:)](mpscnnsoftmaxgradient/init%28device_%29.md)

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
- [MPSCNNLogSoftMaxGradient](mpscnnlogsoftmaxgradient.md): A gradient logarithmic softmax filter.

# MPSCNNSoftMaxGradient (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient softmax filter.

## Declaration

```objectivec
@interface MPSCNNSoftMaxGradient : MPSCNNGradientKernel
```

## Topics

### Instance Methods

- [initWithCoder:device:](mpscnnsoftmaxgradient/init%28coder_device_%29.md)
- [initWithDevice:](mpscnnsoftmaxgradient/init%28device_%29.md)

## Relationships

### Inherits From

- [MPSCNNGradientKernel](mpscnngradientkernel.md)

## See Also

### Softmax Layers

- [MPSCNNSoftMax](mpscnnsoftmax.md): A neural transfer function that is useful for classification tasks.
- [MPSCNNLogSoftMax](mpscnnlogsoftmax.md): A neural transfer function that is useful for constructing a loss function to be minimized when training neural networks.
- [MPSCNNLogSoftMaxGradient](mpscnnlogsoftmaxgradient.md): A gradient logarithmic softmax filter.
