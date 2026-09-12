> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitcommandencoder/synchronize(texture:slice:level:)](https://developer.apple.com/documentation/metal/mtlblitcommandencoder/synchronize(texture:slice:level:))

# synchronize(texture:slice:level:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0)

Encodes a command that synchronizes a part of the CPU’s copy of a texture so that it matches the GPU’s copy.

> Managed storage has no effect on Apple Silicon, use Shared storage instead

## Declaration

```swift
func synchronize(texture: any MTLTexture, slice: Int, level: Int)
```

## Parameters

- `texture`: An [MTLTexture](../mtltexture.md) instance with a [storageMode](../mtlresource/storagemode.md) property that’s equal to [MTLStorageMode.managed](../mtlstoragemode/managed.md).
- `slice`: A slice within `texture`.
- `level`: A mipmap level within `texture`.

## Mentioned In

- [Synchronizing a managed resource in macOS](../synchronizing-a-managed-resource-in-macos.md)

<a id="discussion"></a>

## Discussion

This method ensures the CPU can correctly read the changes a GPU makes to a slice of a texture that uses the managed storage mode. For the resources you create with [MTLStorageMode.managed](../mtlstoragemode/managed.md), the CPU and GPU each have a copy of that resource. As the GPU modifies its copy, the CPU’s copy remains unchanged until you synchronize with a command, such as this one.

The CPU can access the updated content from its copy of the texture after the synchronization command completes.

> **Note**

>  The command this method encodes behaves similarly to the command that [synchronize(resource:)](synchronize%28resource_%29.md) encodes, except that it flushes only the applicable slice and mipmap level.

## See Also

### Synchronizing managed resources

- [synchronize(resource:)](synchronize%28resource_%29.md): Deprecated. Encodes a command that synchronizes the CPU’s copy of a managed resource, such as a buffer or texture, so that it matches the GPU’s copy.

# synchronizeTexture:slice:level: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0)

Encodes a command that synchronizes a part of the CPU’s copy of a texture so that it matches the GPU’s copy.

> Managed storage has no effect on Apple Silicon, use Shared storage instead

## Declaration

```objectivec
- (void) synchronizeTexture:(id<MTLTexture>) texture slice:(NSUInteger) slice level:(NSUInteger) level;
```

## Parameters

- `texture`: An [MTLTexture](../mtltexture.md) instance with a [storageMode](../mtlresource/storagemode.md) property that’s equal to [MTLStorageModeManaged](../mtlstoragemode/managed.md).
- `slice`: A slice within `texture`.
- `level`: A mipmap level within `texture`.

## Mentioned In

- [Synchronizing a managed resource in macOS](../synchronizing-a-managed-resource-in-macos.md)

<a id="discussion"></a>

## Discussion

This method ensures the CPU can correctly read the changes a GPU makes to a slice of a texture that uses the managed storage mode. For the resources you create with [MTLStorageModeManaged](../mtlstoragemode/managed.md), the CPU and GPU each have a copy of that resource. As the GPU modifies its copy, the CPU’s copy remains unchanged until you synchronize with a command, such as this one.

The CPU can access the updated content from its copy of the texture after the synchronization command completes.

> **Note**

>  The command this method encodes behaves similarly to the command that [synchronizeResource:](synchronize%28resource_%29.md) encodes, except that it flushes only the applicable slice and mipmap level.

## See Also

### Synchronizing managed resources

- [synchronizeResource:](synchronize%28resource_%29.md): Deprecated. Encodes a command that synchronizes the CPU’s copy of a managed resource, such as a buffer or texture, so that it matches the GPU’s copy.
