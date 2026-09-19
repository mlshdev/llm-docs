> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideobuffer/getdatamemorydescriptor

# GetDataMemoryDescriptor

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [SetDataMemoryDescriptor](setdatamemorydescriptor.md): Beta. Sets a new IOMemoryDescriptor to use for video IO on the IOUserVideoStream.
- [SetControlMemoryDescriptor](setcontrolmemorydescriptor.md): Beta. Sets a new IOMemoryDescriptor to use for video IO on the IOUserVideoStream.
- [GetControlMemoryDescriptor](getcontrolmemorydescriptor.md): Beta. Gets the memory descriptior used for video IO that was initialized with or set on the video stream.
