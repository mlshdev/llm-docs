> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewiresbp2orb/1569068-setcommandbuffersasranges64

# setCommandBuffersAsRanges64

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
IOReturn setCommandBuffersAsRanges64(IOAddressRange *ranges, uint64_t withCount, IODirection withDirection, task_t withTask, uint64_t offset, uint64_t length);
```
