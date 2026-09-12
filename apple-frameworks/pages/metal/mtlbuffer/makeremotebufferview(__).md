> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbuffer/makeremotebufferview(_:)](https://developer.apple.com/documentation/metal/mtlbuffer/makeremotebufferview(_:))

# makeRemoteBufferView(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 27.0)

Creates a remote view of the buffer for another GPU in the same peer group.

> Not applicable on Apple Silicon

## Declaration

```swift
func makeRemoteBufferView(_ device: any MTLDevice) -> (any MTLBuffer)?
```

## Mentioned In

- [Transferring data between connected GPUs](../transferring-data-between-connected-gpus.md)

<a id="discussion"></a>

## Discussion

The device instance that this buffer belongs to and the device you pass to the method both need to have the same nonzero peer group identifier ([peerGroupID](../mtldevice/peergroupid.md)). This buffer needs to use the private storage mode ([MTLStorageMode.private](../mtlstoragemode/private.md)).

A remote view doesn’t allocate any storage for the new buffer; it references the memory allocated for the original buffer. You can use remote views only as a source for copy commands encoded by an [MTLBlitCommandEncoder](../mtlblitcommandencoder.md). For more information, see [Transferring data between connected GPUs](../transferring-data-between-connected-gpus.md).

## See Also

### Creating views of buffers on other GPUs

- [remoteStorageBuffer](remotestoragebuffer.md): Deprecated. The buffer on another GPU that the buffer was created from, if any.

# newRemoteBufferViewForDevice: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 27.0)

Creates a remote view of the buffer for another GPU in the same peer group.

> Not applicable on Apple Silicon

## Declaration

```objectivec
- (id<MTLBuffer>) newRemoteBufferViewForDevice:(id<MTLDevice>) device;
```

## Mentioned In

- [Transferring data between connected GPUs](../transferring-data-between-connected-gpus.md)

<a id="discussion"></a>

## Discussion

The device instance that this buffer belongs to and the device you pass to the method both need to have the same nonzero peer group identifier ([peerGroupID](../mtldevice/peergroupid.md)). This buffer needs to use the private storage mode ([MTLStorageModePrivate](../mtlstoragemode/private.md)).

A remote view doesn’t allocate any storage for the new buffer; it references the memory allocated for the original buffer. You can use remote views only as a source for copy commands encoded by an [MTLBlitCommandEncoder](../mtlblitcommandencoder.md). For more information, see [Transferring data between connected GPUs](../transferring-data-between-connected-gpus.md).

## See Also

### Creating views of buffers on other GPUs

- [remoteStorageBuffer](remotestoragebuffer.md): Deprecated. The buffer on another GPU that the buffer was created from, if any.
