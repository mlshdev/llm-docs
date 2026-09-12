> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnlogsoftmax](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnlogsoftmax)

# MPSCNNLogSoftMax (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A neural transfer function that  is useful for constructing a loss function to be minimized when training neural networks.

## Declaration

```swift
class MPSCNNLogSoftMax
```

<a id="overview"></a>

## Overview

The logarithmic softmax filter is calculated by taking the natural logarithm of the result of a softmax filter.

For each feature channel per pixel in an image in a feature map, the logarithmic softmax filter computes the following:

![pixel = pixel(x,y,k)) - ln{sum(exp(pixel(x,y,0)) … exp(pixel(x,y,N-1))}](https://developer.apple.com/images/com.apple.metalperformanceshaders/media-2903560@2x.png)

Where `R` is the result channel in the pixel, `N` is the number of feature channels, and `y=ln(x)` satisfies ```e``ʸ``=x```.

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

- [MPSCNNSoftMax](mpscnnsoftmax.md): A neural transfer function that is useful for classification tasks.
- [MPSCNNLogSoftMaxGradient](mpscnnlogsoftmaxgradient.md): A gradient logarithmic softmax filter.
- [MPSCNNSoftMaxGradient](mpscnnsoftmaxgradient.md): A gradient softmax filter.

# MPSCNNLogSoftMax (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A neural transfer function that  is useful for constructing a loss function to be minimized when training neural networks.

## Declaration

```objectivec
@interface MPSCNNLogSoftMax : MPSCNNKernel
```

<a id="overview"></a>

## Overview

The logarithmic softmax filter is calculated by taking the natural logarithm of the result of a softmax filter.

For each feature channel per pixel in an image in a feature map, the logarithmic softmax filter computes the following:

![pixel = pixel(x,y,k)) - ln{sum(exp(pixel(x,y,0)) … exp(pixel(x,y,N-1))}](https://developer.apple.com/images/com.apple.metalperformanceshaders/media-2903560@2x.png)

Where `R` is the result channel in the pixel, `N` is the number of feature channels, and `y=ln(x)` satisfies ```e``ʸ``=x```.

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)

## See Also

### Softmax Layers

- [MPSCNNSoftMax](mpscnnsoftmax.md): A neural transfer function that is useful for classification tasks.
- [MPSCNNLogSoftMaxGradient](mpscnnlogsoftmaxgradient.md): A gradient logarithmic softmax filter.
- [MPSCNNSoftMaxGradient](mpscnnsoftmaxgradient.md): A gradient softmax filter.
