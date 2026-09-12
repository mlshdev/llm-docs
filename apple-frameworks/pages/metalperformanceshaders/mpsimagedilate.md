> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagedilate](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagedilate)

# MPSImageDilate (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that finds the maximum pixel value in a rectangular region by applying a dilation function.

## Declaration

```swift
class MPSImageDilate
```

<a id="overview"></a>

## Overview

An [MPSImageDilate](mpsimagedilate.md) filter behaves like the [MPSImageAreaMax](mpsimageareamax.md) filter, except Metal calculates the intensity at each position relative to a different value before determining which is the maximum pixel value, allowing for shaped, nonrectangular morphological probes.

The code example below shows pseudocode for the calculation that returns each pixel value:

```other
for each pixel in the filter window
    value = pixel[filterY][filterX] - filter[filterY*filter_width+filterX]
    if( value > bestValue ){
        result = value
        bestValue = value
    }
```

A filter that contains all zeros is identical to an [MPSImageAreaMax](mpsimageareamax.md) filter. Metal handles the center filter element as `0` to avoid causing a general darkening of the image, and it handles the [edgeMode](mpsunaryimagekernel/edgemode.md) property  as [MPSImageEdgeMode.clamp](mpsimageedgemode/clamp.md) for this filter.

## Topics

### Initializers

- [init(coder:device:)](mpsimagedilate/init%28coder_device_%29.md)

### Methods

- [init(device:kernelWidth:kernelHeight:values:)](mpsimagedilate/init%28device_kernelwidth_kernelheight_values_%29.md): Initializes the kernel with a specified width, height, and weight values.

### Properties

- [kernelHeight](mpsimagedilate/kernelheight.md): The height of the filter window. which must be an odd number.
- [kernelWidth](mpsimagedilate/kernelwidth.md): The width of the filter window which must be an odd number.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

### Inherited By

- [MPSImageErode](mpsimageerode.md)

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

- [MPSImageAreaMax](mpsimageareamax.md): A filter that finds the maximum pixel value in a rectangular region centered around each pixel in the source image.
- [MPSImageAreaMin](mpsimageareamin.md): A filter that finds the minimum pixel value in a rectangular region centered around each pixel in the source image.
- [MPSImageErode](mpsimageerode.md): A filter that finds the minimum pixel value in a rectangular region by applying an erosion function.

# MPSImageDilate (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that finds the maximum pixel value in a rectangular region by applying a dilation function.

## Declaration

```objectivec
@interface MPSImageDilate : MPSUnaryImageKernel
```

<a id="overview"></a>

## Overview

An [MPSImageDilate](mpsimagedilate.md) filter behaves like the [MPSImageAreaMax](mpsimageareamax.md) filter, except Metal calculates the intensity at each position relative to a different value before determining which is the maximum pixel value, allowing for shaped, nonrectangular morphological probes.

The code example below shows pseudocode for the calculation that returns each pixel value:

```other
for each pixel in the filter window
    value = pixel[filterY][filterX] - filter[filterY*filter_width+filterX]
    if( value > bestValue ){
        result = value
        bestValue = value
    }
```

A filter that contains all zeros is identical to an [MPSImageAreaMax](mpsimageareamax.md) filter. Metal handles the center filter element as `0` to avoid causing a general darkening of the image, and it handles the [edgeMode](mpsunaryimagekernel/edgemode.md) property  as [MPSImageEdgeModeClamp](mpsimageedgemode/clamp.md) for this filter.

## Topics

### Initializers

- [initWithCoder:device:](mpsimagedilate/init%28coder_device_%29.md)

### Methods

- [initWithDevice:kernelWidth:kernelHeight:values:](mpsimagedilate/init%28device_kernelwidth_kernelheight_values_%29.md): Initializes the kernel with a specified width, height, and weight values.

### Properties

- [kernelHeight](mpsimagedilate/kernelheight.md): The height of the filter window. which must be an odd number.
- [kernelWidth](mpsimagedilate/kernelwidth.md): The width of the filter window which must be an odd number.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

### Inherited By

- [MPSImageErode](mpsimageerode.md)

## See Also

### Morphological Image Filters

- [MPSImageAreaMax](mpsimageareamax.md): A filter that finds the maximum pixel value in a rectangular region centered around each pixel in the source image.
- [MPSImageAreaMin](mpsimageareamin.md): A filter that finds the minimum pixel value in a rectangular region centered around each pixel in the source image.
- [MPSImageErode](mpsimageerode.md): A filter that finds the minimum pixel value in a rectangular region by applying an erosion function.
