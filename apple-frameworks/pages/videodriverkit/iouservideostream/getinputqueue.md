> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/getinputqueue

# GetInputQueue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Gets the buffer queue for the stream.

## Declaration

```objectivec
IOStreamBufferQueue * GetInputQueue();
```

<a id="return-value"></a>

## Return Value

The input buffer queue for the stream, or `NULL` if the stream is not open and the queue has not been created yet.

## See Also

### Working with queues

- [GetOutputQueue](getoutputqueue.md): Beta. Gets the memory descriptor used for video IO that was initialized with or set on the video stream.
- [createQueues](createqueues.md): Beta. Creates the shared input and output queues, without regard to whether the stream is open or not.
- [destroyQueues](destroyqueues.md): Beta. Releases the shared input and output queues.
- [dequeueInputEntry](dequeueinputentry.md): Beta.
- [enqueueOutputEntry](enqueueoutputentry.md): Beta.
- [SendBufferQueueChange](sendbufferqueuechange.md): Beta. Sends a notification to the host that the buffer queue has changed.
- [IOStreamBufferQueue](../iostreambufferqueue.md): Beta.
