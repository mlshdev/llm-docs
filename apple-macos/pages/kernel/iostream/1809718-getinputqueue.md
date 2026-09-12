> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostream/1809718-getinputqueue](https://developer.apple.com/documentation/kernel/iostream/1809718-getinputqueue)

# getInputQueue

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOStreamBufferQueue *getInputQueue(
 void); 
```

<a id="return_value"></a>

## Return Value

A pointer to the input IOStreamBufferQueue structure for the stream, or NULL if the stream is not open and the queue has not been created yet.

## See Also

### Managing shared queues

- [createQueues](1809702-createqueues.md): Creates the shared input and output queues, without regard to whether the stream is open or not. Normally this is called by handleOpen().
- [destroyQueues](1809709-destroyqueues.md): Releases the shared input and output queues.
- [getInputQueueMemoryDescriptor](1809727-getinputqueuememorydescriptor.md)
- [getOutputQueue](1809738-getoutputqueue.md)
- [getOutputQueueMemoryDescriptor](1809744-getoutputqueuememorydescriptor.md)
