> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsiperipheralsdriverkit/write_10](https://developer.apple.com/documentation/scsiperipheralsdriverkit/write_10)

# WRITE_10

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Function  
**Availability:** DriverKit 22.0+

Fills a Command Descriptor Block (CDB) to perform a SCSI write command.

## Declaration

```objectivec
bool WRITE_10(SCSIDeviceOutParameters *request, UInt64 blockSize, UInt32 startBlock, UInt16 blockCount, UInt64 bufAddr, SCSIDeviceInParameters *response, UInt64 senseBufAddr);
```

## Parameters

- `request`: An object that contains the request information.
- `blockSize`: The block size, in bytes, for the data transfer.
- `startBlock`: The Logical Block Address (LBA) of the starting block.
- `blockCount`: The number of blocks to write.
- `bufAddr`: A buffer that holds the data to write.
- `response`: An empty [SCSIDeviceInParameters](scsideviceinparameters.md) object. On return, the framework populates this object with the response information.
- `senseBufAddr`: The address of the sense buffer.

<a id="return-value"></a>

## Return Value

`true` if the call successfully fills the CDB; `false`, otherwise.

<a id="Discussion"></a>

## Discussion

Use this method in your dext to prefill a 16-byte CDB for the standard `WRITE10` SCSI command.

## See Also

### Creating common SCSI commands

- [TEST_UNIT_READY](test_unit_ready.md): Fills a Command Descriptor Block (CDB) to test whether the unit is ready.
- [INQUIRY](inquiry.md): Fills a Command Descriptor Block (CDB) to perform a SCSI inquiry.
- [REQUEST_SENSE](request_sense.md): Fills a Command Descriptor Block (CDB) to perform a SCSI sense-request command.
- [READ_10](read_10.md): Fills a Command Descriptor Block (CDB) to perform a SCSI read command.
- [READ_CAPACITY](read_capacity.md): Fills a Command Descriptor Block (CDB) to perform a SCSI read-capacity command.
