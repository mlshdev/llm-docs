> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiresbp2orb/1569076-setcommandbuffersasranges](https://developer.apple.com/documentation/kernel/iofirewiresbp2orb/1569076-setcommandbuffersasranges)

# setCommandBuffersAsRanges

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn setCommandBuffersAsRanges(IOVirtualRange *ranges, UInt32 withCount, IODirection withDirection, task_t withTask, UInt32 offset, UInt32 length);
```
