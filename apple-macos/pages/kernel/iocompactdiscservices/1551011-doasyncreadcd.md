> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocompactdiscservices/1551011-doasyncreadcd](https://developer.apple.com/documentation/kernel/iocompactdiscservices/1551011-doasyncreadcd)

# doAsyncReadCD

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn doAsyncReadCD(IOMemoryDescriptor *buffer, UInt32 block, UInt32 nblks, CDSectorArea sectorArea, CDSectorType sectorType, IOStorageCompletion completion);
```
