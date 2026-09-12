> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/addbuffer](https://developer.apple.com/documentation/videodriverkit/iouservideostream/addbuffer)

# addBuffer

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Add a buffer to a video stream.

## Declaration

```objectivec
kern_return_t addBuffer(IOUserVideoBuffer *buffer);
```

<a id="discussion"></a>

## Discussion

Adds an IOUserVideoBuffer to an IOUserVideoStream. It will be added to the end of the buffer array, so the buffer ID of existing buffers will not change.

## See Also

### Working with video buffers

- [GetBufferCount](getbuffercount.md): Returns the number of buffers in the buffer queue.
- [GetBufferList](getbufferlist.md): Gets an array containing all the buffers in the video stream.
- [GetBufferWithID](getbufferwithid.md)
- [addBuffers](addbuffers.md)
- [enqueueOutputBuffer](enqueueoutputbuffer.md)
- [IOUserVideoBuffer](../iouservideobuffer.md)
- [removeAllBuffers](removeallbuffers.md): Removes all buffers from the video stream.
- [SendOutputBufferNotification](sendoutputbuffernotification.md): Sends a notification to the host that data is available for reading on the output queue.
