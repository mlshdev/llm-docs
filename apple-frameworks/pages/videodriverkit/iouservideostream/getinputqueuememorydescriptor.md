> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/getinputqueuememorydescriptor

# GetInputQueueMemoryDescriptor

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Returns an memory descriptor for the shared memory input queue buffer.

## Declaration

```objectivec
OSSharedPtr<IOMemoryDescriptor> GetInputQueueMemoryDescriptor();
```

## See Also

### Working with memory descriptors

- [GetOutputControlMemoryDescriptor](getoutputcontrolmemorydescriptor.md): Beta. Gets the memory descriptor used for the control data part of a buffer.
- [GetOutputDataMemoryDescriptor](getoutputdatamemorydescriptor.md): Beta. Gets the memory descriptor used for the video data part of a buffer.
- [GetOutputQueueMemoryDescriptor](getoutputqueuememorydescriptor.md): Beta. Returns an memory descriptorrepesenting the shared memory output queue buffer.
- [GetMemoryObjectID](getmemoryobjectid.md): Beta. Gets the video object identifier for a memory object.
