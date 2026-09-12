> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsiperipheralsdriverkit/test_unit_ready](https://developer.apple.com/documentation/scsiperipheralsdriverkit/test_unit_ready)

# TEST_UNIT_READY

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Function  
**Availability:** DriverKit 22.0+

Fills a Command Descriptor Block (CDB) to test whether the unit is ready.

## Declaration

```objectivec
bool TEST_UNIT_READY(SCSIDeviceOutParameters *request, SCSIDeviceInParameters *response, UInt64 senseBufAddr);
```

## Parameters

- `request`: An object that contains the request information.
- `response`: An empty [SCSIDeviceInParameters](scsideviceinparameters.md) object. On return, the framework populates this object with the response information.
- `senseBufAddr`: The address of the sense buffer.

<a id="return-value"></a>

## Return Value

`true` if the call successfully fills the CDB; `false`, otherwise.

<a id="Discussion"></a>

## Discussion

Use this method in your dext to prefill a 16-byte CDB for the standard `TEST UNIT READY` SCSI command.

## See Also

### Creating common SCSI commands

- [INQUIRY](inquiry.md): Fills a Command Descriptor Block (CDB) to perform a SCSI inquiry.
- [REQUEST_SENSE](request_sense.md): Fills a Command Descriptor Block (CDB) to perform a SCSI sense-request command.
- [READ_10](read_10.md): Fills a Command Descriptor Block (CDB) to perform a SCSI read command.
- [WRITE_10](write_10.md): Fills a Command Descriptor Block (CDB) to perform a SCSI write command.
- [READ_CAPACITY](read_capacity.md): Fills a Command Descriptor Block (CDB) to perform a SCSI read-capacity command.
