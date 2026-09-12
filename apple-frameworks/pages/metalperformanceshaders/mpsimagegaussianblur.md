> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagegaussianblur](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagegaussianblur)

# MPSImageGaussianBlur (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that convolves an image with a Gaussian blur of a given sigma in both the x and y directions.

## Declaration

```swift
class MPSImageGaussianBlur
```

## Mentioned In

- [The MPSKernel Class](the-mpskernel-class.md)

<a id="overview"></a>

## Overview

> **Note**

>  The Gaussian blur utilizes a very fast algorithm that typically runs at approximately half the speed of copy speeds. Notably, it is faster than either the tent or box blur except perhaps for very large filter windows. Mathematically, it is an approximate Gaussian. Some non-Gaussian behavior may be detectable with advanced analytical methods such as FFT.
>
> If an analytically clean Gaussian filter is required, use the [MPSImageConvolution](mpsimageconvolution.md) filter instead with an appropriate set of weights. The [MPSImageGaussianBlur](mpsimagegaussianblur.md) filter is intended to be suitable for all common image processing needs demanding ~10 bits of precision or less.

## Topics

### Initializers

- [init(coder:device:)](mpsimagegaussianblur/init%28coder_device_%29.md)

### Methods

- [init(device:sigma:)](mpsimagegaussianblur/init%28device_sigma_%29.md): Initializes a Gaussian blur filter.

### Properties

- [sigma](mpsimagegaussianblur/sigma.md): The sigma value with which the filter was created.

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

- [MPSImageConvolution](mpsimageconvolution.md): A filter that convolves an image with a given kernel of odd width and height.
- [MPSImageMedian](mpsimagemedian.md): A filter that applies a median filter in a square region centered around each pixel in the source image.
- [MPSImageBox](mpsimagebox.md): A filter that convolves an image with a given kernel of odd width and height.
- [MPSImageTent](mpsimagetent.md): A filter that convolves an image with a tent filter.
- [MPSImageGaussianPyramid](mpsimagegaussianpyramid.md): A filter that convolves an image with a Gaussian pyramid.
- [MPSImageSobel](mpsimagesobel.md): A filter that convolves an image with the Sobel operator.
- [MPSImageLaplacian](mpsimagelaplacian.md): An optimized Laplacian filter, provided for ease of use.
- [MPSImageLaplacianPyramid](mpsimagelaplacianpyramid.md): A filter that convolves an image with a Laplacian filter.
- [MPSImageLaplacianPyramidAdd](mpsimagelaplacianpyramidadd.md): A filter that convolves an image with an additive Laplacian pyramid.
- [MPSImageLaplacianPyramidSubtract](mpsimagelaplacianpyramidsubtract.md): A filter that convolves an image with a subtractive Laplacian pyramid.
- [MPSImagePyramid](mpsimagepyramid.md): A base class for creating different kinds of pyramid images.

# MPSImageGaussianBlur (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that convolves an image with a Gaussian blur of a given sigma in both the x and y directions.

## Declaration

```objectivec
@interface MPSImageGaussianBlur : MPSUnaryImageKernel
```

## Mentioned In

- [The MPSKernel Class](the-mpskernel-class.md)

<a id="overview"></a>

## Overview

> **Note**

>  The Gaussian blur utilizes a very fast algorithm that typically runs at approximately half the speed of copy speeds. Notably, it is faster than either the tent or box blur except perhaps for very large filter windows. Mathematically, it is an approximate Gaussian. Some non-Gaussian behavior may be detectable with advanced analytical methods such as FFT.
>
> If an analytically clean Gaussian filter is required, use the [MPSImageConvolution](mpsimageconvolution.md) filter instead with an appropriate set of weights. The [MPSImageGaussianBlur](mpsimagegaussianblur.md) filter is intended to be suitable for all common image processing needs demanding ~10 bits of precision or less.

## Topics

### Initializers

- [initWithCoder:device:](mpsimagegaussianblur/init%28coder_device_%29.md)

### Methods

- [initWithDevice:sigma:](mpsimagegaussianblur/init%28device_sigma_%29.md): Initializes a Gaussian blur filter.

### Properties

- [sigma](mpsimagegaussianblur/sigma.md): The sigma value with which the filter was created.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

## See Also

### Convolution Image Filters

- [MPSImageConvolution](mpsimageconvolution.md): A filter that convolves an image with a given kernel of odd width and height.
- [MPSImageMedian](mpsimagemedian.md): A filter that applies a median filter in a square region centered around each pixel in the source image.
- [MPSImageBox](mpsimagebox.md): A filter that convolves an image with a given kernel of odd width and height.
- [MPSImageTent](mpsimagetent.md): A filter that convolves an image with a tent filter.
- [MPSImageGaussianPyramid](mpsimagegaussianpyramid.md): A filter that convolves an image with a Gaussian pyramid.
- [MPSImageSobel](mpsimagesobel.md): A filter that convolves an image with the Sobel operator.
- [MPSImageLaplacian](mpsimagelaplacian.md): An optimized Laplacian filter, provided for ease of use.
- [MPSImageLaplacianPyramid](mpsimagelaplacianpyramid.md): A filter that convolves an image with a Laplacian filter.
- [MPSImageLaplacianPyramidAdd](mpsimagelaplacianpyramidadd.md): A filter that convolves an image with an additive Laplacian pyramid.
- [MPSImageLaplacianPyramidSubtract](mpsimagelaplacianpyramidsubtract.md): A filter that convolves an image with a subtractive Laplacian pyramid.
- [MPSImagePyramid](mpsimagepyramid.md): A base class for creating different kinds of pyramid images.
