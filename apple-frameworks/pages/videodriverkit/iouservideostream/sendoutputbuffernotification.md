> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/sendoutputbuffernotification

# SendOutputBufferNotification

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Sends a notification to the host that data is available for reading on the output queue.

## Declaration

```objectivec
kern_return_t SendOutputBufferNotification();
```

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` if the notification was successfully sent.

<a id="discussion"></a>

## Discussion

This will result in the user’s output handler being called, if they registered one.

## See Also

### Working with video buffers

- [GetBufferCount](getbuffercount.md): Beta. Returns the number of buffers in the buffer queue.
- [GetBufferList](getbufferlist.md): Beta. Gets an array containing all the buffers in the video stream.
- [GetBufferWithID](getbufferwithid.md): Beta.
- [addBuffer](addbuffer.md): Beta. Add a buffer to a video stream.
- [addBuffers](addbuffers.md): Beta.
- [enqueueOutputBuffer](enqueueoutputbuffer.md): Beta.
- [IOUserVideoBuffer](../iouservideobuffer.md): Beta.
- [removeAllBuffers](removeallbuffers.md): Beta. Removes all buffers from the video stream.
