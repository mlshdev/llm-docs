> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usbdriverkit/iousbconfigurationdescriptor/bnuminterfaces

# bNumInterfaces

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 19.0+

The number of interfaces this configuration supports.

## Declaration

```objectivec
uint8_t bNumInterfaces;
```

## See Also

### Getting the Descriptor Properties

- [bLength](blength.md): The size of the descriptor in bytes.
- [bDescriptorType](bdescriptortype.md): The type of the descriptor.
- [wTotalLength](wtotallength.md): The total length of the descriptor, including the length of all related interface, endpoint, and vendor-specific descriptors.
- [bConfigurationValue](bconfigurationvalue.md): The value to use when selecting this configuration.
- [iConfiguration](iconfiguration.md): The index of the string descriptor that describes this configuration.
- [bmAttributes](bmattributes.md): A bitmask indicating the configuration’s characteristics.
- [MaxPower](maxpower.md): The maximum power consumption of the USB device expressed in 2mA units.
