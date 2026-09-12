> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsbinaryimagekernel/primarysourceregion(fordestinationsize:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsbinaryimagekernel/primarysourceregion(fordestinationsize:))

# primarySourceRegion(forDestinationSize:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Determines the region of the primary source texture that will be read for an encode operation.

## Declaration

```swift
func primarySourceRegion(forDestinationSize destinationSize: MTLSize) -> MPSRegion
```

## Parameters

- `destinationSize`: The size of the full virtual destination image.

<a id="return-value"></a>

## Return Value

The area in the virtual source image that will be read.

<a id="Discussion"></a>

## Discussion

This method is used to determine which region of the primary source texture will be read by the [encode(commandBuffer:primaryTexture:secondaryTexture:destinationTexture:)](encode%28commandbuffer_primarytexture_secondarytexture_destinationtexture_%29.md) method when the filter runs. This information may be needed if the primary source image is broken into multiple textures. The size of the full (untiled) destination image is provided. The region of the full (untiled) source image that will be read is returned. You can then piece together an appropriate texture containing that information for use in your tiled context.

This method will consult the [primaryOffset](primaryoffset.md) and [clipRect](cliprect.md) properties to determine the full region read by the function. Other properties, such as kernel height and width, will be consulted as necessary. All properties should be set to their intended values prior to calling this method.

> **Important**

>  This function operates using global image coordinates, but the [encode(commandBuffer:primaryTexture:secondaryTexture:destinationTexture:)](encode%28commandbuffer_primarytexture_secondarytexture_destinationtexture_%29.md) method uses coordinates local to the source and destination image textures. Consequently, the [primaryOffset](primaryoffset.md) and [clipRect](cliprect.md) properties attached to this object will need to be updated using a global-to-local coordinate transform before the [encode(commandBuffer:primaryTexture:secondaryTexture:destinationTexture:)](encode%28commandbuffer_primarytexture_secondarytexture_destinationtexture_%29.md) method is called.

## See Also

### Methods

- [encode(commandBuffer:primaryTexture:inPlaceSecondaryTexture:fallbackCopyAllocator:)](encode%28commandbuffer_primarytexture_inplacesecondarytexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [encode(commandBuffer:inPlacePrimaryTexture:secondaryTexture:fallbackCopyAllocator:)](encode%28commandbuffer_inplaceprimarytexture_secondarytexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [encode(commandBuffer:primaryTexture:secondaryTexture:destinationTexture:)](encode%28commandbuffer_primarytexture_secondarytexture_destinationtexture_%29.md): Encodes a kernel into a command buffer, out-of-place.
- [encode(commandBuffer:primaryImage:secondaryImage:destinationImage:)](encode%28commandbuffer_primaryimage_secondaryimage_destinationimage_%29.md)
- [secondarySourceRegion(forDestinationSize:)](secondarysourceregion%28fordestinationsize_%29.md): Determines the region of the secondary source texture that will be read for an encode operation.

# primarySourceRegionForDestinationSize: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Determines the region of the primary source texture that will be read for an encode operation.

## Declaration

```objectivec
- (MPSRegion) primarySourceRegionForDestinationSize:(MTLSize) destinationSize;
```

## Parameters

- `destinationSize`: The size of the full virtual destination image.

<a id="return-value"></a>

## Return Value

The area in the virtual source image that will be read.

<a id="Discussion"></a>

## Discussion

This method is used to determine which region of the primary source texture will be read by the [encodeToCommandBuffer:primaryTexture:secondaryTexture:destinationTexture:](encode%28commandbuffer_primarytexture_secondarytexture_destinationtexture_%29.md) method when the filter runs. This information may be needed if the primary source image is broken into multiple textures. The size of the full (untiled) destination image is provided. The region of the full (untiled) source image that will be read is returned. You can then piece together an appropriate texture containing that information for use in your tiled context.

This method will consult the [primaryOffset](primaryoffset.md) and [clipRect](cliprect.md) properties to determine the full region read by the function. Other properties, such as kernel height and width, will be consulted as necessary. All properties should be set to their intended values prior to calling this method.

> **Important**

>  This function operates using global image coordinates, but the [encodeToCommandBuffer:primaryTexture:secondaryTexture:destinationTexture:](encode%28commandbuffer_primarytexture_secondarytexture_destinationtexture_%29.md) method uses coordinates local to the source and destination image textures. Consequently, the [primaryOffset](primaryoffset.md) and [clipRect](cliprect.md) properties attached to this object will need to be updated using a global-to-local coordinate transform before the [encodeToCommandBuffer:primaryTexture:secondaryTexture:destinationTexture:](encode%28commandbuffer_primarytexture_secondarytexture_destinationtexture_%29.md) method is called.

## See Also

### Methods

- [encodeToCommandBuffer:primaryTexture:inPlaceSecondaryTexture:fallbackCopyAllocator:](encode%28commandbuffer_primarytexture_inplacesecondarytexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [encodeToCommandBuffer:inPlacePrimaryTexture:secondaryTexture:fallbackCopyAllocator:](encode%28commandbuffer_inplaceprimarytexture_secondarytexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [encodeToCommandBuffer:primaryTexture:secondaryTexture:destinationTexture:](encode%28commandbuffer_primarytexture_secondarytexture_destinationtexture_%29.md): Encodes a kernel into a command buffer, out-of-place.
- [encodeToCommandBuffer:primaryImage:secondaryImage:destinationImage:](encode%28commandbuffer_primaryimage_secondaryimage_destinationimage_%29.md)
- [secondarySourceRegionForDestinationSize:](secondarysourceregion%28fordestinationsize_%29.md): Determines the region of the secondary source texture that will be read for an encode operation.
