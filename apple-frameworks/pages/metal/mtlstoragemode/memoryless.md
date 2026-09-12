> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstoragemode/memoryless](https://developer.apple.com/documentation/metal/mtlstoragemode/memoryless)

# MTLStorageMode.memoryless (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 10.0+ · visionOS 1.0+

The resource’s contents are only available to the GPU, and only exist temporarily during a render pass.

## Declaration

```swift
case memoryless
```

## Mentioned In

- [Choosing a resource storage mode for Apple GPUs](../choosing-a-resource-storage-mode-for-apple-gpus.md)
- [Reducing the memory footprint of Metal apps](../reducing-the-memory-footprint-of-metal-apps.md)
- [Setting resource storage modes](../setting-resource-storage-modes.md)

<a id="discussion"></a>

## Discussion

The memoryless storage mode uses tile memory, and is only available on Apple family GPUs. Memoryless resources are temporary targets used in a pass and you can’t access their contents with [MTLLoadAction.load](../mtlloadaction/load.md) or [MTLStoreAction.store](../mtlstoreaction/store.md).

Use memoryless resources for temporary elements used only within a single pass. For example, most render passes don’t store depth attachments and multisample attachments to memory. You can significantly reduce your memory usage by creating these attachments as memoryless resources.

On Metal devices that support tile rendering, you can use imageblocks to manage transient rendering data more flexibly. For more information about imageblock memory and using it with your shader functions, see the [Metal Shading Language Specification (PDF)](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf) sections 2.11, 4.5, and 5.6.

For more guidance on how to choose storage modes, see [Setting resource storage modes](../setting-resource-storage-modes.md).

## See Also

### Storage mode options

- [MTLStorageMode.shared](shared.md): The CPU and GPU share access to the resource, allocated in system memory.
- [MTLStorageMode.managed](managed.md): Deprecated. The CPU and GPU may maintain separate copies of the resource, and any changes need to be explicitly synchronized.
- [MTLStorageMode.private](private.md): The resource is only available to the GPU.

# MTLStorageModeMemoryless (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 10.0+ · visionOS 1.0+

The resource’s contents are only available to the GPU, and only exist temporarily during a render pass.

## Declaration

```objectivec
MTLStorageModeMemoryless
```

## Mentioned In

- [Choosing a resource storage mode for Apple GPUs](../choosing-a-resource-storage-mode-for-apple-gpus.md)
- [Reducing the memory footprint of Metal apps](../reducing-the-memory-footprint-of-metal-apps.md)
- [Setting resource storage modes](../setting-resource-storage-modes.md)

<a id="discussion"></a>

## Discussion

The memoryless storage mode uses tile memory, and is only available on Apple family GPUs. Memoryless resources are temporary targets used in a pass and you can’t access their contents with [MTLLoadActionLoad](../mtlloadaction/load.md) or [MTLStoreActionStore](../mtlstoreaction/store.md).

Use memoryless resources for temporary elements used only within a single pass. For example, most render passes don’t store depth attachments and multisample attachments to memory. You can significantly reduce your memory usage by creating these attachments as memoryless resources.

On Metal devices that support tile rendering, you can use imageblocks to manage transient rendering data more flexibly. For more information about imageblock memory and using it with your shader functions, see the [Metal Shading Language Specification (PDF)](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf) sections 2.11, 4.5, and 5.6.

For more guidance on how to choose storage modes, see [Setting resource storage modes](../setting-resource-storage-modes.md).

## See Also

### Storage mode options

- [MTLStorageModeShared](shared.md): The CPU and GPU share access to the resource, allocated in system memory.
- [MTLStorageModeManaged](managed.md): Deprecated. The CPU and GPU may maintain separate copies of the resource, and any changes need to be explicitly synchronized.
- [MTLStorageModePrivate](private.md): The resource is only available to the GPU.
