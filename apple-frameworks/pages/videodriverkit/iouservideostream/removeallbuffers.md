> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/removeallbuffers

# removeAllBuffers

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Removes all buffers from the video stream.

## Declaration

```objectivec
kern_return_t removeAllBuffers();
```

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` if all the buffers were successfully removed.

<a id="discussion"></a>

## Discussion

Buffers cannot be removed while the stream is open, as this will change the buffer identifiers of existing buffers.

## See Also

### Working with video buffers

- [GetBufferCount](getbuffercount.md): Beta. Returns the number of buffers in the buffer queue.
- [GetBufferList](getbufferlist.md): Beta. Gets an array containing all the buffers in the video stream.
- [GetBufferWithID](getbufferwithid.md): Beta.
- [addBuffer](addbuffer.md): Beta. Add a buffer to a video stream.
- [addBuffers](addbuffers.md): Beta.
- [enqueueOutputBuffer](enqueueoutputbuffer.md): Beta.
- [IOUserVideoBuffer](../iouservideobuffer.md): Beta.
- [SendOutputBufferNotification](sendoutputbuffernotification.md): Beta. Sends a notification to the host that data is available for reading on the output queue.
