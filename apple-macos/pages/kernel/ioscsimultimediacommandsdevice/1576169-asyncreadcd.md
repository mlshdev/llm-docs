> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576169-asyncreadcd

# AsyncReadCD

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn AsyncReadCD(IOMemoryDescriptor *buffer, UInt32 block, UInt32 nblks, CDSectorArea sectorArea, CDSectorType sectorType, void *clientData);
```
