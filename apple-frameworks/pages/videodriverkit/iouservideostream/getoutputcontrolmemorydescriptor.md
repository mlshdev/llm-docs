> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/getoutputcontrolmemorydescriptor](https://developer.apple.com/documentation/videodriverkit/iouservideostream/getoutputcontrolmemorydescriptor)

# GetOutputControlMemoryDescriptor

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the memory descriptor used for the control data part of a buffer.

## Declaration

```objectivec
OSSharedPtr<IOMemoryDescriptor> GetOutputControlMemoryDescriptor(IOUserVideoObjectID in_object_id);
```

## Parameters

- `in_object_id`: The object identifier of the control portion of the desired buffer.

<a id="return-value"></a>

## Return Value

IOMemoryDescriptor in an OSSharedPtr.

## See Also

### Working with memory descriptors

- [GetOutputDataMemoryDescriptor](getoutputdatamemorydescriptor.md): Gets the memory descriptor used for the video data part of a buffer.
- [GetOutputQueueMemoryDescriptor](getoutputqueuememorydescriptor.md): Returns an memory descriptorrepesenting the shared memory output queue buffer.
- [GetInputQueueMemoryDescriptor](getinputqueuememorydescriptor.md): Returns an memory descriptor for the shared memory input queue buffer.
- [GetMemoryObjectID](getmemoryobjectid.md): Gets the video object identifier for a memory object.
