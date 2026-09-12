> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsunaryimagekernel/encode(commandbuffer:sourceimage:destinationimage:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsunaryimagekernel/encode(commandbuffer:sourceimage:destinationimage:))

# encode(commandBuffer:sourceImage:destinationImage:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, sourceImage: MPSImage, destinationImage: MPSImage)
```

## See Also

### Methods

- [encode(commandBuffer:inPlaceTexture:fallbackCopyAllocator:)](encode%28commandbuffer_inplacetexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [MPSCopyAllocator](../mpscopyallocator.md): A block to make a copy of a source texture for filters that can only execute out of place.
- [encode(commandBuffer:sourceTexture:destinationTexture:)](encode%28commandbuffer_sourcetexture_destinationtexture_%29.md): Encodes a kernel into a command buffer, out of place.
- [sourceRegion(destinationSize:)](sourceregion%28destinationsize_%29.md): Determines the region of the source texture that will be read for an encode operation.

# encodeToCommandBuffer:sourceImage:destinationImage: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImage:(MPSImage *) sourceImage destinationImage:(MPSImage *) destinationImage;
```

## See Also

### Methods

- [encodeToCommandBuffer:inPlaceTexture:fallbackCopyAllocator:](encode%28commandbuffer_inplacetexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [MPSCopyAllocator](../mpscopyallocator.md): A block to make a copy of a source texture for filters that can only execute out of place.
- [encodeToCommandBuffer:sourceTexture:destinationTexture:](encode%28commandbuffer_sourcetexture_destinationtexture_%29.md): Encodes a kernel into a command buffer, out of place.
- [sourceRegionForDestinationSize:](sourceregion%28destinationsize_%29.md): Determines the region of the source texture that will be read for an encode operation.
