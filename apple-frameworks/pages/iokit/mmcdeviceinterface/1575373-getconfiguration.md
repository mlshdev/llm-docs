> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/mmcdeviceinterface/1575373-getconfiguration](https://developer.apple.com/documentation/iokit/mmcdeviceinterface/1575373-getconfiguration)

# GetConfiguration

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Issues a GET_CONFIGURATION command to the device as defined in MMC-2.

## Declaration

```objectivec
IOReturn (*GetConfiguration)(void *self, SCSICmdField1Byte RT, SCSICmdField2Byte STARTING_FEATURE_NUMBER, void *buffer, SCSICmdField2Byte bufferSize, SCSITaskStatus *taskStatus, SCSI_Sense_Data *senseDataBuffer);
```

## Parameters

- `self`: Pointer to an MMCDeviceInterface for one IOService.
- `RT`: The RT field as described for the GET_CONFIGURATION command in MMC-2.
- `STARTING_FEATURE_NUMBER`: The STARTING_FEATURE_NUMBER field as described in MMC-2 for the GET_CONFIGURATION command.
- `buffer`: Pointer to the buffer where the mode sense data should be placed.
- `bufferSize`: Size of the buffer.
- `taskStatus`: Pointer to a SCSITaskStatus to get the status of the SCSITask which was executed. Valid SCSITaskStatus values are defined in SCSITask.h
- `senseDataBuffer`: Pointer to a buffer the size of the SCSI_Sense_Data struct found in SCSICmds_REQUEST_SENSE_Defs.h. The sense data is only valid if the SCSITaskStatus is kSCSITaskStatus_CHECK_CONDITION.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService, kIOReturnNoMemory if a SCSITask couldn't be created, or kIOReturnExclusiveAccess if the device is already opened for exclusive access by another client.

<a id="discussion"></a>

## Discussion

Once an MMCDeviceInterface is opened, the client may send this command to get configuration information from the device.
