> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideobuffer/setcontrolmemorydescriptor

# SetControlMemoryDescriptor

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Sets a new IOMemoryDescriptor to use for video IO on the IOUserVideoStream.

## Declaration

```objectivec
kern_return_t SetControlMemoryDescriptor(IOMemoryDescriptor *in_control_memory_descriptor);
```

## Parameters

- `in_control_memory_descriptor`: A pointer to a IOMemoryDescriptor whose buffer will be mapped to the Host for doing video IO

<a id="discussion"></a>

## Discussion

Setting this value should only be done during the PerformDeviceConfigurationChange() call. If the value needs to be changed, RequestDeviceConfigChange() should be called to allow IO to stop and the config change to be performed.

## See Also

### Working with memory descriptors

- [SetDataMemoryDescriptor](setdatamemorydescriptor.md): Beta. Sets a new IOMemoryDescriptor to use for video IO on the IOUserVideoStream.
- [GetDataMemoryDescriptor](getdatamemorydescriptor.md): Beta. Gets the memory descriptor used for video IO that was initialized with or set on the video stream.
- [GetControlMemoryDescriptor](getcontrolmemorydescriptor.md): Beta. Gets the memory descriptior used for video IO that was initialized with or set on the video stream.
