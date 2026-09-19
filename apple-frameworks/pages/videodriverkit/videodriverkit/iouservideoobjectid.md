> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoobjectid

# IOUserVideoObjectID

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit 27.0+ beta

A handle for a a specific video object.

## Declaration

```objectivec
typedef uint32_t IOUserVideoObjectID;
```

## See Also

### Starting and stopping the driver

- [StartDevice](../iouservideodriver/startdevice.md): Beta. Tells the driver to start IO on an video device.
- [StopDevice](../iouservideodriver/stopdevice.md): Beta. Tells the driver to stop IO on an video device.
- [IOUserVideoStartStopFlags](iouservideostartstopflags.md): Beta. Flags used to indicate how I/O is starting or stopping.
