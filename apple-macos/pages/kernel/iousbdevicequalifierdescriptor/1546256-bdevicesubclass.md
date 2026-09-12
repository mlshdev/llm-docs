> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbdevicequalifierdescriptor/1546256-bdevicesubclass](https://developer.apple.com/documentation/kernel/iousbdevicequalifierdescriptor/1546256-bdevicesubclass)

# bDeviceSubClass

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.2+

The subclass code.

## Declaration

```objectivec
uint8_t bDeviceSubClass;
```

## See Also

### Getting the Properties

- [bLength](1546586-blength.md): The size of the descriptor.
- [bDescriptorType](1546232-bdescriptortype.md): The type of the descriptor.
- [bcdUSB](1546098-bcdusb.md): The USB specification version number.
- [bDeviceClass](1546116-bdeviceclass.md): The class code.
- [bDeviceProtocol](1546390-bdeviceprotocol.md): The protocol code.
- [bMaxPacketSize0](1546534-bmaxpacketsize0.md): The maximum packet size for other speed.
- [bNumConfigurations](1546367-bnumconfigurations.md): The number of other-speed configurations.
- [bReserved](1546522-breserved.md): Reserved for future use.
