> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/iouseraudiostartstopflags](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudiostartstopflags)

# IOUserAudioStartStopFlags

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 21.0+

Values that indicate I/O starts or stops.

## Declaration

```objectivec
enum IOUserAudioStartStopFlags : uint64_t;
```

## Topics

### Start/Stop Behaviors

- [None](iouseraudiostartstopflags/none.md): A flag that indicates starting or stopping for normal I/O operation.
- [Prewarm](iouseraudiostartstopflags/prewarm.md): A flag that indicates starting or stopping for prewarming.

## See Also

### Performing I/O

- [StartIO](../iouseraudioclockdevice/startio.md): Tells the clock device to start I/O.
- [StopIO](../iouseraudioclockdevice/stopio.md): Tells the clock device to stop I/O.
