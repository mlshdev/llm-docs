> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iocdblockstoragedevice/1578555-doasyncreadcd

# doAsyncReadCD

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn doAsyncReadCD(IOMemoryDescriptor *buffer, UInt32 block, UInt32 nblks, CDSectorArea sectorArea, CDSectorType sectorType, IOStorageCompletion completion);
```
