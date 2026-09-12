> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsiperipheralsdriverkit/request_sense](https://developer.apple.com/documentation/scsiperipheralsdriverkit/request_sense)

# REQUEST_SENSE

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Function  
**Availability:** DriverKit 22.0+

Fills a Command Descriptor Block (CDB) to perform a SCSI sense-request command.

## Declaration

```objectivec
bool REQUEST_SENSE(SCSIDeviceOutParameters *request, UInt64 bufAddr, UInt8 senseLength, SCSIDeviceInParameters *response);
```

## Parameters

- `request`: An object that contains the request information.
- `bufAddr`: A buffer to receive the sense-request data.
- `senseLength`: The length of requested sense data, in bytes.
- `response`: An empty [SCSIDeviceInParameters](scsideviceinparameters.md) object. On return, the framework populates this object with the response information.

<a id="return-value"></a>

## Return Value

`true` if the call successfully fills the CDB; `false`, otherwise.

<a id="Discussion"></a>

## Discussion

Use this method in your dext to prefill a 16-byte CDB for the standard `REQUEST SENSE` SCSI command.

## See Also

### Creating common SCSI commands

- [TEST_UNIT_READY](test_unit_ready.md): Fills a Command Descriptor Block (CDB) to test whether the unit is ready.
- [INQUIRY](inquiry.md): Fills a Command Descriptor Block (CDB) to perform a SCSI inquiry.
- [READ_10](read_10.md): Fills a Command Descriptor Block (CDB) to perform a SCSI read command.
- [WRITE_10](write_10.md): Fills a Command Descriptor Block (CDB) to perform a SCSI write command.
- [READ_CAPACITY](read_capacity.md): Fills a Command Descriptor Block (CDB) to perform a SCSI read-capacity command.
