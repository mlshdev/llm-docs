> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/sendbufferqueuechange

# SendBufferQueueChange

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [GetInputQueue](getinputqueue.md): Beta. Gets the buffer queue for the stream.
- [GetOutputQueue](getoutputqueue.md): Beta. Gets the memory descriptor used for video IO that was initialized with or set on the video stream.
- [createQueues](createqueues.md): Beta. Creates the shared input and output queues, without regard to whether the stream is open or not.
- [destroyQueues](destroyqueues.md): Beta. Releases the shared input and output queues.
- [dequeueInputEntry](dequeueinputentry.md): Beta.
- [enqueueOutputEntry](enqueueoutputentry.md): Beta.
- [IOStreamBufferQueue](../iostreambufferqueue.md): Beta.
