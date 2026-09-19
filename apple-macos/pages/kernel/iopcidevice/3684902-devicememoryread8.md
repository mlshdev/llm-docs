> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopcidevice/3684902-devicememoryread8

# deviceMemoryRead8

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.0+ (deprecated in 11.0)

## Declaration

```objectivec
IOReturn deviceMemoryRead8(uint8_t memoryIndex, uint64_t offset, uint8_t *readData);
```
