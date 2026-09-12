> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsiperipheralsdriverkit/scsideviceoutparameters/ftimeoutduration](https://developer.apple.com/documentation/scsiperipheralsdriverkit/scsideviceoutparameters/ftimeoutduration)

# fTimeoutDuration

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 22.0+

A timeout for the command, in milliseconds.

## Declaration

```objectivec
uint32_t fTimeoutDuration;
```

## See Also

### Setting command parameters

- [fLogicalUnitNumber](flogicalunitnumber.md): The SCSI logical unit number of the device that receives the command.
- [fCommandDescriptorBlock](fcommanddescriptorblock.md): A 16-byte opcode to fill out the Command Descriptor Block (CDB).
- [fRequestedByteCountOfTransfer](frequestedbytecountoftransfer.md): The size of the data to transfer.
- [fBufferDirection](fbufferdirection.md): The direction for the buffer to send or receive data.
- [fDataTransferDirection](fdatatransferdirection.md): The direction for the caller to send data to or receive data from the device.
- [fSenseLengthRequested](fsenselengthrequested.md): The length of sense data to read, in bytes.
- [fDataBufferAddr](fdatabufferaddr.md): The virtual address of the buffer the dext creates to transfer data.
- [fSenseBufferAddr](fsensebufferaddr.md): The virtual address of the buffer that the dext creates to transfer sense data.
