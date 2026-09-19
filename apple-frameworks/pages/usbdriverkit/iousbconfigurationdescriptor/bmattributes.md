> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usbdriverkit/iousbconfigurationdescriptor/bmattributes

# bmAttributes

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 19.0+

A bitmask indicating the configuration’s characteristics.

## Declaration

```objectivec
uint8_t bmAttributes;
```

## See Also

### Getting the Descriptor Properties

- [bLength](blength.md): The size of the descriptor in bytes.
- [bDescriptorType](bdescriptortype.md): The type of the descriptor.
- [wTotalLength](wtotallength.md): The total length of the descriptor, including the length of all related interface, endpoint, and vendor-specific descriptors.
- [bNumInterfaces](bnuminterfaces.md): The number of interfaces this configuration supports.
- [bConfigurationValue](bconfigurationvalue.md): The value to use when selecting this configuration.
- [iConfiguration](iconfiguration.md): The index of the string descriptor that describes this configuration.
- [MaxPower](maxpower.md): The maximum power consumption of the USB device expressed in 2mA units.
