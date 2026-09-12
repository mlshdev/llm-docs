> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/dequeueinputentry](https://developer.apple.com/documentation/videodriverkit/iouservideostream/dequeueinputentry)

# dequeueInputEntry

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

## Declaration

```objectivec
kern_return_t dequeueInputEntry(IOStreamBufferQueueEntry *entry);
```

## Parameters

- `entry`:

## See Also

### Working with queues

- [GetInputQueue](getinputqueue.md): Gets the buffer queue for the stream.
- [GetOutputQueue](getoutputqueue.md): Gets the memory descriptor used for video IO that was initialized with or set on the video stream.
- [createQueues](createqueues.md): Creates the shared input and output queues, without regard to whether the stream is open or not.
- [destroyQueues](destroyqueues.md): Releases the shared input and output queues.
- [enqueueOutputEntry](enqueueoutputentry.md)
- [SendBufferQueueChange](sendbufferqueuechange.md): Sends a notification to the host that the buffer queue has changed.
- [IOStreamBufferQueue](../iostreambufferqueue.md)
