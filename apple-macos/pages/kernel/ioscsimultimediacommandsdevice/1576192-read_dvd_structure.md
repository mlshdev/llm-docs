> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsimultimediacommandsdevice/1576192-read_dvd_structure](https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576192-read_dvd_structure)

# READ_DVD_STRUCTURE

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool READ_DVD_STRUCTURE(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField4Byte ADDRESS, SCSICmdField1Byte LAYER_NUMBER, SCSICmdField1Byte FORMAT, SCSICmdField2Byte ALLOCATION_LENGTH, SCSICmdField2Bit AGID, SCSICmdField1Byte CONTROL);
```
