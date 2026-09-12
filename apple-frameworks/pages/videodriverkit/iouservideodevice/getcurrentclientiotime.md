> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodevice/getcurrentclientiotime](https://developer.apple.com/documentation/videodriverkit/iouservideodevice/getcurrentclientiotime)

# GetCurrentClientIOTime

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the current sample/host time pair in the ring buffer written to or read from by the client

## Declaration

```objectivec
void GetCurrentClientIOTime(bool in_is_input, uint64_t *out_sample_time, uint64_t *out_host_time);
```

## Parameters

- `in_is_input`: Bool value indicating if client IO time is for input or output. true for input, false for output

## See Also

### Performing I/O

- [StartIO](startio.md): Tells the device to start IO.
- [StopIO](stopio.md): Tells the device to stop IO.
- [IOUserVideoStartStopFlags](../videodriverkit/iouservideostartstopflags.md): Flags used to indicate how I/O is starting or stopping.
- [SetIOOperationHandler](setiooperationhandler.md): Sets the IOOperationHandler block on the device.
- [IOOperationHandler](../videodriverkit/iooperationhandler.md): A block that tells the device to perform an IOUserVideoIOOperation.
