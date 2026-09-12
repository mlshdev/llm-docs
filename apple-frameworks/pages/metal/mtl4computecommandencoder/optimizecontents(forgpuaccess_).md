> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/optimizecontents(forgpuaccess:)](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/optimizecontents(forgpuaccess:))

# optimizeContents(forGPUAccess:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command that modifies the contents of a texture to improve the performance of GPU accesses to its contents.

## Declaration

```swift
func optimizeContents(forGPUAccess texture: any MTLTexture)
```

## Parameters

- `texture`: A [MTLTexture](../mtltexture.md) instance the command optimizes for GPU access.

<a id="discussion"></a>

## Discussion

Optimizing a texture for GPU access may affect the performance of CPU accesses, however, the data the CPU retrieves from the texture remains consistent.

You typically run this command for:

- Textures the GPU accesses for an extended period of time.
- Textures with a [storageMode](../mtltexturedescriptor/storagemode.md) property that’s [MTLStorageMode.shared](../mtlstoragemode/shared.md) or [MTLStorageMode.managed](../mtlstoragemode/managed.md).

## See Also

### Encoding optimization commands

- [optimizeCommands(buffer:range:)](optimizecommands%28buffer_range_%29.md): Encode a command to attempt to improve the performance of a range of commands within an indirect command buffer.
- [optimizeContents(forCPUAccess:)](optimizecontents%28forcpuaccess_%29.md): Encodes a command that modifies the contents of a texture to improve the performance of CPU accesses to its contents.
- [optimizeContents(forCPUAccess:slice:level:)](optimizecontents%28forcpuaccess_slice_level_%29.md): Encodes a command that modifies the contents of a texture to improve the performance of CPU accesses to its contents in a specific region.
- [optimizeContents(forGPUAccess:slice:level:)](optimizecontents%28forgpuaccess_slice_level_%29.md): Encodes a command that modifies the contents of a texture instance to improve the performance of GPU accesses to its contents in a specific region.

# optimizeContentsForGPUAccess: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command that modifies the contents of a texture to improve the performance of GPU accesses to its contents.

## Declaration

```objectivec
- (void) optimizeContentsForGPUAccess:(id<MTLTexture>) texture;
```

## Parameters

- `texture`: A [MTLTexture](../mtltexture.md) instance the command optimizes for GPU access.

<a id="discussion"></a>

## Discussion

Optimizing a texture for GPU access may affect the performance of CPU accesses, however, the data the CPU retrieves from the texture remains consistent.

You typically run this command for:

- Textures the GPU accesses for an extended period of time.
- Textures with a [storageMode](../mtltexturedescriptor/storagemode.md) property that’s [MTLStorageModeShared](../mtlstoragemode/shared.md) or [MTLStorageModeManaged](../mtlstoragemode/managed.md).

## See Also

### Encoding optimization commands

- [optimizeContentsForCPUAccess:](optimizecontents%28forcpuaccess_%29.md): Encodes a command that modifies the contents of a texture to improve the performance of CPU accesses to its contents.
- [optimizeContentsForCPUAccess:slice:level:](optimizecontents%28forcpuaccess_slice_level_%29.md): Encodes a command that modifies the contents of a texture to improve the performance of CPU accesses to its contents in a specific region.
- [optimizeContentsForGPUAccess:slice:level:](optimizecontents%28forgpuaccess_slice_level_%29.md): Encodes a command that modifies the contents of a texture instance to improve the performance of GPU accesses to its contents in a specific region.
- [optimizeIndirectCommandBuffer:withRange:](optimizeindirectcommandbuffer_withrange_.md): Encode a command to attempt to improve the performance of a range of commands within an indirect command buffer.
