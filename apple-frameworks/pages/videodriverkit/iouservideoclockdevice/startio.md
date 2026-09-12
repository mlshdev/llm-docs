> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/startio](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/startio)

# StartIO

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Tells the clock device to start IO.

## Declaration

```objectivec
virtual kern_return_t StartIO(IOUserVideoStartStopFlags in_flags);
```

## Parameters

- `in_flags`: IOUserVideoStartStopFlags to indicate how IO is starting.

<a id="discussion"></a>

## Discussion

The default implementation always returns `kIOReturnSuccess`. Subclass and override this method to handle any hardware specific things when IO is starting, then call the superclass implementation to update IO state. This call is expected to always succeed or fail. The hardware can take as long as necessary in this call such that it always either succeeds (and `kIOReturnSuccess`) or fails.

## See Also

### Performing I/O

- [StopIO](stopio.md): Tells the clock device to stop IO.
- [IOUserVideoStartStopFlags](../videodriverkit/iouservideostartstopflags.md): Flags used to indicate how I/O is starting or stopping.
