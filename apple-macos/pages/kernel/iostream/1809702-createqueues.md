> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iostream/1809702-createqueues

# createQueues

**Interface language:** Objective-C

**Framework:** Kernel

Creates the shared input and output queues, without regard to whether the stream is open or not. Normally this is called by handleOpen().

## Declaration

```objectivec
virtual IOReturn createQueues(
 IOItemCount queueLength = 0,
 IOOptionBits options = 0 ); 
```

## Parameters

- `queueLength`:
- `options`:

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if the queues were successfully created.

## See Also

### Managing shared queues

- [destroyQueues](1809709-destroyqueues.md): Releases the shared input and output queues.
- [getInputQueue](1809718-getinputqueue.md)
- [getInputQueueMemoryDescriptor](1809727-getinputqueuememorydescriptor.md)
- [getOutputQueue](1809738-getoutputqueue.md)
- [getOutputQueueMemoryDescriptor](1809744-getoutputqueuememorydescriptor.md)
