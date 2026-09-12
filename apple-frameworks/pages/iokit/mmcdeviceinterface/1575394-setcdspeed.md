> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/mmcdeviceinterface/1575394-setcdspeed](https://developer.apple.com/documentation/iokit/mmcdeviceinterface/1575394-setcdspeed)

# SetCDSpeed

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Issues a SET_CD_SPEED command to the device as defined in MMC-2.

## Declaration

```objectivec
IOReturn (*SetCDSpeed)(void *self, SCSICmdField2Byte LOGICAL_UNIT_READ_SPEED, SCSICmdField2Byte LOGICAL_UNIT_WRITE_SPEED, SCSITaskStatus *taskStatus, SCSI_Sense_Data *senseDataBuffer);
```

## Parameters

- `self`: Pointer to an MMCDeviceInterface for one IOService.
- `LOGICAL_UNIT_READ_SPEED`: The LOGICAL_UNIT_READ_SPEED field as defined in MMC-2.
- `LOGICAL_UNIT_WRITE_SPEED`: The LOGICAL_UNIT_WRITE_SPEED field as defined in MMC-2.
- `taskStatus`: Pointer to a SCSITaskStatus to get the status of the SCSITask which was executed. Valid SCSITaskStatus values are defined in SCSITask.h
- `senseDataBuffer`: Pointer to a buffer the size of the SCSI_Sense_Data struct found in SCSICmds_REQUEST_SENSE_Defs.h. The sense data is only valid if the SCSITaskStatus is kSCSITaskStatus_CHECK_CONDITION.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService, kIOReturnNoMemory if a SCSITask couldn't be created, or kIOReturnExclusiveAccess if the device is already opened for exclusive access by another client.

<a id="discussion"></a>

## Discussion

Once an MMCDeviceInterface is opened the client may send this command to change the read and/or write CD speed of the drive.
