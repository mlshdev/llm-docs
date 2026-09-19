> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576247-reserve_track_v2

# RESERVE_TRACK_V2

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
bool RESERVE_TRACK_V2(SCSITaskIdentifier request, SCSICmdField1Bit RMZ, SCSICmdField1Bit ARSV, SCSICmdField7Byte RESERVATION_PARAMETER, SCSICmdField1Byte CONTROL);
```
