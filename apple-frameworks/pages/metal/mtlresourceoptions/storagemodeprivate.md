> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresourceoptions/storagemodeprivate](https://developer.apple.com/documentation/metal/mtlresourceoptions/storagemodeprivate)

# storageModePrivate (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The resource is only available to the GPU.

## Declaration

```swift
static var storageModePrivate: MTLResourceOptions { get }
```

<a id="discussion"></a>

## Discussion

Metal may apply additional optimizations to private resources that aren’t allowed on shared or managed resources.

For more guidance on how to choose storage modes, see [Setting resource storage modes](../setting-resource-storage-modes.md).

## See Also

### Specifying storage modes

- [storageModeShared](storagemodeshared.md): The CPU and GPU share access to the resource, allocated in system memory.
- [storageModeManaged](storagemodemanaged.md): Deprecated. The CPU and GPU may maintain separate copies of the resource, and any changes need to be explicitly synchronized.
- [storageModeMemoryless](storagemodememoryless.md): The resource’s contents are only available to the GPU, and only exist temporarily during a render pass.

# MTLResourceStorageModePrivate (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The resource is only available to the GPU.

## Declaration

```objectivec
MTLResourceStorageModePrivate
```

<a id="discussion"></a>

## Discussion

Metal may apply additional optimizations to private resources that aren’t allowed on shared or managed resources.

For more guidance on how to choose storage modes, see [Setting resource storage modes](../setting-resource-storage-modes.md).

## See Also

### Specifying storage modes

- [MTLResourceStorageModeShared](storagemodeshared.md): The CPU and GPU share access to the resource, allocated in system memory.
- [MTLResourceStorageModeManaged](storagemodemanaged.md): Deprecated. The CPU and GPU may maintain separate copies of the resource, and any changes need to be explicitly synchronized.
- [MTLResourceStorageModeMemoryless](storagemodememoryless.md): The resource’s contents are only available to the GPU, and only exist temporarily during a render pass.
