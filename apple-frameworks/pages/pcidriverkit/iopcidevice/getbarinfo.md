> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pcidriverkit/iopcidevice/getbarinfo

# GetBARInfo

**Interface language:** Objective-C

**Framework:** PCIDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · macOS

## Declaration

```objectivec
virtual kern_return_t GetBARInfo(uint8_t barIndex, uint8_t *memoryIndex, uint64_t *barSize, uint8_t *barType);
```
