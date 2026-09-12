> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagelaplacianpyramid](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagelaplacianpyramid)

# MPSImageLaplacianPyramid (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A filter that convolves an image with a Laplacian filter.

## Declaration

```swift
class MPSImageLaplacianPyramid
```

## Topics

### Instance Properties

- [laplacianBias](mpsimagelaplacianpyramid/laplacianbias.md)
- [laplacianScale](mpsimagelaplacianpyramid/laplacianscale.md)

## Relationships

### Inherits From

- [MPSImagePyramid](mpsimagepyramid.md)

### Inherited By

- [MPSImageLaplacianPyramidAdd](mpsimagelaplacianpyramidadd.md)
- [MPSImageLaplacianPyramidSubtract](mpsimagelaplacianpyramidsubtract.md)

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
- [MPSImageLaplacianPyramidAdd](mpsimagelaplacianpyramidadd.md): A filter that convolves an image with an additive Laplacian pyramid.
- [MPSImageLaplacianPyramidSubtract](mpsimagelaplacianpyramidsubtract.md): A filter that convolves an image with a subtractive Laplacian pyramid.
- [MPSImagePyramid](mpsimagepyramid.md): A base class for creating different kinds of pyramid images.

# MPSImageLaplacianPyramid (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A filter that convolves an image with a Laplacian filter.

## Declaration

```objectivec
@interface MPSImageLaplacianPyramid : MPSImagePyramid
```

## Topics

### Instance Properties

- [laplacianBias](mpsimagelaplacianpyramid/laplacianbias.md)
- [laplacianScale](mpsimagelaplacianpyramid/laplacianscale.md)

## Relationships

### Inherits From

- [MPSImagePyramid](mpsimagepyramid.md)

### Inherited By

- [MPSImageLaplacianPyramidAdd](mpsimagelaplacianpyramidadd.md)
- [MPSImageLaplacianPyramidSubtract](mpsimagelaplacianpyramidsubtract.md)

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
- [MPSImageLaplacianPyramidAdd](mpsimagelaplacianpyramidadd.md): A filter that convolves an image with an additive Laplacian pyramid.
- [MPSImageLaplacianPyramidSubtract](mpsimagelaplacianpyramidsubtract.md): A filter that convolves an image with a subtractive Laplacian pyramid.
- [MPSImagePyramid](mpsimagepyramid.md): A base class for creating different kinds of pyramid images.
