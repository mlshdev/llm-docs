> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/getmemoryobjectid](https://developer.apple.com/documentation/videodriverkit/iouservideostream/getmemoryobjectid)

# GetMemoryObjectID

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the video object identifier for a memory object.

## Declaration

```objectivec
IOUserVideoObjectID GetMemoryObjectID(uint32_t memtype);
```

## Parameters

- `memtype`: A value encoding the memory object’s category in the upper 16 bits and, if needed, an index in the lower 16 bits.

<a id="return-value"></a>

## Return Value

The object identifier of the data portion of the buffer.

## See Also

### Working with memory descriptors

- [GetOutputControlMemoryDescriptor](getoutputcontrolmemorydescriptor.md): Gets the memory descriptor used for the control data part of a buffer.
- [GetOutputDataMemoryDescriptor](getoutputdatamemorydescriptor.md): Gets the memory descriptor used for the video data part of a buffer.
- [GetOutputQueueMemoryDescriptor](getoutputqueuememorydescriptor.md): Returns an memory descriptorrepesenting the shared memory output queue buffer.
- [GetInputQueueMemoryDescriptor](getinputqueuememorydescriptor.md): Returns an memory descriptor for the shared memory input queue buffer.
