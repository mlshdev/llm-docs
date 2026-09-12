> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnfullyconnected](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnfullyconnected)

# MPSCNNFullyConnected (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A fully connected convolution layer, also known as an inner product layer.

## Declaration

```swift
class MPSCNNFullyConnected
```

<a id="overview"></a>

## Overview

A fully connected layer in  a Convolutional Neural Network (CNN) is one where every input channel is connected to every output channel. The kernel width is equal to the width of the source image, and the kernel height is equal to the height of the source image. The width and height of the output is `1 x 1`.

A fully connected layer takes an [MPSImage](mpsimage.md) object with dimensions `source.width x source.height x Ni`, convolves it with `Weights[No][source.width][source.height][Ni]`,` `and produces a `1 x 1 x No` output.

Thus, the following conditions must be true:

- `kernelWidth  == source.width`
- `kernelHeight == source.height`
- `clipRect.size.width == 1`
- `clipRect.size.height == 1`

You can think of a fully connected layer as a matrix multiplication where the image is flattened into a vector of length `source.width*source.height*Ni`, and the weights are arranged in a matrix of dimension `No x (source.width*source.height*Ni)` to produce an output vector of length `No`.

The value of the `strideInPixelsX`, [strideInPixelsY](mpscnnconvolutiondescriptor/strideinpixelsy.md), and [groups](mpscnnconvolution/groups.md) properties must be `1`. The [offset](mpscnnkernel/offset.md) property is not applicable and it is ignored. Because the clip rectangle is clamped to the destination image bounds, if the destination is `1 x 1`, you do not need to set the [clipRect](mpscnnkernel/cliprect.md) property.

> **Note**

>  You can implement a fully connected convolution layer using an [MPSCNNConvolution](mpscnnconvolution.md) object by setting the following property values:
>
> `offset = (kernelWidth/2,kernelHeight/2)`
>
> `clipRect.origin = (ox,oy)`
>
> `clipRect.size = (1,1)`
>
> `strideInPixelsX = strideInPixelsY = groups = 1`
>
> However, using an [MPSCNNFullyConnected](mpscnnfullyconnected.md) object directly is better for performance as it lets the Metal Performance Shaders framework choose the most performant implementation method, which may not be possible when you use a general convolution. For example, the framework may internally use matrix multiplication or special reduction kernels for a specific Metal feature set.

## Topics

### Initializers

- [init(coder:device:)](mpscnnfullyconnected/init%28coder_device_%29.md): Initializes a fully connected convolution layer.
- [init(device:weights:)](mpscnnfullyconnected/init%28device_weights_%29.md): Initializes a fully connected convolution layer.
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [init(device:convolutionDescriptor:kernelWeights:biasTerms:flags:)](mpscnnfullyconnected/init%28device_convolutiondescriptor_kernelweights_biasterms_flags_%29.md): Deprecated. Initializes a fully connected convolution layer.
- [MPSCNNConvolutionDescriptor](mpscnnconvolutiondescriptor.md): A description of the attributes of a convolution kernel.
- [MPSCNNConvolutionFlags](mpscnnconvolutionflags.md): Options used to control how kernel weights are stored and used in the CNN kernels

## Relationships

### Inherits From

- [MPSCNNConvolution](mpscnnconvolution.md)

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

### Fully Connected Layers

- [MPSCNNBinaryFullyConnected](mpscnnbinaryfullyconnected.md): A fully connected convolution layer with binary weights and optionally binarized input image.
- [MPSCNNFullyConnectedGradient](mpscnnfullyconnectedgradient.md): A gradient fully connected convolution layer.

# MPSCNNFullyConnected (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A fully connected convolution layer, also known as an inner product layer.

## Declaration

```objectivec
@interface MPSCNNFullyConnected : MPSCNNConvolution
```

<a id="overview"></a>

## Overview

A fully connected layer in  a Convolutional Neural Network (CNN) is one where every input channel is connected to every output channel. The kernel width is equal to the width of the source image, and the kernel height is equal to the height of the source image. The width and height of the output is `1 x 1`.

A fully connected layer takes an [MPSImage](mpsimage.md) object with dimensions `source.width x source.height x Ni`, convolves it with `Weights[No][source.width][source.height][Ni]`,` `and produces a `1 x 1 x No` output.

Thus, the following conditions must be true:

- `kernelWidth  == source.width`
- `kernelHeight == source.height`
- `clipRect.size.width == 1`
- `clipRect.size.height == 1`

You can think of a fully connected layer as a matrix multiplication where the image is flattened into a vector of length `source.width*source.height*Ni`, and the weights are arranged in a matrix of dimension `No x (source.width*source.height*Ni)` to produce an output vector of length `No`.

The value of the `strideInPixelsX`, [strideInPixelsY](mpscnnconvolutiondescriptor/strideinpixelsy.md), and [groups](mpscnnconvolution/groups.md) properties must be `1`. The [offset](mpscnnkernel/offset.md) property is not applicable and it is ignored. Because the clip rectangle is clamped to the destination image bounds, if the destination is `1 x 1`, you do not need to set the [clipRect](mpscnnkernel/cliprect.md) property.

> **Note**

>  You can implement a fully connected convolution layer using an [MPSCNNConvolution](mpscnnconvolution.md) object by setting the following property values:
>
> `offset = (kernelWidth/2,kernelHeight/2)`
>
> `clipRect.origin = (ox,oy)`
>
> `clipRect.size = (1,1)`
>
> `strideInPixelsX = strideInPixelsY = groups = 1`
>
> However, using an [MPSCNNFullyConnected](mpscnnfullyconnected.md) object directly is better for performance as it lets the Metal Performance Shaders framework choose the most performant implementation method, which may not be possible when you use a general convolution. For example, the framework may internally use matrix multiplication or special reduction kernels for a specific Metal feature set.

## Topics

### Initializers

- [initWithCoder:device:](mpscnnfullyconnected/init%28coder_device_%29.md): Initializes a fully connected convolution layer.
- [initWithDevice:weights:](mpscnnfullyconnected/init%28device_weights_%29.md): Initializes a fully connected convolution layer.
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [initWithDevice:convolutionDescriptor:kernelWeights:biasTerms:flags:](mpscnnfullyconnected/init%28device_convolutiondescriptor_kernelweights_biasterms_flags_%29.md): Deprecated. Initializes a fully connected convolution layer.
- [MPSCNNConvolutionDescriptor](mpscnnconvolutiondescriptor.md): A description of the attributes of a convolution kernel.
- [MPSCNNConvolutionFlags](mpscnnconvolutionflags.md): Options used to control how kernel weights are stored and used in the CNN kernels

## Relationships

### Inherits From

- [MPSCNNConvolution](mpscnnconvolution.md)

## See Also

### Fully Connected Layers

- [MPSCNNBinaryFullyConnected](mpscnnbinaryfullyconnected.md): A fully connected convolution layer with binary weights and optionally binarized input image.
- [MPSCNNFullyConnectedGradient](mpscnnfullyconnectedgradient.md): A gradient fully connected convolution layer.
