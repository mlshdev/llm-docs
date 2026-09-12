> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiprimarycommandsdevice/3516764-setcommanddescriptorblock](https://developer.apple.com/documentation/kernel/ioscsiprimarycommandsdevice/3516764-setcommanddescriptorblock)

# SetCommandDescriptorBlock

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
bool SetCommandDescriptorBlock(SCSITaskIdentifier request, UInt8 cdbByte0, UInt8 cdbByte1, UInt8 cdbByte2, UInt8 cdbByte3, UInt8 cdbByte4, UInt8 cdbByte5, UInt8 cdbByte6, UInt8 cdbByte7, UInt8 cdbByte8, UInt8 cdbByte9);
```
