> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiprimarycommandsdevice/1556555-persistent_reserve_out

# PERSISTENT_RESERVE_OUT

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool PERSISTENT_RESERVE_OUT(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField5Bit SERVICE_ACTION, SCSICmdField4Bit SCOPE, SCSICmdField4Bit TYPE, SCSICmdField1Byte CONTROL);
```
