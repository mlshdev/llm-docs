> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopcidevice/4359883-devicememoryread](https://developer.apple.com/documentation/kernel/iopcidevice/4359883-devicememoryread)

# deviceMemoryRead

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 15.0+ (deprecated in 15.0)

## Declaration

```objectivec
virtual IOReturn deviceMemoryRead(uint8_t memoryIndex, uint64_t offset, void *data, uint8_t size, IOOptionBits options);
```
