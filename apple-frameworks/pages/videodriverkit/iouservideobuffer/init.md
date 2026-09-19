> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideobuffer/init

# init

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

## Declaration

```objectivec
virtual bool init(IOUserVideoDriver *in_driver, IOUserVideoStreamDirection in_direction, IOMemoryDescriptor *in_data_memory_descriptor, IOMemoryDescriptor *in_control_memory_descriptor, uint32_t bufferID);
```

## See Also

### Creating a video buffer

- [Create](create.md): Beta.
- [IOUserVideoDriver](../iouservideodriver.md): Beta. A video driver.
