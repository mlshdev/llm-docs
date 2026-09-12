> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsimultimediacommandsdevice/1576201-load_unload_medium](https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576201-load_unload_medium)

# LOAD_UNLOAD_MEDIUM

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool LOAD_UNLOAD_MEDIUM(SCSITaskIdentifier request, SCSICmdField1Bit IMMED, SCSICmdField1Bit LO_UNLO, SCSICmdField1Bit START, SCSICmdField1Byte SLOT, SCSICmdField1Byte CONTROL);
```
