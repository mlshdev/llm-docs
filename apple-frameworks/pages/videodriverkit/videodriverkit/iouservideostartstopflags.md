> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/videodriverkit/iouservideostartstopflags](https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideostartstopflags)

# IOUserVideoStartStopFlags

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 27.0+

Flags used to indicate how I/O is starting or stopping.

## Declaration

```objectivec
enum IOUserVideoStartStopFlags : uint64_t;
```

## Topics

### Start/stop behaviors

- [None](iouservideostartstopflags/none.md): A flag that indicates starting or stopping for normal I/O operation.
- [Prewarm](iouservideostartstopflags/prewarm.md): A flag that indicates starting or stopping for prewarming.

## See Also

### Performing I/O

- [StartIO](../iouservideoclockdevice/startio.md): Tells the clock device to start IO.
- [StopIO](../iouservideoclockdevice/stopio.md): Tells the clock device to stop IO.
