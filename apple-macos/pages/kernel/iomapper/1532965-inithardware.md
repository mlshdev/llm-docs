> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iomapper/1532965-inithardware

# initHardware

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool initHardware(IOService *provider);
```

## See Also

### Creating a Mapper Object

- [copyMapperForDevice](1532972-copymapperfordevice.md)
- [copyMapperForDeviceWithIndex](1532964-copymapperfordevicewithindex.md)
- [start](1532981-start.md)
- [free](1532982-free.md)
