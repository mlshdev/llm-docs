> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopcidevice/4446112-devicememoryread8](https://developer.apple.com/documentation/kernel/iopcidevice/4446112-devicememoryread8)

# deviceMemoryRead8

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 15.0+ (deprecated in 15.0)

## Declaration

```objectivec
IOReturn deviceMemoryRead8(uint8_t memoryIndex, uint64_t offset, uint8_t *readData, IOOptionBits options);
```
