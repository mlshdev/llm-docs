> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/getbufferwithid](https://developer.apple.com/documentation/videodriverkit/iouservideostream/getbufferwithid)

# GetBufferWithID

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

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

- [GetBufferCount](getbuffercount.md): Returns the number of buffers in the buffer queue.
- [GetBufferList](getbufferlist.md): Gets an array containing all the buffers in the video stream.
- [addBuffer](addbuffer.md): Add a buffer to a video stream.
- [addBuffers](addbuffers.md)
- [enqueueOutputBuffer](enqueueoutputbuffer.md)
- [IOUserVideoBuffer](../iouservideobuffer.md)
- [removeAllBuffers](removeallbuffers.md): Removes all buffers from the video stream.
- [SendOutputBufferNotification](sendoutputbuffernotification.md): Sends a notification to the host that data is available for reading on the output queue.
