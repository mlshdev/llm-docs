> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/mmcdeviceinterface/1575412-getperformancev2](https://developer.apple.com/documentation/iokit/mmcdeviceinterface/1575412-getperformancev2)

# GetPerformanceV2

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Issues a GET_PERFORMANCE command to the device as defined in Mt. Fuji 5.

## Declaration

```objectivec
IOReturn (*GetPerformanceV2)(void *self, SCSICmdField5Bit DATA_TYPE, SCSICmdField4Byte STARTING_LBA, SCSICmdField2Byte MAXIMUM_NUMBER_OF_DESCRIPTORS, SCSICmdField1Byte TYPE, void *buffer, SCSICmdField2Byte bufferSize, SCSITaskStatus *taskStatus, SCSI_Sense_Data *senseDataBuffer);
```

## Parameters

- `self`: Pointer to an MMCDeviceInterface for one IOService.
- `DATA_TYPE`: The DATA_TYPE field as described for the GET_PERFORMANCE command in Mt. Fuji 5.
- `STARTING_LBA`: The STARTING_LBA field as described in Mt. Fuji 5 for the GET_PERFORMANCE command.
- `MAXIMUM_NUMBER_OF_DESCRIPTORS`: The MAXIMUM_NUMBER_OF_DESCRIPTORS field as described in Mt. Fuji 5 for the GET_PERFORMANCE command.
- `TYPE`: The TYPE field as described for the GET_PERFORMANCE command in Mt. Fuji 5.
- `buffer`: Pointer to the buffer where the mode sense data should be placed.
- `bufferSize`: Size of the buffer.
- `taskStatus`: Pointer to a SCSITaskStatus to get the status of the SCSITask which was executed. Valid SCSITaskStatus values are defined in SCSITask.h
- `senseDataBuffer`: Pointer to a buffer the size of the SCSI_Sense_Data struct found in SCSICmds_REQUEST_SENSE_Defs.h. The sense data is only valid if the SCSITaskStatus is kSCSITaskStatus_CHECK_CONDITION.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService, kIOReturnNoMemory if a SCSITask couldn't be created, or kIOReturnExclusiveAccess if the device is already opened for exclusive access by another client.

<a id="discussion"></a>

## Discussion

Once an MMCDeviceInterface is opened, the client may send this command to get performance information from the device.
