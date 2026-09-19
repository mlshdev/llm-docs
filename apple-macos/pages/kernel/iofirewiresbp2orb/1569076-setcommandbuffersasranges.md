> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewiresbp2orb/1569076-setcommandbuffersasranges

# setCommandBuffersAsRanges

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn setCommandBuffersAsRanges(IOVirtualRange *ranges, UInt32 withCount, IODirection withDirection, task_t withTask, UInt32 offset, UInt32 length);
```
