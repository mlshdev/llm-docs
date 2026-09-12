> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageareamax](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageareamax)

# MPSImageAreaMax (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that finds the maximum pixel value in a rectangular region centered around each pixel in the source image.

## Declaration

```swift
class MPSImageAreaMax
```

<a id="overview"></a>

## Overview

If there are multiple channels in the source image, each channel is processed independently. The [edgeMode](mpsunaryimagekernel/edgemode.md) property value is assumed to always be [MPSImageEdgeMode.clamp](mpsimageedgemode/clamp.md) for this filter.

## Topics

### Initializers

- [init(coder:device:)](mpsimageareamax/init%28coder_device_%29.md)

### Methods

- [init(device:kernelWidth:kernelHeight:)](mpsimageareamax/init%28device_kernelwidth_kernelheight_%29.md): Initializes the kernel with a specified width and height.

### Properties

- [kernelHeight](mpsimageareamax/kernelheight.md): The height of the filter window. Must be an odd number.
- [kernelWidth](mpsimageareamax/kernelwidth.md): The width of the filter window. Must be an odd number.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

### Inherited By

- [MPSImageAreaMin](mpsimageareamin.md)

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

### Morphological Image Filters

- [MPSImageDilate](mpsimagedilate.md): A filter that finds the maximum pixel value in a rectangular region by applying a dilation function.
- [MPSImageAreaMin](mpsimageareamin.md): A filter that finds the minimum pixel value in a rectangular region centered around each pixel in the source image.
- [MPSImageErode](mpsimageerode.md): A filter that finds the minimum pixel value in a rectangular region by applying an erosion function.

# MPSImageAreaMax (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that finds the maximum pixel value in a rectangular region centered around each pixel in the source image.

## Declaration

```objectivec
@interface MPSImageAreaMax : MPSUnaryImageKernel
```

<a id="overview"></a>

## Overview

If there are multiple channels in the source image, each channel is processed independently. The [edgeMode](mpsunaryimagekernel/edgemode.md) property value is assumed to always be [MPSImageEdgeModeClamp](mpsimageedgemode/clamp.md) for this filter.

## Topics

### Initializers

- [initWithCoder:device:](mpsimageareamax/init%28coder_device_%29.md)

### Methods

- [initWithDevice:kernelWidth:kernelHeight:](mpsimageareamax/init%28device_kernelwidth_kernelheight_%29.md): Initializes the kernel with a specified width and height.

### Properties

- [kernelHeight](mpsimageareamax/kernelheight.md): The height of the filter window. Must be an odd number.
- [kernelWidth](mpsimageareamax/kernelwidth.md): The width of the filter window. Must be an odd number.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

### Inherited By

- [MPSImageAreaMin](mpsimageareamin.md)

## See Also

### Morphological Image Filters

- [MPSImageDilate](mpsimagedilate.md): A filter that finds the maximum pixel value in a rectangular region by applying a dilation function.
- [MPSImageAreaMin](mpsimageareamin.md): A filter that finds the minimum pixel value in a rectangular region centered around each pixel in the source image.
- [MPSImageErode](mpsimageerode.md): A filter that finds the minimum pixel value in a rectangular region by applying an erosion function.
