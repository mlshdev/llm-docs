> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbdevicedescriptor/1546557-bdeviceclass](https://developer.apple.com/documentation/kernel/iousbdevicedescriptor/1546557-bdeviceclass)

# bDeviceClass

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The class code indicating the behavior of this device.

## Declaration

```objectivec
uint8_t bDeviceClass;
```

## See Also

### Getting the Device Properties

- [bLength](1546302-blength.md): The size of the descriptor.
- [bDescriptorType](1545902-bdescriptortype.md): The type of the descriptor.
- [bcdUSB](1546010-bcdusb.md): The USB specification version number that the device is compliant with.
- [bDeviceSubClass](1546530-bdevicesubclass.md): The subclass code that further defines the behavior of this device.
- [bDeviceProtocol](1546376-bdeviceprotocol.md): The protocol that the device supports.
- [bMaxPacketSize0](1546126-bmaxpacketsize0.md): An exponent value that specifies the maximum packet size for endpoint `0`.
- [idVendor](1546331-idvendor.md): The ID of the device’s manufacturer.
- [idProduct](1546261-idproduct.md): The product ID that the manufacturer assigns.
- [bcdDevice](1546251-bcddevice.md): The device release number as a binary-coded decimal.
- [iManufacturer](1546249-imanufacturer.md): The index of the string descriptor that describes the manufacturer.
- [iProduct](1546566-iproduct.md): The index of the string descriptor that describes the product.
- [iSerialNumber](1545940-iserialnumber.md): The index of the string descriptor that describes the device’s serial number.
- [bNumConfigurations](1546184-bnumconfigurations.md): The number of configurations that the device supports.
