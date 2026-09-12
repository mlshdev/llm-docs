> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagepyramid](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagepyramid)

# MPSImagePyramid (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A base class for creating different kinds of pyramid images.

## Declaration

```swift
class MPSImagePyramid
```

## Topics

### Initializers

- [init(coder:device:)](mpsimagepyramid/init%28coder_device_%29.md)

### Methods

- [init(device:)](mpsimagepyramid/init%28device_%29.md): Initializes a downwards 5-tap image pyramid with the default filter kernel and device.
- [init(device:centerWeight:)](mpsimagepyramid/init%28device_centerweight_%29.md): Initialize a downwards 5-tap image pyramid with a central weight parameter and device.
- [init(device:kernelWidth:kernelHeight:weights:)](mpsimagepyramid/init%28device_kernelwidth_kernelheight_weights_%29.md): Initialize a downwards n-tap image pyramid with a custom filter kernel and device.

### Properties

- [kernelWidth](mpsimagepyramid/kernelwidth.md): The width of the filter window. Must be an odd number.
- [kernelHeight](mpsimagepyramid/kernelheight.md): The height of the filter window. Must be an odd number.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

### Inherited By

- [MPSImageGaussianPyramid](mpsimagegaussianpyramid.md)
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
- [MPSImageLaplacianPyramidSubtract](mpsimagelaplacianpyramidsubtract.md): A filter that convolves an image with a subtractive Laplacian pyramid.

# MPSImagePyramid (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A base class for creating different kinds of pyramid images.

## Declaration

```objectivec
@interface MPSImagePyramid : MPSUnaryImageKernel
```

## Topics

### Initializers

- [initWithCoder:device:](mpsimagepyramid/init%28coder_device_%29.md)

### Methods

- [initWithDevice:](mpsimagepyramid/init%28device_%29.md): Initializes a downwards 5-tap image pyramid with the default filter kernel and device.
- [initWithDevice:centerWeight:](mpsimagepyramid/init%28device_centerweight_%29.md): Initialize a downwards 5-tap image pyramid with a central weight parameter and device.
- [initWithDevice:kernelWidth:kernelHeight:weights:](mpsimagepyramid/init%28device_kernelwidth_kernelheight_weights_%29.md): Initialize a downwards n-tap image pyramid with a custom filter kernel and device.

### Properties

- [kernelWidth](mpsimagepyramid/kernelwidth.md): The width of the filter window. Must be an odd number.
- [kernelHeight](mpsimagepyramid/kernelheight.md): The height of the filter window. Must be an odd number.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

### Inherited By

- [MPSImageGaussianPyramid](mpsimagegaussianpyramid.md)
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
- [MPSImageLaplacianPyramidSubtract](mpsimagelaplacianpyramidsubtract.md): A filter that convolves an image with a subtractive Laplacian pyramid.
