> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsbinaryimagekernel/encode(commandbuffer:primarytexture:secondarytexture:destinationtexture:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsbinaryimagekernel/encode(commandbuffer:primarytexture:secondarytexture:destinationtexture:))

# encode(commandBuffer:primaryTexture:secondaryTexture:destinationTexture:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Encodes a kernel into a command buffer, out-of-place.

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, primaryTexture: any MTLTexture, secondaryTexture: any MTLTexture, destinationTexture: any MTLTexture)
```

## Parameters

- `commandBuffer`: A valid command buffer to receive the encoded kernel.
- `primaryTexture`: A valid texture containing the primary source image.
- `secondaryTexture`: A valid texture containing the secondary source image.
- `destinationTexture`: A valid texture to be overwritten by the result image. `destinationTexture` may not alias `primaryTexture` nor `secondaryTexture`.

## See Also

### Methods

- [encode(commandBuffer:primaryTexture:inPlaceSecondaryTexture:fallbackCopyAllocator:)](encode%28commandbuffer_primarytexture_inplacesecondarytexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [encode(commandBuffer:inPlacePrimaryTexture:secondaryTexture:fallbackCopyAllocator:)](encode%28commandbuffer_inplaceprimarytexture_secondarytexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [encode(commandBuffer:primaryImage:secondaryImage:destinationImage:)](encode%28commandbuffer_primaryimage_secondaryimage_destinationimage_%29.md)
- [primarySourceRegion(forDestinationSize:)](primarysourceregion%28fordestinationsize_%29.md): Determines the region of the primary source texture that will be read for an encode operation.
- [secondarySourceRegion(forDestinationSize:)](secondarysourceregion%28fordestinationsize_%29.md): Determines the region of the secondary source texture that will be read for an encode operation.

# encodeToCommandBuffer:primaryTexture:secondaryTexture:destinationTexture: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Encodes a kernel into a command buffer, out-of-place.

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer primaryTexture:(id<MTLTexture>) primaryTexture secondaryTexture:(id<MTLTexture>) secondaryTexture destinationTexture:(id<MTLTexture>) destinationTexture;
```

## Parameters

- `commandBuffer`: A valid command buffer to receive the encoded kernel.
- `primaryTexture`: A valid texture containing the primary source image.
- `secondaryTexture`: A valid texture containing the secondary source image.
- `destinationTexture`: A valid texture to be overwritten by the result image. `destinationTexture` may not alias `primaryTexture` nor `secondaryTexture`.

## See Also

### Methods

- [encodeToCommandBuffer:primaryTexture:inPlaceSecondaryTexture:fallbackCopyAllocator:](encode%28commandbuffer_primarytexture_inplacesecondarytexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [encodeToCommandBuffer:inPlacePrimaryTexture:secondaryTexture:fallbackCopyAllocator:](encode%28commandbuffer_inplaceprimarytexture_secondarytexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [encodeToCommandBuffer:primaryImage:secondaryImage:destinationImage:](encode%28commandbuffer_primaryimage_secondaryimage_destinationimage_%29.md)
- [primarySourceRegionForDestinationSize:](primarysourceregion%28fordestinationsize_%29.md): Determines the region of the primary source texture that will be read for an encode operation.
- [secondarySourceRegionForDestinationSize:](secondarysourceregion%28fordestinationsize_%29.md): Determines the region of the secondary source texture that will be read for an encode operation.
