> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobdmedia/1427676-readtrackinfo](https://developer.apple.com/documentation/kernel/iobdmedia/1427676-readtrackinfo)

# readTrackInfo

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn readTrackInfo(IOMemoryDescriptor *buffer, UInt32 address, UInt8 addressType, UInt8 open, UInt16 *actualByteCount);
```
