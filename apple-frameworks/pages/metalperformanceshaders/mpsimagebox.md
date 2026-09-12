> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagebox](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagebox)

# MPSImageBox (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that convolves an image with a given kernel of odd width and height.

## Declaration

```swift
class MPSImageBox
```

<a id="overview"></a>

## Overview

The kernel elements all have equal weight, achieving a blur effect (each result is the unweighted average of the surrounding pixels). This allows for much faster algorithms, especially for larger blur radii. The box height and width must be odd numbers.

The box blur is a separable filter and the Metal Performance Shaders framework will act accordingly to give best performance for multi-dimensional blurs.

## Topics

### Initializers

- [init(coder:device:)](mpsimagebox/init%28coder_device_%29.md)

### Methods

- [init(device:kernelWidth:kernelHeight:)](mpsimagebox/init%28device_kernelwidth_kernelheight_%29.md): Initializes a box filter.

### Properties

- [kernelHeight](mpsimagebox/kernelheight.md): The height of the filter window. Must be an odd number.
- [kernelWidth](mpsimagebox/kernelwidth.md): The width of the filter window. Must be an odd number.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

### Inherited By

- [MPSImageTent](mpsimagetent.md)

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

- [MPSImageConvolution](mpsimageconvolution.md): A filter that convolves an image with a given kernel of odd width and height.
- [MPSImageMedian](mpsimagemedian.md): A filter that applies a median filter in a square region centered around each pixel in the source image.
- [MPSImageTent](mpsimagetent.md): A filter that convolves an image with a tent filter.
- [MPSImageGaussianBlur](mpsimagegaussianblur.md): A filter that convolves an image with a Gaussian blur of a given sigma in both the x and y directions.
- [MPSImageGaussianPyramid](mpsimagegaussianpyramid.md): A filter that convolves an image with a Gaussian pyramid.
- [MPSImageSobel](mpsimagesobel.md): A filter that convolves an image with the Sobel operator.
- [MPSImageLaplacian](mpsimagelaplacian.md): An optimized Laplacian filter, provided for ease of use.
- [MPSImageLaplacianPyramid](mpsimagelaplacianpyramid.md): A filter that convolves an image with a Laplacian filter.
- [MPSImageLaplacianPyramidAdd](mpsimagelaplacianpyramidadd.md): A filter that convolves an image with an additive Laplacian pyramid.
- [MPSImageLaplacianPyramidSubtract](mpsimagelaplacianpyramidsubtract.md): A filter that convolves an image with a subtractive Laplacian pyramid.
- [MPSImagePyramid](mpsimagepyramid.md): A base class for creating different kinds of pyramid images.

# MPSImageBox (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that convolves an image with a given kernel of odd width and height.

## Declaration

```objectivec
@interface MPSImageBox : MPSUnaryImageKernel
```

<a id="overview"></a>

## Overview

The kernel elements all have equal weight, achieving a blur effect (each result is the unweighted average of the surrounding pixels). This allows for much faster algorithms, especially for larger blur radii. The box height and width must be odd numbers.

The box blur is a separable filter and the Metal Performance Shaders framework will act accordingly to give best performance for multi-dimensional blurs.

## Topics

### Initializers

- [initWithCoder:device:](mpsimagebox/init%28coder_device_%29.md)

### Methods

- [initWithDevice:kernelWidth:kernelHeight:](mpsimagebox/init%28device_kernelwidth_kernelheight_%29.md): Initializes a box filter.

### Properties

- [kernelHeight](mpsimagebox/kernelheight.md): The height of the filter window. Must be an odd number.
- [kernelWidth](mpsimagebox/kernelwidth.md): The width of the filter window. Must be an odd number.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

### Inherited By

- [MPSImageTent](mpsimagetent.md)

## See Also

### Convolution Image Filters

- [MPSImageConvolution](mpsimageconvolution.md): A filter that convolves an image with a given kernel of odd width and height.
- [MPSImageMedian](mpsimagemedian.md): A filter that applies a median filter in a square region centered around each pixel in the source image.
- [MPSImageTent](mpsimagetent.md): A filter that convolves an image with a tent filter.
- [MPSImageGaussianBlur](mpsimagegaussianblur.md): A filter that convolves an image with a Gaussian blur of a given sigma in both the x and y directions.
- [MPSImageGaussianPyramid](mpsimagegaussianpyramid.md): A filter that convolves an image with a Gaussian pyramid.
- [MPSImageSobel](mpsimagesobel.md): A filter that convolves an image with the Sobel operator.
- [MPSImageLaplacian](mpsimagelaplacian.md): An optimized Laplacian filter, provided for ease of use.
- [MPSImageLaplacianPyramid](mpsimagelaplacianpyramid.md): A filter that convolves an image with a Laplacian filter.
- [MPSImageLaplacianPyramidAdd](mpsimagelaplacianpyramidadd.md): A filter that convolves an image with an additive Laplacian pyramid.
- [MPSImageLaplacianPyramidSubtract](mpsimagelaplacianpyramidsubtract.md): A filter that convolves an image with a subtractive Laplacian pyramid.
- [MPSImagePyramid](mpsimagepyramid.md): A base class for creating different kinds of pyramid images.
