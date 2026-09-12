> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostream/1809709-destroyqueues](https://developer.apple.com/documentation/kernel/iostream/1809709-destroyqueues)

# destroyQueues

**Interface language:** Objective-C

**Framework:** Kernel

Releases the shared input and output queues.

## Declaration

```objectivec
virtual IOReturn destroyQueues(
 void ); 
```

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if the queues were successfully destroyed. The queues cannot be destroyed while the stream is open by a client.

## See Also

### Managing shared queues

- [createQueues](1809702-createqueues.md): Creates the shared input and output queues, without regard to whether the stream is open or not. Normally this is called by handleOpen().
- [getInputQueue](1809718-getinputqueue.md)
- [getInputQueueMemoryDescriptor](1809727-getinputqueuememorydescriptor.md)
- [getOutputQueue](1809738-getoutputqueue.md)
- [getOutputQueueMemoryDescriptor](1809744-getoutputqueuememorydescriptor.md)
