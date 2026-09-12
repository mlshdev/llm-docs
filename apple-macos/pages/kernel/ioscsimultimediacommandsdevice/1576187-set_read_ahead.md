> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsimultimediacommandsdevice/1576187-set_read_ahead](https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576187-set_read_ahead)

# SET_READ_AHEAD

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool SET_READ_AHEAD(SCSITaskIdentifier request, SCSICmdField4Byte TRIGGER_LOGICAL_BLOCK_ADDRESS, SCSICmdField4Byte READ_AHEAD_LOGICAL_BLOCK_ADDRESS, SCSICmdField1Byte CONTROL);
```
