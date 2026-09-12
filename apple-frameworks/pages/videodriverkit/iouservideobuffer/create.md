> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideobuffer/create](https://developer.apple.com/documentation/videodriverkit/iouservideobuffer/create)

# Create

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 27.0+

## Declaration

```objectivec
static OSSharedPtr<IOUserVideoBuffer> Create(IOUserVideoDriver *in_driver, IOUserVideoStreamDirection in_direction, IOMemoryDescriptor *in_data_memory_descriptor, IOMemoryDescriptor *in_control_memory_descriptor, uint32_t bufferID);
```

## See Also

### Creating a video buffer

- [init](init.md)
- [IOUserVideoDriver](../iouservideodriver.md): A video driver.
