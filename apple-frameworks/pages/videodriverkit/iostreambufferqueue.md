> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iostreambufferqueue

# IOStreamBufferQueue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 27.0+ beta

## Declaration

```objectivec
struct IOStreamBufferQueue;
```

## Topics

### Accessing queue contents

- [entryCount](iostreambufferqueue/entrycount.md): Beta.
- [headIndex](iostreambufferqueue/headindex.md): Beta.
- [tailIndex](iostreambufferqueue/tailindex.md): Beta.
- [queue](iostreambufferqueue/queue.md): Beta.
- [IOStreamBufferQueueEntry](iostreambufferqueueentry.md): Beta.

### Accessing reserved properties

Don’t use these properties, which VideoDriverKit reserves for its own use.

- [reserved](iostreambufferqueue/reserved.md): Beta.

## See Also

### Working with queues

- [GetInputQueue](iouservideostream/getinputqueue.md): Beta. Gets the buffer queue for the stream.
- [GetOutputQueue](iouservideostream/getoutputqueue.md): Beta. Gets the memory descriptor used for video IO that was initialized with or set on the video stream.
- [createQueues](iouservideostream/createqueues.md): Beta. Creates the shared input and output queues, without regard to whether the stream is open or not.
- [destroyQueues](iouservideostream/destroyqueues.md): Beta. Releases the shared input and output queues.
- [dequeueInputEntry](iouservideostream/dequeueinputentry.md): Beta.
- [enqueueOutputEntry](iouservideostream/enqueueoutputentry.md): Beta.
- [SendBufferQueueChange](iouservideostream/sendbufferqueuechange.md): Beta. Sends a notification to the host that the buffer queue has changed.
