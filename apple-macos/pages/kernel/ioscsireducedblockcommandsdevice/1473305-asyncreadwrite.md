> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsireducedblockcommandsdevice/1473305-asyncreadwrite](https://developer.apple.com/documentation/kernel/ioscsireducedblockcommandsdevice/1473305-asyncreadwrite)

# AsyncReadWrite

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn AsyncReadWrite(IOMemoryDescriptor *buffer, UInt64 block, UInt64 nblks, void *clientData);
```
