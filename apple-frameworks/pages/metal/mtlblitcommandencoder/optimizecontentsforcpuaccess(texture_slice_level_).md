> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitcommandencoder/optimizecontentsforcpuaccess(texture:slice:level:)](https://developer.apple.com/documentation/metal/mtlblitcommandencoder/optimizecontentsforcpuaccess(texture:slice:level:))

# optimizeContentsForCPUAccess(texture:slice:level:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Encodes a command that improves the performance of CPU memory operations with a specific portion of a texture.

## Declaration

```swift
func optimizeContentsForCPUAccess(texture: any MTLTexture, slice: Int, level: Int)
```

## Parameters

- `texture`: A texture the command optimizes.
- `slice`: A slice within `texture`.
- `level`: A mipmap level within `texture`.

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

- [optimizeContentsForCPUAccess(texture:)](optimizecontentsforcpuaccess%28texture_%29.md): Encodes a command that improves the performance of CPU memory operations with a texture.

# optimizeContentsForCPUAccess:slice:level: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Encodes a command that improves the performance of CPU memory operations with a specific portion of a texture.

## Declaration

```objectivec
- (void) optimizeContentsForCPUAccess:(id<MTLTexture>) texture slice:(NSUInteger) slice level:(NSUInteger) level;
```

## Parameters

- `texture`: A texture the command optimizes.
- `slice`: A slice within `texture`.
- `level`: A mipmap level within `texture`.

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

- [optimizeContentsForCPUAccess:](optimizecontentsforcpuaccess%28texture_%29.md): Encodes a command that improves the performance of CPU memory operations with a texture.
