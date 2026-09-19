> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideostartstopflags

# IOUserVideoStartStopFlags

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 27.0+ beta

Flags used to indicate how I/O is starting or stopping.

## Declaration

```objectivec
enum IOUserVideoStartStopFlags : uint64_t;
```

## Topics

### Start/stop behaviors

- [None](iouservideostartstopflags/none.md): Beta. A flag that indicates starting or stopping for normal I/O operation.
- [Prewarm](iouservideostartstopflags/prewarm.md): Beta. A flag that indicates starting or stopping for prewarming.

## See Also

### Performing I/O

- [StartIO](../iouservideoclockdevice/startio.md): Beta. Tells the clock device to start IO.
- [StopIO](../iouservideoclockdevice/stopio.md): Beta. Tells the clock device to stop IO.
