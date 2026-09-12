> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsunaryimagekernel/encode(commandbuffer:sourcetexture:destinationtexture:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsunaryimagekernel/encode(commandbuffer:sourcetexture:destinationtexture:))

# encode(commandBuffer:sourceTexture:destinationTexture:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Encodes a kernel into a command buffer, out of place.

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, sourceTexture: any MTLTexture, destinationTexture: any MTLTexture)
```

## Parameters

- `commandBuffer`: A valid command buffer to receive the encoded kernel.
- `sourceTexture`: A valid texture containing the source image.
- `destinationTexture`: A valid texture to be overwritten by the result image. `destinationTexture` may not alias `sourceTexture`.

## See Also

### Methods

- [encode(commandBuffer:inPlaceTexture:fallbackCopyAllocator:)](encode%28commandbuffer_inplacetexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [MPSCopyAllocator](../mpscopyallocator.md): A block to make a copy of a source texture for filters that can only execute out of place.
- [encode(commandBuffer:sourceImage:destinationImage:)](encode%28commandbuffer_sourceimage_destinationimage_%29.md)
- [sourceRegion(destinationSize:)](sourceregion%28destinationsize_%29.md): Determines the region of the source texture that will be read for an encode operation.

# encodeToCommandBuffer:sourceTexture:destinationTexture: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Encodes a kernel into a command buffer, out of place.

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceTexture:(id<MTLTexture>) sourceTexture destinationTexture:(id<MTLTexture>) destinationTexture;
```

## Parameters

- `commandBuffer`: A valid command buffer to receive the encoded kernel.
- `sourceTexture`: A valid texture containing the source image.
- `destinationTexture`: A valid texture to be overwritten by the result image. `destinationTexture` may not alias `sourceTexture`.

## See Also

### Methods

- [encodeToCommandBuffer:inPlaceTexture:fallbackCopyAllocator:](encode%28commandbuffer_inplacetexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [MPSCopyAllocator](../mpscopyallocator.md): A block to make a copy of a source texture for filters that can only execute out of place.
- [encodeToCommandBuffer:sourceImage:destinationImage:](encode%28commandbuffer_sourceimage_destinationimage_%29.md)
- [sourceRegionForDestinationSize:](sourceregion%28destinationsize_%29.md): Determines the region of the source texture that will be read for an encode operation.
