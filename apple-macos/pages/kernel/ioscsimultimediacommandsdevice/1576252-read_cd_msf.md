> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576252-read_cd_msf

# READ_CD_MSF

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool READ_CD_MSF(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField3Bit EXPECTED_SECTOR_TYPE, SCSICmdField3Byte STARTING_MSF, SCSICmdField3Byte ENDING_MSF, SCSICmdField1Bit SYNC, SCSICmdField2Bit HEADER_CODES, SCSICmdField1Bit USER_DATA, SCSICmdField1Bit EDC_ECC, SCSICmdField2Bit ERROR_FIELD, SCSICmdField3Bit SUBCHANNEL_SELECTION_BITS, SCSICmdField1Byte CONTROL);
```
