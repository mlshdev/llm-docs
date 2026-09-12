> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitcommandencoder/optimizecontentsforcpuaccess(texture:)](https://developer.apple.com/documentation/metal/mtlblitcommandencoder/optimizecontentsforcpuaccess(texture:))

# optimizeContentsForCPUAccess(texture:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Encodes a command that improves the performance of CPU memory operations with a texture.

## Declaration

```swift
func optimizeContentsForCPUAccess(texture: any MTLTexture)
```

## Parameters

- `texture`: A texture the command optimizes.

## Mentioned In

- [Optimizing texture data](../optimizing-texture-data.md)

<a id="discussion"></a>

## Discussion

This command can reduce the time it takes the CPU to access a texture. Apps typically run the command for:

- Textures the CPU accesses for an extended period of time
- Textures with a [storageMode](../mtlresource/storagemode.md) property that’s [MTLStorageMode.shared](../mtlstoragemode/shared.md) or [MTLStorageMode.managed](../mtlstoragemode/managed.md)

When a blit pass runs this command, the GPU only applies lossless changes to the texture’s underlying data.

> **Note**

>  Optimizing a texture for the CPU may affect the performance of GPU memory operations, but the data the GPU retrieves from the texture remains consistent.

## See Also

### Optimizing textures for CPU access

- [optimizeContentsForCPUAccess(texture:slice:level:)](optimizecontentsforcpuaccess%28texture_slice_level_%29.md): Encodes a command that improves the performance of CPU memory operations with a specific portion of a texture.

# optimizeContentsForCPUAccess: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Encodes a command that improves the performance of CPU memory operations with a texture.

## Declaration

```objectivec
- (void) optimizeContentsForCPUAccess:(id<MTLTexture>) texture;
```

## Parameters

- `texture`: A texture the command optimizes.

## Mentioned In

- [Optimizing texture data](../optimizing-texture-data.md)

<a id="discussion"></a>

## Discussion

This command can reduce the time it takes the CPU to access a texture. Apps typically run the command for:

- Textures the CPU accesses for an extended period of time
- Textures with a [storageMode](../mtlresource/storagemode.md) property that’s [MTLStorageModeShared](../mtlstoragemode/shared.md) or [MTLStorageModeManaged](../mtlstoragemode/managed.md)

When a blit pass runs this command, the GPU only applies lossless changes to the texture’s underlying data.

> **Note**

>  Optimizing a texture for the CPU may affect the performance of GPU memory operations, but the data the GPU retrieves from the texture remains consistent.

## See Also

### Optimizing textures for CPU access

- [optimizeContentsForCPUAccess:slice:level:](optimizecontentsforcpuaccess%28texture_slice_level_%29.md): Encodes a command that improves the performance of CPU memory operations with a specific portion of a texture.
