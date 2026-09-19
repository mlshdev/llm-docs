> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodvdservices/4520028-reportkey

# reportKey

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

## Declaration

```objectivec
virtual IOReturn reportKey(IOMemoryDescriptor *buffer, const DVDKeyClass keyClass, const UInt32 lba, const UInt8 blockCount, const UInt8 agid, const DVDKeyFormat keyFormat);
```
