> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioacpiplatformdevice/1427639-registeraddressspacehandler](https://developer.apple.com/documentation/kernel/ioacpiplatformdevice/1427639-registeraddressspacehandler)

# registerAddressSpaceHandler

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn registerAddressSpaceHandler(IOACPIAddressSpaceID spaceID, IOACPIAddressSpaceHandler handler, void *context, IOOptionBits options);
```
