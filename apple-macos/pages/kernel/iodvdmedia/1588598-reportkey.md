> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodvdmedia/1588598-reportkey

# reportKey

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.12)

## Declaration

```objectivec
virtual IOReturn reportKey(IOMemoryDescriptor *buffer, const DVDKeyClass keyClass, const UInt32 address, const UInt8 grantID, const DVDKeyFormat format);
```
