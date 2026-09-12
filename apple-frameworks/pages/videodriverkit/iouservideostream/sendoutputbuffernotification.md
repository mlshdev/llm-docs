> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/sendoutputbuffernotification](https://developer.apple.com/documentation/videodriverkit/iouservideostream/sendoutputbuffernotification)

# SendOutputBufferNotification

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

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

- [GetBufferCount](getbuffercount.md): Returns the number of buffers in the buffer queue.
- [GetBufferList](getbufferlist.md): Gets an array containing all the buffers in the video stream.
- [GetBufferWithID](getbufferwithid.md)
- [addBuffer](addbuffer.md): Add a buffer to a video stream.
- [addBuffers](addbuffers.md)
- [enqueueOutputBuffer](enqueueoutputbuffer.md)
- [IOUserVideoBuffer](../iouservideobuffer.md)
- [removeAllBuffers](removeallbuffers.md): Removes all buffers from the video stream.
