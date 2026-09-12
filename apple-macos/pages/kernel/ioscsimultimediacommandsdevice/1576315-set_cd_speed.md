> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsimultimediacommandsdevice/1576315-set_cd_speed](https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576315-set_cd_speed)

# SET_CD_SPEED

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool SET_CD_SPEED(SCSITaskIdentifier request, SCSICmdField2Byte LOGICAL_UNIT_READ_SPEED, SCSICmdField2Byte LOGICAL_UNIT_WRITE_SPEED, SCSICmdField1Byte CONTROL);
```
