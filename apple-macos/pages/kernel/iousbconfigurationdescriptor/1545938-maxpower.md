> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbconfigurationdescriptor/1545938-maxpower](https://developer.apple.com/documentation/kernel/iousbconfigurationdescriptor/1545938-maxpower)

# MaxPower

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The maximum power consumption of the USB device expressed in 2 milliamp units.

## Declaration

```objectivec
uint8_t MaxPower;
```

<a id="discussion"></a>

## Discussion

A value of 50 indicates that the device consumes a maximum of 100 milliamps of current.

## See Also

### Getting the Properties

- [bLength](1546137-blength.md): The size of the descriptor.
- [bDescriptorType](1546155-bdescriptortype.md): The type of the descriptor.
- [wTotalLength](1546253-wtotallength.md): The total length of the descriptor, including the length of all related interface, endpoint, and vendor-specific descriptors.
- [bNumInterfaces](1546162-bnuminterfaces.md): The number of interfaces this configuration supports.
- [bConfigurationValue](1546567-bconfigurationvalue.md): The value to use when selecting this configuration.
- [iConfiguration](1546218-iconfiguration.md): The index of the string descriptor that describes this configuration.
- [bmAttributes](1546539-bmattributes.md): A bit mask indicating the configuration’s characteristics.
