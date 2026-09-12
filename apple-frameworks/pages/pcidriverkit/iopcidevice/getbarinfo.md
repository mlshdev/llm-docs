> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pcidriverkit/iopcidevice/getbarinfo](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/getbarinfo)

# GetBARInfo

**Interface language:** Objective-C

**Framework:** PCIDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · macOS

## Declaration

```objectivec
virtual kern_return_t GetBARInfo(uint8_t barIndex, uint8_t *memoryIndex, uint64_t *barSize, uint8_t *barType);
```
