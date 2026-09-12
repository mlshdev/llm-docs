> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioacpiplatformexpert/1563909-installdeviceinterruptforgpe](https://developer.apple.com/documentation/kernel/ioacpiplatformexpert/1563909-installdeviceinterruptforgpe)

# installDeviceInterruptForGPE

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual SInt32 installDeviceInterruptForGPE(IOService *device, UInt32 gpeNumber, void *gpeBlockDevice, IOOptionBits options);
```
