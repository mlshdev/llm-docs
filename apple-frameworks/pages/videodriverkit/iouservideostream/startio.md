> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/startio](https://developer.apple.com/documentation/videodriverkit/iouservideostream/startio)

# StartIO

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Tells the stream to start IO.

## Declaration

```objectivec
virtual kern_return_t StartIO(IOUserVideoStartStopFlags in_flags);
```

## Parameters

- `in_flags`: Flags to indicate how IO is starting.

<a id="discussion"></a>

## Discussion

The default implementation always returns `kIOReturnSuccess`. Subclass and override this method to handle any hardware specific things when IO is starting, then call the superclass implementation to update IO state. This call is expected to always succeed or fail. The hardware can take as long as necessary in this call such that it always either succeeds (and `kIOReturnSuccess`) or fails.

## See Also

### Performing I/O

- [StopIO](stopio.md): Tells the stream to stop IO.
- [IOUserVideoStartStopFlags](../videodriverkit/iouservideostartstopflags.md): Flags used to indicate how I/O is starting or stopping.
- [InputNotification](inputnotification.md)
