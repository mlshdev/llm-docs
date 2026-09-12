> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiprimarycommandsdevice/3516757-getautosensedata](https://developer.apple.com/documentation/kernel/ioscsiprimarycommandsdevice/3516757-getautosensedata)

# GetAutoSenseData

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
bool GetAutoSenseData(SCSITaskIdentifier request, SCSI_Sense_Data *senseData, UInt8 senseDataSize);
```
