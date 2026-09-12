> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresourceoptions/storagemodemanaged](https://developer.apple.com/documentation/metal/mtlresourceoptions/storagemodemanaged)

# storageModeManaged (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0)

The CPU and GPU may maintain separate copies of the resource, and any changes need to be explicitly synchronized.

> Managed storage has no effect on Apple Silicon, use Shared storage instead

## Declaration

```swift
static var storageModeManaged: MTLResourceOptions { get }
```

<a id="discussion"></a>

## Discussion

On Intel-based Mac computers, this is the default storage mode for [MTLTexture](../mtltexture.md) objects. In iOS and tvOS, the managed storage mode isn’t available. With managed storage, you synchronize changes between the CPU and GPU manually. For instructions and examples of resource synchronization, see [Synchronizing a managed resource in macOS](../synchronizing-a-managed-resource-in-macos.md).

For more guidance on how to choose storage modes, see [Setting resource storage modes](../setting-resource-storage-modes.md).

## See Also

### Specifying storage modes

- [storageModeShared](storagemodeshared.md): The CPU and GPU share access to the resource, allocated in system memory.
- [storageModePrivate](storagemodeprivate.md): The resource is only available to the GPU.
- [storageModeMemoryless](storagemodememoryless.md): The resource’s contents are only available to the GPU, and only exist temporarily during a render pass.

# MTLResourceStorageModeManaged (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0)

The CPU and GPU may maintain separate copies of the resource, and any changes need to be explicitly synchronized.

> Managed storage has no effect on Apple Silicon, use Shared storage instead

## Declaration

```objectivec
MTLResourceStorageModeManaged
```

<a id="discussion"></a>

## Discussion

On Intel-based Mac computers, this is the default storage mode for [MTLTexture](../mtltexture.md) objects. In iOS and tvOS, the managed storage mode isn’t available. With managed storage, you synchronize changes between the CPU and GPU manually. For instructions and examples of resource synchronization, see [Synchronizing a managed resource in macOS](../synchronizing-a-managed-resource-in-macos.md).

For more guidance on how to choose storage modes, see [Setting resource storage modes](../setting-resource-storage-modes.md).

## See Also

### Specifying storage modes

- [MTLResourceStorageModeShared](storagemodeshared.md): The CPU and GPU share access to the resource, allocated in system memory.
- [MTLResourceStorageModePrivate](storagemodeprivate.md): The resource is only available to the GPU.
- [MTLResourceStorageModeMemoryless](storagemodememoryless.md): The resource’s contents are only available to the GPU, and only exist temporarily during a render pass.
