> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagelaplacianpyramidsubtract](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagelaplacianpyramidsubtract)

# MPSImageLaplacianPyramidSubtract (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A filter that convolves an image with a subtractive Laplacian pyramid.

## Declaration

```swift
class MPSImageLaplacianPyramidSubtract
```

## Relationships

### Inherits From

- [MPSImageLaplacianPyramid](mpsimagelaplacianpyramid.md)

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
- [MPSImageSobel](mpsimagesobel.md): A filter that convolves an image with the Sobel operator.
- [MPSImageLaplacian](mpsimagelaplacian.md): An optimized Laplacian filter, provided for ease of use.
- [MPSImageLaplacianPyramid](mpsimagelaplacianpyramid.md): A filter that convolves an image with a Laplacian filter.
- [MPSImageLaplacianPyramidAdd](mpsimagelaplacianpyramidadd.md): A filter that convolves an image with an additive Laplacian pyramid.
- [MPSImagePyramid](mpsimagepyramid.md): A base class for creating different kinds of pyramid images.

# MPSImageLaplacianPyramidSubtract (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A filter that convolves an image with a subtractive Laplacian pyramid.

## Declaration

```objectivec
@interface MPSImageLaplacianPyramidSubtract : MPSImageLaplacianPyramid
```

## Relationships

### Inherits From

- [MPSImageLaplacianPyramid](mpsimagelaplacianpyramid.md)

## See Also

### Convolution Image Filters

- [MPSImageConvolution](mpsimageconvolution.md): A filter that convolves an image with a given kernel of odd width and height.
- [MPSImageMedian](mpsimagemedian.md): A filter that applies a median filter in a square region centered around each pixel in the source image.
- [MPSImageBox](mpsimagebox.md): A filter that convolves an image with a given kernel of odd width and height.
- [MPSImageTent](mpsimagetent.md): A filter that convolves an image with a tent filter.
- [MPSImageGaussianBlur](mpsimagegaussianblur.md): A filter that convolves an image with a Gaussian blur of a given sigma in both the x and y directions.
- [MPSImageGaussianPyramid](mpsimagegaussianpyramid.md): A filter that convolves an image with a Gaussian pyramid.
- [MPSImageSobel](mpsimagesobel.md): A filter that convolves an image with the Sobel operator.
- [MPSImageLaplacian](mpsimagelaplacian.md): An optimized Laplacian filter, provided for ease of use.
- [MPSImageLaplacianPyramid](mpsimagelaplacianpyramid.md): A filter that convolves an image with a Laplacian filter.
- [MPSImageLaplacianPyramidAdd](mpsimagelaplacianpyramidadd.md): A filter that convolves an image with an additive Laplacian pyramid.
- [MPSImagePyramid](mpsimagepyramid.md): A base class for creating different kinds of pyramid images.
