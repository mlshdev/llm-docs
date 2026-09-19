> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usbdriverkit/iousbstandardendpointdescriptors/sspcompaniondescriptor

# sspCompanionDescriptor

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 19.0+

The companion descriptor for super-speed plus devices.

## Declaration

```objectivec
IOUSBSuperSpeedPlusIsochronousEndpointCompanionDescriptor sspCompanionDescriptor;
```

## See Also

### Getting the Descriptors

- [bcdUSB](bcdusb.md): The USB version supported by the device, specified as a binary-coded decimal value.
- [descriptor](descriptor.md): A valid endpoint descriptor.
- [ssCompanionDescriptor](sscompaniondescriptor.md): The companion descriptor for super-speed devices.
