> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/init](https://developer.apple.com/documentation/videodriverkit/iouservideostream/init)

# init

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Initializes an video stream.

## Declaration

```objectivec
virtual bool init(IOUserVideoDriver *in_driver, OSString *in_stream_uid, IOUserVideoStreamDirection in_direction, OSArray *in_video_buffers);
```

## Parameters

- `in_driver`: The video driver that owns this object.
- `in_direction`: The stream’s direction
- `in_video_buffers`: An array of video buffers.

<a id="return-value"></a>

## Return Value

True on success.

## See Also

### Creating a video stream

- [Create](create.md)
- [IOUserVideoDriver](../iouservideodriver.md): A video driver.
