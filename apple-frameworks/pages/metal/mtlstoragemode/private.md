> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstoragemode/private](https://developer.apple.com/documentation/metal/mtlstoragemode/private)

# MTLStorageMode.private (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The resource is only available to the GPU.

## Declaration

```swift
case `private`
```

## Mentioned In

- [Choosing a resource storage mode for Intel and AMD GPUs](../choosing-a-resource-storage-mode-for-intel-and-amd-gpus.md)
- [Choosing a resource storage mode for Apple GPUs](../choosing-a-resource-storage-mode-for-apple-gpus.md)
- [Adjusting for GPU memory bandwidth tradeoffs](../adjusting-for-gpu-memory-bandwidth-tradeoffs.md)
- [Converting a GPU’s counter data into a readable format](../converting-a-gpus-counter-data-into-a-readable-format.md)
- [Copying data to a private resource](../copying-data-to-a-private-resource.md)
- [Creating a counter sample buffer to store a GPU’s counter data during a pass](../creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md)
- [Creating sparse heaps and sparse textures](../creating-sparse-heaps-and-sparse-textures.md)
- [Developing Metal apps that run in Simulator](../developing-metal-apps-that-run-in-simulator.md)
- [Optimizing texture data](../optimizing-texture-data.md)
- [Setting resource storage modes](../setting-resource-storage-modes.md)
- [Transferring data between connected GPUs](../transferring-data-between-connected-gpus.md)

<a id="discussion"></a>

## Discussion

Metal may apply additional optimizations to private resources that aren’t allowed on shared or managed resources.

For more guidance on how to choose storage modes, see [Setting resource storage modes](../setting-resource-storage-modes.md).

## See Also

### Storage mode options

- [MTLStorageMode.shared](shared.md): The CPU and GPU share access to the resource, allocated in system memory.
- [MTLStorageMode.managed](managed.md): Deprecated. The CPU and GPU may maintain separate copies of the resource, and any changes need to be explicitly synchronized.
- [MTLStorageMode.memoryless](memoryless.md): The resource’s contents are only available to the GPU, and only exist temporarily during a render pass.

# MTLStorageModePrivate (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The resource is only available to the GPU.

## Declaration

```objectivec
MTLStorageModePrivate
```

## Mentioned In

- [Choosing a resource storage mode for Intel and AMD GPUs](../choosing-a-resource-storage-mode-for-intel-and-amd-gpus.md)
- [Choosing a resource storage mode for Apple GPUs](../choosing-a-resource-storage-mode-for-apple-gpus.md)
- [Adjusting for GPU memory bandwidth tradeoffs](../adjusting-for-gpu-memory-bandwidth-tradeoffs.md)
- [Converting a GPU’s counter data into a readable format](../converting-a-gpus-counter-data-into-a-readable-format.md)
- [Copying data to a private resource](../copying-data-to-a-private-resource.md)
- [Creating a counter sample buffer to store a GPU’s counter data during a pass](../creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md)
- [Creating sparse heaps and sparse textures](../creating-sparse-heaps-and-sparse-textures.md)
- [Developing Metal apps that run in Simulator](../developing-metal-apps-that-run-in-simulator.md)
- [Optimizing texture data](../optimizing-texture-data.md)
- [Setting resource storage modes](../setting-resource-storage-modes.md)
- [Transferring data between connected GPUs](../transferring-data-between-connected-gpus.md)

<a id="discussion"></a>

## Discussion

Metal may apply additional optimizations to private resources that aren’t allowed on shared or managed resources.

For more guidance on how to choose storage modes, see [Setting resource storage modes](../setting-resource-storage-modes.md).

## See Also

### Storage mode options

- [MTLStorageModeShared](shared.md): The CPU and GPU share access to the resource, allocated in system memory.
- [MTLStorageModeManaged](managed.md): Deprecated. The CPU and GPU may maintain separate copies of the resource, and any changes need to be explicitly synchronized.
- [MTLStorageModeMemoryless](memoryless.md): The resource’s contents are only available to the GPU, and only exist temporarily during a render pass.
