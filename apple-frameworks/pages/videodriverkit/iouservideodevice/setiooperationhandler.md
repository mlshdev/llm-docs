> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodevice/setiooperationhandler](https://developer.apple.com/documentation/videodriverkit/iouservideodevice/setiooperationhandler)

# SetIOOperationHandler

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets the IOOperationHandler block on the device.

## Declaration

```objectivec
kern_return_t SetIOOperationHandler(IOOperationHandler in_io_operation_block);
```

## Parameters

- `in_io_operation_block`: The IOOperationHandler block to be called when the host performs an IO operation.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` if the IOOperationHandler block was successfuly set on the device

<a id="discussion"></a>

## Discussion

The IOOperationHandler will be invoked when a IO operation is performed by the host. The handler will be called on a real time priority thread, so any work should only call real-time safe operations and never block. Many of the calls to various IOUserVideoObjects are syncrhonized against the work queue, so any necessary information to perform IO should be cached and captured in the block.

## See Also

### Performing I/O

- [StartIO](startio.md): Tells the device to start IO.
- [StopIO](stopio.md): Tells the device to stop IO.
- [IOUserVideoStartStopFlags](../videodriverkit/iouservideostartstopflags.md): Flags used to indicate how I/O is starting or stopping.
- [GetCurrentClientIOTime](getcurrentclientiotime.md): Gets the current sample/host time pair in the ring buffer written to or read from by the client
- [IOOperationHandler](../videodriverkit/iooperationhandler.md): A block that tells the device to perform an IOUserVideoIOOperation.
