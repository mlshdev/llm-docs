> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocompactdiscservices/1550991-readtrackinfo](https://developer.apple.com/documentation/kernel/iocompactdiscservices/1550991-readtrackinfo)

# readTrackInfo

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn readTrackInfo(IOMemoryDescriptor *buffer, UInt32 address, CDTrackInfoAddressType addressType, UInt16 *actualByteCount);
```
