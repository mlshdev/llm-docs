> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodevice/getcurrentclientiotime

# GetCurrentClientIOTime

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Gets the current sample/host time pair in the ring buffer written to or read from by the client

## Declaration

```objectivec
void GetCurrentClientIOTime(bool in_is_input, uint64_t *out_sample_time, uint64_t *out_host_time);
```

## Parameters

- `in_is_input`: Bool value indicating if client IO time is for input or output. true for input, false for output

## See Also

### Performing I/O

- [StartIO](startio.md): Beta. Tells the device to start IO.
- [StopIO](stopio.md): Beta. Tells the device to stop IO.
- [IOUserVideoStartStopFlags](../videodriverkit/iouservideostartstopflags.md): Beta. Flags used to indicate how I/O is starting or stopping.
- [SetIOOperationHandler](setiooperationhandler.md): Beta. Sets the IOOperationHandler block on the device.
- [IOOperationHandler](../videodriverkit/iooperationhandler.md): Beta. A block that tells the device to perform an IOUserVideoIOOperation.
