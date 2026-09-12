> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodevice/startio](https://developer.apple.com/documentation/videodriverkit/iouservideodevice/startio)

# StartIO

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Tells the device to start IO.

## Declaration

```objectivec
virtual kern_return_t StartIO(IOUserVideoStartStopFlags in_flags);
```

## Parameters

- `in_flags`: An IOUserVideoStartStopFlags value that indicates how IO is starting.

<a id="return-value"></a>

## Return Value

A kern_return_t value indicating whether IO started successfully.

<a id="discussion"></a>

## Discussion

The default implementation always returns `kIOReturnSuccess`. Subclass and override this method to handle any hardware-specific things when IO is starting. Then call the superclass implementation to update IO state. This call always completes with a definitive success or failure result. The hardware can take as long as necessary such that it always either succeeds (and returns `kIOReturnSuccess`) or fails. The system also calls StartIO for all streams added to the device.

## See Also

### Performing I/O

- [StopIO](stopio.md): Tells the device to stop IO.
- [IOUserVideoStartStopFlags](../videodriverkit/iouservideostartstopflags.md): Flags used to indicate how I/O is starting or stopping.
- [GetCurrentClientIOTime](getcurrentclientiotime.md): Gets the current sample/host time pair in the ring buffer written to or read from by the client
- [SetIOOperationHandler](setiooperationhandler.md): Sets the IOOperationHandler block on the device.
- [IOOperationHandler](../videodriverkit/iooperationhandler.md): A block that tells the device to perform an IOUserVideoIOOperation.
