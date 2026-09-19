> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iobdmedia/1427690-reportkey

# reportKey

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.12)

## Declaration

```objectivec
virtual IOReturn reportKey(IOMemoryDescriptor *buffer, UInt8 keyClass, UInt32 address, UInt8 grantID, UInt8 format);
```
