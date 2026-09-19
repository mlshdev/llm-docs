> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iomapper/1532972-copymapperfordevice

# copyMapperForDevice

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IOMapper> copyMapperForDevice(IOService *device);
```

## See Also

### Creating a Mapper Object

- [copyMapperForDeviceWithIndex](1532964-copymapperfordevicewithindex.md)
- [initHardware](1532965-inithardware.md)
- [start](1532981-start.md)
- [free](1532982-free.md)
