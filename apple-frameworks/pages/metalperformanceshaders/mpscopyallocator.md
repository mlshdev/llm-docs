> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscopyallocator](https://developer.apple.com/documentation/metalperformanceshaders/mpscopyallocator)

# MPSCopyAllocator (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block to make a copy of a source texture for filters that can only execute out of place.

## Declaration

```swift
typealias MPSCopyAllocator = (MPSKernel, any MTLCommandBuffer, any MTLTexture) -> any MTLTexture
```

<a id="Discussion"></a>

## Discussion

The block takes the following parameters:

- **`filter`**: A valid pointer to the kernel that is calling the copy allocator.
- **`commandBuffer`**: A valid command buffer that can be used to obtain the device against which to allocate the new texture. You may also enqueue operations on the command buffer to initialize the texture on an encoder allocated in the block. You may not submit, enqueue, or wait for scheduling/completion of the command buffer.
- **`sourceTexture`**: The texture that is providing the source image for the filter. You may wish to use its size and pixel format for the next texture, but you are not required to do so.

The copy allocator returns a new valid texture to use as the destination for the kernel operation. If the calling function succeeds, its texture parameter will be overwritten with a pointer to this texture. If the calling function fails, then the texture will be released before the calling function returns.

Allocating a new texture each time is slow (they take up to 1 ms each). You can recycle old textures (or buffers and make texture from them) and reuse the memory inside the copy allocator block.

If there is any metadata associated with the source texture, such as colorspace information, resource label, CPU cache mode, purgeable state, etc., it may need to be similarly associated with the new texture to avoid losing your metadata.

If the kernel’s [clipRect](mpsunaryimagekernel/cliprect.md) property doesn’t cover the entire image, you may need to copy pixels from the source texture to the new texture, or regions of the next texture will be uninitialized. You can make a command encoder to encode work on the command buffer here, if necessary. It will be scheduled to run immediately before the kernel work. You may call any of the [enqueue()](../metal/mtlcommandbuffer/enqueue%28%29.md), [commit()](../metal/mtlcommandbuffer/commit%28%29.md), [waitUntilCompleted()](../metal/mtlcommandbuffer/waituntilcompleted%28%29.md), or [waitUntilScheduled()](../metal/mtlcommandbuffer/waituntilscheduled%28%29.md) methods inside the copy allocator block. Make sure to call [endEncoding()](../metal/mtlcommandencoder/endencoding%28%29.md) on the command encoder so that the command buffer has no active encoder before returning.

> **Note**

>  The next command placed on the command buffer after the copy allocator returns is almost assuredly going to be encoded with a compute command encoder. Creating any other type of encoder in the copy allocator will probably cost an additional 0.5 ms of both CPU *and* GPU time (or more!) due to a double mode switch penalty.

The following listing shows a minimal copy allocator implementation.

Listing 1. Minimal MPSCopyAllocator Implementation

**Swift**

```swift
let copyAllocator: MPSCopyAllocator =
{
    (kernel: MPSKernel, buffer: MTLCommandBuffer, texture: MTLTexture) -> MTLTexture in
    
    let descriptor = MTLTextureDescriptor.texture2DDescriptor(
        pixelFormat: texture.pixelFormat,
        width: texture.width,
        height: texture.height,
        mipmapped: false)
    
    return buffer.device.makeTexture(descriptor: descriptor)
}

```

**Objective-C**

```objc
MPSCopyAllocator myAllocator = ^id <MTLTexture>(MPSKernel * __nonnull filter, __nonnull id <MTLCommandBuffer> cmdBuf, __nonnull id <MTLTexture> sourceTexture)
{
    MTLPixelFormat format = sourceTexture.pixelFormat;
    MTLTextureDescriptor *d = [MTLTextureDescriptor texture2DDescriptorWithPixelFormat: format width: sourceTexture.width height: sourceTexture.height mipmapped: NO];
 
    id <MTLTexture> result = [cmdBuf.device newTextureWithDescriptor: d];
 
    return result;
    // d is autoreleased.
};
```

## See Also

### Methods

- [encode(commandBuffer:inPlaceTexture:fallbackCopyAllocator:)](mpsunaryimagekernel/encode%28commandbuffer_inplacetexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [encode(commandBuffer:sourceImage:destinationImage:)](mpsunaryimagekernel/encode%28commandbuffer_sourceimage_destinationimage_%29.md)
- [encode(commandBuffer:sourceTexture:destinationTexture:)](mpsunaryimagekernel/encode%28commandbuffer_sourcetexture_destinationtexture_%29.md): Encodes a kernel into a command buffer, out of place.
- [sourceRegion(destinationSize:)](mpsunaryimagekernel/sourceregion%28destinationsize_%29.md): Determines the region of the source texture that will be read for an encode operation.

# MPSCopyAllocator (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block to make a copy of a source texture for filters that can only execute out of place.

## Declaration

```objectivec
typedef id<MTLTexture> (^)(MPSKernel *, id<MTLCommandBuffer>, id<MTLTexture>) MPSCopyAllocator;
```

<a id="Discussion"></a>

## Discussion

The block takes the following parameters:

- **`filter`**: A valid pointer to the kernel that is calling the copy allocator.
- **`commandBuffer`**: A valid command buffer that can be used to obtain the device against which to allocate the new texture. You may also enqueue operations on the command buffer to initialize the texture on an encoder allocated in the block. You may not submit, enqueue, or wait for scheduling/completion of the command buffer.
- **`sourceTexture`**: The texture that is providing the source image for the filter. You may wish to use its size and pixel format for the next texture, but you are not required to do so.

The copy allocator returns a new valid texture to use as the destination for the kernel operation. If the calling function succeeds, its texture parameter will be overwritten with a pointer to this texture. If the calling function fails, then the texture will be released before the calling function returns.

Allocating a new texture each time is slow (they take up to 1 ms each). You can recycle old textures (or buffers and make texture from them) and reuse the memory inside the copy allocator block.

If there is any metadata associated with the source texture, such as colorspace information, resource label, CPU cache mode, purgeable state, etc., it may need to be similarly associated with the new texture to avoid losing your metadata.

If the kernel’s [clipRect](mpsunaryimagekernel/cliprect.md) property doesn’t cover the entire image, you may need to copy pixels from the source texture to the new texture, or regions of the next texture will be uninitialized. You can make a command encoder to encode work on the command buffer here, if necessary. It will be scheduled to run immediately before the kernel work. You may call any of the [enqueue](../metal/mtlcommandbuffer/enqueue%28%29.md), [commit](../metal/mtlcommandbuffer/commit%28%29.md), [waitUntilCompleted](../metal/mtlcommandbuffer/waituntilcompleted%28%29.md), or [waitUntilScheduled](../metal/mtlcommandbuffer/waituntilscheduled%28%29.md) methods inside the copy allocator block. Make sure to call [endEncoding](../metal/mtlcommandencoder/endencoding%28%29.md) on the command encoder so that the command buffer has no active encoder before returning.

> **Note**

>  The next command placed on the command buffer after the copy allocator returns is almost assuredly going to be encoded with a compute command encoder. Creating any other type of encoder in the copy allocator will probably cost an additional 0.5 ms of both CPU *and* GPU time (or more!) due to a double mode switch penalty.

The following listing shows a minimal copy allocator implementation.

Listing 1. Minimal MPSCopyAllocator Implementation

**Swift**

```swift
let copyAllocator: MPSCopyAllocator =
{
    (kernel: MPSKernel, buffer: MTLCommandBuffer, texture: MTLTexture) -> MTLTexture in
    
    let descriptor = MTLTextureDescriptor.texture2DDescriptor(
        pixelFormat: texture.pixelFormat,
        width: texture.width,
        height: texture.height,
        mipmapped: false)
    
    return buffer.device.makeTexture(descriptor: descriptor)
}

```

**Objective-C**

```objc
MPSCopyAllocator myAllocator = ^id <MTLTexture>(MPSKernel * __nonnull filter, __nonnull id <MTLCommandBuffer> cmdBuf, __nonnull id <MTLTexture> sourceTexture)
{
    MTLPixelFormat format = sourceTexture.pixelFormat;
    MTLTextureDescriptor *d = [MTLTextureDescriptor texture2DDescriptorWithPixelFormat: format width: sourceTexture.width height: sourceTexture.height mipmapped: NO];
 
    id <MTLTexture> result = [cmdBuf.device newTextureWithDescriptor: d];
 
    return result;
    // d is autoreleased.
};
```

## See Also

### Methods

- [encodeToCommandBuffer:inPlaceTexture:fallbackCopyAllocator:](mpsunaryimagekernel/encode%28commandbuffer_inplacetexture_fallbackcopyallocator_%29.md): This method attempts to apply a kernel in place on a texture.
- [encodeToCommandBuffer:sourceImage:destinationImage:](mpsunaryimagekernel/encode%28commandbuffer_sourceimage_destinationimage_%29.md)
- [encodeToCommandBuffer:sourceTexture:destinationTexture:](mpsunaryimagekernel/encode%28commandbuffer_sourcetexture_destinationtexture_%29.md): Encodes a kernel into a command buffer, out of place.
- [sourceRegionForDestinationSize:](mpsunaryimagekernel/sourceregion%28destinationsize_%29.md): Determines the region of the source texture that will be read for an encode operation.
