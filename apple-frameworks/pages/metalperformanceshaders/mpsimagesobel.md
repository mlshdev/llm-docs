> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagesobel](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagesobel)

# MPSImageSobel (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that convolves an image with the Sobel operator.

## Declaration

```swift
class MPSImageSobel
```

<a id="overview"></a>

## Overview

When the color model (e.g. RGB, two-channel, grayscale, etc.) of the source and destination textures match, the filter is applied to each color channel separately. If the destination is single-channel (i.e. monochrome) but the source is multi-channel, the pixel values are converted to grayscale before applying the Sobel operator by using the linear gray color transform vector `v` shown in the code listing below.

```objc
Luminance = v[0] * pixel.x + v[1] * pixel.y + v[2] * pixel.z
```

## Topics

### Initializers

- [init(coder:device:)](mpsimagesobel/init%28coder_device_%29.md)

### Methods

- [init(device:)](mpsimagesobel/init%28device_%29.md): Initializes a Sobel filter on a given device using the default color transform.
- [init(device:linearGrayColorTransform:)](mpsimagesobel/init%28device_lineargraycolortransform_%29.md): Initializes a Sobel filter on a given device using a specific color transform.

### Properties

- [colorTransform](mpsimagesobel/colortransform.md): The color transform used to initialize the Sobel filter.

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
- [MPSImageGaussianBlur](mpsimagegaussianblur.md): A filter that convolves an image with a Gaussian blur of a given sigma in both the x and y directions.
- [MPSImageGaussianPyramid](mpsimagegaussianpyramid.md): A filter that convolves an image with a Gaussian pyramid.
- [MPSImageLaplacian](mpsimagelaplacian.md): An optimized Laplacian filter, provided for ease of use.
- [MPSImageLaplacianPyramid](mpsimagelaplacianpyramid.md): A filter that convolves an image with a Laplacian filter.
- [MPSImageLaplacianPyramidAdd](mpsimagelaplacianpyramidadd.md): A filter that convolves an image with an additive Laplacian pyramid.
- [MPSImageLaplacianPyramidSubtract](mpsimagelaplacianpyramidsubtract.md): A filter that convolves an image with a subtractive Laplacian pyramid.
- [MPSImagePyramid](mpsimagepyramid.md): A base class for creating different kinds of pyramid images.

# MPSImageSobel (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that convolves an image with the Sobel operator.

## Declaration

```objectivec
@interface MPSImageSobel : MPSUnaryImageKernel
```

<a id="overview"></a>

## Overview

When the color model (e.g. RGB, two-channel, grayscale, etc.) of the source and destination textures match, the filter is applied to each color channel separately. If the destination is single-channel (i.e. monochrome) but the source is multi-channel, the pixel values are converted to grayscale before applying the Sobel operator by using the linear gray color transform vector `v` shown in the code listing below.

```objc
Luminance = v[0] * pixel.x + v[1] * pixel.y + v[2] * pixel.z
```

## Topics

### Initializers

- [initWithCoder:device:](mpsimagesobel/init%28coder_device_%29.md)

### Methods

- [initWithDevice:](mpsimagesobel/init%28device_%29.md): Initializes a Sobel filter on a given device using the default color transform.
- [initWithDevice:linearGrayColorTransform:](mpsimagesobel/init%28device_lineargraycolortransform_%29.md): Initializes a Sobel filter on a given device using a specific color transform.

### Properties

- [colorTransform](mpsimagesobel/colortransform.md): The color transform used to initialize the Sobel filter.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

## See Also

### Convolution Image Filters

- [MPSImageConvolution](mpsimageconvolution.md): A filter that convolves an image with a given kernel of odd width and height.
- [MPSImageMedian](mpsimagemedian.md): A filter that applies a median filter in a square region centered around each pixel in the source image.
- [MPSImageBox](mpsimagebox.md): A filter that convolves an image with a given kernel of odd width and height.
- [MPSImageTent](mpsimagetent.md): A filter that convolves an image with a tent filter.
- [MPSImageGaussianBlur](mpsimagegaussianblur.md): A filter that convolves an image with a Gaussian blur of a given sigma in both the x and y directions.
- [MPSImageGaussianPyramid](mpsimagegaussianpyramid.md): A filter that convolves an image with a Gaussian pyramid.
- [MPSImageLaplacian](mpsimagelaplacian.md): An optimized Laplacian filter, provided for ease of use.
- [MPSImageLaplacianPyramid](mpsimagelaplacianpyramid.md): A filter that convolves an image with a Laplacian filter.
- [MPSImageLaplacianPyramidAdd](mpsimagelaplacianpyramidadd.md): A filter that convolves an image with an additive Laplacian pyramid.
- [MPSImageLaplacianPyramidSubtract](mpsimagelaplacianpyramidsubtract.md): A filter that convolves an image with a subtractive Laplacian pyramid.
- [MPSImagePyramid](mpsimagepyramid.md): A base class for creating different kinds of pyramid images.
