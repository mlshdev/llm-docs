> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiprimarycommandsdevice/1556474-getmodesense

# GetModeSense

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
IOReturn GetModeSense(IOMemoryDescriptor *dataBuffer, SCSICmdField6Bit PAGE_CODE, SCSICmdField2Byte ALLOCATION_LENGTH, bool *use10ByteModeSense);
```
