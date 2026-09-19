> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/create

# Create

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 27.0+ beta

## Declaration

```objectivec
static OSSharedPtr<IOUserVideoStream> Create(IOUserVideoDriver *in_driver, OSString *in_stream_uid, IOUserVideoStreamDirection in_direction, OSArray *in_video_buffers);
```

## See Also

### Creating a video stream

- [init](init.md): Beta. Initializes an video stream.
- [IOUserVideoDriver](../iouservideodriver.md): Beta. A video driver.
