> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodvdmedia/1588595-readrzoneinfo](https://developer.apple.com/documentation/kernel/iodvdmedia/1588595-readrzoneinfo)

# readRZoneInfo

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn readRZoneInfo(IOMemoryDescriptor *buffer, UInt32 address, DVDRZoneInfoAddressType addressType, UInt16 *actualByteCount);
```
