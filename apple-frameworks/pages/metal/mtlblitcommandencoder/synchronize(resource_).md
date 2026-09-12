> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitcommandencoder/synchronize(resource:)](https://developer.apple.com/documentation/metal/mtlblitcommandencoder/synchronize(resource:))

# synchronize(resource:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0)

Encodes a command that synchronizes the CPU’s copy of a managed resource, such as a buffer or texture, so that it matches the GPU’s copy.

> Managed storage has no effect on Apple Silicon, use Shared storage instead

## Declaration

```swift
func synchronize(resource: any MTLResource)
```

## Parameters

- `resource`: An [MTLResource](../mtlresource.md) instance — such as an [MTLBuffer](../mtlbuffer.md) or [MTLTexture](../mtltexture.md) — with a [storageMode](../mtlresource/storagemode.md) property that’s equal to [MTLStorageMode.managed](../mtlstoragemode/managed.md).

## Mentioned In

- [Synchronizing a managed resource in macOS](../synchronizing-a-managed-resource-in-macos.md)

<a id="discussion"></a>

## Discussion

This method ensures the CPU can correctly read all the changes a GPU makes to a resource that uses the managed storage mode. For the resources you create with [MTLStorageMode.managed](../mtlstoragemode/managed.md), the CPU and GPU each have a copy of that resource. As the GPU modifies its copy, the CPU’s copy remains unchanged until you synchronize with a command, such as this one.

The CPU can access the updated content from its copy of the resources after the synchronization command completes.

> **Note**

>  You can encode a command that selectively synchronizes parts of an [MTLTexture](../mtltexture.md) by calling the [synchronize(texture:slice:level:)](synchronize%28texture_slice_level_%29.md) method.

## See Also

### Synchronizing managed resources

- [synchronize(texture:slice:level:)](synchronize%28texture_slice_level_%29.md): Deprecated. Encodes a command that synchronizes a part of the CPU’s copy of a texture so that it matches the GPU’s copy.

# synchronizeResource: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0)

Encodes a command that synchronizes the CPU’s copy of a managed resource, such as a buffer or texture, so that it matches the GPU’s copy.

> Managed storage has no effect on Apple Silicon, use Shared storage instead

## Declaration

```objectivec
- (void) synchronizeResource:(id<MTLResource>) resource;
```

## Parameters

- `resource`: An [MTLResource](../mtlresource.md) instance — such as an [MTLBuffer](../mtlbuffer.md) or [MTLTexture](../mtltexture.md) — with a [storageMode](../mtlresource/storagemode.md) property that’s equal to [MTLStorageModeManaged](../mtlstoragemode/managed.md).

## Mentioned In

- [Synchronizing a managed resource in macOS](../synchronizing-a-managed-resource-in-macos.md)

<a id="discussion"></a>

## Discussion

This method ensures the CPU can correctly read all the changes a GPU makes to a resource that uses the managed storage mode. For the resources you create with [MTLStorageModeManaged](../mtlstoragemode/managed.md), the CPU and GPU each have a copy of that resource. As the GPU modifies its copy, the CPU’s copy remains unchanged until you synchronize with a command, such as this one.

The CPU can access the updated content from its copy of the resources after the synchronization command completes.

> **Note**

>  You can encode a command that selectively synchronizes parts of an [MTLTexture](../mtltexture.md) by calling the [synchronizeTexture:slice:level:](synchronize%28texture_slice_level_%29.md) method.

## See Also

### Synchronizing managed resources

- [synchronizeTexture:slice:level:](synchronize%28texture_slice_level_%29.md): Deprecated. Encodes a command that synchronizes a part of the CPU’s copy of a texture so that it matches the GPU’s copy.
