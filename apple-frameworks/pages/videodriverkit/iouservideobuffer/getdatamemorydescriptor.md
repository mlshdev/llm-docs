> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideobuffer/getdatamemorydescriptor](https://developer.apple.com/documentation/videodriverkit/iouservideobuffer/getdatamemorydescriptor)

# GetDataMemoryDescriptor

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the memory descriptor used for video IO that was initialized with or set on the video stream.

## Declaration

```objectivec
OSSharedPtr<IOMemoryDescriptor> GetDataMemoryDescriptor();
```

<a id="return-value"></a>

## Return Value

IOMemoryDescriptor in an OSSharedPtr.

## See Also

### Working with memory descriptors

- [SetDataMemoryDescriptor](setdatamemorydescriptor.md): Sets a new IOMemoryDescriptor to use for video IO on the IOUserVideoStream.
- [SetControlMemoryDescriptor](setcontrolmemorydescriptor.md): Sets a new IOMemoryDescriptor to use for video IO on the IOUserVideoStream.
- [GetControlMemoryDescriptor](getcontrolmemorydescriptor.md): Gets the memory descriptior used for video IO that was initialized with or set on the video stream.
