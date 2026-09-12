> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideobuffer/getcontrolmemorydescriptor](https://developer.apple.com/documentation/videodriverkit/iouservideobuffer/getcontrolmemorydescriptor)

# GetControlMemoryDescriptor

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the memory descriptior used for video IO that was initialized with or set on the video stream.

## Declaration

```objectivec
OSSharedPtr<IOMemoryDescriptor> GetControlMemoryDescriptor();
```

<a id="return-value"></a>

## Return Value

IOMemoryDescriptor in an OSSharedPtr.

## See Also

### Working with memory descriptors

- [SetDataMemoryDescriptor](setdatamemorydescriptor.md): Sets a new IOMemoryDescriptor to use for video IO on the IOUserVideoStream.
- [GetDataMemoryDescriptor](getdatamemorydescriptor.md): Gets the memory descriptor used for video IO that was initialized with or set on the video stream.
- [SetControlMemoryDescriptor](setcontrolmemorydescriptor.md): Sets a new IOMemoryDescriptor to use for video IO on the IOUserVideoStream.
