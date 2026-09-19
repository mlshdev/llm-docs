> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iocdmedia/1581365-readtrackinfo

# readTrackInfo

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn readTrackInfo(IOMemoryDescriptor *buffer, UInt32 address, CDTrackInfoAddressType addressType, UInt16 *actualByteCount);
```
