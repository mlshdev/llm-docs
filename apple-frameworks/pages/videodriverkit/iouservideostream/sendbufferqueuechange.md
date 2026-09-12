> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/sendbufferqueuechange](https://developer.apple.com/documentation/videodriverkit/iouservideostream/sendbufferqueuechange)

# SendBufferQueueChange

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sends a notification to the host that the buffer queue has changed.

## Declaration

```objectivec
kern_return_t SendBufferQueueChange();
```

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` if the notification was successfully sent.

<a id="discussion"></a>

## Discussion

This will result in the user’s buffer queue changed handler being called, if they registered one.

## See Also

### Working with queues

- [GetInputQueue](getinputqueue.md): Gets the buffer queue for the stream.
- [GetOutputQueue](getoutputqueue.md): Gets the memory descriptor used for video IO that was initialized with or set on the video stream.
- [createQueues](createqueues.md): Creates the shared input and output queues, without regard to whether the stream is open or not.
- [destroyQueues](destroyqueues.md): Releases the shared input and output queues.
- [dequeueInputEntry](dequeueinputentry.md)
- [enqueueOutputEntry](enqueueoutputentry.md)
- [IOStreamBufferQueue](../iostreambufferqueue.md)
