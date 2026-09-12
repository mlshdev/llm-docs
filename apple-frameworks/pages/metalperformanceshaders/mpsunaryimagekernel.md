> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsunaryimagekernel](https://developer.apple.com/documentation/metalperformanceshaders/mpsunaryimagekernel)

# MPSUnaryImageKernel (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A kernel that consumes one texture and produces one texture.

## Declaration

```swift
class MPSUnaryImageKernel
```

## Mentioned In

- [The MPSKernel Class](the-mpskernel-class.md)

<a id="overview"></a>

## Overview

[MPSUnaryImageKernel](mpsunaryimagekernel.md) defines shared behavior for most image processing kernels (filters) such as edging modes, clipping, and tiling support for image operations that consumes a single source textures. It is not meant to be used directly, but provides API abstraction and in some cases may allow some level of polymorphic manipulation of image kernel objects.

## Topics

### Initializers

- [init(coder:device:)](mpsunaryimagekernel/init%28coder_device_%29.md)
- [init(device:)](mpsunaryimagekernel/init%28device_%29.md)

### Methods

- [encode(commandBuffer:inPlaceTexture:fallbackCopyAllocator:)](mpsunaryimagekernel/encode%28commandbuffer_inplacetexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [MPSCopyAllocator](mpscopyallocator.md): A block to make a copy of a source texture for filters that can only execute out of place.
- [encode(commandBuffer:sourceImage:destinationImage:)](mpsunaryimagekernel/encode%28commandbuffer_sourceimage_destinationimage_%29.md)
- [encode(commandBuffer:sourceTexture:destinationTexture:)](mpsunaryimagekernel/encode%28commandbuffer_sourcetexture_destinationtexture_%29.md): Encodes a kernel into a command buffer, out of place.
- [sourceRegion(destinationSize:)](mpsunaryimagekernel/sourceregion%28destinationsize_%29.md): Determines the region of the source texture that will be read for an encode operation.

### Properties

- [offset](mpsunaryimagekernel/offset.md): The position of the destination clip rectangle origin relative to the source buffer.
- [MPSOffset](mpsoffset.md): A signed coordinate with x, y, and z components.
- [clipRect](mpsunaryimagekernel/cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the rectangle will be overwritten.
- [MPSRegion](mpsregion.md): A region of an image.
- [edgeMode](mpsunaryimagekernel/edgemode.md): The edge mode to use when texture reads stray off the edge of an image.
- [MPSImageEdgeMode](mpsimageedgemode.md): The options used to control the edge behavior of an image filter when it reads outside the bounds of a source texture.

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Inherited By

- [MPSImageAreaMax](mpsimageareamax.md)
- [MPSImageBox](mpsimagebox.md)
- [MPSImageCanny](mpsimagecanny.md)
- [MPSImageConversion](mpsimageconversion.md)
- [MPSImageConvolution](mpsimageconvolution.md)
- [MPSImageDilate](mpsimagedilate.md)
- [MPSImageEuclideanDistanceTransform](mpsimageeuclideandistancetransform.md)
- [MPSImageGaussianBlur](mpsimagegaussianblur.md)
- [MPSImageHistogramEqualization](mpsimagehistogramequalization.md)
- [MPSImageHistogramSpecification](mpsimagehistogramspecification.md)
- [MPSImageIntegral](mpsimageintegral.md)
- [MPSImageIntegralOfSquares](mpsimageintegralofsquares.md)
- [MPSImageLaplacian](mpsimagelaplacian.md)
- [MPSImageMedian](mpsimagemedian.md)
- [MPSImagePyramid](mpsimagepyramid.md)
- [MPSImageReduceUnary](mpsimagereduceunary.md)
- [MPSImageScale](mpsimagescale.md)
- [MPSImageSobel](mpsimagesobel.md)
- [MPSImageStatisticsMean](mpsimagestatisticsmean.md)
- [MPSImageStatisticsMeanAndVariance](mpsimagestatisticsmeanandvariance.md)
- [MPSImageStatisticsMinAndMax](mpsimagestatisticsminandmax.md)
- [MPSImageThresholdBinary](mpsimagethresholdbinary.md)
- [MPSImageThresholdBinaryInverse](mpsimagethresholdbinaryinverse.md)
- [MPSImageThresholdToZero](mpsimagethresholdtozero.md)
- [MPSImageThresholdToZeroInverse](mpsimagethresholdtozeroinverse.md)
- [MPSImageThresholdTruncate](mpsimagethresholdtruncate.md)
- [MPSImageTranspose](mpsimagetranspose.md)

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

### Image Filter Base Classes

- [MPSBinaryImageKernel](mpsbinaryimagekernel.md): A kernel that consumes two textures and produces one texture.

# MPSUnaryImageKernel (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A kernel that consumes one texture and produces one texture.

## Declaration

```objectivec
@interface MPSUnaryImageKernel : MPSKernel
```

## Mentioned In

- [The MPSKernel Class](the-mpskernel-class.md)

<a id="overview"></a>

## Overview

[MPSUnaryImageKernel](mpsunaryimagekernel.md) defines shared behavior for most image processing kernels (filters) such as edging modes, clipping, and tiling support for image operations that consumes a single source textures. It is not meant to be used directly, but provides API abstraction and in some cases may allow some level of polymorphic manipulation of image kernel objects.

## Topics

### Initializers

- [initWithCoder:device:](mpsunaryimagekernel/init%28coder_device_%29.md)
- [initWithDevice:](mpsunaryimagekernel/init%28device_%29.md)

### Methods

- [encodeToCommandBuffer:inPlaceTexture:fallbackCopyAllocator:](mpsunaryimagekernel/encode%28commandbuffer_inplacetexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [MPSCopyAllocator](mpscopyallocator.md): A block to make a copy of a source texture for filters that can only execute out of place.
- [encodeToCommandBuffer:sourceImage:destinationImage:](mpsunaryimagekernel/encode%28commandbuffer_sourceimage_destinationimage_%29.md)
- [encodeToCommandBuffer:sourceTexture:destinationTexture:](mpsunaryimagekernel/encode%28commandbuffer_sourcetexture_destinationtexture_%29.md): Encodes a kernel into a command buffer, out of place.
- [sourceRegionForDestinationSize:](mpsunaryimagekernel/sourceregion%28destinationsize_%29.md): Determines the region of the source texture that will be read for an encode operation.

### Properties

- [offset](mpsunaryimagekernel/offset.md): The position of the destination clip rectangle origin relative to the source buffer.
- [MPSOffset](mpsoffset.md): A signed coordinate with x, y, and z components.
- [clipRect](mpsunaryimagekernel/cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the rectangle will be overwritten.
- [MPSRegion](mpsregion.md): A region of an image.
- [edgeMode](mpsunaryimagekernel/edgemode.md): The edge mode to use when texture reads stray off the edge of an image.
- [MPSImageEdgeMode](mpsimageedgemode.md): The options used to control the edge behavior of an image filter when it reads outside the bounds of a source texture.

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Inherited By

- [MPSImageAreaMax](mpsimageareamax.md)
- [MPSImageBox](mpsimagebox.md)
- [MPSImageCanny](mpsimagecanny.md)
- [MPSImageConversion](mpsimageconversion.md)
- [MPSImageConvolution](mpsimageconvolution.md)
- [MPSImageDilate](mpsimagedilate.md)
- [MPSImageEuclideanDistanceTransform](mpsimageeuclideandistancetransform.md)
- [MPSImageGaussianBlur](mpsimagegaussianblur.md)
- [MPSImageHistogramEqualization](mpsimagehistogramequalization.md)
- [MPSImageHistogramSpecification](mpsimagehistogramspecification.md)
- [MPSImageIntegral](mpsimageintegral.md)
- [MPSImageIntegralOfSquares](mpsimageintegralofsquares.md)
- [MPSImageLaplacian](mpsimagelaplacian.md)
- [MPSImageMedian](mpsimagemedian.md)
- [MPSImagePyramid](mpsimagepyramid.md)
- [MPSImageReduceUnary](mpsimagereduceunary.md)
- [MPSImageScale](mpsimagescale.md)
- [MPSImageSobel](mpsimagesobel.md)
- [MPSImageStatisticsMean](mpsimagestatisticsmean.md)
- [MPSImageStatisticsMeanAndVariance](mpsimagestatisticsmeanandvariance.md)
- [MPSImageStatisticsMinAndMax](mpsimagestatisticsminandmax.md)
- [MPSImageThresholdBinary](mpsimagethresholdbinary.md)
- [MPSImageThresholdBinaryInverse](mpsimagethresholdbinaryinverse.md)
- [MPSImageThresholdToZero](mpsimagethresholdtozero.md)
- [MPSImageThresholdToZeroInverse](mpsimagethresholdtozeroinverse.md)
- [MPSImageThresholdTruncate](mpsimagethresholdtruncate.md)
- [MPSImageTranspose](mpsimagetranspose.md)

## See Also

### Image Filter Base Classes

- [MPSBinaryImageKernel](mpsbinaryimagekernel.md): A kernel that consumes two textures and produces one texture.
