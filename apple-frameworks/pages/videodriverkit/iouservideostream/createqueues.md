> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/createqueues](https://developer.apple.com/documentation/videodriverkit/iouservideostream/createqueues)

# createQueues

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

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

- [GetInputQueue](getinputqueue.md): Gets the buffer queue for the stream.
- [GetOutputQueue](getoutputqueue.md): Gets the memory descriptor used for video IO that was initialized with or set on the video stream.
- [destroyQueues](destroyqueues.md): Releases the shared input and output queues.
- [dequeueInputEntry](dequeueinputentry.md)
- [enqueueOutputEntry](enqueueoutputentry.md)
- [SendBufferQueueChange](sendbufferqueuechange.md): Sends a notification to the host that the buffer queue has changed.
- [IOStreamBufferQueue](../iostreambufferqueue.md)
