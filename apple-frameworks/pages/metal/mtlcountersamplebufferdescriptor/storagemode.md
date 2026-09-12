> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcountersamplebufferdescriptor/storagemode](https://developer.apple.com/documentation/metal/mtlcountersamplebufferdescriptor/storagemode)

# storageMode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The memory storage mode for the counter sample buffers you create with the descriptor.

## Declaration

```swift
var storageMode: MTLStorageMode { get set }
```

## Mentioned In

- [Converting a GPU’s counter data into a readable format](../converting-a-gpus-counter-data-into-a-readable-format.md)
- [Creating a counter sample buffer to store a GPU’s counter data during a pass](../creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md)

<a id="discussion"></a>

## Discussion

To access a counter sample buffer with the CPU, set this property to [MTLStorageMode.shared](../mtlstoragemode/shared.md), otherwise [MTLStorageMode.private](../mtlstoragemode/private.md).

## See Also

### Configuring a descriptor for a counter sample buffer

- [counterSet](counterset.md): A GPU device’s counter set instance that you want to sample.
- [label](label.md): The name for the counter sample buffer you create with the descriptor.
- [sampleCount](samplecount.md): The number of instances of a counter set’s data that a counter sample buffer can store.

# storageMode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The memory storage mode for the counter sample buffers you create with the descriptor.

## Declaration

```objectivec
@property (readwrite) MTLStorageMode storageMode;
```

## Mentioned In

- [Converting a GPU’s counter data into a readable format](../converting-a-gpus-counter-data-into-a-readable-format.md)
- [Creating a counter sample buffer to store a GPU’s counter data during a pass](../creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md)

<a id="discussion"></a>

## Discussion

To access a counter sample buffer with the CPU, set this property to [MTLStorageModeShared](../mtlstoragemode/shared.md), otherwise [MTLStorageModePrivate](../mtlstoragemode/private.md).

## See Also

### Configuring a descriptor for a counter sample buffer

- [counterSet](counterset.md): A GPU device’s counter set instance that you want to sample.
- [label](label.md): The name for the counter sample buffer you create with the descriptor.
- [sampleCount](samplecount.md): The number of instances of a counter set’s data that a counter sample buffer can store.
