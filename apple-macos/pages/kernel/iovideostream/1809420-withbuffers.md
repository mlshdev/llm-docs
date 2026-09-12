> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iovideostream/1809420-withbuffers](https://developer.apple.com/documentation/kernel/iovideostream/1809420-withbuffers)

# withBuffers

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
static IOVideoStream* withBuffers(
 OSArray *buffers,
 IOStreamMode mode = kIOStreamModeOutput,
 IOItemCount queueLength = 0,
 OSDictionary *properties = 0); 
```

## Parameters

- `buffers`: An array of IOStreamBuffer objects which will be the buffers for this stream.
- `mode`: The initial mode of the video stream, either output, input, or input/output.
- `queueLength`: The nuber of queue entries to reserve in the input and output queue. Zero means to make the queues big enough to accommodate all the buffers at once.
- `properties`: A dictionary of properties which will be set on the video stream.

## See Also

### Miscellaneous

- [getStreamMode](1809380-getstreammode.md): Returns the mode of the stream, either input or output.
- [initWithBuffers](1809391-initwithbuffers.md)
- [setStreamMode](1809395-setstreammode.md): Sets the mode of the stream, either input or output.
- [startStream](1809402-startstream.md): Start sending data on a stream.
- [stopStream](1809407-stopstream.md): Stop sending data on a stream.
- [suspendStream](1809411-suspendstream.md): Temporarily suspend data flow on the stream.
