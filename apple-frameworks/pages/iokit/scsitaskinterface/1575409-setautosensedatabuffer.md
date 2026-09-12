> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskinterface/1575409-setautosensedatabuffer](https://developer.apple.com/documentation/iokit/scsitaskinterface/1575409-setautosensedatabuffer)

# SetAutoSenseDataBuffer

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to set the auto-sense data for the SCSITask.

## Declaration

```objectivec
IOReturn (*SetAutoSenseDataBuffer)(void *task, SCSI_Sense_Data *senseDataBuffer, UInt8 senseDataLength);
```

## Parameters

- `task`: Pointer to an instance of an SCSITaskInterface.
- `senseDataBuffer`: Pointer to a buffer. May be be NULL if the caller wants to restrict the size to be less than the normal 18 bytes of sense data.
- `senseDataLength`: Amount of sense data to retrieve. Zero is not a valid value.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if sense data buffer was set, otherwise kIOReturnError.

<a id="discussion"></a>

## Discussion

This method can be used to set the auto-sense data buffer for the SCSITask.
