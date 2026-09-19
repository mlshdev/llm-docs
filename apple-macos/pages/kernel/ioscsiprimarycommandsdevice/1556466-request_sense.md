> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiprimarycommandsdevice/1556466-request_sense

# REQUEST_SENSE

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool REQUEST_SENSE(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField1Byte ALLOCATION_LENGTH, SCSICmdField1Byte CONTROL);
```
