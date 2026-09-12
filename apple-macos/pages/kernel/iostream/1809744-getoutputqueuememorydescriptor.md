> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostream/1809744-getoutputqueuememorydescriptor](https://developer.apple.com/documentation/kernel/iostream/1809744-getoutputqueuememorydescriptor)

# getOutputQueueMemoryDescriptor

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOMemoryDescriptor *getOutputQueueMemoryDescriptor(
 void); 
```

<a id="return_value"></a>

## Return Value

An IOMemoryDescriptor object repesenting the shared memory output queue buffer.

## See Also

### Managing shared queues

- [createQueues](1809702-createqueues.md): Creates the shared input and output queues, without regard to whether the stream is open or not. Normally this is called by handleOpen().
- [destroyQueues](1809709-destroyqueues.md): Releases the shared input and output queues.
- [getInputQueue](1809718-getinputqueue.md)
- [getInputQueueMemoryDescriptor](1809727-getinputqueuememorydescriptor.md)
- [getOutputQueue](1809738-getoutputqueue.md)
