> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsimultimediacommandsdevice/1576294-write_and_verify_10](https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576294-write_and_verify_10)

# WRITE_AND_VERIFY_10

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool WRITE_AND_VERIFY_10(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, UInt32 blockSize, SCSICmdField1Bit DPO, SCSICmdField1Bit BYT_CHK, SCSICmdField1Bit RELADR, SCSICmdField4Byte LOGICAL_BLOCK_ADDRESS, SCSICmdField4Byte TRANSFER_LENGTH, SCSICmdField1Byte CONTROL);
```
