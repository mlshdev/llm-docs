> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/init

# init

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [Create](create.md): Beta.
- [IOUserVideoDriver](../iouservideodriver.md): Beta. A video driver.
