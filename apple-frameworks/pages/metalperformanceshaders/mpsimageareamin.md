> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageareamin](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageareamin)

# MPSImageAreaMin (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that finds the minimum pixel value in a rectangular region centered around each pixel in the source image.

## Declaration

```swift
class MPSImageAreaMin
```

<a id="overview"></a>

## Overview

An [MPSImageAreaMin](mpsimageareamin.md) filter has the same methods and properties as the [MPSImageAreaMax](mpsimageareamax.md) class.

If there are multiple channels in the source image, each channel is processed independently. The [edgeMode](mpsunaryimagekernel/edgemode.md) property value is assumed to always be [MPSImageEdgeMode.clamp](mpsimageedgemode/clamp.md) for this filter.

## Relationships

### Inherits From

- [MPSImageAreaMax](mpsimageareamax.md)

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
- [MPSImageDilate](mpsimagedilate.md): A filter that finds the maximum pixel value in a rectangular region by applying a dilation function.
- [MPSImageErode](mpsimageerode.md): A filter that finds the minimum pixel value in a rectangular region by applying an erosion function.

# MPSImageAreaMin (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that finds the minimum pixel value in a rectangular region centered around each pixel in the source image.

## Declaration

```objectivec
@interface MPSImageAreaMin : MPSImageAreaMax
```

<a id="overview"></a>

## Overview

An [MPSImageAreaMin](mpsimageareamin.md) filter has the same methods and properties as the [MPSImageAreaMax](mpsimageareamax.md) class.

If there are multiple channels in the source image, each channel is processed independently. The [edgeMode](mpsunaryimagekernel/edgemode.md) property value is assumed to always be [MPSImageEdgeModeClamp](mpsimageedgemode/clamp.md) for this filter.

## Relationships

### Inherits From

- [MPSImageAreaMax](mpsimageareamax.md)

## See Also

### Morphological Image Filters

- [MPSImageAreaMax](mpsimageareamax.md): A filter that finds the maximum pixel value in a rectangular region centered around each pixel in the source image.
- [MPSImageDilate](mpsimagedilate.md): A filter that finds the maximum pixel value in a rectangular region by applying a dilation function.
- [MPSImageErode](mpsimageerode.md): A filter that finds the minimum pixel value in a rectangular region by applying an erosion function.
