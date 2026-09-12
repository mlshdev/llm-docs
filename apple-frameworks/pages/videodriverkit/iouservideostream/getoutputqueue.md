> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/getoutputqueue](https://developer.apple.com/documentation/videodriverkit/iouservideostream/getoutputqueue)

# GetOutputQueue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the memory descriptor used for video IO that was initialized with or set on the video stream.

## Declaration

```objectivec
IOStreamBufferQueue * GetOutputQueue();
```

<a id="return-value"></a>

## Return Value

A pointer to the output buffer queue for the stream, or `NULL` if the stream is not open and the queue has not been created yet.

## See Also

### Working with queues

- [GetInputQueue](getinputqueue.md): Gets the buffer queue for the stream.
- [createQueues](createqueues.md): Creates the shared input and output queues, without regard to whether the stream is open or not.
- [destroyQueues](destroyqueues.md): Releases the shared input and output queues.
- [dequeueInputEntry](dequeueinputentry.md)
- [enqueueOutputEntry](enqueueoutputentry.md)
- [SendBufferQueueChange](sendbufferqueuechange.md): Sends a notification to the host that the buffer queue has changed.
- [IOStreamBufferQueue](../iostreambufferqueue.md)
