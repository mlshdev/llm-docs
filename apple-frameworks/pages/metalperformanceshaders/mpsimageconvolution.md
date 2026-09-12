> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageconvolution](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageconvolution)

# MPSImageConvolution (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that convolves an image with a given kernel of odd width and height.

## Declaration

```swift
class MPSImageConvolution
```

<a id="overview"></a>

## Overview

Filter width and height can be either 3, 5, 7 or 9. If there are multiple channels in the source image, each channel is processed independently.

A *separable* convolution filter may perform better when done in two passes. . A convolution filter is separable if the ratio of filter values between all rows is constant over the whole row. For example, this edge detection filter:

![](https://developer.apple.com/images/com.apple.metalperformanceshaders/media-2556905@2x.png)

Can instead be separated into the product of two vectors, like so:

![](https://developer.apple.com/images/com.apple.metalperformanceshaders/media-2556912@2x.png)

And consequently can be done as two, one-dimensional convolution passes back to back on the same image. In this way, the number of multiplies (ignoring the fact that we could skip zeros here) is reduced from `3*3=9` to `3+3=6`. There are similar savings for addition. For large filters, the savings can be profound.

## Topics

### Initializers

- [init(coder:device:)](mpsimageconvolution/init%28coder_device_%29.md)

### Methods

- [init(device:kernelWidth:kernelHeight:weights:)](mpsimageconvolution/init%28device_kernelwidth_kernelheight_weights_%29.md): Initializes a convolution filter.

### Properties

- [kernelHeight](mpsimageconvolution/kernelheight.md): The height of the filter window. Must be an odd number.
- [kernelWidth](mpsimageconvolution/kernelwidth.md): The width of the filter window. Must be an odd number.
- [bias](mpsimageconvolution/bias.md): The value added to a convolved pixel before it is converted back to its intended storage format.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

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

### Convolution Image Filters

- [MPSImageMedian](mpsimagemedian.md): A filter that applies a median filter in a square region centered around each pixel in the source image.
- [MPSImageBox](mpsimagebox.md): A filter that convolves an image with a given kernel of odd width and height.
- [MPSImageTent](mpsimagetent.md): A filter that convolves an image with a tent filter.
- [MPSImageGaussianBlur](mpsimagegaussianblur.md): A filter that convolves an image with a Gaussian blur of a given sigma in both the x and y directions.
- [MPSImageGaussianPyramid](mpsimagegaussianpyramid.md): A filter that convolves an image with a Gaussian pyramid.
- [MPSImageSobel](mpsimagesobel.md): A filter that convolves an image with the Sobel operator.
- [MPSImageLaplacian](mpsimagelaplacian.md): An optimized Laplacian filter, provided for ease of use.
- [MPSImageLaplacianPyramid](mpsimagelaplacianpyramid.md): A filter that convolves an image with a Laplacian filter.
- [MPSImageLaplacianPyramidAdd](mpsimagelaplacianpyramidadd.md): A filter that convolves an image with an additive Laplacian pyramid.
- [MPSImageLaplacianPyramidSubtract](mpsimagelaplacianpyramidsubtract.md): A filter that convolves an image with a subtractive Laplacian pyramid.
- [MPSImagePyramid](mpsimagepyramid.md): A base class for creating different kinds of pyramid images.

# MPSImageConvolution (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that convolves an image with a given kernel of odd width and height.

## Declaration

```objectivec
@interface MPSImageConvolution : MPSUnaryImageKernel
```

<a id="overview"></a>

## Overview

Filter width and height can be either 3, 5, 7 or 9. If there are multiple channels in the source image, each channel is processed independently.

A *separable* convolution filter may perform better when done in two passes. . A convolution filter is separable if the ratio of filter values between all rows is constant over the whole row. For example, this edge detection filter:

![](https://developer.apple.com/images/com.apple.metalperformanceshaders/media-2556905@2x.png)

Can instead be separated into the product of two vectors, like so:

![](https://developer.apple.com/images/com.apple.metalperformanceshaders/media-2556912@2x.png)

And consequently can be done as two, one-dimensional convolution passes back to back on the same image. In this way, the number of multiplies (ignoring the fact that we could skip zeros here) is reduced from `3*3=9` to `3+3=6`. There are similar savings for addition. For large filters, the savings can be profound.

## Topics

### Initializers

- [initWithCoder:device:](mpsimageconvolution/init%28coder_device_%29.md)

### Methods

- [initWithDevice:kernelWidth:kernelHeight:weights:](mpsimageconvolution/init%28device_kernelwidth_kernelheight_weights_%29.md): Initializes a convolution filter.

### Properties

- [kernelHeight](mpsimageconvolution/kernelheight.md): The height of the filter window. Must be an odd number.
- [kernelWidth](mpsimageconvolution/kernelwidth.md): The width of the filter window. Must be an odd number.
- [bias](mpsimageconvolution/bias.md): The value added to a convolved pixel before it is converted back to its intended storage format.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

## See Also

### Convolution Image Filters

- [MPSImageMedian](mpsimagemedian.md): A filter that applies a median filter in a square region centered around each pixel in the source image.
- [MPSImageBox](mpsimagebox.md): A filter that convolves an image with a given kernel of odd width and height.
- [MPSImageTent](mpsimagetent.md): A filter that convolves an image with a tent filter.
- [MPSImageGaussianBlur](mpsimagegaussianblur.md): A filter that convolves an image with a Gaussian blur of a given sigma in both the x and y directions.
- [MPSImageGaussianPyramid](mpsimagegaussianpyramid.md): A filter that convolves an image with a Gaussian pyramid.
- [MPSImageSobel](mpsimagesobel.md): A filter that convolves an image with the Sobel operator.
- [MPSImageLaplacian](mpsimagelaplacian.md): An optimized Laplacian filter, provided for ease of use.
- [MPSImageLaplacianPyramid](mpsimagelaplacianpyramid.md): A filter that convolves an image with a Laplacian filter.
- [MPSImageLaplacianPyramidAdd](mpsimagelaplacianpyramidadd.md): A filter that convolves an image with an additive Laplacian pyramid.
- [MPSImageLaplacianPyramidSubtract](mpsimagelaplacianpyramidsubtract.md): A filter that convolves an image with a subtractive Laplacian pyramid.
- [MPSImagePyramid](mpsimagepyramid.md): A base class for creating different kinds of pyramid images.
