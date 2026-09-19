> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/enqueueoutputbuffer

# enqueueOutputBuffer

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

## Declaration

```objectivec
kern_return_t enqueueOutputBuffer(IOUserVideoBuffer *buffer, uint32_t dataOffset, uint32_t dataLength, uint32_t controlOffset, uint32_t controlLength);
```

## Parameters

- `buffer`:
- `dataOffset`:
- `dataLength`:
- `controlOffset`:
- `controlLength`:

<a id="discussion"></a>

## Discussion

A convenience method for enqueueing a buffer.

## See Also

### Working with video buffers

- [GetBufferCount](getbuffercount.md): Beta. Returns the number of buffers in the buffer queue.
- [GetBufferList](getbufferlist.md): Beta. Gets an array containing all the buffers in the video stream.
- [GetBufferWithID](getbufferwithid.md): Beta.
- [addBuffer](addbuffer.md): Beta. Add a buffer to a video stream.
- [addBuffers](addbuffers.md): Beta.
- [IOUserVideoBuffer](../iouservideobuffer.md): Beta.
- [removeAllBuffers](removeallbuffers.md): Beta. Removes all buffers from the video stream.
- [SendOutputBufferNotification](sendoutputbuffernotification.md): Beta. Sends a notification to the host that data is available for reading on the output queue.
