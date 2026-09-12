> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/removeallbuffers](https://developer.apple.com/documentation/videodriverkit/iouservideostream/removeallbuffers)

# removeAllBuffers

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

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

- [GetBufferCount](getbuffercount.md): Returns the number of buffers in the buffer queue.
- [GetBufferList](getbufferlist.md): Gets an array containing all the buffers in the video stream.
- [GetBufferWithID](getbufferwithid.md)
- [addBuffer](addbuffer.md): Add a buffer to a video stream.
- [addBuffers](addbuffers.md)
- [enqueueOutputBuffer](enqueueoutputbuffer.md)
- [IOUserVideoBuffer](../iouservideobuffer.md)
- [SendOutputBufferNotification](sendoutputbuffernotification.md): Sends a notification to the host that data is available for reading on the output queue.
