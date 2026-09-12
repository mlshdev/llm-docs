> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodriver/startdevice](https://developer.apple.com/documentation/videodriverkit/iouservideodriver/startdevice)

# StartDevice

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Tells the driver to start IO on an video device.

## Declaration

```objectivec
virtual kern_return_t StartDevice(IOUserVideoObjectID in_object_id, IOUserVideoStartStopFlags in_flags);
```

## Parameters

- `in_object_id`: IOUserVideoObjectID of the device to start IO.
- `in_flags`: IOUserVideoStartStopFlags to indicate how IO is starting.

<a id="discussion"></a>

## Discussion

The default implementation always returns `kIOReturnSuccess`. Subclass and override this method to handle any hardware specific things when IO is starting on the device, then call the superclass implementation to update IO state. This call is expected to always succeed or fail. The hardware can take as long as necessary in this call such that it always either succeeds (and `kIOReturnSuccess`) or fails. StartIO will be called on the video device.

## See Also

### Starting and stopping the driver

- [StopDevice](stopdevice.md): Tells the driver to stop IO on an video device.
- [IOUserVideoObjectID](../videodriverkit/iouservideoobjectid.md): A handle for a a specific video object.
- [IOUserVideoStartStopFlags](../videodriverkit/iouservideostartstopflags.md): Flags used to indicate how I/O is starting or stopping.
