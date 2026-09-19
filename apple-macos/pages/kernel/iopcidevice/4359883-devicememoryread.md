> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopcidevice/4359883-devicememoryread

# deviceMemoryRead

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 15.0+ (deprecated in 15.0)

## Declaration

```objectivec
virtual IOReturn deviceMemoryRead(uint8_t memoryIndex, uint64_t offset, void *data, uint8_t size, IOOptionBits options);
```
