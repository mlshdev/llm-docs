> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/stopio](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/stopio)

# StopIO

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Tells the clock device to stop IO.

## Declaration

```objectivec
virtual kern_return_t StopIO(IOUserVideoStartStopFlags in_flags);
```

## Parameters

- `in_flags`: IOUserVideoStartStopFlags to indicate how IO is stopping.

<a id="discussion"></a>

## Discussion

The default implementation always returns `kIOReturnSuccess`. Subclass and override this method to handle any hardware specific things when IO is stopping, then call the superclass implementation to update IO state.

## See Also

### Performing I/O

- [StartIO](startio.md): Tells the clock device to start IO.
- [IOUserVideoStartStopFlags](../videodriverkit/iouservideostartstopflags.md): Flags used to indicate how I/O is starting or stopping.
