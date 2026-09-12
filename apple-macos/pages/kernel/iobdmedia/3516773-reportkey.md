> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobdmedia/3516773-reportkey](https://developer.apple.com/documentation/kernel/iobdmedia/3516773-reportkey)

# reportKey

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
virtual IOReturn reportKey(IOMemoryDescriptor *buffer, UInt8 keyClass, UInt32 address, UInt8 blockCount, UInt8 grantID, UInt8 format);
```
