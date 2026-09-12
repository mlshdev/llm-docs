> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/getbuffercount](https://developer.apple.com/documentation/videodriverkit/iouservideostream/getbuffercount)

# GetBufferCount

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Returns the number of buffers in the buffer queue.

## Declaration

```objectivec
uint32_t GetBufferCount();
```

## See Also

### Working with video buffers

- [GetBufferList](getbufferlist.md): Gets an array containing all the buffers in the video stream.
- [GetBufferWithID](getbufferwithid.md)
- [addBuffer](addbuffer.md): Add a buffer to a video stream.
- [addBuffers](addbuffers.md)
- [enqueueOutputBuffer](enqueueoutputbuffer.md)
- [IOUserVideoBuffer](../iouservideobuffer.md)
- [removeAllBuffers](removeallbuffers.md): Removes all buffers from the video stream.
- [SendOutputBufferNotification](sendoutputbuffernotification.md): Sends a notification to the host that data is available for reading on the output queue.
