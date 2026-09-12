> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/getinputqueuememorydescriptor](https://developer.apple.com/documentation/videodriverkit/iouservideostream/getinputqueuememorydescriptor)

# GetInputQueueMemoryDescriptor

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Returns an memory descriptor for the shared memory input queue buffer.

## Declaration

```objectivec
OSSharedPtr<IOMemoryDescriptor> GetInputQueueMemoryDescriptor();
```

## See Also

### Working with memory descriptors

- [GetOutputControlMemoryDescriptor](getoutputcontrolmemorydescriptor.md): Gets the memory descriptor used for the control data part of a buffer.
- [GetOutputDataMemoryDescriptor](getoutputdatamemorydescriptor.md): Gets the memory descriptor used for the video data part of a buffer.
- [GetOutputQueueMemoryDescriptor](getoutputqueuememorydescriptor.md): Returns an memory descriptorrepesenting the shared memory output queue buffer.
- [GetMemoryObjectID](getmemoryobjectid.md): Gets the video object identifier for a memory object.
