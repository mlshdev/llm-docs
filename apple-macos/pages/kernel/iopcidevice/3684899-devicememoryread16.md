> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopcidevice/3684899-devicememoryread16

# deviceMemoryRead16

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.0+ (deprecated in 11.0)

## Declaration

```objectivec
IOReturn deviceMemoryRead16(uint8_t memoryIndex, uint64_t offset, uint16_t *readData);
```
