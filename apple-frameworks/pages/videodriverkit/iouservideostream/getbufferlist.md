> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/getbufferlist

# GetBufferList

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Gets an array containing all the buffers in the video stream.

## Declaration

```objectivec
OSSharedPtr<OSArray> GetBufferList();
```

<a id="return-value"></a>

## Return Value

All the buffers in the stream, in order of their buffer identifier.

## See Also

### Working with video buffers

- [GetBufferCount](getbuffercount.md): Beta. Returns the number of buffers in the buffer queue.
- [GetBufferWithID](getbufferwithid.md): Beta.
- [addBuffer](addbuffer.md): Beta. Add a buffer to a video stream.
- [addBuffers](addbuffers.md): Beta.
- [enqueueOutputBuffer](enqueueoutputbuffer.md): Beta.
- [IOUserVideoBuffer](../iouservideobuffer.md): Beta.
- [removeAllBuffers](removeallbuffers.md): Beta. Removes all buffers from the video stream.
- [SendOutputBufferNotification](sendoutputbuffernotification.md): Beta. Sends a notification to the host that data is available for reading on the output queue.
