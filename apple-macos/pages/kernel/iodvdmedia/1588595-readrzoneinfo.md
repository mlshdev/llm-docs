> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodvdmedia/1588595-readrzoneinfo

# readRZoneInfo

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn readRZoneInfo(IOMemoryDescriptor *buffer, UInt32 address, DVDRZoneInfoAddressType addressType, UInt16 *actualByteCount);
```
