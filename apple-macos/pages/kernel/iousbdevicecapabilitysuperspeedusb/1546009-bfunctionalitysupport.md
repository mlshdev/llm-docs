> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbdevicecapabilitysuperspeedusb/1546009-bfunctionalitysupport](https://developer.apple.com/documentation/kernel/iousbdevicecapabilitysuperspeedusb/1546009-bfunctionalitysupport)

# bFunctionalitySupport

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The lowest speed at which all the functionality that the device supports is available to the user.

## Declaration

```objectivec
uint8_t bFunctionalitySupport;
```

## See Also

### Getting the Properties

- [bLength](1546178-blength.md): The size of the descriptor.
- [bDescriptorType](1546105-bdescriptortype.md): The type of the descriptor.
- [bDevCapabilityType](1546372-bdevcapabilitytype.md): The capability type.
- [bmAttributes](1546119-bmattributes.md): A bitmap encoding of supported device-level features.
- [wSpeedsSupported](1546097-wspeedssupported.md): The SuperSpeed supported speeds.
- [bU1DevExitLat](1545910-bu1devexitlat.md): The exit latency of a U1 device.
- [wU2DevExitLat](1546374-wu2devexitlat.md): The exit latency of a U2 device.
