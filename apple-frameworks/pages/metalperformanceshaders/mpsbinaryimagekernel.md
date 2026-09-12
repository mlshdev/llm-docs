> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsbinaryimagekernel](https://developer.apple.com/documentation/metalperformanceshaders/mpsbinaryimagekernel)

# MPSBinaryImageKernel (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A kernel that consumes two textures and produces one texture.

## Declaration

```swift
class MPSBinaryImageKernel
```

## Mentioned In

- [The MPSKernel Class](the-mpskernel-class.md)

<a id="overview"></a>

## Overview

[MPSBinaryImageKernel](mpsbinaryimagekernel.md) defines shared behavior for most image processing kernels (filters) such as edging modes, clipping, and tiling support for image operations that consume two source textures. It is not meant to be used directly, but provides API abstraction and in some cases may allow some level of polymorphic manipulation of image kernel objects.

## Topics

### Initializers

- [init(coder:device:)](mpsbinaryimagekernel/init%28coder_device_%29.md)
- [init(device:)](mpsbinaryimagekernel/init%28device_%29.md)

### Methods

- [encode(commandBuffer:primaryTexture:inPlaceSecondaryTexture:fallbackCopyAllocator:)](mpsbinaryimagekernel/encode%28commandbuffer_primarytexture_inplacesecondarytexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [encode(commandBuffer:inPlacePrimaryTexture:secondaryTexture:fallbackCopyAllocator:)](mpsbinaryimagekernel/encode%28commandbuffer_inplaceprimarytexture_secondarytexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [encode(commandBuffer:primaryTexture:secondaryTexture:destinationTexture:)](mpsbinaryimagekernel/encode%28commandbuffer_primarytexture_secondarytexture_destinationtexture_%29.md): Encodes a kernel into a command buffer, out-of-place.
- [encode(commandBuffer:primaryImage:secondaryImage:destinationImage:)](mpsbinaryimagekernel/encode%28commandbuffer_primaryimage_secondaryimage_destinationimage_%29.md)
- [primarySourceRegion(forDestinationSize:)](mpsbinaryimagekernel/primarysourceregion%28fordestinationsize_%29.md): Determines the region of the primary source texture that will be read for an encode operation.
- [secondarySourceRegion(forDestinationSize:)](mpsbinaryimagekernel/secondarysourceregion%28fordestinationsize_%29.md): Determines the region of the secondary source texture that will be read for an encode operation.

### Properties

- [primaryOffset](mpsbinaryimagekernel/primaryoffset.md): The position of the destination clip rectangle origin relative to the primary source buffer.
- [secondaryOffset](mpsbinaryimagekernel/secondaryoffset.md): The position of the destination clip rectangle origin relative to the secondary source buffer.
- [primaryEdgeMode](mpsbinaryimagekernel/primaryedgemode.md): The edge mode to use when texture reads stray off the edge of the primary source image.
- [secondaryEdgeMode](mpsbinaryimagekernel/secondaryedgemode.md): The edge mode to use when texture reads stray off the edge of the secondary source image.
- [clipRect](mpsbinaryimagekernel/cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the rectangle will be overwritten.

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Inherited By

- [MPSImageArithmetic](mpsimagearithmetic.md)

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

- [MPSUnaryImageKernel](mpsunaryimagekernel.md): A kernel that consumes one texture and produces one texture.

# MPSBinaryImageKernel (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A kernel that consumes two textures and produces one texture.

## Declaration

```objectivec
@interface MPSBinaryImageKernel : MPSKernel
```

## Mentioned In

- [The MPSKernel Class](the-mpskernel-class.md)

<a id="overview"></a>

## Overview

[MPSBinaryImageKernel](mpsbinaryimagekernel.md) defines shared behavior for most image processing kernels (filters) such as edging modes, clipping, and tiling support for image operations that consume two source textures. It is not meant to be used directly, but provides API abstraction and in some cases may allow some level of polymorphic manipulation of image kernel objects.

## Topics

### Initializers

- [initWithCoder:device:](mpsbinaryimagekernel/init%28coder_device_%29.md)
- [initWithDevice:](mpsbinaryimagekernel/init%28device_%29.md)

### Methods

- [encodeToCommandBuffer:primaryTexture:inPlaceSecondaryTexture:fallbackCopyAllocator:](mpsbinaryimagekernel/encode%28commandbuffer_primarytexture_inplacesecondarytexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [encodeToCommandBuffer:inPlacePrimaryTexture:secondaryTexture:fallbackCopyAllocator:](mpsbinaryimagekernel/encode%28commandbuffer_inplaceprimarytexture_secondarytexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [encodeToCommandBuffer:primaryTexture:secondaryTexture:destinationTexture:](mpsbinaryimagekernel/encode%28commandbuffer_primarytexture_secondarytexture_destinationtexture_%29.md): Encodes a kernel into a command buffer, out-of-place.
- [encodeToCommandBuffer:primaryImage:secondaryImage:destinationImage:](mpsbinaryimagekernel/encode%28commandbuffer_primaryimage_secondaryimage_destinationimage_%29.md)
- [primarySourceRegionForDestinationSize:](mpsbinaryimagekernel/primarysourceregion%28fordestinationsize_%29.md): Determines the region of the primary source texture that will be read for an encode operation.
- [secondarySourceRegionForDestinationSize:](mpsbinaryimagekernel/secondarysourceregion%28fordestinationsize_%29.md): Determines the region of the secondary source texture that will be read for an encode operation.

### Properties

- [primaryOffset](mpsbinaryimagekernel/primaryoffset.md): The position of the destination clip rectangle origin relative to the primary source buffer.
- [secondaryOffset](mpsbinaryimagekernel/secondaryoffset.md): The position of the destination clip rectangle origin relative to the secondary source buffer.
- [primaryEdgeMode](mpsbinaryimagekernel/primaryedgemode.md): The edge mode to use when texture reads stray off the edge of the primary source image.
- [secondaryEdgeMode](mpsbinaryimagekernel/secondaryedgemode.md): The edge mode to use when texture reads stray off the edge of the secondary source image.
- [clipRect](mpsbinaryimagekernel/cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the rectangle will be overwritten.

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Inherited By

- [MPSImageArithmetic](mpsimagearithmetic.md)

## See Also

### Image Filter Base Classes

- [MPSUnaryImageKernel](mpsunaryimagekernel.md): A kernel that consumes one texture and produces one texture.
