> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/createqueues

# createQueues

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Creates the shared input and output queues, without regard to whether the stream is open or not.

## Declaration

```objectivec
kern_return_t createQueues(uint32_t queueCount, uint32_t options);
```

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` if the queues were successfully created.

<a id="discussion"></a>

## Discussion

Normally, `IOUserVideoStream::init` calls this method.

## See Also

### Working with queues

- [GetInputQueue](getinputqueue.md): Beta. Gets the buffer queue for the stream.
- [GetOutputQueue](getoutputqueue.md): Beta. Gets the memory descriptor used for video IO that was initialized with or set on the video stream.
- [destroyQueues](destroyqueues.md): Beta. Releases the shared input and output queues.
- [dequeueInputEntry](dequeueinputentry.md): Beta.
- [enqueueOutputEntry](enqueueoutputentry.md): Beta.
- [SendBufferQueueChange](sendbufferqueuechange.md): Beta. Sends a notification to the host that the buffer queue has changed.
- [IOStreamBufferQueue](../iostreambufferqueue.md): Beta.
