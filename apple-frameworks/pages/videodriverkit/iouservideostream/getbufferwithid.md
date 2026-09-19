> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/getbufferwithid

# GetBufferWithID

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

## Declaration

```objectivec
OSSharedPtr<IOUserVideoBuffer> GetBufferWithID(uint32_t bufferID);
```

## Parameters

- `bufferID`: The buffer identifier of the buffer in the queue.

<a id="return-value"></a>

## Return Value

The buffer, or `NULL` if the buffer identifier was invalid for this stream.

## See Also

### Working with video buffers

- [GetBufferCount](getbuffercount.md): Beta. Returns the number of buffers in the buffer queue.
- [GetBufferList](getbufferlist.md): Beta. Gets an array containing all the buffers in the video stream.
- [addBuffer](addbuffer.md): Beta. Add a buffer to a video stream.
- [addBuffers](addbuffers.md): Beta.
- [enqueueOutputBuffer](enqueueoutputbuffer.md): Beta.
- [IOUserVideoBuffer](../iouservideobuffer.md): Beta.
- [removeAllBuffers](removeallbuffers.md): Beta. Removes all buffers from the video stream.
- [SendOutputBufferNotification](sendoutputbuffernotification.md): Beta. Sends a notification to the host that data is available for reading on the output queue.
