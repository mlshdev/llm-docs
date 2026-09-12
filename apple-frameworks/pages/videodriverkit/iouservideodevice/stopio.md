> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodevice/stopio](https://developer.apple.com/documentation/videodriverkit/iouservideodevice/stopio)

# StopIO

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Tells the device to stop IO.

## Declaration

```objectivec
virtual kern_return_t StopIO(IOUserVideoStartStopFlags in_flags);
```

## Parameters

- `in_flags`: IOUserVideoStartStopFlags to indicate how IO is stopping.

<a id="discussion"></a>

## Discussion

The default implementation always returns `kIOReturnSuccess`. Subclass and override this method to handle any hardware specific things when IO is stopping, then call the superclass implementation to update IO state. StopIO will also be called for all streams that were added to the device.

## See Also

### Performing I/O

- [StartIO](startio.md): Tells the device to start IO.
- [IOUserVideoStartStopFlags](../videodriverkit/iouservideostartstopflags.md): Flags used to indicate how I/O is starting or stopping.
- [GetCurrentClientIOTime](getcurrentclientiotime.md): Gets the current sample/host time pair in the ring buffer written to or read from by the client
- [SetIOOperationHandler](setiooperationhandler.md): Sets the IOOperationHandler block on the device.
- [IOOperationHandler](../videodriverkit/iooperationhandler.md): A block that tells the device to perform an IOUserVideoIOOperation.
