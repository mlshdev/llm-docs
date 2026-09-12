> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideobuffer/setdatamemorydescriptor](https://developer.apple.com/documentation/videodriverkit/iouservideobuffer/setdatamemorydescriptor)

# SetDataMemoryDescriptor

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets a new IOMemoryDescriptor to use for video IO on the IOUserVideoStream.

## Declaration

```objectivec
kern_return_t SetDataMemoryDescriptor(IOMemoryDescriptor *in_data_memory_descriptor);
```

## Parameters

- `in_data_memory_descriptor`: A pointer to a IOMemoryDescriptor whose buffer will be mapped to the Host for doing video IO

<a id="discussion"></a>

## Discussion

Setting this value should only be done during the PerformDeviceConfigurationChange() call. If the value needs to be changed, RequestDeviceConfigChange() should be called to allow IO to stop and the config change to be performed.

## See Also

### Working with memory descriptors

- [GetDataMemoryDescriptor](getdatamemorydescriptor.md): Gets the memory descriptor used for video IO that was initialized with or set on the video stream.
- [SetControlMemoryDescriptor](setcontrolmemorydescriptor.md): Sets a new IOMemoryDescriptor to use for video IO on the IOUserVideoStream.
- [GetControlMemoryDescriptor](getcontrolmemorydescriptor.md): Gets the memory descriptior used for video IO that was initialized with or set on the video stream.
