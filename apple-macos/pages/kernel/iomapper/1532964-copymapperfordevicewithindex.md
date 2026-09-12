> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomapper/1532964-copymapperfordevicewithindex](https://developer.apple.com/documentation/kernel/iomapper/1532964-copymapperfordevicewithindex)

# copyMapperForDeviceWithIndex

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IOMapper> copyMapperForDeviceWithIndex(IOService *device, unsigned int index);
```

## See Also

### Creating a Mapper Object

- [copyMapperForDevice](1532972-copymapperfordevice.md)
- [initHardware](1532965-inithardware.md)
- [start](1532981-start.md)
- [free](1532982-free.md)
