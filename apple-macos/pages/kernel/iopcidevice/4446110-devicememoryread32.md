> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopcidevice/4446110-devicememoryread32](https://developer.apple.com/documentation/kernel/iopcidevice/4446110-devicememoryread32)

# deviceMemoryRead32

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 15.0+ (deprecated in 15.0)

## Declaration

```objectivec
IOReturn deviceMemoryRead32(uint8_t memoryIndex, uint64_t offset, uint32_t *readData, IOOptionBits options);
```
