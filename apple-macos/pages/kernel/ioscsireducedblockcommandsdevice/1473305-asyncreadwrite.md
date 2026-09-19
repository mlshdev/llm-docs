> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsireducedblockcommandsdevice/1473305-asyncreadwrite

# AsyncReadWrite

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn AsyncReadWrite(IOMemoryDescriptor *buffer, UInt64 block, UInt64 nblks, void *clientData);
```
