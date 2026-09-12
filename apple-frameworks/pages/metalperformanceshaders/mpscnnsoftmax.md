> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnsoftmax](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnsoftmax)

# MPSCNNSoftMax (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A neural transfer function that is useful for classification tasks.

## Declaration

```swift
class MPSCNNSoftMax
```

<a id="overview"></a>

## Overview

The softmax filter is applied across feature channels in a convolutional manner at all spatial locations. The softmax filter can be seen as the combination of an activation function (exponential) and a normalization operator.

For each feature channel per pixel in an image in a feature map, the softmax filter computes the following:

![pixel = exp(pixel(x,y,k))/sum(exp(pixel(x,y,0)) … exp(pixel(x,y,N-1))](https://developer.apple.com/images/com.apple.metalperformanceshaders/media-2903559@2x.png)

Where `R` is the result channel in the pixel and `N` is the number of feature channels.

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

### Softmax Layers

- [MPSCNNLogSoftMax](mpscnnlogsoftmax.md): A neural transfer function that is useful for constructing a loss function to be minimized when training neural networks.
- [MPSCNNLogSoftMaxGradient](mpscnnlogsoftmaxgradient.md): A gradient logarithmic softmax filter.
- [MPSCNNSoftMaxGradient](mpscnnsoftmaxgradient.md): A gradient softmax filter.

# MPSCNNSoftMax (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A neural transfer function that is useful for classification tasks.

## Declaration

```objectivec
@interface MPSCNNSoftMax : MPSCNNKernel
```

<a id="overview"></a>

## Overview

The softmax filter is applied across feature channels in a convolutional manner at all spatial locations. The softmax filter can be seen as the combination of an activation function (exponential) and a normalization operator.

For each feature channel per pixel in an image in a feature map, the softmax filter computes the following:

![pixel = exp(pixel(x,y,k))/sum(exp(pixel(x,y,0)) … exp(pixel(x,y,N-1))](https://developer.apple.com/images/com.apple.metalperformanceshaders/media-2903559@2x.png)

Where `R` is the result channel in the pixel and `N` is the number of feature channels.

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)

## See Also

### Softmax Layers

- [MPSCNNLogSoftMax](mpscnnlogsoftmax.md): A neural transfer function that is useful for constructing a loss function to be minimized when training neural networks.
- [MPSCNNLogSoftMaxGradient](mpscnnlogsoftmaxgradient.md): A gradient logarithmic softmax filter.
- [MPSCNNSoftMaxGradient](mpscnnsoftmaxgradient.md): A gradient softmax filter.
