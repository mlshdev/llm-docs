> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbdevicequalifierdescriptor](https://developer.apple.com/documentation/kernel/iousbdevicequalifierdescriptor)

# IOUSBDeviceQualifierDescriptor

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.2+

The structure for describing a high-speed capable USB device.

## Declaration

```objectivec
typedef struct IOUSBDeviceQualifierDescriptor IOUSBDeviceQualifierDescriptor;
```

<a id="discussion"></a>

## Discussion

For information about this descriptor, see USB 2.0, 9.6.2.

## Topics

### Getting the Properties

- [bLength](iousbdevicequalifierdescriptor/1546586-blength.md): The size of the descriptor.
- [bDescriptorType](iousbdevicequalifierdescriptor/1546232-bdescriptortype.md): The type of the descriptor.
- [bcdUSB](iousbdevicequalifierdescriptor/1546098-bcdusb.md): The USB specification version number.
- [bDeviceClass](iousbdevicequalifierdescriptor/1546116-bdeviceclass.md): The class code.
- [bDeviceSubClass](iousbdevicequalifierdescriptor/1546256-bdevicesubclass.md): The subclass code.
- [bDeviceProtocol](iousbdevicequalifierdescriptor/1546390-bdeviceprotocol.md): The protocol code.
- [bMaxPacketSize0](iousbdevicequalifierdescriptor/1546534-bmaxpacketsize0.md): The maximum packet size for other speed.
- [bNumConfigurations](iousbdevicequalifierdescriptor/1546367-bnumconfigurations.md): The number of other-speed configurations.
- [bReserved](iousbdevicequalifierdescriptor/1546522-breserved.md): Reserved for future use.

## See Also

### Device Descriptors

- [IOUSBDeviceDescriptor](iousbdevicedescriptor.md): The structure for storing a USB device descriptor.
- [IOUSBDeviceDescriptorPtr](iousbdevicedescriptorptr.md): A pointer to a USB device descriptor.
- [IOUSBDeviceQualifierDescriptorPtr](iousbdevicequalifierdescriptorptr.md): A pointer to a qualifier descriptor.

### Related Documentation

- [IOUSBDeviceQualifierDescriptor](https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbdevicequalifierdescriptor)
