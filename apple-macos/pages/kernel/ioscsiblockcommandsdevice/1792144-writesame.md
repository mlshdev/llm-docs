> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiblockcommandsdevice/1792144-writesame

# WriteSame

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

## Declaration

```objectivec
virtual IOReturn WriteSame(IOMemoryDescriptor *buffer, UInt64 startBlock, UInt64 blockCount, UInt8 writeSameOptions, UInt32 requestBlockSize);
```
