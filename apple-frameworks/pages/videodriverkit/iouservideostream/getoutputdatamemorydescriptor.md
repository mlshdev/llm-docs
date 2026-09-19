> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/getoutputdatamemorydescriptor

# GetOutputDataMemoryDescriptor

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Gets the memory descriptor used for the video data part of a buffer.

## Declaration

```objectivec
OSSharedPtr<IOMemoryDescriptor> GetOutputDataMemoryDescriptor(IOUserVideoObjectID in_object_id);
```

## Parameters

- `in_object_id`: The object identifier of the data portion of the desired buffer.

<a id="return-value"></a>

## Return Value

The memory descriptor.

## See Also

### Working with memory descriptors

- [GetOutputControlMemoryDescriptor](getoutputcontrolmemorydescriptor.md): Beta. Gets the memory descriptor used for the control data part of a buffer.
- [GetOutputQueueMemoryDescriptor](getoutputqueuememorydescriptor.md): Beta. Returns an memory descriptorrepesenting the shared memory output queue buffer.
- [GetInputQueueMemoryDescriptor](getinputqueuememorydescriptor.md): Beta. Returns an memory descriptor for the shared memory input queue buffer.
- [GetMemoryObjectID](getmemoryobjectid.md): Beta. Gets the video object identifier for a memory object.
