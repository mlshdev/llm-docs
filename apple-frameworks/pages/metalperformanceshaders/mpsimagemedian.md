> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagemedian](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagemedian)

# MPSImageMedian (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that applies a median filter in a square region centered around each pixel in the source image.

## Declaration

```swift
class MPSImageMedian
```

<a id="overview"></a>

## Overview

An [MPSImageMedian](mpsimagemedian.md) filter finds the median color value for each channel within a `kernelDiameter * kernelDiameter` window surrounding the pixel of interest.  It is a common means of noise reduction and also as a smoothing filter with edge preserving qualities.

> **Note**

>  The [MPSImageMedian](mpsimagemedian.md) filter supports only images with 8 or less bits per channel.

## Topics

### Initializers

- [init(coder:device:)](mpsimagemedian/init%28coder_device_%29.md)

### Methods

- [init(device:kernelDiameter:)](mpsimagemedian/init%28device_kerneldiameter_%29.md): Initializes a filter for a particular kernel size and device.
- [maxKernelDiameter()](mpsimagemedian/maxkerneldiameter%28%29.md): Queries the maximum diameter, in pixels, of the filter window supported by the median filter.
- [minKernelDiameter()](mpsimagemedian/minkerneldiameter%28%29.md): Queries the minimum diameter, in pixels, of the filter window supported by the median filter.

### Properties

- [kernelDiameter](mpsimagemedian/kerneldiameter.md): The diameter, in pixels, of the filter window.

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

# MPSImageMedian (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that applies a median filter in a square region centered around each pixel in the source image.

## Declaration

```objectivec
@interface MPSImageMedian : MPSUnaryImageKernel
```

<a id="overview"></a>

## Overview

An [MPSImageMedian](mpsimagemedian.md) filter finds the median color value for each channel within a `kernelDiameter * kernelDiameter` window surrounding the pixel of interest.  It is a common means of noise reduction and also as a smoothing filter with edge preserving qualities.

> **Note**

>  The [MPSImageMedian](mpsimagemedian.md) filter supports only images with 8 or less bits per channel.

## Topics

### Initializers

- [initWithCoder:device:](mpsimagemedian/init%28coder_device_%29.md)

### Methods

- [initWithDevice:kernelDiameter:](mpsimagemedian/init%28device_kerneldiameter_%29.md): Initializes a filter for a particular kernel size and device.
- [maxKernelDiameter](mpsimagemedian/maxkerneldiameter%28%29.md): Queries the maximum diameter, in pixels, of the filter window supported by the median filter.
- [minKernelDiameter](mpsimagemedian/minkerneldiameter%28%29.md): Queries the minimum diameter, in pixels, of the filter window supported by the median filter.

### Properties

- [kernelDiameter](mpsimagemedian/kerneldiameter.md): The diameter, in pixels, of the filter window.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

## See Also

### Convolution Image Filters

- [MPSImageConvolution](mpsimageconvolution.md): A filter that convolves an image with a given kernel of odd width and height.
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
