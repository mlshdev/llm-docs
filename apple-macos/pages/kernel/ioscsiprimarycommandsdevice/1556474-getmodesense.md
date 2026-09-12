> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiprimarycommandsdevice/1556474-getmodesense](https://developer.apple.com/documentation/kernel/ioscsiprimarycommandsdevice/1556474-getmodesense)

# GetModeSense

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
IOReturn GetModeSense(IOMemoryDescriptor *dataBuffer, SCSICmdField6Bit PAGE_CODE, SCSICmdField2Byte ALLOCATION_LENGTH, bool *use10ByteModeSense);
```
