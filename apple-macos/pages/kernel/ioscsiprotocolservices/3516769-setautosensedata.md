> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiprotocolservices/3516769-setautosensedata](https://developer.apple.com/documentation/kernel/ioscsiprotocolservices/3516769-setautosensedata)

# SetAutoSenseData

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
bool SetAutoSenseData(SCSITaskIdentifier request, SCSI_Sense_Data *senseData, UInt8 senseDataSize);
```
