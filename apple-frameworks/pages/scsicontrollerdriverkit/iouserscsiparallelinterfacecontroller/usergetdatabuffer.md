> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/usergetdatabuffer

# UserGetDataBuffer

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Gets the data buffer associated with a particular I/O request.

## Declaration

```objectivec
virtual kern_return_t UserGetDataBuffer(SCSIDeviceIdentifier targetID, uint64_t controllerTaskID, IOBufferMemoryDescriptor **buffer);
```

## Parameters

- `targetID`: The identifier of the target to check.
- `controllerTaskID`: A task identifiers that uniquely identifies this I/O. This should be the same as [fControllerTaskIdentifier](../scsiuserparalleltask/fcontrollertaskidentifier.md) in the [SCSIUserParallelTask](../scsiuserparalleltask.md) structure.
- `buffer`: On return, the retrieved [IOBufferMemoryDescriptor](../../driverkit/iobuffermemorydescriptor.md).

<a id="return-value"></a>

## Return Value

A value that indicates the result of getting the buffer. [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) indicates success. For error definitions, see [IOKit Constants](../../iokit/iokit_constants.md).

<a id="Discussion"></a>

## Discussion

Your dext class can call this method inside [UserProcessParallelTask](userprocessparalleltask.md) to get the data buffer associated with the I/O request identified by `controllerTaskID`. Calling this method can have a significant impact on performance, so call it only if you require access to the data buffer. The caller needs to prepare new DMA mappings for this buffer and can no longer use the mappings in [fBufferIOVMAddr](../scsiuserparalleltask/fbufferiovmaddr.md).

The framework releases the buffer when the caller invokes the parallel task completion callback. Don’t retain this buffer after invoking the task completion callback.
