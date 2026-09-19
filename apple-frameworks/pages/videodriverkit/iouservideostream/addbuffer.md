> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/addbuffer

# addBuffer

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [GetBufferCount](getbuffercount.md): Beta. Returns the number of buffers in the buffer queue.
- [GetBufferList](getbufferlist.md): Beta. Gets an array containing all the buffers in the video stream.
- [GetBufferWithID](getbufferwithid.md): Beta.
- [addBuffers](addbuffers.md): Beta.
- [enqueueOutputBuffer](enqueueoutputbuffer.md): Beta.
- [IOUserVideoBuffer](../iouservideobuffer.md): Beta.
- [removeAllBuffers](removeallbuffers.md): Beta. Removes all buffers from the video stream.
- [SendOutputBufferNotification](sendoutputbuffernotification.md): Beta. Sends a notification to the host that data is available for reading on the output queue.
