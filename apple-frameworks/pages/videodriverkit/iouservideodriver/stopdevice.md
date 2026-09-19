> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodriver/stopdevice

# StopDevice

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Tells the driver to stop IO on an video device.

## Declaration

```objectivec
virtual kern_return_t StopDevice(IOUserVideoObjectID in_object_id, IOUserVideoStartStopFlags in_flags);
```

## Parameters

- `in_object_id`: IOUserVideoObjectID of the device to stop IO.
- `in_flags`: IOUserVideoStartStopFlags to indicate how IO is stopping.

<a id="discussion"></a>

## Discussion

The default implementation always returns `kIOReturnSuccess`. Subclass and override this method to handle any hardware specific things when IO is stopping, then call the superclass implementation to update IO state. StopIO will be called on the video device.

## See Also

### Starting and stopping the driver

- [StartDevice](startdevice.md): Beta. Tells the driver to start IO on an video device.
- [IOUserVideoObjectID](../videodriverkit/iouservideoobjectid.md): Beta. A handle for a a specific video object.
- [IOUserVideoStartStopFlags](../videodriverkit/iouservideostartstopflags.md): Beta. Flags used to indicate how I/O is starting or stopping.
