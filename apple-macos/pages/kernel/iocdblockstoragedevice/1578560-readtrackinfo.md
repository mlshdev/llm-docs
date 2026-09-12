> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocdblockstoragedevice/1578560-readtrackinfo](https://developer.apple.com/documentation/kernel/iocdblockstoragedevice/1578560-readtrackinfo)

# readTrackInfo

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn readTrackInfo(IOMemoryDescriptor *buffer, UInt32 address, CDTrackInfoAddressType addressType, UInt16 *actualByteCount);
```
