> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiblockcommandsdevice/1792144-writesame](https://developer.apple.com/documentation/kernel/ioscsiblockcommandsdevice/1792144-writesame)

# WriteSame

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

## Declaration

```objectivec
virtual IOReturn WriteSame(IOMemoryDescriptor *buffer, UInt64 startBlock, UInt64 blockCount, UInt8 writeSameOptions, UInt32 requestBlockSize);
```
