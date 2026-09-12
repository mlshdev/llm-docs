> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsbinaryimagekernel/encode(commandbuffer:primaryimage:secondaryimage:destinationimage:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsbinaryimagekernel/encode(commandbuffer:primaryimage:secondaryimage:destinationimage:))

# encode(commandBuffer:primaryImage:secondaryImage:destinationImage:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, primaryImage: MPSImage, secondaryImage: MPSImage, destinationImage: MPSImage)
```

## See Also

### Methods

- [encode(commandBuffer:primaryTexture:inPlaceSecondaryTexture:fallbackCopyAllocator:)](encode%28commandbuffer_primarytexture_inplacesecondarytexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [encode(commandBuffer:inPlacePrimaryTexture:secondaryTexture:fallbackCopyAllocator:)](encode%28commandbuffer_inplaceprimarytexture_secondarytexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [encode(commandBuffer:primaryTexture:secondaryTexture:destinationTexture:)](encode%28commandbuffer_primarytexture_secondarytexture_destinationtexture_%29.md): Encodes a kernel into a command buffer, out-of-place.
- [primarySourceRegion(forDestinationSize:)](primarysourceregion%28fordestinationsize_%29.md): Determines the region of the primary source texture that will be read for an encode operation.
- [secondarySourceRegion(forDestinationSize:)](secondarysourceregion%28fordestinationsize_%29.md): Determines the region of the secondary source texture that will be read for an encode operation.

# encodeToCommandBuffer:primaryImage:secondaryImage:destinationImage: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer primaryImage:(MPSImage *) primaryImage secondaryImage:(MPSImage *) secondaryImage destinationImage:(MPSImage *) destinationImage;
```

## See Also

### Methods

- [encodeToCommandBuffer:primaryTexture:inPlaceSecondaryTexture:fallbackCopyAllocator:](encode%28commandbuffer_primarytexture_inplacesecondarytexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [encodeToCommandBuffer:inPlacePrimaryTexture:secondaryTexture:fallbackCopyAllocator:](encode%28commandbuffer_inplaceprimarytexture_secondarytexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [encodeToCommandBuffer:primaryTexture:secondaryTexture:destinationTexture:](encode%28commandbuffer_primarytexture_secondarytexture_destinationtexture_%29.md): Encodes a kernel into a command buffer, out-of-place.
- [primarySourceRegionForDestinationSize:](primarysourceregion%28fordestinationsize_%29.md): Determines the region of the primary source texture that will be read for an encode operation.
- [secondarySourceRegionForDestinationSize:](secondarysourceregion%28fordestinationsize_%29.md): Determines the region of the secondary source texture that will be read for an encode operation.
