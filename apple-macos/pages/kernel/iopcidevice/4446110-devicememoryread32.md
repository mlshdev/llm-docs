> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopcidevice/4446110-devicememoryread32

# deviceMemoryRead32

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 15.0+ (deprecated in 15.0)

## Declaration

```objectivec
IOReturn deviceMemoryRead32(uint8_t memoryIndex, uint64_t offset, uint32_t *readData, IOOptionBits options);
```
