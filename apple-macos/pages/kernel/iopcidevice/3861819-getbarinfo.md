> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopcidevice/3861819-getbarinfo](https://developer.apple.com/documentation/kernel/iopcidevice/3861819-getbarinfo)

# GetBARInfo

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 12.0+ (deprecated in 12.0)

## Declaration

```objectivec
kern_return_t GetBARInfo(uint8_t barIndex, uint8_t *memoryIndex, uint64_t *barSize, uint8_t *barType, OSDispatchMethod supermethod);
```
