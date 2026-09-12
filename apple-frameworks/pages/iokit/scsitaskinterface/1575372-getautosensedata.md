> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskinterface/1575372-getautosensedata](https://developer.apple.com/documentation/iokit/scsitaskinterface/1575372-getautosensedata)

# GetAutoSenseData

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to get the auto-sense data from the SCSITask.

## Declaration

```objectivec
IOReturn (*GetAutoSenseData)(void *task, SCSI_Sense_Data *senseDataBuffer);
```

## Parameters

- `task`: Pointer to an instance of an SCSITaskInterface.
- `senseDataBuffer`: Pointer to a buffer the size of the SCSI_Sense_Data structure. If caller has previously called SetAutoSenseDataBuffer(), this routine will return an error.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if sense data is valid, otherwise kIOReturnError.

<a id="discussion"></a>

## Discussion

This method can be used to get the auto-sense data from the SCSITask.
