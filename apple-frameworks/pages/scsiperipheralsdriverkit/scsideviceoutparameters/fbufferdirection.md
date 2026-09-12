> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsiperipheralsdriverkit/scsideviceoutparameters/fbufferdirection](https://developer.apple.com/documentation/scsiperipheralsdriverkit/scsideviceoutparameters/fbufferdirection)

# fBufferDirection

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 22.0+

The direction for the buffer to send or receive data.

## Declaration

```objectivec
uint8_t fBufferDirection;
```

<a id="Discussion"></a>

## Discussion

Use the following `DriverKit/IOMemoryDescriptor.h` direction values to populate this field:

- [kIOMemoryDirectionNone](https://developer.apple.com/documentation/kernel/3852596-anonymous/kiomemorydirectionnone)
- [kIOMemoryDirectionIn](https://developer.apple.com/documentation/kernel/3852596-anonymous/kiomemorydirectionin)
- [kIOMemoryDirectionOut](https://developer.apple.com/documentation/kernel/3852596-anonymous/kiomemorydirectionout)
- [kIOMemoryDirectionOutIn](https://developer.apple.com/documentation/kernel/3852596-anonymous/kiomemorydirectionoutin)
- [kIOMemoryDirectionInOut](https://developer.apple.com/documentation/kernel/3852596-anonymous/kiomemorydirectioninout)
- [kIOMemoryDisableCopyOnWrite](https://developer.apple.com/documentation/kernel/3852596-anonymous/kiomemorydisablecopyonwrite)

## See Also

### Setting command parameters

- [fLogicalUnitNumber](flogicalunitnumber.md): The SCSI logical unit number of the device that receives the command.
- [fTimeoutDuration](ftimeoutduration.md): A timeout for the command, in milliseconds.
- [fCommandDescriptorBlock](fcommanddescriptorblock.md): A 16-byte opcode to fill out the Command Descriptor Block (CDB).
- [fRequestedByteCountOfTransfer](frequestedbytecountoftransfer.md): The size of the data to transfer.
- [fDataTransferDirection](fdatatransferdirection.md): The direction for the caller to send data to or receive data from the device.
- [fSenseLengthRequested](fsenselengthrequested.md): The length of sense data to read, in bytes.
- [fDataBufferAddr](fdatabufferaddr.md): The virtual address of the buffer the dext creates to transfer data.
- [fSenseBufferAddr](fsensebufferaddr.md): The virtual address of the buffer that the dext creates to transfer sense data.
