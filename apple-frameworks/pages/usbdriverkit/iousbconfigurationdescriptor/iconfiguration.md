> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbconfigurationdescriptor/iconfiguration](https://developer.apple.com/documentation/usbdriverkit/iousbconfigurationdescriptor/iconfiguration)

# iConfiguration

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 19.0+

The index of the string descriptor that describes this configuration.

## Declaration

```objectivec
uint8_t iConfiguration;
```

## See Also

### Getting the Descriptor Properties

- [bLength](blength.md): The size of the descriptor in bytes.
- [bDescriptorType](bdescriptortype.md): The type of the descriptor.
- [wTotalLength](wtotallength.md): The total length of the descriptor, including the length of all related interface, endpoint, and vendor-specific descriptors.
- [bNumInterfaces](bnuminterfaces.md): The number of interfaces this configuration supports.
- [bConfigurationValue](bconfigurationvalue.md): The value to use when selecting this configuration.
- [bmAttributes](bmattributes.md): A bitmask indicating the configuration’s characteristics.
- [MaxPower](maxpower.md): The maximum power consumption of the USB device expressed in 2mA units.
