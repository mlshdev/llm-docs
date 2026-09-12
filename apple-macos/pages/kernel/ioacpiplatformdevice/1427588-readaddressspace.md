> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioacpiplatformdevice/1427588-readaddressspace](https://developer.apple.com/documentation/kernel/ioacpiplatformdevice/1427588-readaddressspace)

# readAddressSpace

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn readAddressSpace(UInt64 *value, IOACPIAddressSpaceID spaceID, IOACPIAddress address, UInt32 bitWidth, UInt32 bitOffset, IOOptionBits options);
```
