> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbstandardendpointdescriptors/bcdusb](https://developer.apple.com/documentation/usbdriverkit/iousbstandardendpointdescriptors/bcdusb)

# bcdUSB

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 19.0+

The USB version supported by the device, specified as a binary-coded decimal value.

## Declaration

```objectivec
uint16_t bcdUSB;
```

## See Also

### Getting the Descriptors

- [descriptor](descriptor.md): A valid endpoint descriptor.
- [ssCompanionDescriptor](sscompaniondescriptor.md): The companion descriptor for super-speed devices.
- [sspCompanionDescriptor](sspcompaniondescriptor.md): The companion descriptor for super-speed plus devices.
