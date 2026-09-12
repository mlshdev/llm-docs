> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsimultimediacommandsdevice/1576197-read_toc_pma_atip](https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576197-read_toc_pma_atip)

# READ_TOC_PMA_ATIP

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool READ_TOC_PMA_ATIP(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField1Bit MSF, SCSICmdField4Bit FORMAT, SCSICmdField1Byte TRACK_SESSION_NUMBER, SCSICmdField2Byte ALLOCATION_LENGTH, SCSICmdField1Byte CONTROL);
```
