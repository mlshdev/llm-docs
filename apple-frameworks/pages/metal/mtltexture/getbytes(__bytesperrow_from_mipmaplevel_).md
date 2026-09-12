> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexture/getbytes(_:bytesperrow:from:mipmaplevel:)](https://developer.apple.com/documentation/metal/mtltexture/getbytes(_:bytesperrow:from:mipmaplevel:))

# getBytes(\_:bytesPerRow:from:mipmapLevel:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Copies pixel data from the first slice of the texture to a buffer in system memory.

## Declaration

```swift
func getBytes(_ pixelBytes: UnsafeMutableRawPointer, bytesPerRow: Int, from region: MTLRegion, mipmapLevel level: Int)
```

## Parameters

- `pixelBytes`: A pointer to a destination buffer in system memory.
- `bytesPerRow`: The number of bytes (*stride*) between two adjacent rows of pixel data in the destination buffer. For [MTLTextureType.type1D](../mtltexturetype/type1d.md) and [MTLTextureType.type1DArray](../mtltexturetype/type1darray.md), use `0`. For raw and packed pixel types, the stride is the number of pixels in one row. For compressed pixel formats, the stride is the number of bytes from the beginning of one row of blocks to the beginning of the next.

  Your data type determines how you should compute `bytesPerRow`:

  - For raw or packed pixel data, use a multiple of the pixel size less than [max](https://developer.apple.com/documentation/swift/int32/max) `* pixel size`.
  - For compressed pixel data, use a multiple of the compression block size. When working with PowerVR Texture Compression (PVRTC), use `0.`

  Nonzero values smaller than the texture width or any values not a multiple of the pixel or block size cause an error.
- `region`: The location of a block of pixels in the texture slice. For textures compressed as PVRTC, use the entire texture for the region.
- `level`: A zero-indexed value that selects the texture’s mipmap level as the method’s data source. Use `0` for textures that don’t have mipmaps.

<a id="discussion"></a>

## Discussion

> **Important**

>  Don’t use this method for textures where [storageMode](../mtlresource/storagemode.md) is [MTLStorageMode.private](../mtlstoragemode/private.md). Instead, copy data from the private texture with an [MTLBlitCommandEncoder](../mtlblitcommandencoder.md) to another texture accessible from the CPU, and then call this method on the accessible texture.

This method runs on the CPU and immediately copies the pixel data from the texture to system memory, but it doesn’t synchronize with any GPU texture memory operations. Ensure all operations that write or render to the texture complete before reading the texture’s contents using one of the following methods:

- Synchronize on the GPU with a [synchronize(resource:)](../mtlblitcommandencoder/synchronize%28resource_%29.md) or [synchronize(texture:slice:level:)](../mtlblitcommandencoder/synchronize%28texture_slice_level_%29.md) command in an [MTLBlitCommandEncoder](../mtlblitcommandencoder.md).
- Synchronize on the CPU with a callback passed to the [addCompletedHandler(\_:)](../mtlcommandbuffer/addcompletedhandler%28__%29.md) method to handle completion asynchronously, or the [waitUntilCompleted()](../mtlcommandbuffer/waituntilcompleted%28%29.md) method to block thread execution until the GPU work completes.

For multisample textures, the method consecutively positions each sample within a pixel in memory and treats the pixels as part of one row.

## See Also

### Copying data from a texture image

- [getBytes(\_:bytesPerRow:bytesPerImage:from:mipmapLevel:slice:)](getbytes%28__bytesperrow_bytesperimage_from_mipmaplevel_slice_%29.md): Copies pixel data from the texture to a buffer in system memory.

# getBytes:bytesPerRow:fromRegion:mipmapLevel: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Copies pixel data from the first slice of the texture to a buffer in system memory.

## Declaration

```objectivec
- (void) getBytes:(void *) pixelBytes bytesPerRow:(NSUInteger) bytesPerRow fromRegion:(MTLRegion) region mipmapLevel:(NSUInteger) level;
```

## Parameters

- `pixelBytes`: A pointer to a destination buffer in system memory.
- `bytesPerRow`: The number of bytes (*stride*) between two adjacent rows of pixel data in the destination buffer. For [MTLTextureType1D](../mtltexturetype/type1d.md) and [MTLTextureType1DArray](../mtltexturetype/type1darray.md), use `0`. For raw and packed pixel types, the stride is the number of pixels in one row. For compressed pixel formats, the stride is the number of bytes from the beginning of one row of blocks to the beginning of the next.

  Your data type determines how you should compute `bytesPerRow`:

  - For raw or packed pixel data, use a multiple of the pixel size less than [max](https://developer.apple.com/documentation/swift/int32/max) `* pixel size`.
  - For compressed pixel data, use a multiple of the compression block size. When working with PowerVR Texture Compression (PVRTC), use `0.`

  Nonzero values smaller than the texture width or any values not a multiple of the pixel or block size cause an error.
- `region`: The location of a block of pixels in the texture slice. For textures compressed as PVRTC, use the entire texture for the region.
- `level`: A zero-indexed value that selects the texture’s mipmap level as the method’s data source. Use `0` for textures that don’t have mipmaps.

<a id="discussion"></a>

## Discussion

> **Important**

>  Don’t use this method for textures where [storageMode](../mtlresource/storagemode.md) is [MTLStorageModePrivate](../mtlstoragemode/private.md). Instead, copy data from the private texture with an [MTLBlitCommandEncoder](../mtlblitcommandencoder.md) to another texture accessible from the CPU, and then call this method on the accessible texture.

This method runs on the CPU and immediately copies the pixel data from the texture to system memory, but it doesn’t synchronize with any GPU texture memory operations. Ensure all operations that write or render to the texture complete before reading the texture’s contents using one of the following methods:

- Synchronize on the GPU with a [synchronizeResource:](../mtlblitcommandencoder/synchronize%28resource_%29.md) or [synchronizeTexture:slice:level:](../mtlblitcommandencoder/synchronize%28texture_slice_level_%29.md) command in an [MTLBlitCommandEncoder](../mtlblitcommandencoder.md).
- Synchronize on the CPU with a callback passed to the [addCompletedHandler:](../mtlcommandbuffer/addcompletedhandler%28__%29.md) method to handle completion asynchronously, or the [waitUntilCompleted](../mtlcommandbuffer/waituntilcompleted%28%29.md) method to block thread execution until the GPU work completes.

For multisample textures, the method consecutively positions each sample within a pixel in memory and treats the pixels as part of one row.

## See Also

### Copying data from a texture image

- [getBytes:bytesPerRow:bytesPerImage:fromRegion:mipmapLevel:slice:](getbytes%28__bytesperrow_bytesperimage_from_mipmaplevel_slice_%29.md): Copies pixel data from the texture to a buffer in system memory.
