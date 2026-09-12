> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/create](https://developer.apple.com/documentation/videodriverkit/iouservideostream/create)

# Create

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 27.0+

## Declaration

```objectivec
static OSSharedPtr<IOUserVideoStream> Create(IOUserVideoDriver *in_driver, OSString *in_stream_uid, IOUserVideoStreamDirection in_direction, OSArray *in_video_buffers);
```

## See Also

### Creating a video stream

- [init](init.md): Initializes an video stream.
- [IOUserVideoDriver](../iouservideodriver.md): A video driver.
